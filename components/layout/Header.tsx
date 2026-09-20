"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { navItems } from "@/data/nav";
import { useTheme } from "@/context/theme-context";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", href);
  };

  return (
    <header className="site-header">
      <div className="navbar">
        <div className="nav-container">
          <a
            href="#home"
            className="logo"
            onClick={(e) => handleNavigation(e, "#home")}
          >
            <span className="logo-mark">S.</span>
            <span className="logo-name">Seraphine Michelle Atmadjie</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {darkMode ? "☼" : "☾"}
            </button>

            <button className="menu-toggle" type="button" aria-label="Open menu">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
