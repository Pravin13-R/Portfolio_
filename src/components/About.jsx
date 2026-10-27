
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
              <span className="info-label">Name</span>
              <span className="info-value">Pravin R</span>
            </div>

            <div className="info-item">
              <span className="info-label">Education</span>
              <span className="info-value">
                B.E. Mechanical Engineering
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Specialization</span>
              <span className="info-value">
                Frontend Development
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Currently Learning</span>
              <span className="info-value">
                MERN Stack
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Career Goal</span>
              <span className="info-value">
                Frontend Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
