import { ListApi } from '../api/base/listApi.ts';
import { Constructor } from '../utils';
import { AccessError } from './BaseAccessError.ts';
import { BaseAccessor } from './BaseAccessor.ts';

export class EntityAccessor<
  TEntity,
  TEntityAccessError extends AccessError,
> extends BaseAccessor<TEntity, TEntityAccessError> {
  constructor(
    private api: ListApi<TEntity>,
    EntityFetchErrorClass: Constructor<TEntityAccessError>,
  ) {
    super(EntityFetchErrorClass);
  }

  get entity() {
    return this.data;
  }

  async fetchEntity(id: string): Promise<null | TEntityAccessError> {
    let result: Awaited<ReturnType<typeof this.api.fetchItem>>;
    const error = await this.sendRequest(async (abortSignal) => {
      result = await this.api.fetchItem(id, abortSignal);
    });
    if (error) return error as TEntityAccessError;
    return this.processFetchResult(result!);
  }
}
