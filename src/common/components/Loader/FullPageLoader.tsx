import { PropsOf } from '@emotion/react';
import styled from '@emotion/styled';
import { Spin } from 'antd';

export const FullPageLoader = styled((props: PropsOf<typeof Spin>) => (
  <Spin size="large" tip="Loading..." {...props} />
))`
  &&&& {
    max-height: 100%;
  }
`;
