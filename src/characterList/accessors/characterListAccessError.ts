import { AccessError } from '../../common/accessors';

export type ICharacterListAccessError = AccessError;

// TODO: use i18n
export class CharacterListFetchError extends AccessError {
  override message = 'Error fetching characters';
}

export class CharacterListNextError extends AccessError {
  override message = "There's no link to previous page";
}

export class CharacterListPrevError extends AccessError {
  override message = "There's no link to next page";
}
