import React from "react";
import "../Styles/LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-pic">
          <img src="/My Pic.jpg" alt="Profile" />
        </div>
        <h1 className="name">Zulqurnain Ghufran</h1>
        <p className="title">Full-Stack Developer | Python • Django • React</p>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <Link to="/projects" className="btn primary">
          View My Work
        </Link>
        <Link to="/contact" className="btn secondary">
          Contact Me
        </Link>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2 className="about-title">About Me</h2>
        <p>
          Hi, I'm <strong>Zulqurnain Ghufran</strong>, a passionate{" "}
          <strong>Full-Stack Developer</strong> skilled in{" "}
          <span className="highlight">Python (Django)</span> and{" "}
          <span className="highlight">React</span>. I enjoy creating modern,
          scalable, and user-friendly applications that bring ideas to life.
        </p>
        <p>
          With experience building web apps, productivity tools, and e-commerce
          platforms, I focus on writing clean, efficient code and crafting
          responsive designs. My mission is to deliver solutions that are both
          functional and visually appealing.
        </p>
      </div>
    </div>
  );
}
