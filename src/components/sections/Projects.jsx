import SectionHeading from "../SectionHeading";
import Icon from "../Icon";
import { projects } from "../../data/data";

export default function Projects() {
  return (
    <section className="section">
      <SectionHeading tag="projects" title="Projects" />

      <div className="card-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="project-card-top">
              <span className="project-tag">{p.tag}</span>
              <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                <Icon name="external" size={16} />
              </a>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
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
