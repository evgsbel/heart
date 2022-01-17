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

document.addEventListener('DOMContentLoaded', function () {
  const tabsBtn = document.querySelectorAll('.change-bank__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {

      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('is-active');
      });

      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.change-bank__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
      el.classList.add('is-active');

    });
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


// volunteer steps


// var form = $('#vol-form');

// form.validate({
//   errorPlacement: function errorPlacement(error, element) { element.before(error); },
//   errorElement: 'span',
//   errorClass: 'vol-form__error',
//   rules: {
//     email: {
//       email: true
//     }
//   },
// });

// form.children("#wizard").steps({
//   headerTag: "h2",
//   bodyTag: "section",
//   transitionEffect: "fade",
//   titleTemplate: '#title#',
//   labels: {
//     next: "Далее <svg width='21' height='16' viewBox='0 0 21 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" +
//       "  <path d='M1 8H20M20 8L13 1M20 8L13 15' stroke='white' stroke-linecap='round' stroke-linejoin='round'/>\n" +
//       "</svg>",
//     previous: "<svg width='21' height='16' viewBox='0 0 21 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n" +
//       "  <path d='M20 8H1M1 8L8 1M1 8L8 15' stroke='#2688E5' stroke-linecap='round' stroke-linejoin='round'/>\n" +
//       "</svg> Вернуться",
//   },
//   onStepChanging: function (event, currentIndex, newIndex)
//   {
//     form.validate().settings.ignore = ":disabled,:hidden";
//     return form.valid();
//   },
//   onFinishing: function (event, currentIndex)
//   {
//     form.validate().settings.ignore = ":disabled";
//     return form.valid();
//   },
//   onFinished: function (event, currentIndex)
//   {
//     alert("Submitted!");
//   }
// });

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
        $('.vol-form__submit').removeAttr('disabled')
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



