import { useEffect, useRef } from "react";
import { profile } from "../../data/data";
import gsap from "gsap";

export default function Home({ onNavigate }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(".gsap-fade");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section className="section home-section" ref={containerRef}>
      <p className="tag-label gsap-fade">
        <span className="tag-bracket">&lt;</span>
        home
        <span className="tag-bracket">&gt;</span>
      </p>

      <h1 className="hero-title gsap-fade">
        Hi, I'm <span className="accent">{profile.name}</span>.
        <br />
        I build things with code.
      </h1>

      <p className="hero-sub gsap-fade">
       A Computer Science Engineering student passionate about creating intelligent, user-
       focused applications with Generative AI, Agentic AI, and modern full-stack 
       technologies—transforming ideas into impactful digital experiences.
      </p>

      <div className="hero-actions gsap-fade">
        <button className="btn-primary" onClick={() => onNavigate("projects")}>
          View projects
        </button>
        <button className="btn-ghost" onClick={() => onNavigate("contact")}>
          Get in touch
        </button>
      </div>

      <div className="hero-stack gsap-fade">
        <span className="stack-label"> currently working with</span>
        <div className="stack-chips">
          {["C++", "Python", "React", "Node.js", "LangChain", "LangGraph", "Crew AI"].map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

