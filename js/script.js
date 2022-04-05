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

  // Аккордеон

  $(".accordeon dd").hide().prev().click(function () {
    if (document.documentElement.clientWidth > 768) {
      $(this).parents(".accordeon").find("dd").slideUp().prev().removeClass("active");
    } else {
      $(this).next().slideUp().removeClass("active");
    }
    $(this).next().not(":visible").slideDown().prev().addClass("active");
  });

  // Открытие элементов аккордеона с других страниц

  if (window.location.hash) {
    let $hash = window.location.hash,
      $hash_text = $hash.substr(1);
    $('dt').next().hide();
    $('dt[data-name="' + $hash_text + '"]').toggleClass('active');
    $('dt.active').next().show();
  }

  // Бургер

  let burgerBtn = document.querySelector('.burger-btn');
  let burger = document.querySelector('.burger');
  burgerBtn.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    burgerBtn.classList.toggle('burger-btn--active');
  })

  var header = $('.burger-btn'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
      header.addClass('burger-btn--out');
    } else {
      header.removeClass('burger-btn--out');
    }
    scrollPrev = scrolled;
  });

});