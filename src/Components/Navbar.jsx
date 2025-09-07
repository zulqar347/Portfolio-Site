import React, { useState } from "react";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Zulqurnain Ghufran</div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li onClick={() => {handleLinkClick("home"); navigate("/")}}>Home</li>
          <li onClick={() => {handleLinkClick("about"); navigate("/about")}}>About</li>
          <li onClick={() => {handleLinkClick("projects"); navigate("/projects")}}>Projects</li>
          <li onClick={() => {handleLinkClick("contact"); navigate("/contact")}}>Contact</li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "rotate1" : ""}`}></div>
          <div className={`line ${isOpen ? "fade" : ""}`}></div>
          <div className={`line ${isOpen ? "rotate2" : ""}`}></div>
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <li onClick={() => {handleLinkClick("home"); navigate("/")}}>Home</li>
          <li onClick={() => {handleLinkClick("about"); navigate("/about")}}>About</li>
          <li onClick={() => {handleLinkClick("projects"); navigate("/projects")}}>Projects</li>
          <li onClick={() => {handleLinkClick("contact"); navigate("/contact")}}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
