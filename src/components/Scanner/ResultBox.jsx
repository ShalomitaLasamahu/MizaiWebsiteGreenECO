import React from "react";

const ResultBox = ({ result }) => {
  if (!result) return null;

  let color = "#4caf50";
  if (result === "Anorganik") color = "#2196f3";
  if (result === "B3") color = "#ff5722";

  return (
    <div className="result-box" style={{ borderColor: color }}>
      <h3>Hasil Deteksi</h3>
      <p style={{ color }}>{result}</p>
    </div>
  );
};

export default ResultBox;
