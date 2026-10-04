import { about, profile } from "../../data/data";

export default function About() {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-header-top">
            <span className="editorial-index">02 / ABOUT & BACKGROUND</span>
            <span className="editorial-tag">Personal Narrative</span>
          </div>
          <h2 className="editorial-title">Who I Am.</h2>
          <p className="editorial-subtitle">
            Engineering philosophy, academic credentials, and my approach to building resilient digital systems.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="about-asymmetric-grid">
          {/* Left Column: Bold Editorial Statements */}
          <div className="about-statement-col">
            <h3 className="about-statement">
              I build software at the intersection of{" "}
              <span className="about-statement-accent">full-stack development</span>{" "}
              and <span className="about-statement-accent">intelligent systems</span>.
            </h3>

            <div className="about-pull-quote">
              "Focusing on writing clean, scalable, and maintainable code while continuously improving problem-solving through Data Structures, Algorithms, and Generative AI workflows."
            </div>
          </div>

          {/* Right Column: Narrative & Metadata Table */}
          <div className="about-narrative-col">
            <p className="about-paragraph">
              {about.summary}
            </p>

            <p className="about-paragraph">
              {about.details}
            </p>

            {/* Editorial Metadata Table */}
            <div className="about-meta-table">
              <div className="about-meta-row">
                <span className="about-meta-key">Institution</span>
                <span className="about-meta-value">Sahyadri College of Engineering & Management (Autonomous, VTU)</span>
              </div>

              <div className="about-meta-row">
                <span className="about-meta-key">Degree</span>
                <span className="about-meta-value">B.E. in Computer Science & Engineering (2024 — 2028)</span>
              </div>

              <div className="about-meta-row">
                <span className="about-meta-key">Academic Record</span>
                <span className="about-meta-value highlight">9.73 / 10 CGPA</span>
              </div>

              <div className="about-meta-row">
                <span className="about-meta-key">Pre-University</span>
                <span className="about-meta-value">Shamili P.U. College, Udupi (PCMC — 94%)</span>
              </div>

              <div className="about-meta-row">
                <span className="about-meta-key">Location</span>
                <span className="about-meta-value">{profile.location}</span>
              </div>

              <div className="about-meta-row">
                <span className="about-meta-key">Core Focus</span>
                <span className="about-meta-value">Generative AI · Agentic Workflows · Full-Stack · Competitive Programming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}