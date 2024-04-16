/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelectorAll(".overlay");
  const catalogItem = document.querySelectorAll(".catalog__link");
  const catalogHeader = document.querySelectorAll(".catalog__header");
  const catalogImg = document.querySelectorAll(".catalog__img");
  catalogItem.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      overlay[i].classList.add("active__overlay");
      catalogHeader[i].classList.add("active__header");
      catalogImg[i].classList.add("transform__scale");
    });
  });
  catalogItem.forEach((item, i) => {
    item.addEventListener("mouseout", () => {
      overlay[i].classList.remove("active__overlay");
      catalogHeader[i].classList.remove("active__header");
      catalogImg[i].classList.remove("transform__scale");
    });
  });
  const showText = document.querySelector(".about__link");
  const text = document.querySelectorAll(".about__text");
  if (showText) {
    showText.addEventListener("click", e => {
      e.preventDefault;
      text.forEach(item => {
        item.classList.toggle("hidden");
      });
    });
  }
  const menuTop = document.querySelector(".menuTop");
  function scrolling() {
    if (scrollY > 200) {
      menuTop.classList.add("transform");
    } else {
      menuTop.classList.remove("transform");
    }
  }
  scrolling();
  window.addEventListener("scroll", scrolling);
  function onDisplay(entry) {
    entry.forEach(function (change) {
      if (change.isIntersecting) {
        change.target.classList.add("Delay");
      } else {
        change.target.classList.remove("Delay");
      }
    });
  }
  const elements = document.querySelectorAll(".animate");
  const options = {
    threshold: [0.1]
  };
  const observer = new IntersectionObserver(onDisplay, options);
  for (let elm of elements) {
    observer.observe(elm);
  }
  window.addEventListener("click", e => {
    if (e.target.classList.contains("button")) {
      overlayModal.classList.add("overlay-modal__active");
      modalBig.classList.add("modal__active");
    } else if (e.target.classList.contains("modal__close") || e.target.classList.contains("overlay-modal")) {
      overlayModal.classList.remove("overlay-modal__active");
      modalBig.classList.remove("modal__active");
      modalMini.classList.remove("modal__active");
    }
  });
  const overlayModal = document.querySelector(".overlay-modal");
  const modalBig = document.querySelector(".modal_big");
  const modalMini = document.querySelector(".modal_mini");
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      fetch("mailer/smart.php", {
        method: "POST",
        body: new FormData(this)
      }).then(function (response) {
        if (response.ok) {
          form.querySelectorAll("input").forEach(input => {
            input.value = "";
          });
          modalBig.classList.remove("modal__active");
          overlayModal.classList.add("overlay-modal__active");
          modalMini.classList.add("modal__active");
          setTimeout(function () {
            overlayModal.classList.remove("overlay__active");
            modalMini.classList.remove("modal-modal__active");
          }, 5000);
          form.reset();
        }
      }).catch(error => {
        console.log("Error:", error);
      });
      return false;
    });
  });
  const buttonCat = document.querySelectorAll(".button__Category");
  const menuBig = document.querySelector(".menuBig");
  const menuBigClose = document.querySelector(".menuBig__close");
  buttonCat.forEach(item => {
    item.addEventListener("click", () => {
      menuBig.classList.add("top");
      window.removeEventListener("scroll", scrolling);
      menuTop.classList.add("transform");
      menuTopLine.classList.remove("transform__translateX");
      menuBigLogp.classList.remove("hidden__letter");
      hamburger.classList.remove("hamburger__cross");
    });
  });
  menuBigClose.addEventListener("click", () => {
    menuBig.classList.remove("top");
    if (window.innerWidth >= 991) {
      window.addEventListener("scroll", scrolling);
    }
  });
  function resize() {
    if (window.innerWidth <= 991) {
      window.removeEventListener("scroll", scrolling);
      menuTop.classList.add("transform");
    } else {
      window.addEventListener("scroll", scrolling);
      menuTop.classList.remove("transform");
    }
  }
  resize();
  window.addEventListener("resize", resize);
  const hamburger = document.querySelector(".hamburger");
  const menuTopLine = document.querySelector(".menuTop__line");
  const menuBigLogp = document.querySelector(".menuTop__bigLogo");
  hamburger.addEventListener("click", () => {
    menuTopLine.classList.toggle("transform__translateX");
    menuBigLogp.classList.toggle("hidden__letter");
    hamburger.classList.toggle("hamburger__cross");
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map