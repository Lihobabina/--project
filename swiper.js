// Инициализация слайдера
const swiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    allowTouchMove: false,
    loop: false,
    // Другие настройки, если есть
    slidesPerView: 1,
    // Обработчики событий после инициализации слайдера
    on: {
      init: function () {
        // Найти все кнопки "Предыдущий" и добавить обработчик клика
        const prevButtons = document.querySelectorAll('.custom-button-prev');
        prevButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            swiper.slidePrev();
          });
        });
  
        // Найти все кнопки "Следующий" и добавить обработчик клика
        const nextButtons = document.querySelectorAll('.custom-button-next');
        nextButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            swiper.slideNext();
          });
        });
      },
    },
  });
  