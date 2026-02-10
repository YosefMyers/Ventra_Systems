(function () {
  // Desktop dropdown (Company)
  const dropdown = document.querySelector('[data-dropdown]');
  const btn = document.querySelector('[data-dropbtn]');

  function closeDropdown() {
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
      if (!dropdown.contains(e.target)) closeDropdown();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDropdown();
    });
  }

  // Active link highlighting
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Mobile menu
  const ham = document.querySelector('[data-hamburger]');
  const mobile = document.querySelector('[data-mobile-menu]');
  if (ham && mobile) {
    ham.addEventListener('click', () => {
      const open = mobile.style.display === 'block';
      mobile.style.display = open ? 'none' : 'block';
      ham.setAttribute('aria-expanded', String(!open));
    });
  }
})();
