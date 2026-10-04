import { profile } from "../data/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">{profile.name} Shettigar</span>
            <p className="footer-tagline">
              Full-Stack Developer · Generative AI · Agentic AI
            </p>
          </div>

          <div className="footer-nav-col">
            <div className="footer-links-group">
              <span className="footer-group-title">Navigation</span>
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(item.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="footer-links-group">
              <span className="footer-group-title">Profiles</span>
              {profile.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  {s.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 {profile.name} Shettigar. All rights reserved.</span>
          <span>Designed & Built with Editorial Craft.</span>
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
