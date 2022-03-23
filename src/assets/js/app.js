// $(document).ready(function () {
//   $('body').autoPadding({
//     source: $('.js-header'),
//   });
//   //removeIf(production)
//   console.log("document ready");
//   //endRemoveIf(production)
// });


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
  acc[i].addEventListener("click", function () {
    this.classList.toggle("is-open");
  });
}

// super ellipse
if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners');

// fixed header

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


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// form
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
})



// vol form

$(() => {
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
    },
  });

  form.children("#wizard").steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "fade",
    titleTemplate: '#title#',
    labels: {
      next: "Далее <svg width='21' height='16' viewBox='0 0 21 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" +
        "  <path d='M1 8H20M20 8L13 1M20 8L13 15' stroke='white' stroke-linecap='round' stroke-linejoin='round'/>\n" +
        "</svg>",
      previous: "<svg width='21' height='16' viewBox='0 0 21 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" +
        "  <path d='M20 8H1M1 8L8 1M1 8L8 15' stroke='#2688E5' stroke-linecap='round' stroke-linejoin='round'/>\n" +
        "</svg> Вернуться",
      finish: "Отправить анкету"
    },
    onInit: function (event, currentIndex) {
      // setProgressBar(currentIndex);
    },
    onStepChanging: function (event, currentIndex, newIndex) {
      // Allways allow previous action even if the current form is not valid!
      if (currentIndex > newIndex) {
        return true;
      }
      // Forbid next action on "Warning" step if the user is to young
      if (newIndex === 3 && Number($("#age-2").val()) < 18) {
        return false;
      }

      // Needed in some cases if the user went back (clean up)
      if (currentIndex < newIndex) {
        // To remove error styles
        form.find(".body:eq(" + newIndex + ") label.error").remove();
        form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
      }
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onStepChanged: function (event, currentIndex, priorIndex) {

      if (currentIndex > 0) {
        $('.need-doc').fadeOut()
        $('.vol-form-warning').fadeOut()
      } else {
        $('.need-doc').fadeIn()
        $('.vol-form-warning').fadeIn()
      }

      // setProgressBar(currentIndex);
      // progressView();
      // Used to skip the "Warning" step if the user is old enough.
      if (currentIndex === 2 && Number($("#age-2").val()) >= 18) {
        form.steps("next");
      }
      // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
      if (currentIndex === 2 && priorIndex === 3) {
        form.steps("previous");
      }
      if (currentIndex === 3 || currentIndex === 4) {
        // $('.vol-form__submit').removeAttr('disabled')
        //remove default #finish button
        //$('#wizard').find('a[href="#finish"]').remove();
        //append a submit type button
        //$('#wizard .actions li:last-child').append('<button class="btn-reset vol-form__submit" type="submit">Отправить анкету</button>');
      }
    },
    onFinishing: function (event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();

    },
    onFinished: function (event, currentIndex) {
      alert("Submitted!");
      $('#vol-form').submit()
    }
  })

  function checkPercent() {
    let inputsRequired = $('.vol-form .required');
    let pEl = 100 / inputsRequired.length;

    let pAll = 0;
    let filled = true;
    inputsRequired.attr('data', pEl);
    for (var i = 0; i < inputsRequired.length; i++) {
      if (!inputsRequired[i].value && !inputsRequired[i].disabled) {
        filled = false;
      } else {
        pAll += pEl
      }
    }

    function progressView() {
      let diagramBox = document.querySelectorAll('.diagram.progress');
      diagramBox.forEach((box) => {
        let deg = (360 * pAll / 100) + 180;
        if (pAll >= 50) {
          box.classList.add('over_50');
        } else {
          box.classList.remove('over_50');
        }
        box.querySelector('.piece.right').style.transform = 'rotate(' + deg + 'deg)';
      });
    }

    progressView();
    $('.vol-progress__percent').html(Math.round(pAll) + '%');
    $(".progress").attr("data-percent", `${Math.round(pAll)}`)

    if (filled) {
      $('.wizard > .actions > ul > li:last-child a').removeClass('not-active')
      $('.wizard > .actions > ul > li:last-child span').removeClass('not-active')
      // document.querySelector(".vol-form__submit").disabled = false;
    } else {
      $('.wizard > .actions > ul > li:last-child a').addClass('not-active');
      $('.wizard > .actions > ul > li:last-child span').addClass('not-active')
      //document.querySelector(".vol-form__submit").disabled = true;
    }
  }

  window.addEventListener("input", checkPercent);
  window.addEventListener("keyprup", checkPercent);




  jQuery.extend(jQuery.validator.messages, {
    required: "Обязательно",
    remote: "Please fix this field.",
    email: "Введите корректный email",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
  });

  //masked inputs

  Inputmask({"mask": "+7 (999) 999-99-99"}).mask('.phone-mask');
  Inputmask({"mask": "99.99.9999"}).mask('.date-mask');
  Inputmask({"mask": "99:99"}).mask('.time-mask');
  Inputmask({"mask": "99.99.9999"}).mask('.day-mask');

  // file input single

  const inputFile = document.querySelectorAll('.vol-form__file');

  /////////// Кнопка «Прикрепить файл» ///////////
  inputFile.forEach(function (el) {
    let textSelector = el.nextElementSibling;
    let btnRemove = el.parentNode.lastElementChild;
    let fileList;

    // Событие выбора файла(ов)
    el.addEventListener('change', function (e) {

      // создаём массив файлов
      fileList = [];
      for (let i = 0; i < el.files.length; i++) {
        fileList.push(el.files[i]);
      }

      // вызов функции для каждого файла
      fileList.forEach(file => {
        uploadFile(file);
      });
    });

    // Проверяем размер файлов и выводим название
    const uploadFile = (file) => {
    let ext = file.name.split('.').pop()
      // файла <5 Мб
      if (file.size > 5 * 1024 * 1024) {
        alert('Файл должен быть не более 5 МБ.');
        return;
      }

      // Показ загружаемых файлов
      if (file && file.length > 1) {
        if (file.length <= 4) {
          textSelector.innerHTML = `Выбрано ${file.length} файла`;
          textSelector.classList.add('is-active');
          btnRemove.classList.add('is-visible');
        }
        if (file.length > 4) {
          textSelector.innerHTML = `Выбрано ${file.length} файлов`;
          textSelector.classList.add('is-active');
          btnRemove.classList.add('is-visible');
        }
      } else {
        if (file.name.length > 20 ) {
          textSelector.innerHTML = file.name.slice(0, 10) + "..." + ext;
        } else {
          textSelector.innerHTML = file.name;
        }
        textSelector.classList.add('is-active');
        btnRemove.classList.add('is-visible');
      }


      // удаление файла
      btnRemove.addEventListener('click', function (b) {
        this.classList.remove('is-visible')
        textSelector.classList.remove('is-active')
        textSelector.innerHTML = 'Перетащите или <span>выберите файл</span>'
        el.value = '';
        checkPercent()
      })
    }
  });


// check taxi

  $('.js-taxi-query').click(function () {
    $('.check-taxi').fadeOut();
    $('.vol-form-warning').fadeIn();
  });

  $('.js-taxi-back').click(function () {
    $('.check-taxi').fadeOut();
    $('.vol-form-warning').fadeIn();
    $('.vol-form-warning').addClass('is-active');
    $('.need-doc').remove();
    $('.js-not-show-on-back').hide();
    $('.js-not-show-on-back-section').remove();
    $('#wizard').steps('remove', 3)
    $("#wizard").steps("reset");
    $('.vol-form-warning').html('<p>В этом месяце был повышен спрос на такси, поэтому мы вынуждены ввести временные ограничения на количество поездок в день.</p><p>Ограничения продлятся до 1 сентября.</p><p>Дождитесь ответа на почту о статусе вашей заявки.</p>');
  })
});
$(document).ready(function () {
  $('.wizard > .actions > ul > li:last-child').append('<span class="">Нажимая на кнопку, вы даете согласие на обработку <a href="/">персональных данных</a></span>')
});
// tabs
$(document).ready(function () {
  // document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {

      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('is-active');
      });

      var path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
      el.classList.add('is-active');

    });
  });
  //});
});

// read more on psyhology form
$(document).ready(function () {
  var status = "less";
  let toggleButton = document.querySelectorAll('.change-psychology__read-more');
  toggleButton.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault()
      if (status == "less") {
        el.previousElementSibling.classList.add('is-open')
        el.innerText = "Скрыть";
        status = "more";
      } else if (status == "more") {
        el.previousElementSibling.classList.remove('is-open');
        el.innerText = "Читать полностью";
        status = "less"
      }
    })
  })
});

$(document).ready(function () {
  if ($('div.js-show-psychology-list').length) {
  function toggle() {
    var psList = document.querySelector('.js-show-psychology-list');
    if (this.checked)
      psList.style.display = 'block';
    else
      psList.style.display = 'none'
  }

  document.getElementById('vol-const-type-1').onchange = toggle;

  function toggleTwo() {
    var psList = document.querySelector('.js-show-psychology-list');
    if (this.checked)
      psList.style.display = 'none';
    else
      psList.style.display = 'block'
  }

  document.getElementById('vol-const-type-2').onchange = toggleTwo;
  }
})

$(document).ready(function () {
  if ($('#vol-no-work').length) {
    function toggleThree() {
      var workPlaceInput = document.getElementById('vol-work');
      var workPositionInput = document.getElementById('vol-position');
      if (this.checked) {
        workPlaceInput.setAttribute("disabled", "disabled");
        workPositionInput.setAttribute("disabled", "disabled");
      } else {
        workPlaceInput.removeAttribute("disabled");
        workPositionInput.removeAttribute("disabled");
      }
    }

    document.getElementById('vol-no-work').onchange = toggleThree;
  }
})




$(document).ready(function () {


});


// input files multiple
$(document).ready(function () {
  if ($('div.dropzone').length) {
    const dropzone = new Dropzone("div.dropzone", {
      url: "../files",
      createImageThumbnails: false,
      addRemoveLinks: true,
      dictRemoveFile: "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13 1L1 13M1 1L13 13' stroke='#6D7276' stroke-linecap='round' stroke-linejoin='round'/></svg>"
    });
  }
});



$(document).ready(function () {
  // change psychology slider
  const changePsychologySlider = new Swiper('.change-psychology-slider', {
    // Optional parameters
    speed: 500,

    navigation: {
      nextEl: ".change-psychology__button_next",
      prevEl: ".change-psychology__button_prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 4.5,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 7,
      },
      1400: {
        slidesPerView: 'auto',
      }
    }
  });
});
