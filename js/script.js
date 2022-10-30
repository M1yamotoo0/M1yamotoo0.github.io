$(document).ready(function () {

    // Overlay

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.casino-overlay').eq(i).toggleClass('casino-overlay--active');
                $('.casino-logo').eq(i).toggleClass('casino-logo--active');
                $('.btn-more').eq(i).toggleClass('btn-more--active');
            });
        });
    }

    toggleSlide('.btn-more');

    function toggleSlide2(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.bonus-overlay').eq(i).toggleClass('bonus-overlay--active');
                $('.btn-question').eq(i).toggleClass('btn-question--active');
            });
        });
    }

    toggleSlide2('.btn-question');

    // Cookie

    function checkCookies() {
        let cookieDate = localStorage.getItem('cookieDate');
        let cookieNotification = document.getElementById('cookie_notification');
        let cookieBtn = cookieNotification.querySelector('.cookie_accept');

        // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
        if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
            cookieNotification.classList.add('show');
        }

        // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
        cookieBtn.addEventListener('click', function () {
            localStorage.setItem('cookieDate', Date.now());
            cookieNotification.classList.remove('show');
        });
    }
    checkCookies();


    // Tabs

    $('ul.tabs').on('click', 'li:not(.tab--active)', function () {
        $(this)
            .addClass('tab--active').siblings().removeClass('tab--active')
            .closest('div.tabs__inner').find('ul.tab__content')
            .removeClass('tab__content--active').eq($(this).index()).addClass('tab__content--active');
    });

    // Бургер 

    $('.burger').click(function () {
        $('.burger').toggleClass('burger--active');
        $('.header__nav').toggleClass('header__nav--active');
    });

});

