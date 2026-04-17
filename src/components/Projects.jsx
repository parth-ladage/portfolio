const featured = [
  {
    emoji: '🧩',
    image: '/images/project-ml-monitoring.png',
    title: 'ML Monitoring & Drift Detection System',
    desc: 'A production-focused system to monitor ML models and detect data and concept drift in real time.',
    features: [
      'Automated drift detection pipelines',
      'Continuous performance monitoring',
      'Designed for reliable ML in production',
    ],
    tech: ['Python', 'ML', 'Data Pipelines'],
  },
  {
    emoji: '💳',
    image: '/images/project-quickbill.png',
    title: 'QuickBill (ML-Integrated Billing System)',
    desc: 'A smart billing platform enhanced with machine learning for automation and financial insights.',
    features: [
      'Intelligent expense categorization',
      'Prediction-based insights',
      'Scalable backend architecture',
    ],
    tech: ['Python', 'FastAPI', 'ML'],
  },
  {
    emoji: '🏎️',
    image: '/images/project-f1-strategy.png',
    title: 'F1 Dynamic Strategy Optimization',
    desc: 'A data-driven system for optimizing race strategies using predictive modeling and simulations.',
    features: [
      'Strategy optimization using historical + real-time data',
      'Scenario simulation engine',
      'Decision-focused analytics',
    ],
    tech: ['Python', 'Data Analysis', 'ML'],
  },
  {
    emoji: '📊',
    image: '/images/project-crypto-sentiment.png',
    title: 'Crypto Sentiment Analysis System',
    desc: 'An ML-based system analyzing market sentiment to generate trading insights.',
    features: [
      'NLP-based sentiment extraction',
      'Market trend correlation',
      'Real-time data processing',
    ],
    tech: ['Python', 'NLP', 'APIs'],
  },
]

const other = [
  {
    emoji: '📄',
    title: 'GrowMart (Research Project)',
    items: ['Published research paper', 'Applied machine learning in a real-world domain'],
  },
  {
    emoji: '📈',
    title: 'Job Market Analyzer',
    items: ['Skill demand and trend analysis', 'Data-driven insights'],
  },
  {
    emoji: '🏋️',
    title: 'Gym Management App',
    items: ['Full stack system for managing operations', 'Membership and scheduling features'],
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects that demonstrate my expertise in backend systems, machine learning, and data-driven architectures.
        </p>
        <div className="projects-grid">
          {featured.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="project-image-overlay" />
              </div>
              <div className="project-card-body">
                <div className="project-card-top">
                  <h3 className="project-title">{p.title}</h3>
                  <a href="#" className="project-link" aria-label="View code">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-features">
                  {p.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {p.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="other-projects-title">Other Projects</h3>
        <div className="other-projects-grid">
          {other.map((p, i) => (
            <div className="other-project-card" key={i}>
              <div className="other-project-icon">{p.emoji}</div>
              <h4>{p.title}</h4>
              <ul>
                {p.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
