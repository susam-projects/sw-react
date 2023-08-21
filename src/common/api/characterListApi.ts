import { DateString, Url } from '../utils';
import { IApiList, ListApi } from './base/listApi.ts';
export interface IApiCharacter {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: Url;
  films?: Url[];
  species?: Url[];
  vehicles?: Url[];
  starships?: Url[];
  created?: DateString;
  edited?: DateString;
  url?: Url;
}

export type IApiCharacterList = IApiList<IApiCharacter>;
export const characterListApi = new ListApi<IApiCharacter>('people');
