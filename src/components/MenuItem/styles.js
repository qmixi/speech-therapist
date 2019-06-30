import styled from 'styled-components';

export const MenuItem = styled.a`
  display: block;
  color: transparent;
  line-height: 1.4;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  left: 0px;
  font-size: ${({ theme }) => theme.font.size.l};
  transition: all 0.5s cubic-bezier(0.35, 0.74, 0.16, 0.98);

  &:hover {
    span {
      &:nth-child(1) {
        transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1), 0.7s;
        opacity: 0;
        filter: alpha(opacity=0);
      }

      &:nth-child(2) {
        width: 100%;
      }
    }
  }
`;

export const MenuItemSub = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.text_light};
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;

  &:nth-child(2) {
    position: absolute;
    left: 0;
    top: 0;
    color: ${({ theme }) => theme.text};
    width: 0%;
  }
`;
