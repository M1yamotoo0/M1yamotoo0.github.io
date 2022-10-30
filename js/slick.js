$(document).ready(function () {
    $('.carousel-casino').slick({

        responsive: [
            {
                breakpoint: 99999,
                settings: 'unslick'
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: false,
                    nextArrow: '<img src="../img/icons/arrow-next.svg" alt="Кнопка перехода на следующую карточку" width="19" height="36">',
                    prevArrow: '<img src="../img/icons/arrow-prev.svg" alt="Кнопка перехода на предыдущую карточку" width="19" height="36">'
                }
            },

            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: true
                }
            }
        ]
    });


    $('.carousel-bonus').slick({
        responsive: [
            {
                breakpoint: 99999,
                settings: 'unslick'
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: false,
                    nextArrow: '<img src="../img/icons/arrow-next.svg" alt="Кнопка перехода на следующую карточку" width="19" height="36">',
                    prevArrow: '<img src="../img/icons/arrow-prev.svg" alt="Кнопка перехода на предыдущую карточку" width="19" height="36">'
                }
            },

            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: true
                }
            },

            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: true
                }
            }
        ]
    });

    $('.main__bonus-list--mt12px').slick({
        responsive: [
            {
                breakpoint: 99999,
                settings: 'unslick'
            },

            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    variableWidth: true
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: true,
                    autoplay: false
                }
            },

            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: true
                }
            }
        ]
    });

    $('.main__gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
});