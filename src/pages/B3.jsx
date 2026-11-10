import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const B3 = () => {
  const [musicOn, setMusicOn] = useState(false);
  const [audio] = useState(
    new Audio("/music/background-music.mp3") // ganti path sesuai file musikmu
  );

  const navigate = useNavigate(); // ✅ pakai useNavigate untuk tombol back

  const toggleMusic = () => {
    if (musicOn) {
      audio.pause();
    } else {
      audio.play();
      audio.loop = true;
    }
    setMusicOn(!musicOn);
  };

  // ✅ Fungsi tombol kembali
  const handleBack = () => {
    navigate("/utama"); // pastikan route ini cocok dengan App.jsx kamu
  };

  return (
    <div className="page-container">
      {/* ✅ TOPBAR NAVIGASI */}
      <header className="topbar">
        <div className="nav-left">
          <button className="nav-btn" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="nav-btn" onClick={() => navigate("/About")}>
            About
          </button>
          <button className="nav-btn" onClick={() => navigate("/Portofolio")}>
            Portofolio
          </button>
          <button className="nav-btn" onClick={() => navigate("/Feedback")}>
            Feedback
          </button>
          <button className="nav-btn" onClick={() => navigate("/Edukasi")}>
            Edukasi
          </button>
        </div>
        <div className="nav-right">
          <button className="icon-btn" onClick={toggleMusic}>
            {musicOn ? "🔊" : "🔈"}
          </button>
        </div>
      </header>

      {/* ✅ ISI HALAMAN B3 */}
      <h1>Sampah B3 (Bahan Berbahaya dan Beracun)</h1>

      <section>
        <h2>Pengertian</h2>
        <p>
          Sampah B3 adalah limbah yang mengandung bahan berbahaya dan beracun
          yang dapat merusak lingkungan serta membahayakan kesehatan manusia,
          hewan, dan tumbuhan.
        </p>
      </section>

      <section>
        <h2>Jenis</h2>
        <ul>
          <li>Baterai bekas, lampu neon, cat, oli, dan pestisida</li>
          <li>Peralatan elektronik rusak (e-waste)</li>
        </ul>
      </section>

      <section>
        <h2>Dampak</h2>
        <p>
          Dapat menyebabkan pencemaran air dan tanah, gangguan pernapasan,
          kanker, hingga kerusakan sistem saraf jika terpapar secara langsung.
        </p>
      </section>

      <section>
        <h2>Cara Mengelola</h2>
        <ol>
          <li>Jangan membuang sampah B3 ke tempat sampah biasa.</li>
          <li>Gunakan tempat khusus limbah B3.</li>
          <li>Laporkan ke dinas lingkungan hidup untuk pengolahan resmi.</li>
        </ol>
      </section>

      {/* ✅ VIDEO EDUKASI */}
      <div className="video-section">
        <h3>Video Edukasi</h3>
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/zQo5Jw-3a-0" // ✅ link embed benar
          title="Cara Mengelola Sampah B3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* ✅ TOMBOL KEMBALI */}
      <div className="button-container">
        <button className="back-button" onClick={handleBack}>
          ⬅ Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default B3;
