"use strict";

// tabs
document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.change-bank__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.change-bank__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
}); // pay form

var radioBtn = document.querySelectorAll('.js-radio');
var sumText = document.querySelector('.js-pay-sum');
var inputNum = document.querySelector('.js-input-number');
var sumDescr = document.querySelector('.js-sum-descr');
var sumDecor = document.querySelector('.js-sum-decor');
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
}); // radioBackground

var triggers = document.querySelectorAll('.js-radio-label');
var highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  var linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  var coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };
  highlight.style.width = "".concat(coords.width, "px");
  highlight.style.height = "".concat(coords.height, "px");
  highlight.style.transform = "translate(".concat(coords.left, "px, ").concat(coords.top, "px)");
}

triggers.forEach(function (a) {
  return a.addEventListener('click', highlightLink);
}); // From https://codepen.io/SJF

triggers.forEach(function (a) {
  return a.addEventListener('focus', highlightLink);
});