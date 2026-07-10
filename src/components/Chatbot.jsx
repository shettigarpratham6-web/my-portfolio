import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";
import {
  profile,
  about,
  skills,
  projects,
  achievements,
  certifications,
  education,
  contact,
} from "../data/data";

// ── Rule engine ─────────────────────────────────────────────
// Each rule: a list of trigger keywords + a function that returns a reply string.
// First matching rule wins, checked top to bottom.
const rules = [
  {
    keywords: ["hi", "hello", "hey"],
    reply: () => `Hey! I'm a quick assistant for ${profile.name}'s portfolio. Ask me about skills, projects, education, certifications, achievements, or how to get in touch.`,
  },
  {
    keywords: ["who are you", "about", "yourself", "background"],
    reply: () => about.summary,
  },
  {
    keywords: ["skill", "tech stack", "technology", "language", "know"],
    reply: () =>
      `Technical skills: ${skills.technical.map((s) => s.name).join(", ")}. Tools: ${skills.tools.join(", ")}.`,
  },
  {
    keywords: ["project", "built", "build", "portfolio project"],
    reply: () =>
      `Here are a few projects: ${projects.map((p) => p.title).join(", ")}. Ask about a specific one for more detail.`,
  },
  {
    keywords: ["education", "college", "degree", "study", "cgpa"],
    reply: () =>
      education.map((e) => `${e.degree} at ${e.school} (${e.year}) — ${e.description}`).join(" "),
  },
  {
    keywords: ["certification", "certificate", "course"],
    reply: () =>
      `Certifications include: ${certifications.map((c) => `${c.title} (${c.issuer})`).join(", ")}.`,
  },
  {
    keywords: ["achievement", "award", "leetcode", "unstop"],
    reply: () =>
      achievements.map((a) => `${a.title}: ${a.description}`).join(" "),
  },
  {
    keywords: ["resume", "cv"],
    reply: () => `You can view the resume using the "View resume" button in the sidebar — it opens right in the browser.`,
  },
  {
    keywords: ["contact", "email", "reach", "hire", "connect", "phone"],
    reply: () =>
      `${contact.message} Email: ${profile.email}, or use the Contact section form directly.`,
  },
  {
    keywords: ["github"],
    reply: () => {
      const gh = profile.socials.find((s) => s.name === "GitHub");
      return gh ? `Here's the GitHub: ${gh.url}` : "GitHub link isn't set up yet.";
    },
  },
  {
    keywords: ["linkedin"],
    reply: () => {
      const li = profile.socials.find((s) => s.name === "LinkedIn");
      return li ? `Here's the LinkedIn: ${li.url}` : "LinkedIn link isn't set up yet.";
    },
  },
  {
    keywords: ["thank", "thanks"],
    reply: () => "You're welcome! Anything else you'd like to know?",
  },
];

const fallback =
  "That question is outside the scope of this portfolio assistant. Please explore the relevant section of the portfolio, such as About, Skills, Projects, Education, Certifications, Achievements, Resume, or Contact, for more information.";

function getReply(input) {
  const text = input.toLowerCase();
  const match = rules.find((rule) => rule.keywords.some((k) => text.includes(k)));
  return match ? match.reply() : fallback;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: `Hi, I'm ${profile.name}'s portfolio assistant. Ask me anything!` },
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
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <Icon name={open ? "close" : "bot"} size={25} />
      </button>

      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Portfolio assistant chat">
          <div className="chatbot-header">
            <span>Ask about {profile.name}</span>
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
              placeholder="Ask about skills, projects..."
              aria-label="Type your question"
            />
            <button type="submit" aria-label="Send">
              <Icon name="send" size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}