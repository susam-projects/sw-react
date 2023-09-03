import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { Input, Typography } from 'antd';

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const TableHeading = styled(
  (props: ComponentProps<typeof Typography.Title>) => (
    <Typography.Title level={2} {...props} />
  ),
)`
  && {
    margin: 0 1em 0 0;
    white-space: nowrap;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const TableSearch = styled(Input.Search)`
  max-width: 300px;
`;
