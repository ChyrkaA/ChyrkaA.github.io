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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/404.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/404.js":
/*!***********************!*\
  !*** ./src/js/404.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', () => {
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
  const body = document.querySelector("body");
  const modalClose = document.querySelector(".modal__close");
  const modal = document.querySelector(".modal");
  const hamburger = document.querySelector(".hamburger");
  const bigMenu = document.querySelector(".menu__big-menu");
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const menu = document.querySelector(".menu");
  window.addEventListener("scroll", () => {
    window.scrollY >= 400 ? menu.style.background = "rgba(255, 255, 255, 0.8)" : menu.style.background = "";
  });
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
    menu.classList.toggle("menu_modifikator");
    menu.style.background === "transparent" ? menu.style.background = "rgba(255, 255, 255, 0.8)" : menu.style.background = "transparent";
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
  window.addEventListener("resize", () => {
    changeLogo();
  });
  const logoMenu = document.querySelector(".menu__left-logo");
  function changeLogo() {
    if (window.innerWidth > 1399) {
      logoMenu.innerHTML = "HILIGHT";
    } else {
      logoMenu.innerHTML = "LOGO";
    }
  }
  changeLogo();
});

/***/ })

/******/ });
//# sourceMappingURL=404.js.map