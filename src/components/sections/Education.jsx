import SectionHeading from "../SectionHeading";
import Icon from "../Icon";
import { education } from "../../data/data";

export default function Education() {
  return (
    <section className="section">
      <SectionHeading tag="education" title="Education" />

      <div className="timeline">
        {education.map((e) => (
          <div className="timeline-item" key={e.degree}>
            <div className="timeline-icon">
              <Icon name="book" size={16} />
            </div>
            <div className="timeline-content">
              <div className="timeline-top">
                <h3>{e.degree}</h3>
                <span className="timeline-year">{e.year}</span>
              </div>
              <p className="cert-issuer">{e.school}</p>
              <p>{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
