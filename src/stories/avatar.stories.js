import React from 'react';
import Avatar from './avatar';

export default {
  component: Avatar,
  title: 'Avatar',
  excludeStories: /.*Data$/,
};

export const avatarData = {
  initials: 'JS'
};

export const Default = () => {
  return <Avatar avatar={{ ...avatarData }} />;
};
