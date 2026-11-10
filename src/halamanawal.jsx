import React from "react";
import { useNavigate } from "react-router-dom";
import "./halamanawal.css";

export default function HalamanAwal({ musicOn, toggleMusic, audioRef }) {
    const navigate = useNavigate();

    return (
        <div className="app landing-page">
            {/* Header Minimalis: Logo + Volume */}
            <header className="minimal-header">
                <div className="logo">
                    <img src="/logo_removebg.png" alt="MIZAI Logo" />
                    <h1>MIZAI</h1>
                </div>
                <button className="icon-btn volume-btn" onClick={toggleMusic}>
                    {musicOn ? "🔊" : "🔈"}
                </button>
            </header>

<div className="bg-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
    </div>

            {/* Hero Section seperti referensi */}
            <main className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h2>YOU GOT A TICKET TO THE</h2>
                        <h1>GREEN PARADISE</h1>
                        <p>TOUCH THE WORLD OF SUSTAINABILITY</p>
                    </div>
                    
                    <div className="cta-section">
                        <p className="tagline">Eco-Friendly Solutions for You</p>
                        <button className="start-btn" onClick={() => navigate("/utama")}>
                            START YOUR JOURNEY
                        </button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/background2.jpg" alt="Eco Illustration" />
                </div>
            </main>

            {/* Features Section */}
            <section className="features">
                <div className="feature-card">
                    <h3>🌱 QUALITY</h3>
                    <p>Educational content curated by experts</p>
                </div>
                <div className="feature-card">
                    <h3>♻️ UNIQUE PROJECT</h3>
                    <p>For 10 years, we've been growing knowledge</p>
                </div>
                <div className="feature-card">
                    <h3>📱 PLANT TEST</h3>
                    <p>Source of information on waste sorting and management</p>
                </div>
            </section>

            <footer className="minimal-footer">
                © {new Date().getFullYear()} Mizai - Green Ecosystem
            </footer>

            <audio ref={audioRef} src="/music.mp3" loop />
        </div>
    );
}