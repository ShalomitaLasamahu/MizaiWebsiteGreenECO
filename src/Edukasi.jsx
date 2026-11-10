import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Edukasi.css";

export default function Edukasi() {
    const navigate = useNavigate();
    const [showQuiz, setShowQuiz] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [activeTab, setActiveTab] = useState("infografis");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [musicOn, setMusicOn] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMusic = () => {
        setMusicOn(!musicOn);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const questions = [
        {
            question: "Apa yang dimaksud dengan daur ulang?",
            options: [
                "Membuang sampah sembarangan", 
                "Menggunakan kembali barang bekas", 
                "Membakar sampah", 
                "Membuang sampah ke laut"
            ],
            answer: 1,
        },
        {
            question: "Manakah yang termasuk sampah organik?",
            options: ["Plastik", "Kertas", "Sisa makanan", "Kaleng"],
            answer: 2,
        },
        {
            question: "Apa warna tempat sampah untuk sampah plastik?",
            options: ["Hijau", "Kuning", "Biru", "Merah"],
            answer: 1,
        },
        {
            question: "Berapa lama sampah plastik terurai di alam?",
            options: ["5-10 tahun", "20-50 tahun", "100-500 tahun", "1000 tahun"],
            answer: 2,
        },
        {
            question: "Manakah yang BUKAN termasuk 3R?",
            options: ["Reduce", "Reuse", "Recycle", "Remove"],
            answer: 3,
        }
    ];

    const wasteFacts = [
        {
            icon: "🔄",
            title: "Daur Ulang 1 Ton Kertas",
            fact: "Menyelamatkan 17 pohon dan menghemat 26.000 liter air"
        },
        {
            icon: "⏰",
            title: "Waktu Terurai Sampah",
            fact: "Plastik: 100-500 tahun | Kaca: 1 juta tahun | Styrofoam: Tidak terurai"
        },
        {
            icon: "🌍",
            title: "Dampak Global",
            fact: "Setiap tahun, 8 juta ton plastik berakhir di lautan"
        },
        {
            icon: "💡",
            title: "Fakta Menarik",
            fact: "Botol plastik bisa didaur ulang menjadi kain polar untuk jaket"
        }
    ];

    const tipsData = [
        {
            icon: "🛍️",
            tip: "Bawa tas belanja sendiri untuk mengurangi plastik"
        },
        {
            icon: "🍱",
            tip: "Gunakan wadah makanan reusable daripada styrofoam"
        },
        {
            icon: "📱",
            tip: "Unduh aplikasi pemilahan sampah untuk panduan praktis"
        },
        {
            icon: "🏘️",
            tip: "Ikuti komunitas bank sampah di lingkungan sekitar"
        }
    ];

    const handleAnswerClick = (index) => {
        if (index === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setIsQuizFinished(true);
        }
    };

    const resetQuiz = () => {
        setShowQuiz(false);
        setCurrentQuestion(0);
        setScore(0);
        setIsQuizFinished(false);
    };

    const getScoreMessage = () => {
        if (score >= 4) return "Luar biasa! Kamu ahli pengelolaan sampah! 🌟";
        if (score >= 3) return "Bagus! Pengetahuanmu sudah cukup baik! 👍";
        if (score >= 2) return "Cukup baik, tapi masih perlu belajar lagi! 📚";
        return "Jangan menyerah, terus belajar ya! 💪";
    };

    return (
        <div className="app">
            {/* NAVBAR - SAMA PERSIS DENGAN HALAMAN UTAMA */}
            <header className="topbar">
                {/* Hamburger Menu untuk Mobile */}
                <button 
                    className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Center (Desktop) */}
                <div className="nav-center">
                    <button className="nav-btn" onClick={() => navigate("/")}>
                        Home
                    </button>
                    <button className="nav-btn" onClick={() => navigate("/About")}>
                        About
                    </button>
                    <button className="nav-btn active" onClick={() => navigate("/Edukasi")}>
                        Edukasi
                    </button>
                    <button className="nav-btn" onClick={() => navigate("/Portofolio")}>
                        Portofolio
                    </button>
                    <button className="nav-btn" onClick={() => navigate("/Feedback")}>
                        Feedback
                    </button>
                    <div className="music-control">
                        <button className="icon-btn" onClick={toggleMusic} title="Toggle Music">
                            {musicOn ? "🔊" : "🔈"}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <button 
                        className="mobile-nav-btn" 
                        onClick={() => handleNavigation("/")}
                    >
                        Home
                    </button>
                    <button 
                        className="mobile-nav-btn" 
                        onClick={() => handleNavigation("/About")}
                    >
                        About
                    </button>
                    <button 
                        className="mobile-nav-btn active" 
                        onClick={() => handleNavigation("/Edukasi")}
                    >
                        Edukasi
                    </button>
                    <button 
                        className="mobile-nav-btn" 
                        onClick={() => handleNavigation("/Portofolio")}
                    >
                        Portofolio
                    </button>
                    <button 
                        className="mobile-nav-btn" 
                        onClick={() => handleNavigation("/Feedback")}
                    >
                        Feedback
                    </button>
                </div>
            </header>

            <main className="hero">
                <div className="edukasi-hero">
                    <h1>🌿 Pusat Edukasi Pengelolaan Sampah</h1>
                    <p>Belajar cara mengelola sampah dengan benar untuk bumi yang lebih hijau</p>
                </div>

                {/* Navigation Tabs */}
                <div className="edukasi-tabs">
                    <button 
                        className={`tab-btn ${activeTab === "infografis" ? "active" : ""}`}
                        onClick={() => setActiveTab("infografis")}
                    >
                        📊 Infografis & Video
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === "fakta" ? "active" : ""}`}
                        onClick={() => setActiveTab("fakta")}
                    >
                        📚 Fakta Menarik
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === "tips" ? "active" : ""}`}
                        onClick={() => setActiveTab("tips")}
                    >
                        💡 Tips Praktis
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === "quiz" ? "active" : ""}`}
                        onClick={() => {setActiveTab("quiz"); setShowQuiz(true);}}
                    >
                        🎯 Kuis Interaktif
                    </button>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    {activeTab === "infografis" && (
                        <div className="content-section">
                            <div className="section-card">
                                <h2>📊 Infografis Pengelolaan Sampah</h2>
                                <img 
                                    src="/background1.jpg" 
                                    alt="Infografis Pengelolaan Sampah" 
                                    className="infografis-image" 
                                />
                                <p className="image-caption">
                                    Diagram alur pengelolaan sampah yang benar dari sumber hingga pemrosesan akhir
                                </p>
                            </div>

                            <div className="section-card">
                                <h2>🎥 Video Edukasi</h2>
                                <div className="video-grid">
                                    <div className="video-item">
                                        <h3>Cara Memilah Sampah</h3>
                                        <div className="video-container">
                                            <iframe
                                                className="video-player"
                                                src="https://www.youtube.com/embed/snRhl3ING0Y"
                                                title="Cara Memilah Sampah"
                                                frameBorder="0"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className="video-item">
                                        <h3>Kreatif Daur Ulang</h3>
                                        <div className="video-container">
                                            <iframe
                                                className="video-player"
                                                src="https://www.youtube.com/embed/QZhrxwNLFvU"
                                                title="Kreatif Daur Ulang"
                                                frameBorder="0"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "fakta" && (
                        <div className="content-section">
                            <h2>📚 Fakta Menarik Tentang Sampah</h2>
                            <div className="facts-grid">
                                {wasteFacts.map((fact, index) => (
                                    <div key={index} className="fact-card">
                                        <div className="fact-icon">{fact.icon}</div>
                                        <h3>{fact.title}</h3>
                                        <p>{fact.fact}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="statistics-section">
                                <h3>📈 Statistik Penting</h3>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-number">60%</div>
                                        <div className="stat-label">Sampah Indonesia adalah organik</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">14%</div>
                                        <div className="stat-label">Sampah yang didaur ulang</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">70%</div>
                                        <div className="stat-label">Sungai tercemar sampah plastik</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "tips" && (
                        <div className="content-section">
                            <h2>💡 Tips Praktis Sehari-hari</h2>
                            <div className="tips-grid">
                                {tipsData.map((item, index) => (
                                    <div key={index} className="tip-card">
                                        <div className="tip-icon">{item.icon}</div>
                                        <p>{item.tip}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="guide-section">
                                <h3>🗂️ Panduan Pemilahan Sampah</h3>
                                <div className="guide-cards">
                                    <div className="guide-card organic">
                                        <h4>🟢 ORGANIK</h4>
                                        <ul>
                                            <li>Sisa makanan</li>
                                            <li>Daun & ranting</li>
                                            <li>Kertas basah</li>
                                        </ul>
                                    </div>
                                    <div className="guide-card anorganic">
                                        <h4>🟡 ANORGANIK</h4>
                                        <ul>
                                            <li>Plastik & botol</li>
                                            <li>Kaleng & logam</li>
                                            <li>Kaca & kertas kering</li>
                                        </ul>
                                    </div>
                                    <div className="guide-card b3">
                                        <h4>🔴 B3 (Berbahaya)</h4>
                                        <ul>
                                            <li>Baterai</li>
                                            <li>Lampu neon</li>
                                            <li>Elektronik rusak</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "quiz" && (
                        <div className="content-section">
                            {!showQuiz ? (
                                <div className="quiz-intro">
                                    <h2>🎯 Kuis Pengetahuan Sampah</h2>
                                    <p>Uji pengetahuanmu tentang pengelolaan sampah dengan kuis interaktif ini!</p>
                                    <div className="quiz-info">
                                        <div className="info-item">📝 {questions.length} Pertanyaan</div>
                                        <div className="info-item">⏱️ Waktu: 5 menit</div>
                                        <div className="info-item">🏆 Dapatkan sertifikat</div>
                                    </div>
                                    <button className="start-quiz-btn" onClick={() => setShowQuiz(true)}>
                                        Mulai Kuis
                                    </button>
                                </div>
                            ) : (
                                <div className="quiz-section">
                                    {!isQuizFinished ? (
                                        <div className="quiz-active">
                                            <div className="quiz-progress">
                                                <div 
                                                    className="progress-bar"
                                                    style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
                                                ></div>
                                                <span>Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
                                            </div>
                                            
                                            <h2>{questions[currentQuestion].question}</h2>
                                            <div className="options-grid">
                                                {questions[currentQuestion].options.map((option, index) => (
                                                    <button
                                                        key={index}
                                                        className="option-card"
                                                        onClick={() => handleAnswerClick(index)}
                                                    >
                                                        <span className="option-number">{index + 1}</span>
                                                        <span className="option-text">{option}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="quiz-result">
                                            <div className="result-header">
                                                <h2>🎉 Quiz Selesai!</h2>
                                                <div className="score-circle">
                                                    <span className="score">{score}</span>
                                                    <span className="total">/{questions.length}</span>
                                                </div>
                                            </div>
                                            <p className="score-message">{getScoreMessage()}</p>
                                            <div className="result-actions">
                                                <button className="reset-btn" onClick={resetQuiz}>
                                                    🔄 Main Lagi
                                                </button>
                                                <button className="share-btn">
                                                    📤 Bagikan Hasil
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <footer className="foot">© {new Date().getFullYear()} Mizai</footer>
        </div>
    );
}