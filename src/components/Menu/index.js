import React, { useState } from 'react';

import MenuItem from 'components/MenuItem';
import {
  Wrapper,
  Placeholder,
  Hamburger,
  HamburgerInner,
  Title,
  Scene,
  MenuItems,
} from './styles';

const Menu = () => {
  const [isOpened, toggleMenu] = useState(false);

  return (
    <>
      <Scene isVisible={isOpened} onClick={() => toggleMenu(false)} />
      <Wrapper isOpened={isOpened} onClick={() => toggleMenu(!isOpened)}>
        <Placeholder />
        <Title>Menu</Title>
        <MenuItems>
          <MenuItem text="Start" />
          <MenuItem text="O mnie" />
          <MenuItem text="Oferta" />
          <MenuItem text="Kontakt" />
        </MenuItems>
        <Hamburger isOpened={isOpened} onClick={() => toggleMenu(!isOpened)}>
          <HamburgerInner />
        </Hamburger>
      </Wrapper>
    </>
  );
};

export default Menu;
