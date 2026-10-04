export default function Skills() {
  const skillCategories = [
    {
      num: "01",
      category: "Programming Languages",
      items: [
        "C++ (DSA & Problem Solving)",
        "Python",
        "JavaScript (ES6+)",
        "SQL",
        "C",
      ],
    },
    {
      num: "02",
      category: "Frontend Engineering",
      items: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "HTML5 / Semantic Web",
        "Modern CSS / Flexbox / Grid",
        "Responsive UI Architecture",
      ],
    },
    {
      num: "03",
      category: "Backend & Databases",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "REST APIs",
        "Web Security (Helmet, Rate Limiting)",
      ],
    },
    {
      num: "04",
      category: "Generative AI & Agentic AI",
      items: [
        "LangChain",
        "LangGraph",
        "Autonomous LLM Agents",
        "ChromaDB (Vector DB)",
        "Retrieval-Augmented Generation (RAG)",
        "Groq API & LLaMA 3.1",
        "Ollama (Local LLMs)",
        "Prompt Engineering",
        "Crew AI",
      ],
    },
    {
      num: "05",
      category: "Tools & Infrastructure",
      items: [
        "Git & GitHub",
        "VS Code",
        "Vercel Deployment",
        "Google AI Studio & Gemini API",
        "Streamlit",
        "Claude API",
        "n8n Automation",
        "Make.com",
        "Arduino Hardware",
      ],
    },
  ];

  return (
    <section className="section-padding" id="skills">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-header-top">
            <span className="editorial-index">03 / TECHNICAL CAPABILITIES</span>
            <span className="editorial-tag">Stack & Tooling</span>
          </div>
          <h2 className="editorial-title">What I Work With.</h2>
          <p className="editorial-subtitle">
            A comprehensive overview of languages, frameworks, AI architectures, and developer tooling I use to craft intelligent software.
          </p>
        </div>

        {/* Refined Editorial List */}
        <div className="skills-editorial-list">
          {skillCategories.map((group) => (
            <div className="skills-category-row" key={group.num}>
              <div className="skills-category-head">
                <span className="skills-cat-num">{group.num} — CATEGORY</span>
                <h3 className="skills-cat-title">{group.category}</h3>
              </div>

              <div className="skills-items-grid">
                {group.items.map((skill) => (
                  <span className="skill-typography-pill" key={skill}>
                    <span className="skill-indicator" aria-hidden="true" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
