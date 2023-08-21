import { characterListApi, IApiCharacter } from '../api';

export interface ICharacter {
  id: string;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
}

export const EMPTY_CHARACTER: ICharacter = {
  id: '-null-',
  name: '',
  height: '',
  mass: '',
  hairColor: '',
  skinColor: '',
  eyeColor: '',
  birthYear: '',
  gender: '',
};

export const toUiCharacter = (data: IApiCharacter): ICharacter => {
  return {
    id: characterListApi.getItemId(data.url || ''),
    name: data.name || '',
    height: data.height || '',
    mass: data.mass || '',
    hairColor: data.hair_color || '',
    skinColor: data.skin_color || '',
    eyeColor: data.eye_color || '',
    birthYear: data.birth_year || '',
    gender: data.gender || '',
  };
};
