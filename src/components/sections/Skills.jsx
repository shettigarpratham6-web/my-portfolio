import { useEffect, useRef } from "react";
import SectionHeading from "../SectionHeading";
import { skills } from "../../data/data";
import gsap from "gsap";

// Map each technology and tool to a high quality tech vector icon URL
const SKILL_ICONS = {
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "HTML / CSS / Tailwindcss": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js / Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "LangChain / LangGraph": "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAiZAAZAA0",
  "Data Structures & Algorithms": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "ChromaDB": "https://images.seeklogo.com/logo-png/48/1/chroma-logo-png_seeklogo-482133.png",
  "Streamlit": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
  "Google AI Studio": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
  "Claude": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1280px-Claude_AI_symbol.svg.png",
  "Arduino": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "N8n": "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/n8n.webp",
};

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".skill-card-item");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <section className="section" ref={containerRef}>
      <SectionHeading tag="skills" title="My skills" />

      <div className="skills-grid">
        {skills.technical.map((s) => {
          const logoSrc = SKILL_ICONS[s.name];
          return (
            <div className="skill-card-item tech-card-only" key={s.name}>
              <div className="skill-card-header">
                <div className="skill-icon-wrapper">
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={s.name}
                      className="skill-tech-logo"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="skill-badge-fallback">{s.name.charAt(0)}</div>
                  )}
                </div>
                <span className="skill-card-name">{s.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="subheading">Tools &amp; platforms</h3>
      <div className="tools-grid">
        {skills.tools.map((t) => {
          const logoSrc = SKILL_ICONS[t];
          return (
            <div className="tool-card-item skill-card-item" key={t}>
              <div className="tool-icon-wrapper">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={t}
                    className="skill-tech-logo"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="skill-badge-fallback">{t.charAt(0)}</div>
                )}
              </div>
              <span className="tool-card-name">{t}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

