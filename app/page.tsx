"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";

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
    name: "MySQL",
    category: "DATABASE",
    icon: "/skills/mysql.svg",
  },
  {
    name: "Power BI",
    category: "DATA",
    icon: "/skills/powerbi.svg",
  },
  {
    name: "Tableau",
    category: "DATA",
    icon: "/skills/tableau.svg",
  },
  {
    name: "Pandas",
    category: "DATA",
    icon: "/skills/pandas.svg",
  },
  {
    name: "C++",
    category: "PROGRAMMING",
    icon: "/skills/c.svg",
  },
  {
    name: "Git",
    category: "TOOLS",
    icon: "/skills/git.svg",
  },
  {
    name: "Python",
    category: "PROGRAMMING",
    icon: "/skills/python.svg",
  },
  {
    name: "Figma",
    category: "DESIGN",
    icon: "/skills/figma.svg",
  },
  {
    name: "HTML",
    category: "WEB",
    icon: "https://cdn.simpleicons.org/html5",
  },
  {
    name: "CSS",
    category: "WEB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Javascript",
    category: "WEB",
    icon: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "Java",
    category: "PROGRAMMING",
    icon: "/skills/java.svg",
  },
  {
    name: "Django",
    category: "WEB",
    icon: "https://cdn.simpleicons.org/django",
  },
];

export default function Home() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<{
        darkMode: boolean;
      }>;

      setDarkMode(customEvent.detail.darkMode);
    };

    window.addEventListener(
      "theme-change",
      handleThemeChange
    );

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }

    return () => {
      window.removeEventListener(
        "theme-change",
        handleThemeChange
      );
    };
  }, []);

  return (
    <main className={darkMode ? "dark-mode" : ""}>

      {/* =====================================================
          ANIMATED BACKGROUND
      ===================================================== */}

      <div
        className="ambient-background"
        aria-hidden="true"
      >
        <div className="ambient-grid"></div>

        <div className="ambient-orb orb-one"></div>
        <div className="ambient-orb orb-two"></div>
        <div className="ambient-orb orb-three"></div>
        <div className="ambient-orb orb-four"></div>

        <div className="ambient-ring ring-one"></div>
        <div className="ambient-ring ring-two"></div>
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

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
              Building with data, code, and curiosity.
              Currently exploring database technology,
              software development, and data analytics.
            </p>

            <div className="hero-links">

              <a
                href="#work"
                className="text-link primary-link"
              >
                Explore my work <span>↗</span>
              </a>

              <a
                href="#about"
                className="text-link"
              >
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

          <span>01 — 05</span>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="section about-section"
      >
        <div className="section-topline">
          <span>01</span>
          <span>ABOUT</span>
        </div>

        <div className="about-layout">

          <div className="section-title-block">

            <p className="small-label">
              A LITTLE ABOUT ME
            </p>

            <h2>
              Curious by nature,
              <br />
              <em>technical by choice.</em>
            </h2>

          </div>

          <div className="about-copy">

            <p className="large-copy">
              I&apos;m a Computer Science student at
              BINUS University with an interest in
              database technology, software development,
              data, and technology.
            </p>

            <p>
              Throughout my academic journey, I&apos;ve
              worked on projects across data analytics,
              machine learning, and web development,
              while also gaining experience through
              tutoring, mentoring, and organizational
              activities.
            </p>

            <p>
              I enjoy learning new technologies,
              solving problems, and turning ideas into
              practical projects.
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
                <span>FOCUS</span>
                <strong>
                  Database · Data · Software
                </strong>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WORK
      ===================================================== */}

      <section
        id="work"
        className="section work-section"
      >
        <div className="section-topline">
          <span>02</span>
          <span>SELECTED WORK</span>
        </div>

        <div className="work-heading">

          <div>

            <p className="small-label">
              PROJECT ARCHIVE
            </p>

            <h2>
              Things I&apos;ve built.
            </h2>

          </div>

          <p>
            A collection of projects from my Computer
            Science journey, spanning data analytics,
            machine learning, and web development.
          </p>

        </div>

        <div className="project-list">

          {projects.map((project) => (
            <article
              className="project-row"
              key={project.number}
            >

              <div className="project-index">
                {project.number}
              </div>

              <div className="project-info">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.tech.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
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

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="section experience-section"
      >

        <div className="section-topline">
          <span>03</span>
          <span>EXPERIENCE</span>
        </div>

        <div className="experience-layout">

          <div className="experience-intro">

            <p className="small-label">
              MY JOURNEY
            </p>

            <h2>
              Learning through
              <br />
              <em>experience.</em>
            </h2>

            <p>
              Experiences that have helped me grow
              academically, professionally, and
              personally.
            </p>

            <div className="experience-preview">

              <img
                src={
                  experiences[activeExperience].image
                }
                alt={
                  experiences[activeExperience].title
                }
              />

              <div className="preview-overlay">

                <span>SELECTED</span>

                <strong>
                  {String(
                    activeExperience + 1
                  ).padStart(2, "0")}
                </strong>

              </div>

            </div>

          </div>

          <div className="experience-list">

            {experiences.map(
              (experience, index) => (
                <div
                  className={`experience-item ${
                    activeExperience === index
                      ? "active"
                      : ""
                  }`}
                  key={`${experience.title}-${experience.company}`}
                  onMouseEnter={() =>
                    setActiveExperience(index)
                  }
                >

                  <div className="experience-year">
                    {experience.year}
                  </div>

                  <div className="experience-main">

                    <div className="experience-title-line">

                      <h3>
                        {experience.title}
                      </h3>

                      <span>
                        {experience.type}
                      </span>

                    </div>

                    <p className="experience-company">
                      {experience.company}
                    </p>

                    <p className="experience-description">
                      {experience.description}
                    </p>

                  </div>

                  <div className="experience-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-topline">
          <span>04</span>
          <span>SKILLS & TOOLS</span>
        </div>

        <div className="skills-heading">

          <p className="small-label">
            TECH STACK
          </p>

          <h2>
            Tools I work
            <br />
            <em>with.</em>
          </h2>

          <p className="skills-intro">
            A selection of technologies and tools
            I&apos;ve worked with across database,
            data analytics, programming, and web
            development.
          </p>

        </div>

        <div className="skills-logo-grid">

          {skills.map((skill) => (
            <div
              className="skill-card"
              key={skill.name}
              data-skill={skill.name}
            >

              <div className="skill-icon-wrap">

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                />

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-inner">

          <div className="section-topline light-line">
            <span>05</span>
            <span>CONTACT</span>
          </div>

          <div className="contact-content">

            <p className="small-label">
              LET&apos;S CONNECT
            </p>

            <h2>
              Let&apos;s make something
              <br />
              <em>interesting.</em>
            </h2>

            <p>
              Open to internships, collaborations,
              and interesting projects. Feel free to
              reach out.
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

            <span>
              © 2026 Seraphine Michelle Atmadjie
            </span>

            <span>
              Built with Next.js
            </span>

          </footer>

        </div>

      </section>

    </main>
  );
}