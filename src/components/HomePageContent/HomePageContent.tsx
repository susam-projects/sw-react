import { FC } from 'react';
import { Button, DatePicker, Space, version } from 'antd';
import { Root } from './HomePageContent.styled.ts';

const HomePageContent: FC = () => {
  return (
    <Root>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </Root>
  );
};

export default HomePageContent;
