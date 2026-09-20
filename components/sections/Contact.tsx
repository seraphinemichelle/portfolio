"use client";

import { useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);

  const targetPos = useRef({
    x: 0,
    y: 0,
  });

  const smoothPos = useRef({
    x: 0,
    y: 0,
  });

  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const initialX = rect.width / 2;
    const initialY = rect.height / 2;

    targetPos.current = {
      x: initialX,
      y: initialY,
    };

    smoothPos.current = {
      x: initialX,
      y: initialY,
    };

    card.style.setProperty(
      "--mask-x",
      `${initialX}px`
    );

    card.style.setProperty(
      "--mask-y",
      `${initialY}px`
    );

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      const currentRect =
        card.getBoundingClientRect();

      targetPos.current = {
        x:
          event.clientX -
          currentRect.left,

        y:
          event.clientY -
          currentRect.top,
      };
    };

    document.addEventListener(
      "mousemove",
      handleMouseMove,
      {
        passive: true,
      }
    );

    const easingFactor = 0.09;

    const tick = () => {
      const dx =
        targetPos.current.x -
        smoothPos.current.x;

      const dy =
        targetPos.current.y -
        smoothPos.current.y;

      smoothPos.current = {
        x:
          smoothPos.current.x +
          dx * easingFactor,

        y:
          smoothPos.current.y +
          dy * easingFactor,
      };

      card.style.setProperty(
        "--mask-x",
        `${smoothPos.current.x}px`
      );

      card.style.setProperty(
        "--mask-y",
        `${smoothPos.current.y}px`
      );

      rafId.current =
        requestAnimationFrame(tick);
    };

    rafId.current =
      requestAnimationFrame(tick);

    return () => {
      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      if (rafId.current) {
        cancelAnimationFrame(
          rafId.current
        );
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-inner">
        <SectionHeading
          number="05"
          label="CONTACT"
        />

        <div className="contact-heading">
          <p className="small-label">
            LET&apos;S CONNECT
          </p>

          <h2>
            Let&apos;s make something <em>interesting.</em>
          </h2>

          <p>
            Open to internships, collaborations, and interesting
            opportunities. Feel free to reach out.
          </p>
        </div>

        {/* INTERACTIVE CONTACT BOX */}
        <div
          ref={cardRef}
          className="contact-card"
        >
          {/* BACKGROUND */}
          <div
            className="contact-card-effects"
            aria-hidden="true"
          >
            <div className="contact-mask">
              <div className="contact-gradient-blob" />
              <div className="contact-dots-pattern" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="contact-card-content contact-grid">

            {/* EMAIL */}
            <a
              href="mailto:seraphinemichellee@gmail.com"
              className="contact-simple-item"
            >
              <div className="contact-simple-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>

              <h3>Email</h3>

              <span className="contact-simple-arrow">
                ↗
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/seraphinemichelle/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-simple-item"
            >
              <div className="contact-simple-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </div>

              <h3>LinkedIn</h3>

              <span className="contact-simple-arrow">
                ↗
              </span>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/seraphinemichelle"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-simple-item"
            >
              <div className="contact-simple-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.35-3.84-1.35-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
                </svg>
              </div>

              <h3>GitHub</h3>

              <span className="contact-simple-arrow">
                ↗
              </span>
            </a>

          </div>
        </div>

        <footer className="site-footer">
          <span>
            © 2026 Seraphine Michelle Atmadjie.
            All rights reserved.
          </span>

          <span>
            Built with Next.js
          </span>
        </footer>
      </div>
    </section>
  );
}