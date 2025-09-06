// Basic site bootstrapping and helpers
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${id}`);
      }
    });
  });

  // Configurable profile links — edit here or drive from a config JSON if desired
  const LINKS = {
    email: 'you@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://www.linkedin.com/in/yourusername',
    external: 'https://yourwebsite.example.com',
    resume: 'assets/resume/resume.pdf'
  };
  const email = document.getElementById('email-link');
  const gh = document.getElementById('github-link');
  const li = document.getElementById('linkedin-link');
  const fgh = document.getElementById('footer-github');
  const fext = document.getElementById('footer-external');
  const r = document.getElementById('resume-link');
  if (email) email.href = `mailto:${LINKS.email}`;
  if (gh) gh.href = LINKS.github;
  if (li) li.href = LINKS.linkedin;
  if (fgh) fgh.href = LINKS.github;
  if (fext) fext.href = LINKS.external;
  if (r) r.href = LINKS.resume;
})();

