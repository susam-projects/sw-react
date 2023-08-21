import { FC } from 'react';
import {
  FullPageLoader,
  PageHeader,
  PageRoot,
  SimpleTable,
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
    <FullPageLoader spinning={isLoading}>
      <PageRoot>
        <PageHeader>{data.name}</PageHeader>
        <PageContent>
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
        </PageContent>
      </PageRoot>
    </FullPageLoader>
  );
};
