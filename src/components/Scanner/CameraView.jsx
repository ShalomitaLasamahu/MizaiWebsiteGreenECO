import React, { useRef, useEffect } from "react";

const CameraView = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Akses kamera pengguna
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("Gagal mengakses kamera:", err);
      });
  }, []);

  // Ambil foto dari kamera
  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(onCapture, "image/jpeg");
  };

  return (
    <div className="camera-view">
      <video ref={videoRef} autoPlay playsInline className="camera-feed" />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <button className="scan-btn" onClick={handleCapture}>
        🔍 Scan Sampah
      </button>
    </div>
  );
};

export default CameraView;
