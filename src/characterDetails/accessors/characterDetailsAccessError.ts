import { AccessError } from '../../common/accessors';

export type ICharacterDetailsAccessError = AccessError;

export class CharacterDetailsFetchError extends AccessError {
  override message = 'Error fetching character';
}
