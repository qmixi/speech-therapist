import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 100%;

  ${({ theme }) => theme.mq.desktop} {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '50%')};
  }
`;
