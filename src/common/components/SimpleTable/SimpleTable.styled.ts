import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type TPadding = 'normal' | 'wide';
export const StyledTable = styled.table<{ padding: TPadding }>(
  ({ padding }) => css`
    .field-name {
      padding-right: ${padding === 'wide' ? '80px' : '24px'};
    }
  `,
);
