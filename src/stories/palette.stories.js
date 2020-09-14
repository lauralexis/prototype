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
    name: `White`,
    nickname: ``,
    lightConstants: [`$color-background`, `$color-background-button-active`, `$color-background-input`, `$color-background-bubble`, `$color-background-menu`, `$color-border-on-inverse-bg`, `$color-font-button-on-inverse-bg`, `$color-font-on-inverse-bg`, `$color-icon-on-inverse-bg`, `$color-outline-focus-on-inverse-bg`, `$color-foreground-masthead`, `$color-foreground-toggle`],
    darkConstants: [`$color-font`, `$color-font-header`, `$color-font-input`, `$color-outline`, `$color-border-table-row-hover`, `$color-foreground-masthead`, `$color-foreground-toggle`],
  },
  {
    hex: `#F5F5F5`,
    rgba: `rgb(245, 245, 245)`,
    name: `Gray 10`,
    nickname: `Pearl`,
    lightConstants: [`$color-background-table-row-striped`, `$color-background-units`, `$color-background-application`],
    darkConstants: [`$color-font-link-hover`],
  },
  {
    hex: `#E5E5E5`,
    rgba: `rgb(229, 229, 229)`,
    name: `Gray 20`,
    nickname: `Platinum`,
    lightConstants: [`$color-background-button-disabled`, `$color-background-input-disabled`, `$color-background-table-header`, `$color-background-toggle-disabled`, `$color-border-button-disabled`],
    darkConstants: [],
  },
  {
    hex: `#CCCCCC`,
    rgba: `rgb(204, 204, 204)`,
    name: `Gray 30`,
    nickname: `Cement`,
    lightConstants: [`$color-border-table`, `$color-border`],
    darkConstants: [],
  },
  {
    hex: `#ABABAB`,
    rgba: `rgb(171, 171, 171)`,
    name: `Gray 40`,
    nickname: `Silver`,
    lightConstants: [],
    darkConstants: [`$color-foreground-toggle-disabled`, `$color-icon-button-disabled`, `$color-font-button-disabled`, `$color-font-input-disabled`, `$color-font-placeholder`, `$color-font-secondary`, `$color-font-tab-disabled`],
  },
  {
    hex: `#808080`,
    rgba: `rgb(128, 128, 128)`,
    name: `Gray 50`,
    nickname: `Middle Gray`,
    lightConstants: [`$color-foreground-toggle-disabled`, `$color-icon-button-disabled`, `$color-background-toggle-deselected`, `$color-border-input`, `$color-border-tertiary`, `$color-icon-process`, `$color-icon-secondary`],
    darkConstants: [`$color-background-toggle-deselected`, `$color-border-input`, `$color-border-tertiary`, `$color-icon-process`, `$color-icon-secondary`],
  },
  {
    hex: `#616161`,
    rgba: `rgb(97, 97, 97)`,
    name: `Gray 60`,
    nickname: `Battleship`,
    lightConstants: [`$color-font-button-disabled`, `$color-font-input-disabled`, `$color-font-placeholder`, `$color-font-secondary`, `$color-font-tab-disabled`],
    darkConstants: [`$color-border-table`],
  },
  {
    hex: `#404040`,
    rgba: `rgb(64, 64, 64)`,
    name: `Gray 70`,
    nickname: `Elephant`,
    lightConstants: [],
    darkConstants: [`$color-background-button-disabled`, `$color-background-input-disabled`, `$color-background-table-header`, `$color-background-toggle-disabled`, `$color-border-button-disabled`, `$color-border`],
  },
  {
    hex: `#262626`,
    rgba: `rgb(38, 38, 38)`,
    name: `Gray 80`,
    nickname: `Asphalt`,
    lightConstants: [`$color-font`, `$color-font-header`, `$color-font-input`, `$color-outline`, `$color-border-table-row-hover`],
    darkConstants: [`$color-background-table-row-striped`, `$color-background-units`, `$color-background-bubble`, `$color-background-menu`, `$color-border-on-inverse-bg`, `$color-font-button-on-inverse-bg`, `$color-font-on-inverse-bg`, `$color-icon-on-inverse-bg`, `$color-outline-focus-on-inverse-bg`],
  },
  {
    hex: `#1A1A1A`,
    rgba: `rgb(26, 26, 26)`,
    name: `Gray 90`,
    nickname: `Charcoal`,
    lightConstants: [`$color-font-link-hover`],
    darkConstants: [`$color-background`, `$color-background-button-active`, `$color-background-input`],
  },
  {
    hex: `#000000`,
    rgba: `rgb(0, 0, 0)`,
    name: `Black`,
    nickname: ``,
    lightConstants: [],
    darkConstants: [`$color-background-application`],
  },
];

const transparenciesColorData = [
  {
    hex: ``,
    rgba: `rgba(255,255,255, 0.15)`,
    name: `White at 15%`,
    nickname: ``,
    lightConstants: [],
    darkConstants: [`$color-alert-dismiss-hover`, `$color-shadow-card`],
  },
  {
    hex: ``,
    rgba: `rgba(0, 0, 0, 0.15)`,
    name: `Black at 15%`,
    nickname: ``,
    lightConstants: [`$color-shadow-nonmodal`, `$color-alert-dismiss-hover`, `$color-shadow-card`],
    darkConstants: [],
  },
  {
    hex: ``,
    rgba: `rgba(0, 0, 0, 0.4)`,
    name: `Black at 40%`,
    nickname: ``,
    lightConstants: [`$color-shadow-modal`],
    darkConstants: [],
  },
  {
    hex: ``,
    rgba: `rgba(0, 0, 0, 0.50)`,
    name: `Black at 50%`,
    nickname: ``,
    lightConstants: [],
    darkConstants: [`$color-shadow-nonmodal`],
  },
  {
    hex: ``,
    rgba: `rgba(0, 0, 0, 0.75)`,
    name: `Black at 75%`,
    nickname: ``,
    lightConstants: [],
    darkConstants: [`$color-shadow-modal`],
  },
  {
    hex: ``,
    rgba: `rgba(189, 203, 209, 0.66)`,
    name: `Navy 30 at 66%`,
    nickname: ``,
    lightConstants: [],
    darkConstants: [`$color-scrim`],
  },
  {
    hex: ``,
    rgba: `rgba(3, 61, 88, 0.5)`,
    name: `Navy 70 at 50%`,
    nickname: ``,
    lightConstants: [`$color-scrim`],
    darkConstants: [],
  },
];

const redColorData = [
  {
    hex: `#F9B8BE`,
    rgba: `rgb(249, 184, 190)`,
    name: `Red 30`,
    nickname: `Ballet Pink`,
    lightConstants: [`$color-background-error`],
    darkConstants: [],
  },
  {
    hex: `#FA8D9A`,
    rgba: `rgb(250, 141, 154)`,
    name: `Red 40`,
    nickname: `Salmon`,
    lightConstants: [],
    darkConstants: [`$color-background-button-risky-hover`, `$color-border-button-risky-hover`],
  },
  {
    hex: `#FA4B6D`,
    rgba: `rgb(250, 75, 109)`,
    name: `Red 50`,
    nickname: `Neon Red`,
    lightConstants: [],
    darkConstants: [`$color-background-button-risky-active`, `$color-border-button-risky-active`, `$color-border-error`, `$color-font-error`, `$color-icon-error`],
  },
  {
    hex: `#C73D58`,
    rgba: `rgb(199, 61, 88)`,
    name: `Red 60`,
    nickname: `Poppy Red`,
    lightConstants: [`$color-background-button-risky-active`, `$color-border-button-risky-active`, `$color-border-error`, `$color-font-error`, `$color-icon-error`],
    darkConstants: [],
  },
  {
    hex: `#8A3243`,
    rgba: `rgb(138, 50, 67)`,
    name: `Red 70`,
    nickname: `Ruby`,
    lightConstants: [`$color-background-button-risky-hover`, `$color-border-button-risky-hover`],
    darkConstants: [`$color-background-error`],
  },
];

const coralColorData = [
  {
    hex: `#FF8F7B`,
    rgba:	`rgb(255, 143, 123)`,
    name: `Coral 40`,
    nickname: `Coral`,
    lightConstants: [`$color-background-avatar-1`],
    darkConstants: [],
  },
  {
    hex: `#D86D5A`,
    rgba:	`rgb(216, 109, 90)`,
    name: `Coral 50`,
    nickname: `Terra Cotta`,
    lightConstants: [],
    darkConstants: [],
  },
  {
    hex: `#B35D4E`,
    rgba:	`rgb(179, 93, 78)`,
    name: `Coral 60`,
    nickname: `Burnt Orange`,
    lightConstants: [],
    darkConstants: [`$color-background-avatar-1`],
  },
];

const yellowColorData = [
  {
    hex: `#FAF4E5`,
    rgba:	`rgb(250, 244, 229)`,
    name: `Yellow 10`,
    nickname: `Beige`,
    lightConstants: [`$color-background-highlight`],
    darkConstants: [],
  },
  {
    hex: `#F4C074`,
    rgba:	`rgb(244, 192, 116)`,
    name: `Yellow 30`,
    nickname: `Mustard`,
    lightConstants: [`$color-background-warning`],
    darkConstants: [],
  },
  {
    hex: `#EFA037`,
    rgba:	`rgb(239, 160, 55)`,
    name: `Yellow 40`,
    nickname: `Marigold`,
    lightConstants: [`$color-background-avatar-3`],
    darkConstants: [],
  },
  {
    hex: `#D1751A`,
    rgba:	`rgb(209, 117, 26)`,
    name: `Yellow 50`,
    nickname: `Amber`,
    lightConstants: [`$color-border-highlight`],
    darkConstants: [`$color-border-highlight`],
  },
  {
    hex: `#9E5F24`,
    rgba:	`rgb(158, 95, 36)`,
    name: `Yellow 60`,
    nickname: `Tan`,
    lightConstants: [],
    darkConstants: [`$color-background-warning`],
  },
  {
    hex: `#704A23`,
    rgba:	`rgb(112, 74, 35)`,
    name: `Yellow 70`,
    nickname: `Brown`,
    lightConstants: [],
    darkConstants: [],
  },
  {
    hex: `#322315`,
    rgba:	`rgb(50, 35, 21)`,
    name: `Yellow 80`,
    nickname: `Coffee`,
    lightConstants: [],
    darkConstants: [`$color-background-highlight`],
  },
];

const greenColorData = [
  {
    hex: `#9BD5B9`,
    rgba: `rgb(155, 213, 185)`,
    name: `Green 30`,
    nickname: `Lichen`,
    lightConstants: [`$color-background-success`],
    darkConstants: [],
  },
  {
    hex: `#0EA076`,
    rgba: `rgb(14, 160, 118)`,
    name: `Green 50`,
    nickname: `Four Leaf Clover`,
    lightConstants: [],
    darkConstants: [`$color-font-success`, `$color-icon-success`],
  },
  {
    hex: `#157E56`,
    rgba: `rgb(21, 126, 86)`,
    name: `Green 60`,
    nickname: `Grass Lawn`,
    lightConstants: [`$color-font-success`, `$color-icon-success`],
    darkConstants: [],
  },
  {
    hex: `#235A41`,
    rgba: `rgb(35, 90, 65)`,
    name: `Green 70`,
    nickname: `Zucchini`,
    lightConstants: [],
    darkConstants: [`$color-background-success`],
  },
];

const aquaColorData = [
  {
    hex: `#B6E5E2`,
    rgba: `rgb(182, 229, 226)`,
    name: `Aqua 30`,
    nickname: `Mint`,
    lightConstants: [`$color-background-button-hover`, `$color-background-menu-hover`, `$color-background-servicenav-hover`],
    darkConstants: [`$color-background-button-action-hover`, `$color-border-button-action-hover`],
  },
  {
    hex: `#56BCBD`,
    rgba:	`rgb(86, 188, 189)`,
    name: `Aqua 40`,
    nickname: `Turquoise`,
    lightConstants: [`$color-background-avatar-2`],
    darkConstants: [],
  },
  {
    hex: `#4C98A2`,
    rgba:	`rgb(76, 152, 162)`,
    name: `Aqua 50`,
    nickname: `Blue Sage`,
    lightConstants: [`$color-icon-misc`],
    darkConstants: [`$color-icon-misc`, `$color-background-focus`, `$color-background-menu-selected`, `$color-background-notification`, `$color-font-link`, `$color-icon-actionable`, `$color-outline-focus`, `$color-shadow-focus`, `$color-shadow-selected`, `$color-background-button-action-active`, `$color-border-button-action-active`],
  },
  {
    hex: `#127B87`,
    rgba:	`rgb(18, 123, 135)`,
    name: `Aqua 60`,
    nickname: `Teal`,
    lightConstants: [`$color-background-focus`, `$color-background-menu-selected`, `$color-background-notification`, `$color-font-link`, `$color-icon-actionable`, `$color-outline-focus`, `$color-shadow-focus`, `$color-shadow-selected`, `$color-background-toggle`],
    darkConstants: [`$color-background-avatar-2`, `$color-background-toggle`],
  },
  {
    hex: `#21454A`,
    rgba:	`rgb(33, 69, 74)`,
    name: `Aqua 70`,
    nickname: `Deep Sea`,
    lightConstants: [],
    darkConstants: [`$color-background-button-hover`, `$color-background-menu-hover`, `$color-background-servicenav-hover`],
  },
];

const navyColorData = [
  {
    hex: `#BDCBD1`,
    rgba:	`rgb(189, 203, 209)`,
    name: `Navy 30`,
    nickname: `Pigeon`,
    lightConstants: [`$color-background-card`, `$color-shadow-hovered`],
    darkConstants: [`$color-background-corporate`, `$color-border-button-active`, `$color-border-button-hover`, `$color-border-button-svg`, `$color-border-corporate`, `$color-border-selected`, `$color-font-button`, `$color-font-corporate`, `$color-icon-actionable-hover`, `$color-icon-button-svg-hover`, `$color-icon-corporate`],
  },
  {
    hex: `#6F939F`,
    rgba:	`rgb(111, 147, 159)`,
    name: `Navy 50`,
    nickname: `Storm Cloud`,
    lightConstants: [`$color-icon-tradingpartners`],
    darkConstants: [`$color-icon-tradingpartners`],
  },
  {
    hex: `#4B778B`,
    rgba:	`rgb(75, 119, 139)`,
    name: `Navy 60`,
    nickname: `Twilight`,
    lightConstants: [`$color-background-button-action-hover`, `$color-border-button-action-hover`, `$color-background-masthead-hover`, `$color-border-card-hover`],
    darkConstants: [`$color-background-masthead-hover`, `$color-border-card-hover`],
  },
  {
    hex: `#033D58`,
    rgba:	`rgb(3, 61, 88)`,
    name: `Navy 70`,
    nickname: `Navy`,
    lightConstants: [`$color-background-button-action-active`, `$color-border-button-action-active`, `$color-background-masthead`, `$color-background-corporate`, `$color-border-button-active`, `$color-border-button-hover`, `$color-border-button-svg`, `$color-border-corporate`, `$color-border-selected`, `$color-font-button`, `$color-font-corporate`, `$color-icon-actionable-hover`, `$color-icon-button-svg-hover`, `$color-icon-corporate`],
    darkConstants: [`$color-shadow-hovered`, `$color-background-card`, `$color-background-masthead`],
  },
];

const blueColorData = [
  {
    hex: `#9DCFF0`,
    rgba:	`rgb(157, 207, 240)`,
    name: `Blue 30`,
    nickname: `Icy Mist`,
    lightConstants: [`$color-background-info`],
    darkConstants: [],
  },
  {
    hex: `#67ABE1`,
    rgba:	`rgb(103, 171, 225)`,
    name: `Blue 40`,
    nickname: `Sky`,
    lightConstants: [`$color-background-avatar-4`],
    darkConstants: [],
  },
  {
    hex: `#3392DB`,
    rgba:	`rgb(51, 146, 219)`,
    name: `Blue 50`,
    nickname: `Cayman`,
    lightConstants: [`$color-icon-connectors`],
    darkConstants: [`$color-icon-connectors`],
  },
  {
    hex: `#1771C4`,
    rgba:	`rgb(23, 113, 196)`,
    name: `Blue 60`,
    nickname: `Ocean`,
    lightConstants: [],
    darkConstants: [`$color-background-avatar-4`],
  },
  {
    hex: `#135097`,
    rgba:	`rgb(19, 80, 151)`,
    name: `Blue 70`,
    nickname: `Denim`,
    lightConstants: [`$color-icon-folders`],
    darkConstants: [`$color-background-info`, `$color-icon-folders`],
  },
];

const purpleColorData = [
  {
    hex: `#B49BC9`,
    rgba:	`rgb(180, 155, 201)`,
    name: `Purple 40`,
    nickname: `Lilac`,
    lightConstants: [`$color-background-avatar-5`],
    darkConstants: [],
  },
  {
    hex: `#8765A6`,
    rgba:	`rgb(135, 101, 166)`,
    name: `Purple 60`,
    nickname: `Grape`,
    lightConstants: [`$color-icon-maps`],
    darkConstants: [`$color-background-avatar-5`, `$color-icon-maps`],
  },
];

const magentaColorData = [
  {
    hex: `#C86CB9`,
    rgba:	`rgb(200, 108, 185)`,
    name: `Magenta 50`,
    nickname: `Orchid`,
    lightConstants: [],
    darkConstants: [`$color-font-code-value`],
  },
  {
    hex: `#9D559B`,
    rgba:	`rgb(157, 85, 155)`,
    name: `Magenta 60`,
    nickname: `Plum`,
    lightConstants: [`$color-font-code-value`, `$color-icon-atoms`],
    darkConstants: [`$color-icon-atoms`, `$color-background-avatar-3`],
  },
];

const constantDefinitionsData = {
  '$color-alert-dismiss-hover': `Hovered and/or focused dismiss button background in alerts`,
  '$color-background': `Default page background`,
  '$color-background-application': `Backmost application background`,
  '$color-background-avatar-1': `Avatar background`,
  '$color-background-avatar-2': `Avatar background`,
  '$color-background-avatar-3': `Avatar background`,
  '$color-background-avatar-4': `Avatar background`,
  '$color-background-avatar-5': `Avatar background`,
  '$color-background-bubble': `Help bubble background`,
  '$color-background-button-action-active': `Primary action button background`,
  '$color-background-button-action-hover': `Primary action button background on hover`,
  '$color-background-button-active': `Default button background`,
  '$color-background-button-disabled': `Disabled button background`,
  '$color-background-button-hover': `Default button background on hover`,
  '$color-background-button-risky-active': `Risky button background`,
  '$color-background-button-risky-hover': `Risky button background on hover`,
  '$color-background-card': `Decorative background of presentation cards`,
  '$color-background-corporate': `Background at UX's discretion`,
  '$color-background-error': `Error alert background`,
  '$color-background-focus': `Radio button and checkbox background on focus`,
  '$color-background-highlight': `Highlighted table row background`,
  '$color-background-info': `Information alert background`,
  '$color-background-input': `Input field background`,
  '$color-background-input-disabled': `Disabled input field background`,
  '$color-background-masthead': `Masthead background`,
  '$color-background-masthead-hover': `Masthead background on hover`,
  '$color-background-menu': `Menu background`,
  '$color-background-menu-hover': `Hovered and/or focused menu option background`,
  '$color-background-menu-selected': `Selected menu option background`,
  '$color-background-notification': `Notification counter background`,
  '$color-background-servicenav-hover': `Service navigation background`,
  '$color-background-success': `Success alert background`,
  '$color-background-table-header': `Table header background`,
  '$color-background-toggle': `Toggle background in the on position`,
  '$color-background-toggle-deselected': `Toggle background in the off position`,
  '$color-background-toggle-disabled': `Disabled toggle background`,
  '$color-background-warning': `Warning alert background`,
  '$color-border': `Standard border`,
  '$color-border-button-action-active': `Primary action button border`,
  '$color-border-button-action-hover': `Primary action button border on hover`,
  '$color-border-button-active': `Default button border`,
  '$color-border-button-disabled': `Disabled button border`,
  '$color-border-button-hover': `Default button border on hover`,
  '$color-border-button-risky-active': `Risky button border`,
  '$color-border-button-risky-hover': `Risky button border on hover`,
  '$color-border-button-svg': `Icon button border`,
  '$color-border-card-hover': `Card border on hover`,
  '$color-border-corporate': `Border at UX's discretion`,
  '$color-border-error': `Border of an input with an error`,
  '$color-border-highlight': `Border of a highlighted table row`,
  '$color-border-input': `Border of input fields, especially text fields`,
  '$color-border-on-inverse-bg': `Border on inverse of theme's default background`,
  '$color-border-selected': `Indicates the tab, toggle, etc. is selected`,
  '$color-border-tertiary': `Border on things like filter dividers`,
  '$color-font': `Standard font color for body copy`,
  '$color-font-button': `Text color for buttons`,
  '$color-font-button-disabled': `Color for text in disabled buttons`,
  '$color-font-button-on-inverse-bg': `Button text on primary action buttons`,
  '$color-font-code-value': `Text color for code values in certain code-displaying components; used at UX's discretion`,
  '$color-font-corporate': `Text color at UX's discretion`,
  '$color-font-error': `Text color for error messages, specifically inputs in an error state`,
  '$color-font-header': `Color for header text`,
  '$color-font-input': `Standard font in inputs`,
  '$color-font-input-disabled': `Color for text in disabled inputs`,
  '$color-font-link': `Text link color`,
  '$color-font-link-hover': `Text link color on hover`,
  '$color-font-on-inverse-bg': `Text on inverse of theme's default background`,
  '$color-font-placeholder': `Placeholder text in text inputs`,
  '$color-font-secondary': `Color for text that requires less attention; used at UX's discretion`,
  '$color-font-success': `Color of text in a success state`,
  '$color-font-tab-disabled': `Color for a disabled tab`,
  '$color-foreground-masthead': `Color of the foreground items in the masthead`,
  '$color-foreground-toggle': `Foreground color of toggle in on and off positions`,
  '$color-foreground-toggle-disabled': `Foreground color of disabled toggle`,
  '$color-icon-actionable': `Icons in icon buttons, links, that take an action`,
  '$color-icon-actionable-hover': `Color of hover state on actionable icons`,
  '$color-icon-atoms': `Icon color for atom-type shapes on the Build canvas and trees`,
  '$color-icon-button-disabled': `Disabled icon button's icon color`,
  '$color-icon-button-svg-hover': `Icon color for icon buttons on hover`,
  '$color-icon-connectors': `Icon color for connector-type shapes on the Build canvas and trees`,
  '$color-icon-corporate': `Color of corporate icons - used at UX discretion`,
  '$color-icon-error': `Text color for error messages, specifically inputs in an error state`,
  '$color-icon-folders': `Icon color for folders on the Build canvas and trees`,
  '$color-icon-maps': `Icon color for maps and related shapes on the Build canvas and trees`,
  '$color-icon-misc': `Icon color for miscellaneous shapes on the Build canvas and trees`,
  '$color-icon-on-inverse-bg': `Icon on on inverse of theme's default background`,
  '$color-icon-process': `Icon color for process shapes on the Build canvas and trees`,
  '$color-icon-secondary': `Color for icons that require less attention; used at UX's discretion`,
  '$color-icon-success': `Color of an icon in a success state`,
  '$color-icon-tradingpartners': `Icon color for trading partner and related shapes on the Build canvas and trees`,
  '$color-outline': `Outline color on hover and focus of menu items`,
  '$color-outline-focus': `Focus state outline color`,
  '$color-outline-focus-on-inverse-bg': `Outline color on focus of primary and risky buttons (inverse of theme's default background)`,
  '$color-border-table-row-hover': `Border color for an active or hovered table row.`,
  '$color-scrim': `Scrim color (the semi-transparent layer that goes between a modal and the base page to show the base page isn't active)`,
  '$color-shadow-card': `Shadow color for cards`,
  '$color-shadow-focus': `Focus state shadow color`,
  '$color-shadow-hovered': `Color of shadow on hover (in use on home page cards)`,
  '$color-shadow-modal': `Shadow for modal dialogs`,
  '$color-shadow-nonmodal': `Shadow for info bubbles and other non-modal dialogs`,
  '$color-shadow-selected': `Color of selected card shadow in one APIM use case (consult with UX before using!)`,
  '$color-background-table-row-striped': `Background color for a striped table row `,
  '$color-background-units': `Background color of input field units`,
  '$color-border-table': `Border color for tables`,
  '$color-background-status-tag-complete': `Background color for complete tag in status bar of cards in Hub`,
  '$color-background-status-tag-loading': `Background color for loading tag in status bar of cards in Hub`,
  '$color-background-status-tag-updateable': `Background color for updateable tag in status bar of cards in Hub`,
  }



export const Gray= () => (
  <Palette color={{ color: 'Gray', colorItems: grayColorData, constantDirectory: constantDefinitionsData }} />
);

export const Transparencies = () => (
  <Palette color={{ color: 'Transparencies', colorItems: transparenciesColorData, constantDirectory: constantDefinitionsData }} />
);

export const Red = () => (
  <Palette color={{ color: 'Red', colorItems: redColorData, constantDirectory: constantDefinitionsData }} />
);

export const Coral = () => (
  <Palette color={{ color: 'Coral', colorItems: coralColorData, constantDirectory: constantDefinitionsData }} />
);

export const Yellow = () => (
  <Palette color={{ color: 'Yellow', colorItems: yellowColorData, constantDirectory: constantDefinitionsData }} />
);

export const Green = () => (
  <Palette color={{ color: 'Green', colorItems: greenColorData, constantDirectory: constantDefinitionsData }} />
);

export const Aqua = () => (
  <Palette color={{ color: 'Aqua', colorItems: aquaColorData, constantDirectory: constantDefinitionsData }} />
);

export const Navy = () => (
  <Palette color={{ color: 'Navy', colorItems: navyColorData, constantDirectory: constantDefinitionsData }} />
);

export const Blue = () => (
  <Palette color={{ color: 'Blue', colorItems: blueColorData, constantDirectory: constantDefinitionsData }} />
);

export const Purple = () => (
  <Palette color={{ color: 'Purple', colorItems: purpleColorData, constantDirectory: constantDefinitionsData }} />
);

export const Magenta = () => (
  <Palette color={{ color: 'Magenta', colorItems: magentaColorData, constantDirectory: constantDefinitionsData }} />
);
