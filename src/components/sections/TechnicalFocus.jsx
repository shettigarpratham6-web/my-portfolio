export default function TechnicalFocus() {
  const focusAreas = [
    {
      num: "01",
      title: "Generative & Agentic AI",
      desc: "Building autonomous LLM agent workflows, multi-agent orchestrations, and tool-augmented reasoning engines.",
      tags: ["LangChain", "LangGraph", "Groq API", "LLaMA 3.1", "Crew AI"],
    },
    {
      num: "02",
      title: "RAG & Vector Search",
      desc: "Architecting local and cloud Retrieval-Augmented Generation pipelines for semantic querying of private documents.",
      tags: ["Local RAG", "ChromaDB", "Ollama", "Embeddings", "Context Retainers"],
    },
    {
      num: "03",
      title: "Full-Stack Web Systems",
      desc: "Engineering scalable client-server architectures with performant frontends and secure API backends.",
      tags: ["React.js", "Vite", "Node.js", "Express", "MongoDB"],
    },
    {
      num: "04",
      title: "Algorithms & DSA",
      desc: "Algorithmic problem solving and data structure optimization in C++ with consistent competitive programming practice.",
      tags: ["C++", "Dynamic Programming", "LeetCode 100+", "HackerRank Gold"],
    },
  ];

  return (
    <section className="focus-strip-section" aria-label="Technical Focus Areas">
      <div className="container">
        <div className="focus-strip-header">
          <h2 className="focus-strip-title">Currently Exploring</h2>
          <span className="focus-strip-tag">Core Technical Disciplines</span>
        </div>

        <div className="focus-grid">
          {focusAreas.map((area) => (
            <div className="focus-item" key={area.num}>
              <span className="focus-num">{area.num} — FOCUS</span>
              <h3 className="focus-name">{area.title}</h3>
              <p className="focus-desc">{area.desc}</p>
              <div className="focus-tags">
                {area.tags.map((tag) => (
                  <span className="focus-chip" key={tag}>
                    {tag}
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
