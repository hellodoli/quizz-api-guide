import styled from 'styled-components';

export const RowItem = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const RowContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  width: 8rem;
  color: ${({ right }) => right && '#007bff'};
`;
