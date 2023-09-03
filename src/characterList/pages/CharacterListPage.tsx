import { FC, useCallback, useEffect, useState } from 'react';
import { ICharacter } from '../../common/entity';
import { CharacterList } from '../components/CharacterList/CharacterList.tsx';
import { characterListService } from '../services/characterListService.ts';

export const CharacterListPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [totalCharacters, setTotalCharacters] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState('');

  const getData_ = async (page?: number, search?: string) => {
    setIsLoading(true);
    const data = await characterListService.getData(page, search);
    setCharacters(data.characters);
    setTotalCharacters(data.totalCharacters);
    if (!characterListService.requestCount) {
      setIsLoading(false);
    }
  };
  const getData = useCallback(getData_, []);

  const onChange = () => {
    void getData(currentPage, currentSearch);
    return () => {
      characterListService.cancelRequest();
    };
  };
  // only on getData parameters change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onChange, [currentPage, currentSearch]);

  const onPageChange_ = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const onPageChange = useCallback(onPageChange_, []);

  const onSearch_ = (newSearch: string) => {
    setCurrentSearch(newSearch);
    setCurrentPage(1);
  };
  const onSearch = useCallback(onSearch_, []);

  return (
    <CharacterList
      isLoading={isLoading}
      characters={characters}
      totalCharacters={totalCharacters}
      currentPage={currentPage}
      pageSize={characterListService.pageSize}
      onPageChange={onPageChange}
      onSearch={onSearch}
    />
  );
};
