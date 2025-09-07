import React from "react";
import "../Styles/ProjectsPage.css";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and Django.",
      img: "/Portfolio.png", // replace with your image
      link: "https://portfolio-site-o7m4.onrender.com/"
    },
    {
      title: "E-commerce Store",
      description: "Full-stack store with cart, payments, and admin dashboard.",
      img: "/Ecommerce.png",
      link: "#"
    },
    {
      title: "Online Earning App",
      description: "An Online Earning App Made Using React And Django",
      img: "/earnifyProject.jpg",
      link: "https://earnify-frontend.onrender.com"
    },
    // {
    //   title: "Duplicate File Finder",
    //   description: "Tool built in Python to find and remove duplicate files.",
    //   img: "/project4.jpg",
    //   link: "#"
    // }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Work</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <h2 className="project-name">{project.title}</h2>
            <p className="project-desc">{project.description}</p>
            <Link to={project.link} className="project-btn">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
