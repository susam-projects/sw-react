import { FC } from 'react';
import { ICharacter } from '../../../pages/CharacterListPage.types.ts';
import { CardContent, StyledCard } from './CharacterCard.styled.ts';

interface ICharacterCardProps {
  data: ICharacter;
}

const TableRow: FC<{ name: string; description: string }> = ({
  name,
  description,
}) => {
  return (
    <tr>
      <td className="field-name">{name}</td>
      <td className="field-value">{description}</td>
    </tr>
  );
};

export const CharacterCard: FC<ICharacterCardProps> = ({ data }) => {
  return (
    <StyledCard title={data.name}>
      <CardContent>
        <table>
          <tbody>
            <TableRow name="Name:" description={data.name} />
            <TableRow name="Height" description={data.height} />
            <TableRow name="Weight" description={data.mass} />
            <TableRow name="Hair color:" description={data.hairColor} />
            <TableRow name="Skin color:" description={data.skinColor} />
            <TableRow name="Eye color:" description={data.eyeColor} />
            <TableRow name="Birth year" description={data.birthYear} />
            <TableRow name="Gender" description={data.gender} />
          </tbody>
        </table>
      </CardContent>
    </StyledCard>
  );
};
