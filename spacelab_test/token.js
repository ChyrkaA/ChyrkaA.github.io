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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/token.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/token.js":
/*!*************************!*\
  !*** ./src/js/token.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const fileName = path.split("/").pop();
  if (fileName == "token.html") {
    console.log(fileName);
    const circle = document.querySelector(".diagram__circle");
    const img2 = document.querySelector(".diagram__img--2");
    circle.addEventListener("mouseenter", () => {
      img2.classList.add("active__visible");
    });
    circle.addEventListener("mouseleave", () => {
      img2.classList.remove("active__visible");
    });
  }
  if (fileName == "fund.html") {
    console.log(fileName);
    const footer = document.querySelector(".footer__modifikator");
    if (window.innerWidth < 576) {
      const blocks = document.querySelectorAll(".fundroad__block--text_header");
      const text = document.querySelectorAll(".fundroad__block--text_text");
      const questtitle = document.querySelectorAll(".questions__title");
      blocks.forEach(block => {
        if (block.textContent === "Ventures.") {
          block.textContent = "Grants.";
          return;
        }
        if (block.textContent === "Grants.") {
          block.textContent = "Ventures.";
        }
      });
      text.forEach(text => {
        if (text.textContent === "The unique idea will receive a grant and collaboration with the Finity Touch ecosystem.") {
          text.textContent = "Access to investmen opportunities with Finity Touch team";
          return;
        }
      });
      questtitle.forEach(text => {
        if (text.textContent === "How do I apply for consideration of my idea? ") {
          text.textContent = "What is Finity Touch?";
          return;
        } else if (text.textContent === "What size of investment can I get? ") {
          text.textContent = "Where can I buy a Finity token?";
          return;
        } else if (text.textContent === "How is the capital formed in your fund? ") {
          text.textContent = "Where can I buy a Finity token?";
          return;
        }
      });
      footer.style.marginTop = "30px";
    }
    if (window.innerWidth >= 576) {
      footer.style.borderTop = "unset";
    }
  }
  initSwiper();
  function initSwiper() {
    if (window.innerWidth < 768) {
      new Swiper(".token__container", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: false
      });
    }
  }
  window.addEventListener("resize", initSwiper);
});

/***/ })

/******/ });
//# sourceMappingURL=token.js.map