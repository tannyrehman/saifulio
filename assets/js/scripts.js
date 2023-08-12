$(function () {

   // video popup
    $(".video-btn a").magnificPopup({
        type: "iframe",
    iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/',
  
            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          },
        },
      }

    });


    new WOW().init();

    // Feedback Slider
    $('.fd-slider').slick({
      slidesToShow: 3,
      arrows: false,
      centerMode: true,
    });
    

});

$('.counter').counterUp({
  delay: 10,
  time: 1500
});
