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
  ) {
    super(EntityFetchError);
  }

  get characterList() {
    return this.data?.results || [];
  }

  get totalCount() {
    return this.data?.count || 0;
  }

  get currentPage() {
    const nextPageNumber = this.api.getPageNumber(this.data?.next || '');
    const prevPageNumber = this.api.getPageNumber(this.data?.previous || '');
    if (Number.isNaN(nextPageNumber) && Number.isNaN(prevPageNumber)) {
      return 1;
    }
    if (!Number.isNaN(prevPageNumber)) {
      return prevPageNumber + 1;
    }
    return nextPageNumber - 1;
  }

  get pageSize() {
    return this.api.getPageSize();
  }

  async fetchList(
    page: number = 1,
    search: string = '',
  ): Promise<null | TListAccessError> {
    let result: Awaited<ReturnType<typeof this.api.fetchPage>>;
    const error = await this.sendRequest(async (abortSignal) => {
      result = await this.api.fetchPage(page, search, abortSignal);
    });
    if (error) return error as TListAccessError;
    return this.processFetchResult(result!);
  }
}
