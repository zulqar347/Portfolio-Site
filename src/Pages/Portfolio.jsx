import React from "react";
import "../Styles/Portfolio.css";

// Example project data
const projects = [
  {
    title: "Earnify",
    description: "A platform to earn online with referrals and tasks.",
    tech: ["React", "Django", "REST API"],
    liveLink: "#",
    github: "#",
    img: "/earnifyProject.jpg",
  },
  {
    title: "Auto File Organizer",
    description: "Python tool to automatically organize files by type.",
    tech: ["Python"],
    liveLink: "#",
    github: "#",
    img: "assets/auto-file-organizer.png",
  },
  {
    title: "System Health Monitor",
    description: "Monitor system resources and get real-time alerts.",
    tech: ["Python", "Tkinter"],
    liveLink: "#",
    github: "#",
    img: "assets/system-health.png",
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <div className="portfolio-page" id="portfolio">
      <h2 className="portfolio-title">My Work</h2>
      <p className="portfolio-subtitle">
        Here are some of the projects I’ve built recently.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} className="btn btn-primary" target="_blank" rel="noreferrer">Live</a>
                <a href={project.github} className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
