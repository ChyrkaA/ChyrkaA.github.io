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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/project.js");
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
/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/const */ "./src/js/services/const.js");

function menuScroll(modifikator) {
  if (modifikator) {
    window.scrollY >= 400 ? _services_const__WEBPACK_IMPORTED_MODULE_0__["menu"].style.background = "rgba(255, 255, 255, 0.8)" : _services_const__WEBPACK_IMPORTED_MODULE_0__["menu"].style.background = "";
  } else {
    window.scrollY >= 400 ? _services_const__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.add("menu_active") : _services_const__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.remove("menu_active");
  }
}
/* harmony default export */ __webpack_exports__["default"] = (menuScroll);

/***/ }),

/***/ "./src/js/modules/preloader.js":
/*!*************************************!*\
  !*** ./src/js/modules/preloader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/const */ "./src/js/services/const.js");

function preloader() {
  let loadedResources = 0;
  let totalResources = 0;
  function updateProgress() {
    const percent = Math.floor(loadedResources / totalResources * 100);
    _services_const__WEBPACK_IMPORTED_MODULE_0__["preloaderPercent"].textContent = `HI ${percent}%`;
    setTimeout(() => {
      if (percent === 100) {
        _services_const__WEBPACK_IMPORTED_MODULE_0__["preloaderPercent"].textContent = `HILIGHT`;
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
}
/* harmony default export */ __webpack_exports__["default"] = (preloader);

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_preloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/preloader.js */ "./src/js/modules/preloader.js");
/* harmony import */ var _services_click_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/click.js */ "./src/js/services/click.js");
/* harmony import */ var _services_clickFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/clickFunctions.js */ "./src/js/services/clickFunctions.js");
/* harmony import */ var _services_resize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/resize.js */ "./src/js/services/resize.js");
/* harmony import */ var _services_changeDomElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/changeDomElements.js */ "./src/js/services/changeDomElements.js");
/* harmony import */ var _services_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/scroll.js */ "./src/js/services/scroll.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu.js */ "./src/js/modules/menu.js");









document.addEventListener("DOMContentLoaded", () => {
  Object(_services_changeDomElements_js__WEBPACK_IMPORTED_MODULE_4__["changeResidenceTitle"])();
  Object(_modules_preloader_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_services_click_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_services_clickFunctions_js__WEBPACK_IMPORTED_MODULE_2__["hamburgerClick"], _services_clickFunctions_js__WEBPACK_IMPORTED_MODULE_2__["requestClick"]);
  Object(_services_resize_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_services_changeDomElements_js__WEBPACK_IMPORTED_MODULE_4__["changeResidenceTitle"], _services_changeDomElements_js__WEBPACK_IMPORTED_MODULE_4__["changeFooterTitle"], _services_changeDomElements_js__WEBPACK_IMPORTED_MODULE_4__["changeTelMail"], _services_changeDomElements_js__WEBPACK_IMPORTED_MODULE_4__["changeTitleModal"]);
  Object(_services_scroll_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_modules_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
});

/***/ }),

/***/ "./src/js/services/changeDomElements.js":
/*!**********************************************!*\
  !*** ./src/js/services/changeDomElements.js ***!
  \**********************************************/
/*! exports provided: changeTelMail, changeFooterTitle, changeImgTitle, changeLoremTitle, changeTitleModal, changeStyleBody, changeDonecTextarea, changeNewsTitle, updateFilterDisplay, changeLoremMailText, changeOurProjectsTextArea, changeOurProjectsImg, changeResidenceTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTelMail", function() { return changeTelMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFooterTitle", function() { return changeFooterTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeImgTitle", function() { return changeImgTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLoremTitle", function() { return changeLoremTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTitleModal", function() { return changeTitleModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeStyleBody", function() { return changeStyleBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeDonecTextarea", function() { return changeDonecTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNewsTitle", function() { return changeNewsTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilterDisplay", function() { return updateFilterDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLoremMailText", function() { return changeLoremMailText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeOurProjectsTextArea", function() { return changeOurProjectsTextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeOurProjectsImg", function() { return changeOurProjectsImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeResidenceTitle", function() { return changeResidenceTitle; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/js/services/const.js");

function changeTelMail() {
  if (innerWidth <= 1399) {
    _const__WEBPACK_IMPORTED_MODULE_0__["tel"].forEach(elem => {
      elem.innerHTML = "+380935705222";
      elem.href = "tel:+380935705222";
    });
    _const__WEBPACK_IMPORTED_MODULE_0__["mail"].forEach(elem => {
      elem.innerHTML = "info@hi-light.pl";
      elem.href = "mailto:info@hi-light.pl";
    });
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["tel"].forEach(elem => {
      elem.innerHTML = "+380983527547";
      elem.href = "tel:+380983527547";
    });
    _const__WEBPACK_IMPORTED_MODULE_0__["mail"].forEach(elem => {
      elem.innerHTML = "E: info@gmail.com";
      elem.href = "mailto:info@gmail.com";
    });
  }
}
function changeFooterTitle() {
  if (innerWidth <= 1399) {
    _const__WEBPACK_IMPORTED_MODULE_0__["footerTitle"].innerHTML = "Get in touch";
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["footerTitle"].innerHTML = "Drop us a line";
  }
}
function changeImgTitle() {
  if (innerWidth <= 767) {
    const tabletImg = _const__WEBPACK_IMPORTED_MODULE_0__["tablet"][2].querySelector(".projects__tablet-img");
    const tabletImgSource = _const__WEBPACK_IMPORTED_MODULE_0__["tablet"][2].querySelector("source");
    tabletImg.src = "img/projects/7.webp";
    tabletImgSource.setAttribute("srcset", `img/projects/7.webp`);
  }
}
function changeLoremTitle() {
  if (innerWidth <= 767) {
    _const__WEBPACK_IMPORTED_MODULE_0__["loremTitle"].innerHTML = "@hilight.design";
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["loremTitle"].innerHTML = "@lorem.ipsum";
  }
}
function changeTitleModal() {
  window.innerWidth <= 1399 ? _const__WEBPACK_IMPORTED_MODULE_0__["titleModal"].innerHTML = "Make request" : _const__WEBPACK_IMPORTED_MODULE_0__["titleModal"].innerHTML = "Calculate the cost of work";
}
function changeStyleBody() {
  if (_const__WEBPACK_IMPORTED_MODULE_0__["body"].style.overflow === "hidden") {
    setTimeout(() => {
      _const__WEBPACK_IMPORTED_MODULE_0__["body"].style.paddingRight = "";
      _const__WEBPACK_IMPORTED_MODULE_0__["body"].style.overflow = "";
    }, 300);
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["body"].style.overflow = "hidden";
    _const__WEBPACK_IMPORTED_MODULE_0__["body"].style.paddingRight = `${_const__WEBPACK_IMPORTED_MODULE_0__["scrollbarWidth"]}px`;
  }
}
function changeDonecTextarea() {
  if (window.innerWidth <= 1399) {
    _const__WEBPACK_IMPORTED_MODULE_0__["donecTextarea"][1].innerHTML = "Ut arcu tortor, hendrerit eget sollicitudin sed, tincidunt a lectus. Cras gravida ultricies ante sit amet consectetur. Maecenas sed arcu tempor, posuere odio pharetra, faucibus risus. Etiam fermentum felis quis aliquet viverra. Mauris in odio nec mi pellentesque placerat. Praesent at metus in lacus posuere molestie. Aliquam consequat, neque eget congue feugiat, lectus leo condimentum lorem, scelerisque euismod nisi ipsum nec metus. Mauris semper felis venenatis eros interdum sollicitudin.";
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["donecTextarea"][1].innerHTML = "Aliquam iaculis ac urna at consequat. Pellentesque fermentum tellus eu nisi viverra gravida. Sed suscipit vestibulum accumsan. Sed ac magna id sem hendrerit convallis quis a magna. Mauris eget ornare est. Morbi metus justo, posuere vel semper semper, eleifend ut purus. Morbi cursus consequat nibh, a feugiat felis tempor vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sodales orci nisl, in lacinia risus rhoncus a. Praesent consectetur egestas risus, id consectetur felis.";
  }
}
function changeNewsTitle() {
  if (window.innerWidth < 768) {
    _const__WEBPACK_IMPORTED_MODULE_0__["newsTitle"].innerText = "Our news";
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["newsTitle"].innerText = "Our latest news";
  }
}
function updateFilterDisplay(modifikator, blockClassName) {
  if (window.innerWidth < 768) {
    _const__WEBPACK_IMPORTED_MODULE_0__["filterTabsContainer"].style.display = "none";
    _const__WEBPACK_IMPORTED_MODULE_0__["filterSelect"].style.display = "";
    if (modifikator) {
      _const__WEBPACK_IMPORTED_MODULE_0__["filterSelect"][0].innerHTML = "Apartments";
    }
    _const__WEBPACK_IMPORTED_MODULE_0__["filterSelect"].addEventListener("change", function () {
      const selectedTab = this.value;
      blockClassName.forEach(card => {
        const cardTab = card.getAttribute("data-tab");
        selectedTab === "all" || selectedTab === cardTab ? card.style.display = "" : card.style.display = "none";
      });
    });
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["filterTabsContainer"].style.display = "";
    _const__WEBPACK_IMPORTED_MODULE_0__["filterSelect"].style.display = "none";
    _const__WEBPACK_IMPORTED_MODULE_0__["filterTabs"].forEach(tab => {
      tab.addEventListener("click", function () {
        _const__WEBPACK_IMPORTED_MODULE_0__["filterTabs"].forEach(item => item.classList.remove("news__filter-tab-active"));
        this.classList.add("news__filter-tab-active");
        const selectedTab = this.getAttribute("data-tab");
        blockClassName.forEach(card => {
          const cardTab = card.getAttribute("data-tab");
          selectedTab === "all" || selectedTab === cardTab ? card.style.display = "" : card.style.display = "none";
        });
      });
    });
  }
}
function changeLoremMailText() {
  if (window.innerWidth <= 1399) {
    _const__WEBPACK_IMPORTED_MODULE_0__["loremMailTextarea"].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper eu mauris vitae posuere. Ut at luctus ligula. Nunc ante felis, aliquam eu enim sed, ornare pretium velit.";
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["loremMailTextarea"].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper eu mauris vitae posuere. Ut at luctus ligula. Nunc ante felis, aliquam.";
  }
}
function changeOurProjectsTextArea() {
  if (window.innerWidth <= 1399 && window.innerWidth >= 1024) {
    _const__WEBPACK_IMPORTED_MODULE_0__["ourProjectsTextArea"].innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>' + 'Aliquam ullamcorper eu mauris vitae posuere. Ut at luctus ligula. Nunc ante felis, aliquam eu enim sed, ornare pretium velit.';
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["ourProjectsTextArea"].innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper eu mauris vitae posuere. Ut at luctus ligula. Nunc ante felis, aliquam eu enim sed, ornare pretium velit.';
  }
}
function changeOurProjectsImg() {
  if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
    _const__WEBPACK_IMPORTED_MODULE_0__["projectsTablet"].forEach((project, i) => {
      if (i == 2) {
        const source = project.querySelector('source');
        const img = project.querySelector('img');
        source.setAttribute('srcset', `img/projects/7.webp`);
        img.setAttribute('src', `img/projects/7.jpg`);
      }
      if (i == 4) {
        const source = project.querySelector('source');
        const img = project.querySelector('img');
        source.setAttribute('srcset', `img/projects/2.webp`);
        img.setAttribute('src', `img/projects/2.png`);
      }
    });
  }
  if (window.innerWidth <= 767) {
    _const__WEBPACK_IMPORTED_MODULE_0__["projectsTablet"].forEach((project, i) => {
      if (i == 2) {
        const source = project.querySelector('source');
        const img = project.querySelector('img');
        source.setAttribute('srcset', `img/projects/7.webp`);
        img.setAttribute('src', `img/projects/7.jpg`);
      }
    });
  }
}
function changeResidenceTitle() {
  if (window.innerWidth <= 1399) {
    _const__WEBPACK_IMPORTED_MODULE_0__["residenceTitle"].innerHTML = 'Residence <br> by the lighthouse';
  } else {
    _const__WEBPACK_IMPORTED_MODULE_0__["residenceTitle"].innerHTML = 'Residence by the lighthouse';
  }
}


/***/ }),

/***/ "./src/js/services/click.js":
/*!**********************************!*\
  !*** ./src/js/services/click.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function click(...funcs) {
  document.addEventListener("click", e => {
    funcs.forEach(func => {
      func(e);
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (click);

/***/ }),

/***/ "./src/js/services/clickFunctions.js":
/*!*******************************************!*\
  !*** ./src/js/services/clickFunctions.js ***!
  \*******************************************/
/*! exports provided: spaceSelectClick, spaceSelectListClick, hamburgerClick, requestClick, modalFormSubmitClick, modalFormThanksClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceSelectClick", function() { return spaceSelectClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceSelectListClick", function() { return spaceSelectListClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburgerClick", function() { return hamburgerClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestClick", function() { return requestClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalFormSubmitClick", function() { return modalFormSubmitClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalFormThanksClick", function() { return modalFormThanksClick; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/js/services/const.js");
/* harmony import */ var _changeDomElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeDomElements.js */ "./src/js/services/changeDomElements.js");


function spaceSelectClick(e) {
  if (e.target.closest(".space__select")) {
    const select = e.target.closest(".space__select");
    const optionList = select.querySelector(".space__select-list");
    const cross = select.querySelector(".space__select-option-spans");
    if (optionList && !e.target.closest(".space__select-list")) {
      optionList.classList.toggle("space__select-list_active");
      cross.classList.toggle("space__select-option-spans_active");
    }
  }
}
function spaceSelectListClick(e) {
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
}
function hamburgerClick(e, isModifikator) {
  if (e.target.closest(".hamburger")) {
    _const_js__WEBPACK_IMPORTED_MODULE_0__["bigMenu"].classList.toggle("menu__big-menu_active");
    _const_js__WEBPACK_IMPORTED_MODULE_0__["hamburger"].classList.toggle("hamburger_active");
    _const_js__WEBPACK_IMPORTED_MODULE_0__["requestBtnMenu"].classList.toggle("menu__request_active");
    if (isModifikator) {
      _const_js__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.toggle("menu_modifikator");
      _const_js__WEBPACK_IMPORTED_MODULE_0__["menu"].style.background === "transparent" ? _const_js__WEBPACK_IMPORTED_MODULE_0__["menu"].style.background = "rgba(255, 255, 255, 0.8)" : _const_js__WEBPACK_IMPORTED_MODULE_0__["menu"].style.background = "transparent";
    }
    if (window.innerWidth <= 1399 && window.scrollY >= 400) {
      _const_js__WEBPACK_IMPORTED_MODULE_0__["menu"].classList.toggle("menu_active");
    }
    Object(_changeDomElements_js__WEBPACK_IMPORTED_MODULE_1__["changeStyleBody"])();
  }
}
function requestClick(e) {
  if (e.target.closest(".menu__request") || e.target.closest(".projects__cards-request") || e.target.closest(".modal__close")) {
    _const_js__WEBPACK_IMPORTED_MODULE_0__["modal"].classList.toggle("modal_active");
    if (!_const_js__WEBPACK_IMPORTED_MODULE_0__["hamburger"].classList.contains("hamburger_active")) {
      Object(_changeDomElements_js__WEBPACK_IMPORTED_MODULE_1__["changeStyleBody"])();
    }
    _const_js__WEBPACK_IMPORTED_MODULE_0__["modalBorder"].classList.remove("hide");
    _const_js__WEBPACK_IMPORTED_MODULE_0__["modalWrapperMini"].classList.remove("show");
    _const_js__WEBPACK_IMPORTED_MODULE_0__["modalForm"].reset();
  }
}
function modalFormSubmitClick(e) {
  if (e.target.closest(".modal__form-submit")) {
    if (_const_js__WEBPACK_IMPORTED_MODULE_0__["modalForm"].checkValidity()) {
      e.preventDefault();
      _const_js__WEBPACK_IMPORTED_MODULE_0__["modalBorder"].classList.toggle("hide");
      _const_js__WEBPACK_IMPORTED_MODULE_0__["modalWrapperMini"].classList.toggle("show");
    }
  }
}
function modalFormThanksClick(e) {
  if (e.target.closest(".modal__thanks-btn")) {
    _const_js__WEBPACK_IMPORTED_MODULE_0__["modalBorder"].classList.toggle("hide");
    _const_js__WEBPACK_IMPORTED_MODULE_0__["modalWrapperMini"].classList.toggle("show");
    _const_js__WEBPACK_IMPORTED_MODULE_0__["modalForm"].reset();
  }
}


/***/ }),

/***/ "./src/js/services/const.js":
/*!**********************************!*\
  !*** ./src/js/services/const.js ***!
  \**********************************/
/*! exports provided: preloaderPercent, tel, mail, footerTitle, spans, tablet, loremTitle, num, slides, titleModal, inputPhone, inputEmail, modal, hamburger, bigMenu, body, requestBtnMenu, scrollbarWidth, menu, tablets, fileUpload, modalBorder, modalWrapperMini, modalForm, newsTitle, filterTabsContainer, filterSelect, filterTabs, cardNew, loremMailTextarea, cards, donecTextarea, ourProjectsTextArea, projectsTablet, residenceTitle, cardProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preloaderPercent", function() { return preloaderPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tel", function() { return tel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mail", function() { return mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerTitle", function() { return footerTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spans", function() { return spans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tablet", function() { return tablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loremTitle", function() { return loremTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "num", function() { return num; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slides", function() { return slides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleModal", function() { return titleModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputPhone", function() { return inputPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputEmail", function() { return inputEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburger", function() { return hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bigMenu", function() { return bigMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestBtnMenu", function() { return requestBtnMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbarWidth", function() { return scrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tablets", function() { return tablets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileUpload", function() { return fileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalBorder", function() { return modalBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalWrapperMini", function() { return modalWrapperMini; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalForm", function() { return modalForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsTitle", function() { return newsTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTabsContainer", function() { return filterTabsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSelect", function() { return filterSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTabs", function() { return filterTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardNew", function() { return cardNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loremMailTextarea", function() { return loremMailTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "donecTextarea", function() { return donecTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ourProjectsTextArea", function() { return ourProjectsTextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsTablet", function() { return projectsTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "residenceTitle", function() { return residenceTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardProject", function() { return cardProject; });
const preloaderPercent = document.querySelector(".preloader__percent");
const tel = document.querySelectorAll(".space__tel");
const mail = document.querySelectorAll(".space__mail");
const footerTitle = document.querySelector(".footer__title");
const modal = document.querySelector(".modal");
const spans = modal.querySelectorAll(".modal__form-range-labels span");
const tablet = document.querySelectorAll(".projects__tablet");
const loremTitle = document.querySelector(".lorem__title");
const num = document.querySelectorAll(".space__selector-num");
const slides = document.querySelectorAll(".swiper-slide");
const titleModal = document.querySelector(".modal__form-title");
const inputPhone = document.querySelector(".modal__form-input-phone");
const inputEmail = document.querySelector(".modal__form-input-mail");
const hamburger = document.querySelector(".hamburger");
const bigMenu = document.querySelector(".menu__big-menu");
const body = document.querySelector("body");
const requestBtnMenu = document.querySelector(".menu__request");
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
const menu = document.querySelector(".menu");
const tablets = document.querySelector(".projects__tablets");
const modalForm = document.querySelector(".modal__form");
const modalBorder = document.querySelector(".modal__border");
const modalWrapperMini = document.querySelector(".modal__wrapper-mini");
const fileUpload = document.getElementById("fileUpload");
const newsTitle = document.querySelector(".news__title");
const filterTabsContainer = document.querySelector(".news__filter-tabs");
const filterSelect = document.querySelector(".news__filter-select");
const filterTabs = document.querySelectorAll(".news__filter-tab");
const cardNew = document.querySelectorAll(".news__cards > div");
const loremMailTextarea = document.querySelector(".lmail__textarea");
const cards = document.querySelector(".news__cards");
const donecTextarea = document.querySelectorAll(".donec__textarea");
const ourProjectsTextArea = document.querySelector(".our-projects__textarea");
const projectsTablet = document.querySelectorAll(".projects__tablet");
const residenceTitle = document.querySelector(".residence__title");
const cardProject = document.querySelectorAll(".projects__tablets > div");


/***/ }),

/***/ "./src/js/services/resize.js":
/*!***********************************!*\
  !*** ./src/js/services/resize.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function resize(...funcs) {
  window.addEventListener("resize", () => {
    funcs.forEach(func => {
      func();
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (resize);

/***/ }),

/***/ "./src/js/services/scroll.js":
/*!***********************************!*\
  !*** ./src/js/services/scroll.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function scroll(...funcs) {
  window.addEventListener("scroll", () => {
    funcs.forEach(func => {
      func();
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ })

/******/ });
//# sourceMappingURL=project.js.map