import React from 'react';

export default function Color({ color: { component, colorItems }}) {
  return (
    <div>
      <h4 id={`${component}-header`}>{component}</h4>
      <table className="boomi_table_common approved_colors" style= {{tableLayout: 'fixed', width: '100%'}} aria-labelledby={`${component}-header`}>
        <thead style= {{textAlign: 'left'}}>
          <tr>
            <th style= {{width: '20%'}}>Constant**</th>
            <th style= {{width: '15%'}}>Light Theme Color <br/> Hex Code <br/> RGB/RGBA Code*</th>
            <th style={{width: '15%'}}>Dark Theme Color <br/> Hex Code <br/> RGB/RGBA Code*</th>
            <th style={{width: '50%'}}>Acceptable Uses</th>
          </tr>
        </thead>
        <tbody>
          {colorItems.map((item) => (
            <tr>
              <td>{item.constant}</td>
              <td>
                <div style= {{backgroundColor: item.lightRgba, width: '6rem', height: '3rem', border: '1px solid #949494'}}></div>
                <p>{item.lightHex}</p>
                <p>{item.lightRgba}</p>
              </td>
              <td>
                <div style= {{backgroundColor: item.darkRgba, width: '6rem', height: '3rem'}}></div>
                <p>{item.darkHex}</p>
                <p>{item.darkRgba}</p>
              </td>
              <td>{item.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
