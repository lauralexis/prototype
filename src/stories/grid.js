import React from 'react';

export default function Grid({ grid: { gridVariant, gridItems }}) {
  return (
    <div className= {`qm-l-${gridVariant} qm-l-container--maxw--margined-padded`}>
      {gridItems.map((item) => (
        <div className= {`demo-grid__item qm-l-col-${item.phone} qm-l-col-tablet-${item.tablet} qm-l-col-laptop-${item.laptop} qm-l-col-desktop-${item.desktop}`}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
