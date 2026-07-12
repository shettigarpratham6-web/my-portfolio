import { useState } from "react";
import Icon from "./Icon";
import { profile } from "../data/data";

export default function Sidebar({ onOpenResume }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="avatar-ring">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="avatar"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "data:image/svg+xml;utf8," +
                encodeURIComponent(
                  `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><rect width='120' height='120' fill='%23182230'/><text x='50%' y='54%' font-family='Sora,sans-serif' font-size='42' fill='%232dd4bf' text-anchor='middle'>${profile.name
                    .charAt(0)
                    .toUpperCase()}</text></svg>`
                );
            }}
          />
        </div>

        <div className="identity">
          <h1 className="name">{profile.name}</h1>
          <p className="role-tag">
            <span className="prompt">$</span> {profile.title}
          </p>
        </div>

        <button
          className="btn-contact"
          onClick={() => setShowContact((s) => !s)}
          aria-expanded={showContact}
        >
          Show contacts
          <Icon
            name="chevronDown"
            size={14}
            className={showContact ? "rotated" : ""}
          />
        </button>

        <div className={`contact-panel ${showContact ? "open" : ""}`}>
          <ul className="contact-list">
            <li>
              <div className="contact-icon">
                <Icon name="mail" size={16} />
              </div>
              <div className="contact-meta">
                <span className="contact-label">Email</span>
                <a href={`mailto:${profile.email}`} className="contact-value">
                  {profile.email}
                </a>
              </div>
            </li>

            <li>
              <div className="contact-icon">
                <Icon name="phone" size={16} />
              </div>
              <div className="contact-meta">
                <span className="contact-label">Phone</span>
                <a href={`tel:${profile.phone}`} className="contact-value">
                  {profile.phone}
                </a>
              </div>
            </li>

            <li>
              <div className="contact-icon">
                <Icon name="pin" size={16} />
              </div>
              <div className="contact-meta">
                <span className="contact-label">Location</span>
                <span className="contact-value">{profile.location}</span>
              </div>
            </li>
          </ul>
        </div>

        <button className="resume-view-btn" onClick={onOpenResume}>
          <Icon name="file" size={16} />
          View resume
        </button>

        <ul className="social-dock">
          {profile.socials.map((s) => (
            <li key={s.name} className="social-dock-item">
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
                className={`social-dock-icon social-${s.icon}`}
              >
                <Icon name={s.icon} size={22} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}