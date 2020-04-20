import React from 'react';
import Grid from './grid';

export default {
  component: Grid,
  title: 'Grid',
  excludeStories: /.*Data$/,
};

const gridItemData = [
  {name: '01', phone: 16, tablet: 16, laptop: 16, desktop: 16 },
  {name: '02', phone: 12, tablet: 14, laptop: 15, desktop: 15 },
  {name: '03', phone: 4, tablet: 2, laptop: 1, desktop: 1 },
  {name: '04', phone: 8, tablet: 12, laptop: 14, desktop: 14 },
  {name: '05', phone: 8, tablet: 4, laptop: 2, desktop: 2 },
  {name: '06', phone: 4, tablet: 10, laptop: 13, desktop: 13 },
  {name: '07', phone: 4, tablet: 6, laptop: 3, desktop: 3 },
  {name: '08', phone: 4, tablet: 8, laptop: 12, desktop: 12 },
  {name: '09', phone: 4, tablet: 8, laptop: 4, desktop: 4 },
  {name: '10', phone: 4, tablet: 2, laptop: 11, desktop: 11 },
  {name: '11', phone: 4, tablet: 2, laptop: 5, desktop: 5 },
  {name: '12', phone: 4, tablet: 2, laptop: 10, desktop: 10 },
  {name: '13', phone: 4, tablet: 2, laptop: 6, desktop: 6 },
  {name: '14', phone: 4, tablet: 2, laptop: 9, desktop: 9 },
  {name: '15', phone: 4, tablet: 2, laptop: 7, desktop: 7 },
  {name: '16', phone: 4, tablet: 2, laptop: 8, desktop: 8 },
  {name: '17', phone: 4, tablet: 2, laptop: 8, desktop: 8 },
];

const fixedGridItemData = [
  {name: '01', phone: 4, tablet: 8, laptop: 4, desktop: 4 },
  {name: '02', phone: 3, tablet: 7, laptop: 4, desktop: 4 },
  {name: '03', phone: 1, tablet: 1, laptop: 4, desktop: 4 },
  {name: '04', phone: 2, tablet: 6, laptop: 4, desktop: 4 },
  {name: '05', phone: 2, tablet: 2, laptop: 4, desktop: 4 },
  {name: '06', phone: 1, tablet: 5, laptop: 4, desktop: 4 },
  {name: '07', phone: 1, tablet: 3, laptop: 4, desktop: 4 },
  {name: '08', phone: 1, tablet: 4, laptop: 4, desktop: 4 },
  {name: '09', phone: 1, tablet: 4, laptop: 4, desktop: 4 },
  {name: '10', phone: 1, tablet: 1, laptop: 4, desktop: 4 },
  {name: '11', phone: 1, tablet: 1, laptop: 4, desktop: 4 },
  {name: '12', phone: 1, tablet: 1, laptop: 4, desktop: 4 },
  {name: '13', phone: 1, tablet: 1, laptop: 4, desktop: 4 },
  {name: '14', phone: 1, tablet: 1, laptop: 4, desktop: 4 },
  {name: '15', phone: 1, tablet: 1, laptop: 4, desktop: 4 },
  {name: '16', phone: 1, tablet: 1, laptop: 4, desktop: 4 },
  {name: '17', phone: 1, tablet: 1, laptop: 4, desktop: 4 },
];

export const gridData = {
  gridVariant: 'grid',
  gridItems: gridItemData
};

export const Default = () => {
  return <Grid grid={{ ...gridData }} />;
};

export const Fixed = () => (
  <Grid grid={{ gridItems: fixedGridItemData, gridVariant: 'fixed-grid' }} />
);
