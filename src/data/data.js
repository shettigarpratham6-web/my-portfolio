// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site — no need to touch any component.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Pratham",
  title: "CSE Student · AI/ML & Full-Stack Developer",
  avatar: "/avatar.png", // place your photo in /public/avatar.jpg
  email: "shettigarpratham6@gmail.com",
  phone: "+91 7204779405",
  location: "Udupi, Karnataka, India",
  socials: [
    { name: "GitHub", url: "https://github.com/shettigarpratham6-web", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prathamshettigar/", icon: "linkedin" },
    { name: "LeetCode", url: "https://leetcode.com/u/_prathamshettigar-123/", icon: "leetcode" },
    { name: "Codolio", url: "https://codolio.com/profile/Prath@123", icon: "codolio" },
  ],
};

export const about = {
  summary:
   "I'm a third-year Computer Science Engineering student passionate about building intelligent software that solves real-world problems. My primary interests lie in Generative AI, Agentic AI, full-stack web development, and competitive programming. I enjoy taking ideas from concept to deployment, building scalable applications with clean code and intuitive user experiences while continuously exploring the latest advancements in AI.",
  details:
    "I enjoy building real-world applications powered by Generative AI and Agentic AI, alongside modern full-stack web development. I focus on writing clean, scalable, and maintainable code while continuously improving my problem-solving skills through Data Structures & Algorithms and competitive programming.",
  info: [
    { label: "College", value: "Sahyadri College of Engineering & Management" },
    { label: "Degree", value: "B.E. Computer Science Engineering" },
    { label: "Affiliation", value: "VTU" },
    { label: "Focus", value: "AI · Full-Stack · Competitive Programming" },
  ],
};

export const skills = {
  technical: [
    { name: "C++", level: 85 },
    { name: "Python", level: 80 },
    {name:"HTML / CSS / Tailwindcss", level:90},
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 78 },
    { name: "Node.js / Express", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "LangChain / LangGraph", level: 65 },
    { name: "Data Structures & Algorithms", level: 85 },
  ],
  tools: [
    "Git & GitHub",
    "VS Code",
    "Firebase",
    "ChromaDB",
    "Streamlit",
    "Google AI Studio",
    "Claude",
    "Arduino",
    "Vercel",
    "N8n"
  ],
};

export const projects = [
  {
    title: "ClarityScript",
    tag: "AI web LLM Analysis",
    description:
      "ClarityScript is an AI-powered full-stack web application designed to transform complex code into clear, structured, and human-readable explanations in real time.",
    stack: ["Node.js", "React.js", "AI Integration(API)", "Markdown Rendering", "Websecurity(Helmet, Rate Limiting"],
    link: "https://github.com/shettigarpratham6-web/Clarity-Script",
  },
  {
    title: "AI Task Prioritization Agent using LLM",
    tag: " AI Assistant",
    description:
      "Built an AI-powered task prioritization agent that transforms unstructured task lists into actionable categories using LLMs.",
    stack: ["Python", "Groq API", "LLaMA 3.1", "prompt engineering"],
    link: "https://github.com/shettigarpratham6-web/AI-powered-task-prioritization-agent.git",
  },
  {
    title: "Local Machine AI support",
    tag: "RAG · AI",
    description:
      "Built a local AI assistant using Retrieval-Augmented Generation (RAG) to answer questions from custom documents while keeping all data on the user's machine.",
    stack: ["LangChain", "Ollama", "ChromaDB", "Pandas"],
    link: "https://github.com/shettigarpratham6-web/Local_AI_Agent.git",
  },
  {
    title: "Deadline Guardian",
    tag: "Hackathon Vibe2ship",
    description:
      "Built a hackathon project for Vibe2Ship, organized by Coding Ninjas, using Google AI tools to develop an innovative AI-powered solution within the competition timeline.",
    stack: [
  "Google AI Studio",
  "Google Stitch",
  "Google Gemini API",
  "React.js",
  "JavaScript",
  "Vercel",
],
    link: "https://github.com/shettigarpratham6-web/Deadline_Guardian.git",
  }
];

export const achievements = [
  {
    title: "LeetCode Milestones",
    year: "2026",
    description:
      "Earned the 50 Days and 100 Days badges on LeetCode through consistent daily problem-solving and practice.",
    logo: "/logos/leetcode.jpg",
  },
  {
    title: "Unstop Premier League",
    year: "2026",
    description:
      "Participated in the Unstop Premier League and received the official Unstop T-shirt as a reward for participation.",
    logo: "/logos/unstop.jpg",
  },
];

export const certifications = [
  {
    title: "AI for Beginners",
    issuer: "Udemy",
    year: "2026",
    description:
      "Learned the fundamentals of Artificial Intelligence and Generative AI concepts.",
    logo: "/logos/udemy.png",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-9a628b1e-40b1-4b13-a097-071d46220b07.jpg",
  },
  {
    title: "React Bootcamp",
    issuer: "LetsUpgrade",
    year: "2026",
    description:
      "Built modern React applications using components, hooks, and state management.",
    logo: "/logos/letsupgrade.jpg",
    url: "https://www.linkedin.com/posts/prathamshettigar_reactjs-frontenddevelopment-webdevelopment-activity-7436063315748974592-X4Ud?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhiy-EBAQUMiqGGeDvEG_7eoGuUPnzzENs",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    year: "2026",
    description: "Validated problem-solving and algorithmic programming skills.",
    logo: "/logos/hackerrank.png",
    url: "https://www.hackerrank.com/certificates/iframe/12f25bdff4fe",
  },
  {
    title: "Python Certification",
    issuer: "OneRoadmap",
    year: "2026",
    description: "Strengthened Python programming fundamentals and practical development skills.",
    logo: "/logos/oneroadmap.webp",
    url: "https://www.oneroadmap.io/skills/python/certificate/CERT-8FD31F61",
  },
  {
    title: "Web Scraping using Python (Beautiful Soup)",
    issuer: "Simplilearn",
    year: "2026",
    description: "Learned web scraping techniques using Python and Beautiful Soup.",
    logo: "/logos/simplilearn.jpg",
    url: "https://certificates.simplicdn.net/share/10034762_9150485_1774968440084.png",
  },
  {
    title: "Dynamic Programming",
    issuer: "Scaler",
    year: "2026",
    description: "Mastered dynamic programming techniques for solving complex algorithmic problems.",
    logo: "/logos/scaler.jpg",
    url: "https://moonshot.scaler.com/s/sl/kWUFixduU4?_gl=1*7ojg75*_gcl_au*MTQxNjMwNDI0LjE3NzAyNzEyMTQ.*FPAU*MjA0MzcwMDkyOC4xNzcwMjcxMjE4*_ga*MTM3NjU5NTQ0NC4xNzcwMjcxMjE0*_ga_53S71ZZG1X*czE3NzA4MTI4OTUkbzckZzEkdDE3NzA4MTM1NDEkajQkbDAkaDE1Njc3MzA4MTc.",
  },
  {
    title: "Microsoft Azure Learning Challenge",
    issuer: "Microsoft",
    year: "2025",
    description: "Completed cloud computing and Microsoft Azure learning modules.",
    logo: "/logos/microsoft.webp",
    url: "https://learn.microsoft.com/en-us/users/pratham-8946/achievements/print?tab=tab-challenges",
  },
  {
    title: "Tata Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    year: "2025",
    description: "Completed a virtual job simulation focused on cybersecurity workflows and best practices.",
    logo: "/logos/forage.jpg",
    url: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_68ceb83794597f858749a0e8_1759039618823_completion_certificate.pdf",
  },
  {
    title: "Code Clash",
    issuer: "Unstop",
    year: "2026",
    description: "Participated in a national coding competition to enhance problem-solving skills.",
    logo: "/logos/unstop.jpg",
    url: "https://unstop.com/certificate-preview/c69d7709-b216-4759-ac53-996a3af11d44",
  },
  {
    title: "Kinetic Coding Contest",
    issuer: "Unstop",
    year: "2026",
    description: "Participated in a competitive coding contest focused on algorithmic challenges.",
    logo: "/logos/unstop.jpg",
    url: "https://unstop.com/certificate-preview/c459fd18-6e7f-4732-8e7a-10c4246c232b",
  },
];

export const education = [
  {
    degree: "B.E. Computer Science Engineering",
    school: "Sahyadri College of Engineering & Management (Autonomous)",
    year: "2024 — 2028",
    description:
      "Current CGPA: 9.73/10. Focused on core computer science, full-stack development, Generative AI, Agentic AI, and problem solving.",
    logo: "/logos/sahyadri-college.jpg",
  },
  {
    degree: "Pre-University",
    school: "Shamili P.U. College, Kidiyoor, Udupi",
    year: "2022 — 2024",
    description:
      "Completed Pre-University education in PCMC with 94%, building a strong foundation in Mathematics, Physics, Chemistry, and Computer Science.",
    logo: "/logos/shamili-puc.jpg",
  },
];

export const resume = {
 file: "/resume_1.pdf", // View-only: this is displayed in a modal, no download link is provided anywhere.
  summary:
    "A quick view of my resume. Reach out over email or LinkedIn if you'd like a copy.",
  sections: [
    {
      heading: "Education",
      items: education.map((e) => `${e.degree} — ${e.school} (${e.year})`),
    },
    {
      heading: "Skills",
      items: skills.technical.map((s) => s.name),
    },
    {
      heading: "Projects",
      items: projects.map((p) => p.title),
    },
    {
      heading: "Certifications",
      items: certifications.map((c) => `${c.title} — ${c.issuer}`),
    },
  ],
};

export const contact = {
  message:
    "I'm always open to discussing new opportunities, exciting projects, and collaborations in Generative AI, Agentic AI, and full-stack development. Let's connect!",
};
