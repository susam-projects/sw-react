import { ICharacter } from '../../../common/entity';
import { ComponentProps, FC } from 'react';
import { Table } from 'antd';
import {
  characterTableColumns,
  characterTableRowKey,
} from './CharacterTable.columns.tsx';
import { useNavigate } from 'react-router-dom';
import { StyledTable } from './CharacterTable.styled.ts';
interface ICharacterTableProps {
  data: ICharacter[];
  isLoading?: boolean;
  totalItems: number;
  page: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
}

type TableProps = ComponentProps<typeof Table<ICharacter>>;

export const CharacterTable: FC<ICharacterTableProps> = ({
  data,
  isLoading,
  totalItems,
  page,
  pageSize,
  onPageChange,
}) => {
  const navigate = useNavigate();

  const onRowClick: TableProps['onRow'] = (character: ICharacter) => ({
    onClick: () => {
      navigate(`/character/${character.id}`);
    },
  });

  return (
    <StyledTable
      dataSource={data}
      columns={characterTableColumns}
      loading={{
        spinning: isLoading,
        tip: 'Loading characters...',
      }}
      rowKey={characterTableRowKey}
      onRow={onRowClick}
      pagination={{
        total: totalItems,
        pageSize,
        current: page,
        showTotal: (total) => `Total ${total} items`,
        onChange: onPageChange,
        showSizeChanger: false,
      }}
    />
  );
};
