import React from 'react';

export default function Palette({ color: { color, colorItems }}) {
  return (
    <div>
      <h2 id={`${color}-header`}>{color}</h2>
      <table className="boomi_table_common approved_colors" style= {{tableLayout: 'fixed', width: '100%'}} aria-labelledby={`${color}-header`}>
        <thead style= {{textAlign: 'left'}}>
          <tr>
            <th style= {{width: '10%'}}>Color</th>
            <th style= {{width: '10%'}}>Hex Code</th>
            <th style={{width: '10%'}}>RGB/RGBA Code*</th>
            <th style={{width: '35%'}}>Light Theme Acceptable Uses</th>
            <th style={{width: '35%'}}>Dark Theme Acceptable Uses</th>
          </tr>
        </thead>
        <tbody>
          {colorItems.map((item) => (
            <tr>
              <td>
                <div style= {{backgroundColor: item.rgba, width: '100%', height: '6rem', border: '1px solid #949494'}}></div>
              </td>
              <td>{item.hex}</td>
              <td>{item.rgba}</td>
              <td>
                <ul>
                  {item.lightConstants.map((constant) => (
                    <li>{constant}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {item.darkConstants.map((constant) => (
                    <li>{constant}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
