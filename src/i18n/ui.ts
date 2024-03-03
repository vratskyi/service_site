export const languages = {
    ua: 'ua Українська',
    ru: 'ru Русский',
  };
  
  export const showDefaultLang = true;
  export const defaultLang = 'ua';
  
  export const routes = {
    // ua: {
    //   'blog': 'articles',
    // },
    // ru: {
    //   'blog': 'блог',
    // },
  }

  export const ui = {
    ua: {
      'nav.lang': 'ua Українська',
      'nav.home': 'Головна',
      'nav.about': 'Про мене',
      'nav.portfolio': 'Портфоліо',
      'footer.copyright': 'Авторське право © <span id="currentYear"></span> Всі права захищені.',
      'portfolio.subDesc': 'Використані технології:',
      'portfolio.externalButton': 'Дивитися'
    },
    ru: {
        'nav.lang': 'ru Русский',
        'nav.home': 'Главная',
        'nav.about': 'Обо мне',
        'nav.portfolio': 'Портфолио',
        'footer.copyright': 'Авторское право © <span id="currentYear"></span> Все права защищены.',
        'portfolio.subDesc': 'Использованные технологии:',
        'portfolio.externalButton': 'Смотреть'
    },
  } as const;