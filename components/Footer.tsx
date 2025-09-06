export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© <span id="year">{new Date().getFullYear()}</span> Your Name</span>
        <div className="socials">
          <a id="footer-github" href="https://github.com/yourusername" target="_blank" rel="noopener" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

