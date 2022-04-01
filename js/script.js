$(document).ready(function () {

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


  $('ul.main__list--bg').on('click', 'li:not(.main__item--bg--active)', function () {
    $(this)
      .addClass('main__item--bg--active').siblings().removeClass('main__item--bg--active')
      .closest('div.main-content__tabs').find('div.main-content__tab-content').removeClass('main-content__tab-content--active').eq($(this).index()).addClass('main-content__tab-content--active');
  });

  $(".accordeon dd").hide().prev().click(function() {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
  });

});