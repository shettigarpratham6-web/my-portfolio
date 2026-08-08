import { useEffect, useRef } from "react";
import SectionHeading from "../SectionHeading";
import Icon from "../Icon";
import { projects } from "../../data/data";
import gsap from "gsap";

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

      <div className="card-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="project-card-header">
              <div className="project-folder-icon">
                <Icon name="folder" size={22} />
              </div>
              <div className="project-actions">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open link for ${p.title}`}
                    title="Open Link"
                    className="project-link-btn"
                  >
                    <Icon name="external" size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className="project-card-body">
              <span className="project-tag">{p.tag}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description}</p>
            </div>

            <div className="project-stack">
              {p.stack.map((s) => (
                <span className="chip small" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

