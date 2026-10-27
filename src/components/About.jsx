
import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-eyebrow">GET TO KNOW ME</span>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              Passionate about building
              <span> modern web experiences.</span>
            </h3>

            <p>
              I'm Pravin R, a B.E. Mechanical Engineering graduate
              with a strong interest in frontend development.
              I enjoy creating clean, responsive, and user-friendly
              web applications using React.js and modern web technologies.
            </p>

            <p>
              I'm continuously improving my development skills through
              hands-on projects, exploring new technologies, and
              solving real-world problems. My goal is to contribute
              to meaningful projects while growing as a developer.
            </p>

            <div className="about-tags">
              <span>Frontend Development</span>
              <span>UI Design</span>
              <span>Problem Solving</span>
            </div>
          </div>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Education</span>
              <span className="info-value">
                B.E. 2026, Mahendra Engineering College
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Based in</span>
              <span className="info-value">
                Tamil Nadu, India
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Open to</span>
              <span className="info-value">
                Frontend roles, internships, remote work
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Learning now</span>
              <span className="info-value">
                MERN stack at LiveWire Institute
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
