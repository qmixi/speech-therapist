import styled from 'styled-components';

export const ModalScene = styled.div`
  position: fixed;
  z-index: 998;
  width: 100vw;
  left: 0;
  top: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  background: ${({ theme }) => theme.white};
  left: 0;
  top: 0;
  z-index: 999;

  ${({ theme }) => theme.mq.desktop} {
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
    width: 600px;
  }
`;

export const Header = styled.div`
  position: relative;
  padding: 20px 20px 18px;
  font-size: ${({ theme }) => theme.font.size.xs};
  background: ${({ theme }) => theme.gray};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export const Content = styled.div`
  padding: 15px;
`;

export const Close = styled.div`
  position: absolute;
  right: 15px;
  top: 5px;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.font.size.m};
  font-family: ${({ theme }) => theme.font.family.lato};
  transform: rotate(45deg);
  cursor: pointer;

  ${({ theme }) => theme.mq.desktop} {
    top: 0;
    font-size: ${({ theme }) => theme.font.size.l};
  }
`;
