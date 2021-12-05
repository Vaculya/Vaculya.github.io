
$(document).ready(function(){
    $('.carusel_box').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right"></i></button>'
    });
});