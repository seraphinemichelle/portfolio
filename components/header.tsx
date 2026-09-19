"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", icon: "⌂" },
  { label: "About", href: "#about", icon: "○" },
  { label: "Work", href: "#work", icon: "▦" },
  { label: "Experience", href: "#experience", icon: "◇" },
  { label: "Tech Stack", href: "#skills", icon: "✦" },
  { label: "Contact", href: "#contact", icon: "↗" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  /* =====================================================
     LOAD SAVED THEME
  ===================================================== */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  /* =====================================================
     SAVE + SEND THEME
  ===================================================== */

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

    window.dispatchEvent(
      new CustomEvent("theme-change", {
        detail: { darkMode },
      })
    );
  }, [darkMode]);

  /* =====================================================
     DETECT ACTIVE SECTION
  ===================================================== */

  useEffect(() => {
    const sections = navItems
      .map((item) =>
        document.getElementById(
          item.href.replace("#", "")
        )
      )
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     SMOOTH NAVIGATION
  ===================================================== */

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.history.replaceState(
      null,
      "",
      href
    );
  };

  return (
    <header className="site-header">
      <div className="navbar">
        <div className="nav-container">

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#home"
            className="logo"
            onClick={(e) =>
              handleNavigation(e, "#home")
            }
          >
            <span className="logo-mark">
              S.
            </span>

            <span className="logo-name">
              Seraphine Michelle Atmadjie
            </span>
          </a>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav
            className="nav-links"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const sectionId =
                item.href.replace("#", "");

              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) =>
                    handleNavigation(
                      e,
                      item.href
                    )
                  }
                  className={
                    isActive ? "active" : ""
                  }
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                >
                  <span className="nav-icon">
                    {item.icon}
                  </span>

                  <span className="nav-label">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="nav-actions">

            <button
              className="theme-toggle"
              type="button"
              onClick={() =>
                setDarkMode((prev) => !prev)
              }
              aria-label="Toggle theme"
            >
              {darkMode ? "☼" : "☾"}
            </button>

            <button
              className="menu-toggle"
              type="button"
              aria-label="Open menu"
            >
              ☰
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}