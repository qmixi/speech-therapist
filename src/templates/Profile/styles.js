import styled from 'styled-components';

export const Container = styled.section`
  padding: 15px;

  ${({ theme }) => theme.mq.desktop} {
    padding: 40px;
  }
`;

export const Header = styled.div`
  position: relative;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(${props => props.url});
  background-size: cover;
  background-position: center;
  margin: auto;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: calc(50% - 100px);
    top: 50%;
    height: 1px;
    display: block;
    background-color: ${({ theme }) => theme.text_light};
    transform: translateY(-50%);
  }

  &::before {
    left: 20px;
  }

  &::after {
    right: 20px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 180px;
    height: 180px;

    &::before,
    &::after {
      width: calc(50% - 140px);
    }
  }
`;
