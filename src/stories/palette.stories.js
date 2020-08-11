import React from 'react';
import Palette from './palette';

export default {
  component: Palette,
  title: 'Palette',
  excludeStories: /.*Data$/,
};

const grayColorData = [
  {
    hex: `#FFFFFF`,
    rgba: `rgb(255, 255, 255)`,
    lightConstants: [`$color-background`, `$color-border-on-inverse-bg`, `$color-outline-focus-on-inverse-bg`, `$color-font-on-inverse-bg`, `$color-icon-on-inverse-bg`, `$color-background-button-active`, `$color-font-button-on-inverse-bg`, `$color-foreground-masthead`, `$color-background-bubble`, `$color-background-input`, `$color-background-menu`, `$color-background-table`, `$color-foreground-toggle`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `#F5F5F5`,
    rgba: `rgb(245, 245, 245)`,
    lightConstants: [`$color-background-application`, `$color-background-table-row-hover`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `#E5E5E5`,
    rgba: `rgb(229, 229, 229)`,
    lightConstants: [`$color-border`, `$color-background-button-disabled`, `$color-border-button-disabled`, `$color-background-input-disabled`, `$color-background-table-header`, `$color-background-toggle-disabled`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `#ABABAB`,
    rgba: `rgb(171, 171, 171)`,
    lightConstants: [`Not Applicable`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `#949494`,
    rgba: `rgb(148, 148, 148)`,
    lightConstants: [`Not Applicable`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `#808080`,
    rgba: `rgb(128, 128, 128)`,
    lightConstants: [`$color-border-tertiary`, `$color-icon-process`, `$color-icon-secondary`, `$color-icon-button-disabled`, `$color-border-input`, `$color-background-toggle-deselected`, `$color-foreground-toggle-disabled`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `#666666`,
    rgba: `rgb(102, 102, 102)`,
    lightConstants: [`$color-font-secondary`, `$color-font-button-disabled`, `$color-font-input-disabled`, `$color-font-placeholder`, `$color-font-tab-disabled`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `#404040`,
    rgba: `rgb(64, 64, 64)`,
    lightConstants: [`Not Applicable`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `#262626`,
    rgba: `rgb(38, 38, 38)`,
    lightConstants: [`$color-outline`, `$color-font`, `$color-font-header`, `$color-font-button`, `$color-font-input`, `$color-outline-table-row-hover`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `#0A0A0A`,
    rgba: `rgb(10, 10, 10)`,
    lightConstants: [`Not Applicable`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
];

const transparenciesColorData = [
  {
    hex: `Not Applicable`,
    rgba: `rgba(255,255,255, 0.15)`,
    lightConstants: [`$color-background`, `$color-border-on-inverse-bg`, `$color-outline-focus-on-inverse-bg`, `$color-font-on-inverse-bg`, `$color-icon-on-inverse-bg`, `$color-background-button-active`, `$color-font-button-on-inverse-bg`, `$color-foreground-masthead`, `$color-background-bubble`, `$color-background-input`, `$color-background-menu`, `$color-background-table`, `$color-foreground-toggle`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `Not Applicable`,
    rgba: `rgba(0, 0, 0, 0.15)`,
    lightConstants: [`$color-background`, `$color-border-on-inverse-bg`, `$color-outline-focus-on-inverse-bg`, `$color-font-on-inverse-bg`, `$color-icon-on-inverse-bg`, `$color-background-button-active`, `$color-font-button-on-inverse-bg`, `$color-foreground-masthead`, `$color-background-bubble`, `$color-background-input`, `$color-background-menu`, `$color-background-table`, `$color-foreground-toggle`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `Not Applicable`,
    rgba: `rgba(0, 0, 0, 0.4)`,
    lightConstants: [`$color-background`, `$color-border-on-inverse-bg`, `$color-outline-focus-on-inverse-bg`, `$color-font-on-inverse-bg`, `$color-icon-on-inverse-bg`, `$color-background-button-active`, `$color-font-button-on-inverse-bg`, `$color-foreground-masthead`, `$color-background-bubble`, `$color-background-input`, `$color-background-menu`, `$color-background-table`, `$color-foreground-toggle`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `Not Applicable`,
    rgba: `rgba(0, 0, 0, 0.50)`,
    lightConstants: [`$color-background`, `$color-border-on-inverse-bg`, `$color-outline-focus-on-inverse-bg`, `$color-font-on-inverse-bg`, `$color-icon-on-inverse-bg`, `$color-background-button-active`, `$color-font-button-on-inverse-bg`, `$color-foreground-masthead`, `$color-background-bubble`, `$color-background-input`, `$color-background-menu`, `$color-background-table`, `$color-foreground-toggle`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `Not Applicable`,
    rgba: `rgba(0, 0, 0, 0.75)`,
    lightConstants: [`$color-background`, `$color-border-on-inverse-bg`, `$color-outline-focus-on-inverse-bg`, `$color-font-on-inverse-bg`, `$color-icon-on-inverse-bg`, `$color-background-button-active`, `$color-font-button-on-inverse-bg`, `$color-foreground-masthead`, `$color-background-bubble`, `$color-background-input`, `$color-background-menu`, `$color-background-table`, `$color-foreground-toggle`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `Not Applicable`,
    rgba: `rgba(189, 203, 209, 0.66)`,
    lightConstants: [`$color-background`, `$color-border-on-inverse-bg`, `$color-outline-focus-on-inverse-bg`, `$color-font-on-inverse-bg`, `$color-icon-on-inverse-bg`, `$color-background-button-active`, `$color-font-button-on-inverse-bg`, `$color-foreground-masthead`, `$color-background-bubble`, `$color-background-input`, `$color-background-menu`, `$color-background-table`, `$color-foreground-toggle`],
    darkConstants: [`Constant 3`, `Constant 4`],
  },
  {
    hex: `Not Applicable`,
    rgba: `rgba(3, 61, 88, 0.5)`,
    lightConstants: [`$color-scrim`],
    darkConstants: [`Not Applicable`],
  },
];

const redColorData = [

];

const coralColorData = [

];

const yellowColorData = [

];

const greenColorData = [

];

const aquaColorData = [

];

const navyColorData = [

];

const blueColorData = [

];

const purpleColorData = [

];

const mulberryColorData = [

];



export const Gray= () => (
  <Palette color={{ color: 'Gray', colorItems: grayColorData }} />
);

export const Transparencies = () => (
  <Palette color={{ color: 'Transparencies', colorItems: transparenciesColorData }} />
);

export const Red = () => (
  <Palette color={{ color: 'Red', colorItems: redColorData }} />
);

export const Coral = () => (
  <Palette color={{ color: 'Coral', colorItems: coralColorData }} />
);

export const Yellow = () => (
  <Palette color={{ color: 'Yellow', colorItems: yellowColorData }} />
);

export const Green = () => (
  <Palette color={{ color: 'Green', colorItems: greenColorData }} />
);

export const Aqua = () => (
  <Palette color={{ color: 'Aqua', colorItems: aquaColorData }} />
);

export const Navy = () => (
  <Palette color={{ color: 'Navy', colorItems: navyColorData }} />
);

export const Blue = () => (
  <Palette color={{ color: 'Blue', colorItems: blueColorData }} />
);

export const Purple = () => (
  <Palette color={{ color: 'Purple', colorItems: purpleColorData }} />
);

export const Mulberry = () => (
  <Palette color={{ color: 'Mulberry', colorItems: mulberryColorData }} />
);
