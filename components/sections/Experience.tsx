"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const active = experiences[activeExperience];

  return (
    <section id="experience" className="section experience-section">
      <SectionHeading number="03" label="EXPERIENCE" />

      <div className="experience-layout">
        <div className="experience-intro">
          <p className="small-label">MY JOURNEY</p>

          <h2>
            Learning through
            <br />
            <em>experience.</em>
          </h2>

          <p>
            Experiences that have helped me grow academically, professionally,
            and personally.
          </p>

          <div className="experience-preview">
            <img src={active.image} alt={active.title} />
            <div className="preview-overlay">
              <strong>{String(activeExperience + 1).padStart(2, "0")}</strong>
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
              <div className="experience-year">{experience.year}</div>

              <div className="experience-main">
                <div className="experience-title-line">
                  <h3>{experience.title}</h3>
                  <span>{experience.type}</span>
                </div>

                <p className="experience-company">{experience.company}</p>
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
  );
}
