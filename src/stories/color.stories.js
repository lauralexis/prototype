import React from 'react';
import Color from './color';

export default {
  component: Color,
  title: 'Color',
  excludeStories: /.*Data$/,
};

const colorItemData = [
  {constant: `$color-background`, lightHex: `#FFFFFF`, lightRgba: `rgb(255, 255, 255)`, darkHex: `#262626`, darkRgba: `rgb(38, 38, 38)`, use: `Background of most content`},
  {constant: '$color-background-application', lightHex: '#F5F5F5', lightRgba: 'rgb(245, 245, 245)', darkHex: '#0A0A0A', darkRgba: 'rgb(10, 10, 10)', use: `Platform's grey color background` },
  {constant: '$color-background-corporate', lightHex: '#033D58', lightRgba: 'rgb(3, 61, 88)', darkHex: '#BDCBD1', darkRgba: 'rgb(189, 203, 209)', use: `Background at UX's discretion`},
  {constant: '$color-scrim', lightHex: 'Not Applicable', lightRgba: 'rgba(3, 61, 88, 0.5)', darkHex: 'Not Applicable', darkRgba: 'rgba(189, 203, 209, 0.66)', use: `Scrim color (the semi-transparent layer that goes between a modal and the base page to show the base page isn't active)` },
];

export const colorData = {
  component: 'Background',
  colorItems: colorItemData
};

export const Default = () => {
  return <Color color={{ ...colorData }} />;
};
