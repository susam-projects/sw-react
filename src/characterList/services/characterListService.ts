import { toUiCharacter } from '../../common/entity';
import { CharacterListAccessor } from '../accessors/characterListAccessor.ts';
import { ICharacterListPageData } from '../pages/CharacterListPage.types.ts';

export const characterListService = {
  _accessor: new CharacterListAccessor(),
  _requestCount: 0,

  get pageSize() {
    return this._accessor.pageSize;
  },

  get requestCount() {
    return this._requestCount;
  },

  async getData(
    page?: number,
    search?: string,
  ): Promise<ICharacterListPageData> {
    ++this._requestCount;

    try {
      const error = await this._accessor.fetchList(page, search);
      if (error) {
        // show error notification
        return { characters: [], totalCharacters: 0 };
      }
    } catch {
      // the request have really failed, or it was canceled
      return { characters: [], totalCharacters: 0 };
    } finally {
      --this._requestCount;
    }

    const totalCharacters = this._accessor.totalCount;
    const characters = this._accessor.characterList.map(toUiCharacter);
    return { characters, totalCharacters };
  },

  cancelRequest(): void {
    this._accessor.cancelRequest();
  },
};
