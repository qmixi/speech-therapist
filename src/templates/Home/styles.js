import styled from 'styled-components';
import home from 'assets/images/home.jpg';

export const StyledWrapper = styled.div`
  padding: 36px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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

export const StyledHeader = styled.h1`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.white};
  font-weight: 300;
  line-height: 1.1;
  display: block;
  margin: 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
    position: relative;
  }
`;
