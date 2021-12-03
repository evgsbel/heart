console.log('main');

// tabs

document.addEventListener('DOMContentLoaded', function () {
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {

      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('is-active');
      });

      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
      el.classList.add('is-active');

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
      spaceBetween: 10
    },
    768: {
      spaceBetween: 20,
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
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    1440: {
      spaceBetween: 10,
      slidesPerView: 1.03,
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
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1400: {
      slidesPerView: 3,
    }
  }
});



$(() => {
  function checkWidth() {
    let windowWidth = $('body').innerWidth()
    if (windowWidth < 1025) {
// face slider
      const swiperFaceMob = new Swiper('.face__swiper', {
        // Optional parameters
        slidesPerView: 1,
        speed: 800,
        navigation: {
          nextEl: ".face-button-next",
          prevEl: ".face-button-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16
          },
          1199: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          1240: {
            spaceBetween: 0,
          }
        }
      });

    }
    else {
      // face slider
      const swiperFaceDesk = new Swiper('.face__swiper', {
        // Optional parameters
        slidesPerView: 1,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        speed: 800,
        navigation: {
          nextEl: ".face-button-next",
          prevEl: ".face-button-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16
          },
          1199: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          1240: {
            spaceBetween: 0,
          }
        }
      });
    }
  }
    checkWidth();
    $(window).resize(function () {
      checkWidth(); // проверит при изменении размера окна клиента
    });
});




// pay form

const radioBtn = document.querySelectorAll('.js-radio')
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
    } else if (el.value === '3200') {
      sumDescr.innerHTML = 'одна консультация онколога';
    } else if (el.value === '6000') {
      sumDescr.innerHTML = 'одно исследование МРТ';
    }
  });
});

inputNum.addEventListener('input', function () {
  if (this.value.length > 9) {
    this.value = this.value.slice(0, 9);
  }
  if (this.value <= 0) {
    sumText.innerHTML = 0 + ' ₽';
  } else if (this.value >= 0) {
    sumText.innerHTML = inputNum.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽';
    sumDescr.innerHTML = 'ваш вклад поможет взрослым победить рак';
    sumDecor.innerHTML = 'Сумма вашего перевода';
  }
});


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





