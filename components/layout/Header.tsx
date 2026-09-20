"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import { navItems } from "@/data/nav";
import { useTheme } from "@/context/theme-context";

export default function Header() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [menuOpen, setMenuOpen] =
    useState(false);

  const { darkMode, toggleTheme } =
    useTheme();

  const headerRef =
    useRef<HTMLElement>(null);

  /* =========================================================
     ACTIVE SECTION ON SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint =
        window.innerHeight * 0.32;

      let currentSection = "home";

      navItems.forEach((item) => {
        const sectionId =
          item.href.replace("#", "");

        const section =
          document.getElementById(
            sectionId
          );

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= triggerPoint &&
          rect.bottom > triggerPoint
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU WHEN RESIZED TO DESKTOP
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
  ========================================================= */

  useEffect(() => {
    const handleOutsideClick = (
      event: globalThis.MouseEvent
    ) => {
      if (
        menuOpen &&
        headerRef.current &&
        !headerRef.current.contains(
          event.target as Node
        )
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [menuOpen]);

  /* =========================================================
     NAVIGATION CLICK
  ========================================================= */

  const handleNavigation = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const sectionId =
      href.replace("#", "");

    const target =
      document.getElementById(
        sectionId
      );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(sectionId);
    }

    window.history.replaceState(
      null,
      "",
      href
    );

    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="site-header"
    >
      <div className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <a
            href="#home"
            className="logo"
            onClick={(e) =>
              handleNavigation(
                e,
                "#home"
              )
            }
          >
            <span className="logo-mark">
              S.
            </span>

            <span className="logo-name">
              Seraphine Michelle Atmadjie
            </span>
          </a>

          {/* NAV LINKS */}
          <nav
            className={`nav-links ${
              menuOpen
                ? "mobile-open"
                : ""
            }`}
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const sectionId =
                item.href.replace(
                  "#",
                  ""
                );

              const isActive =
                activeSection ===
                sectionId;

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
                    isActive
                      ? "active"
                      : ""
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

          {/* RIGHT ACTIONS */}
          <div className="nav-actions">

            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {darkMode
                ? "☼"
                : "☾"}
            </button>

            <button
              className="menu-toggle"
              type="button"
              onClick={() =>
                setMenuOpen(
                  (prev) => !prev
                )
              }
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={
                menuOpen
              }
            >
              {menuOpen
                ? "✕"
                : "☰"}
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}