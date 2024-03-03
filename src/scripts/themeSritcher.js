document.addEventListener('astro:page-load', () => {
    // Переключатель тем
    const themeSwitcher = document.querySelector('.switch-theme input[type="checkbox"]');
    const logoImage = document.getElementById('logo');

    // Установка темы по умолчанию
    let defaultTheme = 'dracula';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      defaultTheme = 'garden';
    }

    // Проверка cookies
    const savedTheme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (savedTheme) {
      defaultTheme = savedTheme;
    }

    document.documentElement.setAttribute('data-theme', defaultTheme);
    themeSwitcher.checked = defaultTheme === 'garden';

    // Установка логотипа в зависимости от темы
    logoImage.src = defaultTheme === 'garden' ? '/src/images/logo-dark.png' : '/src/images/logo.png';

    themeSwitcher.addEventListener('change', function (event) {
      let theme;
      if (event.target.checked) {
        // Если переключатель включен, устанавливаем светлую тему
        theme = 'garden';
        logoImage.src = '/src/images/logo-dark.png';
      } else {
        // Если переключатель выключен, устанавливаем темную тему
        theme = 'dracula';
        logoImage.src = '/src/images/logo.png';
      }
      document.documentElement.setAttribute('data-theme', theme);
      document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    });
});