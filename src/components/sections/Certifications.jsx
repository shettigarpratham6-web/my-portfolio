import SectionHeading from "../SectionHeading";
import Icon from "../Icon";
import { certifications } from "../../data/data";

export default function Certifications() {
  return (
    <section className="section">
      <SectionHeading tag="certifications" title="Certifications" />

      <div className="card-grid">
        {certifications.map((c) => (
          <a
            key={c.title}
            className="cert-card"
            href={c.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="cert-icon">
              <Icon name={c.icon} size={20} />
            </div>

            <div>
              <h3>{c.title}</h3>
              <p className="cert-issuer">
                {c.issuer} · {c.year}
              </p>
              <p>{c.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}