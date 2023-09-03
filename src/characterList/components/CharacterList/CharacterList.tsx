import { FC } from 'react';
import {
  PageHeader,
  PageRoot,
  TableHeader,
  TableHeading,
} from '../../../common/components';
import { ICharacter } from '../../../common/entity';
import { CharacterTable } from '../CharacterTable/CharacterTable.tsx';
import { CharacterTableWrapper } from './CharacterList.styled.ts';
import { CharacterSearch } from '../CharacterSearch/CharacterSearch.tsx';

interface CharacterListProps {
  isLoading: boolean;
  characters: ICharacter[];
  totalCharacters: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
  onSearch: (newSearch: string) => void;
}

// TODO: use Layout component

export const CharacterList: FC<CharacterListProps> = ({
  isLoading,
  characters,
  totalCharacters,
  currentPage,
  pageSize,
  onPageChange,
  onSearch,
}) => {
  return (
    <PageRoot>
      <PageHeader>Star Wars Explorer</PageHeader>
      <CharacterTableWrapper>
        <TableHeader>
          <TableHeading>characters</TableHeading>
          <CharacterSearch onSearch={onSearch} />
        </TableHeader>
        <CharacterTable
          data={characters}
          isLoading={isLoading}
          totalItems={totalCharacters}
          page={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </CharacterTableWrapper>
    </PageRoot>
  );
};
