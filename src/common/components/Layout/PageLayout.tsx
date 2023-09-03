import styled from '@emotion/styled';
import { Typography } from 'antd';
import { PropsOf } from '@emotion/react';
import { Link } from 'react-router-dom';

export const PageRoot = styled.div`
  min-height: 100vh;
  padding: 16px 24px 0;
`;

export const PageHeader = styled(Typography.Title)`
  margin: 0 auto;
  text-align: center;
`;

export const SecondaryTitle = styled(
  (props: PropsOf<typeof Typography.Title>) => (
    <Typography.Title level={2} {...props} />
  ),
)`
  && {
    margin: 0 auto 0.5em;
    text-align: center;
    font-size: 24px;
  }
`;

export const StylelessLink = styled(Link)`
  && {
    color: inherit;
    &:hover {
      color: inherit;
    }
  }
`;
