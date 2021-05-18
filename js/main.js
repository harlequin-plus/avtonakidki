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
var smoothLinks = document.querySelectorAll('a[href^="#"]');

var _iterator = _createForOfIteratorHelper(smoothLinks),
    _step;

try {
  var _loop = function _loop() {
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
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

;
var swiper = new Swiper('.gallery-container', {
  // Optional parameters
  direction: 'horizontal',
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 1
    },
    1259: {
      slidesPerView: 3
    },
    1260: {
      slidesPerView: 6
    }
  }
});
var swiper1 = new Swiper('.reviews-container', {
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