import SectionHeading from "../SectionHeading";
import Icon from "../Icon";
import { achievements } from "../../data/data";

export default function Achievements() {
  return (
    <section className="section">
      <SectionHeading tag="achievements" title="Achievements" />

      <div className="timeline">
        {achievements.map((a) => (
          <div className="timeline-item" key={a.title}>
            <div className="timeline-icon">
              <Icon name="award" size={16} />
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
