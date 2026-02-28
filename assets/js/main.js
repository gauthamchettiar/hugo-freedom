document.addEventListener('change', e => {
  const input = e.target;
  if (!input.matches('.fr-wdgt-tab-input')) return;
  const group = input.dataset.group;
  const title = input.dataset.title;
  document.querySelectorAll(`.fr-wdgt-tab-input[data-group="${group}"][data-title="${title}"]`).forEach(other => {
    if (other !== input) other.checked = true;
  });
});

document.addEventListener('click', e => {
  const btn = e.target.closest('.fr-codeblock-copy-button');
  if (!btn) return;
  const code = btn.dataset.code;
  if (!code) return;
  if (!navigator.clipboard) {
    console.error('Clipboard API not available (requires HTTPS)');
    return;
  }
  navigator.clipboard.writeText(code)
    .then(() => {
      const original = btn.innerHTML;
      btn.textContent = 'copied!';
      btn.classList.add('copied-text-display');
      setTimeout(() => { btn.classList.remove('copied-text-display'); btn.innerHTML = original; }, 3000);
    }).catch(console.error);
});