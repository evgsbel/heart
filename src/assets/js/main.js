"use strict";

$(document).ready(function () {
  $('body').autoPadding({
    source: $('.js-header'),
  });
  //removeIf(production)
  console.log("document ready");
  //endRemoveIf(production)
});


// tabs

document.addEventListener('DOMContentLoaded', function () {
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {

      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('tabs__btn_active');
      });

      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
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
  watchOverflow: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.5,
    },
    1440: {
      slidesPerView: 2.6,
    },
    1600: {
      slidesPerView: 4,
    }
  }
});

// pay slider
const swiperPay = new Swiper('.pay__swiper', {
  // Optional parameters
  watchOverflow: false,
  speed: 500,
  spaceBetween: 5,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 'auto',
    },
  }
});

// help slider
const swiperHelp = new Swiper('.help__swiper', {
  // Optional parameters
  speed: 800,
  spaceBetween: 80,
  navigation: {
    nextEl: ".help-button-next",
    prevEl: ".help-button-prev",
  },
  breakpoints: {
    1440: {
      spaceBetween: 0,
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
    480: {
      slidesPerView: 'auto',
    },
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
  speed: 800,
  slidesPerView: 1.2,
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     // will set `translateZ(-400px)` on previous slides
  //     translate: [0, 0, -400],
  //     opacity: 0,
  //   },
  //   next: {
  //     // will set `translateX(100%)` on next slides
  //     translate: ['100%', 0, 0],
  //     opacity: 1
  //   },
  // },
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true
  // },
  navigation: {
    nextEl: ".face-button-next",
    prevEl: ".face-button-prev",
  },
  breakpoints: {
    320: {
      // effect: "fade",
      // fadeEffect: {
      //   crossFade: true
      // },
      slidesPerView: 1.2,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 0
    }

  }
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

// pay form

const radioBtn = document.querySelectorAll('.js-radio');
const sumText = document.querySelector('.js-pay-sum');
const inputNum = document.querySelector('.js-input-number');
const sumDescr = document.querySelector('.js-sum-descr');
const sumDecor = document.querySelector('.js-sum-decor');

radioBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      sumText.innerHTML = el.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽';
      sumDecor.innerHTML = 'Узнайте, на&nbsp;что&nbsp;идут&nbsp;деньги';
      if (el.value === '500') {
        sumDescr.innerHTML = 'одна поездка на&nbsp;такси в&nbsp;медучреждение';
      } else if (el.value === '2400') {
        sumDescr.innerHTML = 'один день проживания в&nbsp;гостинице во&nbsp;время обследования';
      }
      else if (el.value === '3200') {
        sumDescr.innerHTML = 'одна консультация онколога';
      }
      else if (el.value === '6000') {
        sumDescr.innerHTML = 'одно исследование МРТ';
      }
  });
});

inputNum.addEventListener('input', function() {
  if (this.value.length > 9) {
    this.value = this.value.slice(0,9);
  }
  sumText.innerHTML = inputNum.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽';
  sumDescr.innerHTML = 'ваш вклад поможет взрослым победить рак';
  sumDecor.innerHTML = 'Сумма вашего перевода';
});




// super ellipse
if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners');


// radioBackground

const triggers = document.querySelectorAll('.js-radio-label');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('click', highlightLink));

// From https://codepen.io/SJF
triggers.forEach(a => a.addEventListener('focus', highlightLink));



// fixed header

$(document).ready(function() {

  function stickySidebar() {
    var scrollDistance = $(document).scrollTop(),
      headerHeight = $('.header').outerHeight(true),
      // sidebarHeight = $('aside').outerHeight(true),
      footerOffsetTop = $('.partners').offset().top,
      $header = $('header');

    if( scrollDistance >= headerHeight) {
      $header.addClass('header_fixed');
      $header.removeClass('header_hide');
    } else {
      $header.removeClass('header_fixed');
    }

    if ( scrollDistance + headerHeight  >= footerOffsetTop + 300) {
      $header.removeClass('header_fixed');
      $header.addClass('header_hide');
    }

  }
  stickySidebar();

  $(document).scroll(function() {
    stickySidebar();
  });

});




