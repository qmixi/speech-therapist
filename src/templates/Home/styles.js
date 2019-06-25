import styled from 'styled-components';
import home from 'assets/images/home.jpg';

export const Container = styled.section`
  padding: 36px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${home});
    background-size: cover;
    opacity: 0.7;
  }

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  left: 0;

  ${({ theme }) => theme.mq.desktop} {
    left: -50px;
  }
`;

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.font.size.m};
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
