import { DateString, Url } from '../utils';

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

// const d = {
//   name: 'Wilhuff Tarkin',
//   height: '180',
//   mass: 'unknown',
//   hair_color: 'auburn, grey',
//   skin_color: 'fair',
//   eye_color: 'blue',
//   birth_year: '64BBY',
//   gender: 'male',
//   homeworld: 'https://swapi.dev/api/planets/21/',
//   films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/6/'],
//   species: [],
//   vehicles: [],
//   starships: [],
//   created: '2014-12-10T16:26:56.138000Z',
//   edited: '2014-12-20T21:17:50.330000Z',
//   url: 'https://swapi.dev/api/people/12/',
// };
