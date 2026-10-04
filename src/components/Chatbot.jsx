import { useState, useRef, useEffect } from "react";
import {
  profile,
  about,
  projects,
  achievements,
  certifications,
  education,
} from "../data/data";

const rules = [
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    reply: () =>
      `Hello! I am an automated assistant for ${profile.name}'s portfolio. I can answer inquiries regarding projects, technical skills, education, certifications, or direct contact methods.`,
  },
  {
    keywords: ["who are you", "about", "yourself", "background", "bio"],
    reply: () => about.summary,
  },
  {
    keywords: ["skill", "stack", "technology", "language", "framework"],
    reply: () =>
      `Primary languages: C++, Python, JavaScript. Core frameworks: React, Vite, Node.js, Express, MongoDB. AI Focus: LangChain, LangGraph, ChromaDB, Ollama, Groq API, and autonomous agents.`,
  },
  {
    keywords: ["project", "work", "built", "portfolio"],
    reply: () =>
      `Featured projects include: ${projects.map((p) => p.title).join(", ")}. You can explore detailed overviews in the Selected Work section.`,
  },
  {
    keywords: ["education", "college", "degree", "cgpa", "marks"],
    reply: () =>
      education
        .map((e) => `${e.degree} at ${e.school} (${e.year}) — ${e.description}`)
        .join(" "),
  },
  {
    keywords: ["certification", "certificate", "credentials"],
    reply: () =>
      `Certifications include: ${certifications.slice(0, 5).map((c) => `${c.title} (${c.issuer})`).join(", ")} and 5 others viewable in the Journey section.`,
  },
  {
    keywords: ["achievement", "award", "leetcode", "contest"],
    reply: () =>
      achievements.map((a) => `${a.title}: ${a.description}`).join(" "),
  },
  {
    keywords: ["resume", "cv"],
    reply: () =>
      `You can view ${profile.name}'s complete resume directly using the 'Resume' button in the navigation header.`,
  },
  {
    keywords: ["contact", "email", "reach", "hire", "phone"],
    reply: () =>
      `You can email ${profile.name} at ${profile.email} or call ${profile.phone}. You can also submit the message form in the Contact section.`,
  },
  {
    keywords: ["github"],
    reply: () => `GitHub profile: https://github.com/shettigarpratham6-web`,
  },
  {
    keywords: ["linkedin"],
    reply: () => `LinkedIn profile: https://www.linkedin.com/in/prathamshettigar/`,
  },
];

const fallback =
  "I don't have specific data on that topic. Please refer to the relevant section (Work, About, Skills, Journey, or Contact) or reach out directly via email.";

function getReply(input) {
  const text = input.toLowerCase();
  const match = rules.find((rule) => rule.keywords.some((k) => text.includes(k)));
  return match ? match.reply() : fallback;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `Hello! I'm ${profile.name}'s editorial assistant. Ask me anything about his work, technical stack, or background.`,
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function handleSend(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { from: "user", text: trimmed };
    const botMsg = { from: "bot", text: getReply(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      <button
        className="chatbot-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant chat" : "Open assistant chat"}
      >
        {open ? (
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>✕</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Portfolio AI Assistant">
          <div className="chatbot-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <circle cx="12" cy="5" r="2"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="16" x2="8" y2="16"></line>
              <line x1="16" y1="16" x2="16" y2="16"></line>
            </svg>
            <span>Ask About {profile.name}</span>
          </div>

          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              aria-label="Ask assistant a question"
            />
            <button type="submit" aria-label="Send query">
              →
            </button>
          </form>
        </div>
      )}
    </>
  );
}