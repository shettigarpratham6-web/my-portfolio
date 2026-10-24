import { useState, useEffect, useRef } from "react";
import { projects } from "../../data/data";

const projectTechIcons = {
  "node.js": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path fill="#539E43" d="M12 1.5L2.8 6.8v10.4L12 22.5l9.2-5.3V6.8L12 1.5zm0 2.3l6.9 4v7.9l-6.9 4-6.9-4V7.8l6.9-4z" />
      <path fill="#339933" d="M12 5.5l5 2.9v5.8l-5 2.9-5-2.9V8.4l5-2.9z" />
    </svg>
  ),
  "react.js": (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  "react 19": (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  "ai integration(api)": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#0284C7" />
      <path d="M7 12h10M14 9l3 3-3 3M10 15l-3-3 3-3" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="1" fill="#FFFFFF" />
    </svg>
  ),
  "markdown rendering": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="3" fill="#1D1C1A" />
      <path fill="#FFFFFF" d="M3.5 7.5v9h2.5v-5l2 2.5 2-2.5v5h2.5v-9H10l-2 2.5-2-2.5H3.5zm13 0v4.5h-2.5l3.5 4.5 3.5-4.5h-2.5v-4.5h-2z" />
    </svg>
  ),
  "websecurity(helmet, rate limiting": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <path d="M12 2L4 5.5v5.5C4 16.5 7.4 21 12 22c4.6-1 8-5.5 8-11V5.5L12 2z" fill="#10B981" />
      <path d="M9.5 11.5l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "websecurity(helmet, rate limiting)": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <path d="M12 2L4 5.5v5.5C4 16.5 7.4 21 12 22c4.6-1 8-5.5 8-11V5.5L12 2z" fill="#10B981" />
      <path d="M9.5 11.5l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "vite": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <defs>
        <linearGradient id="proj_viteGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="proj_viteGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEA83" />
          <stop offset="100%" stopColor="#FFDD35" />
        </linearGradient>
      </defs>
      <path fill="url(#proj_viteGrad1)" d="M21.5 3.5l-9.2 17.3c-.2.4-.8.4-1 0L2.1 3.5c-.3-.5.1-1.1.7-1l9.1 1.7 8.9-1.7c.6-.1 1 .5.7 1z" />
      <path fill="url(#proj_viteGrad2)" d="M13.2 2.5l-5.6 10.4c-.2.4.1.8.5.8h3.3l-1.9 6.8c-.2.6.6 1 .9.5l6.7-9.5c.3-.4 0-.9-.5-.9h-3.4l2.1-7c.2-.6-.5-1.1-1.1-.6z" />
    </svg>
  ),
  "fastapi": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <circle cx="12" cy="12" r="11" fill="#009688" />
      <path fill="#FFFFFF" d="M13 2.5L5.5 13.5h5l-1.5 8 8.5-11.5h-5.5l1-7.5z" />
    </svg>
  ),
  "langchain": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <rect width="24" height="24" rx="4" fill="#1C3C3C" />
      <path d="M13.5 4.5c-3.3 0-6 2.7-6 6 0 1.7.7 3.3 1.9 4.3L8.5 19.5l3.8-1.9c.4.1.8.2 1.2.2 3.3 0 6-2.7 6-6s-2.7-6-6-6z" fill="#00A67E" />
      <circle cx="12" cy="8.5" r="1.2" fill="#FFFFFF" />
      <polygon points="16,8.5 19.5,9.5 16,10.5" fill="#F59E0B" />
    </svg>
  ),
  "llama 3.2": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path fill="#0081FB" d="M12 4C7.8 4 4.5 7.1 4.5 11.2c0 2.5 1.2 4.8 3.2 6.1l.6.4-.3.7c-.5 1.3-1.4 2.4-2.5 3.2 1.7.1 3.5-.4 4.9-1.4l.6-.4.7.2c.4.1.8.1 1.2.1 4.2 0 7.5-3.1 7.5-7.2S16.2 4 12 4zm-3 8.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
    </svg>
  ),
  "llama 3.1": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path fill="#0081FB" d="M12 4C7.8 4 4.5 7.1 4.5 11.2c0 2.5 1.2 4.8 3.2 6.1l.6.4-.3.7c-.5 1.3-1.4 2.4-2.5 3.2 1.7.1 3.5-.4 4.9-1.4l.6-.4.7.2c.4.1.8.1 1.2.1 4.2 0 7.5-3.1 7.5-7.2S16.2 4 12 4zm-3 8.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
    </svg>
  ),
  "ollama": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="#1D1C1A">
      <path d="M9.5 3a1 1 0 0 0-1 1v2.2A5.98 5.98 0 0 0 5 12c0 2.22 1.21 4.16 3 5.2V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.8c1.79-1.04 3-2.98 3-5.2 0-3.31-2.69-6-6-6V4a1 1 0 0 0-1-1h-2.5zm0 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  ),
  "whisper": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <rect width="24" height="24" rx="4" fill="#10A37F" />
      <path d="M5 12h2M8 8v8M11 5v14M14 7v10M17 9v6M20 12h-1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "sarvam ai": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#FF6B00" />
      <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
      <circle cx="12" cy="12" r="2.5" fill="#FF6B00" />
    </svg>
  ),
  "chromadb": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <circle cx="12" cy="4" r="2.2" fill="#FF4757" />
      <circle cx="17.6" cy="6.4" r="2.2" fill="#FFA502" />
      <circle cx="19.8" cy="12" r="2.2" fill="#2ED573" />
      <circle cx="17.6" cy="17.6" r="2.2" fill="#1E90FF" />
      <circle cx="12" cy="19.8" r="2.2" fill="#3742FA" />
      <circle cx="6.4" cy="17.6" r="2.2" fill="#9B59B6" />
      <circle cx="4.2" cy="12" r="2.2" fill="#E84393" />
      <circle cx="6.4" cy="6.4" r="2.2" fill="#FF6348" />
      <circle cx="12" cy="12" r="2.4" fill="#2F3542" />
    </svg>
  ),
  "redis vl": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path fill="#DC382D" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.6 3.8-3.4 1.7L8.6 6 12 4.2zm-8 4.6l7 3.5v7.5l-7-3.5V8.8zm9 11v-7.5l7-3.5v7.5l-7 3.5z" />
    </svg>
  ),
  "inngest": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#3A6DFF" />
      <path fill="#FFFFFF" d="M6 7l5 5-5 5h3.5l5-5-5-5H6zm6 0l5 5-5 5h3.5l5-5-5-5H12z" />
    </svg>
  ),
  "ffmpeg": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#007808" />
      <path fill="#FFFFFF" d="M5 6h14v2.5H8.5V11h9v2.5h-9V18H5V6z" />
    </svg>
  ),
  "yt-dlp": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <rect width="24" height="24" rx="4" fill="#FF0000" />
      <polygon points="9.5,7.5 16.5,12 9.5,16.5" fill="#FFFFFF" />
      <line x1="6" y1="19" x2="18" y2="19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "sentence transformers": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <circle cx="12" cy="12" r="10.5" fill="#FFD21E" />
      <circle cx="8" cy="10" r="1.5" fill="#1D1C1A" />
      <circle cx="16" cy="10" r="1.5" fill="#1D1C1A" />
      <path d="M7.5 14.5c1.2 2 3 3 4.5 3s3.3-1 4.5-3" stroke="#1D1C1A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  ),
  "reportlab": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <path d="M4 4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" fill="#E53935" />
      <polyline points="14 2 14 8 20 8" fill="#FFCDD2" />
      <path d="M7 14h10M7 17h6" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  "python": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path fill="#3776AB" d="M11.91 2c-5.01 0-4.69 2.17-4.69 2.17l.01 2.25h4.78v.68H4.63S2 6.8 2 11.85c0 5.04 2.3 4.91 2.3 4.91h1.37v-2.29s-.07-2.73 2.68-2.73h4.63s2.59.04 2.59-2.52V4.65S16.14 2 11.91 2zm-2.58 1.48a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72z" />
      <path fill="#FFD438" d="M12.09 22c5.01 0 4.69-2.17 4.69-2.17l-.01-2.25h-4.78v-.68h7.38S22 17.2 22 12.15c0-5.04-2.3-4.91-2.3-4.91h-1.37v2.29s.07 2.73-2.68 2.73h-4.63s-2.59-.04-2.59 2.52v4.56S7.86 22 12.09 22zm2.58-1.48a.86.86 0 1 1 0-1.72.86.86 0 0 1 0 1.72z" />
    </svg>
  ),
  "groq api": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#F55036" />
      <path fill="#FFFFFF" d="M13.5 3L6 13h5.5l-1.5 8 7.5-10h-5.5l1.5-8z" />
    </svg>
  ),
  "prompt engineering": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <path d="M4 17l6-5-6-5" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="19" x2="20" y2="19" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M19 4l.8 1.7L21.5 6.5l-1.7.8L19 9l-.8-1.7-1.7-.8 1.7-.8L19 4z" fill="#F59E0B" />
    </svg>
  ),
  "pandas": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect x="3" y="10" width="4" height="10" fill="#150458" rx="1" />
      <rect x="10" y="4" width="4" height="16" fill="#E70488" rx="1" />
      <rect x="17" y="7" width="4" height="13" fill="#00ADD8" rx="1" />
    </svg>
  ),
  "google ai studio": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path fill="#4285F4" d="M12 2a10 10 0 0 0 0 10A10 10 0 0 0 2 12a10 10 0 0 0 10 0 10 10 0 0 0 0-10z" />
      <path fill="#34A853" d="M12 12a10 10 0 0 0 0 10 10 10 0 0 0 10-10 10 10 0 0 0-10 0z" />
      <path fill="#EA4335" d="M12 12a10 10 0 0 0-10 0 10 10 0 0 0 10 10 10 10 0 0 0 0-10z" />
      <path fill="#FBBC05" d="M12 12a10 10 0 0 0 10-10 10 10 0 0 0-10 0 10 10 0 0 0 0 10z" />
    </svg>
  ),
  "google stitch": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <rect width="24" height="24" rx="4" fill="#3B82F6" />
      <path d="M6 6l12 12M18 6L6 18" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
    </svg>
  ),
  "google gemini api": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <defs>
        <linearGradient id="proj_geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B72E8" />
          <stop offset="50%" stopColor="#8E75FF" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path fill="url(#proj_geminiGrad)" d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  ),
  "gemini ai": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <defs>
        <linearGradient id="proj_geminiGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B72E8" />
          <stop offset="50%" stopColor="#8E75FF" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path fill="url(#proj_geminiGrad2)" d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  ),
  "javascript": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path fill="#000000" d="M14.99 17.5c.87.52 1.9.84 2.89.84 1.74 0 2.87-.87 2.87-2.21 0-1.42-.91-1.99-2.45-2.65l-.84-.36c-2.37-1.02-3.8-2.32-3.8-4.79 0-2.82 2.18-4.83 5.56-4.83 1.76 0 3.03.4 3.99.93l-1.08 2.67c-.77-.44-1.63-.73-2.81-.73-1.44 0-2.43.79-2.43 1.93 0 1.25.79 1.76 2.37 2.45l.84.36c2.81 1.21 3.99 2.47 3.99 5.09 0 3.05-2.37 5.02-6.16 5.02-2.13 0-3.76-.55-4.82-1.22l1.08-2.57zM8.07 17.65c.57.34 1.34.62 2.27.62 1.48 0 2.41-.71 2.41-2.47V3.5h3.2v12.27c0 3.32-1.92 4.98-5.26 4.98-1.89 0-3.32-.48-4.14-1.02l1.52-2.08z" />
    </svg>
  ),
  "vercel": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <path fill="#000000" d="M12 2L24 22H0L12 2z" />
    </svg>
  ),
  "langsmith": (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <rect width="24" height="24" rx="4" fill="#0EA5E9" />
      <circle cx="8" cy="12" r="2.5" fill="#FFFFFF" />
      <circle cx="16" cy="7" r="2.5" fill="#FFFFFF" />
      <circle cx="16" cy="17" r="2.5" fill="#FFFFFF" />
      <path d="M10 11l4-3M10 13l4 3" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  "cerebras ai": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <rect width="24" height="24" rx="4" fill="#ED1C24" />
      <path fill="#FFFFFF" d="M7 7h10v10H7V7zm2 2v6h6V9H9z" />
      <rect x="11" y="11" width="2" height="2" fill="#FFFFFF" />
    </svg>
  ),
  "next.js": (
    <svg viewBox="0 0 24 24" width="14" height="14">
      <circle cx="12" cy="12" r="11" fill="#000000" />
      <path fill="#FFFFFF" d="M14.5 8h2v8h-2V9.8l-5.6 6.2H7V8h2v6.2l5.5-6.2z" />
    </svg>
  ),
};

function getProjectTechIcon(techName) {
  if (!techName) return null;
  const key = techName.trim().toLowerCase();
  if (projectTechIcons[key]) return projectTechIcons[key];
  if (key.includes("react")) return projectTechIcons["react.js"];
  if (key.includes("llama")) return projectTechIcons["llama 3.1"];
  if (key.includes("gemini")) return projectTechIcons["google gemini api"];
  if (key.includes("websecurity") || key.includes("security") || key.includes("helmet")) return projectTechIcons["websecurity(helmet, rate limiting"];
  if (key.includes("markdown")) return projectTechIcons["markdown rendering"];
  if (key.includes("prompt")) return projectTechIcons["prompt engineering"];
  if (key.includes("api")) return projectTechIcons["ai integration(api)"];
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ProjectVisual({ project }) {
  // Support array of images (project.images, project.screenshots, or project.image) or fallback to single string
  const rawImages = [
    ...(Array.isArray(project.images) ? project.images : []),
    ...(Array.isArray(project.screenshots) ? project.screenshots : []),
    ...(Array.isArray(project.image)
      ? project.image
      : typeof project.image === "string" && project.image
      ? [project.image]
      : []),
  ];
  const candidateImages = Array.from(new Set(rawImages));

  const [failedImages, setFailedImages] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const validImages = candidateImages.filter((src) => !failedImages[src]);
  const hasMultiple = validImages.length > 1;

  // Keep currentIndex bounded
  useEffect(() => {
    if (currentIndex >= validImages.length && validImages.length > 0) {
      setCurrentIndex(0);
    }
  }, [validImages.length, currentIndex]);

  // Auto-play: cycle every 3 seconds, pause on hover or interaction
  useEffect(() => {
    if (!hasMultiple || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasMultiple, isPaused, validImages.length]);

  const handlePrev = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
  };

  const handleImageError = (src) => {
    setFailedImages((prev) => ({ ...prev, [src]: true }));
  };

  const renderSvgVisual = () => {
    const title = project.title;
    if (title.includes("ClarityScript")) {
      return (
        <svg viewBox="0 0 600 380" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="380" fill="#181716" />
          <rect x="40" y="40" width="520" height="300" rx="8" fill="#22201D" stroke="rgba(244, 241, 232, 0.12)" strokeWidth="1" />
          <rect x="40" y="40" width="520" height="36" rx="8" fill="#2B2925" />
          <circle cx="65" cy="58" r="5" fill="#E07A5F" />
          <circle cx="82" cy="58" r="5" fill="#DDBB66" />
          <circle cx="99" cy="58" r="5" fill="#8BD65A" />
          <text x="300" y="63" fill="#B8B3A8" fontSize="12" textAnchor="middle" fontFamily="var(--font-mono)">ClarityScript · AI Code Analysis</text>
          
          <rect x="65" y="100" width="220" height="210" rx="6" fill="#181716" stroke="rgba(139, 214, 90, 0.2)" strokeWidth="1" />
          <rect x="85" y="125" width="130" height="8" rx="4" fill="#8BD65A" opacity="0.9" />
          <rect x="85" y="145" width="170" height="6" rx="3" fill="#68645D" />
          <rect x="85" y="160" width="110" height="6" rx="3" fill="#E07A5F" />
          <rect x="85" y="175" width="150" height="6" rx="3" fill="#B8B3A8" />
          <rect x="85" y="200" width="120" height="6" rx="3" fill="#68645D" />
          <rect x="85" y="215" width="140" height="6" rx="3" fill="#8BD65A" opacity="0.6" />
          
          <rect x="305" y="100" width="235" height="210" rx="6" fill="#252421" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <text x="325" y="135" fill="#F4F1E8" fontSize="13" fontWeight="bold" fontFamily="var(--font-display)">Human-Readable Output</text>
          <rect x="325" y="155" width="195" height="7" rx="3.5" fill="#8BD65A" opacity="0.75" />
          <rect x="325" y="172" width="180" height="7" rx="3.5" fill="#B8B3A8" opacity="0.8" />
          <rect x="325" y="189" width="160" height="7" rx="3.5" fill="#B8B3A8" opacity="0.8" />
          <rect x="325" y="225" width="100" height="32" rx="4" fill="#8BD65A" />
          <text x="375" y="246" fill="#1D1C1A" fontSize="11" textAnchor="middle" fontWeight="bold" fontFamily="var(--font-mono)">Explain Code</text>
        </svg>
      );
    }
    if (title.includes("Task")) {
      return (
        <svg viewBox="0 0 600 380" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="380" fill="#191B1A" />
          <rect x="40" y="35" width="520" height="310" rx="10" fill="#232624" stroke="rgba(139, 214, 90, 0.2)" strokeWidth="1" />
          <text x="65" y="75" fill="#F4F1E8" fontSize="16" fontWeight="bold" fontFamily="var(--font-display)">AI Task Prioritization Agent</text>
          <rect x="420" y="55" width="120" height="26" rx="13" fill="#1D1C1A" stroke="rgba(139, 214, 90, 0.4)" strokeWidth="1" />
          <text x="480" y="72" fill="#8BD65A" fontSize="11" textAnchor="middle" fontWeight="bold" fontFamily="var(--font-mono)">LLaMA 3.1 + Groq</text>
          
          <rect x="65" y="105" width="470" height="55" rx="6" fill="#1A1C1B" stroke="rgba(224, 122, 95, 0.4)" strokeWidth="1" />
          <circle cx="95" cy="132" r="8" fill="#E07A5F" />
          <text x="120" y="137" fill="#F4F1E8" fontSize="13" fontWeight="500">P0: Setup Multi-Agent Routing Engine</text>
          <rect x="430" y="120" width="85" height="24" rx="4" fill="#E07A5F" opacity="0.25" />
          <text x="472.5" y="136" fill="#E07A5F" fontSize="10.5" textAnchor="middle" fontWeight="bold">Urgent</text>

          <rect x="65" y="175" width="470" height="55" rx="6" fill="#1A1C1B" stroke="rgba(139, 214, 90, 0.3)" strokeWidth="1" />
          <circle cx="95" cy="202" r="8" fill="#8BD65A" />
          <text x="120" y="207" fill="#F4F1E8" fontSize="13" fontWeight="500">P1: Context Compression & Token Optimization</text>
          <rect x="430" y="190" width="85" height="24" rx="4" fill="#8BD65A" opacity="0.25" />
          <text x="472.5" y="206" fill="#8BD65A" fontSize="10.5" textAnchor="middle" fontWeight="bold">Normal</text>

          <rect x="65" y="245" width="470" height="55" rx="6" fill="#1A1C1B" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          <circle cx="95" cy="272" r="8" fill="#68645D" />
          <text x="120" y="277" fill="#F4F1E8" fontSize="13" fontWeight="500">P2: Structured JSON Output Formatting</text>
        </svg>
      );
    }
    if (title.includes("Local") || title.includes("RAG")) {
      return (
        <svg viewBox="0 0 600 380" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="380" fill="#161A19" />
          <rect x="40" y="40" width="520" height="300" rx="8" fill="#202624" stroke="rgba(139, 214, 90, 0.25)" strokeWidth="1" />
          <text x="70" y="80" fill="#8BD65A" fontSize="15" fontWeight="bold" fontFamily="var(--font-mono)">&gt; Local_RAG_Pipeline (Ollama + ChromaDB)</text>
          
          <line x1="120" y1="180" x2="250" y2="130" stroke="#8BD65A" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="120" y1="180" x2="250" y2="230" stroke="#8BD65A" strokeWidth="2" strokeDasharray="4,4" />
          
          <circle cx="120" cy="180" r="26" fill="#161A19" stroke="#8BD65A" strokeWidth="2.5" />
          <text x="120" y="185" fill="#F4F1E8" fontSize="11" textAnchor="middle" fontWeight="bold">DOCS</text>
          
          <circle cx="250" cy="130" r="26" fill="#161A19" stroke="#8BD65A" strokeWidth="2.5" />
          <text x="250" y="135" fill="#F4F1E8" fontSize="10.5" textAnchor="middle" fontWeight="bold">CHROMA</text>
          
          <circle cx="250" cy="230" r="26" fill="#161A19" stroke="#8BD65A" strokeWidth="2.5" />
          <text x="250" y="235" fill="#F4F1E8" fontSize="10.5" textAnchor="middle" fontWeight="bold">EMBED</text>
          
          <line x1="276" y1="180" x2="380" y2="180" stroke="#8BD65A" strokeWidth="2.5" />
          <rect x="380" y="145" width="150" height="70" rx="8" fill="#161A19" stroke="#8BD65A" strokeWidth="2" />
          <text x="455" y="180" fill="#F4F1E8" fontSize="14" textAnchor="middle" fontWeight="bold">Local Ollama</text>
          <text x="455" y="200" fill="#8BD65A" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">100% Private Offline</text>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 600 380" className="project-banner-svg" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#1F1A17" />
        <rect x="40" y="40" width="520" height="300" rx="10" fill="#28211D" stroke="rgba(224, 122, 95, 0.3)" strokeWidth="1" />
        <text x="70" y="85" fill="#E07A5F" fontSize="18" fontWeight="bold" fontFamily="var(--font-display)">Deadline Guardian</text>
        <text x="70" y="110" fill="#B8B3A8" fontSize="11" fontFamily="var(--font-mono)">Hackathon Vibe2Ship // Google AI & Gemini API</text>
        
        <rect x="70" y="150" width="460" height="18" rx="9" fill="#1F1A17" />
        <rect x="70" y="150" width="340" height="18" rx="9" fill="#E07A5F" />
        <text x="70" y="210" fill="#F4F1E8" fontSize="14">Real-Time Timeline Engine & Intelligent Synchronization</text>
        <rect x="370" y="235" width="160" height="38" rx="19" fill="#E07A5F" />
        <text x="450" y="259" fill="#F4F1E8" fontSize="12" textAnchor="middle" fontWeight="bold" fontFamily="var(--font-mono)">Sync Google AI</text>
      </svg>
    );
  };

  return (
    <div
      className="project-media-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ userSelect: "none" }}
    >
      {validImages.length > 0 ? (
        <div
          className="project-carousel-container"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Sliding track */}
          <div
            className="project-carousel-track"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {validImages.map((imgSrc, idx) => (
              <div
                key={imgSrc + idx}
                className="project-carousel-slide"
                style={{
                  minWidth: "100%",
                  width: "100%",
                  height: "100%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                  onError={() => handleImageError(imgSrc)}
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          {hasMultiple && (
            <button
              type="button"
              className="carousel-nav-btn carousel-prev-btn"
              onClick={handlePrev}
              aria-label="Previous screenshot"
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(29, 28, 26, 0.72)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "#F4F1E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 3,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(29, 28, 26, 0.92)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(29, 28, 26, 0.72)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Right Arrow Button */}
          {hasMultiple && (
            <button
              type="button"
              className="carousel-nav-btn carousel-next-btn"
              onClick={handleNext}
              aria-label="Next screenshot"
              style={{
                position: "absolute",
                top: "50%",
                right: "12px",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(29, 28, 26, 0.72)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "#F4F1E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 3,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(29, 28, 26, 0.92)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(29, 28, 26, 0.72)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Navigation Dots */}
          {hasMultiple && (
            <div
              className="carousel-dots-container"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 8px",
                borderRadius: "9999px",
                background: "rgba(29, 28, 26, 0.65)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                zIndex: 3,
              }}
            >
              {validImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to screenshot ${idx + 1}`}
                  style={{
                    width: currentIndex === idx ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    background: currentIndex === idx ? "var(--accent, #8BD65A)" : "rgba(244, 241, 232, 0.4)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        renderSvgVisual()
      )}
      {project.featured && <span className="project-badge-pill">Featured Project</span>}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section-padding" id="work">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-header-top">
            <span className="editorial-index">01 / SELECTED WORK</span>
            <span className="editorial-tag">Engineered Solutions</span>
          </div>
          <h2 className="editorial-title">Things I've Built.</h2>
          <p className="editorial-subtitle">
            A curated selection of full-stack web applications, Generative AI agent workflows, and local RAG systems built with modern engineering practices.
          </p>
        </div>

        {/* Alternating Project Blocks */}
        <div className="projects-container">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1; // Alternating layout
            const formattedNum = String(index + 1).padStart(2, "0");

            return (
              <article
                className={`project-block ${isEven ? "reverse" : ""}`}
                key={project.title}
                aria-label={project.title}
              >
                {/* Visual Side */}
                <ProjectVisual project={project} />

                {/* Information Side */}
                <div className="project-info">
                  <div className="project-top-row">
                    <span className="project-num">{formattedNum}</span>
                    <span className="project-tag">{project.tag.trim()}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-stack-wrap">
                    {project.stack.map((tech) => (
                      <span
                        className="tech-tag"
                        key={tech}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.38rem",
                        }}
                      >
                        <span
                          className="tech-icon-badge"
                          aria-hidden="true"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "0.95rem",
                            height: "0.95rem",
                            flexShrink: 0,
                          }}
                        >
                          {getProjectTechIcon(tech)}
                        </span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="project-action-row">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link-btn"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <span>View on GitHub</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
