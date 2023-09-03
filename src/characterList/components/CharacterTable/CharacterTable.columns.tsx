import { ColumnsType } from 'antd/lib/table';
import { ICharacter } from '../../../common/entity';

export const characterTableColumns: ColumnsType<ICharacter> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    responsive: ['sm'],
  },
  {
    title: 'Birth Year',
    dataIndex: 'birthYear',
    key: 'birthYear',
    responsive: ['md'],
  },
];

export const characterTableRowKey = 'id';
