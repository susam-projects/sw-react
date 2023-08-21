import { FC, useEffect, useState } from 'react';
import { EMPTY_CHARACTER, ICharacter } from '../../common/entity';
import { CharacterDetails } from '../components/CharacterDetails/CharacterDetails.tsx';
import { characterDetailsService } from '../services/characterDetailsService.ts';

export const CharacterDetailsPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<ICharacter>(EMPTY_CHARACTER);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await characterDetailsService.getData('23');
      setIsLoading(false);
      setCharacter(data);
    };
    void getData();

    return () => {
      characterDetailsService.cancelRequest();
    };
  }, []);

  return <CharacterDetails isLoading={isLoading} data={character} />;
};
