console.log('wards');


// // pay slider
// const swiperWardsNav = new Swiper('.wards-nav__swiper', {
//   // Optional parameters
//   watchOverflow: false,
//   speed: 500,
//   spaceBetween: 8,
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2.5,
//     },
//     768: {
//       slidesPerView: 'auto',
//     },
//   }
// });

// $(document).ready(function () {
//
//   function stickySidebar() {
//     var scrollDistance = $(document).scrollTop(),
//       headerHeight = $('.ask').outerHeight(true),
//       // sidebarHeight = $('aside').outerHeight(true),
//       footerOffsetTop = $('.js-stop-header').offset().top,
//       $header = $('.ask');
//
//     if (scrollDistance >= headerHeight) {
//       $header.addClass('ask_fixed');
//       $header.removeClass('ask_hide');
//     } else {
//       $header.removeClass('ask_fixed');
//     }
//
//     if (scrollDistance + headerHeight >= footerOffsetTop) {
//       $header.removeClass('ask_fixed');
//       $header.addClass('ask_hide');
//     }
//
//   }
//
//   stickySidebar();
//
//   $(document).scroll(function () {
//     stickySidebar();
//   });
//
// });


// calendar  slider
const swiperCalendarMonth = new Swiper('.calendar__swiper', {
  // Optional parameters
  slidesPerView: 3,
  speed: 1500,
  initialSlide: 9,
  centeredSlides: true,
  navigation: {
    nextEl: ".calendar-button-next",
    prevEl: ".calendar-button-prev",
  },
});


// gallery  slider
const swiperGallery = new Swiper('.gallery__swiper', {
  // Optional parameters
  slidesPerView: 4.2,
  speed: 800,
  spaceBetween: 8,
  navigation: {
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
    },
    600: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4.2,
    }
  }
});

// wards nav slider

// pay slider
const swiperWardsNav = new Swiper('.wards-nav__swiper', {
  // Optional parameters
  watchOverflow: false,
  speed: 500,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 'auto',
    },
  }
});


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
      setProgressBar(currentIndex);
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
      setProgressBar(currentIndex);
      progressView();
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
        $('#wizard .actions li:last-child').append('<button class="btn-reset vol-form__submit" type="submit">Отправить анкету</button>');
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


// Change progress bar action
  function setProgressBar(currentIndex) {
    var percent = parseFloat(100 / wizardLength) * (currentIndex + 1);
    percent = percent.toFixed();
    $(".vol-progress__percent").html(percent + "%");
    // $(".diagram .text").html(percent + "%")
    $(".progress").attr("data-percent", `${percent}`)
    // $(".vol-progress__bar").css("width", percent + "%")

  }


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
