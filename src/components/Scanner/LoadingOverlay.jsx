import React from "react";

const LoadingOverlay = ({ show }) => {
  if (!show) return null;
  return (
    <div className="loading-overlay">
      <div className="spinner" />
      <p>Memproses gambar...</p>
    </div>
  );
};

export default LoadingOverlay;
