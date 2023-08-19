import { Id } from '../../common';

export interface IServerCharacter {
  id?: Id;
  name?: string;
}

const characterListAccessor = {
  async fetchCharacters(): Promise<IServerCharacter[]> {
    return Promise.resolve([]);
  },
};

export default characterListAccessor;
