// // console.log("working");
$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 4, // show 4 cards
        slidesToScroll: 1,
        arrows: true, // enable prev/next arrows
        dots: false,
        infinite: true,
        autoplay: false, // change to true if you want auto-slide
        // responsive: [{
        //         breakpoint: 1024,
        //         settings: { slidesToShow: 3 }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: { slidesToShow: 2 }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: { slidesToShow: 1 }
        //     }
        // ]
    });
});