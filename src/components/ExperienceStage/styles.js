import styled from 'styled-components';

// eslint-disable-next-line
export const Stage = styled.div`
  padding: 20px 0;
  min-height: 250px;
  padding-left: 50px;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.gray};
  }
`;
