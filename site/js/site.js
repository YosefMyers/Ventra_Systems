(function () {
  const dropdown = document.querySelector('[data-dropdown]');
  const btn = document.querySelector('[data-dropbtn]');

  function closeMenu() {
    if (dropdown) dropdown.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  if (dropdown && btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = dropdown.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
})();
