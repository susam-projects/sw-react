import { FC } from 'react';
import { StyledTable, TPadding } from './SimpleTable.styled.ts';

export interface SimpleTableRow {
  fieldName: string;
  fieldValue: string;
}
interface SimpleTableProps {
  data: SimpleTableRow[];
  padding?: TPadding;
}

export const SimpleTable: FC<SimpleTableProps> = ({
  data,
  padding = 'normal',
}) => {
  return (
    <StyledTable padding={padding}>
      <tbody>
        {data.map(({ fieldName, fieldValue }, i) => (
          <tr key={i}>
            <td className="field-name">{fieldName}</td>
            <td className="field-value">{fieldValue}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
