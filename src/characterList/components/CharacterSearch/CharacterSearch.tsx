import { ChangeEventHandler, FC, useCallback } from 'react';
import { TableSearch } from '../../../common/components';
import { debounce } from 'lodash';

interface CharacterSearchProps {
  onSearch: (newSearch: string) => void;
}

export const CharacterSearch: FC<CharacterSearchProps> = ({ onSearch }) => {
  const handleChange_ = debounce<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      onSearch(event.target.value || '');
    },
    600,
  );
  // eslint doesn't see the dependencies of a debounced function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(handleChange_, [onSearch]);

  return (
    <TableSearch
      onSearch={onSearch}
      onChange={handleChange}
      placeholder="input character name"
      enterButton="Search"
      allowClear
    />
  );
};
