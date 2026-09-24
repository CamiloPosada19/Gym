// public/js/theme.js
(function () {
  const THEME_KEY = 'chidaoba-theme';

  function getTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || 'light';
    } catch (e) {
      return 'light';
    }
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}

    window.dispatchEvent(new CustomEvent('chidaoba:themechange', { detail: { theme } }));
  }

  function toggleTheme() {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  function setupButtons() {
    const desktopBtn = document.getElementById('theme-toggle-desktop');
    const mobileBtn = document.getElementById('theme-toggle-mobile');

    if (desktopBtn && !desktopBtn.dataset.themeBound) {
      desktopBtn.dataset.themeBound = 'true';
      desktopBtn.addEventListener('click', toggleTheme);
    }

    if (mobileBtn && !mobileBtn.dataset.themeBound) {
      mobileBtn.dataset.themeBound = 'true';
      mobileBtn.addEventListener('click', toggleTheme);
    }
  }

  // Initial apply
  applyTheme(getTheme());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupButtons);
  } else {
    setupButtons();
  }

  // Handle Astro page transitions if any
  document.addEventListener('astro:page-load', () => {
    applyTheme(getTheme());
    setupButtons();
  });
})();
