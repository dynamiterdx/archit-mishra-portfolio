// Home page interactions: JD box helpers
(function(){
  const ta = document.getElementById('jd-input');
  const sendBtn = document.getElementById('jd-send');
  const copyBtn = document.getElementById('jd-copy');
  const dlBtn = document.getElementById('jd-download');
  const emailInput = document.getElementById('jd-email');

  if (!ta) return;

  function getBody(){
    const jd = (ta.value || '').trim();
    const recEmail = (emailInput && emailInput.value || '').trim();
    const lines = [
      'Job Description pasted below:',
      '',
      jd || '(no content provided)',
      '',
      recEmail ? `Recruiter email: ${recEmail}` : ''
    ].filter(Boolean);
    return lines.join('\n');
  }

  copyBtn && copyBtn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(ta.value || ''); } catch(_e) {}
    copyBtn.textContent = 'Copied';
    setTimeout(() => (copyBtn.textContent = 'Copy'), 1200);
  });

  dlBtn && dlBtn.addEventListener('click', () => {
    const blob = new Blob([ta.value || ''], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'job_description.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 500);
  });

  sendBtn && sendBtn.addEventListener('click', () => {
    const to = (function(){
      // Read from LINKS configured in main.js if possible
      try {
        const link = document.getElementById('email-link');
        if (link && link.href.startsWith('mailto:')) return link.href.slice('mailto:'.length);
      } catch(_e) {}
      return 'you@example.com';
    })();
    const subject = encodeURIComponent('Job Description Submission');
    const body = encodeURIComponent(getBody());
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
})();

