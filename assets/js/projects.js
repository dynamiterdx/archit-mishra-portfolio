// Render projects from data/projects.json
(async function () {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  async function loadProjects() {
    try {
      const res = await fetch('data/projects.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to load projects.json');
      return await res.json();
    } catch (err) {
      console.warn('Could not fetch data/projects.json. Example data will be used. Serve via a local web server to load external JSON.', err);
      return [
        {
          title: 'Sample Forecasting',
          description: 'Time series forecasting with Prophet. Replace with your project.',
          image: 'assets/img/project-placeholder.svg',
          tags: ['Time Series', 'Prophet', 'Python'],
          repoUrl: 'https://github.com/yourusername/your-repo',
          demoUrl: '#'
        },
        {
          title: 'Vision Classifier',
          description: 'CNN classifier on a custom dataset. Replace with your project.',
          image: 'assets/img/project-placeholder.svg',
          tags: ['Computer Vision', 'PyTorch'],
          repoUrl: 'https://github.com/yourusername/your-repo',
          demoUrl: '#'
        }
      ];
    }
  }

  const projects = await loadProjects();
  const frag = document.createDocumentFragment();

  projects.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img class="thumb" src="${p.image}" alt="${p.title}" onerror="this.src='assets/img/project-placeholder.svg'" />
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="actions">
        <a class="icon-btn" href="${p.repoUrl}" target="_blank" rel="noopener" aria-label="GitHub Repo">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.33-1.79-1.33-1.79-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.06 1.81 2.78 1.29 3.46.99.11-.78.41-1.29.74-1.59-2.66-.31-5.46-1.33-5.46-5.9 0-1.3.47-2.36 1.24-3.19-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.66 1.69.24 2.94.12 3.25.77.83 1.23 1.89 1.23 3.19 0 4.58-2.8 5.58-5.47 5.88.42.36.79 1.07.79 2.16v3.2c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z"/></svg>
          <span>Code</span>
        </a>
        <a class="icon-btn" href="${p.demoUrl}" target="_blank" rel="noopener" aria-label="Live Demo">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>
          <span>Demo</span>
        </a>
      </div>
    `;
    frag.appendChild(card);
  });

  grid.innerHTML = '';
  grid.appendChild(frag);
})();
