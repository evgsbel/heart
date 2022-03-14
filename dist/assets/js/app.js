"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// $(document).ready(function () {
//   $('body').autoPadding({
//     source: $('.js-header'),
//   });
//   //removeIf(production)
//   console.log("document ready");
//   //endRemoveIf(production)
// });
// mobile menu
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
  // function stickySidebar() {
  //   var scrollDistance = $(document).scrollTop(),
  //     headerHeight = $('.header').outerHeight(true),
  //     // sidebarHeight = $('aside').outerHeight(true),
  //     footerOffsetTop = $('.js-stop-header').offset().top,
  //     $header = $('header');
  //
  //   if( scrollDistance >= headerHeight) {
  //     $header.addClass('header_fixed');
  //     $header.removeClass('header_hide');
  //   } else {
  //     $header.removeClass('header_fixed');
  //   }
  //
  //   if ( scrollDistance + headerHeight  >= footerOffsetTop) {
  //     $header.removeClass('header_fixed');
  //     $header.addClass('header_hide');
  //   }
  //
  // }
  // stickySidebar();
  //
  // $(document).scroll(function() {
  //   stickySidebar();
  // });
  var header = $('.header'),
      scrollPrev = 0;
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50 && scrolled > scrollPrev) {
      header.addClass('out header_fixed');
    } else {
      header.removeClass('out');
    }

    if (scrolled < 50) {
      header.removeClass('header_fixed');
    }

    scrollPrev = scrolled;
  });
});
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } // form

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

function check() {
  var inputs = document.querySelectorAll(".js-popup-help-input[required]");
  var textareas = document.querySelectorAll(".js-popup-help-textarea[required]");
  var filled = true;

  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      filled = false;
    }
  }

  for (var j = 0; j < textareas.length; j++) {
    if (!textareas[j].value) {
      filled = false;
    }
  }

  if (filled) {
    document.querySelector(".js-popup-help-submit").disabled = false;
    document.querySelector(".js-popup-help-conf").classList.add('is-visible');
  } else {
    document.querySelector(".js-popup-help-submit").disabled = true;
    document.querySelector(".js-popup-help-conf").classList.remove('is-visible');
  }
}

window.addEventListener("keyup", check);
window.addEventListener("click", check);

function checkReviews() {
  var inputs = document.querySelectorAll(".js-popup-reviews-input");
  var textareas = document.querySelectorAll(".js-popup-reviews-textarea");
  var filled = true;

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "text" && !inputs[i].value) {
      filled = false;
    }
  }

  for (var j = 0; j < textareas.length; j++) {
    if (!textareas[j].value) {
      filled = false;
    }
  }

  if (filled) {
    document.querySelector(".js-popup-reviews-submit").disabled = false;
    document.querySelector(".js-popup-reviews-conf").classList.add('is-visible');
  } else {
    document.querySelector(".js-popup-reviews-submit").disabled = true;
    document.querySelector(".js-popup-reviews-conf").classList.remove('is-visible');
  }
}

window.addEventListener("keyup", checkReviews);
window.addEventListener("click", checkReviews);
$('.js-close-popup').click(function () {
  $.fancybox.close();
}); // vol form

$(function () {
  var currentIndex;
  var steps;
  var wizardLength = $("#vol-form").find('h2').length;
  var form = $("#vol-form").show();
  form.validate({
    errorPlacement: function errorPlacement(error, element) {
      element.before(error);
    },
    errorElement: 'span',
    errorClass: 'vol-form__error',
    rules: {
      email: {
        email: true
      }
    }
  });
  form.children("#wizard").steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "fade",
    titleTemplate: '#title#',
    labels: {
      next: "Далее <svg width='21' height='16' viewBox='0 0 21 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" + "  <path d='M1 8H20M20 8L13 1M20 8L13 15' stroke='white' stroke-linecap='round' stroke-linejoin='round'/>\n" + "</svg>",
      previous: "<svg width='21' height='16' viewBox='0 0 21 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" + "  <path d='M20 8H1M1 8L8 1M1 8L8 15' stroke='#2688E5' stroke-linecap='round' stroke-linejoin='round'/>\n" + "</svg> Вернуться"
    },
    onInit: function onInit(event, currentIndex) {// setProgressBar(currentIndex);
    },
    onStepChanging: function onStepChanging(event, currentIndex, newIndex) {
      // Allways allow previous action even if the current form is not valid!
      if (currentIndex > newIndex) {
        return true;
      } // Forbid next action on "Warning" step if the user is to young


      if (newIndex === 3 && Number($("#age-2").val()) < 18) {
        return false;
      } // Needed in some cases if the user went back (clean up)


      if (currentIndex < newIndex) {
        // To remove error styles
        form.find(".body:eq(" + newIndex + ") label.error").remove();
        form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
      }

      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onStepChanged: function onStepChanged(event, currentIndex, priorIndex) {
      if (currentIndex > 0) {
        $('.need-doc').fadeOut();
      } else {
        $('.need-doc').fadeIn();
      } // setProgressBar(currentIndex);
      // progressView();
      // Used to skip the "Warning" step if the user is old enough.


      if (currentIndex === 2 && Number($("#age-2").val()) >= 18) {
        form.steps("next");
      } // Used to skip the "Warning" step if the user is old enough and wants to the previous step.


      if (currentIndex === 2 && priorIndex === 3) {
        form.steps("previous");
      }

      if (currentIndex === 3) {
        // $('.vol-form__submit').removeAttr('disabled')
        //remove default #finish button
        $('#wizard').find('a[href="#finish"]').remove(); //append a submit type button
        // $('#wizard .actions li:last-child').append('<button class="btn-reset vol-form__submit" type="submit">Отправить анкету</button>');
      }
    },
    onFinishing: function onFinishing(event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    },
    onFinished: function onFinished(event, currentIndex) {
      alert("Submitted!");
    }
  });

  function checkPercent() {
    var inputsRequired = $('.vol-form .required');
    var pEl = 100 / inputsRequired.length;
    var pAll = 0;
    var filled = true;
    inputsRequired.attr('data', pEl);

    for (var i = 0; i < inputsRequired.length; i++) {
      if (!inputsRequired[i].value) {
        filled = false;
      } else {
        pAll += pEl;
      }
    }

    function progressView() {
      var diagramBox = document.querySelectorAll('.diagram.progress');
      diagramBox.forEach(function (box) {
        var deg = 360 * box.dataset.percent / 100 + 180;

        if (box.dataset.percent >= 50) {
          box.classList.add('over_50');
        } else {
          box.classList.remove('over_50');
        }

        box.querySelector('.piece.right').style.transform = 'rotate(' + deg + 'deg)';
      });
    }

    progressView();
    $('.vol-progress__percent').html(Math.round(pAll) + '%');
    $(".progress").attr("data-percent", "".concat(Math.round(pAll)));

    if (filled) {
      document.querySelector(".vol-form__submit").disabled = false;
    } else {
      document.querySelector(".vol-form__submit").disabled = true;
    }
  }

  window.addEventListener("input", checkPercent);
  window.addEventListener("keyup", checkPercent); // Change progress bar action
  //   function setProgressBar(currentIndex) {
  //     var percent = parseFloat(100 / wizardLength) * (currentIndex + 1);
  //     percent = percent.toFixed();
  //     // $(".vol-progress__percent").html(percent + "%");
  //     // $(".diagram .text").html(percent + "%")
  //     $(".progress").attr("data-percent", `${percent}`)
  //     // $(".vol-progress__bar").css("width", percent + "%")
  //
  //   }

  jQuery.extend(jQuery.validator.messages, {
    required: "Поле обязательно для заполнения",
    remote: "Please fix this field.",
    email: "Введите корректный email-адрес",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number."
  });
}); // tabs

$(document).ready(function () {
  // document.addEventListener('DOMContentLoaded', function () {
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
  }); //});
}); // read more on psyhology form

$(document).ready(function () {
  var status = "less";
  var toggleButton = document.querySelectorAll('.change-psychology__read-more');
  toggleButton.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      if (status == "less") {
        el.previousElementSibling.classList.add('is-open');
        el.innerText = "Скрыть";
        status = "more";
      } else if (status == "more") {
        el.previousElementSibling.classList.remove('is-open');
        el.innerText = "Читать полностью";
        status = "less";
      }
    });
  });
});
$(document).ready(function () {
  var inputFile = document.querySelectorAll('.vol-form__file'); /////////// Кнопка «Прикрепить файл» ///////////

  inputFile.forEach(function (el) {
    var textSelector = el.nextElementSibling;
    var btnRemove = el.parentNode.lastElementChild;
    var fileList; // Событие выбора файла(ов)

    el.addEventListener('change', function (e) {
      // создаём массив файлов
      fileList = [];

      for (var _i = 0; _i < el.files.length; _i++) {
        fileList.push(el.files[_i]);
      } // вызов функции для каждого файла


      fileList.forEach(function (file) {
        uploadFile(file);
      });
    }); // Проверяем размер файлов и выводим название

    var uploadFile = function uploadFile(file) {
      // файла <5 Мб
      if (file.size > 5 * 1024 * 1024) {
        alert('Файл должен быть не более 5 МБ.');
        return;
      } // Показ загружаемых файлов


      if (file && file.length > 1) {
        if (file.length <= 4) {
          textSelector.innerHTML = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E ".concat(file.length, " \u0444\u0430\u0439\u043B\u0430");
          textSelector.classList.add('is-active');
          btnRemove.classList.add('is-visible');
        }

        if (file.length > 4) {
          textSelector.innerHTML = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E ".concat(file.length, " \u0444\u0430\u0439\u043B\u043E\u0432");
          textSelector.classList.add('is-active');
          btnRemove.classList.add('is-visible');
        }
      } else {
        textSelector.innerHTML = file.name;
        textSelector.classList.add('is-active');
        btnRemove.classList.add('is-visible');
      } // удаление файла


      btnRemove.addEventListener('click', function (b) {
        this.classList.remove('is-visible');
        textSelector.classList.remove('is-active');
        textSelector.innerHTML = 'Перетащите или <span>выберите файл</span>';
        el.value = '';
      });
    };
  });
}); // input files multiple

$(document).ready(function () {
  if ($('div.dropzone').length) {
    var dropzone = new Dropzone("div.dropzone", {
      url: "../files",
      createImageThumbnails: false,
      addRemoveLinks: true,
      dictRemoveFile: "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13 1L1 13M1 1L13 13' stroke='#6D7276' stroke-linecap='round' stroke-linejoin='round'/></svg>"
    });
  }
});