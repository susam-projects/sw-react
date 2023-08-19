import characterListAccessor, {
  IServerCharacter,
} from '../accessor/characterListAccessor.ts';
import { ICharacter } from '../page/CharacterListPage.types.ts';

const toUiCharacter = (data: IServerCharacter): ICharacter => {
  return {
    id: data.id || '',
    name: data.name || '',
  };
};

const characterListService = {
  async getData(): Promise<ICharacter[]> {
    const serverCharacters = await characterListAccessor.fetchCharacters();
    return serverCharacters.map(toUiCharacter);
  },
};

export default characterListService;
