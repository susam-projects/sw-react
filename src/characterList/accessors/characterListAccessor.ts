import { ListAccessor } from '../../common/accessors';
import { characterListApi, IApiCharacter } from '../../common/api';
import {
  CharacterListFetchError,
  ICharacterListAccessError,
} from './characterListAccessError.ts';

export class CharacterListAccessor extends ListAccessor<
  IApiCharacter,
  ICharacterListAccessError
> {
  constructor() {
    super(characterListApi, CharacterListFetchError);
  }
}
