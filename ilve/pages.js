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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/pages.js":
/*!*************************!*\
  !*** ./src/js/pages.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import preload from "./modules/preload";
// import hamburger from "./modules/hamburger";
// import showStyles from "./modules/styles";
// import showProducts from "./modules/products";
// import showSmallMenu from "./modules/smallMenu";
// import showTopMenuAndArrows from "./modules/showTopMenu";
// import { stylesImg, stylesLink } from "./services/variables";
window.addEventListener("DOMContentLoaded", () => {
  const preload = document.querySelector(".overlay");
  function ready() {
    document.querySelector("body").removeAttribute("style");
    preload.remove();
  }
  window.addEventListener("load", ready);
  window.addEventListener("scroll", showTopMenu);
  const styles = document.querySelector(".styles");
  const btnStyles = document.querySelector(".btn__styles");
  styles.addEventListener("click", e => {
    if (!e.target.classList.contains("styles__link") && !e.target.classList.contains("styles__title")) {
      styles.classList.remove("style__show");
    }
  });
  btnStyles.addEventListener("click", () => {
    styles.classList.add("style__show");
  });
  const stylesLink = document.querySelectorAll(".styles__link");
  const stylesImg = document.querySelectorAll(".styles__img");
  stylesLink.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      stylesImg[i].classList.add("show");
    });
    item.addEventListener("mouseout", () => {
      stylesImg[i].classList.remove("show");
    });
  });
  const products = document.querySelector(".products");
  products.addEventListener("click", () => {
    menu.classList.toggle("menu__full_white");
    menu.classList.toggle("menu__forbigproduct");
    menuProducts.classList.toggle("show");
    body.classList.toggle("overflow_hidden");
  });
  let lastScrollTop = 0;
  function showTopMenu() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      menu.classList.add("hide__menu");
    } else {
      menu.classList.remove("hide__menu");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    if (window.scrollY > 500) {
      menu.classList.add("white__menu");
    } else {
      menu.classList.remove("white__menu");
    }
  }
  const hamburger = document.querySelector(".hamburger");
  const menuBig = document.querySelector(".menu__big");
  const menuList = document.querySelector(".menu__list");
  const menuProducts = document.querySelector(".menu__bigproducts");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const menuSubtitleBlock = document.querySelectorAll(".menu__subtitle_block");
  hamburger.addEventListener("click", () => {
    if (menu.classList.contains("menu__full_white") && !menu.classList.contains("menu__forbigproduct")) {
      window.addEventListener("scroll", showTopMenu);
      menuBig.classList.toggle("menu__big_show");
      menu.classList.toggle("menu__full_white");
      menuList.classList.toggle("menu__list_hide");
      menuProducts.classList.toggle("menu__display_none");
      menu.classList.remove("overflow_scroll");
      if (window.innerWidth <= 575) {
        menuSubtitleBlock.forEach(block => {
          block.classList.remove("show");
          block.classList.remove("height");
        });
      }
    } else if (menu.classList.contains("menu__full_white") && menu.classList.contains("menu__forbigproduct")) {
      menu.classList.toggle("menu__full_white");
      menu.classList.toggle("menu__forbigproduct");
      menuProducts.classList.toggle("show");
      body.classList.toggle("overflow_hidden");
    } else {
      removeEventListener("scroll", showTopMenu);
      menuBig.classList.toggle("menu__big_show");
      menu.classList.toggle("menu__full_white");
      menuList.classList.toggle("menu__list_hide");
      menuProducts.classList.toggle("menu__display_none");
    }
  });
  const menuSubtitle = document.querySelectorAll(".menu__subtitle");
  menuSubtitle.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 575) {
        if (menuSubtitleBlock[i].classList.contains("show")) {
          menuSubtitleBlock[i].classList.remove("show");
          menuSubtitleBlock[i].classList.remove("height");
        } else {
          menuSubtitleBlock.forEach(block => {
            block.classList.remove("show");
            block.classList.remove("height");
          });
          menuSubtitleBlock[i].classList.add("show");
          menuSubtitleBlock[i].classList.add("height");
        }
        menu.classList.add("overflow_scroll");
      }
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=pages.js.map