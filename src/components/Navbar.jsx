import React from "react";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });
    }
  };

  return (
    <nav>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul>
        <li>
          <button onClick={() => scrollToSection("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
