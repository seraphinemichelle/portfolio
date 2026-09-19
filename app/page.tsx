"use client";

import { useState } from "react";

const experiences = [
  {
    title: "Student Tutor",
    company: "Helpmate Course",
    type: "Part-time",
    date: "Jul 2025 – Present",
    image: "/experience/tutor.jpeg",
    description:
      "Provided academic tutoring for high school students in Mathematics, Physics, and Chemistry through private and semi-private learning sessions. Helped students understand school materials, solve practice problems, and improve their confidence in science subjects.",
  },
  {
    title: "Freshmen Partner",
    company: "BINUS University",
    type: "Seasonal",
    date: "Jul 2025 – Jul 2026",
    image: "/experience/fp.jpg",
    description:
      "Mentored freshmen throughout their first academic year, helping them adapt to university life, understand academic systems, build confidence, and connect with campus communities and activities.",
  },
  {
    title: "Freshmen Leader",
    company: "BINUS University",
    type: "Seasonal",
    date: "Jul 2025 – Sep 2025",
    image: "/experience/fl.jpg",
    description:
      "Supported new students during the First Year Program by guiding orientation activities, sharing important information, encouraging participation, and creating a welcoming environment.",
  },
  {
    title: "Academic Tutor",
    company: "Algo Bootcamp",
    type: "Part-time",
    date: "Jul 2025 – Sep 2025",
    image: "/experience/academic-tutor.jpeg",
    description:
      "Provided online tutoring in Linear Algebra for 30+ incoming Computer Science students. Prepared structured learning materials, practice questions, and detailed solution explanations.",
  },
  {
    title: "Social Media Marketing Intern",
    company: "Universitas Multimedia Nusantara",
    type: "Internship",
    date: "Apr 2024 – May 2024",
    image: "/experience/umn.jpg",
    description:
      "Created and edited social media content for @umninternational, including caption writing, content drafting, scheduling, and content ideas while maintaining the organization's brand voice.",
  },
];

const projects = [
  {
    number: "01",
    title: "E-Commerce Customer Churn Dashboard",
    category: "Data Analytics",
    image: "/project/churn-dashboard.png",
    description:
      "Interactive dashboard analyzing customer churn behavior and identifying patterns related to customer engagement and purchasing behavior.",
    tech: ["Power BI", "Python", "Data Analysis"],
    website: "#",
  },
  {
    number: "02",
    title: "Eco Event Finder",
    category: "Web Development",
    image: "/project/eco.png",
    description:
      "A web application for discovering and managing environmental events, built with React, Django REST Framework, and MySQL.",
    tech: ["React", "Tailwind CSS", "Django", "MySQL"],
    website: "https://eco-event-finder.vercel.app/",
  },
  {
    number: "03",
    title: "MaterLife",
    category: "AI & Machine Learning",
    image: "/project/materlife.png",
    description:
      "An AI-based maternal health risk prediction website that provides low or high risk predictions based on health-related input data.",
    tech: ["Python", "Machine Learning", "Web App"],
    website: "https://mater-life.vercel.app",
  },
  {
    number: "04",
    title: "E-Commerce Customer Churn Data Analyst Report Paper",
    category: "Data Analytics",
    image: "/project/churn-dashboard.png",
    description:
      "A data analytics report analyzing customer churn patterns, customer behavior, and factors related to customer engagement and purchasing activity.",
    tech: ["Power BI", "Python", "Data Analysis"],
    website: "#",
  },
];

const education = [
  {
    degree: "Bachelor's Degree, Computer Science",
    school: "BINUS University",
    date: "Jun 2024 – Jun 2028",
    description:
      "Undergraduate Computer Science student with interests in database technology, software development, data, and technology.",
  },
  {
    degree: "High School Diploma, Science",
    school: "Saint John's Catholic School",
    date: "Jul 2021 – Jun 2024",
    description:
      "Activities included Student Council and School Cup Fundraising and Consumption Crew.",
  },
];

const skillGroups = [
  {
    title: "Programming & Database",
    skills: ["Python", "Java", "SQL", "MySQL"],
  },
  {
    title: "Data & AI",
    skills: ["Data Analysis", "Machine Learning", "Power BI", "Pandas"],
  },
  {
    title: "Web Development & Tools",
    skills: ["React", "Tailwind CSS", "Django", "Git", "GitHub"],
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark-mode" : ""}>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <span className="logo-circle">CS</span>
            <span>Seraphine Michelle Atmadjie</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀" : "☾"}
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero section">
        <div className="hero-container">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I&apos;M</p>

            <h1>
              Seraphine Michelle Atmadjie<span>.</span>
            </h1>

            <h2>Computer Science Student</h2>

            <p className="hero-description">
              An undergraduate Computer Science student at BINUS University
              interested in database technology, software development, data,
              and technology.
            </p>

            <div className="hero-buttons">
              <a href="#experience" className="btn primary-btn">
                View My Experience
              </a>

              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-decoration circle-decoration"></div>

            <div className="photo-decoration square-decoration"></div>

            <div className="profile-frame">
              <img
                src="/profile.jpg"
                alt="Seraphine Michelle Atmadjie"
                className="profile-image"
              />
            </div>

            <div className="small-dot"></div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">
        <div className="section-heading">
          <p className="eyebrow">GET TO KNOW ME</p>

          <h2>About Me</h2>
        </div>

        <div className="about-container">
          <div className="about-image-wrapper">
            <div className="about-image">
              <img
                src="/profile.jpg"
                alt="Seraphine Michelle Atmadjie"
              />
            </div>
          </div>

          <div className="about-content">
            <p>
              Hi! I&apos;m a Computer Science student at BINUS University
              with an interest in database technology, software development,
              data, and technology.
            </p>

            <p>
              Throughout my academic journey, I have worked on various
              projects while also gaining experience through tutoring,
              mentoring, and organizational activities.
            </p>

            <p>
              I enjoy learning new technologies, solving problems, and
              applying what I learn to real-world projects.
            </p>

            <div className="about-highlights">
              <div>
                <strong>Computer Science</strong>

                <span>Academic Background</span>
              </div>

              <div>
                <strong>Database & Data</strong>

                <span>Areas of Interest</span>
              </div>

              <div>
                <strong>Continuous Learning</strong>

                <span>Personal Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section experience-section">
        <div className="section-heading">
          <p className="eyebrow">MY JOURNEY</p>

          <h2>Experience</h2>

          <p>
            Experiences that have helped me grow academically,
            professionally, and personally.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <div
              className="experience-card"
              key={`${experience.title}-${experience.company}`}
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="experience-image"
              />

              <div className="experience-top">
                <div className="experience-icon">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="experience-type">
                  {experience.type}
                </span>
              </div>

              <h3>{experience.title}</h3>

              <p className="company">{experience.company}</p>

              <p className="date">{experience.date}</p>

              <p className="experience-description">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <p className="eyebrow">WHAT I&apos;VE BUILT</p>

          <h2>Projects</h2>

          <p>
            A selection of projects from my Computer Science journey.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.number}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <div className="project-number">
                  {project.number}
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tag-container">
                  {project.tech.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {project.website !== "#" ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Website →
                  </a>
                ) : (
                  <span className="project-link disabled-link">
                    Website Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section education-section">
        <div className="section-heading">
          <p className="eyebrow">MY BACKGROUND</p>

          <h2>Education</h2>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <div
              className="education-card"
              key={item.school}
            >
              <div className="education-icon">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{item.school}</h3>

                <h4>{item.degree}</h4>

                <p className="education-date">
                  {item.date}
                </p>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p className="eyebrow">TOOLS & TECHNOLOGIES</p>

          <h2>Skills</h2>

          <p>
            Technologies and tools I use throughout my Computer Science
            projects and learning journey.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skills-container">
                {group.skills.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <p className="eyebrow">LET&apos;S CONNECT</p>

          <h2>Let&apos;s build something together.</h2>

          <p>
            Feel free to reach out if you would like to connect,
            collaborate, or discuss technology and projects.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:seraphinemichellee@gmail.com"
              className="btn primary-btn"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/seraphinemichelle/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary-btn"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/seraphinemichelle"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <p>
          © 2026 Seraphine Michelle Atmadjie. Built with Next.js.
        </p>
      </footer>
    </main>
  );
}