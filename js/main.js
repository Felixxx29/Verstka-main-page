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
});