import { IApiList, ListApi } from '../api/base/listApi.ts';
import { Constructor } from '../utils';
import { AccessError } from './BaseAccessError.ts';
import { BaseAccessor } from './BaseAccessor.ts';

export class ListAccessor<
  TEntity,
  TListAccessError extends AccessError,
> extends BaseAccessor<IApiList<TEntity>, TListAccessError> {
  constructor(
    private api: ListApi<TEntity>,
    EntityFetchError: Constructor<TListAccessError>,
    private NextError: Constructor<TListAccessError>,
    private PrevError: Constructor<TListAccessError>,
  ) {
    super(EntityFetchError);
  }

  get characterList() {
    return this.data?.results || [];
  }

  async fetchList(): Promise<null | TListAccessError> {
    let result: Awaited<ReturnType<typeof this.api.fetchFirstPage>>;
    const error = await this.sendRequest(async (abortSignal) => {
      result = await this.api.fetchFirstPage(abortSignal);
    });
    if (error) return error as TListAccessError;
    return this.processFetchResult(result!);
  }

  async fetchNextPage(): Promise<null | TListAccessError> {
    if (!this.hasNextPage()) {
      return new this.NextError();
    }
    let result: Awaited<ReturnType<typeof this.api.fetchPage>>;
    const error = await this.sendRequest(async (abortSignal) => {
      result = await this.api.fetchPage(this.data!.next!, abortSignal);
    });
    if (error) return error as TListAccessError;
    return this.processFetchResult(result!);
  }

  async fetchPrevPage(): Promise<null | TListAccessError> {
    if (!this.hasPrevPage()) {
      return new this.PrevError();
    }
    let result: Awaited<ReturnType<typeof this.api.fetchPage>>;
    const error = await this.sendRequest(async (abortSignal) => {
      result = await this.api.fetchPage(this.data!.previous!, abortSignal);
    });
    if (error) return error as TListAccessError;
    return this.processFetchResult(result!);
  }

  public hasNextPage() {
    return !!this.data?.next;
  }

  public hasPrevPage() {
    return !!this.data?.previous;
  }
}
