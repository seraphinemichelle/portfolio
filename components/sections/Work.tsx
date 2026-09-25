"use client";

import { useState } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const filters = [
  "All",
  "Data",
  "Web",
  "AI",
];

export default function Work() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filteredProjects = projects.filter(
    (project) => {
      if (activeFilter === "All") {
        return true;
      }

      return project.filter === activeFilter;
    }
  );

  return (
    <section
      id="work"
      className="section work-section"
    >
      <SectionHeading
        number="02"
        label="SELECTED WORK"
      />

      <div className="work-heading">
        <div>
          <p className="small-label">
            PROJECT ARCHIVE
          </p>

          <h2>
            Things I&apos;ve{" "}
            <em>built.</em>
          </h2>
        </div>

        <p>
          A collection of projects from my
          Computer Science journey, spanning
          data analytics, machine learning,
          and web development.
        </p>
      </div>

      {/* FILTER */}
      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`project-filter ${
              activeFilter === filter
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveFilter(filter)
            }
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT LIST */}
      <div className="project-list">
        {filteredProjects.map(
          (project, index) => (
            <article
              className="project-row"
              key={project.number}
            >
              {/* NUMBER SESUAI HASIL FILTER */}
              <div className="project-index">
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </div>

              <div className="project-info">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map(
                    (item) => (
                      <span key={item}>
                        {item}
                      </span>
                    )
                  )}
                </div>

                {project.website !== "#" ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                  >
                    View project
                    <span>↗</span>
                  </a>
                ) : (
                  <span className="project-arrow muted">
                    Project archive
                    <span>→</span>
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
          )
        )}
      </div>
    </section>
  );
}