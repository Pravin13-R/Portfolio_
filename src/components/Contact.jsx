
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "rameshpravin1@gmail.com";
    const subject = encodeURIComponent(
      formData.subject || `Portfolio enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };


  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Section heading */}
        <div className="contact-heading">
          <span className="contact-eyebrow">
            <span className="status-dot"></span>
            GET IN TOUCH
          </span>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p className="contact-description">
            I'm always open to discussing new opportunities, creative
            ideas, and ways to build something meaningful together.
            Let's turn your ideas into reality.
          </p>
        </div>

        {/* Contact content */}
        <div className="contact-grid">
          {/* Left side */}
          <div className="contact-info">
            <div className="contact-intro">
              <span className="contact-label">CONTACT DETAILS</span>
              <h3>Let's start a conversation.</h3>
              <p>
                Looking for a Frontend Developer or have an exciting
                opportunity? Feel free to reach out.
              </p>
            </div>

            <a
              className="contact-email-card"
              href="mailto:rameshpravin1@gmail.com"
            >
              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </div>

              <div className="contact-detail">
                <span>Email me at</span>
                <strong>rameshpravin1@gmail.com</strong>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

            <div className="contact-location">
              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div className="contact-detail">
                <span>Based in</span>
                <strong>Tamil Nadu, India</strong>
                <small>Open to remote opportunities</small>
              </div>
            </div>

            <div className="contact-socials">
              <span className="contact-label">FIND ME ONLINE</span>

              <div className="social-links">
                <a
                  href="https://github.com/Pravin13-R"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  GitHub <span>↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side: form */}
          <div className="contact-form-card">
            <div className="form-heading">
              <span className="contact-label">SEND A MESSAGE</span>
              <h3>Tell me about your idea.</h3>
              <p>Fill out the form and let's connect.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Job opportunity, project, collaboration..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me a little about what you have in mind..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="contact-submit" type="submit">
                Send Message
                <span>↗</span>
              </button>

              {/* <p className="form-note">
                This opens your default email app to send the message.
              </p> */}
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="contact-bottom">
          <span>GOOD THINGS START WITH A HELLO.</span>
          <a href="mailto:rameshpravin1@gmail.com">
            Say hello <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
