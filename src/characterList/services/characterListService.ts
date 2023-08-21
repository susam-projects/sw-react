import { ICharacter, toUiCharacter } from '../../common/entity';
import { CharacterListAccessor } from '../accessors/characterListAccessor.ts';

export const characterListService = {
  _accessor: new CharacterListAccessor(),

  async getData(): Promise<ICharacter[]> {
    const error = await this._accessor.fetchList();
    if (error) {
      // show error notification
      return [];
    }
    return this._accessor.characterList.map(toUiCharacter);
  },

  cancelRequest(): void {
    this._accessor.cancelRequest();
  },
};
