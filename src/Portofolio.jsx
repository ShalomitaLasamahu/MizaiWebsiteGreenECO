import React, { useState } from "react";
import "./Portofolio.css";
import { useNavigate } from "react-router-dom";

const developers = [
  {
    name: "Shalomita Amanda C.L",
    role: "Backend Developer, Quality Assurance",
    jurusan: "Informatika",
    angkatan: "2024",
    description:
      "Saya adalah mahasiswa semester 3 jurusan IT di Universitas Multimedia Nusantara yang sangat antusias dalam dunia teknologi. Selama kuliah, saya menyadari bahwa IT adalah passion saya, terutama dalam pengembangan website dan game berbasis web. Saya memiliki pengalaman sebagai QA, terbiasa melakukan pengecekan bug dan memastikan kualitas sistem. Selain itu, saya juga mampu merancang base atau struktur dari suatu website, mulai dari perencanaan hingga implementasi. Saat ini saya memiliki keahlian di bidang backend, database, QA, serta pembuatan dan hosting website/game. Ke depannya, saya berkomitmen untuk terus mengembangkan skill dan memperdalam kemampuan saya di dunia teknologi.",
    image: "/public/shalomita.jpg",
    social: {
      instagram: "https://www.instagram.com/mitalasamahu?igsh=OXNtYnBocDduY3Rq",
      github: "https://github.com/ShalomitaLasamahu",
      linkedin: "https://www.linkedin.com/in/shalomita-a-c-lasamahu-8b0222325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Zahra Ariestya Sennova",
    role: "Fullstack Developer, UI/UX Designer",
    jurusan: "Informatika",
    angkatan: "2024",
    description:
      "Saya Zahra, mahasiswi Informatika Universitas Multimedia Nusantara angkatan 2024 yang memiliki ketertarikan pada Frontend Development dan UI/UX Design. Saya menyukai dunia desain dan editing, serta berpengalaman menempati berbagai peran dalam proyek pengembangan web dengan memanfaatkan HTML, CSS, JavaScript, React, Bootstrap, dan Tailwind CSS untuk menciptakan tampilan antarmuka yang menarik, responsif, dan fungsional.",
    image: "/public/zahra.jpg",
    social: {
      instagram: "https://www.instagram.com/zahrariestyaa?igsh=eG05YjFsenlueDho&utm_source=qr",
      github: "https://github.com/4Godness",
      linkedin: "https://www.linkedin.com/in/zahra-ariestya-sennova-74a143325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },
  {
    name: "Widya Ayu Safitri",
    role: "UI/UX Designer, Frontend Developer",
    jurusan: "Informatika",
    angkatan: "2024",
    description:
      "((KOSONGGG))",
    image: "/public/widya.jpg",
    social: {
      instagram: "https://www.instagram.com/widiay._?igsh=eDA1Ync1ZWxqd21i",
      github: "https://github.com/wdya25",
      linkedin: "https://www.linkedin.com/in/widya-ayu-safitri-415260316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Keisha Aria Lai",
    role: "Technical Writer / Documentation Specialist",
    jurusan: "Informatika",
    angkatan: "2024",
    description:
      "Saya Kei, mahasiswa jurusan Informatika di Universitas Multimedia Nusantara yang tertarik dengan dunia teknologi, terutama di bidang pengembangan web dan sistem. Selama kuliah, saya belajar banyak tentang cara kerja berbagai teknologi dan bagaimana semuanya bisa saling terhubung untuk menciptakan solusi yang bermanfaat. Saya juga senang mencoba hal-hal baru, mengasah kemampuan logika, dan terus belajar agar dapat berkembang serta menerapkan ilmu yang saya pelajari di kehidupan nyata.",
    image: "/public/keisha.jpg",
    social: {
      instagram: "https://www.instagram.com/keeishaaa._?igsh=ZHl2eGYxN240Mms5&utm_source=qr",
      github: "https://github.com/keishalaii",
      linkedin: "https://www.linkedin.com/in/keisha-lai-63459a311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },
  {
    name: "Tamara Putri Salwa",
    role: "Technical Writer / Documentation Specialist",
    jurusan: "Informatika",
    angkatan: "2024",
    description:
      "((KOSONGGG))",
    image: "/public/tamara.jpg",
    social: {
      instagram: "https://instagram.com/tamara",
      github: "https://github.com/tamara",
      linkedin: "https://linkedin.com/in/tamara",
    },
  },
];

const Portfolio = ({ musicOn, toggleMusic }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="portfolio-app">
      {/* NAVBAR */}
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
          <button className="nav-btn" onClick={() => navigate("/Edukasi")}>
            Edukasi
          </button>
          <button className="nav-btn active" onClick={() => navigate("/Portofolio")}>
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
            className="mobile-nav-btn" 
            onClick={() => handleNavigation("/Edukasi")}
          >
            Edukasi
          </button>
          <button 
            className="mobile-nav-btn active" 
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

      {/* MAIN CONTENT */}
      <div className="portfolio-container">
        <h1 className="portfolio-title">Tim Pengembang Website</h1>

        <div className="portfolio-list">
          {developers.map((dev, index) => (
            <div className="portfolio-item" key={index}>
              <img src={dev.image} alt={dev.name} className="profile-photo" />
              <div className="portfolio-info">
                <h2>{dev.name}</h2>
                <p className="role">{dev.role}</p>
                <p className="info">
                  {dev.jurusan} • Angkatan {dev.angkatan}
                </p>
                <p className="description">{dev.description}</p>
                <div className="social-links">
                  <a href={dev.social.instagram} target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={dev.social.github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={dev.social.linkedin} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;