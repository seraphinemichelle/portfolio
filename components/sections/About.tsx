import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <SectionHeading number="01" label="ABOUT" />

      <div className="about-layout">
        <div className="section-title-block">
          <p className="small-label">A LITTLE ABOUT ME</p>
          <h2>
            Curious by nature,
            <br />
            <em>technical by choice.</em>
          </h2>
        </div>

        <div className="about-copy">
          <p className="large-copy">
            I&apos;m a Computer Science student at BINUS University with an
            interest in database technology, software development, data, and
            technology.
          </p>

          <p>
            Throughout my academic journey, I&apos;ve worked on projects across
            data analytics, machine learning, and web development, while also
            gaining experience through tutoring, mentoring, and organizational
            activities.
          </p>

          <p>
            I enjoy learning new technologies, solving problems, and turning
            ideas into practical projects.
          </p>

          <div className="about-meta">
            <div>
              <span>EDUCATION</span>
              <strong>BINUS University</strong>
            </div>
            <div>
              <span>FIELD</span>
              <strong>Computer Science</strong>
            </div>
            <div>
              <span>FOCUS</span>
              <strong>Database · Data · Software</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
