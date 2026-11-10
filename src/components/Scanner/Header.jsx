import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="mizai-header">
      <div className="logo">
        <img src="/logo192.png" alt="MIZAI Logo" />
        <h1>MIZAI</h1>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/scanner">Scanner</Link>
        <Link to="/about">Tentang</Link>
      </nav>
    </header>
  );
};

export default Header;
