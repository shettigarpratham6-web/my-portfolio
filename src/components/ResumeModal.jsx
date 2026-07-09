import { useEffect } from "react";
import Icon from "./Icon";
import { resume, profile } from "../data/data";

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <p className="tag-label small">
              <span className="tag-bracket">&lt;</span>
              resume
              <span className="tag-bracket">&gt;</span>
            </p>
            <h3>{profile.name} — Resume</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close resume preview">
            <Icon name="close" size={18} />
          </button>
        </div>

        <p className="modal-note">{resume.summary}</p>

        {/* CHANGED: this used to be the resume.sections.map(...) block —
           now it embeds the actual PDF instead */}
        <div className="modal-body">
          <iframe
            src={`${resume.file}#toolbar=0`}
            title="Resume"
            className="resume-frame"
          />
        </div>

        <p className="modal-footnote">This resume is available to view only.</p>
      </div>
    </div>
  );
}