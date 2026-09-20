import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <SectionHeading number="04" label="SKILLS & TOOLS" />

      <div className="skills-heading">
        <p className="small-label">TECH STACK</p>

        <h2>
          Tools I work
          <br />
          <em>with.</em>
        </h2>

        <p className="skills-intro">
          A selection of technologies and tools I&apos;ve worked with across
          database, data analytics, programming, and web development.
        </p>
      </div>

      <div className="skills-logo-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name} data-skill={skill.name}>
            <div className="skill-icon-wrap">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
