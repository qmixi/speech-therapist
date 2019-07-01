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

  const goToSection = section => {
    toggleFull(true);
    const el = document.querySelector(`#${section}`);

    setTimeout(() => {
      document.documentElement.scrollTop = el.offsetTop;
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
          <MenuItem text="Start" onClick={() => goToSection('home')} />
          <MenuItem text="O mnie" onClick={() => goToSection('profile')} />
          <MenuItem text="Oferta" onClick={() => goToSection('offers')} />
          <MenuItem text="Kontakt" onClick={() => goToSection('contact')} />
        </MenuItems>
        <Hamburger isOpened={isOpened} onClick={() => toggleMenu(!isOpened)}>
          <HamburgerInner />
        </Hamburger>
      </Wrapper>
    </>
  );
};

export default Menu;
