// Render photography grid from data/photos.json with a simple lightbox
(async function () {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  async function loadPhotos() {
    try {
      const res = await fetch('data/photos.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to load photos.json');
      return await res.json();
    } catch (err) {
      console.warn('Could not fetch data/photos.json. Example photos will be used.', err);
      return [
        { src: 'assets/img/photo-placeholder-1.svg', alt: 'Sample Photo 1' },
        { src: 'assets/img/photo-placeholder-2.svg', alt: 'Sample Photo 2' },
        { src: 'assets/img/photo-placeholder-3.svg', alt: 'Sample Photo 3' }
      ];
    }
  }

  const photos = await loadPhotos();
  const frag = document.createDocumentFragment();

  photos.forEach((p) => {
    const a = document.createElement('a');
    a.className = 'photo';
    a.href = p.src;
    a.setAttribute('data-alt', p.alt || '');
    a.innerHTML = `<img src="${p.src}" alt="${p.alt || ''}" onerror="this.src='assets/img/photo-placeholder-1.svg'" />`;
    frag.appendChild(a);
  });

  grid.innerHTML = '';
  grid.appendChild(frag);

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `<button class="close" aria-label="Close">Close ✕</button><img alt="" />`;
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const btn = lb.querySelector('.close');

  function close() { lb.classList.remove('open'); }
  btn.addEventListener('click', close);
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  grid.addEventListener('click', (e) => {
    const a = e.target.closest('a.photo');
    if (!a) return;
    e.preventDefault();
    lbImg.src = a.href;
    lbImg.alt = a.getAttribute('data-alt') || '';
    lb.classList.add('open');
  });
})();
