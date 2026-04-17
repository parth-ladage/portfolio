const skillCategories = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    title: 'Programming Languages',
    tags: [
      { name: 'Python', color: '#3776AB' },
      { name: 'C++', color: '#00599C' },
      { name: 'Java', color: '#ED8B00' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'SQL', color: '#336791' },
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    ),
    title: 'Frameworks & Libraries',
    tags: [
      { name: 'FastAPI', color: '#009688' },
      { name: 'Flask', color: '#8B8B8B' },
      { name: 'React', color: '#61DAFB' },
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Next.js', color: '#AAAAAA' },
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
    ),
    title: 'Machine Learning & Data',
    tags: [
      { name: 'Machine Learning (Applied)', color: '#FF6F00' },
      { name: 'NLP (Sentiment Analysis)', color: '#4CAF50' },
      { name: 'Data Analysis', color: '#2196F3' },
      { name: 'Model Monitoring & Drift Detection', color: '#E91E63' },
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    ),
    title: 'Tools & Technologies',
    tags: [
      { name: 'Git', color: '#F05032' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'Supabase', color: '#3ECF8E' },
      { name: 'Appwrite', color: '#FD366E' },
      { name: 'MongoDB', color: '#47A248' },
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    title: 'Concepts',
    tags: [
      { name: 'Backend Architecture', color: '#7C4DFF' },
      { name: 'API Design', color: '#00BCD4' },
      { name: 'Data Pipelines', color: '#FF9800' },
      { name: 'System Design (Learning Phase)', color: '#9E9E9E' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Comprehensive expertise across modern development stack with focus on scalable backend systems, machine learning, and full-stack applications.
        </p>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-card-header">
                {cat.icon}
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.tags.map((tag, j) => (
                  <span className="skill-tag" key={j} style={{ '--tag-color': tag.color }}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
