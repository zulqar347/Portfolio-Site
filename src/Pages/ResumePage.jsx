import React from "react";
import "../Styles/ResumePage.css";

export default function ResumePage() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      {/* Profile Summary */}
      <section className="resume-section">
        <h2>Profile</h2>
        <p>
          Full-Stack Developer with 2+ years of experience in building scalable web applications. Skilled in Python, Django, React, and responsive design. Passionate about creating solutions that are both functional and visually appealing.
        </p>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Bachelor of Science in Mathematics (Minor in Computer Science)</h3>
          <p>GPGC Haripur, 2022 - 2026</p>
        </div>
        <div className="resume-item">
          <h3>High School</h3>
          <p>GHSS Kakotri, 2018 - 2020</p>
        </div>
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Python & Django</li>
          <li>React & JavaScript</li>
          <li>HTML, CSS, Bootstrap</li>
          <li>REST API Development</li>
          <li>SQL & PostgreSQL</li>
          <li>Git & Version Control</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>Freelance Web Developer</h3>
          <p>Self-Employed | 2023 - Present</p>
          <ul>
            <li>Built responsive web applications for clients using React and Django.</li>
            <li>Implemented APIs, user authentication, and database integration.</li>
            <li>Optimized websites for performance and SEO.</li>
          </ul>
        </div>
        <div className="resume-item">
          <h3>Intern - Web Developer</h3>
          <p>Tech Solutions Ltd | 2022 - 2023</p>
          <ul>
            <li>Assisted in developing internal dashboard tools using Django.</li>
            <li>Maintained existing web applications and fixed bugs.</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>Python Django Full-Stack Development - Coursera</li>
          <li>React JS Front-End Development - Udemy</li>
        </ul>
      </section> */}

      {/* Download Resume Button
      <a href="/resume.pdf" className="btn-resume" download>
        Download Resume PDF
      </a> */}
    </div>
  );
}
