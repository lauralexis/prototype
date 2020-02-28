import React from 'react';

export default function Menu({ menu: { title, menuItems }}) {
  return (
    <div>
      <a href="https://boomi.com/" aria-haspopup="true" aria-expanded="false"> {title} </a>
      <ul className="menu">
        {menuItems.map((item) => (
          <li> {item} </li>
        ))}
      </ul>
    </div>
  );
}
