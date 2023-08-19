import { FC, useEffect, useState } from 'react';
import { CharacterList } from '../components/CharacterList/CharacterList.tsx';
import { characterListService } from '../services/characterListService.ts';
import { ICharacter } from './CharacterListPage.types.ts';

export const CharacterListPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await characterListService.getData();
      setIsLoading(false);
      setCharacters(data);
    };
    void getData();

    return () => {
      characterListService.cancelRequest();
    };
  }, []);

  return <CharacterList isLoading={isLoading} characters={characters} />;
};