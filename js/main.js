(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);

        //02. Isotope Initialize
        function isotopeInit() {
            $('.project_items').isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
            $('.project_filter_menu ul li').on('click', function () {
                $('.project_filter_menu ul li').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.project_items').isotope({
                    filter: selector
                });
                return false;
            });
        }
        isotopeInit();
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        $('#menu li a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInSine');
            event.preventDefault();
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });


        //06. magnific Popup Initialize
        function magnificPopupInit() {
            $('.popup-section a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        magnificPopupInit();

        //10. Client Slider Initialize
        function client_carouselInit() {
            $('.owl-carousel.client_carousel').owlCarousel({
                loop: true,
                margin: 30,
                items: 5,
                autoplay: true,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    390: {
                        items: 2
                    },
                    575:{
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    }
                }
            });
        }
        client_carouselInit();

        //11. Video Popup Initialize
        function videoPopupInit() {
            $('#play-video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                          index: 'youtube.com/', 

                          id: 'v=',
                          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                    },

                  srcAction: 'iframe_src',
                }
            });
        }
        videoPopupInit();
    });

})(jQuery);
// Swiper 
var swiper = new Swiper('.swiper-container', {
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
var swiper = new Swiper('.swiper-container.work', {
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.work',
      prevEl: '.swiper-button-prev.work',
    },
});
var swiper = new Swiper('.swiper-container.news', {
    slidesPerView: 3,
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.news',
      prevEl: '.swiper-button-prev.news',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
    }
});