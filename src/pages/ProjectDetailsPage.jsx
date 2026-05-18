import { useParams, Link } from 'react-router-dom'
import { allProjects } from '../data/projects'
import { useEffect } from 'react'

export default function ProjectDetailsPage() {
  const { slug } = useParams()
  const project = allProjects.find(p => p.slug === slug)

  // Scroll to top when loading the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="project-details-page" style={{ paddingTop: '100px', textAlign: 'center', minHeight: '60vh' }}>
        <div className="section-container">
          <h1>Project not found</h1>
          <Link to="/projects" className="btn" style={{ marginTop: '2rem' }}>Back to Projects</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="project-details-page">
      <section className="project-details-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--card-bg)' }}>
        <div className="section-container">
          <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Projects
          </Link>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{project.emoji} {project.title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.6 }}>{project.desc}</p>
          <div className="project-tech" style={{ marginTop: '2rem' }}>
            {project.tech.map((t, j) => (
              <span key={j} style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>{t}</span>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub Repo
              </a>
            )}
            {project.deployedUrl && (
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="project-details-content" style={{ padding: '4rem 0' }}>
        <div className="section-container" style={{ maxWidth: '800px' }}>
          
          {project.image && (
            <div style={{ marginBottom: '4rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', display: 'block' }} />
            </div>
          )}

          <div className="blog-content" style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--text)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text)' }}>Overview</h2>
            {project.content?.overview ? (
              project.content.overview.map((p, idx) => <p key={idx} style={{ marginBottom: '1.5rem' }}>{p}</p>)
            ) : (
              <p style={{ marginBottom: '2rem' }}>
                This is a placeholder for the detailed explanation of the <strong>{project.title}</strong> project. You will be able to add the full project context, challenges faced, and the solutions implemented here.
              </p>
            )}

            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text)' }}>Project Structure & Architecture</h2>
            {project.content?.architecture ? (
              project.content.architecture.map((p, idx) => {
                const isBold = p.includes(':**');
                if (isBold) {
                  const parts = p.split(':**');
                  return (
                    <p key={idx} style={{ marginBottom: '1.5rem' }}>
                      <strong>{parts[0].replace('**', '')}:</strong>{parts[1]}
                    </p>
                  )
                }
                return <p key={idx} style={{ marginBottom: '1.5rem' }}>{p}</p>
              })
            ) : (
              <>
                <p style={{ marginBottom: '1.5rem' }}>
                  Detailed architecture diagrams or structure breakdown will go here.
                </p>
                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                  <pre style={{ margin: 0 }}>
{`src/
├── components/
├── data/
├── models/
├── services/
└── utils/`}
                  </pre>
                </div>
              </>
            )}

            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text)' }}>Key Features</h2>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
              {project.content?.features ? (
                project.content.features.map((f, i) => {
                  const isBold = f.includes(':**');
                  if (isBold) {
                    const parts = f.split(':**');
                    return (
                      <li key={i} style={{ marginBottom: '1rem' }}>
                        <strong>{parts[0].replace('**', '')}:</strong>{parts[1]}
                      </li>
                    )
                  }
                  return <li key={i} style={{ marginBottom: '1rem' }}>{f}</li>
                })
              ) : (
                project.features.map((f, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{f}</li>
                ))
              )}
            </ul>

            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text)' }}>Lessons Learned</h2>
            {project.content?.lessons ? (
              project.content.lessons.map((p, idx) => {
                const isBold = p.includes(':**');
                if (isBold) {
                  const parts = p.split(':**');
                  return (
                    <p key={idx} style={{ marginBottom: '1.5rem' }}>
                      <strong>{parts[0].replace('**', '')}:</strong>{parts[1]}
                    </p>
                  )
                }
                return <p key={idx} style={{ marginBottom: '1.5rem' }}>{p}</p>
              })
            ) : (
              <p style={{ marginBottom: '2rem' }}>
                Placeholder for a blog-type reflection on what was learned during the development of this project.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
