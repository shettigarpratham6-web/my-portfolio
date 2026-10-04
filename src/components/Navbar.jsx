import { useState, useEffect } from "react";

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work", num: "01" },
    { label: "About", href: "#about", num: "02" },
    { label: "Skills", href: "#skills", num: "03" },
    { label: "Journey", href: "#journey", num: "04" },
    { label: "Contact", href: "#contact", num: "05" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a
          href="#home"
          className="brand-link"
          onClick={(e) => handleNavClick(e, "#home")}
          aria-label="Pratham Portfolio Home"
        >
          <span className="brand-name">PRATHAM</span>
          <span className="brand-badge">· CSE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <button
            className="nav-resume-btn"
            onClick={onOpenResume}
            aria-label="Open Resume Preview"
          >
            Resume ↗
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`mobile-nav-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="hamburger-line" />
        </button>

        {/* Mobile Drawer Menu */}
        <div className={`mobile-nav-drawer ${mobileOpen ? "open" : ""}`}>
          <div className="mobile-nav-links">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span>{item.label}</span>
                <span className="mobile-link-num">{item.num}</span>
              </a>
            ))}
            <button
              className="mobile-nav-link"
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              style={{ textAlign: "left", width: "100%" }}
            >
              <span>Resume</span>
              <span className="mobile-link-num">↗</span>
            </button>
          </div>

          <div className="mobile-nav-footer">
            <div className="mobile-socials">
              <a href="https://github.com/shettigarpratham6-web" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/prathamshettigar/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="mailto:shettigarpratham6@gmail.com">
                Email ↗
              </a>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
              © 2026 PRATHAM · UDUPI, INDIA
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
