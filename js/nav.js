const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});

// mark current page (works with or without .html in the URL)
const clean = p => p.replace(/\.html$/, '').replace(/\/$/, '') || 'index';
const here = clean(location.pathname.split('/').pop() || 'index');
document.querySelectorAll('.site-nav a').forEach(a => {
  if (clean(a.getAttribute('href')) === here) a.setAttribute('aria-current', 'page');
});