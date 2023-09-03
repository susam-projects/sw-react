import { FC } from 'react';
import {
  FullPageLoader,
  PageHeader,
  PageRoot,
  SecondaryTitle,
  SimpleTable,
  StylelessLink,
} from '../../../common/components';
import { ICharacter } from '../../../common/entity';
import { PageContent } from './CharacterDetails.styled.ts';

interface ICharacterDetailsProps {
  isLoading: boolean;
  data: ICharacter;
}

export const CharacterDetails: FC<ICharacterDetailsProps> = ({
  isLoading,
  data,
}) => {
  return (
    <PageRoot>
      <PageHeader>
        <StylelessLink to="/">Star Wars Explorer</StylelessLink>
      </PageHeader>
      <SecondaryTitle level={2}>{data.name}</SecondaryTitle>
      <PageContent>
        <FullPageLoader spinning={isLoading} tip="Loading character...">
          <SimpleTable
            padding="wide"
            data={[
              { fieldName: 'Name:', fieldValue: data.name },
              { fieldName: 'Height:', fieldValue: data.height },
              { fieldName: 'Weight:', fieldValue: data.mass },
              { fieldName: 'Hair color:', fieldValue: data.hairColor },
              { fieldName: 'Skin color:', fieldValue: data.skinColor },
              { fieldName: 'Eye color:', fieldValue: data.eyeColor },
              { fieldName: 'Birth year:', fieldValue: data.birthYear },
              { fieldName: 'Gender:', fieldValue: data.gender },
            ]}
          />
        </FullPageLoader>
      </PageContent>
    </PageRoot>
  );
};
