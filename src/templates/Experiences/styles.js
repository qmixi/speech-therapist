import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 20px;

  ${({ theme }) => theme.mq.desktop} {
    padding-top: 40px;
  }
`;

export const Header = styled.section`
  padding-left: 20px;

  ${({ theme }) => theme.mq.desktop} {
    padding-left: 40px;
  }
`;
