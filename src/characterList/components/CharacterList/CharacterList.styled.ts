import styled from '@emotion/styled';
import { Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';

export const Root = styled.div`
  min-height: 100vh;
  padding: 16px 24px 0;
`;

export const Header = styled(Typography.Title)`
  margin: 0 auto;
  text-align: center;
`;

export const FullPageLoader = styled(Spin)`
  &&&& {
    max-height: 100%;
  }
`;

export const CardLink = styled(Link)`
  display: block;
  height: 100%;
`;
