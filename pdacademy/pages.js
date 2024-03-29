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

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function menuBlock(trigger, menuLogo, bigLogo, wrapper, position, hamburger, hamburgerActive, sideMenu, menuActive, overlay, overlayActive, hamburgerLogo, hamburgerLogoActive) {
  const logo = document.querySelector(menuLogo);
  const menuWrapper = document.querySelector(wrapper);
  const hmb = document.querySelector(hamburger);
  const sMenu = document.querySelector(sideMenu);
  const overlayMenu = document.querySelector(overlay);
  const hmbLogo = document.querySelector(hamburgerLogo);
  function actionClass(action) {
    hmb.classList[action](hamburgerActive);
    sMenu.classList[action](menuActive);
    overlayMenu.classList[action](overlayActive);
    hmbLogo.classList[action](hamburgerLogoActive);
  }
  document.body.addEventListener('click', e => {
    if (e.target.closest(trigger)) {
      const menuBtn = e.target.closest(trigger);
      if (hmb.classList.contains(hamburgerActive) && sMenu.classList.contains(menuActive)) {
        actionClass('remove');
      }
      const rect = menuBtn.getBoundingClientRect();
      let circle = document.createElement('div');
      circle.classList.add('click');
      circle.style.left = e.clientX - rect.left + 'px';
      circle.style.top = e.clientY - rect.top + 'px';
      menuBtn.appendChild(circle);
      setTimeout(() => {
        circle.remove();
      }, 1000);
    } else if (e.target.closest(overlay)) {
      actionClass('remove');
    } else if (e.target.closest(hamburger)) {
      actionClass('toggle');
    }
  });

  // menuWrapper.addEventListener('click', (e) => {
  //     const menuBtn = e.target.closest(trigger);

  //     if (menuBtn) {
  //         if (hmb.classList.contains(hamburgerActive) && sMenu.classList.contains(menuActive)) {
  //             actionClass('remove');
  //         }
  //         const rect = menuBtn.getBoundingClientRect();

  //         let circle = document.createElement('div');
  //         circle.classList.add('click');
  //         circle.style.left = (e.clientX - rect.left) + 'px';
  //         circle.style.top = (e.clientY - rect.top) + 'px';
  //         menuBtn.appendChild(circle);

  //         setTimeout(() => {
  //             circle.remove()
  //         }, 1000);
  //     }
  // });

  // overlayMenu.addEventListener('click', () => {
  //     actionClass('remove');
  // })

  window.addEventListener('scroll', () => {
    if (window.innerWidth >= 768) {
      const isScrolled = scrollY >= 200;
      logo.classList.toggle(bigLogo, !isScrolled);
      menuWrapper.classList.toggle(position, !isScrolled);
    } else {
      logo.classList.add(bigLogo);
      menuWrapper.classList.add(position);
    }
  });

  // hmb.addEventListener('click', () => {
  //     actionClass('toggle');
  // })
}

/* harmony default export */ __webpack_exports__["default"] = (menuBlock);

/***/ }),

/***/ "./src/js/modules/oneCurs.js":
/*!***********************************!*\
  !*** ./src/js/modules/oneCurs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function oneCursBlock(overlayBlock, overlayActive, imgBlock, close, bigImgBlock) {
  const overlay = document.querySelector(overlayBlock);
  const bigImg = document.querySelector(bigImgBlock);
  function closeOverlay() {
    bigImg.setAttribute('src', '');
    overlay.classList.remove(overlayActive);
    bigImg.removeEventListener('load', hideLoadingMessage);
  }
  function showLoadingMessage() {
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Завантаження фото...';
    loadingMessage.classList.add('loading-message');
    overlay.appendChild(loadingMessage);
  }
  function hideLoadingMessage() {
    const loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
      loadingMessage.remove();
    }
  }
  document.body.addEventListener('click', e => {
    if (e.target.closest(imgBlock)) {
      showLoadingMessage();
      const img = e.target.closest(imgBlock);
      overlay.classList.add(overlayActive);
      const linkImg = img.getAttribute('src');
      const newLinkImg = linkImg.slice(0, -4) + '_big.jpg';
      bigImg.setAttribute('src', newLinkImg);
      bigImg.addEventListener('load', hideLoadingMessage);
    } else if (e.target.closest(close)) {
      closeOverlay();
    } else if (e.target.classList.contains(overlayBlock.slice(1))) {
      closeOverlay();
    }
  });
  const contentWrapper = document.querySelector('.curs__content_wrapper');
  const imgWrapper = document.querySelector('.curs__img_wrapper');
  const imgHeight = window.getComputedStyle(imgWrapper, null).getPropertyValue('height');
  const contentHeight = window.getComputedStyle(contentWrapper, null).getPropertyValue('height');
  if (+contentHeight.slice(0, -2) > +imgHeight.slice(0, -2)) {
    imgWrapper.style.minHeight = contentHeight;
  } else if (+contentHeight.slice(0, -2) < +imgHeight.slice(0, -2)) {
    contentWrapper.style.minHeight = imgHeight;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (oneCursBlock);

/***/ }),

/***/ "./src/js/modules/pageUp.js":
/*!**********************************!*\
  !*** ./src/js/modules/pageUp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_constFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/constFunctions */ "./src/js/services/constFunctions.js");

function pageUp(trigger) {
  const pageUp = document.querySelector(trigger);
  window.addEventListener('scroll', () => {
    if (scrollY >= 800) {
      Object(_services_constFunctions__WEBPACK_IMPORTED_MODULE_0__["fadeIn"])(pageUp, 1000, 0.7);
    } else {
      Object(_services_constFunctions__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(pageUp, 1000, 0);
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (pageUp);

/***/ }),

/***/ "./src/js/modules/promo.js":
/*!*********************************!*\
  !*** ./src/js/modules/promo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_constFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/constFunctions */ "./src/js/services/constFunctions.js");

function promoBlock(trigger) {
  Object(_services_constFunctions__WEBPACK_IMPORTED_MODULE_0__["videoHeight"])(trigger);
  window.addEventListener('resize', () => {
    Object(_services_constFunctions__WEBPACK_IMPORTED_MODULE_0__["videoHeight"])(trigger);
  });
}
/* harmony default export */ __webpack_exports__["default"] = (promoBlock);

/***/ }),

/***/ "./src/js/pages.js":
/*!*************************!*\
  !*** ./src/js/pages.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_pageUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageUp */ "./src/js/modules/pageUp.js");
/* harmony import */ var _modules_promo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/promo */ "./src/js/modules/promo.js");
/* harmony import */ var _modules_oneCurs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/oneCurs */ "./src/js/modules/oneCurs.js");






window.addEventListener('DOMContentLoaded', () => {
  const preload = document.querySelector('.preload');
  function ready() {
    document.querySelector('body').removeAttribute('style');
    preload.remove();
  }
  window.addEventListener("load", ready);
  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.menu__item_link', '.menu__logo', 'bigLogo', '.menu__wrapper', 'flex-end', '.hamburger', 'hamburger__active', '.menu__wrapper', 'menu__active', '.hamburger__overlay', 'hamburger__overlay__active', '.hamburger__logo', 'hamburger__logo_active');
  Object(_modules_oneCurs__WEBPACK_IMPORTED_MODULE_3__["default"])('.curs__overlay', 'curs__overlay_active', '.curs__img', '.curs__overlay_close', '.curs__overlay_img');
  Object(_modules_pageUp__WEBPACK_IMPORTED_MODULE_1__["default"])('.pageup');
  Object(_modules_promo__WEBPACK_IMPORTED_MODULE_2__["default"])('.curs__video');
});

/***/ }),

/***/ "./src/js/services/constFunctions.js":
/*!*******************************************!*\
  !*** ./src/js/services/constFunctions.js ***!
  \*******************************************/
/*! exports provided: fadeIn, fadeOut, videoHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoHeight", function() { return videoHeight; });
const fadeIn = (el, timeout, opacity, visibility, display) => {
  el.style.opacity = opacity || 1;
  el.style.visibility = visibility || 'visible';
  el.style.display = display || 'block';
  el.style.transition = `all ${timeout}ms`;
};
const fadeOut = (el, timeout, opacity, visibility) => {
  el.style.opacity = opacity || 0;
  el.style.visibility = visibility || 'hidden';
  el.style.transition = `all ${timeout}ms`;
};
function videoHeight(classTrigger) {
  const sectionVideo = document.querySelector(classTrigger);
  if (sectionVideo) {
    const videoBlock = sectionVideo.querySelector('iframe');
    const widthVideoBlock = window.getComputedStyle(videoBlock, null).getPropertyValue('width');
    const heightVideoBlock = Math.round(+widthVideoBlock.slice(0, -2) * 0.5625);
    sectionVideo.style.height = `${heightVideoBlock}px`;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=pages.js.map