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
  slidesPerView: 4,
  spaceBetween: 14,
  speed: 300,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// help slider
const swiperHelp = new Swiper('.help__swiper', {
  // Optional parameters
  speed: 300,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// face slider
const swiperFaceFirst = new Swiper('.face__swiper_one', {
  // Optional parameters
  speed: 300,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// face slider
const swiperFaceSecond = new Swiper('.face__swiper_two', {
  // Optional parameters
  speed: 300,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// face slider
const swiperFaceThird = new Swiper('.face__swiper_three', {
  // Optional parameters
  speed: 300,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




