import SectionHeading from "../SectionHeading";
import { about } from "../../data/data";

export default function About() {
  return (
    <section className="section about-section">
      <SectionHeading tag="about" title="About me" />

      <p className="body-text">{about.summary}</p>
      <p className="body-text">{about.details}</p>

      <div className="info-grid">
        {about.info.map((item) => (
          <div className="info-card" key={item.label}>
            <span className="info-label">{item.label}</span>
            <span className="info-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
