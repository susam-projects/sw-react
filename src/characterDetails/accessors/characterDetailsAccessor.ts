import { EntityAccessor } from '../../common/accessors';
import { characterListApi, IApiCharacter } from '../../common/api';
import {
  CharacterDetailsFetchError,
  ICharacterDetailsAccessError,
} from './characterDetailsAccessError.ts';

export class CharacterDetailsAccessor extends EntityAccessor<
  IApiCharacter,
  ICharacterDetailsAccessError
> {
  constructor() {
    super(characterListApi, CharacterDetailsFetchError);
  }
}
