
$(".past-slider").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 450,
    autoplayHoverPause: false,
    autoplayTimeout:1000,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            margin: 9
        },
        500: {
            items: 3
        },
        830: {
            items: 4
        },
        1200: {
            items: 5
        },
        1500: {
            items: 6
        },
        1800: {
            items: 7
        }
    },
    items: 5
});
