const button = document.querySelector('#theme');
function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  button.textContent = dark ? 'Light mode' : 'Dark mode';
  button.setAttribute('aria-pressed', String(dark));
}
try { applyTheme(localStorage.getItem('resume-theme') === 'dark'); } catch { applyTheme(false); }
button.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  applyTheme(dark);
  try { localStorage.setItem('resume-theme', dark ? 'dark' : 'light'); } catch { /* Theme still works without storage. */ }
});
