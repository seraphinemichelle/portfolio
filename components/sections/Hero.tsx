export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-copy">
          <h1>
            Seraphine Michelle
            <br />
            <span>Atmadjie</span>
          </h1>

          <p className="hero-intro">
            Computer Science undergraduate with an interest in
            data analytics, data science, and software development. I enjoy turning ideas and data
            into structured, useful, and meaningful digital
            solutions.
          </p>

          <div className="hero-links">
            <a
              href="#work"
              className="text-link primary-link"
            >
              Explore Work
              <span>↘</span>
            </a>

            <a
              href="#about"
              className="text-link"
            >
              More About Me
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}