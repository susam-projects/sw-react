import { Col, Row } from 'antd';
import { FC } from 'react';
import { CharacterCard } from './CharacterCard/CharacterCard.tsx';
import {
  CardLink,
  FullPageLoader,
  Header,
  Root,
} from './CharacterList.styled.ts';
import { ICharacter } from '../../pages/CharacterListPage.types.ts';

interface CharacterListProps {
  isLoading: boolean;
  characters: ICharacter[];
}

// TODO: use Layout component

export const CharacterList: FC<CharacterListProps> = ({
  isLoading,
  characters,
}) => {
  return (
    // TODO: use skeletons instead of spinner
    <FullPageLoader size="large" tip="Loading..." spinning={isLoading}>
      <Root>
        <Header>SW Characters</Header>
        <Row gutter={[16, 16]} align="stretch">
          {characters.map((character, i) => (
            <Col
              key={character.id || character.name || i}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={4}
              xxl={2}
            >
              <CardLink to={`/character/${character.id}`}>
                <CharacterCard data={character} />
              </CardLink>
            </Col>
          ))}
        </Row>
      </Root>
    </FullPageLoader>
  );
};
