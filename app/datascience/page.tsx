import projects from '../../data/projects.json'

export const metadata = { title: 'Data Science Projects' }

export default function DataSciencePage() {
  return (
    <main>
      <section className="section hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Data Science Projects</h1>
            <p>Selected work with code repositories and live demos.</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid projects-grid">
            {projects.map((p, idx) => (
              <article className="card" key={idx}>
                <img className="thumb" src={p.image} alt={p.title} />
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{(p.tags||[]).map((t:string) => (<span className="tag" key={t}>{t}</span>))}</div>
                <div className="actions">
                  <a className="icon-btn" href={p.repoUrl} target="_blank" rel="noopener">Code</a>
                  <a className="icon-btn" href={p.demoUrl} target="_blank" rel="noopener">Demo</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

