import { ICharacter } from '../../common/entity';

export interface ICharacterListPageData {
  characters: ICharacter[];
  totalCharacters: number;
}
