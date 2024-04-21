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

/***/ "./src/js/modules/bigImg.js":
/*!**********************************!*\
  !*** ./src/js/modules/bigImg.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/variables */ "./src/js/services/variables.js");

function bigImage(e) {
  const img = e.target.closest(".photo__img");
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["overlayBlock"].classList.add("photo__overlay_active");
  const linkImg = img.getAttribute("src");
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["bigImg"].setAttribute("src", linkImg);
}
/* harmony default export */ __webpack_exports__["default"] = (bigImage);

/***/ }),

/***/ "./src/js/modules/menuBig.js":
/*!***********************************!*\
  !*** ./src/js/modules/menuBig.js ***!
  \***********************************/
/*! exports provided: showBigMenu, hideBigMenu, hamburgerAct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBigMenu", function() { return showBigMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideBigMenu", function() { return hideBigMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburgerAct", function() { return hamburgerAct; });
/* harmony import */ var _services_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/scrolling */ "./src/js/services/scrolling.js");
/* harmony import */ var _services_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables */ "./src/js/services/variables.js");


function showBigMenu(top, action, transform) {
  _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuBig"].classList.add(top);
  window.removeEventListener(action, _services_scrolling__WEBPACK_IMPORTED_MODULE_0__["default"]);
  _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuTop"].classList.add(transform);
}
function hideBigMenu(top, action) {
  _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuBig"].classList.remove(top);
  if (window.innerWidth >= 991) {
    window.addEventListener(action, _services_scrolling__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}
function hamburgerAct(transform, hidden, cross) {
  _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuTopLine"].classList.toggle(transform);
  _services_variables__WEBPACK_IMPORTED_MODULE_1__["menuBigLogp"].classList.toggle(hidden);
  _services_variables__WEBPACK_IMPORTED_MODULE_1__["hamburger"].classList.toggle(cross);
}


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: modalOpen, modalClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOpen", function() { return modalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalClose", function() { return modalClose; });
/* harmony import */ var _services_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/variables */ "./src/js/services/variables.js");

function modalOpen(overlayModalActive, modalActive) {
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["overlayModal"].classList.add(overlayModalActive);
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["modalBig"].classList.add(modalActive);
}
function modalClose(overlayModalActive, modalActive) {
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["overlayModal"].classList.remove(overlayModalActive);
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["modalBig"].classList.remove(modalActive);
  _services_variables__WEBPACK_IMPORTED_MODULE_0__["modalMini"].classList.remove(modalActive);
}


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/createElement */ "./src/js/services/createElement.js");

const createSlide = letter => {
  const slide = Object(_services_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "brendy__slider_slide");
  const overlay = Object(_services_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "brendy__slider_slide-overlay");
  const overlayBlack = Object(_services_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "brendy__slider_slide-overlayBlack");
  const overlayBorder = Object(_services_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "brendy__slider_slide-border");
  const overlayBorderBox = Object(_services_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "brendy__slider_slide-border-box");
  const letterDiv = Object(_services_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "brendy__slider_slide-letter");
  letterDiv.textContent = letter;
  const letterSmallDiv = Object(_services_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "brendy__slider_slide-letterSmall");
  letterSmallDiv.textContent = letter;
  const img = Object(_services_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "brendy__slider_slide-bckg");
  img.src = `img/brendy/slider/${letter}.webp`;
  img.alt = "bckg";
  overlayBorder.appendChild(overlayBorderBox);
  slide.appendChild(letterDiv);
  slide.appendChild(overlayBlack);
  slide.appendChild(overlay);
  slide.appendChild(overlayBorder);
  slide.appendChild(letterSmallDiv);
  slide.appendChild(img);
  return slide;
};
const createSliderWithRange = (letters, startIndex, endIndex) => {
  const slide = Object(_services_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "brendy__slider_wrapper");
  for (let i = startIndex; i < endIndex; i++) {
    const letter = letters[i];
    const slideItem = createSlide(letter);
    slide.appendChild(slideItem);
  }
  return slide;
};
/* harmony default export */ __webpack_exports__["default"] = (createSliderWithRange);

/***/ }),

/***/ "./src/js/pages.js":
/*!*************************!*\
  !*** ./src/js/pages.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_mouseAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/mouseAction */ "./src/js/services/mouseAction.js");
/* harmony import */ var _services_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/observer */ "./src/js/services/observer.js");
/* harmony import */ var _services_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/forms */ "./src/js/services/forms.js");
/* harmony import */ var _services_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/scrolling */ "./src/js/services/scrolling.js");
/* harmony import */ var _modules_menuBig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menuBig */ "./src/js/modules/menuBig.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_loadData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/loadData */ "./src/js/services/loadData.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _services_filterData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/filterData */ "./src/js/services/filterData.js");
/* harmony import */ var _services_resize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/resize */ "./src/js/services/resize.js");
/* harmony import */ var _modules_bigImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/bigImg */ "./src/js/modules/bigImg.js");
/* harmony import */ var _services_variables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/variables */ "./src/js/services/variables.js");















window.addEventListener("DOMContentLoaded", () => {
  Object(_services_observer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_services_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  window.addEventListener("scroll", _services_scrolling__WEBPACK_IMPORTED_MODULE_3__["default"]);
  function eventListener(action) {
    window.addEventListener(action, e => {
      if (e.target.classList.contains("button")) {
        Object(_modules_modal__WEBPACK_IMPORTED_MODULE_5__["modalOpen"])("overlay-modal__active", "modal__active");
      } else if (e.target.classList.contains("modal__close") || e.target.classList.contains("overlay-modal")) {
        Object(_modules_modal__WEBPACK_IMPORTED_MODULE_5__["modalClose"])("overlay-modal__active", "modal__active");
      } else if (e.target.closest(".brendy__slider_slide")) {
        const parrent = e.target.closest(".brendy__slider_slide");
        const letterContent = parrent.querySelector(".brendy__slider_slide-letter").textContent;
        Object(_services_filterData__WEBPACK_IMPORTED_MODULE_8__["default"])(letterContent, _services_loadData__WEBPACK_IMPORTED_MODULE_6__["dataObj"]);
      } else if (e.target.closest(".button__Category") && innerWidth >= 768) {
        console.log(1);
        Object(_modules_menuBig__WEBPACK_IMPORTED_MODULE_4__["showBigMenu"])("top", "scroll", "transform");
      } else if (e.target.closest(".menuBig__close")) {
        Object(_modules_menuBig__WEBPACK_IMPORTED_MODULE_4__["hideBigMenu"])("top", "scroll");
      } else if (e.target.closest(".photo__img")) {
        Object(_modules_bigImg__WEBPACK_IMPORTED_MODULE_10__["default"])(e);
      } else if (e.target.closest(".photo__overlay_close")) {
        _services_variables__WEBPACK_IMPORTED_MODULE_11__["overlayBlock"].classList.remove("photo__overlay_active");
      } else if (e.target.classList.contains("photo__overlay")) {
        _services_variables__WEBPACK_IMPORTED_MODULE_11__["overlayBlock"].classList.remove("photo__overlay_active");
      } else if (e.target.closest(".hamburger")) {
        Object(_modules_menuBig__WEBPACK_IMPORTED_MODULE_4__["hamburgerAct"])("transform__translateX", "hidden__letter", "hamburger__cross");
      } else if (e.target.closest(".menuTop__items_link")) {
        Object(_modules_menuBig__WEBPACK_IMPORTED_MODULE_4__["hamburgerAct"])("transform__translateX", "hidden__letter", "hamburger__cross");
        if (e.target.closest(".button__Category")) {
          Object(_modules_menuBig__WEBPACK_IMPORTED_MODULE_4__["showBigMenu"])("top", "scroll", "transform");
        }
      }
    });
  }
  eventListener("click");
  eventListener("touchend");
  Object(_services_loadData__WEBPACK_IMPORTED_MODULE_6__["loadData"])("data.json");
  const letters = Array.from({
    length: 26
  }, (_, i) => String.fromCharCode(65 + i));
  const sliderItems = document.querySelectorAll(".itc-slider-item");
  sliderItems.forEach((item, i) => {
    let startIndex = i * 9;
    let endIndex = Math.min(startIndex + 9, letters.length);
    const slider = Object(_modules_slider__WEBPACK_IMPORTED_MODULE_7__["default"])(letters, startIndex, endIndex);
    item.appendChild(slider);
  });
  Object(_services_mouseAction__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelectorAll(".brendy__slider_slide"), document.querySelectorAll(".brendy__slider_slide-overlay"), document.querySelectorAll(".brendy__slider_slide-overlayBlack"), document.querySelectorAll(".brendy__slider_slide-border"), document.querySelectorAll(".brendy__slider_slide-letterSmall"), document.querySelectorAll(".brendy__slider_slide-letter"));
  Object(_services_resize__WEBPACK_IMPORTED_MODULE_9__["default"])();
  window.addEventListener("resize", _services_resize__WEBPACK_IMPORTED_MODULE_9__["default"]);
});

/***/ }),

/***/ "./src/js/services/createElement.js":
/*!******************************************!*\
  !*** ./src/js/services/createElement.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createElement(node, classname) {
  const element = document.createElement(node);
  element.classList.add(classname);
  return element;
}
/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),

/***/ "./src/js/services/filterData.js":
/*!***************************************!*\
  !*** ./src/js/services/filterData.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/services/variables.js");

function filterData(letter, arr) {
  let namesStartingWithLetter = arr.filter(object => object.phone.startsWith(`${letter}`)).map(object => object.phone);
  let listContainer = document.querySelector(".brendy__list");
  listContainer.innerHTML = "";
  if (namesStartingWithLetter.length > 0) {
    let ul = document.createElement("ul");
    namesStartingWithLetter.forEach(name => {
      let li = document.createElement("li");
      li.textContent = name;
      ul.appendChild(li);
    });
    listContainer.appendChild(ul);
  } else {
    listContainer.textContent = "No elements";
  }
}
/* harmony default export */ __webpack_exports__["default"] = (filterData);

/***/ }),

/***/ "./src/js/services/forms.js":
/*!**********************************!*\
  !*** ./src/js/services/forms.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/services/variables.js");

function mailer() {
  _variables__WEBPACK_IMPORTED_MODULE_0__["forms"].forEach(form => {
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
          _variables__WEBPACK_IMPORTED_MODULE_0__["modalBig"].classList.remove("modal__active");
          _variables__WEBPACK_IMPORTED_MODULE_0__["overlayModal"].classList.add("overlay-modal__active");
          _variables__WEBPACK_IMPORTED_MODULE_0__["modalMini"].classList.add("modal__active");
          setTimeout(function () {
            _variables__WEBPACK_IMPORTED_MODULE_0__["overlayModal"].classList.remove("overlay__active");
            _variables__WEBPACK_IMPORTED_MODULE_0__["modalMini"].classList.remove("modal-modal__active");
          }, 5000);
          form.reset();
        }
      }).catch(error => {
        console.log("Error:", error);
      });
      return false;
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (mailer);

/***/ }),

/***/ "./src/js/services/loadData.js":
/*!*************************************!*\
  !*** ./src/js/services/loadData.js ***!
  \*************************************/
/*! exports provided: dataObj, loadData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataObj", function() { return dataObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
let dataObj = "";
function loadData(url) {
  fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error("Failed to load data: " + response.status);
    }
    return response.json();
  }).then(function (jsonData) {
    dataObj = jsonData;
  }).catch(function (error) {
    console.error("Request failed:", error.message);
  });
}


/***/ }),

/***/ "./src/js/services/mouseAction.js":
/*!****************************************!*\
  !*** ./src/js/services/mouseAction.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/services/variables.js");

function mouse(item, sliderOverlay, sliderOverlayBlack, slideBorder, slideLetterSmall, sliderLetter) {
  function mouseAction(mouseAction, action) {
    if (_variables__WEBPACK_IMPORTED_MODULE_0__["catalogItem"] && innerWidth > 575) {
      _variables__WEBPACK_IMPORTED_MODULE_0__["catalogItem"].forEach((item, i) => {
        item.addEventListener(mouseAction, () => {
          _variables__WEBPACK_IMPORTED_MODULE_0__["overlay"][i].classList[action]("active__overlay");
          _variables__WEBPACK_IMPORTED_MODULE_0__["catalogHeader"][i].classList[action]("active__header");
          _variables__WEBPACK_IMPORTED_MODULE_0__["catalogImg"][i].classList[action]("transform__scale");
        });
      });
    }
    if (item) {
      item.forEach((item, i) => {
        item.addEventListener(mouseAction, () => {
          sliderOverlay[i].classList[action]("active__overlay");
          sliderOverlayBlack[i].classList[action]("active__overlay");
          slideBorder[i].classList[action]("active__header");
          slideLetterSmall[i].classList[action]("active__letterSmall");
          sliderLetter[i].classList[action]("hidden__letter");
        });
      });
    }
  }
  mouseAction("mouseover", "add");
  mouseAction("mouseout", "remove");
}
/* harmony default export */ __webpack_exports__["default"] = (mouse);

/***/ }),

/***/ "./src/js/services/observer.js":
/*!*************************************!*\
  !*** ./src/js/services/observer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function observer() {
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
}
/* harmony default export */ __webpack_exports__["default"] = (observer);

/***/ }),

/***/ "./src/js/services/resize.js":
/*!***********************************!*\
  !*** ./src/js/services/resize.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrolling */ "./src/js/services/scrolling.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./src/js/services/variables.js");


function resize() {
  if (window.innerWidth <= 991) {
    window.removeEventListener("scroll", _scrolling__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _variables__WEBPACK_IMPORTED_MODULE_1__["menuTop"].classList.add("transform");
  } else {
    window.addEventListener("scroll", _scrolling__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _variables__WEBPACK_IMPORTED_MODULE_1__["menuTop"].classList.remove("transform");
  }
}
/* harmony default export */ __webpack_exports__["default"] = (resize);

/***/ }),

/***/ "./src/js/services/scrolling.js":
/*!**************************************!*\
  !*** ./src/js/services/scrolling.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/services/variables.js");

function scrolling() {
  if (scrollY > 200) {
    _variables__WEBPACK_IMPORTED_MODULE_0__["menuTop"].classList.add("transform");
  } else {
    _variables__WEBPACK_IMPORTED_MODULE_0__["menuTop"].classList.remove("transform");
  }
}
/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/services/variables.js":
/*!**************************************!*\
  !*** ./src/js/services/variables.js ***!
  \**************************************/
/*! exports provided: overlayModal, modalBig, modalMini, menuTop, menuBig, menuTopLine, menuBigLogp, hamburger, text, forms, overlay, catalogItem, catalogHeader, catalogImg, dataObj, overlayBlock, bigImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlayModal", function() { return overlayModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalBig", function() { return modalBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalMini", function() { return modalMini; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuTop", function() { return menuTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuBig", function() { return menuBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuTopLine", function() { return menuTopLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuBigLogp", function() { return menuBigLogp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburger", function() { return hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forms", function() { return forms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlay", function() { return overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalogItem", function() { return catalogItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalogHeader", function() { return catalogHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalogImg", function() { return catalogImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataObj", function() { return dataObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlayBlock", function() { return overlayBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bigImg", function() { return bigImg; });
const overlayModal = document.querySelector(".overlay-modal");
const modalBig = document.querySelector(".modal_big");
const modalMini = document.querySelector(".modal_mini");
const menuTop = document.querySelector(".menuTop");
const menuBig = document.querySelector(".menuBig");
const menuTopLine = document.querySelector(".menuTop__line");
const menuBigLogp = document.querySelector(".menuTop__bigLogo");
const hamburger = document.querySelector(".hamburger");
const text = document.querySelectorAll(".about__text");
const forms = document.querySelectorAll("form");
const overlay = document.querySelectorAll(".overlay");
const catalogItem = document.querySelectorAll(".catalog__link");
const catalogHeader = document.querySelectorAll(".catalog__header");
const catalogImg = document.querySelectorAll(".catalog__img");
const overlayBlock = document.querySelector(".photo__overlay");
const bigImg = document.querySelector(".photo__overlay_img");
let dataObj = "";


/***/ })

/******/ });
//# sourceMappingURL=pages.js.map