import React from "react";
import "../Styles/AboutPage.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        {/* Profile Picture */}
        <div className="about-pic">
          <img src="/My Pic.jpg" alt="About Me" />
        </div>

        {/* Bio Section */}
        <div className="about-text">
          <p>
            Hi, I'm <strong>Zulqurnain Ghufran</strong>, a passionate{" "}
            <strong>Full-Stack Developer</strong> with expertise in building
            modern, responsive, and scalable web applications. I specialize in{" "}
            <span className="highlight">Python (Django)</span> and{" "}
            <span className="highlight">React</span>, and I love turning ideas
            into digital reality.
          </p>

          <p>
            Over the past year, I've worked on multiple projects including
            portfolio sites, e-commerce platforms, and productivity tools. My
            goal is to help businesses and individuals bring their ideas online
            with clean code and user-friendly designs.
          </p>

          <h2 className="skills-title">Skills</h2>
          <ul className="skills-list">
            <li>Python & Django</li>
            <li>JavaScript & React</li>
            <li>REST APIs</li>
            <li>Responsive Web Design</li>
            <li>Database Management (PostgreSQL, SQLite)</li>
          </ul>

          <Link to="/resume" className="btn-resume" download>
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
