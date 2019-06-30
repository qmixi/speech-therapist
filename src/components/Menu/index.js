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
  const [isFull, toggleFull] = useState(false);

  const goToSection = () => {
    toggleFull(true);

    setTimeout(() => {
      toggleFull(false);
    }, 700);
  };

  return (
    <>
      <Scene isVisible={isOpened} onClick={() => toggleMenu(false)} />
      <Wrapper
        isOpened={isOpened}
        isFull={isFull}
        onClick={() => toggleMenu(!isOpened)}
      >
        <Placeholder isFull={isFull} />
        <Title>Menu</Title>
        <MenuItems>
          <MenuItem text="Start" onClick={() => goToSection('')} />
          <MenuItem text="O mnie" onClick={() => goToSection('')} />
          <MenuItem text="Oferta" onClick={() => goToSection('')} />
          <MenuItem text="Kontakt" onClick={() => goToSection('')} />
        </MenuItems>
        <Hamburger isOpened={isOpened} onClick={() => toggleMenu(!isOpened)}>
          <HamburgerInner />
        </Hamburger>
      </Wrapper>
    </>
  );
};

export default Menu;
