const initApp = () => {
  const html = document.getElementsByTagName('html')[0];
  const year = document.getElementById('year');
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const darkModeBtn = document.getElementById('toggle-dark-mode');

  const ifDark = () => {
    if (html.classList.contains('dark')) {
      darkModeBtn.innerHTML = '☀';
    } else {
      darkModeBtn.innerHTML = '🌙';
    }
  };

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburgerBtn.classList.toggle('toggle-btn');
  };

  const toggleDarkMode = () => {
    html.classList.toggle('dark');
    ifDark();
  };

  year.innerHTML = new Date().getFullYear();
  ifDark();

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
  darkModeBtn.addEventListener('click', toggleDarkMode);
};

document.addEventListener('DOMContentLoaded', initApp);
