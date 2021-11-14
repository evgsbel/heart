"use strict";

$(document).ready(function () {
  $('body').autoPadding({
    source: $('.js-header')
  }); //removeIf(production)

  console.log("document ready"); //endRemoveIf(production)
}); // mobile menu

$(function () {
  var btnMenu = document.querySelector('.burger');
  var menu = document.querySelector('.mobile-nav');
  var body = document.querySelector('body'); // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  var toggleMenu = function toggleMenu() {
    menu.classList.add('is-open'); // menu.style.height = heroHeight + headerHeight + 'px'

    btnMenu.classList.add('is-active');
    body.classList.add('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  var closeBtn = document.querySelector('.close');

  var closeMenu = function closeMenu() {
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
  };

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
}); // open sub

var acc = document.getElementsByClassName("sub");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("is-open");
  });
} // super ellipse


if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners'); // fixed header

$(document).ready(function () {
  function stickySidebar() {
    var scrollDistance = $(document).scrollTop(),
        headerHeight = $('.header').outerHeight(true),
        // sidebarHeight = $('aside').outerHeight(true),
    footerOffsetTop = $('.js-stop-header').offset().top,
        $header = $('header');

    if (scrollDistance >= headerHeight) {
      $header.addClass('header_fixed');
      $header.removeClass('header_hide');
    } else {
      $header.removeClass('header_fixed');
    }

    if (scrollDistance + headerHeight >= footerOffsetTop) {
      $header.removeClass('header_fixed');
      $header.addClass('header_hide');
    }
  }

  stickySidebar();
  $(document).scroll(function () {
    stickySidebar();
  });
});