import React from 'react';

export default function Palette({ color: { color, colorItems, constantDirectory }}) {
  return (
    <div>
      <h2 id={`${color}-header`}>{color}</h2>
      <table className="boomi_table_common approved_colors" style= {{tableLayout: 'fixed', width: '100%'}} aria-labelledby={`color-header `+`${color}-header`}>
        <thead style= {{textAlign: 'left'}}>
          <tr>
            <th style= {{width: '25%'}}>Color <br/> Hex Code <br/> RGB/RGBA Code*</th>
            <th style={{width: '37.5%'}}>Light Theme Approved Uses**</th>
            <th style={{width: '37.5%'}}>Dark Theme Approved Uses**</th>
          </tr>
        </thead>
        <tbody>
          {colorItems.map((item) => (
            <tr>
              <td style={{verticalAlign: 'top'}}>
                <div style= {{backgroundColor: item.rgba, width: '100%', height: '4rem', border: '1px solid #808080'}}></div>
                <p style={{marginBottom: '0'}}>{item.name} {!item.nickname ? `` : `\u2014`} {item.nickname}</p>
                <p style={{marginBottom: '0'}}>{item.hex}</p>
                <p style={{marginBottom: '0'}}>{item.rgba}</p>
              </td>
              <td style={{verticalAlign: 'top'}}>
                <p>{item.lightConstants.length == 0 ? `None` : ``}</p>
                {item.lightConstants.sort((a, b) => a < b ? -1 : 1).map((constant) => {
                  let thisConstant = constant
                  let constantDescription = constantDirectory[thisConstant]
                  return (
                      <dl>
                        <dt><code>{constant}</code></dt>
                        <dd>{constantDescription}</dd>
                      </dl>
                    );
                })}
              </td>
              <td style={{verticalAlign: 'top'}}>
                <p>{item.darkConstants.length == 0 ? `None` : ``}</p>
                {item.darkConstants.sort((a, b) => a < b ? -1 : 1).map((constant) => {
                  let thisConstant = constant
                  let constantDescription = constantDirectory[thisConstant]
                  return (
                    <dl>
                      <dt><code>{constant}</code></dt>
                      <dd>{constantDescription}</dd>
                    </dl>
                    );
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
