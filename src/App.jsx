import React, { lazy, Suspense, useEffect, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import {
  siHtml5, siCss, siJavascript, siReact, siBootstrap, siTailwindcss,
  siGit, siGithub
} from "simple-icons";
import {
  ArrowDown, ArrowLeft, ArrowRight, Download, Github, Linkedin, Mail, Menu, X,
  ExternalLink, Code2, GraduationCap, MapPin, BriefcaseBusiness, Heart,
  Send, Layers3, Globe, Monitor, Smartphone, GitBranch, Workflow
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: siHtml5, color: "#E34F26" },
  { name: "CSS3", icon: siCss, color: "#1572B6" },
  { name: "JavaScript", icon: siJavascript, color: "#F7DF1E" },
  { name: "React.js", icon: siReact, color: "#61DAFB" },
  { name: "React Router", icon: Workflow, color: "#F44250" },
  { name: "Bootstrap", icon: siBootstrap, color: "#7952B3" },
  { name: "Tailwind CSS", icon: siTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: siGit, color: "#F05032" },
  { name: "GitHub", icon: siGithub, color: "#F0F6FC" },
  { name: "REST API", icon: Workflow, color: "#22D3EE" },
  { name: "VS Code", icon: Code2, color: "#38BDF8" },
];

const ThreeScene = lazy(() => import("./ThreeScene.jsx"));

const projects = [
  {
    number: "01", title: "HireFlow Recruitment Management System", category: "Recruitment Dashboard",
    description: "A recruitment dashboard designed to organize candidate data, job pipelines, interview stages, and hiring activity in a structured workflow.",
    features: ["Candidate data organization", "Job pipeline tracking", "Interview stage management", "Hiring activity overview"],
    tags: ["React.js", "Bootstrap", "REST API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    demo: null,
    github: "https://github.com/Pravin13-R/Hire_Flow"
  },
  {
    number: "02", title: "JobZen Job Portal", category: "Job Search Platform",
    description: "A responsive, multi-page job portal for discovering featured roles, filtering job listings, and exploring application flows.",
    features: ["Responsive multi-page experience", "Featured role discovery", "Job listing filters", "Application flows"],
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    demo: "https://job-portal-psi-ebon-64.vercel.app",
    github: "https://github.com/Pravin13-R/Job-Portal"
  },
  {
    number: "03", title: "Resume Builder", category: "Productivity Tool",
    description: "A streamlined resume builder concept with structured sections, clean form inputs, and a polished preview experience for job-ready documents.",
    features: ["Structured resume sections", "Clean form inputs", "Polished resume preview", "Job-ready document workflow"],
    tags: ["React", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=85",
    demo: null,
    github: "https://github.com/Pravin13-R/Resume-Builder"
  }
];

function ProjectCard({ project, variants }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontToggleRef = React.useRef(null);
  const backToggleRef = React.useRef(null);

  const flipCard = (flipped, moveFocus = false) => {
    setIsFlipped(flipped);
    if (moveFocus) {
      requestAnimationFrame(() => {
        (flipped ? backToggleRef : frontToggleRef).current?.focus();
      });
    }
  };

  return (
    <motion.article
      className={`project-card${isFlipped ? " is-flipped" : ""}`}
      variants={variants}
      onMouseEnter={() => flipCard(true)}
      onMouseLeave={() => flipCard(false)}
    >
      <div className="project-card-inner">
        <button
          className="project-face project-front"
          type="button"
          aria-label={`View details for ${project.title}`}
          aria-expanded={isFlipped}
          aria-hidden={isFlipped}
          inert={isFlipped}
          onClick={() => flipCard(true, true)}
        >
          <span className="project-image-wrap">
            <img src={project.image} alt="" loading="lazy" />
            <span className="project-category">{project.category}</span>
          </span>
          <span className="project-front-content">
            <span className="project-title-row"><span>{project.number}</span><span className="project-front-title">{project.title}</span></span>
            <span className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</span>
            <span className="project-flip-indicator">View Details <ArrowRight size={15} /></span>
          </span>
        </button>

        <div className="project-face project-back" aria-hidden={!isFlipped} inert={!isFlipped}>
          <div className="project-back-heading">
            <span className="eyebrow">PROJECT {project.number}</span>
            <h3>{project.title}</h3>
          </div>
          <p className="project-description">{project.description}</p>
          <ul className="project-features">
            {project.features.map(feature => <li key={feature}>{feature}</li>)}
          </ul>
          <div className="project-back-stack">
            <span className="project-stack-label">TECH STACK</span>
            <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>
          <div className="project-links">
            <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            {project.demo && <a className="button button-secondary" href={project.demo} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15} /></a>}
          </div>
          <button
            ref={backToggleRef}
            className="project-back-toggle"
            type="button"
            onClick={() => flipCard(false, true)}
          >
            <ArrowLeft size={15} /> Back
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

const sectionReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } }
};

const cardReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } }
};

const revealOnView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.15 },
  variants: sectionReveal
};

const reducedRevealOnView = {
  ...revealOnView,
  variants: {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0 } }
  }
};

const reducedStaggerReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0, delayChildren: 0 } }
};

const reducedCardReveal = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } }
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const shouldReduceMotion = useReducedMotion();
  const supportsIntersectionObserver = typeof IntersectionObserver !== "undefined";
  const sectionRevealProps = shouldReduceMotion
    ? reducedRevealOnView
    : supportsIntersectionObserver
      ? revealOnView
      : { initial: "visible", animate: "visible", variants: sectionReveal };
  const staggerRevealVariants = shouldReduceMotion ? reducedStaggerReveal : staggerReveal;
  const cardRevealVariants = shouldReduceMotion ? reducedCardReveal : cardReveal;
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" }
  ];
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!supportsIntersectionObserver) return undefined;

    const sections = document.querySelectorAll("main section[id]");
    const visibleSections = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      const mostVisibleSection = [...visibleSections.entries()]
        .sort((a, b) => b[1] - a[1])[0];
      setActiveSection(mostVisibleSection?.[0] ?? "home");
    }, { threshold: [0.25, 0.5, 0.75], rootMargin: "-10% 0px -10% 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [supportsIntersectionObserver]);

  return (
    <MotionConfig reducedMotion="user">
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">P</span><span>Pravin R</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-controls="site-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="site-navigation" aria-label="Main navigation" className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => <a key={item.id} className={activeSection === item.id ? "active" : undefined} aria-current={activeSection === item.id ? "location" : undefined} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}
        </nav>
        <a className="button button-primary nav-resume" href="/Pravin_R_Frontend_Developer.pdf" download><Download size={16} /> Download Resume</a>
      </header>

      <main>
        <motion.section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>HELLO, I'M</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Pravin <span>R</span></motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>React Frontend Developer</motion.h2>
            <p className="hero-description">I build clean, responsive and engaging user interfaces using React.js, JavaScript, HTML, CSS and modern frontend tools focused on usability, performance and design quality.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View Projects <ArrowRight size={17} /></a>
              <a className="button button-outline" href="/Pravin_R_Frontend_Developer.pdf" target="_blank" rel="noreferrer"><ExternalLink size={16} /> View Resume</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Pravin13-R" aria-label="GitHub" target="_blank" rel="noreferrer"><Github /></a>
              <a href="https://www.linkedin.com/in/pravin-r-mern" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a>
              <a href="mailto:rameshpravin1@gmail.com" aria-label="Email"><Mail /></a>
            </div>
            <div className="hero-stats">
              <div><strong>03+</strong><span>Projects</span></div>
              <div><strong>06+</strong><span>Core tools</span></div>
              <div><strong>100%</strong><span>Driven</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="scene-glow" />
            <Suspense fallback={<div className="scene-fallback" aria-hidden="true" />}>
              <ThreeScene />
            </Suspense>
            <div className="floating-label label-react"><span>⚛</span> React.js</div>
            <div className="floating-label label-code"><Code2 size={19} /> Clean Code</div>
            <div className="visual-caption"><span className="status-dot" /> Building thoughtful digital experiences</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={17} /><span>Scroll to explore</span></a>
        </motion.section>

        <motion.section className="section-wrap section-block" id="about" {...sectionRevealProps}>
          <motion.div variants={cardRevealVariants}>
            <SectionHeading eyebrow="GET TO KNOW ME" title="Turning Ideas Into Beautiful Web Experiences" text="A little about my approach, interests and what I’m working toward." />
          </motion.div>
          <motion.div className="about-grid" variants={staggerRevealVariants}>
            <motion.div className="about-intro" variants={staggerRevealVariants}>
              <motion.div className="about-photo" variants={cardRevealVariants}>
                <img src="/images/pravin.png" alt="Pravin R - Frontend Developer" />
              </motion.div>
              <motion.div className="about-panel glass-panel" variants={cardRevealVariants}>
                <div className="about-icon"><Layers3 size={25} /></div>
                <h3>Building modern interfaces with purpose.</h3>
                <p>I’m Pravin R, a React frontend developer focused on creating responsive, accessible and visually polished web experiences that balance design quality with practical functionality.</p>
                <p>From component-based UI design to API-driven interactions, I enjoy building interfaces that are easy to use, visually engaging and aligned with real user needs.</p>
                <div className="about-actions">
                  <a href="#projects" className="text-link">Explore my work <ArrowRight size={16} /></a>
                  <a href="/Pravin_R_Frontend_Developer.pdf" download className="text-link">Download Resume</a>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="about-facts" variants={staggerRevealVariants}>
              <motion.div className="fact-card" variants={cardRevealVariants}><Code2 /><span>Currently learning</span><strong>MERN Stack at LiveWire Institute</strong></motion.div>
              <motion.div className="fact-card" variants={cardRevealVariants}><MapPin /><span>Location</span><strong>Tamil Nadu, India</strong></motion.div>
              <motion.div className="fact-card" variants={cardRevealVariants}><BriefcaseBusiness /><span>Open to</span><strong>Frontend opportunities</strong></motion.div>
              <motion.div className="fact-card" variants={cardRevealVariants}><Heart /><span>Interests</span><strong>React.js, API Integration, Responsive Design</strong></motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section className="section-wrap section-block" id="skills" {...sectionRevealProps}>
          <SectionHeading eyebrow="MY TOOLKIT" title="Technologies I Work With" text="Tools I use to create responsive interfaces and interactive experiences." />
          <motion.div className="skills-grid" variants={staggerRevealVariants}>
            {skills.map((skill, i) => <motion.div className="skill-card" key={skill.name} variants={cardRevealVariants} whileHover={shouldReduceMotion ? undefined : { y: -7 }} transition={{ duration: 0.2 }}>
              <div className="skill-mark" style={{ "--skill-color": skill.color }}>
                {skill.icon.path
                  ? <svg className="skill-brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={skill.icon.path} /></svg>
                  : <skill.icon className="skill-line-icon" size={28} strokeWidth={1.8} aria-hidden="true" />}
              </div>
              <strong>{skill.name}</strong><span className="skill-index">0{i + 1}</span>
            </motion.div>)}
          </motion.div>
        </motion.section>

        <motion.section className="section-wrap section-block projects-section" id="projects" {...sectionRevealProps}>
          <div className="heading-row">
            <SectionHeading eyebrow="SELECTED WORK" title="Featured Projects" text="A few projects demonstrating my frontend development practice." />
            <a className="text-link all-projects" href="https://github.com/Pravin13-R" target="_blank" rel="noreferrer">GitHub profile <ArrowRight size={16} /></a>
          </div>
          <motion.div className="projects-grid" variants={staggerRevealVariants}>
            {projects.map((project) => <ProjectCard key={project.number} project={project} variants={cardRevealVariants} />)}
          </motion.div>
        </motion.section>

        <motion.section className="section-wrap section-block" id="experience" {...sectionRevealProps}>
          <motion.div variants={cardRevealVariants}>
            <SectionHeading eyebrow="MY JOURNEY" title="Learning & Experience" text="My education, current training and hands-on frontend development practice." />
          </motion.div>
          <motion.div className="timeline" variants={staggerRevealVariants}>
            <motion.div className="timeline-item" variants={cardRevealVariants}><span className="timeline-dot"><Code2 size={18} /></span><div className="timeline-card glass-panel"><div className="timeline-meta"><span>Frontend Development</span><small>2026 – Present</small></div><h3>React.js Development & UI Practice</h3><p>Building responsive web interfaces using React.js, JavaScript, HTML, CSS and Bootstrap while working on reusable components, state management, routing and API integration in project-driven learning.</p></div></motion.div>
            <motion.div className="timeline-item" variants={cardRevealVariants}><span className="timeline-dot"><BriefcaseBusiness size={18} /></span><div className="timeline-card glass-panel"><div className="timeline-meta"><span>LiveWire Institute</span><small>Current Training</small></div><h3>MERN Stack Learning</h3><p>Strengthening my foundation in MongoDB, Express.js, React and Node.js to expand my understanding of full-stack web application development and modern product workflows.</p></div></motion.div>
            <motion.div className="timeline-item" variants={cardRevealVariants}><span className="timeline-dot"><GraduationCap size={18} /></span><div className="timeline-card glass-panel"><div className="timeline-meta"><span>Education</span><small>2022–2026</small></div><h3>B.E. Mechanical Engineering</h3><p>Mahendra Engineering College</p></div></motion.div>
          </motion.div>
        </motion.section>

        <motion.section className="section-wrap section-block contact-section" id="contact" {...sectionRevealProps}>
          <motion.div className="contact-orbit" variants={cardRevealVariants}><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core"><Globe size={48} /></div></motion.div>
          <motion.div className="contact-copy" variants={cardRevealVariants}>
            <motion.div variants={cardRevealVariants}>
              <SectionHeading eyebrow="LET'S CONNECT" title="Let's Build Something Meaningful" text="Have an opportunity or project in mind? Send me a message." />
            </motion.div>
            <motion.div className="contact-methods" variants={staggerRevealVariants}>
              <motion.a variants={cardRevealVariants} href="mailto:rameshpravin1@gmail.com"><span className="contact-icon"><Mail /></span><span><small>Email</small><strong>rameshpravin1@gmail.com</strong></span><ArrowRight size={17} /></motion.a>
              <motion.a variants={cardRevealVariants} href="https://www.linkedin.com/in/pravin-r-mern" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin /></span><span><small>LinkedIn</small></span><ArrowRight size={17} /></motion.a>
              <motion.a variants={cardRevealVariants} href="https://github.com/Pravin13-R" target="_blank" rel="noreferrer"><span className="contact-icon"><Github /></span><span><small>GitHub</small></span><ArrowRight size={17} /></motion.a>
            </motion.div>
          </motion.div>
          <motion.form className="contact-form glass-panel" variants={staggerRevealVariants} onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = String(formData.get("name") || "");
            const email = String(formData.get("email") || "");
            const message = String(formData.get("message") || "");
            const params = new URLSearchParams({
              subject: name || "Portfolio enquiry",
              body: `${message}\n\nFrom: ${name}\nEmail: ${email}`
            });
            window.location.href = `mailto:rameshpravin1@gmail.com?${params.toString()}`;
          }}>
            <motion.label variants={cardRevealVariants}>Your name<input name="name" placeholder="Enter your name" required /></motion.label>
            <motion.label variants={cardRevealVariants}>Your email<input name="email" type="email" placeholder="you@example.com" required /></motion.label>
            <motion.label variants={cardRevealVariants}>Message<textarea name="message" rows="4" placeholder="Tell me about your opportunity..." required /></motion.label>
            <motion.button className="button button-primary" variants={cardRevealVariants} type="submit">Send via email <Send size={16} /></motion.button>
            <motion.small className="form-note" variants={cardRevealVariants}>No backend is connected. This opens your email app; connect a form service or API for server-side submissions.</motion.small>
          </motion.form>
        </motion.section>
      </main>

      <footer className="footer section-wrap" id="footer">
        <a className="brand" href="#home"><span className="brand-mark">P</span><span>Pravin R</span></a>
        <span>&copy; Designed &amp; built by Pravin</span>
        <div className="footer-social"><a href="https://github.com/Pravin13-R" aria-label="GitHub"><Github size={17} /></a><a href="https://www.linkedin.com/in/pravin-r-mern" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:rameshpravin1@gmail.com" aria-label="Email"><Mail size={17} /></a></div>
        <a className="back-top" href="#home">Back to top &uarr;</a>
      </footer>
    </div>
    </MotionConfig>
  );
}

export default App;
