import SectionHeading from "../SectionHeading";
import { skills } from "../../data/data";

export default function Skills() {
  return (
    <section className="section">
      <SectionHeading tag="skills" title="My skills" />

      <div className="skills-bars">
        {skills.technical.map((s) => (
          <div className="skill-row" key={s.name}>
            <div className="skill-row-top">
              <span>{s.name}</span>
              <span className="skill-level">{s.level}%</span>
            </div>
            <div className="skill-track">
              <div className="skill-fill" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>

      <h3 className="subheading">Tools &amp; platforms</h3>
      <div className="stack-chips">
        {skills.tools.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
