"use strict";

$(document).ready(function() {
  $('body').autoPadding({
    source: $('.js-header'),
  });
    //removeIf(production)
    console.log("document ready");
    //endRemoveIf(production)
});

// fixed header

$(function() {
  let header = $('.header');

  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
      header.addClass('header_fixed');
    } else {
      header.removeClass('header_fixed');
    }
  });
});


// tabs

document.addEventListener('DOMContentLoaded', function() {
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function(el) {
    el.addEventListener('click', function(event) {

      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('tabs__btn_active');
      });

      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs__content').forEach(function(tabContent) {
        tabContent.classList.remove('tabs__content_active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content_active');
      el.classList.add('tabs__btn_active');

    });
  });
});


// hero slider
const swiperHero = new Swiper('.hero__swiper', {
  // Optional parameters

  spaceBetween: 14,
  speed: 500,
  watchOverflow: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    960: {
      slidesPerView: 2.5,
    },
    1441: {
      slidesPerView: 3.5,
    },
    1600: {
      slidesPerView: 4,
    }
  }
});

// help slider
const swiperHelp = new Swiper('.help__swiper', {
  // Optional parameters

  speed: 800,
  navigation: {
    nextEl: ".help-button-next",
    prevEl: ".help-button-prev",
  },
  breakpoints: {
    1440: {
      slidesPerView: 1,
    },
    1600: {
      slidesPerView: 1.5,
    }
  }
});

// community slider
const swiperCommunity = new Swiper('.community__swiper', {
  // Optional parameters
  speed: 500,
  spaceBetween: 30,
  breakpoints: {
    1024: {
      slidesPerView: 2.5,
    },
    1400: {
      slidesPerView: 3,
    }
  }
});

// face slider
const swiperFaceFirst = new Swiper('.face__swiper', {
  // Optional parameters
  speed: 500,
  navigation: {
    nextEl: ".face-button-next",
    prevEl: ".face-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.2,
      spaceBetween: 30
    },

  }
});





