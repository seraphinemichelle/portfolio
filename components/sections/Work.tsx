import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" className="section work-section">
      <SectionHeading number="02" label="SELECTED WORK" />

      <div className="work-heading">
        <div>
          <p className="small-label">PROJECT ARCHIVE</p>
          <h2>Things I&apos;ve built.</h2>
        </div>

        <p>
          A collection of projects from my Computer Science journey, spanning
          data analytics, machine learning, and web development.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <div className="project-index">{project.number}</div>

            <div className="project-info">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

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
  );
}
