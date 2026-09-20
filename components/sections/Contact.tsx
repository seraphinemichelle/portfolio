import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <SectionHeading number="05" label="CONTACT" light />

        <div className="contact-content">
          <p className="small-label">LET&apos;S CONNECT</p>

          <h2>
            Let&apos;s make something
            <br />
            <em>interesting.</em>
          </h2>

          <p>
            Open to internships, collaborations, and interesting projects.
            Feel free to reach out.
          </p>

          <div className="contact-links">
            <a href="mailto:your.email@gmail.com" className="contact-link">
              <span>Email</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <footer className="site-footer">
          <span>© 2026 Seraphine Michelle Atmadjie</span>
          <span>Built with Next.js</span>
        </footer>
      </div>
    </section>
  );
}
