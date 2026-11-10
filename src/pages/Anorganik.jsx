import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const Anorganik = () => {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate(); // ✅ pakai hook navigasi

  const toggleMusic = () => {
    if (musicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicOn(!musicOn);
  };

  // ✅ Fungsi tombol kembali (pastikan rute "/utama" ada di App.jsx)
  const handleBack = () => {
    navigate("/utama");
  };

  return (
    <div className="app">
      {/* ✅ Navigasi Topbar */}
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

          {/* 🔊 Tombol Musik */}
          <button className="icon-btn" onClick={toggleMusic}>
            {musicOn ? "🔊" : "🔈"}
          </button>
        </div>
      </header>

      {/* 🎵 Elemen audio */}
      <audio ref={audioRef} loop>
        <source src="/music/bgm.mp3" type="audio/mpeg" />
        Browser Anda tidak mendukung pemutar audio.
      </audio>

      {/* ✅ Konten Halaman Anorganik */}
      <div className="page-container">
        <h1>Sampah Anorganik</h1>

        <section>
          <h2>Pengertian</h2>
          <p>
            Sampah anorganik adalah sampah yang berasal dari bahan non-hayati
            seperti plastik, logam, kaca, dan kaleng. Sampah ini sulit terurai
            oleh alam dan membutuhkan waktu ratusan tahun untuk hancur.
          </p>
        </section>

        <section>
          <h2>Jenis</h2>
          <ul>
            <li>Plastik (kantong kresek, botol air mineral)</li>
            <li>Kaca (botol, pecahan kaca)</li>
            <li>Logam (kaleng, besi bekas)</li>
          </ul>
        </section>

        <section>
          <h2>Dampak</h2>
          <p>
            Sampah anorganik dapat mencemari tanah, air, dan udara.
            Pembakaran plastik menghasilkan zat beracun yang berbahaya
            bagi kesehatan dan lingkungan.
          </p>
        </section>

        <section>
          <h2>Cara Mengelola</h2>
          <ol>
            <li>Pisahkan sampah anorganik dari sampah organik.</li>
            <li>Gunakan kembali (reuse) barang yang masih layak.</li>
            <li>Daftarkan ke bank sampah untuk didaur ulang.</li>
          </ol>
        </section>

        {/* 📺 Video Edukasi */}
        <div className="video-section">
          <h3>Video Edukasi</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-jo9aUYf0Nk"
            title="Cara Mengelola Sampah Anorganik"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* ⬅ Tombol Kembali */}
        <div className="button-container">
          <button className="back-button" onClick={handleBack}>
            ⬅ Kembali ke Halaman Utama
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anorganik;
