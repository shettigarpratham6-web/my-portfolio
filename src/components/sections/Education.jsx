import SectionHeading from "../SectionHeading";
import { education } from "../../data/data";

export default function Education() {
  return (
    <section className="section">
      <SectionHeading tag="education" title="Education" />

      <div className="timeline">
        {education.map((e) => (
          <div className="timeline-item" key={e.degree}>
            <div className="timeline-icon">
              <img
                src={e.logo}
                alt={e.school}
                className="cert-logo"
                onError={(ev) => {
                  ev.currentTarget.style.display = "none";
                }}
              />
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