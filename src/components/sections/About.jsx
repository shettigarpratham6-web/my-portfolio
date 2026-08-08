import React from "react";

const ASCII = `
 ____             _   _
|  _ \\ _ __ __ _| |_| |__   __ _ _ __ ___
| |_) | '__/ _\` | __| '_ \\ / _\` | '_ \` _ \\
|  __/| | | (_| | |_| | | | (_| | | | | | |
|_|   |_|  \\__,_|\\__|_| |_|\\__,_|_| |_| |_|
`.trim();

const Prompt = () => (
  <span className="prompt">
    <span className="g">pratham</span>
    <span className="at">@</span>
    <span className="host">dev</span>
    <span className="d">:</span>
    <span className="dir">~</span>
    <span className="sym"> $</span>
  </span>
);

const Line = ({ children, index, className = "" }) => (
  <div
    className={`line ${className}`}
    style={{ animationDelay: `${(index + 1) * 55}ms` }}
  >
    {children}
  </div>
);

const Blank = ({ index }) => (
  <div
    className="blank"
    style={{ animationDelay: `${(index + 1) * 55}ms` }}
  />
);

const Command = ({ text, index }) => (
  <Line index={index}>
    <Prompt />
    <span className="cmd">{text}</span>
  </Line>
);

const Output = ({ children, index }) => (
  <Line index={index} className="out">
    {children}
  </Line>
);

const Bar = ({ label, pct, index }) => (
  <Line index={index} className="bar-wrap">
    <span className="bar-label">{label}</span>
    <div className="bar-track">
      <div
        className="bar-fill"
        style={{
          "--bar-width": `${pct}%`,
          animationDelay: `${(index + 1) * 55 + 250}ms`,
        }}
      />
    </div>
    <span className="bar-pct">{pct}%</span>
  </Line>
);

const Tags = ({ items, variant = "", index }) => (
  <Line index={index} className="out">
    {items.map((item) => (
      <span key={item} className={`tag ${variant}`}>
        {item}
      </span>
    ))}
  </Line>
);

const SectionHead = ({ children, index }) => (
  <Line index={index} className="out">
    <span className="section-head">{children}</span>
  </Line>
);

const About = () => {
  let index = 0;

  const next = () => index++;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap');

        .about-terminal,
        .about-terminal * {
          box-sizing: border-box;
        }

        .about-terminal {
          min-height: 100%;
          background: #0d1117;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          color: #e6edf3;
          overflow-x: hidden;

          --bg: #0d1117;
          --surface: #161b22;
          --border: #30363d;
          --green: #fbbf24;
          --cyan: #79c0ff;
          --yellow: #f59e0b;
          --purple: #d2a8ff;
          --pink: #ff7b72;
          --dim: #8b949e;
          --white: #e6edf3;
          --cursor: #fbbf24;
        }

        .os-chrome {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #1c2128;
          border-bottom: 1px solid var(--border);
          padding: 10px 16px;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot.r { background: #ff5f57; }
        .dot.y { background: #febc2e; }
        .dot.g { background: #28c840; }

        .tab-title {
          margin-left: 12px;
          font-size: 12px;
          color: var(--dim);
          letter-spacing: .04em;
        }

        .terminal {
          max-width: 820px;
          margin: 0 auto;
          padding: 32px 28px 64px;
        }

        .line {
          display: flex;
          align-items: flex-start;
          gap: 0;
          margin-bottom: 0;
          line-height: 1.6;
          font-size: 14px;
          opacity: 0;
          transform: translateY(4px);
          animation: appear .18s ease forwards;
        }

        @keyframes appear {
          to {
            opacity: 1;
            transform: none;
          }
        }

        .prompt {
          color: var(--green);
          white-space: nowrap;
          flex-shrink: 0;
          user-select: none;
        }

        .prompt .at { color: var(--dim); }
        .prompt .host { color: var(--cyan); }
        .prompt .dir { color: var(--purple); }

        .prompt .sym {
          color: var(--white);
          margin-right: 8px;
        }

        .cmd { color: var(--white); }

        .out {
          padding-left: 0;
          color: var(--white);
        }

        .blank {
          height: 10px;
        }

        .k { color: var(--cyan); }
        .v { color: var(--white); }
        .g { color: var(--green); }
        .y { color: var(--yellow); }
        .p { color: var(--purple); }
        .d { color: var(--dim); }
        .pk { color: var(--pink); }

        .section-head {
          color: var(--yellow);
          font-size: 13px;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .bar-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 0;
        }

        .bar-label {
          color: var(--cyan);
          min-width: 90px;
          font-size: 13px;
        }

        .bar-track {
          background: #21262d;
          border-radius: 2px;
          height: 6px;
          flex: 1;
          max-width: 200px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          width: 0;
          border-radius: 2px;
          background: var(--green);
          animation: fillBar .6s ease forwards;
          animation-delay: 0s;
        }

        @keyframes fillBar {
          to {
            width: var(--bar-width);
          }
        }

        .bar-pct {
          color: var(--dim);
          font-size: 12px;
          min-width: 36px;
          text-align: right;
        }

        .tag {
          display: inline-block;
          background: #21262d;
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1px 7px;
          font-size: 12px;
          color: var(--cyan);
          margin: 2px 3px 2px 0;
        }

        .tag.g {
          color: var(--green);
          border-color: #2ea04326;
          background: #12261e;
        }

        .tag.p {
          color: var(--purple);
          border-color: #8957e526;
          background: #1e1232;
        }

        .tag.y {
          color: var(--yellow);
          border-color: #e3b34126;
          background: #261d0f;
        }

        .cursor-blink {
          display: inline-block;
          width: 8px;
          height: 15px;
          background: var(--cursor);
          animation: blink 1s step-end infinite;
          vertical-align: text-bottom;
          margin-left: 2px;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .ascii-name {
          color: var(--green);
          font-size: 11px;
          line-height: 1.3;
          white-space: pre;
          letter-spacing: 0;
          margin: 0;
        }

        .project-name {
          display: inline-block;
          min-width: 120px;
        }

        .contact-key {
          display: inline-block;
          min-width: 90px;
        }

        @media (max-width: 600px) {
          .terminal {
            padding: 20px 14px 48px;
          }

          .ascii-name {
            font-size: 7.5px;
          }

          .bar-track {
            max-width: 120px;
          }

          .line {
            font-size: 13px;
          }

          .project-name {
            min-width: 100px;
          }

          .contact-key {
            min-width: 70px;
          }
        }
      `}</style>

      <section className="about-terminal">
        <div className="os-chrome">
          <div className="dot r" />
          <div className="dot y" />
          <div className="dot g" />
          <span className="tab-title">
            pratham@dev — bash — 82×32
          </span>
        </div>

        <div className="terminal">
          <Line index={next()}>
            <pre className="ascii-name">{ASCII}</pre>
          </Line>

          <Blank index={next()} />

          <Command text="whoami" index={next()} />
          <Output index={next()}>
            <span className="g">pratham</span>{" "}
            <span className="d">
              — CSE undergrad · full-stack · AI/ML builder
            </span>
          </Output>

          <Blank index={next()} />

          <Command text="cat about.txt" index={next()} />
          <Output index={next()}>
            <span className="k">Name     </span>{" "}
            <span className="v">Pratham</span>
          </Output>
          <Output index={next()}>
            <span className="k">College  </span>{" "}
            <span className="v">
              Sahyadri College of Engineering & Management
            </span>
          </Output>
          <Output index={next()}>
            <span className="k">Location </span>{" "}
            <span className="v">Mangalore, India</span>
          </Output>
          <Output index={next()}>
            <span className="k">Degree   </span>{" "}
            <span className="v">
              B.E. Computer Science & Engineering
            </span>
          </Output>
          <Output index={next()}>
            <span className="k">Batch    </span>{" "}
            <span className="v">2024 – 2028</span>
          </Output>
          <Output index={next()}>
            <span className="k">CGPA     </span>{" "}
            <span className="g">9.73 / 10</span>
          </Output>

          <Blank index={next()} />

          <Command text="cat stack.json | jq" index={next()} />
          <SectionHead index={next()}>{`{ Frontend }`}</SectionHead>
          <Tags index={next()} items={["React", "Next.js", "Vite"]} />

          <SectionHead index={next()}>{`{ Backend }`}</SectionHead>
          <Tags
            index={next()}
            variant="g"
            items={["Node.js", "Express", "MongoDB"]}
          />

          <SectionHead index={next()}>{`{ AI / LLM }`}</SectionHead>
          <Tags
            index={next()}
            variant="p"
            items={[
              "LangChain",
              "LangGraph",
              "Ollama",
              "Groq API",
              "Crew AI",
            ]}
          />

          <SectionHead index={next()}>{`{ Tooling }`}</SectionHead>
          <Tags
            index={next()}
            variant="y"
            items={["Git", "n8n", "make.com", "Vercel"]}
          />

          <Blank index={next()} />








          <Output index={next()}>
            <span className="pk">Open to internships</span>{" "}
            <span className="d">·</span>{" "}
            <span className="g">Building in public</span>{" "}
            <span className="d">·</span>{" "}
            <span className="p">Always learning</span>
          </Output>

          <Blank index={next()} />

          <Line index={next()}>
            <Prompt />
            <span className="cursor-blink" />
          </Line>
        </div>
      </section>
    </>
  );
};

export default About;