import { IDomainError } from '../../common/utils';

export type ICharacterListAccessError = IDomainError;

// TODO: use i18n
export class CharacterListFetchError implements ICharacterListAccessError {
  message = 'Error fetching characters';
}

export class CharacterListNextError implements ICharacterListAccessError {
  message = "There's no link to previous page";
}

export class CharacterListPrevError implements ICharacterListAccessError {
  message = "There's no link to next page";
}

export class CharacterListMultipleRequestsError
  implements ICharacterListAccessError
{
  message = "Can't send a request when there's another one";
}
