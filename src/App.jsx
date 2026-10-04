import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import TechnicalFocus from "./components/sections/TechnicalFocus";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import DeveloperStats from "./components/sections/DeveloperStats";
import Journey from "./components/sections/Journey";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      {/* Sticky Editorial Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Editorial Content Flow */}
      <main id="main-content">
        <Home onOpenResume={() => setResumeOpen(true)} />
        <TechnicalFocus />
        <Projects />
        <About />
        <Skills />
        <DeveloperStats />
        <Journey />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Overlays & Interactive Utilities */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      <Chatbot />
    </div>
  );
}
