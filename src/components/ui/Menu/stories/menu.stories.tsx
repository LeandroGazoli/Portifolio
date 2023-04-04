import React, { useState, MouseEvent } from 'react';
import Menu from '..';
import MenuItem from '../../MenuItem';

export default {
  title: 'Menu Component',

  component: Menu,
};

export const Template = (args: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  return (
    <>
      <div onClick={handleClick}>teste</div>
      <Menu
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        <MenuItem as="li">Teste de item</MenuItem>
      </Menu>
    </>
  );
};
