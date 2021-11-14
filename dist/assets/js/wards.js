"use strict";

console.log('wards'); // // pay slider
// const swiperWardsNav = new Swiper('.wards-nav__swiper', {
//   // Optional parameters
//   watchOverflow: false,
//   speed: 500,
//   spaceBetween: 8,
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2.5,
//     },
//     768: {
//       slidesPerView: 'auto',
//     },
//   }
// });

$(document).ready(function () {
  function stickySidebar() {
    var scrollDistance = $(document).scrollTop(),
        headerHeight = $('.ask').outerHeight(true),
        // sidebarHeight = $('aside').outerHeight(true),
    footerOffsetTop = $('.js-stop-header').offset().top,
        $header = $('.ask');

    if (scrollDistance >= headerHeight) {
      $header.addClass('ask_fixed');
      $header.removeClass('ask_hide');
    } else {
      $header.removeClass('ask_fixed');
    }

    if (scrollDistance + headerHeight >= footerOffsetTop) {
      $header.removeClass('ask_fixed');
      $header.addClass('ask_hide');
    }
  }

  stickySidebar();
  $(document).scroll(function () {
    stickySidebar();
  });
}); // calendar  slider

var swiperCalendarMonth = new Swiper('.calendar__swiper', {
  // Optional parameters
  slidesPerView: 3,
  speed: 1500,
  initialSlide: 9,
  centeredSlides: true,
  navigation: {
    nextEl: ".calendar-button-next",
    prevEl: ".calendar-button-prev"
  }
}); // gallery  slider

var swiperGallery = new Swiper('.gallery__swiper', {
  // Optional parameters
  slidesPerView: 4.2,
  speed: 800,
  spaceBetween: 8,
  navigation: {
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4
    },
    600: {
      slidesPerView: 2.5
    },
    1200: {
      slidesPerView: 4.2
    }
  }
});