import SectionHeading from "../SectionHeading";
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
              <img
                src={c.logo}
                alt={c.issuer}
                className="cert-logo"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
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