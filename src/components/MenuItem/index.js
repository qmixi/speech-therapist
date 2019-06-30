import React from 'react';
import { string } from 'prop-types';

import { MenuItem as MenuItemStyled, MenuItemSub } from './styles';

const MenuItem = ({ text }) => {
  return (
    <MenuItemStyled>
      <MenuItemSub>{text}</MenuItemSub>
      <MenuItemSub>{text}</MenuItemSub>
    </MenuItemStyled>
  );
};

MenuItem.propTypes = {
  text: string.isRequired,
};

export default MenuItem;
