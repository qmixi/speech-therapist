import styled from 'styled-components';

// eslint-disable-next-line
export const Container = styled.section`
  padding-top: 20px;

  ${({ theme }) => theme.mq.desktop} {
    padding-top: 40px;
  }
`;
