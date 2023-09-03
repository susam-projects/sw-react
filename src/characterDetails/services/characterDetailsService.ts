import {
  EMPTY_CHARACTER,
  ICharacter,
  toUiCharacter,
} from '../../common/entity';
import { CharacterDetailsAccessor } from '../accessors/characterDetailsAccessor.ts';

export const characterDetailsService = {
  _accessor: new CharacterDetailsAccessor(),
  _requestCount: 0,

  get requestCount() {
    return this._requestCount;
  },

  async getData(characterId: string): Promise<ICharacter> {
    ++this._requestCount;

    try {
      const error = await this._accessor.fetchEntity(characterId);
      if (error) {
        // show error notification
        return EMPTY_CHARACTER;
      }
    } catch {
      // the request have really failed, or it was canceled
      return EMPTY_CHARACTER;
    } finally {
      --this._requestCount;
    }

    return this._accessor.entity
      ? toUiCharacter(this._accessor.entity)
      : EMPTY_CHARACTER;
  },

  cancelRequest(): void {
    this._accessor.cancelRequest();
  },
};
