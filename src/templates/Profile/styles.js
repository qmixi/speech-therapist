import styled from 'styled-components';
import avatar from 'assets/images/avatar.jpg';

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
  background: url(${avatar});
  background-size: cover;
  background-position: center -30px;
  margin: auto;

  ${({ theme }) => theme.mq.desktop} {
    width: 180px;
    height: 180px;

    &::before {
      content: '';
      position: absolute;
      width: calc(50% - 140px);
      top: 50%;
      height: 1px;
      display: block;
      background-color: ${({ theme }) => theme.text_light};
      left: 20px;
      transform: translateY(-50%);
    }

    &::after {
      content: '';
      position: absolute;
      width: calc(50% - 140px);
      top: 50%;
      height: 1px;
      display: block;
      background-color: ${({ theme }) => theme.text_light};
      right: 20px;
      transform: translateY(-50%);
    }
  }
`;
