import { useState, useEffect, useMemo } from "react";
import "98.css";

function App() {
  const [pickedColors, setPickedColors] = useState(() => {
    return JSON.parse(localStorage.getItem("colors-list")) || [];
  });

  const ding = useMemo(() => new Audio("/click.mp3"), []);
  const [isMaximized, setIsMaximized] = useState(false);
  const [toast, setToast] = useState("");
  const handleCopy = (text) => {
    ding.currentTime = 0; // Reset to start in case of rapid clicks
    ding.play().catch((e) => console.log("Audio play blocked by browser"));

    navigator.clipboard.writeText(text);
    setToast(`Copied: ${text}`);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleClose = () => {
    ding.currentTime = 0;
    ding.play();
    setTimeout(() => {
      window.close(); // This tells Chrome to close the extension popup
    }, 200);
  };

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
    } catch (e) {}
  };

  return (
    <div
      className="window"
      style={{
        width: isMaximized ? "750px" : "320px",
        height: isMaximized ? "550px" : "auto",
        transition: "all 0.2s ease-in-out", // Smooth transition
        margin: "10px",
      }}
    >
      {toast && (
        <div
          className="window toast-animation"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            width: "200px",
          }}
        >
          <div
            className="window-body"
            style={{ textAlign: "center", padding: "5px" }}
          >
            <p>{toast}</p>
          </div>
        </div>
      )}

      <div className="title-bar">
        <div className="title-bar-text">ColorPicker.exe</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={() => {
              ding.currentTime = 0;
              ding.play();
              setIsMaximized(false);
            }}/>
          <button
            aria-label="Maximize"
            onClick={() => {
              ding.currentTime = 0;
              ding.play();
              setIsMaximized(true);
            }}
          />
          <button aria-label="Close" onClick={handleClose} />
        </div>
      </div>

      <div className="window-body">
        <p>Select a color from your screen:</p>

        <div
          className="field-row"
          style={{ justifyContent: "center", gap: "10px" }}
        >
          <button
            className="nes-btn is-primary"
            onClick={() => {
              ding.currentTime = 0;
              ding.play();
              activateEyeDropper();
            }}
          >
            Pick Color
          </button>
          <button
            onClick={() => {
              ding.currentTime = 0;
              ding.play();
              const text = pickedColors.join("\n");
              const blob = new Blob([text], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "colors.txt";
              a.click();
            }}
          >
            Export List
          </button>
        </div>

        {/* The "Inset" storage area */}
        <div
          className="sunken-panel"
          style={{
            marginTop: "15px",
            padding: "6px",
            height: "150px",
            overflowY: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0 8px",
            }}
          >
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
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: color,
                        border: "1px solid #000",
                      }}
                    ></div>
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCopy(color)}
                  >
                    <strong>{color}</strong>
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCopy(hexToRgb(color))}
                  >
                    <strong>{hexToRgb(color)}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="field-row"
          style={{ marginTop: "10px", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => {
              ding.currentTime = 0;
              ding.play();
              setPickedColors([]);
              localStorage.removeItem("colors-list");
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
