import { FC } from 'react';
import { Button, DatePicker, Space, version } from 'antd';
import { Root } from './CharacterList.styled.ts';
import { ICharacter } from '../../page/CharacterListPage.types.ts';

interface CharacterListProps {
  isLoading: boolean;
  characters: ICharacter[];
}

const CharacterList: FC<CharacterListProps> = () => {
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

export default CharacterList;
