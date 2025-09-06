// Theme and palette handling
(function(){
  const doc = document.documentElement;
  const toggle = () => {
    const cur = doc.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    doc.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch(_e) {}
    updateToggleButton();
  };

  function updateToggleButton(){
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const t = doc.getAttribute('data-theme') || 'dark';
    btn.textContent = t === 'dark' ? '◐' : '◑';
    btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    btn.title = `Switch to ${t === 'dark' ? 'light' : 'dark'} mode`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);
    updateToggleButton();
  });
})();

