import styled from 'styled-components';

// eslint-disable-next-line
export const Wrapper = styled.main`
  margin-left: 0;

  ${({ theme }) => theme.mq.desktop} {
    margin-left: 86px;
  }
`;
