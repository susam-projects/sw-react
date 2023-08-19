import { IApiList, ListApi } from './base/apiList.ts';
import { IApiCharacter } from './characterApi.ts';

export type IApiCharacterList = IApiList<IApiCharacter>;

export const characterListApi = new ListApi<IApiCharacterList>('people');
