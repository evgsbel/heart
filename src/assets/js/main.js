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


// help slider
// const swiper = new Swiper('.help', {
//   // Optional parameters
//   speed: 400,
//   spaceBetween: 75,
//   loop: true,
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoHeight: true
// });


