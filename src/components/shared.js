import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.text};
  padding: 10px 0;
  margin: 10px 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;

export const SubHeading = styled.h3`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.text};
  padding: 10px 0;
  margin: 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export const LightText = styled.h2`
  color: ${({ theme }) => theme.text_light};
  font-size: ${({ theme }) => theme.font.size.xxxs};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`;

export const List = styled.ul`
  padding: 10px;
  line-height: 1.3;
  margin: 0;
`;

export const ListItem = styled.li`
  display: block;
  padding: 5px 5px 5px 20px;
  font-size: ${({ theme }) => theme.font.size.xxxs};
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xxs};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-60%);
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.elements};
  }
`;
