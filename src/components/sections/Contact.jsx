import { useState } from "react";
import SectionHeading from "../SectionHeading";
import Icon from "../Icon";
import { contact, profile } from "../../data/data";

const WEB3FORMS_ACCESS_KEY = "98a9b78d-dc05-4f36-85ef-1aa963b17a48"; // ← paste the key Web3Forms emailed you

export default function Contact() {
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
    <section className="section">
      <SectionHeading tag="contact" title="Contact" />

      <p className="body-text">{contact.message}</p>

      <div className="contact-grid">
        <ul className="contact-list plain">
          <li>
            <div className="contact-icon"><Icon name="mail" size={16} /></div>
            <div className="contact-meta">
              <span className="contact-label">Email</span>
              <a href={`mailto:${profile.email}`} className="contact-value">
                {profile.email}
              </a>
            </div>
          </li>
          <li>
            <div className="contact-icon"><Icon name="phone" size={16} /></div>
            <div className="contact-meta">
              <span className="contact-label">Phone</span>
              <a href={`tel:${profile.phone}`} className="contact-value">
                {profile.phone}
              </a>
            </div>
          </li>
          <li>
            <div className="contact-icon"><Icon name="pin" size={16} /></div>
            <div className="contact-meta">
              <span className="contact-label">Location</span>
              <span className="contact-value">{profile.location}</span>
            </div>
          </li>
        </ul>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="What's on your mind?" />
          </div>
          <button type="submit" className="btn-primary" disabled={status === "sending"}>
            <Icon name="send" size={16} />
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p className="form-note">Message sent — thanks for reaching out!</p>
          )}
          {status === "error" && (
            <p className="form-note error">
              Something went wrong. Please try emailing me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}