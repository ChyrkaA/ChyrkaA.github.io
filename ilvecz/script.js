/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/hamburger.js"
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showTopMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTopMenu.js */ "./src/js/modules/showTopMenu.js");
/* harmony import */ var _services_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.js */ "./src/js/services/variables.js");


function hamburger(menuFullWhite, menuForBigProduct, showBigMenu, hideMenuList, menuDisplayNone, overflowScroll, overflowHidden, show, menuHeight) {
  if (_services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.contains(menuFullWhite) && !_services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.contains(menuForBigProduct)) {
    console.log(1);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuSecondHalf.removeAttribute("style");
    window.addEventListener("scroll", _showTopMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuBig.classList.toggle(showBigMenu);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.toggle(menuFullWhite);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuList.classList.toggle(hideMenuList);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuProducts.classList.toggle(menuDisplayNone);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.remove(overflowScroll);
    if (window.innerWidth <= 575) {
      _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuSubtitleBlock.forEach(block => {
        block.classList.remove(show);
        block.classList.remove(menuHeight);
      });
    }
  } else if (_services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.contains(menuFullWhite) && _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.contains(menuForBigProduct)) {
    console.log(5);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.toggle(menuFullWhite);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.toggle(menuForBigProduct);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuProducts.classList.toggle(show);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.body.classList.toggle(overflowHidden);
  } else {
    console.log(3);
    removeEventListener("scroll", _showTopMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuBig.classList.toggle(showBigMenu);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.toggle(menuFullWhite);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuList.classList.toggle(hideMenuList);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuProducts.classList.toggle(menuDisplayNone);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuSecondHalf.style.pointerEvents = "all";
    if (window.innerWidth <= 575) {
      _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuSubtitleBlock.forEach(block => {
        block.classList.remove(show);
        block.classList.remove(menuHeight);
      });
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ },

/***/ "./src/js/modules/preload.js"
/*!***********************************!*\
  !*** ./src/js/modules/preload.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function preload(overlay, body, style) {
  function ready() {
    document.querySelector(body).removeAttribute(style);
    document.querySelector(overlay).remove();
  }
  window.addEventListener("load", ready);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preload);

/***/ },

/***/ "./src/js/modules/products.js"
/*!************************************!*\
  !*** ./src/js/modules/products.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/variables.js */ "./src/js/services/variables.js");

function showProducts(menuFullWhite, menuForBigProduct, menuShow, overflowHidden) {
  _services_variables_js__WEBPACK_IMPORTED_MODULE_0__.menu.classList.toggle(menuFullWhite);
  _services_variables_js__WEBPACK_IMPORTED_MODULE_0__.menu.classList.toggle(menuForBigProduct);
  _services_variables_js__WEBPACK_IMPORTED_MODULE_0__.menuProducts.classList.toggle(menuShow);
  _services_variables_js__WEBPACK_IMPORTED_MODULE_0__.body.classList.toggle(overflowHidden);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProducts);

/***/ },

/***/ "./src/js/modules/showTopMenu.js"
/*!***************************************!*\
  !*** ./src/js/modules/showTopMenu.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_scrollAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/scrollAction.js */ "./src/js/services/scrollAction.js");

function showTopMenuAndArrows() {
  (0,_services_scrollAction_js__WEBPACK_IMPORTED_MODULE_0__["default"])("hide__menu", "white__menu");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTopMenuAndArrows);

/***/ },

/***/ "./src/js/modules/smallMenu.js"
/*!*************************************!*\
  !*** ./src/js/modules/smallMenu.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/variables.js */ "./src/js/services/variables.js");

function showSmallMenu(e, smallMenuShow, smallMenuHeight, overflowMenuScroll) {
  if (window.innerWidth <= 575) {
    if (e.nextSibling.classList.contains(smallMenuShow)) {
      e.nextSibling.classList.remove(smallMenuShow);
      e.nextSibling.classList.remove(smallMenuHeight);
    } else {
      _services_variables_js__WEBPACK_IMPORTED_MODULE_0__.menuSubtitleBlock.forEach(block => {
        block.classList.remove(smallMenuShow);
        block.classList.remove(smallMenuHeight);
      });
      e.nextSibling.classList.add(smallMenuShow);
      e.nextSibling.classList.add(smallMenuHeight);
    }
    _services_variables_js__WEBPACK_IMPORTED_MODULE_0__.menu.classList.add(overflowMenuScroll);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showSmallMenu);

/***/ },

/***/ "./src/js/modules/styles.js"
/*!**********************************!*\
  !*** ./src/js/modules/styles.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/variables.js */ "./src/js/services/variables.js");

function showStyles(e, btnStyles, stylesLink, stylesTitle, stylesShow) {
  if (!e.closest(btnStyles) && !e.classList.contains(stylesLink) && !e.classList.contains(stylesTitle)) {
    _services_variables_js__WEBPACK_IMPORTED_MODULE_0__.styles.classList.remove(stylesShow);
  } else if (e.closest(btnStyles)) {
    _services_variables_js__WEBPACK_IMPORTED_MODULE_0__.styles.classList.add(stylesShow);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showStyles);

/***/ },

/***/ "./src/js/services/fadeInOut.js"
/*!**************************************!*\
  !*** ./src/js/services/fadeInOut.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeIn: () => (/* binding */ fadeIn),
/* harmony export */   fadeOut: () => (/* binding */ fadeOut)
/* harmony export */ });
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


/***/ },

/***/ "./src/js/services/observer.js"
/*!*************************************!*\
  !*** ./src/js/services/observer.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observer);

/***/ },

/***/ "./src/js/services/scrollAction.js"
/*!*****************************************!*\
  !*** ./src/js/services/scrollAction.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/js/services/variables.js");
/* harmony import */ var _fadeInOut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fadeInOut.js */ "./src/js/services/fadeInOut.js");


let lastScrollTop = 0;
function scrollAction(menuAction, menuColor) {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollTop > lastScrollTop ? _variables_js__WEBPACK_IMPORTED_MODULE_0__.menu.classList.add(menuAction) : _variables_js__WEBPACK_IMPORTED_MODULE_0__.menu.classList.remove(menuAction);
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  window.scrollY > 500 ? _variables_js__WEBPACK_IMPORTED_MODULE_0__.menu.classList.add(menuColor) : _variables_js__WEBPACK_IMPORTED_MODULE_0__.menu.classList.remove(menuColor);
  if (_variables_js__WEBPACK_IMPORTED_MODULE_0__.arrows) {
    window.scrollY >= 300 ? (0,_fadeInOut_js__WEBPACK_IMPORTED_MODULE_1__.fadeOut)(_variables_js__WEBPACK_IMPORTED_MODULE_0__.arrows, 1000) : (0,_fadeInOut_js__WEBPACK_IMPORTED_MODULE_1__.fadeIn)(_variables_js__WEBPACK_IMPORTED_MODULE_0__.arrows, 1000, 1, "visible", "flex");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollAction);

/***/ },

/***/ "./src/js/services/variables.js"
/*!**************************************!*\
  !*** ./src/js/services/variables.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrows: () => (/* binding */ arrows),
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   menu: () => (/* binding */ menu),
/* harmony export */   menuBig: () => (/* binding */ menuBig),
/* harmony export */   menuList: () => (/* binding */ menuList),
/* harmony export */   menuProducts: () => (/* binding */ menuProducts),
/* harmony export */   menuSecondHalf: () => (/* binding */ menuSecondHalf),
/* harmony export */   menuSubtitleBlock: () => (/* binding */ menuSubtitleBlock),
/* harmony export */   modal: () => (/* binding */ modal),
/* harmony export */   modalWrapper: () => (/* binding */ modalWrapper),
/* harmony export */   overlay: () => (/* binding */ overlay),
/* harmony export */   styles: () => (/* binding */ styles),
/* harmony export */   stylesImg: () => (/* binding */ stylesImg),
/* harmony export */   stylesLink: () => (/* binding */ stylesLink)
/* harmony export */ });
const menu = document.querySelector(".menu");
const menuBig = document.querySelector(".menu__big");
const menuList = document.querySelector(".menu__list");
const menuProducts = document.querySelector(".menu__bigproducts");
const body = document.querySelector("body");
const menuSecondHalf = document.querySelector(".menu__secondHalf");
const menuSubtitleBlock = document.querySelectorAll(".menu__subtitle_block");
const stylesLink = document.querySelectorAll(".styles__link");
const stylesImg = document.querySelectorAll(".styles__img");
const overlay = document.querySelector(".overlay");
const styles = document.querySelector(".styles");
const arrows = document.querySelector(".arrows");
const modal = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal__wrapper");


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_preload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/preload.js */ "./src/js/modules/preload.js");
/* harmony import */ var _services_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/observer.js */ "./src/js/services/observer.js");
/* harmony import */ var _modules_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/styles.js */ "./src/js/modules/styles.js");
/* harmony import */ var _modules_products_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/products.js */ "./src/js/modules/products.js");
/* harmony import */ var _modules_smallMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/smallMenu.js */ "./src/js/modules/smallMenu.js");
/* harmony import */ var _modules_showTopMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showTopMenu.js */ "./src/js/modules/showTopMenu.js");
/* harmony import */ var _modules_hamburger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/hamburger.js */ "./src/js/modules/hamburger.js");
/* harmony import */ var _services_variables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/variables.js */ "./src/js/services/variables.js");










window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_preload_js__WEBPACK_IMPORTED_MODULE_0__["default"])(".overlay", "body", "style");
  (0,_services_observer_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Delay", ".animate");
  listener("pointerdown");

  // if (window.innerWidth >= 992) {
  // 	listener("click");
  // } else {
  // 	listener("touchend");
  // }

  window.addEventListener("scroll", _modules_showTopMenu_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  function listener(action) {
    window.addEventListener(action, e => {
      if (e.target.classList.contains("style__show") || e.target.closest(".btn__styles")) {
        (0,_modules_styles_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, ".btn__styles", "styles__link", "styles__title", "style__show");
      } else if (e.target.closest(".products")) {
        (0,_modules_products_js__WEBPACK_IMPORTED_MODULE_3__["default"])("menu__full_white", "menu__forbigproduct", "show", "overflow_hidden");
      } else if (e.target.closest(".menu__subtitle")) {
        (0,_modules_smallMenu_js__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, "show", "height", "overflow_scroll");
      } else if (e.target.closest(".hamburger") || e.target.classList.contains(".hamburger")) {
        (0,_modules_hamburger_js__WEBPACK_IMPORTED_MODULE_6__["default"])("menu__full_white", "menu__forbigproduct", "menu__big_show", "menu__list_hide", "menu__display_none", "overflow_scroll", "overflow_hidden", "show", "height");
      } else if (e.target.closest(".modal__close")) {
        _services_variables_js__WEBPACK_IMPORTED_MODULE_7__.modal.classList.remove("show__modal");
      }
    });
  }
  _services_variables_js__WEBPACK_IMPORTED_MODULE_7__.stylesLink.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      _services_variables_js__WEBPACK_IMPORTED_MODULE_7__.stylesImg[i].classList.add("show");
    });
    item.addEventListener("mouseout", () => {
      _services_variables_js__WEBPACK_IMPORTED_MODULE_7__.stylesImg[i].classList.remove("show");
    });
  });
  const form = document.querySelector(".footer__form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("mailer/smart.php", {
      method: "POST",
      body: new FormData(this)
    }).then(function (response) {
      if (response.ok) {
        form.querySelectorAll("input").forEach(input => {
          console.log(1);
          input.value = "";
        });
        form.reset();
      }
    }).catch(error => {
      console.log("Error:", error);
    });
    return false;
  });
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map