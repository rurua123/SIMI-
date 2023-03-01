
// // scroll to top
// $.scrollUp({
//     scrollText: '<i class="fa fa-angle-up"></i>',
//     easingType: 'linear',
//     scrollSpeed: 900,
//     animation: 'fade'
// });


// // nav scroll fix
// var windowSize = $(window).width();

// if (windowSize >= 767) {
//     $('ul.nav li.dropdown').hover(function() {
//         $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//     }, function() {
//         $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//     });
// }
// jQuery('.animateNumber').each(function() {
//     var num = jQuery(this).attr('data-num');

//     var top = jQuery(document).scrollTop() + (jQuery(window).height());
//     var pos_top = jQuery(this).offset().top;
//     if (top > pos_top && !jQuery(this).hasClass('active')) {
//         jQuery(this).addClass('active').animateNumber({
//             number: num
//         }, 2000);
//     }
// });





// owl Jquery
$(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        responsiveClass:true,
        margin:10,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
            },
            // breakpoint from 480 up
            600 : {
                items:2
            },
            // breakpoint from 768 up
            1000 : {
                items:3
            },
            1200 :{
              items:4
            }

        }
  
    });
  });
  
  