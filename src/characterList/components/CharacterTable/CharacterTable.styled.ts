import styled from '@emotion/styled';
import { Table } from 'antd';
import { ICharacter } from '../../../common/entity';

export const StyledTable = styled(Table<ICharacter>)`
  tbody tr {
    cursor: pointer;
  }
`;
