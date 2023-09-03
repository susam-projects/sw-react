import { AccessError } from '../../common/accessors';

export type ICharacterListAccessError = AccessError;

// TODO: use i18n
export class CharacterListFetchError extends AccessError {
  override message = 'Error fetching characters';
}
