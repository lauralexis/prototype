import React from 'react';

import Color from './color';

export default {
  component: Color,
  title: 'Color',
  excludeStories: /.*Data$/,
};

export const colorData = {
  name: 'Color Name',
  description: 'Color Description',
  hex: '#000000',
  hsl: 'h: 00, s: 00, l: 00',
};

export const Palette = () => {
  return <Color color={{ ...colorData }} />;
};
