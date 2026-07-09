import { profile } from "../../data/data";

export default function Home({ onNavigate }) {
  return (
    <section className="section home-section">
      <p className="tag-label">
        <span className="tag-bracket">&lt;</span>
        home
        <span className="tag-bracket">&gt;</span>
      </p>

      <h1 className="hero-title">
        Hi, I'm <span className="accent">{profile.name}</span>.
        <br />
        I build things with code.
      </h1>

      <p className="hero-sub">
        A Computer Science Engineering student focused on AI/ML, full-stack
        development, and competitive programming — currently turning
        coursework into projects that actually run.
      </p>

      <div className="hero-actions">
        <button className="btn-primary" onClick={() => onNavigate("projects")}>
          View projects
        </button>
        <button className="btn-ghost" onClick={() => onNavigate("contact")}>
          Get in touch
        </button>
      </div>

      <div className="hero-stack">
        <span className="stack-label">// currently working with</span>
        <div className="stack-chips">
          {["C++", "Python", "React", "Node.js", "LangChain"].map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
