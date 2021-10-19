"use strict";

$(document).ready(function () {
  $('body').autoPadding({
    source: $('.js-header')
  }); //removeIf(production)

  console.log("document ready"); //endRemoveIf(production)
}); // tabs

document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs__btn_active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('tabs__content_active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('tabs__content_active');
      el.classList.add('tabs__btn_active');
    });
  });
});