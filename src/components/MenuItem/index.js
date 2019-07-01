import React from 'react';
import { string, func } from 'prop-types';

import { MenuItem as MenuItemStyled, MenuItemSub } from './styles';

const MenuItem = ({ text, onClick }) => {
  return (
    <MenuItemStyled onClick={onClick}>
      <MenuItemSub>{text}</MenuItemSub>
      <MenuItemSub>{text}</MenuItemSub>
    </MenuItemStyled>
  );
};

MenuItem.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
};

export default MenuItem;
