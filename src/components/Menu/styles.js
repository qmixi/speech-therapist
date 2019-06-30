import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  cursor: pointer;
  width: 0;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 9;
  background: white;
  transition: background-color 0.45s ease-in-out,
    width 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0ms,
    transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s linear 0.8s,
    -webkit-opacity 0.6s linear 0.8s;

  ${({ theme }) => theme.mq.desktop} {
    width: 86px;
  }

  ${({ isFull }) => isFull && `width: 100% !important;`}

  ${({ isOpened }) => isOpened && `width: 400px !important;`}
`;

export const Placeholder = styled.div`
  position: absolute;
  width: 0%;
  height: 100%;
  left: 0;
  z-index: 99;
  top: 0;
  background: ${({ theme }) => theme.gray_dark};
  transition: background-color 0.45s ease-in-out,
    width 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0ms,
    transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s linear 0.8s,
    -webkit-opacity 0.6s linear 0.8s;

  ${({ isFull }) =>
    isFull &&
    `transition-delay: 0.045s;
    width: 100%;`}
`;

export const Title = styled.span`
  position: absolute;
  top: 50%;
  font-size: ${({ theme }) => theme.font.size.xxs};
  text-transform: uppercase;
  right: 13px;
  transform: translate(0, -50%) rotate(-90deg);
`;

export const Hamburger = styled.div`
  padding: 15px 10px;
  position: absolute;
  bottom: 25px;
  left: 12px;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const HamburgerInner = styled.div`
  width: 40px;
  height: 3px;
  background-color: ${({ theme }) => theme.text};
  margin: 10px 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.text};
    position: absolute;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }
`;

export const Scene = styled.div`
  position: fixed;
  z-index: 8;
  width: 100vw;
  left: 0;
  top: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-out;

  ${({ isVisible }) =>
    isVisible &&
    `visibility: visible;
  opacity: 1;`}
`;

export const MenuItems = styled.ul`
  padding: 20px 0;
  width: 200px;
  position: absolute;
  top: 50%;
  right: 110px;
  transform: translateY(-50%);
`;
