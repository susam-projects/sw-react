import { IApiResponse } from '../api/base/apiRequest.ts';
import { Constructor } from '../utils';
import { AccessError, MultipleRequestsError } from './BaseAccessError.ts';

export abstract class BaseAccessor<TData, TAccessError extends AccessError> {
  protected data: TData | null = null;
  private abortController: AbortController | null = null;
  protected constructor(private EntityFetchError: Constructor<TAccessError>) {}

  cancelRequest(): void {
    this.abortController?.abort();
    this.abortController = null;
  }

  protected async sendRequest(
    doRequest: (abortSignal: AbortSignal) => Promise<unknown>,
  ): Promise<AccessError | undefined> {
    if (this.abortController) {
      return new MultipleRequestsError();
    }
    this.abortController = new AbortController();
    await doRequest(this.abortController.signal);
    this.abortController = null;
  }

  protected processFetchResult(
    result: IApiResponse<TData>,
  ): null | TAccessError {
    if (result.type === 'response') {
      this.data = result.data;
      return null;
    }
    this.data = null;
    return new this.EntityFetchError();
  }
}
