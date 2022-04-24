$(document).ready(function () {

  // Кнопка наверх

  let btn = $('.scroll-up-link');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('scroll-up-link--show');
    } else {
      btn.removeClass('scroll-up-link--show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // Табы

  $('ul.main__list--bg').on('click', 'li:not(.main__item--bg--active)', function () {
    $(this)
      .addClass('main__item--bg--active').siblings().removeClass('main__item--bg--active')
      .closest('div.main-content__tabs').find('div.main-content__tab-content').removeClass('main-content__tab-content--active').eq($(this).index()).addClass('main-content__tab-content--active');
  });

  // Бургер

  let burgerBtn = document.querySelector('.burger-btn');
  let burger = document.querySelector('.burger');
  burgerBtn.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    burgerBtn.classList.toggle('burger-btn--active');
  });

  let header = $('.burger-btn'),
    scrollPrev = 0;

  $(window).scroll(function () {
    let scrolled = $(window).scrollTop();

    if (document.documentElement.clientWidth < 768) {
      if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('burger-btn--out');
      } else {
        header.removeClass('burger-btn--out');
      }
    }
    scrollPrev = scrolled;
  });

});