//owl-carousel

jQuery(function () {
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
  
//pageup

    $(window).on('scroll', function() {
          if ($(this).scrollTop() > 800) {
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
  
//hamburger

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list'),
  menuItem = document.querySelectorAll('.menu___link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu__list_active');
      });
  });
});