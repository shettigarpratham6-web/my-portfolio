import { useEffect, useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import Icon from "../Icon";
import ProjectThreeCanvas from "../ProjectThreeCanvas";
import { projects } from "../../data/data";
import gsap from "gsap";

function ProjectImage({ project }) {
  const [imgError, setImgError] = useState(false);

  const renderFallbackSvg = () => {
    const title = project.title;
    if (title.includes("ClarityScript")) {
      return (
        <svg viewBox="0 0 400 220" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1035" />
              <stop offset="50%" stopColor="#0f0920" />
              <stop offset="100%" stopColor="#05030a" />
            </linearGradient>
            <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#grad1)" />
          <rect x="35" y="25" width="330" height="170" rx="8" fill="#130d24" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <rect x="35" y="25" width="330" height="24" rx="8" fill="#1c1436" />
          <circle cx="51" cy="37" r="4" fill="#ef4444" />
          <circle cx="63" cy="37" r="4" fill="#eab308" />
          <circle cx="75" cy="37" r="4" fill="#22c55e" />
          <text x="200" y="41" fill="#a78bfa" fontSize="10" textAnchor="middle" fontFamily="monospace">ClarityScript // AI Code Analysis</text>
          <rect x="50" y="65" width="135" height="115" rx="6" fill="#0d0818" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1" />
          <rect x="60" y="80" width="80" height="6" rx="3" fill="#a78bfa" opacity="0.9" />
          <rect x="60" y="93" width="105" height="4" rx="2" fill="#64748b" />
          <rect x="60" y="103" width="65" height="4" rx="2" fill="#38bdf8" />
          <rect x="60" y="113" width="95" height="4" rx="2" fill="#ec4899" />
          <rect x="60" y="130" width="75" height="4" rx="2" fill="#a78bfa" opacity="0.6" />
          <rect x="60" y="140" width="95" height="4" rx="2" fill="#64748b" />
          <rect x="198" y="65" width="152" height="115" rx="6" fill="#1a1133" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="1" />
          <rect x="210" y="80" width="95" height="7" rx="3.5" fill="url(#purpleGlow)" />
          <rect x="210" y="97" width="128" height="5" rx="2.5" fill="#e2e8f0" opacity="0.9" />
          <rect x="210" y="109" width="110" height="5" rx="2.5" fill="#94a3b8" />
          <rect x="210" y="121" width="120" height="5" rx="2.5" fill="#94a3b8" />
          <rect x="210" y="140" width="65" height="22" rx="4" fill="#8b5cf6" />
          <text x="242.5" y="155" fill="#ffffff" fontSize="9.5" textAnchor="middle" fontWeight="bold">Explain</text>
        </svg>
      );
    }
    if (title.includes("Task")) {
      return (
        <svg viewBox="0 0 400 220" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#grad2)" />
          <rect x="35" y="20" width="330" height="180" rx="10" fill="#0f172a" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1" />
          <text x="55" y="50" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Organize Your Tasks</text>
          <rect x="260" y="36" width="85" height="20" rx="10" fill="#1e3a8a" />
          <text x="302.5" y="49.5" fill="#60a5fa" fontSize="9.5" textAnchor="middle" fontWeight="bold">LLaMA 3.1</text>
          <rect x="55" y="70" width="290" height="34" rx="6" fill="#1e293b" stroke="rgba(255,255,255,0.06)" />
          <circle cx="73" cy="87" r="6" fill="#ef4444" />
          <text x="90" y="91" fill="#e2e8f0" fontSize="11" fontWeight="500">High Priority: AI Pipeline Setup</text>
          <rect x="275" y="79" width="55" height="16" rx="4" fill="#ef4444" opacity="0.25" />
          <text x="302.5" y="90" fill="#fca5a5" fontSize="9" textAnchor="middle">Urgent</text>
          <rect x="55" y="112" width="290" height="34" rx="6" fill="#1e293b" stroke="rgba(255,255,255,0.06)" />
          <circle cx="73" cy="129" r="6" fill="#4ade80" />
          <text x="90" y="133" fill="#e2e8f0" fontSize="11" fontWeight="500">Medium: Groq API Integration</text>
          <rect x="275" y="121" width="55" height="16" rx="4" fill="#4ade80" opacity="0.25" />
          <text x="302.5" y="132" fill="#bbf7d0" fontSize="9" textAnchor="middle">Normal</text>
          <rect x="55" y="154" width="290" height="34" rx="6" fill="#1e293b" stroke="rgba(255,255,255,0.06)" />
          <circle cx="73" cy="171" r="6" fill="#10b981" />
          <text x="90" y="175" fill="#e2e8f0" fontSize="11" fontWeight="500">Low: Prompt Engineering Docs</text>
        </svg>
      );
    }
    if (title.includes("Local") || title.includes("RAG")) {
      return (
        <svg viewBox="0 0 400 220" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#041b1e" />
              <stop offset="100%" stopColor="#020d0f" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#grad3)" />
          <rect x="35" y="25" width="330" height="170" rx="8" fill="#09262a" stroke="rgba(20, 184, 166, 0.25)" strokeWidth="1" />
          <text x="55" y="55" fill="#2dd4bf" fontSize="13" fontWeight="bold" fontFamily="monospace">&gt; Local_RAG_Agent (Ollama + ChromaDB)</text>
          <line x1="75" y1="110" x2="155" y2="80" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="75" y1="110" x2="155" y2="140" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="75" cy="110" r="16" fill="#0d464c" stroke="#2dd4bf" strokeWidth="2" />
          <text x="75" y="114" fill="#ffffff" fontSize="8.5" textAnchor="middle">DOCS</text>
          <circle cx="155" cy="80" r="16" fill="#0d464c" stroke="#2dd4bf" strokeWidth="2" />
          <text x="155" y="84" fill="#ffffff" fontSize="8.5" textAnchor="middle">RAG</text>
          <circle cx="155" cy="140" r="16" fill="#0d464c" stroke="#2dd4bf" strokeWidth="2" />
          <text x="155" y="144" fill="#ffffff" fontSize="8.5" textAnchor="middle">EMBED</text>
          <line x1="171" y1="110" x2="235" y2="110" stroke="#2dd4bf" strokeWidth="2" />
          <rect x="235" y="88" width="110" height="44" rx="6" fill="#115e59" stroke="#5eead4" strokeWidth="1" />
          <text x="290" y="114" fill="#ffffff" fontSize="11.5" textAnchor="middle" fontWeight="bold">Local Ollama</text>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 400 220" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a0c00" />
            <stop offset="100%" stopColor="#0a0500" />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#grad4)" />
        <rect x="35" y="25" width="330" height="170" rx="10" fill="#271206" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" />
        <text x="55" y="60" fill="#fdba74" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Deadline Guardian</text>
        <text x="55" y="80" fill="#9a3412" fontSize="10" fontFamily="monospace">Hackathon Vibe2Ship // Google AI</text>
        <rect x="55" y="105" width="290" height="14" rx="7" fill="#451a03" />
        <rect x="55" y="105" width="220" height="14" rx="7" fill="#f97316" />
        <text x="55" y="145" fill="#fed7aa" fontSize="11">Time remaining: 04:12:59</text>
        <rect x="245" y="132" width="100" height="26" rx="13" fill="#ea580c" />
        <text x="295" y="148.5" fill="#ffffff" fontSize="10.5" textAnchor="middle" fontWeight="bold">Sync AI</text>
      </svg>
    );
  };

  if (!project.image || imgError) {
    return renderFallbackSvg();
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="project-card-image"
      onError={() => setImgError(true)}
    />
  );
}

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <section className="section" ref={containerRef}>
      <SectionHeading tag="projects" title="Projects" />

      <div className="project-grid">
        {projects.map((p, idx) => {
          const isFeatured = p.featured !== undefined ? p.featured : idx < 2;

          return (
            <article className="project-card" key={p.title}>
              <div className="project-card-image-wrapper">
                <ProjectThreeCanvas projectTitle={p.title} />
                <ProjectImage project={p} />
                {isFeatured && (
                  <span className="project-featured-badge">Featured</span>
                )}
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.description}</p>

                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span className="tech-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View code for ${p.title}`}
                      className="project-github-btn"
                    >
                      <Icon name="github" size={18} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}



