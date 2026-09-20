export default function About() {
  return (
    <section
      id="about"
      className="section about-section"
    >
      <div className="section-topline">
        <span>01</span>
        <span>ABOUT</span>
      </div>

      <div className="about-layout">

        {/* LEFT SIDE */}
        <div className="about-left">
          <p className="small-label">
            A LITTLE ABOUT ME
          </p>

          <div className="about-visual">
            <div className="about-image-bg" />

            <img
              src="/profile.JPG"
              alt="Seraphine Michelle Atmadjie"
              className="about-image"
            />

            <div className="about-image-caption">
              <span>BASED IN</span>
              <strong>Jakarta, Indonesia</strong>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-copy">
          <p className="large-copy">
            I&apos;m Michelle, a Computer Science undergraduate at BINUS
            University with an interest in database technology and software
            development. I&apos;m currently pursuing a career as an Data Analyst
            or Data Scientist.
          </p>

          <p>
            Throughout my academic journey, I&apos;ve worked
            on projects across data analytics, machine
            learning, and web development, while also gaining
            experience through tutoring, mentoring, and
            organizational activities.
          </p>

          <p>
            I enjoy learning new technologies, solving
            problems, and turning ideas into practical
            projects.
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
              <strong>
                Database · Data · Software
              </strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}