import styled from 'styled-components';

export const Wrapper = styled.div`
  line-height: 1.5;
  font-size: ${({ theme }) => theme.font.size.xxs};

  ${({ theme }) => theme.mq.desktop} {
    padding: 20px 0;
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

export const Title = styled.span`
  font-weight: bold;
  float: left;
  margin-right: 5px;
`;

export const Content = styled.pre`
  display: block;
  margin: 0;
  font-family: ${({ theme }) => theme.font.family.oldStandard};
  white-space: inherit;
  word-wrap: break-word;
  text-align: justify;

  ${({ theme }) => theme.mq.desktop} {
    white-space: pre-wrap;
  }
`;
