import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-copy">
          <div className="hero-label">
            <span className="status-dot" />
            {profile.title}
          </div>

          <h1>
            Seraphine
            <br />
            Michelle
            <span> Atmadjie.</span>
          </h1>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-links">
            <a href="#work" className="text-link primary-link">
              Explore my work <span>↗</span>
            </a>
            <a href="#about" className="text-link">
              More about me <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <div className="hero-image-bg" />
            <img
              src="/profile.JPG"
              alt={profile.name}
              className="hero-image"
            />
            <div className="hero-caption">
              <span>BASED IN</span>
              <strong>{profile.location}</strong>
            </div>
          </div>

          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
        <span>01 — 05</span>
      </div>
    </section>
  );
}
