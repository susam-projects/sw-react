import { characterListApi, IApiCharacterList } from '../../common/api';
import { IApiResponse } from '../../common/api/base/apiRequest.ts';
import {
  CharacterListFetchError,
  CharacterListMultipleRequestsError,
  CharacterListNextError,
  CharacterListPrevError,
  ICharacterListAccessError,
} from './characterListAccessError.ts';

export class CharacterListAccessor {
  private data: IApiCharacterList | null = null;
  private abortController: AbortController | null = null;

  get characterList() {
    return this.data?.results || [];
  }

  cancelRequest(): void {
    this.abortController?.abort();
    this.abortController = null;
  }

  async fetchCharacters(): Promise<null | ICharacterListAccessError> {
    let result: Awaited<ReturnType<typeof characterListApi.fetchFirstPage>>;
    const error = await this.sendRequest(async (abortSignal) => {
      result = await characterListApi.fetchFirstPage(abortSignal);
    });
    if (error) return error;
    return this.processFetchResult(result!);
  }

  async next(): Promise<null | ICharacterListAccessError> {
    if (!this.hasNext()) {
      return new CharacterListNextError();
    }
    let result: Awaited<ReturnType<typeof characterListApi.fetchPage>>;
    const error = await this.sendRequest(async (abortSignal) => {
      result = await characterListApi.fetchPage(this.data!.next!, abortSignal);
    });
    if (error) return error;
    return this.processFetchResult(result!);
  }

  async prev(): Promise<null | ICharacterListAccessError> {
    if (!this.hasPrev()) {
      return new CharacterListPrevError();
    }
    let result: Awaited<ReturnType<typeof characterListApi.fetchPage>>;
    const error = await this.sendRequest(async (abortSignal) => {
      result = await characterListApi.fetchPage(
        this.data!.previous!,
        abortSignal,
      );
    });
    if (error) return error;
    return this.processFetchResult(result!);
  }

  public hasNext() {
    return !!this.data?.next;
  }

  public hasPrev() {
    return !!this.data?.previous;
  }

  private async sendRequest(
    doRequest: (abortSignal: AbortSignal) => Promise<unknown>,
  ) {
    if (this.abortController) {
      return new CharacterListMultipleRequestsError();
    }
    this.abortController = new AbortController();
    await doRequest(this.abortController.signal);
    this.abortController = null;
  }

  private processFetchResult(
    result: IApiResponse<IApiCharacterList>,
  ): null | ICharacterListAccessError {
    if (result.type === 'response') {
      this.data = result.data;
      return null;
    }
    this.data = null;
    return new CharacterListFetchError();
  }
}
