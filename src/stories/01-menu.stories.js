import React from 'react';
import Menu from './menu';

export default {
  component: Menu,
  title: 'Menu',
  excludeStories: /.*Data$/,
};

const menuItemData = [
  'Sub-menu item 01',
  'Sub-menu item 02',
  'Sub-menu item 03',
  'Sub-menu item 04',
  'Sub-menu item 05',
  'Sub-menu item 06',
];

export const menuData = {
  title: 'Menu trigger',
  menuItems: menuItemData
};

export const Default = () => {
  return <Menu menu={{ ...menuData }} />;
};
