"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "E-Commerce Customer Churn Dashboard",
    category: "DATA ANALYTICS",
    image: "/project/churn-dashboard.png",
    description:
      "An interactive dashboard analyzing customer churn behavior and identifying patterns related to engagement and purchasing activity.",
    tech: ["Power BI", "Python", "Data Analysis"],
    website: "#",
  },
  {
    number: "02",
    title: "Eco Event Finder",
    category: "WEB DEVELOPMENT",
    image: "/project/eco.png",
    description:
      "A web application for discovering and managing environmental events, built with React, Django REST Framework, and MySQL.",
    tech: ["React", "Tailwind CSS", "Django", "MySQL"],
    website: "https://eco-event-finder.vercel.app/",
  },
  {
    number: "03",
    title: "MaterLife",
    category: "AI & MACHINE LEARNING",
    image: "/project/materlife.png",
    description:
      "An AI-based maternal health risk prediction website that provides risk predictions based on health-related input data.",
    tech: ["Python", "Machine Learning", "Web App"],
    website: "https://mater-life.vercel.app",
  },
  {
    number: "04",
    title: "E-Commerce Customer Churn Report",
    category: "DATA ANALYTICS",
    image: "/project/churn-dashboard.png",
    description:
      "A data analytics report exploring customer churn patterns, engagement behavior, and purchasing activity.",
    tech: ["Power BI", "Python", "Data Analysis"],
    website: "#",
  },
];

const experiences = [
  {
    year: "2025 — Present",
    title: "Student Tutor",
    company: "Helpmate Course",
    type: "Part-time",
    image: "/experience/tutor.jpeg",
    description:
      "Provided academic tutoring for high school students in Mathematics, Physics, and Chemistry through private and semi-private learning sessions.",
  },
  {
    year: "2025 — 2026",
    title: "Freshmen Partner",
    company: "BINUS University",
    type: "Seasonal",
    image: "/experience/fp.jpg",
    description:
      "Mentored freshmen throughout their first academic year, supporting their adaptation to university life, academic systems, and campus communities.",
  },
  {
    year: "2025",
    title: "Freshmen Leader",
    company: "BINUS University",
    type: "Seasonal",
    image: "/experience/fl.jpg",
    description:
      "Supported new students during the First Year Program by guiding orientation activities, sharing information, and encouraging participation.",
  },
  {
    year: "2025",
    title: "Academic Tutor",
    company: "Algo Bootcamp",
    type: "Part-time",
    image: "/experience/academic-tutor.jpeg",
    description:
      "Provided online Linear Algebra tutoring for 30+ incoming Computer Science students and prepared learning materials and practice questions.",
  },
  {
    year: "2024",
    title: "Social Media Marketing Intern",
    company: "Universitas Multimedia Nusantara",
    type: "Internship",
    image: "/experience/umn.jpg",
    description:
      "Created and edited social media content for @umninternational, including captions, content drafts, scheduling, and content ideas.",
  },
];

const skills = [
  {
    category: "PROGRAMMING",
    items: ["Python", "Java", "SQL"],
  },
  {
    category: "DATABASE",
    items: ["MySQL", "Database Technology"],
  },
  {
    category: "DATA & AI",
    items: ["Data Analysis", "Machine Learning", "Pandas", "Power BI"],
  },
  {
    category: "WEB & TOOLS",
    items: ["React", "Django", "Tailwind CSS", "Git", "GitHub"],
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={darkMode ? "dark-mode" : ""}>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-mark">S.</span>
            <span className="logo-name">Seraphine Michelle Atmadjie</span>
          </a>

          <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? "☼" : "☾"}
            </button>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-copy">
            <div className="hero-label">
              <span className="status-dot"></span>
              COMPUTER SCIENCE STUDENT
            </div>

            <h1>
              Seraphine
              <br />
              Michelle
              <span> Atmadjie.</span>
            </h1>

            <p className="hero-intro">
              Building with data, code, and curiosity. Currently exploring
              database technology, software development, and data analytics.
            </p>

            <div className="hero-links">
              <a href="#work" className="text-link primary-link">
                Explore my work <span>↗</span>
              </a>

              <a href="#about" className="text-link">
                More about me <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <div className="hero-image-bg"></div>

              <img
                src="/profile.jpg"
                alt="Seraphine Michelle Atmadjie"
                className="hero-image"
              />

              <div className="hero-caption">
                <span>BASED IN</span>
                <strong>INDONESIA</strong>
              </div>
            </div>

            <div className="hero-decoration hero-decoration-one"></div>
            <div className="hero-decoration hero-decoration-two"></div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
          <span>01 — 06</span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">
        <div className="section-topline">
          <span>01</span>
          <span>ABOUT</span>
        </div>

        <div className="about-layout">
          <div className="section-title-block">
            <p className="small-label">A LITTLE ABOUT ME</p>
            <h2>
              Curious by nature,
              <br />
              <em>technical by choice.</em>
            </h2>
          </div>

          <div className="about-copy">
            <p className="large-copy">
              I&apos;m a Computer Science student at BINUS University with an
              interest in database technology, software development, data, and
              technology.
            </p>

            <p>
              Throughout my academic journey, I&apos;ve worked on projects
              across data analytics, machine learning, and web development,
              while also gaining experience through tutoring, mentoring, and
              organizational activities.
            </p>

            <p>
              I enjoy learning new technologies, solving problems, and turning
              ideas into practical projects.
            </p>

            <div className="about-meta">
              <div>
                <span>EDUCATION</span>
                <strong>BINUS University</strong>
              </div>

              <div>
                <span>FIELD</span>
                <strong>Computer Science</strong>
              </div>

              <div>
                <span>INTERESTS</span>
                <strong>Database · Data · Software</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK / ARMORY ================= */}

      <section id="work" className="section work-section">
        <div className="section-topline">
          <span>02</span>
          <span>SELECTED WORK</span>
        </div>

        <div className="work-heading">
          <div>
            <p className="small-label">PROJECT ARCHIVE</p>
            <h2>Things I&apos;ve built.</h2>
          </div>

          <p>
            A collection of projects from my Computer Science journey,
            spanning data analytics, machine learning, and web development.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <div className="project-index">{project.number}</div>

              <div className="project-info">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {project.website !== "#" ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                  >
                    View project <span>↗</span>
                  </a>
                ) : (
                  <span className="project-arrow muted">
                    Project archive <span>→</span>
                  </span>
                )}
              </div>

              <div className="project-preview">
                <img src={project.image} alt={project.title} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section experience-section">
        <div className="section-topline">
          <span>03</span>
          <span>EXPERIENCE</span>
        </div>

        <div className="experience-layout">
          <div className="experience-intro">
            <p className="small-label">MY JOURNEY</p>

            <h2>
              Learning through
              <br />
              <em>experience.</em>
            </h2>

            <p>
              Experiences that have helped me grow academically,
              professionally, and personally.
            </p>

            <div className="experience-preview">
              <img
                src={experiences[activeExperience].image}
                alt={experiences[activeExperience].title}
              />

              <div className="preview-overlay">
                <span>SELECTED</span>
                <strong>
                  {String(activeExperience + 1).padStart(2, "0")}
                </strong>
              </div>
            </div>
          </div>

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <div
                className={`experience-item ${
                  activeExperience === index ? "active" : ""
                }`}
                key={`${experience.title}-${experience.company}`}
                onMouseEnter={() => setActiveExperience(index)}
              >
                <div className="experience-year">
                  {experience.year}
                </div>

                <div className="experience-main">
                  <div className="experience-title-line">
                    <h3>{experience.title}</h3>
                    <span>{experience.type}</span>
                  </div>

                  <p className="experience-company">
                    {experience.company}
                  </p>

                  <p className="experience-description">
                    {experience.description}
                  </p>
                </div>

                <div className="experience-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section education-section">
        <div className="section-topline">
          <span>04</span>
          <span>EDUCATION</span>
        </div>

        <div className="education-heading">
          <p className="small-label">ACADEMIC BACKGROUND</p>
          <h2>Where I&apos;ve learned.</h2>
        </div>

        <div className="education-list">
          <div className="education-item">
            <div className="education-number">01</div>

            <div className="education-main">
              <span>JUN 2024 — JUN 2028</span>
              <h3>BINUS University</h3>
              <h4>Bachelor&apos;s Degree, Computer Science</h4>
              <p>
                Undergraduate Computer Science student with interests in
                database technology, software development, data, and
                technology.
              </p>
            </div>

            <div className="education-side">UNDERGRADUATE</div>
          </div>

          <div className="education-item">
            <div className="education-number">02</div>

            <div className="education-main">
              <span>JUL 2021 — JUN 2024</span>
              <h3>Saint John&apos;s Catholic School</h3>
              <h4>High School Diploma, Science</h4>
              <p>
                Activities included Student Council and School Cup Fundraising
                and Consumption Crew.
              </p>
            </div>

            <div className="education-side">HIGH SCHOOL</div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className="section skills-section">
        <div className="section-topline">
          <span>05</span>
          <span>SKILLS & TOOLS</span>
        </div>

        <div className="skills-heading">
          <p className="small-label">WHAT I WORK WITH</p>
          <h2>
            Tools are just tools.
            <br />
            <em>Curiosity does the work.</em>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <div className="skill-block" key={group.category}>
              <div className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{group.category}</h3>

              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="section-topline light-line">
            <span>06</span>
            <span>CONTACT</span>
          </div>

          <div className="contact-content">
            <p className="small-label">LET&apos;S CONNECT</p>

            <h2>
              Let&apos;s make something
              <br />
              <em>interesting.</em>
            </h2>

            <p>
              Open to internships, collaborations, and interesting projects.
              Feel free to reach out.
            </p>

            <div className="contact-links">
              <a
                href="mailto:your.email@gmail.com"
                className="contact-link"
              >
                <span>Email</span>
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <footer className="site-footer">
            <span>© 2026 Seraphine Michelle Atmadjie</span>
            <span>Built with Next.js</span>
          </footer>
        </div>
      </section>
    </main>
  );
}