export default function SectionHeading({ tag, title }) {
  return (
    <div className="section-heading">
      <p className="tag-label">
        <span className="tag-bracket">&lt;</span>
        {tag}
        <span className="tag-bracket">&gt;</span>
      </p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
