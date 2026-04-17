export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A deeper look into what I do and where I'm headed.</p>
        <div className="about-grid">
          <div className="about-main">
            <p className="about-intro">
              I'm a Computer Science undergraduate specializing in Data Science, working as a{' '}
              <strong>Full Stack & AI/ML Engineer</strong> with a strong backend focus.
            </p>
            <div className="about-block">
              <h3>What I Do</h3>
              <ul>
                <li>Backend system design</li>
                <li>Machine learning integration</li>
                <li>Data-driven applications</li>
              </ul>
              <p>
                I focus on building production-oriented systems, where the backend ensures scalability and performance,
                while ML models drive intelligent decision-making.
              </p>
            </div>
            <div className="about-block">
              <h3>Key Areas of Interest</h3>
              <ul>
                <li>ML monitoring & drift detection</li>
                <li>Financial intelligence systems</li>
                <li>Optimization and decision engines</li>
              </ul>
            </div>
          </div>
          <div className="about-sidebar">
            <div className="about-card">
              <h4>Currently Focused On</h4>
              <ul>
                <li>Strengthening backend architecture and system design</li>
                <li>Building ML-integrated applications end-to-end</li>
                <li>Preparing for high-impact engineering roles</li>
              </ul>
            </div>
            <div className="about-card accent">
              <h4>Long-Term Vision</h4>
              <p>
                I aim to build scalable AI-driven products, especially in <strong>finance</strong> and{' '}
                <strong>automation</strong>.
              </p>
            </div>
            <div className="about-card highlight">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h4>Primary Strength</h4>
              <p>Backend systems and ML-integrated applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
