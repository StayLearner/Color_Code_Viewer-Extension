import React, { useState } from 'react';
import "98.css";

function App() {
  const [pickedColors, setPickedColors] = useState(() => {
    return JSON.parse(localStorage.getItem("colors-list")) || [];
  });

  const hexToRgb = (hex) => {
    const bigInt = parseInt(hex.slice(1), 16);
    return `rgb(${(bigInt >> 16) & 255}, ${(bigInt >> 8) & 255}, ${bigInt & 255})`;
  };

  const activateEyeDropper = async () => {
    try {
      const { sRGBHex } = await new window.EyeDropper().open();
      if (!pickedColors.includes(sRGBHex)) {
        const updated = [...pickedColors, sRGBHex];
        setPickedColors(updated);
        localStorage.setItem("colors-list", JSON.stringify(updated));
      }
    } catch (e) { }
  };

  return (
    <div className="window" style={{ width: '320px', margin: '10px' }}>
      <div className="title-bar">
        <div className="title-bar-text">ColorPicker.exe</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p>Select a color from your screen:</p>

        <div className="field-row" style={{ justifyContent: 'center', gap: '10px' }}>
          <button onClick={activateEyeDropper}>Pick Color</button>
          <button onClick={() => {
            const text = pickedColors.join("\n");
            const blob = new Blob([text], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = 'colors.txt';
            a.click();
          }}>Export List</button>
        </div>

        {/* The "Inset" storage area */}
        <div className="sunken-panel" style={{ marginTop: '15px', padding: '10px', height: '150px', overflowY: 'auto' }}>

          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Color</th>
                <th>Hex Code</th>
                <th>RGB Value</th>
              </tr>
            </thead>
            <tbody>
              {pickedColors.map((color, index) => (
                <tr key={index}>
                  <td>
                    <div style={{ width: '12px', height: '12px', backgroundColor: color, border: '1px solid #000' }}></div>
                  </td>
                  <td style={{ cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(color)}>
                    {color}
                  </td>
              <td style={{ cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(hexToRgb(color))}>
                    {hexToRgb(color)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

       
      
      
      <div className="field-row" style={{ marginTop: '10px', justifyContent: 'flex-end' }}>
        <button onClick={() => { setPickedColors([]); localStorage.removeItem("colors-list"); }}>Clear All</button>
      </div>
    </div>
    </div >
  );
}

export default App;