/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hamburgerMenuClick: () => (/* binding */ hamburgerMenuClick),
/* harmony export */   handleScroll: () => (/* binding */ handleScroll)
/* harmony export */ });
/* harmony import */ var _services_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/constants.js */ "./src/js/services/constants.js");

let lastScrollY = window.scrollY;
function handleScroll() {
  if (window.scrollY > 500) {
    if (window.scrollY > lastScrollY) {
      _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.nav.classList.add('hide-menu');
    } else {
      _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.nav.classList.remove('hide-menu');
    }
  } else {
    _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.nav.classList.remove('hide-menu');
  }
  lastScrollY = window.scrollY;
}
function hamburgerMenuClick() {
  _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.showMenu.classList.toggle('show-menu');
  _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.hamburger.classList.toggle('cross');
}


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modalClose: () => (/* binding */ modalClose),
/* harmony export */   modalOpen: () => (/* binding */ modalOpen)
/* harmony export */ });
/* harmony import */ var _services_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/constants.js */ "./src/js/services/constants.js");

function modalOpen(reciver, overlayModalActive, modalActive) {
  _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.overlayModal.classList.add(overlayModalActive);
  reciver.classList.add(modalActive);
}
function modalClose(overlayModalActive, modalActive) {
  _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.overlayModal.classList.remove(overlayModalActive);
  _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.modalBig.classList.remove(modalActive);
  _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.modalDirector.classList.remove(modalActive);
  _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.modalMini.classList.remove(modalActive);
}


/***/ }),

/***/ "./src/js/modules/submitForms.js":
/*!***************************************!*\
  !*** ./src/js/modules/submitForms.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/constants.js */ "./src/js/services/constants.js");

function submitForm(form, modal, link) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(link, {
      method: 'POST',
      body: new FormData(this)
    }).then(function (response) {
      if (response.ok) {
        form.querySelectorAll('input').forEach(input => {
          input.value = '';
        });
        modal.classList.remove('modal__active');
        _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.overlayModal.classList.add('overlay-modal__active');
        _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.modalMini.classList.add('modal__active');
        setTimeout(function () {
          _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.overlayModal.classList.remove('overlay-modal__active');
          _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.modalMini.classList.remove('modal__active');
        }, 5000);
        form.reset();
      }
    }).catch(error => {
      console.log('Error:', error);
    });
    return false;
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitForm);

/***/ }),

/***/ "./src/js/modules/write.js":
/*!*********************************!*\
  !*** ./src/js/modules/write.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/constants.js */ "./src/js/services/constants.js");

function write(e) {
  if (!e.target.closest('.write')) {
    // Клік поза кнопкою — прибираємо всі id
    _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.messenger.removeAttribute('id');
    setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.whatsapp.removeAttribute('id'), 100);
    setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.viber.removeAttribute('id'), 200);
    setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.telegram.removeAttribute('id'), 300);
    setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.phone.removeAttribute('id'), 400);
  } else {
    // Клік по кнопці — якщо вже відкрито, закриваємо; якщо ні — відкриваємо
    const isOpen = _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.messenger.hasAttribute('id');
    if (isOpen) {
      _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.messenger.removeAttribute('id');
      setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.whatsapp.removeAttribute('id'), 100);
      setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.viber.removeAttribute('id'), 200);
      setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.telegram.removeAttribute('id'), 300);
      setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.phone.removeAttribute('id'), 400);
    } else {
      setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.messenger.setAttribute('id', 'messenger'), 400);
      setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.whatsapp.setAttribute('id', 'whatsapp'), 300);
      setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.viber.setAttribute('id', 'viber'), 200);
      setTimeout(() => _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.telegram.setAttribute('id', 'telegram'), 100);
      _services_constants_js__WEBPACK_IMPORTED_MODULE_0__.phone.setAttribute('id', 'phone');
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (write);

/***/ }),

/***/ "./src/js/services/POST.js":
/*!*********************************!*\
  !*** ./src/js/services/POST.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/js/services/constants.js");
/* harmony import */ var _modules_submitForms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/submitForms.js */ "./src/js/modules/submitForms.js");


function POST() {
  _constants_js__WEBPACK_IMPORTED_MODULE_0__.forms.forEach(form => {
    if (form.classList.contains('director')) {
      (0,_modules_submitForms_js__WEBPACK_IMPORTED_MODULE_1__["default"])(form, _constants_js__WEBPACK_IMPORTED_MODULE_0__.modalDirector, 'mailer2/smart.php');
    } else {
      (0,_modules_submitForms_js__WEBPACK_IMPORTED_MODULE_1__["default"])(form, _constants_js__WEBPACK_IMPORTED_MODULE_0__.modalBig, 'mailer/smart.php');
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (POST);

/***/ }),

/***/ "./src/js/services/constants.js":
/*!**************************************!*\
  !*** ./src/js/services/constants.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkboxes: () => (/* binding */ checkboxes),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   forms: () => (/* binding */ forms),
/* harmony export */   hamburger: () => (/* binding */ hamburger),
/* harmony export */   menuList: () => (/* binding */ menuList),
/* harmony export */   messenger: () => (/* binding */ messenger),
/* harmony export */   modalBig: () => (/* binding */ modalBig),
/* harmony export */   modalDirector: () => (/* binding */ modalDirector),
/* harmony export */   modalMini: () => (/* binding */ modalMini),
/* harmony export */   nav: () => (/* binding */ nav),
/* harmony export */   overlayModal: () => (/* binding */ overlayModal),
/* harmony export */   phone: () => (/* binding */ phone),
/* harmony export */   showFilter: () => (/* binding */ showFilter),
/* harmony export */   showMenu: () => (/* binding */ showMenu),
/* harmony export */   telegram: () => (/* binding */ telegram),
/* harmony export */   viber: () => (/* binding */ viber),
/* harmony export */   whatsapp: () => (/* binding */ whatsapp)
/* harmony export */ });
const nav = document.querySelector('.nav');
const showMenu = document.querySelector('.menu__line');
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu__list');
const messenger = document.querySelector('.write__btn-messenger');
const whatsapp = document.querySelector('.write__btn-whatsapp');
const viber = document.querySelector('.write__btn-viber');
const telegram = document.querySelector('.write__btn-telegram');
const phone = document.querySelector('.write__btn-phone');
const overlayModal = document.querySelector('.overlay-modal');
const modalBig = document.querySelector('.modal_big');
const modalMini = document.querySelector('.modal_mini');
const modalDirector = document.querySelector('.modal_director');
const forms = document.querySelectorAll('.modal__form');
const filter = document.querySelector('.portfolio__left-side');
const showFilter = document.querySelector('.portfolio__center');
const checkboxes = document.querySelectorAll('.portfolio__filter-group input[type="checkbox"]');


/***/ }),

/***/ "./src/js/services/observer.js":
/*!*************************************!*\
  !*** ./src/js/services/observer.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function observer() {
  function onDisplay(entry) {
    entry.forEach(function (change) {
      if (change.isIntersecting) {
        change.target.classList.add('delay');
      } else {
        change.target.classList.remove('delay');
      }
    });
  }
  const elements = document.querySelectorAll('.observer');
  const options = {
    threshold: [0.3]
  };
  const observer = new IntersectionObserver(onDisplay, options);
  for (let elm of elements) {
    observer.observe(elm);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observer);

/***/ })

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
  !*** ./src/js/blog.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/constants.js */ "./src/js/services/constants.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_write_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/write.js */ "./src/js/modules/write.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ "./src/js/modules/modal.js");
/* harmony import */ var _services_observer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/observer.js */ "./src/js/services/observer.js");
/* harmony import */ var _services_POST_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/POST.js */ "./src/js/services/POST.js");






document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.handleScroll)());
  (0,_services_observer_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  if (window.innerWidth < 992) {
    onAction('touchend');
  } else {
    onAction('click');
  }
  function onAction(action) {
    window.addEventListener(action, e => {
      (0,_modules_write_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
      if (e.target.closest('.menu__list') || e.target.closest('.hamburger')) {
        (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.hamburgerMenuClick)();
      } else if (e.target.classList.contains('menu__center-contact')) {
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__.modalOpen)(_services_constants_js__WEBPACK_IMPORTED_MODULE_0__.modalBig, 'overlay-modal__active', 'modal__active');
      } else if (e.target.classList.contains('modal__close') || e.target.classList.contains('overlay-modal')) {
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__.modalClose)('overlay-modal__active', 'modal__active');
      } else if (e.target.classList.contains('footer__left-write')) {
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__.modalOpen)(_services_constants_js__WEBPACK_IMPORTED_MODULE_0__.modalDirector, 'overlay-modal__active', 'modal__active');
      }
    });
  }
  (0,_services_POST_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const fetchProducts = async () => {
    const response = await fetch('https://mixukkdrroecijgikage.supabase.co/rest/v1/database?order=id.asc', {
      method: 'GET',
      headers: {
        apikey: 'sb_publishable_RusABZPiYJ_34ebRTOCzUw_ZnCMDzq0',
        Authorization: `sb_publishable_RusABZPiYJ_34ebRTOCzUw_ZnCMDzq0`
      }
    });
    const products = await response.json();
    console.log(products);
    renderBlog([...products].reverse());
  };
  const renderBlog = items => {
    const blog = document.querySelector('.bloglist');
    blog.innerHTML = items.map(item => {
      const fullText = item.Text || '';
      const needsTrim = fullText.length > 500;
      const shortText = needsTrim ? fullText.slice(0, 500) + '...' : fullText;
      return `
        <div class="diagnostics__blog">
            <h3 class="diagnostics__header">${item.Title}</h3>

            <div class="diagnostics__content">
                <div class="diagnostics__img_wrapper">
                    <picture class="diagnostics__img">
                        <source srcset="${item.Photolink}">
                        <img src="${item.Photolink}" alt="${item.Title}">
                    </picture>
                </div>

                <div class="diagnostics__text_wrapper">
                    ${needsTrim ? `
                                <p class="diagnostics__text_descr diagnostics__text_descr--short">
                                    ${shortText}
                                </p>
                                <p class="diagnostics__text_descr diagnostics__text_descr--full hidden">
                                    ${fullText}
                                </p>
                                <button type="button" class="diagnostics__read-more">
                                    читати далі
                                </button>
                            ` : `
                                <p class="diagnostics__text_descr">
                                    ${fullText}
                                </p>
                            `}
                </div>
            </div>
        </div>
    `;
    }).join('');
  };
  fetchProducts();
  document.addEventListener('click', e => {
    if (!e.target.classList.contains('diagnostics__read-more')) return;
    e.preventDefault();
    const wrapper = e.target.closest('.diagnostics__text_wrapper');
    if (!wrapper) return;
    const shortEl = wrapper.querySelector('.diagnostics__text_descr--short');
    const fullEl = wrapper.querySelector('.diagnostics__text_descr--full');
    if (!shortEl || !fullEl) return;
    const isExpanded = !fullEl.classList.contains('hidden');
    if (!isExpanded) {
      // розгортаємо
      fullEl.classList.remove('hidden');
      shortEl.classList.add('hidden');
      e.target.textContent = 'згорнути';
    } else {
      // згортаємо назад
      fullEl.classList.add('hidden');
      shortEl.classList.remove('hidden');
      e.target.textContent = 'читати далі';
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=blog.js.map