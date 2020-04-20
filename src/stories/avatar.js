import React from 'react';

export default function Avatar({ avatar: { initials }}) {
  return (
    <div className="user-avatar">
      <span className="user-avatar__initials"> {initials} </span>
    </div>
  );
}
