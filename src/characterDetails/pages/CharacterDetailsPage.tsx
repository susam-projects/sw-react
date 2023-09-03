import { FC, useEffect, useState } from 'react';
import { EMPTY_CHARACTER, ICharacter } from '../../common/entity';
import { CharacterDetails } from '../components/CharacterDetails/CharacterDetails.tsx';
import { characterDetailsService } from '../services/characterDetailsService.ts';
import { useParams } from 'react-router-dom';

export const CharacterDetailsPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<ICharacter>(EMPTY_CHARACTER);
  const { id = '' } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await characterDetailsService.getData(id);
      if (!characterDetailsService.requestCount) {
        setIsLoading(false);
        setCharacter(data);
      }
    };
    void getData();

    return () => {
      characterDetailsService.cancelRequest();
    };
  }, [id]);

  return <CharacterDetails isLoading={isLoading} data={character} />;
};
