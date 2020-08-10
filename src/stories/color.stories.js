import React from 'react';
import Color from './color';

export default {
  component: Color,
  title: 'Color',
  excludeStories: /.*Data$/,
};

const backgroundColorData = [
  {constant: `$color-background`, lightHex: `#FFFFFF`, lightRgba: `rgb(255, 255, 255)`, darkHex: `#262626`, darkRgba: `rgb(38, 38, 38)`, use: `Background of most content`},
  {constant: '$color-background-application', lightHex: '#F5F5F5', lightRgba: 'rgb(245, 245, 245)', darkHex: '#0A0A0A', darkRgba: 'rgb(10, 10, 10)', use: `Platform's grey color background` },
  {constant: '$color-background-corporate', lightHex: '#033D58', lightRgba: 'rgb(3, 61, 88)', darkHex: '#BDCBD1', darkRgba: 'rgb(189, 203, 209)', use: `Background at UX's discretion`},
  {constant: '$color-scrim', lightHex: 'Not Applicable', lightRgba: 'rgba(3, 61, 88, 0.5)', darkHex: 'Not Applicable', darkRgba: 'rgba(189, 203, 209, 0.66)', use: `Scrim color (the semi-transparent layer that goes between a modal and the base page to show the base page isn't active)` },
];

const borderColorData = [
  {constant: `$color-border`, lightHex: `#E5E5E5`, lightRgba: `rgb(229, 229, 229)`, darkHex: `#404040`, darkRgba: `rgb(64, 64, 64)`, use: `Standard border`},
  {constant: `$color-border-corporate`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#BDCBD1`, darkRgba: `rgb(189, 203, 209)`, use: `Border at UX's discretion`},
  {constant: `$color-border-on-inverse-bg`, lightHex: `#FFFFFF`, lightRgba: `rgb(255, 255, 255)`, darkHex: `#262626`, darkRgba: `rgb(38, 38, 38)`, use: `Border on inverse of theme's default background`},
  {constant: `$color-border-tertiary`, lightHex: `#808080`, lightRgba: `rgb(128, 128, 128)`, darkHex: `#808080`, darkRgba: `rgb(128, 128, 128)`, use: `Border on things like filter dividers`},
];

const focusColorData = [
  {constant: `$color-background-focus`, lightHex: `#127B87`, lightRgba: `rgb(18, 123, 135)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Focus state background for radio buttons and checkboxes`},
  {constant: `$color-outline`, lightHex: `#262626`, lightRgba: `rgb(38, 38, 38)`, darkHex: `#FFFFFF`, darkRgba: `rgb(255, 255, 255)`, use: `Outline color on hover and focus of menu items`},
  {constant: `$color-outline-focus`, lightHex: `#127B87`, lightRgba: `rgb(18, 123, 135)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Focus state outline color`},
  {constant: `$color-outline-focus-on-inverse-bg`, lightHex: `#FFFFFF`, lightRgba: `rgb(255, 255, 255)`, darkHex: `#262626`, darkRgba: `rgb(38, 38, 38)`, use: `Outline color on focus of primary and risky buttons (inverse of theme's default background)`},
  {constant: `$color-shadow-focus`, lightHex: `#127B87`, lightRgba: `rgb(18, 123, 135)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Focus state shadow color`},
];

const fontColorData = [
  {constant: `$color-font`, lightHex: `#262626`, lightRgba: `rgb(38, 38, 38)`, darkHex: `#FFFFFF`, darkRgba: `rgb(255, 255, 255)`, use: `Standard font color for body copy`},
  {constant: `$color-font-code-value`, lightHex: `#9D559B`, lightRgba: `rgb(157, 85, 155)`, darkHex: `#C86CB9`, darkRgba: `rgb(200, 108, 185)`, use: `Text color for code values in certain code-displaying components; used at UX's discretion`},
  {constant: `$color-font-corporate`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#BDCBD1`, darkRgba: `rgb(189, 203, 209)`, use: `Text color at UX's discretion`},
  {constant: `$color-font-header`, lightHex: `#262626`, lightRgba: `rgb(38, 38, 38)`, darkHex: `#FFFFFF`, darkRgba: `rgb(255, 255, 255)`, use: `Color for header text`},
  {constant: `$color-font-on-inverse-bg`, lightHex: `#FFFFFF`, lightRgba: `rgb(255, 255, 255)`, darkHex: `#262626`, darkRgba: `rgb(38, 38, 38)`, use: `Text on inverse of theme's default background`},
  {constant: `$color-font-link`, lightHex: `#127B87`, lightRgba: `rgb(18, 123, 135)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Text link color`},
  {constant: `$color-font-link-hover`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#BDCBD1`, darkRgba: `rgb(189, 203, 209)`, use: `used for disabled buttons`},
  {constant: `$color-font-secondary`, lightHex: `#666666`, lightRgba: `rgb(102, 102, 102)`, darkHex: `#ABABAB`, darkRgba: `rgb(171, 171, 171)`, use: `Color for text that requires less attention; used at UX's discretion`},
];

const iconColorData = [
  {constant: `$color-icon-actionable`, lightHex: `#127B87`, lightRgba: `rgb(18, 123, 135)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Icons in icon buttons, links, that take an action`},
  {constant: `$color-icon-actionable-hover`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#BDCBD1`, darkRgba: `rgb(189, 203, 209)`, use: `Color of hover state on actionable icons`},
  {constant: `$color-icon-atoms`, lightHex: `#9D559B`, lightRgba: `rgb(157, 85, 155)`, darkHex: `#9D559B`, darkRgba: `rgb(157, 85, 155)`, use: `Icon color for atom-type shapes on the Build canvas and trees`},
  {constant: `$color-icon-connectors`, lightHex: `#3392DB`, lightRgba: `rgb(51, 146, 219)`, darkHex: `#3392DB`, darkRgba: `rgb(51, 146, 219)`, use: `Icon color for connector-type shapes on the Build canvas and trees`},
  {constant: `$color-icon-corporate`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#BDCBD1`, darkRgba: `rgb(189, 203, 209)`, use: `Color of corporate icons - used at UX discretion`},
  {constant: `$color-icon-folders`, lightHex: `#135097`, lightRgba: `rgb(19, 80, 151)`, darkHex: `#135097`, darkRgba: `rgb(19, 80, 151)`, use: `Icon color for folders on the Build canvas and trees`},
  {constant: `$color-icon-on-inverse-bg`, lightHex: `#FFFFFF`, lightRgba: `rgb(255, 255, 255)`, darkHex: `#262626`, darkRgba: `rgb(38, 38, 38)`, use: `Icon on on inverse of theme's default background`},
  {constant: `$color-icon-maps`, lightHex: `#8765A6`, lightRgba: `rgb(135, 101, 166)`, darkHex: `#8765A6`, darkRgba: `rgb(135, 101, 166)`, use: `Icon color for maps and related shapes on the Build canvas and trees`},
  {constant: `$color-icon-misc`, lightHex: `#4C98A2`, lightRgba: `rgb(76, 152, 162)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Icon color for miscellaneous shapes on the Build canvas and trees`},
  {constant: `$color-icon-process`, lightHex: `#808080`, lightRgba: `rgb(128, 128, 128)`, darkHex: `#808080`, darkRgba: `rgb(128, 128, 128)`, use: `Icon color for process shapes on the Build canvas and trees`},
  {constant: `$color-icon-secondary`, lightHex: `#808080`, lightRgba: `rgb(128, 128, 128)`, darkHex: `#808080`, darkRgba: `rgb(128, 128, 128)`, use: `Color for icons that require less attention; used at UX's discretion`},
  {constant: `$color-icon-tradingpartners`, lightHex: `#6F939F`, lightRgba: `rgb(111, 147, 159)`, darkHex: `#6F939F`, darkRgba: `rgb(111, 147, 159)`, use: `Icon color for trading partner and related shapes on the Build canvas and trees`},
];

const shadowColorData = [
  {constant: `$color-shadow-hovered`, lightHex: `#BDCBD1`, lightRgba: `rgb(189, 203, 209)`, darkHex: `#244A4F`, darkRgba: `rgb(36, 74, 79)`, use: `Color of shadow on hover (in use on home page cards)`},
  {constant: `$color-shadow-modal`, lightHex: `Not Applicable`, lightRgba: `rgba(0, 0, 0, 0.4)`, darkHex: `Not Applicable`, darkRgba: `rgba(0, 0, 0, 0.75)`, use: `Shadow for modal dialogs`},
  {constant: `$color-shadow-nonmodal`, lightHex: `Not Applicable`, lightRgba: `rgba(0, 0, 0, 0.15)`, darkHex: `Not Applicable`, darkRgba: `rgba(0, 0, 0, 0.50)`, use: `Shadow for info bubbles and other non-modal dialogs`},
  {constant: `$color-shadow-selected`, lightHex: `#127B87`, lightRgba: `rgb(18, 123, 135)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Color of selected card shadow in one APIM use case (consult with UX before using!)`}
];

const alertsColorData = [
  {constant: `$color-alert-dismiss-hover`, lightHex: `Not Applicable`, lightRgba: `rgba(0, 0, 0, 0.15)`, darkHex: `Not Applicable`, darkRgba: `rgba(255,255,255, 0.15)`, use: `Background color of dismiss icon in alerts on hover`},
  {constant: `$color-background-error`, lightHex: `#F9B8BE`, lightRgba: `rgb(249, 184, 190)`, darkHex: `#8A3243`, darkRgba: `rgb(138, 50, 67)`, use: `Background for alerts indicating errors`},
  {constant: `$color-background-highlight`, lightHex: `#FAF4E5`, lightRgba: `rgb(250, 244, 229)`, darkHex: `#432D1A`, darkRgba: `rgb(67, 45, 26)`, use: `Background for highlighted rows and similar statuses`},
  {constant: `$color-background-info`, lightHex: `#9DCFF0`, lightRgba: `rgb(157, 207, 240)`, darkHex: `#135097`, darkRgba: `rgb(19, 80, 151)`, use: `Background for alerts providing information`},
  {constant: `$color-background-notification`, lightHex: `#127B87`, lightRgba: `rgb(18, 123, 135)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Background to notification counters`},
  {constant: `$color-background-success`, lightHex: `#9BD5B9`, lightRgba: `rgb(155, 213, 185)`, darkHex: `#235A41`, darkRgba: `rgb(35, 90, 65)`, use: `Background for alerts indicating success`},
  {constant: `$color-background-warning`, lightHex: `#F4C074`, lightRgba: `rgb(244, 192, 116)`, darkHex: `#A26125`, darkRgba: `rgb(162, 97, 37)`, use: `Background for alerts indicating warnings`},
  {constant: `$color-border-error`, lightHex: `#C73D58`, lightRgba: `rgb(199, 61, 88)`, darkHex: `#FA4B6D`, darkRgba: `rgb(250, 75, 109)`, use: `Border color for inputs in an error state`},
  {constant: `$color-border-highlight`, lightHex: `#D1751A`, lightRgba: `rgb(209, 117, 26)`, darkHex: `#D1751A`, darkRgba: `rgb(209, 117, 26)`, use: `Border used in conjunction with a highlighted row`},
  {constant: `$color-border-selected`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#BDCBD1`, darkRgba: `rgb(189, 203, 209)`, use: `Indicates the tab, toggle, etc. is selected`},
  {constant: `$color-font-error`, lightHex: `#C73D58`, lightRgba: `rgb(199, 61, 88)`, darkHex: `#FA4B6D`, darkRgba: `rgb(250, 75, 109)`, use: `Text color for error messages, specifically inputs in an error state`},
  {constant: `$color-font-success`, lightHex: `#168359`, lightRgba: `rgb(22, 131, 89)`, darkHex: `#0EA076`, darkRgba: `rgb(14, 160, 118)`, use: `Color of text in a success state`},
  {constant: `$color-icon-error`, lightHex: `#C73D58`, lightRgba: `rgb(199, 61, 88)`, darkHex: `#FA4B6D`, darkRgba: `rgb(250, 75, 109)`, use: `Text color for error messages, specifically inputs in an error state`},
  {constant: `$color-icon-success`, lightHex: `#168359`, lightRgba: `rgb(22, 131, 89)`, darkHex: `#0EA076`, darkRgba: `rgb(14, 160, 118)`, use: `Color of an icon in a success state`},
];

const avatarsColorData = [
  {constant: `$color-background-avatar-1`, lightHex: `#FF8F7B`, lightRgba: `rgb(255, 143, 123)`, darkHex: `#B35D4E`, darkRgba: `rgb(179, 93, 78)`, use: `Background color for avatars`},
  {constant: `$color-background-avatar-2`, lightHex: `#56BCBD`, lightRgba: `rgb(86, 188, 189)`, darkHex: `#127B87`, darkRgba: `rgb(18, 123, 135)`, use: `Background color for avatars`},
  {constant: `$color-background-avatar-3`, lightHex: `#EFA037`, lightRgba: `rgb(239, 160, 55)`, darkHex: `#9D559B`, darkRgba: `rgb(157, 85, 155)`, use: `Background color for avatars`},
  {constant: `$color-background-avatar-4`, lightHex: `#67ABE1`, lightRgba: `rgb(103, 171, 225)`, darkHex: `#1771C4`, darkRgba: `rgb(23, 113, 196)`, use: `Background color for avatars`},
  {constant: `$color-background-avatar-5`, lightHex: `#B49BC9`, lightRgba: `rgb(180, 155, 201)`, darkHex: `#8765A6`, darkRgba: `rgb(135, 101, 166)`, use: `Background color for avatars`},
];

const buttonsColorData = [
  {constant: `$color-background-button-action-active`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Background for call-to-action buttons`},
  {constant: `$color-background-button-action-hover`, lightHex: `#4B778B`, lightRgba: `rgb(75, 119, 139)`, darkHex: `#B6E5E2 `, darkRgba: `rgb(182, 229, 226)`, use: `Hover state on background for call-to-action buttons`},
  {constant: `$color-background-button-active`, lightHex: `#FFFFFF`, lightRgba: `rgb(255, 255, 255)`, darkHex: `#262626`, darkRgba: `rgb(38, 38, 38)`, use: `Default button background for non-disabled buttons`},
  {constant: `$color-background-button-disabled`, lightHex: `#E5E5E5`, lightRgba: `rgb(229, 229, 229)`, darkHex: `#404040`, darkRgba: `rgb(64, 64, 64)`, use: `Used for disabled buttons`},
  {constant: `$color-background-button-hover`, lightHex: `#B6E5E2 `, lightRgba: `rgb(182, 229, 226)`, darkHex: `#244A4F`, darkRgba: `rgb(36, 74, 79)`, use: `Hover state on background of default buttons`},
  {constant: `$color-background-button-risky-active`, lightHex: `#C73D58`, lightRgba: `rgb(199, 61, 88)`, darkHex: `#FA4B6D`, darkRgba: `rgb(250, 75, 109)`, use: `Background for risky buttons`},
  {constant: `$color-background-button-risky-hover`, lightHex: `#8A3243`, lightRgba: `rgb(138, 50, 67)`, darkHex: `#FA8D9A`, darkRgba: `rgb(250, 141, 154)`, use: `Hover state on background of risky buttons`},
  {constant: `$color-border-button-action-active`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#4C98A2`, darkRgba: `rgb(76, 152, 162)`, use: `Border color on the call-to-action buttons`},
  {constant: `$color-border-button-action-hover`, lightHex: `#4B778B`, lightRgba: `rgb(75, 119, 139)`, darkHex: `#B6E5E2 `, darkRgba: `rgb(182, 229, 226)`, use: `Hover state on border for call-to-action buttons`},
  {constant: `$color-border-button-active`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#FFFFFF`, darkRgba: `rgb(255, 255, 255)`, use: `Border color for Default button`},
  {constant: `$color-border-button-disabled`, lightHex: `#E5E5E5`, lightRgba: `rgb(229, 229, 229)`, darkHex: `#404040`, darkRgba: `rgb(64, 64, 64)`, use: `Used for disabled buttons`},
  {constant: `$color-border-button-hover`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#FFFFFF`, darkRgba: `rgb(255, 255, 255)`, use: `Hover state on border for a Default button`},
  {constant: `$color-border-button-risky-active`, lightHex: `#C73D58`, lightRgba: `rgb(199, 61, 88)`, darkHex: `#FA4B6D`, darkRgba: `rgb(250, 75, 109)`, use: `Border for risky buttons`},
  {constant: `$color-border-button-risky-hover`, lightHex: `#8A3243`, lightRgba: `rgb(138, 50, 67)`, darkHex: `#FA8D9A`, darkRgba: `rgb(250, 141, 154)`, use: `Hover state on border of risky buttons`},
  {constant: `$color-border-button-svg`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#FFFFFF`, darkRgba: `rgb(255, 255, 255)`, use: `Border color for icon buttons`},
  {constant: `$color-font-button`, lightHex: `#262626`, lightRgba: `rgb(38, 38, 38)`, darkHex: `#FFFFFF`, darkRgba: `rgb(255, 255, 255)`, use: `Text color for buttons`},
  {constant: `$color-font-button-disabled`, lightHex: `#666666`, lightRgba: `rgb(102, 102, 102)`, darkHex: `#ABABAB`, darkRgba: `rgb(171, 171, 171)`, use: `Color for text in disabled buttons`},
  {constant: `$color-icon-button-disabled`, lightHex: `#808080`, lightRgba: `rgb(128, 128, 128)`, darkHex: `#949494`, darkRgba: `rgb(148, 148, 148)`, use: `Disabled icon button's icon color`},
  {constant: `$color-icon-button-svg-hover`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#B6E5E2 `, darkRgba: `rgb(182, 229, 226)`, use: `Icon color for icon buttons on hover`},
  {constant: `$color-font-button-on-inverse-bg`, lightHex: `#FFFFFF`, lightRgba: `rgb(255, 255, 255)`, darkHex: `#262626`, darkRgba: `rgb(38, 38, 38)`, use: `Button text on primary action buttons`},
];

const cardsColorData = [
  {constant: `$color-background-card`, lightHex: `#BDCBD1`, lightRgba: `rgb(189, 203, 209)`, darkHex: `#BDCBD1`, darkRgba: `rgb(189, 203, 209)`, use: `Background of icon in presentation cards`},
  {constant: `$color-border-card-hover`, lightHex: `#4B778B`, lightRgba: `rgb(75, 119, 139)`, darkHex: `#4B778B`, darkRgba: `rgb(75, 119, 139)`, use: `Top border of a card being hovered on`},
  {constant: `$color-shadow-card`, lightHex: `Not Applicable`, lightRgba: `rgba(0, 0, 0, 0.15)`, darkHex: `Not Applicable`, darkRgba: `rgba(255,255,255, 0.15)`, use: `Shadow color for cards`},
];

const headerColorData = [
{constant: `$color-background-masthead`, lightHex: `#033D58`, lightRgba: `rgb(3, 61, 88)`, darkHex: `#033D58`, darkRgba: `rgb(3, 61, 88)`, use: `Background color for the masthead`},
{constant: `$color-background-masthead-hover`, lightHex: `#4B778B`, lightRgba: `rgb(75, 119, 139)`, darkHex: `#4B778B`, darkRgba: `rgb(75, 119, 139)`, use: `Background color for the masthead on hover`},
{constant: `$color-background-servicenav-hover`, lightHex: `#B6E5E2 `, lightRgba: `rgb(182, 229, 226)`, darkHex: `#666666`, darkRgba: `rgb(102, 102, 102)`, use: `Background color for the service navigation on hover`},
{constant: `$color-foreground-masthead`, lightHex: `#FFFFFF`, lightRgba: `rgb(255, 255, 255)`, darkHex: `#FFFFFF`, darkRgba: `rgb(255, 255, 255)`, use: `Color of the foreground items in the masthead`},
];

const bubblesColorData = [
  {},
  {},
];

const inputsColorData = [
  {},
  {},
];

const menusColorData = [
  {},
  {},
];

const tablesColorData = [
  {},
  {},
];

const tabsColorData = [
  {},
  {},
];

const toggleColorData = [
  {},
  {},
];

export const Background = () => (
  <Color color={{ component: 'Background', colorItems: backgroundColorData }} />
);

export const Border = () => (
  <Color color={{ component: 'Border', colorItems: borderColorData }} />
);

export const Focus = () => (
  <Color color={{ component: 'Focus and outline', colorItems: focusColorData }} />
);

export const Font = () => (
  <Color color={{ component: 'Font', colorItems: fontColorData }} />
);

export const Icon = () => (
  <Color color={{ component: 'Icon', colorItems: iconColorData }} />
);

export const Shadow = () => (
  <Color color={{ component: 'Shadow', colorItems: shadowColorData }} />
);

export const Alerts = () => (
  <Color color={{ component: 'Alerts and states', colorItems: alertsColorData }} />
);

export const Avatars = () => (
  <Color color={{ component: 'Avatars', colorItems: avatarsColorData }} />
);

export const Buttons = () => (
  <Color color={{ component: 'Buttons', colorItems: buttonsColorData }} />
);

export const Cards = () => (
  <Color color={{ component: 'Cards', colorItems: cardsColorData }} />
);

export const Header = () => (
  <Color color={{ component: 'Global header', colorItems: headerColorData }} />
);

export const Bubbles = () => (
  <Color color={{ component: 'Help bubbles', colorItems: bubblesColorData }} />
);

export const Inputs = () => (
  <Color color={{ component: 'Inputs', colorItems: inputsColorData }} />
);

export const Menus = () => (
  <Color color={{ component: 'Menus', colorItems: menusColorData }} />
);

export const Tables = () => (
  <Color color={{ component: 'Tables', colorItems: tablesColorData }} />
);

export const Tabs = () => (
  <Color color={{ component: 'Tabs', colorItems: tabsColorData }} />
);

export const Toggle = () => (
  <Color color={{ component: 'Toggle', colorItems: toggleColorData }} />
);
