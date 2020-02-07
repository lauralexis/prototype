import React from 'react';
// import './color.scss';

export default function Color({ color: { name, description, hex, hsl } }) {
  return (
    <div className="color">
      <div className="color__swatch"></div>
      <h1> {name} </h1>
    </div>
  );
}
