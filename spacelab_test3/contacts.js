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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/contacts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/contacts.js":
/*!****************************!*\
  !*** ./src/js/contacts.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector(".menu");
  window.addEventListener("scroll", () => {
    window.scrollY >= 400 ? menu.style.background = "rgba(255, 255, 255, 0.8)" : menu.style.background = "";
  });
  const body = document.querySelector("body");
  const modalClose = document.querySelector(".modal__close");
  const modal = document.querySelector(".modal");
  const hamburger = document.querySelector(".hamburger");
  const bigMenu = document.querySelector(".menu__big-menu");
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const requestBtn = document.querySelectorAll(".menu__request, .projects__cards-request");
  requestBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.add("modal_active");
      if (body.style.overflow === "hidden") {
        body.style.overflow = "";
        body.style.paddingRight = "";
      } else {
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollbarWidth}px`;
      }
    });
  });
  modalClose.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    if (body.style.overflow === "hidden") {
      body.style.overflow = "";
      body.style.paddingRight = "";
    } else {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
  });
  const requestBtnMenu = document.querySelector(".menu__request");
  hamburger.addEventListener("click", () => {
    bigMenu.classList.toggle("menu__big-menu_active");
    hamburger.classList.toggle("hamburger_active");
    requestBtnMenu.classList.toggle("menu__request_active");
    if (window.innerWidth <= 1399 && window.scrollY >= 400) {
      menu.classList.toggle("menu_active");
    }
    if (body.style.overflow === "hidden") {
      body.style.overflow = "";
      body.style.paddingRight = "";
    } else {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
  });

  // preloader
  const preloaderPercent = document.querySelector(".preloader__percent");
  let loadedResources = 0;
  let totalResources = 0;
  function updateProgress() {
    const percent = Math.floor(loadedResources / totalResources * 100);
    preloaderPercent.textContent = `HI ${percent}%`;
    setTimeout(() => {
      if (percent === 100) {
        preloaderPercent.textContent = `HILIGHT`;
      }
    }, 500);
  }
  function countResources() {
    totalResources = document.images.length + document.styleSheets.length + document.scripts.length;
  }
  function trackResourceLoading() {
    const checkResourcesLoaded = () => {
      loadedResources++;
      updateProgress();
    };
    const trackResource = resource => {
      resource.onload = checkResourcesLoaded;
      resource.onerror = checkResourcesLoaded;
    };
    [...document.images, ...document.styleSheets, ...document.scripts].forEach(trackResource);
  }
  countResources();
  trackResourceLoading();
  window.addEventListener("load", () => {
    loadedResources = totalResources;
    updateProgress();
    if (loadedResources === totalResources) {
      setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
      }, 1000);
    }
  });
  const footerTitle = document.querySelector(".footer__title");
  function changeFooterTitle() {
    if (innerWidth <= 1399) {
      footerTitle.innerHTML = "Get in touch";
    }
  }
  changeFooterTitle();
  window.addEventListener("resize", () => {
    changeFooterTitle();
    changeTelMail();
    changeTitleModal();
    changeThumbInputModal();
  });
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
  const tel = document.querySelectorAll(".space__tel");
  const mail = document.querySelectorAll(".space__mail");
  function changeTelMail() {
    if (innerWidth <= 1399) {
      tel.forEach(elem => {
        elem.innerHTML = "+380935705222";
        elem.href = "tel:+380935705222";
      });
      mail.forEach(elem => {
        elem.innerHTML = "info@hi-light.pl";
        elem.href = "mailto:info@hi-light.pl";
      });
    } else {
      tel.forEach(elem => {
        elem.innerHTML = "+380983527547";
        elem.href = "tel:+380983527547";
      });
      mail.forEach(elem => {
        elem.innerHTML = "E: info@gmail.com";
        elem.href = "mailto:info@gmail.com";
      });
    }
  }
  changeTelMail();
  const titleModal = document.querySelector(".modal__form-title");
  function changeTitleModal() {
    window.innerWidth <= 1399 ? titleModal.innerHTML = "Make request" : titleModal.innerHTML = "Calculate the cost of work";
  }
  changeTitleModal();
  function changeThumbInputModal() {
    if (window.innerWidth < 1024) {
      const sliderOne = document.querySelector(".modal__form-slider-one .modal__form-slider");
      const sliderTwo = document.querySelector(".modal__form-slider-two .modal__form-slider");
      function toggleSliders(event) {
        console.log(1);
        if (event.target === sliderOne) {
          sliderTwo.classList.add("hidden");
          sliderOne.classList.remove("hidden");
        } else if (event.target === sliderTwo) {
          sliderOne.classList.add("hidden");
          sliderTwo.classList.remove("hidden");
        }
      }
      sliderOne.addEventListener("pointerdown", toggleSliders);
      sliderTwo.addEventListener("pointerdown", toggleSliders);
    }
  }
  changeThumbInputModal();
});

/***/ })

/******/ });
//# sourceMappingURL=contacts.js.map