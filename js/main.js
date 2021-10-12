$(document).ready(function(){
    $('.slider-main').slick({
        infinite: true,
        speed: 1000,
        appendArrows: $('.arrows-block'),
        swipe:false
    });
    $('.reviews__blocks').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
        appendArrows: $('.reviews__arrows'),
    });
    let burger768Open = $('.navigation__burger-button_open');
    let burger768Close = $('.navigation__burger-button_close');
    let navigationPopup = $('.navigation__popup');

    burger768Open[0].addEventListener('click', function () {
        navigationPopup.removeClass('none');
        burger768Open.addClass('none');
        burger768Close.removeClass('none');
    });
    burger768Close[0].addEventListener('click', function () {
        navigationPopup.addClass('none');
        burger768Close.addClass('none');
        burger768Open.removeClass('none');
    });

    let headerBurgerOpen = $('.header__burger_open');
    let headerBurgerClose = $('.header__burger_close');
    let headerPopup = $('.header-popup');

    headerBurgerOpen[0].addEventListener('click', function () {
        headerPopup.removeClass('none');
        headerBurgerOpen.addClass('none');
        headerBurgerClose.removeClass('none');
    });
    headerBurgerClose[0].addEventListener('click', function () {
        headerPopup.addClass('none');
        headerBurgerClose.addClass('none');
        headerBurgerOpen.removeClass('none');
    });
});