import { useState } from "react";
import { education, achievements, certifications } from "../../data/data";

export default function Journey() {
  const [activeTab, setActiveTab] = useState("timeline");

  // Combine education and achievements into a unified timeline
  const timelineItems = [
    {
      year: "2026",
      tag: "Competitive Programming",
      title: "LeetCode Problem Solving Milestones",
      org: "LeetCode Platform",
      desc: achievements[0]?.description || "Earned the 50 Days and 100 Days badges on LeetCode through consistent daily algorithmic practice.",
      logo: achievements[0]?.logo,
    },
    {
      year: "2026",
      tag: "Competition Finalist",
      title: "Unstop Premier League Finalist",
      org: "Unstop Platform",
      desc: achievements[1]?.description || "Finalist in the Unstop Premier League and awarded official recognition for competitive excellence.",
      logo: achievements[1]?.logo,
    },
    {
      year: "2024 — 2028",
      tag: "Higher Education",
      title: "B.E. Computer Science & Engineering",
      org: "Sahyadri College of Engineering & Management (Autonomous, VTU)",
      desc: education[0]?.description || "Current CGPA: 9.73/10. Focused on core computer science, full-stack web architectures, Generative AI, and competitive programming.",
      logo: education[0]?.logo,
    },
    {
      year: "2022 — 2024",
      tag: "Pre-University",
      title: "Pre-University Examination (PCMC)",
      org: "Shamili P.U. College, Udupi",
      desc: education[1]?.description || "Completed Pre-University in PCMC with 94%, building a rigorous analytical foundation in Mathematics, Physics, and Computer Science.",
      logo: education[1]?.logo,
    },
  ];

  return (
    <section className="section-padding" id="journey">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-header-top">
            <span className="editorial-index">04 / EXPERIENCE & CREDENTIALS</span>
            <span className="editorial-tag">Journey & Milestones</span>
          </div>
          <h2 className="editorial-title">Academic & Professional Path.</h2>
          <p className="editorial-subtitle">
            A chronological timeline of degrees, competitive milestones, and industry-recognized certifications.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="journey-tabs-wrap">
          <button
            className={`journey-tab-btn ${activeTab === "timeline" ? "active" : ""}`}
            onClick={() => setActiveTab("timeline")}
          >
            Education & Milestones
          </button>
          <button
            className={`journey-tab-btn ${activeTab === "certs" ? "active" : ""}`}
            onClick={() => setActiveTab("certs")}
          >
            Verified Certifications ({certifications.length})
          </button>
        </div>

        {/* Tab 1: Editorial Timeline */}
        {activeTab === "timeline" && (
          <div className="editorial-timeline">
            {timelineItems.map((item) => (
              <div className="timeline-editorial-item" key={item.title}>
                <div className="timeline-year-col">
                  <span className="timeline-big-year">{item.year}</span>
                  <span className="timeline-badge-sub">{item.tag}</span>
                </div>

                <div className="timeline-detail-col">
                  <div className="timeline-detail-header">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt=""
                        className="timeline-logo-thumb"
                        onError={(e) => (e.currentTarget.style.display = "none")}
                      />
                    )}
                    <div>
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-organization">{item.org}</p>
                    </div>
                  </div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Certifications Grid */}
        {activeTab === "certs" && (
          <div className="certs-editorial-grid">
            {certifications.map((cert) => (
              <div className="cert-editorial-card" key={cert.title}>
                <div className="cert-card-top">
                  {cert.logo && (
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="cert-logo-img"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  )}
                  <div className="cert-card-meta">
                    <h3 className="cert-card-title">{cert.title}</h3>
                    <span className="cert-card-issuer">
                      {cert.issuer} · {cert.year}
                    </span>
                  </div>
                </div>

                <p className="cert-card-desc">{cert.description}</p>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-verify-link"
                    aria-label={`Verify ${cert.title} certificate`}
                  >
                    <span>Verify Credential</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
