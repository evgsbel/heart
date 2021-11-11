$(document).ready(function () {
  $('body').autoPadding({
    source: $('.js-header'),
  });
  //removeIf(production)
  console.log("document ready");
  //endRemoveIf(production)
});

// mobile menu
$(() => {
  const btnMenu = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-nav');
  const body = document.querySelector('body');
  // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  const toggleMenu = function () {
    menu.classList.add('is-open');
    // menu.style.height = heroHeight + headerHeight + 'px'
    btnMenu.classList.add('is-active');
    body.classList.add('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  const closeBtn = document.querySelector('.close');
  const closeMenu = function () {
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
  };

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
});

// open sub
var acc = document.getElementsByClassName("sub");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("is-open");
  });
}

// super ellipse
if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners');

// fixed header

$(document).ready(function() {

  function stickySidebar() {
    var scrollDistance = $(document).scrollTop(),
      headerHeight = $('.header').outerHeight(true),
      // sidebarHeight = $('aside').outerHeight(true),
      footerOffsetTop = $('.footer').offset().top,
      $header = $('header');

    if( scrollDistance >= headerHeight - 100) {
      $header.addClass('header_fixed');
      $header.removeClass('header_hide');
    } else {
      $header.removeClass('header_fixed');
    }

    if ( scrollDistance + headerHeight  >= footerOffsetTop - 500) {
      $header.removeClass('header_fixed');
      $header.addClass('header_hide');
    }

  }
  stickySidebar();

  $(document).scroll(function() {
    stickySidebar();
  });

});
