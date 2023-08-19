import { FC, useEffect, useState } from 'react';
import CharacterList from '../component/CharacterList/CharacterList.tsx';
import characterListService from '../service/characterListService.ts';
import { ICharacter } from './CharacterListPage.types.ts';

const CharacterListPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await characterListService.getData();
      setIsLoading(false);
      setCharacters(data);
    };
    void getData();
  }, []);

  return <CharacterList isLoading={isLoading} characters={characters} />;
};

export default CharacterListPage;
