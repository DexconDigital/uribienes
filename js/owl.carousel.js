$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 100000
    })
});


$(document).ready(function() {
    $('#Carousel1').carousel({
        interval: 100000
    })
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})