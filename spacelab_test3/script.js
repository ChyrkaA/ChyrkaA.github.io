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


document.addEventListener("DOMContentLoaded", () => {
  // const select = document.querySelectorAll(".space__select");
  // const selectedOption = select.querySelector(".space__select-option");
  // const optionsList = select.querySelector(".space__select-list");
  // const cross = select.querySelector(".space__select-option-spans");
  //
  // selectedOption.addEventListener('click', () => {
  //     optionsList.classList.toggle("space__select-list_active");
  //     cross.classList.toggle("space__select-option-spans_active");
  // });
  //
  // optionsList.addEventListener("click", function (e) {
  //     console.log(1);
  //     if (e.target.tagName === "LI") {
  //         selectedOption.innerHTML = e.target.innerHTML;
  //         optionsList.classList.toggle("space__select-list_active");
  //         cross.classList.toggle("space__select-option-spans_active");
  //     }
  // });
  document.addEventListener("click", e => {
    const select = e.target.closest(".space__select");
    if (select) {
      const optionList = select.querySelector(".space__select-list");
      const cross = select.querySelector(".space__select-option-spans");
      if (optionList && !e.target.closest(".space__select-list")) {
        optionList.classList.toggle("space__select-list_active");
        cross.classList.toggle("space__select-option-spans_active");
      }
    }
    if (e.target.closest(".space__select-list") && e.target.tagName === "LI") {
      const listItem = e.target;
      const select = listItem.closest(".space__select");
      const option = select.querySelector(".space__select-option");
      if (option) {
        const optionText = option.childNodes[1];
        optionText.textContent = listItem.textContent;
        const optionList = select.querySelector(".space__select-list");
        const cross = select.querySelector(".space__select-option-spans");
        optionList.classList.toggle("space__select-list_active");
        cross.classList.toggle("space__select-option-spans_active");
      }
    }
  });
  const tel = document.querySelector(".space__tel");
  const mail = document.querySelector(".space__mail");
  const tablet = document.querySelectorAll(".projects__tablet");
  const tabletImg = tablet[2].querySelector(".projects__tablet-img");
  const loremTitle = document.querySelector(".lorem__title");
  const footerTitle = document.querySelector(".footer__title");
  function changeFooterTitle() {
    if (innerWidth <= 1399) {
      footerTitle.innerHTML = 'Get in touch';
    }
  }
  function changeLoremTitle() {
    if (innerWidth <= 767) {
      loremTitle.innerHTML = '@hilight.design';
    }
  }
  function changeTelMail() {
    if (innerWidth <= 1399) {
      tel.innerHTML = "+380935705222";
      mail.innerHTML = "info@hi-light.pl";
    } else {
      tel.innerHTML = "+380983527547";
      mail.innerHTML = "E: info@gmail.com";
    }
  }
  function changeImgTitle() {
    if (innerWidth <= 1024 && tabletImg) {
      tabletImg.src = "img/projects/7.webp";
    }
  }
  changeTelMail();
  changeImgTitle();
  changeLoremTitle();
  changeFooterTitle();
  window.addEventListener("resize", () => {
    innerWidth <= 1399 ? changeTelMail() : null;
    innerWidth <= 1399 ? changeFooterTitle() : null;
    innerWidth <= 767 ? changeImgTitle() : null;
    innerWidth <= 767 ? changeLoremTitle() : null;
  });
  const hamburger = document.querySelector(".hamburger");
  const bigMenu = document.querySelector(".menu__big-menu");
  const body = document.querySelector("body");
  const request = document.querySelector(".menu__request");
  hamburger.addEventListener("click", () => {
    bigMenu.classList.toggle("menu__big-menu_active");
    hamburger.classList.toggle("hamburger_active");
    request.classList.toggle("menu__request_active");
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (body.style.overflow === "hidden") {
      body.style.overflow = "";
      body.style.paddingRight = "";
    } else {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
  });
  const num = document.querySelectorAll(".space__selector-num");
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  swiper.on('slideChangeTransitionEnd', () => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const currentSlideNumber = activeSlide.getAttribute('aria-label').split(' / ')[0];
    num.forEach(item => item.classList.remove('gray'));
    const prevSlide = `0${+currentSlideNumber - 1}`;
    const nextSlide = `0${+currentSlideNumber + 1}`;
    if (currentSlideNumber == 4) {
      num[0].innerHTML = prevSlide;
      num[1].innerHTML = `01`;
    } else if (currentSlideNumber == 1) {
      num[0].innerHTML = `04`;
      num[1].innerHTML = nextSlide;
    } else {
      num[0].innerHTML = prevSlide;
      num[1].innerHTML = nextSlide;
    }
  });
  const tablets = document.querySelector(".projects__tablets");
  tablets.addEventListener("mouseover", e => {
    const target = e.target.closest(".projects__tablet");
    if (target) {
      target.classList.add("projects__tablet_active");
    }
  });
  tablets.addEventListener("mouseout", e => {
    const target = e.target.closest(".projects__tablet");
    if (target) {
      target.classList.remove("projects__tablet_active");
    }
  });
  const cards = document.querySelector(".projects__cards-wrapper");
  cards.addEventListener("mouseover", e => {
    const target = e.target.closest(".projects__cards-wrapper-card");
    if (target) {
      target.classList.add("projects__cards-wrapper-card_active");
    }
  });
  cards.addEventListener("mouseout", e => {
    const target = e.target.closest(".projects__cards-wrapper-card");
    if (target) {
      target.classList.remove("projects__cards-wrapper-card_active");
    }
  });
  const requestBtn = document.querySelector(".menu__request");
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector(".modal__close");
  requestBtn.addEventListener("click", () => {
    modal.classList.add("modal_active");
  });
  modalClose.addEventListener("click", () => {
    modal.classList.remove("modal_active");
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map