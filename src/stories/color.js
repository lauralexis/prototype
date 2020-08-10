import React from 'react';

export default function Color({ color: { component, colorItems }}) {
  return (
    <table width="100%" className="boomi_table_common approved_colors" aria-labelledby={`${component}-header`}>
      <thead>
        <tr>
          <th>Constant**</th>
          <th>Light theme swatch <br/> Hex code <br/> RGB/RGBA code*</th>
          <th>Dark theme swatch <br/> Hex code <br/> RGB/RGBA code*</th>
          <th>Acceptable Uses</th>
        </tr>
      </thead>
      <tbody>
        {colorItems.map((item) => (
          <tr>
            <td>{item.constant}</td>
            <td>
              <div style= {{backgroundColor: item.lightRgba, width: '3rem', height: '3rem'}}></div>
              <p>{item.lightHex}</p>
              <p>{item.lightRgba}</p>
            </td>
            <td>
              <div style= {{backgroundColor: item.darkRgba, width: '3rem', height: '3rem'}}></div>
              <p>{item.darkHex}</p>
              <p>{item.darkRgba}</p>
            </td>
            <td>{item.use}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
