$(document).ready(function () {
    $('.carousel-casino').slick({

        responsive: [
            {
                breakpoint: 99999,
                settings: 'unslick'
            },

            {
                breakpoint: 1025,
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
                breakpoint: 769,
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
                breakpoint: 1025,
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
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: true
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
});