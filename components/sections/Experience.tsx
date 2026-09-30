"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getExperiences } from "@/lib/experience";

type Experience = {
  id: number;
  year: string;
  title: string;
  company: string;
  type: string;
  image: string;
  description: string;
};

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [activeExperience, setActiveExperience] = useState(0);

  // AMBIL DATA DARI SUPABASE
  useEffect(() => {
    getExperiences()
      .then((data) => {
        setExperiences(data);
      });
  }, []);

  // BIAR TIDAK ERROR SAAT DATA MASIH KOSONG
  if (experiences.length === 0) {
    return null;
  }

  const active = experiences[activeExperience];
  return (
    <section 
      id="experience" 
      className="section experience-section"
    >
      <SectionHeading 
        number="03" 
        label="EXPERIENCE" 
      />
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
            Experiences that have helped me grow academically, professionally,
            and personally.
          </p>
          <div className="experience-preview">
            <img 
              src={active.image} 
              alt={active.title} 
            />
          </div>
        </div>
        <div className="experience-list">
          {experiences.map((experience,index)=>(
            <div
              className={`experience-item ${
                activeExperience === index
                  ? "active"
                  : ""
              }`}
              key={experience.id}
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
                {String(index + 1).padStart(2,"0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}