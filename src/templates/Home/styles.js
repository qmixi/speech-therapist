import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const Container = styled(BackgroundImage)`
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    height: 100vh;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  left: 0;
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    left: -110px;
    text-align: left;
  }
`;

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.white};

  line-height: 1.1;
  display: block;
  margin: 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.l};
  }

  ${({ theme }) => theme.mq.large} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

export const SubHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.white};
  line-height: 1.1;
  display: block;
  margin: 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;
