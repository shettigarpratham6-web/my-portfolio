import { useState } from "react";
import { contact, profile } from "../../data/data";

const WEB3FORMS_ACCESS_KEY = "98a9b78d-dc05-4f36-85ef-1aa963b17a48";

export default function Contact({ onOpenResume }) {
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section-padding" id="contact">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-header-top">
            <span className="editorial-index">05 / GET IN TOUCH</span>
            <span className="editorial-tag">Available for Roles & Projects</span>
          </div>
          <h2 className="editorial-title">Let's Connect.</h2>
        </div>

        <div className="contact-section-inner">
          {/* Left Column: Big Typography & Direct Contacts */}
          <div className="contact-text-col">
            <h3 className="contact-hero-statement">
              Have a project<br />
              in mind?<br />
              <span className="accent-line">Let's build.</span>
            </h3>

            <p className="contact-bio">
              {contact.message}
            </p>

            <div className="contact-direct-list">
              <div className="direct-item">
                <span className="direct-key">Email</span>
                <a href={`mailto:${profile.email}`} className="direct-val">
                  {profile.email}
                </a>
              </div>

              <div className="direct-item">
                <span className="direct-key">Phone</span>
                <a href={`tel:${profile.phone}`} className="direct-val">
                  {profile.phone}
                </a>
              </div>

              <div className="direct-item">
                <span className="direct-key">Location</span>
                <span className="direct-val">{profile.location}</span>
              </div>
            </div>

            {/* Social Pills */}
            <div className="contact-social-dock">
              {profile.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                >
                  <span>{s.name}</span>
                  <span>↗</span>
                </a>
              ))}
              <button
                className="social-pill"
                onClick={onOpenResume}
                style={{ cursor: "pointer" }}
              >
                <span>Resume</span>
                <span>↗</span>
              </button>
            </div>
          </div>

          {/* Right Column: Refined Editorial Form */}
          <div className="contact-form-card">
            <h4 className="form-title">Send a Direct Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Project or Opportunity Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about what you're building..."
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={status === "sending"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>{status === "sending" ? "Transmitting..." : "Send Message"}</span>
                <span className="btn-arrow">→</span>
              </button>

              {status === "sent" && (
                <div className="form-status-msg success">
                  ✓ Message transmitted successfully! I will get back to you shortly.
                </div>
              )}

              {status === "error" && (
                <div className="form-status-msg error">
                  ✕ Delivery failed. Please email me directly at {profile.email}.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}