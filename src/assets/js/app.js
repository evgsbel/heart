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
  acc[i].addEventListener("click", function() {
    this.classList.toggle("is-open");
  });
}

// super ellipse
if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners');

// fixed header

$(document).ready(function() {

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

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 50 && scrolled > scrollPrev ) {
      header.addClass('out header_fixed');
    } else {
      header.removeClass('out');
    }
    if ( scrolled < 50) {
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
      if (currentIndex === 3) {
        // $('.vol-form__submit').removeAttr('disabled')
        //remove default #finish button
        $('#wizard').find('a[href="#finish"]').remove();
        //append a submit type button
        // $('#wizard .actions li:last-child').append('<button class="btn-reset vol-form__submit" type="submit">Отправить анкету</button>');
      }
    },
    onFinishing: function (event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();

    },
    onFinished: function (event, currentIndex) {
      alert("Submitted!");
    }
  })

  function checkPercent() {
    let inputsRequired = $('.vol-form__input.required');
    let pEl = 100 / inputsRequired.length;
    let pAll = 0;
    let filled = true;
    inputsRequired.attr('data', pEl);
    for (var i = 0; i < inputsRequired.length; i++) {
      if (!inputsRequired[i].value) {
        filled = false;
      } else {
        pAll += pEl
      }
    }
    function progressView(){
      let diagramBox = document.querySelectorAll('.diagram.progress');
      diagramBox.forEach((box) => {
        let deg = (360 * box.dataset.percent / 100) + 180;
        if(box.dataset.percent >= 50){
          box.classList.add('over_50');
        }else{
          box.classList.remove('over_50');
        }
        box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
      });
    }
    progressView();
    $('.vol-progress__percent').html(pAll + '%');
    $(".progress").attr("data-percent", `${pAll}`)

    if (filled) {
      document.querySelector(".vol-form__submit").disabled = false;
    } else {
      document.querySelector(".vol-form__submit").disabled = true;
    }
  }

  window.addEventListener("input", checkPercent);
  window.addEventListener("keyup", checkPercent);
// Change progress bar action
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
    number: "Please enter a valid number.",
  });
});

