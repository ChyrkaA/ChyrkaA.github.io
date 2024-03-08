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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_preload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/preload */ "./src/js/modules/preload.js");
/* harmony import */ var _services_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/observer */ "./src/js/services/observer.js");
/* harmony import */ var _modules_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/styles */ "./src/js/modules/styles.js");
/* harmony import */ var _modules_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/products */ "./src/js/modules/products.js");
/* harmony import */ var _modules_smallMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/smallMenu */ "./src/js/modules/smallMenu.js");
/* harmony import */ var _modules_showTopMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showTopMenu */ "./src/js/modules/showTopMenu.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _services_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/variables */ "./src/js/services/variables.js");










window.addEventListener("DOMContentLoaded", () => {
  Object(_modules_preload__WEBPACK_IMPORTED_MODULE_0__["default"])(".overlay", "body", "style");
  Object(_services_observer__WEBPACK_IMPORTED_MODULE_1__["default"])("Delay", ".animate");
  window.addEventListener("scroll", _modules_showTopMenu__WEBPACK_IMPORTED_MODULE_5__["default"]);
  window.addEventListener("click", e => {
    // if (e.target.closest(".hamburger")) {
    // 	hamburger(
    // 		"menu__full_white",
    // 		"menu__forbigproduct",
    // 		"menu__big_show",
    // 		"menu__list_hide",
    // 		"menu__display_none",
    // 		"overflow_scroll",
    // 		"show",
    // 		"height"
    // 	);
    // } else
    if (e.target.classList.contains("styles") || e.target.closest(".btn__styles")) {
      Object(_modules_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, ".btn__styles", "styles__link", "styles__title", "style__show");
    } else if (e.target.closest(".products")) {
      Object(_modules_products__WEBPACK_IMPORTED_MODULE_3__["default"])("menu__full_white", "menu__forbigproduct", "show", "overflow_hidden");
    } else if (e.target.closest(".menu__subtitle")) {
      Object(_modules_smallMenu__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, "show", "height", "overflow_scroll");
    }
  });
  _services_variables__WEBPACK_IMPORTED_MODULE_7__["stylesLink"].forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      _services_variables__WEBPACK_IMPORTED_MODULE_7__["stylesImg"][i].classList.add("show");
    });
    item.addEventListener("mouseout", () => {
      _services_variables__WEBPACK_IMPORTED_MODULE_7__["stylesImg"][i].classList.remove("show");
    });
  });
  const hamburger = document.querySelector(".hamburger");
  const menuBig = document.querySelector(".menu__big");
  const menuList = document.querySelector(".menu__list");
  const menuProducts = document.querySelector(".menu__bigproducts");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
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
});

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showTopMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTopMenu */ "./src/js/modules/showTopMenu.js");
/* harmony import */ var _services_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables */ "./src/js/services/variables.js");


function hamburger(menuFullWhite, menuForBigProduct, showBigMenu, hideMenuList, menuDisplayNone, overflowScroll, show, menuHeight) {
  if (_services_variables__WEBPACK_IMPORTED_MODULE_1__["menu"].classList.contains(menuFullWhite) && !_services_variables__WEBPACK_IMPORTED_MODULE_1__["menu"].classList.contains(menuForBigProduct)) {
    window.addEventListener("scroll", _showTopMenu__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuBig"].classList.toggle(showBigMenu);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menu"].classList.toggle(menuFullWhite);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuList"].classList.toggle(hideMenuList);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuProducts"].classList.toggle(menuDisplayNone);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menu"].classList.remove(overflowScroll);
    if (window.innerWidth <= 575) {
      _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuSubtitleBlock"].forEach(block => {
        block.classList.remove(show);
        block.classList.remove(menuHeight);
      });
    }
  } else if (_services_variables__WEBPACK_IMPORTED_MODULE_1__["menu"].classList.contains(menuFullWhite) && _services_variables__WEBPACK_IMPORTED_MODULE_1__["menu"].classList.contains(menuForBigProduct)) {
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menu"].classList.toggle(menuFullWhite);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menu"].classList.toggle(menuForBigProduct);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuProducts"].classList.toggle(show);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["body"].classList.toggle(overflowScroll);
  } else {
    removeEventListener("scroll", _showTopMenu__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuBig"].classList.toggle(showBigMenu);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menu"].classList.toggle(menuFullWhite);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuList"].classList.toggle(hideMenuList);
    _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuProducts"].classList.toggle(menuDisplayNone);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/preload.js":
/*!***********************************!*\
  !*** ./src/js/modules/preload.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function preload(overlay, body, style) {
  function ready() {
    document.querySelector(body).removeAttribute(style);
    document.querySelector(overlay).remove();
  }
  window.addEventListener("load", ready);
}
/* harmony default export */ __webpack_exports__["default"] = (preload);

/***/ }),

/***/ "./src/js/modules/products.js":
/*!************************************!*\
  !*** ./src/js/modules/products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/variables */ "./src/js/services/variables.js");

function showProducts(menuFullWhite, menuForBigProduct, menuShow, overflowHidden) {
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.toggle(menuFullWhite);
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.toggle(menuForBigProduct);
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["menuProducts"].classList.toggle(menuShow);
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["body"].classList.toggle(overflowHidden);
}
/* harmony default export */ __webpack_exports__["default"] = (showProducts);

/***/ }),

/***/ "./src/js/modules/showTopMenu.js":
/*!***************************************!*\
  !*** ./src/js/modules/showTopMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_scrollAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/scrollAction */ "./src/js/services/scrollAction.js");

function showTopMenuAndArrows() {
  Object(_services_scrollAction__WEBPACK_IMPORTED_MODULE_0__["default"])("hide__menu", "white__menu");
}
/* harmony default export */ __webpack_exports__["default"] = (showTopMenuAndArrows);

/***/ }),

/***/ "./src/js/modules/smallMenu.js":
/*!*************************************!*\
  !*** ./src/js/modules/smallMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/variables */ "./src/js/services/variables.js");

function showSmallMenu(e, smallMenuShow, smallMenuHeight, overflowMenuScroll) {
  if (window.innerWidth <= 575) {
    if (e.nextSibling.classList.contains(smallMenuShow)) {
      e.nextSibling.classList.remove(smallMenuShow);
      e.nextSibling.classList.remove(smallMenuHeight);
    } else {
      _services_variables__WEBPACK_IMPORTED_MODULE_0__["menuSubtitleBlock"].forEach(block => {
        block.classList.remove(smallMenuShow);
        block.classList.remove(smallMenuHeight);
      });
      e.nextSibling.classList.add(smallMenuShow);
      e.nextSibling.classList.add(smallMenuHeight);
    }
    _services_variables__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.add(overflowMenuScroll);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (showSmallMenu);

/***/ }),

/***/ "./src/js/modules/styles.js":
/*!**********************************!*\
  !*** ./src/js/modules/styles.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/variables */ "./src/js/services/variables.js");

function showStyles(e, btnStyles, stylesLink, stylesTitle, stylesShow) {
  if (!e.closest(btnStyles) && !e.classList.contains(stylesLink) && !e.classList.contains(stylesTitle)) {
    _services_variables__WEBPACK_IMPORTED_MODULE_0__["styles"].classList.remove(stylesShow);
  } else if (e.closest(btnStyles)) {
    _services_variables__WEBPACK_IMPORTED_MODULE_0__["styles"].classList.add(stylesShow);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (showStyles);

/***/ }),

/***/ "./src/js/services/fadeInOut.js":
/*!**************************************!*\
  !*** ./src/js/services/fadeInOut.js ***!
  \**************************************/
/*! exports provided: fadeIn, fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
const fadeIn = (el, timeout, opacity, visibility, display) => {
  el.style.opacity = opacity || 1;
  el.style.display = display || "block";
  el.style.visibility = visibility || "visible";
  el.style.transition = `all ${timeout}ms`;
};
const fadeOut = (el, timeout, opacity, visibility) => {
  el.style.opacity = opacity || 0;
  el.style.visibility = visibility || "hidden";
  el.style.transition = `all ${timeout}ms`;
};


/***/ }),

/***/ "./src/js/services/observer.js":
/*!*************************************!*\
  !*** ./src/js/services/observer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function observer(delay, animate) {
  function onDisplay(entry) {
    entry.forEach(function (change) {
      if (change.isIntersecting) {
        change.target.classList.add(delay);
      } else {
        change.target.classList.remove(delay);
      }
    });
  }
  const elements = document.querySelectorAll(animate);
  const options = {
    threshold: [0.7]
  };
  const observer = new IntersectionObserver(onDisplay, options);
  for (let elm of elements) {
    observer.observe(elm);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (observer);

/***/ }),

/***/ "./src/js/services/scrollAction.js":
/*!*****************************************!*\
  !*** ./src/js/services/scrollAction.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/services/variables.js");
/* harmony import */ var _fadeInOut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fadeInOut */ "./src/js/services/fadeInOut.js");


let lastScrollTop = 0;
function scrollAction(menuAction, menuColor) {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollTop > lastScrollTop ? _variables__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.add(menuAction) : _variables__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.remove(menuAction);
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  window.scrollY > 500 ? _variables__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.add(menuColor) : _variables__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.remove(menuColor);
  if (_variables__WEBPACK_IMPORTED_MODULE_0__["arrows"]) {
    window.scrollY >= 300 ? Object(_fadeInOut__WEBPACK_IMPORTED_MODULE_1__["fadeOut"])(_variables__WEBPACK_IMPORTED_MODULE_0__["arrows"], 1000) : Object(_fadeInOut__WEBPACK_IMPORTED_MODULE_1__["fadeIn"])(_variables__WEBPACK_IMPORTED_MODULE_0__["arrows"], 1000, 1, "visible", "flex");
  }
}
/* harmony default export */ __webpack_exports__["default"] = (scrollAction);

/***/ }),

/***/ "./src/js/services/variables.js":
/*!**************************************!*\
  !*** ./src/js/services/variables.js ***!
  \**************************************/
/*! exports provided: menu, menuBig, menuList, menuProducts, body, menuSubtitleBlock, stylesLink, stylesImg, overlay, styles, arrows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuBig", function() { return menuBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuList", function() { return menuList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuProducts", function() { return menuProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuSubtitleBlock", function() { return menuSubtitleBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesLink", function() { return stylesLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesImg", function() { return stylesImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlay", function() { return overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrows", function() { return arrows; });
const menu = document.querySelector(".menu");
const menuBig = document.querySelector(".menu__big");
const menuList = document.querySelector(".menu__list");
const menuProducts = document.querySelector(".menu__bigproducts");
const body = document.querySelector("body");
const menuSubtitleBlock = document.querySelectorAll(".menu__subtitle_block");
const stylesLink = document.querySelectorAll(".styles__link");
const stylesImg = document.querySelectorAll(".styles__img");
const overlay = document.querySelector(".overlay");
const styles = document.querySelector(".styles");
const arrows = document.querySelector(".arrows");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map