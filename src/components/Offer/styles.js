import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  background-color: black;
  overflow: hidden;
  cursor: pointer;

  ${({ theme }) => theme.mq.desktop} {
    min-height: 540px;
  }

  &::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.28;
    transition: all 4s cubic-bezier(0.19, 1, 0.22, 1), 4s;
    background-size: cover;
    background-image: url(${({ image }) => image});
  }

  &:after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -20px;
    height: 100px;
    width: 2px;
    background-color: white;
    transform: rotate(25deg) scaleY(0);
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1), 0.4s;
  }

  &:hover {
    &::before {
      transform: scale(1.3);
      opacity: 0.7;
    }

    &::after {
      transform: rotate(25deg) scaleY(2.5);
    }

    pre {
      left: 75px;
    }
  }
`;

export const Title = styled.pre`
  font-size: ${({ theme }) => theme.font.size.m};
  opacity: 0.8;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.oldStandard};
  color: ${({ theme }) => theme.white};
  line-height: 1;
  margin: 0;
  left: 0;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1), 0.4s;

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    left: 40px;
    bottom: 20px;
    font-size: ${({ theme }) => theme.font.size.l};
  }
`;
