
import React, { useState } from "react";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import { Github, Linkedin, Mail } from "lucide-react";


const projects = [
  {
    title: "HireFlow",
    image: "/images/HireFlow%20Recruitment.webp",
    category: "Recruitment Management System",
    description:
      "A recruitment management application designed to simplify candidate management and organize the hiring process through a clean, user-friendly interface.",

    features: [
      "Candidate Management",
      "Recruitment Dashboard",
      "Hiring Workflow Organization",
      "Responsive User Interface",
    ],

    tech: ["React.js", "JavaScript", "Bootstrap", "CSS"],

    github: "https://github.com/Pravin13-R/Hire_Flow",
    demo: "https://hireflowcrm.netlify.app/",
  },

  {
    title: "Job Portal",
    image: "/images/Job%20Portal.webp",
    category: "Job Listing & Application Platform",
    description:
      "A job portal application that helps users explore job opportunities through an organized interface, making job discovery and application workflows easier.",

    features: [
      "Job Listings",
      "Job Search Interface",
      "Job Details View",
      "Responsive Design",
    ],

    tech: ["JavaScript", "CSS", "REST APIs"],

    github: "https://github.com/Pravin13-R/Job-Portal",
    demo: "",
  },

  {
    title: "Resume Builder",
    image: "/images/Resume%20Builder.webp",
    category: "Resume Creation Application",
    description:
      "A resume builder application that allows users to organize their professional information and create structured resumes through an intuitive interface.",

    features: [
      "Resume Information Form",
      "Resume Preview",
      "Structured Resume Layout",
      "User-Friendly Interface",
    ],

    tech: ["JavaScript", "CSS", "HTML5"],

    github: "https://github.com/Pravin13-R/Resume-Builder",
    demo: "https://resume-builder-five-iota-38.vercel.app/",
  },
];


function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article
      className={`flip-card ${flipped ? "flipped" : ""}`}
      tabIndex="0"
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
    >
      <div className="flip-inner">
        {/* FRONT */}
        <div className="card-face card-front">
          <div className="project-image">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              width="900"
              height="507"
              loading="lazy"
              decoding="async"
            />
            <span>{project.title}</span>
          </div>

          <div>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>

          <span className="flip-hint">VIEW DETAILS ↻</span>
        </div>

        {/* BACK */}
        <div className="card-face card-back">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="tech-list">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-links">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub ↗
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo ↗
              </a>
            ) : (
              <span className="project-link-unavailable" aria-disabled="true">
                Live Demo · Coming soon
              </span>
            )}
          </div>

          <span className="flip-hint">CLICK TO FLIP BACK ↻</span>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          Pravin<span></span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Connect ↗
        </a>
      </header>

      <main id="main-content">
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">FRONTEND DEVELOPER</p>

            <h1 className="hero-title">
              Hi, I'm
              <br />
              <span>Pravin R</span>
            </h1>

            <p className="hero-description">
              I build dashboards, job portals, and forms with React and JavaScript. My
              engineering background shapes how I debug problems and design interfaces.
            </p>

            <div className="hero-open-chip">
              <span aria-hidden="true"></span>
              Available for opportunities
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                Explore Projects ↗
              </a>

              <a
                href="/Pravin_R_Frontend_Developer_..pdf"
                download
                className="button secondary"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="hero-social-links" aria-label="Social profiles">
              <a
                href="https://github.com/Pravin13-R"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/pravin-r-dev"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a
                href="mailto:rameshpravin1@gmail.com"
                aria-label="Email Pravin"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow" aria-hidden="true"></div>
              <div className="hero-image">
                <img
                  src="/images/pravin.jpeg.webp"
                  alt="Pravin R - Frontend Developer"
                  width="700"
                  height="536"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <About />

       

        {/* PROJECTS */}
        <section id="projects" className="section">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Projects I've Built</h2>

          <p className="section-description">
            Hover or click a project card to flip and explore details.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

         {/* SKILLS */}
        <Skills />

        {/* CONTACT */}
        <Contact />
      </main>

      <footer>
        <div className="footer-content">
          <span>© 2026 Pravin R · Built with React</span>
          <div className="footer-social-links" aria-label="Social profiles">
            <a
              href="https://github.com/Pravin13-R"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/pravin-r-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
