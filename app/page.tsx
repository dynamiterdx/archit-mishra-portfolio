import Link from 'next/link'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <main>
      <section id="home" className="section hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Data Scientist & Photographer</h1>
            <p>
              I build data-driven products and capture stories through the lens. Explore my
              <Link href="/datascience" className={styles.inlineLink}> data science work</Link> and
              <Link href="/photography" className={styles.inlineLink}> photography</Link>.
            </p>
            <div className="cta-row">
              <Link href="/datascience" className="btn btn-primary">View Projects</Link>
              <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
      </section>

      <section id="features" className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Highlights</h2>
            <p>Browse dedicated pages for my work and photos.</p>
          </div>
          <div className="grid projects-grid">
            <article className="card">
              <img className="thumb" src="/assets/img/project-placeholder.svg" alt="Data Science" />
              <h3>Data Science</h3>
              <p>Selected ML, AI, and analytics projects with code and demos.</p>
              <div className="actions"><Link className="btn btn-primary" href="/datascience">Explore Projects</Link></div>
            </article>
            <article className="card">
              <img className="thumb" src="/assets/img/photo-placeholder-1.svg" alt="Photography" />
              <h3>Photography</h3>
              <p>A relaxed, palette-aware gallery of images I’ve captured.</p>
              <div className="actions"><Link className="btn btn-primary" href="/photography">View Gallery</Link></div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about">
          <div className="about-summary">
            <h2>About Me</h2>
            <p>
              I’m a data scientist focused on shipping ML products end-to-end — from problem
              framing and data engineering to model development, evaluation, and productionization.
            </p>
            <div className="about-cta">
              <a id="resume-link" className="btn btn-primary" href="/assets/resume/resume.pdf" target="_blank" rel="noopener">Download Resume</a>
              <Link href="/datascience" className="btn btn-ghost">See My Work</Link>
            </div>
            <div className="expertise">
              <h3>Technical Expertise</h3>
              <ul>
                <li>Machine Learning: Classification, Forecasting, NLP, CV</li>
                <li>MLOps: Experiment tracking, model serving, monitoring</li>
                <li>Data: Feature engineering, pipelines, SQL/NoSQL</li>
                <li>Apps: FastAPI, Streamlit/Dash, containerization</li>
              </ul>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <div className="tags">
                {['Python','Pandas','NumPy','scikit-learn','XGBoost','PyTorch','NLP','Time Series','SQL','Airflow','FastAPI','Docker','AWS/GCP'].map(s => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
          <aside className="about-aside">
            <img className="about-photo" src="/assets/img/profile-placeholder.svg" alt="Profile" />
          </aside>
        </div>
      </section>

      <section id="fit" className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Am I Fit For Your Job?</h2>
            <p>Recruiters: paste your job description below and send it over.</p>
          </div>
          <JDBox />
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact">
          <div>
            <h2>Contact</h2>
            <p>Reach me via:</p>
            <ul className="contact-list">
              <li><a id="email-link" href="mailto:you@example.com">you@example.com</a></li>
              <li><a id="github-link" href="https://github.com/yourusername" target="_blank" rel="noopener">GitHub</a></li>
              <li><a id="linkedin-link" href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener">LinkedIn</a></li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={(e)=>e.preventDefault()} aria-label="Contact form">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              <span>Message</span>
              <textarea placeholder="Hello..." rows={4} required />
            </label>
            <button className="btn btn-primary" type="submit">Send</button>
            <p className="form-note">This demo form does not send email — use the email link.</p>
          </form>
        </div>
      </section>
    </main>
  )
}

function JDBox() {
  return (
    <form id="jd-form" className="jd-box" onSubmit={(e)=>e.preventDefault()}>
      <label className="sr-only" htmlFor="jd-input">Job Description</label>
      <textarea id="jd-input" rows={8} placeholder="Paste the job description here..."></textarea>
      <div className="jd-actions">
        <input id="jd-email" type="email" placeholder="Your email (optional)" />
        <div className="spacer"></div>
        <button onClick={copyJD} type="button" className="btn btn-ghost">Copy</button>
        <button onClick={downloadJD} type="button" className="btn btn-ghost">Download .txt</button>
        <button onClick={sendJD} type="button" className="btn btn-primary">Send</button>
      </div>
      <p className="form-note">Send opens your email client prefilled to me with the JD.</p>
    </form>
  )
}

function getJDValues(){
  const ta = document.getElementById('jd-input') as HTMLTextAreaElement | null
  const email = document.getElementById('jd-email') as HTMLInputElement | null
  return { jd: ta?.value?.trim() || '', email: email?.value?.trim() || '' }
}

function copyJD(){
  const { jd } = getJDValues()
  navigator.clipboard.writeText(jd)
}
function downloadJD(){
  const { jd } = getJDValues()
  const blob = new Blob([jd], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = 'job_description.txt'; a.click()
  setTimeout(()=>URL.revokeObjectURL(url), 500)
}
function sendJD(){
  const { jd, email } = getJDValues()
  const to = 'you@example.com'
  const subject = encodeURIComponent('Job Description Submission')
  const body = encodeURIComponent([ 'Job Description pasted below:', '', jd || '(no content provided)', '', email ? `Recruiter email: ${email}` : '' ].filter(Boolean).join('\n'))
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
}
"use client"
