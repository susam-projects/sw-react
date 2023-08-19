import { characterListApi, IApiCharacter } from '../../common/api';
import { CharacterListAccessor } from '../accessors/characterListAccessor.ts';
import { ICharacter } from '../pages/CharacterListPage.types.ts';

const toUiCharacter = (data: IApiCharacter): ICharacter => {
  return {
    id: characterListApi.getItemId(data.url || ''),
    name: data.name || '',
    height: data.height || '',
    mass: data.mass || '',
    hairColor: data.hair_color || '',
    skinColor: data.skin_color || '',
    eyeColor: data.eye_color || '',
    birthYear: data.birth_year || '',
    gender: data.gender || '',
  };
};

export const characterListService = {
  _accessor: new CharacterListAccessor(),

  async getData(): Promise<ICharacter[]> {
    const error = await this._accessor.fetchCharacters();
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
