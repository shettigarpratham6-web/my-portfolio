export default function DeveloperStats() {
  const stats = [
    {
      num: "9.73",
      label: "Academic CGPA",
      sub: "B.E. CSE · Sahyadri College",
    },
    {
      num: "100+",
      label: "LeetCode Days Streak",
      sub: "Active Badges in Problem Solving",
    },
    {
      num: "10",
      label: "Verified Certifications",
      sub: "Udemy, Microsoft, Scaler, Forage",
    },
    {
      num: "04+",
      label: "Core AI Applications",
      sub: "RAG, Multi-Agent & Full-Stack",
    },
  ];

  return (
    <section className="section-padding" style={{ paddingTop: 0, paddingBottom: "2rem" }}>
      <div className="container">
        <div className="stats-banner-wrap">
          {stats.map((item) => (
            <div className="stat-item" key={item.label}>
              <span className="stat-number">{item.num}</span>
              <span className="stat-label">{item.label}</span>
              <span className="stat-sub">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
