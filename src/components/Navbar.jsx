import Icon from "./Icon";

export const NAV_ITEMS = [
  { key: "home", label: "Home", icon: "home" },
  { key: "about", label: "About", icon: "user" },
  { key: "skills", label: "Skills", icon: "code" },
  { key: "projects", label: "Projects", icon: "folder" },
  { key: "achievements", label: "Achievements", icon: "award" },
  { key: "certifications", label: "Certifications", icon: "badge" },
  { key: "education", label: "Education", icon: "book" },
  { key: "contact", label: "Contact", icon: "send" },
];

export default function Navbar({ active, onChange }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.key}>
            <button
              className={`nav-btn ${active === item.key ? "active" : ""}`}
              onClick={() => onChange(item.key)}
            >
              <Icon name={item.icon} size={16} />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
