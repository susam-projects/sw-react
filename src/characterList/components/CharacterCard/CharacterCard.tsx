import { FC } from 'react';
import { SimpleTable } from '../../../common/components';
import { ICharacter } from '../../../common/entity';
import { StyledCard } from './CharacterCard.styled.ts';

interface ICharacterCardProps {
  data: ICharacter;
}

export const CharacterCard: FC<ICharacterCardProps> = ({ data }) => {
  return (
    <StyledCard title={data.name}>
      <SimpleTable
        data={[
          { fieldName: 'Name:', fieldValue: data.name },
          { fieldName: 'Gender:', fieldValue: data.gender },
          { fieldName: 'Birth year:', fieldValue: data.birthYear },
        ]}
      />
    </StyledCard>
  );
};
