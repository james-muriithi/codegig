 AOS.init({
     duration: 800,
     easing: 'slide'
 });

 (function($) {

     "use strict";

     var isMobile = {
         Android: function() {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function() {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function() {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function() {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function() {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function() {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     };


     $(window).stellar({
         responsive: true,
         parallaxBackgrounds: true,
         parallaxElements: true,
         horizontalScrolling: false,
         hideDistantElements: false,
         scrollProperty: 'scroll'
     });


     var fullHeight = function() {

         $('.js-fullheight').css('height', $(window).height());
         $(window).resize(function() {
             $('.js-fullheight').css('height', $(window).height());
         });

     };
     fullHeight();

     // loader
     var loader = function() {
         setTimeout(function() {
             if ($('#ftco-loader').length > 0) {
                 $('#ftco-loader').removeClass('show');
             }
         }, 1);
     };
     loader();

     // Scrollax
     $.Scrollax();


     $('nav .dropdown').hover(function() {
         var $this = $(this);
         // 	 timer;
         // clearTimeout(timer);
         $this.addClass('show');
         $this.find('> a').attr('aria-expanded', true);
         // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').addClass('show');
     }, function() {
         var $this = $(this);
         // timer;
         // timer = setTimeout(function(){
         $this.removeClass('show');
         $this.find('> a').attr('aria-expanded', false);
         // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').removeClass('show');
         // }, 100);
     });


     $('#dropdown04').on('show.bs.dropdown', function() {
         console.log('show');
     });

     // scroll
     var scrollWindow = function() {
         $(window).scroll(function() {
             var $w = $(this),
                 st = $w.scrollTop(),
                 navbar = $('.ftco_navbar'),
                 sd = $('.js-scroll-wrap'),
                 scrollUp = $('#scrollUp');

             if (st > 150) {

                 if (scrollUp.hasClass('d-none')) {
                     scrollUp.removeClass('d-none');
                 }
             }
             if (st < 150) {

                 if (!scrollUp.hasClass('d-none')) {
                     scrollUp.addClass('d-none');
                 }
             }

         });
     };
     scrollWindow();

     var isMobile = {
         Android: function() {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function() {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function() {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function() {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function() {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function() {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     };

     var counter = function() {

         $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function(direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                 $('.number').each(function() {
                     var $this = $(this),
                         num = $this.data('number');
                     $this.animateNumber({
                         number: num,
                         numberStep: comma_separator_number_step
                     }, 7000);
                 });

             }

         }, { offset: '95%' });

     }
     counter();


     var contentWayPoint = function() {
         var i = 0;
         $('.ftco-animate').waypoint(function(direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 i++;

                 $(this.element).addClass('item-animate');
                 setTimeout(function() {

                     $('body .ftco-animate.item-animate').each(function(k) {
                         var el = $(this);
                         setTimeout(function() {
                             var effect = el.data('animate-effect');
                             if (effect === 'fadeIn') {
                                 el.addClass('fadeIn ftco-animated');
                             } else if (effect === 'fadeInLeft') {
                                 el.addClass('fadeInLeft ftco-animated');
                             } else if (effect === 'fadeInRight') {
                                 el.addClass('fadeInRight ftco-animated');
                             } else {
                                 el.addClass('fadeInUp ftco-animated');
                             }
                             el.removeClass('item-animate');
                         }, k * 50, 'easeInOutExpo');
                     });

                 }, 100);

             }

         }, { offset: '95%' });
     };
     contentWayPoint();


     // navigation
     var OnePageNav = function() {
         $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
             e.preventDefault();

             var hash = this.hash,
                 navToggler = $('.navbar-toggler');
             $('html, body').animate({
                 scrollTop: $(hash).offset().top
             }, 700, 'easeInOutExpo', function() {
                 window.location.hash = hash;
             });


             if (navToggler.is(':visible')) {
                 navToggler.click();
             }
         });
         $('body').on('activate.bs.scrollspy', function() {
             console.log('nice');
         })
     };
     OnePageNav();


     $('#scrollUp').on('click', function(event) {
         event.preventDefault();
         $('html, body').animate({
             scrollTop: $('body').offset().top
         }, 700, 'easeInOutExpo');

     });

     $(function() {
         let current = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
         $('.navbar-nav li a').each(function(index, el) {
             let th = $(this),
                 href = th.attr('href').endsWith('/') ? th.attr('href') : `${th.attr('href')}/`;
             console.log(href.indexOf(`${current}`));

             if (href.indexOf(current) !== -1) {

                 th.parent().addClass('active')
             } else {
                 th.parent().removeClass('active');
             }
         });
     })



 })(jQuery);