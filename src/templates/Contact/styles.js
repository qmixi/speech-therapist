import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 15px;
  background-color: ${({ theme }) => theme.gray_dark};
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    padding: 80px 20px;
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.white};
  line-height: 1.4;
  margin: 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xl};
    padding-bottom: 30px;
  }
`;

export const Link = styled.a`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.white};
  line-height: 1.4;
  text-decoration: none;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export const Info = styled.section`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.text};
  padding: 20px 10px;
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
    padding: 50px 20px;
  }
`;
