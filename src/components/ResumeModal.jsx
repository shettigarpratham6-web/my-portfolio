import { useEffect } from "react";
import { resume, profile } from "../data/data";

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview"
    >
      <div
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent-coral)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Document View
            </span>
            <h3>{profile.name} Shettigar — Curriculum Vitae</h3>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close resume preview"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <iframe
            src={`${resume.file}#toolbar=0`}
            title="Pratham's Resume"
            className="resume-frame"
          />
        </div>

        <div className="modal-footer">
          <span>This resume document is displayed in read-only mode.</span>
          <span>Contact: {profile.email}</span>
        </div>
      </div>
    </div>
  );
}