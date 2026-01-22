

import React, { useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#090909");

  const setHexColor = () => {
    let hex = "#";
    const hexChars = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      hex += hexChars[Math.floor(Math.random() * 16)];
    }
    setColor(hex);
  };

  const setRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.4s ease",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          padding: "2rem",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          color: "#fff",
          minWidth: "280px",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>🎨 Random Color Generator</h2>

        <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
          <button
            onClick={() => setTypeOfColor("hex")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: typeOfColor === "hex" ? "#22c55e" : "#e5e7eb",
              color: typeOfColor === "hex" ? "#fff" : "#000",
              fontWeight: "500",
            }}
          >
            HEX
          </button>

          <button
            onClick={() => setTypeOfColor("rgb")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: typeOfColor === "rgb" ? "#3b82f6" : "#e5e7eb",
              color: typeOfColor === "rgb" ? "#fff" : "#000",
              fontWeight: "500",
            }}
          >
            RGB
          </button>
        </div>

        <button
          onClick={typeOfColor === "hex" ? setHexColor : setRgbColor}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            background: "#111827",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Generate Random Color
        </button>

        <div
          style={{
            background: "rgba(0,0,0,0.4)",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "1.2rem",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          {color}
        </div>
      </div>
    </div>
  );
}

export default RandomColor;
