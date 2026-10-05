import { profile } from "../../data/data";

export default function Home({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Typography & Action */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="status-dot" aria-hidden="true" />
              <span>Computer Science Engineering · India</span>
            </div>

            <h1 className="hero-heading">
              <span className="hero-heading-line">Building</span>
              <span className="hero-heading-line">
                <span className="hero-accent">Intelligent</span>
              </span>
              <span className="hero-heading-line">Software.</span>
            </h1>

            <p className="hero-description">
              Computer Science Engineering student at <strong>Sahyadri College (9.73 CGPA)</strong> building
              production-grade <strong>Generative AI systems</strong>, <strong>Agentic workflows</strong>,
              RAG pipelines, and modern full-stack web applications.
            </p>

            <div className="hero-cta-group">
              <button
                className="btn-primary"
                onClick={() => scrollTo("#work")}
                aria-label="View selected projects"
              >
                <span>View My Work</span>
                <span className="btn-arrow">↓</span>
              </button>

              <button
                className="btn-secondary"
                onClick={() => scrollTo("#contact")}
                aria-label="Get in touch"
              >
                <span>Let's Connect</span>
                <span className="btn-arrow">→</span>
              </button>

              <button
                className="btn-secondary"
                onClick={onOpenResume}
                aria-label="Open resume preview"
              >
                <span>Resume</span>
                <span className="btn-arrow">↗</span>
              </button>
            </div>

            <div className="hero-meta-row">
              <div className="hero-meta-item">
                <span className="meta-label">Academics</span>
                <span className="meta-val">9.73 / 10 CGPA</span>
              </div>
              <div className="hero-meta-item">
                <span className="meta-label">Degree & Batch</span>
                <span className="meta-val">B.E. CSE · 2024–2028</span>
              </div>
              <div className="hero-meta-item">
                <span className="meta-label">Core Specialization</span>
                <span className="meta-val">GenAI & Full-Stack</span>
              </div>
              <div className="hero-meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-val">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait / Visual Element */}
          <div className="hero-visual-col">
            <div className="editorial-portrait-frame">
              <div className="frame-corner-tl" aria-hidden="true" />
              <div className="frame-corner-br" aria-hidden="true" />

              <div className="portrait-image-wrapper">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="hero-portrait-img"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if image has issue
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "data:image/svg+xml;utf8," +
                      encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='480' viewBox='0 0 400 480'><rect width='400' height='480' fill='%23E8E3D5'/><text x='50%' y='50%' font-family='Space Grotesk, sans-serif' font-size='64' font-weight='bold' fill='%231D1C1A' text-anchor='middle'>${profile.name.toUpperCase()}</text></svg>`
                      );
                  }}
                />
              </div>

              <div className="portrait-caption">
                <span className="caption-name">{profile.name} Shettigar</span>
                <span className="caption-tag">VTU Autonomous</span>
              </div>

              <div className="portrait-floating-stamp">
                <span className="stamp-badge">LeetCode Milestone</span>
                <span className="stamp-value">250+ Active Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
