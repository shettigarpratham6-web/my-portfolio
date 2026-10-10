import { useState, useEffect, useRef } from "react";
import { projects } from "../../data/data";

function ProjectVisual({ project }) {
  // Support array of images (project.images, project.screenshots, or project.image) or fallback to single string
  const rawImages = [
    ...(Array.isArray(project.images) ? project.images : []),
    ...(Array.isArray(project.screenshots) ? project.screenshots : []),
    ...(Array.isArray(project.image)
      ? project.image
      : typeof project.image === "string" && project.image
      ? [project.image]
      : []),
  ];
  const candidateImages = Array.from(new Set(rawImages));

  const [failedImages, setFailedImages] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const validImages = candidateImages.filter((src) => !failedImages[src]);
  const hasMultiple = validImages.length > 1;

  // Keep currentIndex bounded
  useEffect(() => {
    if (currentIndex >= validImages.length && validImages.length > 0) {
      setCurrentIndex(0);
    }
  }, [validImages.length, currentIndex]);

  // Auto-play: cycle every 3 seconds, pause on hover or interaction
  useEffect(() => {
    if (!hasMultiple || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasMultiple, isPaused, validImages.length]);

  const handlePrev = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
  };

  const handleImageError = (src) => {
    setFailedImages((prev) => ({ ...prev, [src]: true }));
  };

  const renderSvgVisual = () => {
    const title = project.title;
    if (title.includes("ClarityScript")) {
      return (
        <svg viewBox="0 0 600 380" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="380" fill="#181716" />
          <rect x="40" y="40" width="520" height="300" rx="8" fill="#22201D" stroke="rgba(244, 241, 232, 0.12)" strokeWidth="1" />
          <rect x="40" y="40" width="520" height="36" rx="8" fill="#2B2925" />
          <circle cx="65" cy="58" r="5" fill="#E07A5F" />
          <circle cx="82" cy="58" r="5" fill="#DDBB66" />
          <circle cx="99" cy="58" r="5" fill="#8BD65A" />
          <text x="300" y="63" fill="#B8B3A8" fontSize="12" textAnchor="middle" fontFamily="var(--font-mono)">ClarityScript · AI Code Analysis</text>
          
          <rect x="65" y="100" width="220" height="210" rx="6" fill="#181716" stroke="rgba(139, 214, 90, 0.2)" strokeWidth="1" />
          <rect x="85" y="125" width="130" height="8" rx="4" fill="#8BD65A" opacity="0.9" />
          <rect x="85" y="145" width="170" height="6" rx="3" fill="#68645D" />
          <rect x="85" y="160" width="110" height="6" rx="3" fill="#E07A5F" />
          <rect x="85" y="175" width="150" height="6" rx="3" fill="#B8B3A8" />
          <rect x="85" y="200" width="120" height="6" rx="3" fill="#68645D" />
          <rect x="85" y="215" width="140" height="6" rx="3" fill="#8BD65A" opacity="0.6" />
          
          <rect x="305" y="100" width="235" height="210" rx="6" fill="#252421" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <text x="325" y="135" fill="#F4F1E8" fontSize="13" fontWeight="bold" fontFamily="var(--font-display)">Human-Readable Output</text>
          <rect x="325" y="155" width="195" height="7" rx="3.5" fill="#8BD65A" opacity="0.75" />
          <rect x="325" y="172" width="180" height="7" rx="3.5" fill="#B8B3A8" opacity="0.8" />
          <rect x="325" y="189" width="160" height="7" rx="3.5" fill="#B8B3A8" opacity="0.8" />
          <rect x="325" y="225" width="100" height="32" rx="4" fill="#8BD65A" />
          <text x="375" y="246" fill="#1D1C1A" fontSize="11" textAnchor="middle" fontWeight="bold" fontFamily="var(--font-mono)">Explain Code</text>
        </svg>
      );
    }
    if (title.includes("Task")) {
      return (
        <svg viewBox="0 0 600 380" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="380" fill="#191B1A" />
          <rect x="40" y="35" width="520" height="310" rx="10" fill="#232624" stroke="rgba(139, 214, 90, 0.2)" strokeWidth="1" />
          <text x="65" y="75" fill="#F4F1E8" fontSize="16" fontWeight="bold" fontFamily="var(--font-display)">AI Task Prioritization Agent</text>
          <rect x="420" y="55" width="120" height="26" rx="13" fill="#1D1C1A" stroke="rgba(139, 214, 90, 0.4)" strokeWidth="1" />
          <text x="480" y="72" fill="#8BD65A" fontSize="11" textAnchor="middle" fontWeight="bold" fontFamily="var(--font-mono)">LLaMA 3.1 + Groq</text>
          
          <rect x="65" y="105" width="470" height="55" rx="6" fill="#1A1C1B" stroke="rgba(224, 122, 95, 0.4)" strokeWidth="1" />
          <circle cx="95" cy="132" r="8" fill="#E07A5F" />
          <text x="120" y="137" fill="#F4F1E8" fontSize="13" fontWeight="500">P0: Setup Multi-Agent Routing Engine</text>
          <rect x="430" y="120" width="85" height="24" rx="4" fill="#E07A5F" opacity="0.25" />
          <text x="472.5" y="136" fill="#E07A5F" fontSize="10.5" textAnchor="middle" fontWeight="bold">Urgent</text>

          <rect x="65" y="175" width="470" height="55" rx="6" fill="#1A1C1B" stroke="rgba(139, 214, 90, 0.3)" strokeWidth="1" />
          <circle cx="95" cy="202" r="8" fill="#8BD65A" />
          <text x="120" y="207" fill="#F4F1E8" fontSize="13" fontWeight="500">P1: Context Compression & Token Optimization</text>
          <rect x="430" y="190" width="85" height="24" rx="4" fill="#8BD65A" opacity="0.25" />
          <text x="472.5" y="206" fill="#8BD65A" fontSize="10.5" textAnchor="middle" fontWeight="bold">Normal</text>

          <rect x="65" y="245" width="470" height="55" rx="6" fill="#1A1C1B" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <circle cx="95" cy="272" r="8" fill="#68645D" />
          <text x="120" y="277" fill="#F4F1E8" fontSize="13" fontWeight="500">P2: Structured JSON Output Formatting</text>
        </svg>
      );
    }
    if (title.includes("Local") || title.includes("RAG")) {
      return (
        <svg viewBox="0 0 600 380" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="380" fill="#161A19" />
          <rect x="40" y="40" width="520" height="300" rx="8" fill="#202624" stroke="rgba(139, 214, 90, 0.25)" strokeWidth="1" />
          <text x="70" y="80" fill="#8BD65A" fontSize="15" fontWeight="bold" fontFamily="var(--font-mono)">&gt; Local_RAG_Pipeline (Ollama + ChromaDB)</text>
          
          <line x1="120" y1="180" x2="250" y2="130" stroke="#8BD65A" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="120" y1="180" x2="250" y2="230" stroke="#8BD65A" strokeWidth="2" strokeDasharray="4,4" />
          
          <circle cx="120" cy="180" r="26" fill="#161A19" stroke="#8BD65A" strokeWidth="2.5" />
          <text x="120" y="185" fill="#F4F1E8" fontSize="11" textAnchor="middle" fontWeight="bold">DOCS</text>
          
          <circle cx="250" cy="130" r="26" fill="#161A19" stroke="#8BD65A" strokeWidth="2.5" />
          <text x="250" y="135" fill="#F4F1E8" fontSize="10.5" textAnchor="middle" fontWeight="bold">CHROMA</text>
          
          <circle cx="250" cy="230" r="26" fill="#161A19" stroke="#8BD65A" strokeWidth="2.5" />
          <text x="250" y="235" fill="#F4F1E8" fontSize="10.5" textAnchor="middle" fontWeight="bold">EMBED</text>
          
          <line x1="276" y1="180" x2="380" y2="180" stroke="#8BD65A" strokeWidth="2.5" />
          <rect x="380" y="145" width="150" height="70" rx="8" fill="#161A19" stroke="#8BD65A" strokeWidth="2" />
          <text x="455" y="180" fill="#F4F1E8" fontSize="14" textAnchor="middle" fontWeight="bold">Local Ollama</text>
          <text x="455" y="200" fill="#8BD65A" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">100% Private Offline</text>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 600 380" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#1F1A17" />
        <rect x="40" y="40" width="520" height="300" rx="10" fill="#28211D" stroke="rgba(224, 122, 95, 0.3)" strokeWidth="1" />
        <text x="70" y="85" fill="#E07A5F" fontSize="18" fontWeight="bold" fontFamily="var(--font-display)">Deadline Guardian</text>
        <text x="70" y="110" fill="#B8B3A8" fontSize="11" fontFamily="var(--font-mono)">Hackathon Vibe2Ship // Google AI & Gemini API</text>
        
        <rect x="70" y="150" width="460" height="18" rx="9" fill="#1F1A17" />
        <rect x="70" y="150" width="340" height="18" rx="9" fill="#E07A5F" />
        <text x="70" y="210" fill="#F4F1E8" fontSize="14">Real-Time Timeline Engine & Intelligent Synchronization</text>
        <rect x="370" y="235" width="160" height="38" rx="19" fill="#E07A5F" />
        <text x="450" y="259" fill="#F4F1E8" fontSize="12" textAnchor="middle" fontWeight="bold" fontFamily="var(--font-mono)">Sync Google AI</text>
      </svg>
    );
  };

  return (
    <div
      className="project-media-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ userSelect: "none" }}
    >
      {validImages.length > 0 ? (
        <div
          className="project-carousel-container"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Sliding track */}
          <div
            className="project-carousel-track"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {validImages.map((imgSrc, idx) => (
              <div
                key={imgSrc + idx}
                className="project-carousel-slide"
                style={{
                  minWidth: "100%",
                  width: "100%",
                  height: "100%",
                  flexShrink: 0,
                }}
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={() => handleImageError(imgSrc)}
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          {hasMultiple && (
            <button
              type="button"
              className="carousel-nav-btn carousel-prev-btn"
              onClick={handlePrev}
              aria-label="Previous screenshot"
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(29, 28, 26, 0.72)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "#F4F1E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 3,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(29, 28, 26, 0.92)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(29, 28, 26, 0.72)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Right Arrow Button */}
          {hasMultiple && (
            <button
              type="button"
              className="carousel-nav-btn carousel-next-btn"
              onClick={handleNext}
              aria-label="Next screenshot"
              style={{
                position: "absolute",
                top: "50%",
                right: "12px",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(29, 28, 26, 0.72)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "#F4F1E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 3,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(29, 28, 26, 0.92)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(29, 28, 26, 0.72)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Navigation Dots */}
          {hasMultiple && (
            <div
              className="carousel-dots-container"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 8px",
                borderRadius: "9999px",
                background: "rgba(29, 28, 26, 0.65)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                zIndex: 3,
              }}
            >
              {validImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to screenshot ${idx + 1}`}
                  style={{
                    width: currentIndex === idx ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    background: currentIndex === idx ? "var(--accent, #8BD65A)" : "rgba(244, 241, 232, 0.4)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        renderSvgVisual()
      )}
      {project.featured && <span className="project-badge-pill">Featured Project</span>}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section-padding" id="work">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-header-top">
            <span className="editorial-index">01 / SELECTED WORK</span>
            <span className="editorial-tag">Engineered Solutions</span>
          </div>
          <h2 className="editorial-title">Things I've Built.</h2>
          <p className="editorial-subtitle">
            A curated selection of full-stack web applications, Generative AI agent workflows, and local RAG systems built with modern engineering practices.
          </p>
        </div>

        {/* Alternating Project Blocks */}
        <div className="projects-container">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1; // Alternating layout
            const formattedNum = String(index + 1).padStart(2, "0");

            return (
              <article
                className={`project-block ${isEven ? "reverse" : ""}`}
                key={project.title}
                aria-label={project.title}
              >
                {/* Visual Side */}
                <ProjectVisual project={project} />

                {/* Information Side */}
                <div className="project-info">
                  <div className="project-top-row">
                    <span className="project-num">{formattedNum}</span>
                    <span className="project-tag">{project.tag.trim()}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-stack-wrap">
                    {project.stack.map((tech) => (
                      <span className="tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-action-row">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link-btn"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <span>View on GitHub</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
