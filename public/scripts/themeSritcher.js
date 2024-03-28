document.addEventListener('astro:page-load', () => {
  // Переключатель тем
  const themeSwitcher = document.querySelector('.switch-theme input[type="checkbox"]');
  const logos = document.querySelectorAll('.logo');

  // Установка темы по умолчанию
  let defaultTheme = 'sunset';
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      defaultTheme = 'light';
  }

  // Проверка cookies
  const savedTheme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (savedTheme) {
      defaultTheme = savedTheme;
  }

  document.documentElement.setAttribute('data-theme', defaultTheme);
  themeSwitcher.checked = defaultTheme === 'light';

  // Установка логотипа в зависимости от темы
  logos.forEach(logo => {
      logo.src = defaultTheme === 'light' ? '/src/images/logo-dark.png' : '/src/images/logo.png';
  });

  // Обработчик события для изменения темы при переключении чекбокса
  themeSwitcher.addEventListener('change', function (event) {
      let theme;
      if (event.target.checked) {
          // Если переключатель включен, устанавливаем светлую тему
          theme = 'light';
      } else {
          // Если переключатель выключен, устанавливаем темную тему
          theme = 'sunset';
      }

      // Установка темы и обновление логотипов
      document.documentElement.setAttribute('data-theme', theme);
      document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

      logos.forEach(logo => {
          logo.src = theme === 'light' ? '/src/images/logo-dark.png' : '/src/images/logo.png';
      });
  });
});
