import styled from 'styled-components';

export const Container = styled.section`
  padding: 15px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.pre`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font.family.oldStandard};
  text-align: center;
  line-height: 1.4;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export const Author = styled.span`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.text};
  padding: 20px 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;
