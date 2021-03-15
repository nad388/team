
jQuery(function(){
    $(".slider__inner").owlCarousel({

      loop: true,
      nav: true,
      dots: false,
      //autoplay: true,
      items: 4,
      margin: 128,
      navText: true,
      stopOnHover: true,
      smartSpeed: 1000, //Время движения слайда
      autoplayTimeout: 4000, //Время смены слайда
      pagination: true
    });
    var owl=$(".slider__inner");
      owl.owlCarousel();
    //$(".next") - находим нашу кнопку
    $(".slider__nav-next").on('click', function(){
      owl.trigger("next.owl.carousel");
    });
    $(".slider__nav-prev").on('click', function(){
      owl.trigger("prev.owl.carousel");
    });
  


    $(window).on('scroll', function() {
          if ($(this).scrollTop() > 900) {
          $('.pageup').fadeIn();
          } else {
          $('.pageup').fadeOut();
          }
      });
      
      $("a[href='#up']").on('click', function() {
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
      });
      new WOW().init();

  
});
  