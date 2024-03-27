document.addEventListener('astro:page-load', () => {
  // Переключатель тем
  const themeSwitcher = document.querySelector('.switch-theme input[type="checkbox"]');
  const logos = document.querySelectorAll('.logo');

  // Установка темы по умолчанию
  let defaultTheme = 'sunset';
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      defaultTheme = 'cupcake';
  }

  // Проверка cookies
  const savedTheme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (savedTheme) {
      defaultTheme = savedTheme;
  }

  document.documentElement.setAttribute('data-theme', defaultTheme);
  themeSwitcher.checked = defaultTheme === 'cupcake';

  // Установка логотипа в зависимости от темы
  logos.forEach(logo => {
      logo.src = defaultTheme === 'cupcake' ? '/src/images/logo-dark.png' : '/src/images/logo.png';
  });

  // Обработчик события для изменения темы при переключении чекбокса
  themeSwitcher.addEventListener('change', function (event) {
      let theme;
      if (event.target.checked) {
          // Если переключатель включен, устанавливаем светлую тему
          theme = 'cupcake';
      } else {
          // Если переключатель выключен, устанавливаем темную тему
          theme = 'sunset';
      }

      // Установка темы и обновление логотипов
      document.documentElement.setAttribute('data-theme', theme);
      document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

      logos.forEach(logo => {
          logo.src = theme === 'cupcake' ? '/src/images/logo-dark.png' : '/src/images/logo.png';
      });
  });
});
