import React, { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <header className={`p-3 ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"} rounded`}>
        <div className="container d-flex justify-content-between align-items-center">
          <h1>Car Collection</h1>
          <button className="btn btn-secondary" onClick={toggleTheme}>
            {isDarkMode ? "Light" : "Dark"}
          </button>
          <button className={`navbar-toggler btn ${isDarkMode ? "btn-outline-light" : "btn-outline-dark"} d-md-none`} onClick={toggleNavbar}>
            ☰
          </button>
        </div>
        <nav className={`nav flex-column flex-md-row justify-content-center ${isOpen ? "d-block" : "d-none d-md-flex"}`}>
          <a className={`nav-link ${isDarkMode ? "text-white" : "text-dark"}`} href="#home">Home</a>
          <a className={`nav-link ${isDarkMode ? "text-white" : "text-dark"}`} href="#about">About</a>
          <a className={`nav-link ${isDarkMode ? "text-white" : "text-dark"}`} href="#collection">Collection</a>
          <a className={`nav-link ${isDarkMode ? "text-white" : "text-dark"}`} href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
