import React from 'react';

export default function Color({ color: { component, colorItems }}) {
  return (
    <div>
      <h4 id={`${component}-header`}>{component}</h4>
      <table className="boomi_table_common approved_colors" style= {{tableLayout: 'fixed', width: '100%'}} aria-labelledby={`component-header ${component}-header`}>
        <thead style= {{textAlign: 'left'}}>
          <tr>
            <th style= {{width: '25%'}}>Constant*</th>
            <th style={{width: '20%'}}>Approved Use</th>
            <th style= {{width: '25%'}}>Light Theme Color <br/> Hex Code <br/> RGB/RGBA Code**</th>
            <th style={{width: '25%'}}>Dark Theme Color <br/> Hex Code <br/> RGB/RGBA Code**</th>
          </tr>
        </thead>
        <tbody>
          {colorItems.sort((a, b) => a.constant < b.constant ? -1 : 1).map((item) => (
            <tr>
              <td style={{verticalAlign: 'top'}}>{item.constant}</td>
              <td style={{verticalAlign: 'top'}}>{item.use}</td>
              <td style={{verticalAlign: 'top'}}>
                <div style= {{backgroundColor: item.lightRgba, width: '100%', height: '4rem', border: '1px solid #808080'}}></div>
                <p style={{marginBottom: '0'}}>{item.lightName} {!item.lightNickname ? `` : `\u2014`} {item.lightNickname}</p>
                <p style={{marginBottom: '0'}}>{item.lightHex}</p>
                <p style={{marginBottom: '0'}}>{item.lightRgba}</p>
              </td>
              <td style={{verticalAlign: 'top'}}>
                <div style= {{backgroundColor: item.darkRgba, width: '100%', height: '4rem', border: '1px solid #808080'}}></div>
                <p style={{marginBottom: '0'}}>{item.darkName} {!item.darkNickname ? `` : `\u2014`} {item.darkNickname}</p>
                <p style={{marginBottom: '0'}}>{item.darkHex}</p>
                <p style={{marginBottom: '0'}}>{item.darkRgba}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
