import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });
      setIsMenuOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <nav className="navbar">
      <a onClick={() => scrollToSection("home")}>
        <img className="logo" src="" alt="logo" />
      </a>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => scrollToSection("home")}>
          HOME
        </a>
        <a href="#about" onClick={() => scrollToSection("about")}>
          ABOUT
        </a>
        <a href="#projects" onClick={() => scrollToSection("projects")}>
          PROJECTS
        </a>
        <a href="#contact" onClick={() => scrollToSection("contact")}>
          CONTACT
        </a>
      </div>
      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img className="menu-icon" src="menu-bar.png" alt="Menu" />
      </div>
    </nav>
  );
}

export default Navbar;
