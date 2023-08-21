import {
  EMPTY_CHARACTER,
  ICharacter,
  toUiCharacter,
} from '../../common/entity';
import { CharacterDetailsAccessor } from '../accessors/characterDetailsAccessor.ts';

export const characterDetailsService = {
  _accessor: new CharacterDetailsAccessor(),

  async getData(characterId: string): Promise<ICharacter> {
    const error = await this._accessor.fetchEntity(characterId);
    if (error) {
      // show error notification
      return EMPTY_CHARACTER;
    }
    return this._accessor.entity
      ? toUiCharacter(this._accessor.entity)
      : EMPTY_CHARACTER;
  },

  cancelRequest(): void {
    this._accessor.cancelRequest();
  },
};
