import SectionHeading from "../SectionHeading";
import { achievements } from "../../data/data";

export default function Achievements() {
  return (
    <section className="section">
      <SectionHeading tag="achievements" title="Achievements" />

      <div className="timeline">
        {achievements.map((a) => (
          <div className="timeline-item" key={a.title}>
            <div className="timeline-icon">
              <img
                src={a.logo}
                alt=""
                className="cert-logo"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="timeline-content">
              <div className="timeline-top">
                <h3>{a.title}</h3>
                <span className="timeline-year">{a.year}</span>
              </div>
              <p>{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}