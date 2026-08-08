import { useState, useRef, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ResumeModal from "./components/ResumeModal";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Certifications from "./components/sections/Certifications";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Chatbot from "./components/Chatbot";
import Loader from "./components/Loader";
import BackgroundCanvas from "./components/BackgroundCanvas";
import gsap from "gsap";

const SECTIONS = {
  home: Home,
  about: About,
  skills: Skills,
  projects: Projects,
  achievements: Achievements,
  certifications: Certifications,
  education: Education,
  contact: Contact,
};

export default function App() {
  const [active, setActive] = useState("home");
  const [resumeOpen, setResumeOpen] = useState(false);
  const sectionRef = useRef(null);

  const ActiveSection = SECTIONS[active] ?? Home;

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );
    }
  }, [active]);

  return (
    <>
      <Loader />
      <BackgroundCanvas />
      <div className="app-shell">
        <Sidebar onOpenResume={() => setResumeOpen(true)} />

        <main className="main-content">
          <Navbar active={active} onChange={setActive} />
          <div className="section-viewport" ref={sectionRef}>
            <ActiveSection onNavigate={setActive} />
          </div>
        </main>

        <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
        <Chatbot />
      </div>
    </>
  );
}

