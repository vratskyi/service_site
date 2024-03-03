// кнопка меню
document.addEventListener("astro:page-load", () => {
  const button = document.querySelector('.swap input[type="checkbox"]');
  const menu = document.querySelector(".menu");

  // Обработчик событий для чекбокса
  button.addEventListener("change", function () {
    if (this.checked) {
      // Если чекбокс выбран, открываем меню
      menu.style.display = "block";
    } else {
      // Если чекбокс не выбран, закрываем меню
      menu.style.display = "none";
    }
  });

  // Обработчик событий для документа
  document.addEventListener("click", function (event) {
    const isClickInside =
      button.contains(event.target) || menu.contains(event.target);

    if (!isClickInside && button.checked) {
      // Если клик был сделан вне кнопки и меню, и чекбокс выбран, меняем состояние чекбокса и закрываем меню
      setTimeout(function () {
        button.checked = false;
        menu.style.display = "none";
      }, 0);
    }
  });
});
