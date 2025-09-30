/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!******************************!*\
  !*** ./src/js/attendance.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  let lastScrollY = window.scrollY;
  function handleScroll() {
    if (window.scrollY > 500) {
      if (window.scrollY > lastScrollY) {
        nav.classList.add('hide-menu');
      } else {
        nav.classList.remove('hide-menu');
      }
    } else {
      nav.classList.remove('hide-menu');
    }
    lastScrollY = window.scrollY;
  }
  window.addEventListener('scroll', handleScroll);
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
  const write = document.querySelector('.write');
  const messenger = document.querySelector('.write__btn-messenger');
  const whatsapp = document.querySelector('.write__btn-whatsapp');
  const viber = document.querySelector('.write__btn-viber');
  const telegram = document.querySelector('.write__btn-telegram');
  const phone = document.querySelector('.write__btn-phone');
  window.addEventListener('click', e => {
    if (!e.target.closest('.write')) {
      messenger.removeAttribute('id');
      setTimeout(() => {
        whatsapp.removeAttribute('id');
      }, 100);
      setTimeout(() => {
        viber.removeAttribute('id');
      }, 200);
      setTimeout(() => {
        telegram.removeAttribute('id');
      }, 300);
      setTimeout(() => {
        phone.removeAttribute('id');
      }, 400);
    } else {
      setTimeout(() => {
        messenger.setAttribute('id', 'messenger');
      }, 400);
      setTimeout(() => {
        whatsapp.setAttribute('id', 'whatsapp');
      }, 300);
      setTimeout(() => {
        viber.setAttribute('id', 'viber');
      }, 200);
      setTimeout(() => {
        telegram.setAttribute('id', 'telegram');
      }, 100);
      phone.setAttribute('id', 'phone');
    }
  });
  const overlayModal = document.querySelector('.overlay-modal');
  const modalBig = document.querySelector('.modal_big');
  const modalMini = document.querySelector('.modal_mini');
  const modalDirector = document.querySelector('.modal_director');
  window.addEventListener('click', e => {
    if (e.target.classList.contains('menu__center-contact')) {
      modalOpen(modalBig, 'overlay-modal__active', 'modal__active');
      console.log(1);
    } else if (e.target.classList.contains('modal__close') || e.target.classList.contains('overlay-modal')) {
      modalClose('overlay-modal__active', 'modal__active');
    } else if (e.target.classList.contains('footer__left-write')) {
      modalOpen(modalDirector, 'overlay-modal__active', 'modal__active');
    }
  });
  function modalOpen(reciver, overlayModalActive, modalActive) {
    overlayModal.classList.add(overlayModalActive);
    reciver.classList.add(modalActive);
  }
  function modalClose(overlayModalActive, modalActive) {
    overlayModal.classList.remove(overlayModalActive);
    modalBig.classList.remove(modalActive);
    modalDirector.classList.remove(modalActive);
    modalMini.classList.remove(modalActive);
  }
});
/******/ })()
;
//# sourceMappingURL=attendance.js.map