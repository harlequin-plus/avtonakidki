"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

console.log('Ready!');
var burger = document.querySelector('.menu-icon');
var menuBody = document.querySelector('.menu-body');

if (burger) {
  burger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    burger.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

document.querySelector('.navigation').addEventListener('click', function (event) {
  if (event.target.classList.contains('navigation__item')) {
    event.preventDefault();
    var id = event.target.getAttribute('href').replace('#', '');
    console.log(id);
    window.scrollTo({
      top: document.getElementById(id).offsetTop - 70,
      behavior: 'smooth'
    });
    burger.classList.remove('active');
    menuBody.classList.remove('active');
    document.body.classList.remove('lock');
  }
});
var smoothLinks = document.querySelectorAll('.smoothLink');

var _iterator = _createForOfIteratorHelper(smoothLinks),
    _step;

try {
  var _loop3 = function _loop3() {
    var smoothLink = _step.value;
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      var id = smoothLink.getAttribute('href').replace('#', '');
      window.scrollTo({
        top: document.getElementById(id).offsetTop - 70,
        behavior: 'smooth'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop3();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

;
var colors = document.querySelectorAll('.card-color__item');
var curColor = document.querySelector('.current-color');

var _iterator2 = _createForOfIteratorHelper(colors),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var color = _step2.value;
    color.addEventListener('click', function (e) {
      var curColorName = e.target.attributes.title.value;
      curColor.innerText = curColorName;
    });
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

; // Popups

var popupLinks = document.querySelectorAll('.popup-link');
var body = document.querySelector('body');

if (popupLinks.length > 0) {
  var _loop = function _loop(index) {
    var popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      var popupName = popupLink.getAttribute('href').replace('#', '');
      var curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  };

  for (var index = 0; index < popupLinks.length; index++) {
    _loop(index);
  }
}

var popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
  var _loop2 = function _loop2(_index) {
    var el = popupCloseIcon[_index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  };

  for (var _index = 0; _index < popupCloseIcon.length; _index++) {
    _loop2(_index);
  }
}

function popupOpen(curentPopup) {
  if (curentPopup) {
    var popupActive = document.querySelector('.popup.open');
    bodyLock();
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive) {
  if (popupActive) {
    popupActive.classList.remove('open');
    bodyUnLock();
  }
}

function bodyLock() {
  body.classList.add('lock');
}

function bodyUnLock() {
  body.classList.remove('lock');
}

function removeProduct(productID) {
  var product = document.querySelector(".cart__item[data-id=\"".concat(productID, "\"]"));
  product.remove();
}

function incrementValue(productID) {
  var product = document.querySelector(".card__count__input[data-id=\"".concat(productID, "\"]"));
  var value = parseInt(product.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  product.value = value;
}

function decrementValue(productID) {
  var product = document.querySelector(".card__count__input[data-id=\"".concat(productID, "\"]"));
  var value = parseInt(product.value, 10);
  value = isNaN(value) ? 0 : value;
  value--;

  if (product.value <= 1) {
    product.value = 1;
  } else {
    product.value = value;
  }
}

var swiper0 = new Swiper('.utp-container', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev"
  },
  breakpoints: {
    767: {
      slidesPerView: 1
    },
    1259: {
      slidesPerView: 3
    },
    1260: {
      slidesPerView: 4
    }
  }
});
var swiper = new Swiper('.gallery-container', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev"
  },
  breakpoints: {
    767: {
      slidesPerView: 1
    },
    1259: {
      slidesPerView: 3
    },
    1260: {
      slidesPerView: 3
    }
  }
});
var swiper1 = new Swiper('.reviews-container', {
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev"
  },
  breakpoints: {
    767: {
      slidesPerView: 1
    },
    1259: {
      slidesPerView: 3
    },
    1260: {
      slidesPerView: 4
    }
  }
});
var sliderThumbs = new Swiper(".card-thumbs", {
  loop: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  slidesPerView: 'auto',
  breakpoints: {
    767: {
      slidesPerView: 'auto'
    }
  }
});
var cardSlider = new Swiper(".card-slider", {
  loop: true,
  slidesPerView: 'auto',
  allowTouchMove: false,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev"
  },
  thumbs: {
    swiper: sliderThumbs
  }
});
$(document).ready(function () {
  $('.zoom').magnify();
});