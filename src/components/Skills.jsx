
import React from "react";
import "./Skills.css";

const skills = [
  {
    name: "React.js",
    category: "Frontend Library",
    icon: "⚛",
    className: "react",
    description: "Building reusable and interactive UI components.",
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    icon: "JS",
    className: "javascript",
    description: "Creating dynamic and functional web experiences.",
  },
  {
    name: "HTML5",
    category: "Markup",
    icon: "5",
    className: "html",
    description: "Structuring accessible web content.",
  },
  {
    name: "CSS3",
    category: "Styling",
    icon: "3",
    className: "css",
    description: "Designing responsive and modern interfaces.",
  },
  {
    name: "Bootstrap",
    category: "CSS Framework",
    icon: "B",
    className: "bootstrap",
    description: "Building responsive layouts with UI components.",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: "⌘",
    className: "git",
    description: "Tracking code changes and managing versions.",
  },
  {
    name: "GitHub",
    category: "Code Hosting",
    icon: "GH",
    className: "github",
    description: "Collaborating and hosting development projects.",
  },
  {
    name: "REST APIs",
    category: "API Integration",
    icon: "↔",
    className: "api",
    description: "Connecting frontend applications with APIs.",
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <span className="skills-eyebrow">MY TOOLKIT</span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies I use to build modern, responsive
            and user-friendly web applications.
          </p>
        </div>

        <div className="skills-bento">
          {skills.map((skill, index) => (
            <article
              className={`skill-bento-card ${skill.className}`}
              key={skill.name}
            >
              <div className="skill-card-top">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="skill-card-content">
                <span className="skill-category">
                  {skill.category}
                </span>

                <h3>{skill.name}</h3>

                <p>{skill.description}</p>
              </div>

              <div className="skill-card-footer">
                <span>Explore skill</span>
                <span className="skill-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
