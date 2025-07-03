/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showTopMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTopMenu.js */ "./src/js/modules/showTopMenu.js");
/* harmony import */ var _services_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.js */ "./src/js/services/variables.js");


function hamburger(menuFullWhite, menuForBigProduct, showBigMenu, hideMenuList, menuDisplayNone, overflowScroll, overflowHidden, show, menuHeight) {
  if (_services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.contains(menuFullWhite) && !_services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.contains(menuForBigProduct)) {
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
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.toggle(menuFullWhite);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menu.classList.toggle(menuForBigProduct);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.menuProducts.classList.toggle(show);
    _services_variables_js__WEBPACK_IMPORTED_MODULE_1__.body.classList.toggle(overflowHidden);
  } else {
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

/***/ }),

/***/ "./src/js/modules/preload.js":
/*!***********************************!*\
  !*** ./src/js/modules/preload.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/js/modules/products.js":
/*!************************************!*\
  !*** ./src/js/modules/products.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/js/modules/showTopMenu.js":
/*!***************************************!*\
  !*** ./src/js/modules/showTopMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_scrollAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/scrollAction.js */ "./src/js/services/scrollAction.js");

function showTopMenuAndArrows() {
  (0,_services_scrollAction_js__WEBPACK_IMPORTED_MODULE_0__["default"])("hide__menu", "white__menu");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTopMenuAndArrows);

/***/ }),

/***/ "./src/js/modules/smallMenu.js":
/*!*************************************!*\
  !*** ./src/js/modules/smallMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/js/modules/styles.js":
/*!**********************************!*\
  !*** ./src/js/modules/styles.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/js/services/fadeInOut.js":
/*!**************************************!*\
  !*** ./src/js/services/fadeInOut.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/js/services/itc-slider.min.js":
/*!*******************************************!*\
  !*** ./src/js/services/itc-slider.min.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @class ItcSlider
 * @version 1.0.2
 * @author https://github.com/itchief
 * @copyright Alexander Maltsev 2020 - 2024
 * @license MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 * @tutorial https://itchief.ru/javascript/slider
 */class ItcSlider {
  static #a = "wrapper";
  static #b = "items";
  static #c = "item";
  static #d = "item-active";
  static #e = "indicator";
  static #f = "indicator-active";
  static #g = "btn-prev";
  static #h = "btn-next";
  static #i = "btn-hide";
  static #j = "transition-none";
  static #k = 20;
  static #l = [];
  static checkSupportPassiveEvents() {
    let t = !1;
    try {
      let s = Object.defineProperty({}, "passive", {
        get() {
          t = !0;
        }
      });
      window.addEventListener("testPassiveListener", null, s), window.removeEventListener("testPassiveListener", null, s);
    } catch (e) {
      t = !1;
    }
    return t;
  }
  #m;
  #n;
  #o;
  constructor(t, s = {}, e = "itc-slider-") {
    this.#n = {
      prefix: e,
      el: t,
      elWrapper: t.querySelector(`.${e}${this.constructor.#a}`),
      elItems: t.querySelector(`.${e}${this.constructor.#b}`),
      elListItem: t.querySelectorAll(`.${e}${this.constructor.#c}`),
      btnPrev: t.querySelector(`.${e}${this.constructor.#g}`),
      btnNext: t.querySelector(`.${e}${this.constructor.#h}`),
      btnClassHide: e + this.constructor.#i,
      exOrderMin: 0,
      exOrderMax: 0,
      exItemMin: null,
      exItemMax: null,
      exTranslateMin: 0,
      exTranslateMax: 0,
      direction: "next",
      intervalId: null,
      isSwiping: !1,
      swipeX: 0,
      swipeY: 0
    }, this.#o = null, this.#m = {
      loop: !0,
      direction: "next",
      autoplay: !1,
      interval: 5e3,
      refresh: !0,
      swipe: !0,
      ...s
    }, this.#p(), this.#q();
  }
  static getInstance(t) {
    let s = this.#l.find(s => s.target === t);
    return s ? s.instance : null;
  }
  static getOrCreateInstance(t, s = {}, e = "itc-slider-") {
    let i = "string" == typeof t ? document.querySelector(t) : t,
      a = this.getInstance(i);
    if (a) return a;
    let n = new this(i, s, e);
    return this.#l.push({
      target: i,
      instance: n
    }), n;
  }
  static createInstances() {
    document.querySelectorAll('[data-slider="itc-slider"]').forEach(t => {
      let {
          dataset: s
        } = t,
        e = {};
      Object.keys(s).forEach(t => {
        if ("slider" === t) return;
        let i = s[t];
        i = "false" !== (i = "true" === (i = Number.isNaN(Number(i)) ? i : Number(i)) || i) && i, e[t] = i;
      }), this.getOrCreateInstance(t, e);
    });
  }
  slideNext() {
    this.#n.direction = "next", this.#r();
  }
  slidePrev() {
    this.#n.direction = "prev", this.#r();
  }
  slideTo(t) {
    this.#s(t);
  }
  reset() {
    this.#t();
  }
  get autoplay() {
    return {
      start: () => {
        this.#m.autoplay = !0, this.#u();
      },
      stop: () => {
        this.#u("stop"), this.#m.autoplay = !1;
      }
    };
  }
  dispose() {
    this.#v();
    let t = this.#n.prefix + this.constructor.#j,
      s = this.#n.prefix + this.constructor.#d;
    this.#u("stop"), this.#n.elItems.classList.add(t), this.#n.elItems.style.transform = "", this.#n.elListItem.forEach(t => {
      t.style.transform = "", t.classList.remove(s);
    });
    let e = `${this.#n.prefix}${this.constructor.#f}`;
    document.querySelectorAll(`.${e}`).forEach(t => {
      t.classList.remove(e);
    }), this.#n.elItems.offsetHeight, this.#n.elItems.classList.remove(t);
    let i = this.constructor.#l.findIndex(t => t.target === this.#n.el);
    this.constructor.#l.splice(i, 1);
  }
  #w(t) {
    if (this.#n.isMoving && t.preventDefault(), !(t.target.closest(".itc-slider-btn") || t.target.closest(".itc-slider-indicators"))) return;
    let s = this.#n.prefix + this.constructor.#g,
      e = this.#n.prefix + this.constructor.#h;
    if (this.#u("stop"), t.target.closest(`.${s}`) || t.target.closest(`.${e}`)) this.#n.direction = t.target.closest(`.${s}`) ? "prev" : "next", this.#r();else if (t.target.dataset.slideTo) {
      let i = parseInt(t.target.dataset.slideTo, 10);
      this.#s(i);
    }
    this.#m.loop && this.#u();
  }
  #x() {
    this.#u("stop");
  }
  #y() {
    this.#u();
  }
  #z() {
    this.#m.loop && !this.#n.isBalancing && (this.#n.isBalancing = !0, window.requestAnimationFrame(() => {
      this.#A(!1);
    }));
  }
  #B() {
    this.#m.loop && (this.#n.isBalancing = !1);
  }
  #C(a) {
    a.preventDefault();
  }
  #D() {
    "hidden" === document.visibilityState ? this.#u("stop") : "visible" === document.visibilityState && this.#m.loop && this.#u();
  }
  #E(n) {
    this.#n.isMoving = !1, this.#u("stop");
    let h = 0 === n.type.search("touch") ? n.touches[0] : n;
    this.#n.swipeX = h.clientX, this.#n.swipeY = h.clientY, this.#n.isSwiping = !0, this.#n.isTouchMoving = !1;
  }
  #F(r) {
    if (!this.#n.isSwiping) return;
    let l = 0 === r.type.search("touch") ? r.changedTouches[0] : r,
      o = this.#n.elWrapper.getBoundingClientRect(),
      c = l.clientX < o.left ? o.left : l.clientX;
    c = c > o.right ? o.right : c;
    let d = this.#n.swipeX - c;
    if (0 === d) {
      this.#n.isSwiping = !1;
      return;
    }
    if (!this.#m.loop) {
      let p = 1 === this.#n.activeItems[0] && d <= 0,
        u = this.#n.activeItems[this.#n.activeItems.length - 1] && d >= 0;
      (p || u) && (d = 0);
    }
    let v = d / this.#n.width * 100,
      m = this.#n.prefix + this.constructor.#j;
    if (this.#n.elItems.classList.remove(m), v > this.constructor.#k) {
      this.#n.direction = "next";
      let I = 0;
      for (; I <= Math.floor(Math.abs(v) - this.constructor.#k) / 100;) this.#r(), I += 1;
    } else if (v < -this.constructor.#k) {
      this.#n.direction = "prev";
      let f = 0;
      for (; f <= Math.floor(Math.abs(v) - this.constructor.#k) / 100;) this.#r(), f += 1;
    } else this.#n.direction = "none", this.#r();
    this.#n.isSwiping = !1, this.#m.loop && this.#u(), this.#n.isBalancing = !1;
  }
  #G(g) {
    if (!this.#n.isSwiping) return;
    this.#n.isMoving = !0;
    let x = 0 === g.type.search("touch") ? g.changedTouches[0] : g,
      $ = this.#n.swipeX - x.clientX,
      b = this.#n.swipeY - x.clientY,
      E = this.#n.prevPosX ? this.#n.prevPosX : x.clientX,
      L = E > x.clientX ? "next" : "prev";
    if (this.#n.prevPosX = x.clientX, !this.#n.isTouchMoving) {
      if (Math.abs(b) > Math.abs($) || 0 === Math.abs($)) {
        this.#n.isSwiping = !1;
        return;
      }
      this.#n.isTouchMoving = !0;
    }
    if (g.preventDefault(), !this.#m.loop) {
      let _ = 1 === this.#n.activeItems[0] && $ <= 0,
        y = this.#n.activeItems[this.#n.activeItems.length - 1] && $ >= 0;
      (_ || y) && ($ /= 4);
    }
    let T = this.#n.prefix + this.constructor.#j;
    this.#n.elItems.classList.add(T);
    let w = this.#n.translate - $;
    this.#n.elItems.style.transform = `translate3D(${w}px, 0px, 0.1px)`, this.#m.loop && (this.#n.direction = $ > 0 ? "next" : "prev", this.#n.direction = L, window.requestAnimationFrame(() => {
      this.#A(!0);
    }));
  }
  #q() {
    this.#n.events = {
      click: [this.#n.el, this.#w.bind(this), !0],
      mouseenter: [this.#n.el, this.#x.bind(this), !0],
      mouseleave: [this.#n.el, this.#y.bind(this), !0],
      transitionstart: [this.#n.elItems, this.#z.bind(this), this.#m.loop],
      transitionend: [this.#n.elItems, this.#B.bind(this), this.#m.loop],
      touchstart: [this.#n.el, this.#E.bind(this), this.#m.swipe],
      mousedown: [this.#n.el, this.#E.bind(this), this.#m.swipe],
      touchend: [document, this.#F.bind(this), this.#m.swipe],
      mouseup: [document, this.#F.bind(this), this.#m.swipe],
      touchmove: [this.#n.el, this.#G.bind(this), this.#m.swipe],
      mousemove: [this.#n.el, this.#G.bind(this), this.#m.swipe],
      dragstart: [this.#n.el, this.#C.bind(this), !0],
      visibilitychange: [document, this.#D.bind(this), !0]
    }, Object.keys(this.#n.events).forEach(t => {
      if (this.#n.events[t][2]) {
        let s = this.#n.events[t][0],
          e = this.#n.events[t][1];
        if ("touchstart" === t || "touchmove" === t) {
          let i = !!this.constructor.checkSupportPassiveEvents() && {
            passive: !1
          };
          s.addEventListener(t, e, i);
        } else s.addEventListener(t, e);
      }
    }), this.#o = new ResizeObserver(t => {
      window.requestAnimationFrame(this.#t.bind(this));
    }), this.#o.observe(this.#n.elWrapper);
  }
  #v() {
    Object.keys(this.#n.events).forEach(t => {
      if (this.#n.events[t][2]) {
        let s = this.#n.events[t][0],
          e = this.#n.events[t][1];
        s.removeEventListener(t, e), this.#o.disconnect();
      }
    });
  }
  #u(S) {
    if (this.#m.autoplay) {
      if ("stop" === S) {
        clearInterval(this.#n.intervalId), this.#n.intervalId = null;
        return;
      }
      null === this.#n.intervalId && (this.#n.intervalId = setInterval(() => {
        this.#n.direction = "prev" === this.#m.direction ? "prev" : "next", this.#r();
      }, this.#m.interval));
    }
  }
  #A(M = !1) {
    if (!this.#n.isBalancing && !M) return;
    let N = this.#n.elWrapper.getBoundingClientRect(),
      C = N.width / this.#n.countActiveItems / 2,
      O = this.#n.elListItem.length;
    if ("next" === this.#n.direction) {
      let P = this.#n.exItemMin.getBoundingClientRect().right;
      if (P < N.left - C) {
        let A = this.#n.els.find(t => t.el === this.#n.exItemMin);
        A.order = this.#n.exOrderMin + O;
        let R = this.#n.exTranslateMin + O * this.#n.width;
        A.translate = R, this.#n.exItemMin.style.transform = `translate3D(${R}px, 0px, 0.1px)`, this.#H();
      }
    } else {
      let D = this.#n.exItemMax.getBoundingClientRect().left;
      if (D > N.right + C) {
        let H = this.#n.els.find(t => t.el === this.#n.exItemMax);
        H.order = this.#n.exOrderMax - O;
        let B = this.#n.exTranslateMax - O * this.#n.width;
        H.translate = B, this.#n.exItemMax.style.transform = `translate3D(${B}px, 0px, 0.1px)`, this.#H();
      }
    }
    M || window.requestAnimationFrame(() => {
      this.#A(!1);
    });
  }
  #I() {
    let X = this.#n.prefix + this.constructor.#d;
    this.#n.activeItems.forEach((t, s) => {
      t ? this.#n.elListItem[s].classList.add(X) : this.#n.elListItem[s].classList.remove(X);
      let e = this.#n.el.querySelectorAll(`.${this.#n.prefix}${this.constructor.#e}`);
      e.length && t ? e[s].classList.add(`${this.#n.prefix}${this.constructor.#f}`) : e.length && !t && e[s].classList.remove(`${this.#n.prefix}${this.constructor.#f}`);
    });
  }
  #r() {
    if ("none" === this.#n.direction) {
      let q = this.#n.translate;
      this.#n.elItems.style.transform = `translate3D(${q}px, 0px, 0.1px)`;
      return;
    }
    let W = "next" === this.#n.direction ? -this.#n.width : this.#n.width,
      V = this.#n.translate + W;
    if (!this.#m.loop) {
      let k = this.#n.width * (this.#n.elListItem.length - this.#n.countActiveItems);
      if (Math.round(100 * V) < -Math.round(100 * k) || Math.round(100 * V) > 0) return;
      this.#n.btnPrev && (this.#n.btnPrev.classList.remove(this.#n.btnClassHide), this.#n.btnNext.classList.remove(this.#n.btnClassHide)), this.#n.btnPrev && Math.round(100 * V) === -Math.round(100 * k) ? this.#n.btnNext.classList.add(this.#n.btnClassHide) : this.#n.btnPrev && 0 === Math.round(100 * V) && this.#n.btnPrev.classList.add(this.#n.btnClassHide);
    }
    "next" === this.#n.direction ? this.#n.activeItems = [...this.#n.activeItems.slice(-1), ...this.#n.activeItems.slice(0, -1)] : this.#n.activeItems = [...this.#n.activeItems.slice(1), ...this.#n.activeItems.slice(0, 1)], this.#I(), this.#n.translate = V, this.#n.elItems.style.transform = `translate3D(${V}px, 0px, 0.1px)`;
  }
  #s(F) {
    let Y = this.#n.activeItems.reduce((t, s, e) => {
      let i = s ? F - e : t;
      return Math.abs(i) < Math.abs(t) ? i : t;
    }, this.#n.activeItems.length);
    if (0 !== Y) {
      this.#n.direction = Y > 0 ? "next" : "prev";
      for (let z = 0; z < Math.abs(Y); z++) this.#r();
    }
  }
  #p() {
    this.#n.els = [], this.#n.translate = 0, this.#n.activeItems = [], this.#n.isBalancing = !1;
    let j = parseFloat(getComputedStyle(this.#n.elItems).gap) || 0;
    this.#n.width = this.#n.elListItem[0].getBoundingClientRect().width + j;
    let G = this.#n.elWrapper.getBoundingClientRect().width;
    if (this.#n.countActiveItems = Math.round(G / this.#n.width), this.#n.elListItem.forEach((t, s) => {
      t.style.transform = "", this.#n.activeItems.push(s < this.#n.countActiveItems ? 1 : 0), this.#n.els.push({
        el: t,
        index: s,
        order: s,
        translate: 0
      });
    }), this.#n.countActiveItems === this.#n.elListItem.length ? (this.#n.btnPrev && this.#n.btnPrev.classList.add(this.#n.btnClassHide), this.#n.btnNext && this.#n.btnNext.classList.add(this.#n.btnClassHide)) : (this.#n.btnPrev && this.#n.btnPrev.classList.remove(this.#n.btnClassHide), this.#n.btnNext && this.#n.btnNext.classList.remove(this.#n.btnClassHide)), this.#m.loop) {
      let J = this.#n.elListItem.length - 1,
        K = -(J + 1) * this.#n.width;
      this.#n.elListItem[J].style.transform = `translate3D(${K}px, 0px, 0.1px)`, this.#n.els[J].order = -1, this.#n.els[J].translate = K, this.#H();
    } else this.#n.btnPrev && this.#n.btnPrev.classList.add(this.#n.btnClassHide);
    this.#I(), this.#u();
  }
  #t() {
    let Q = this.#n.prefix + this.constructor.#j,
      U = parseFloat(getComputedStyle(this.#n.elItems).gap) || 0,
      Z = this.#n.elListItem[0].getBoundingClientRect().width + U,
      tt = this.#n.elWrapper.getBoundingClientRect().width;
    (Z !== this.#n.width || Math.round(tt / Z) !== this.#n.countActiveItems) && (this.#u("stop"), this.#n.elItems.classList.add(Q), this.#n.elItems.style.transform = "translate3D(0px, 0px, 0.1px)", this.#p(), window.requestAnimationFrame(() => {
      this.#n.elItems.classList.remove(Q);
    }));
  }
  #H() {
    let ts = this.#n.els.map(t => t.el),
      te = this.#n.els.map(t => t.order);
    this.#n.exOrderMin = Math.min(...te), this.#n.exOrderMax = Math.max(...te);
    let ti = te.indexOf(this.#n.exOrderMin),
      ta = te.indexOf(this.#n.exOrderMax);
    this.#n.exItemMin = ts[ti], this.#n.exItemMax = ts[ta], this.#n.exTranslateMin = this.#n.els[ti].translate, this.#n.exTranslateMax = this.#n.els[ta].translate;
  }
}
ItcSlider.createInstances();

/***/ }),

/***/ "./src/js/services/scrollAction.js":
/*!*****************************************!*\
  !*** ./src/js/services/scrollAction.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/js/services/variables.js":
/*!**************************************!*\
  !*** ./src/js/services/variables.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/*!*************************!*\
  !*** ./src/js/pages.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_preload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/preload.js */ "./src/js/modules/preload.js");
/* harmony import */ var _modules_hamburger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburger.js */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/styles.js */ "./src/js/modules/styles.js");
/* harmony import */ var _modules_products_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/products.js */ "./src/js/modules/products.js");
/* harmony import */ var _modules_smallMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/smallMenu.js */ "./src/js/modules/smallMenu.js");
/* harmony import */ var _modules_showTopMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showTopMenu.js */ "./src/js/modules/showTopMenu.js");
/* harmony import */ var _services_variables_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/variables.js */ "./src/js/services/variables.js");
/* harmony import */ var _services_itc_slider_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/itc-slider.min.js */ "./src/js/services/itc-slider.min.js");










window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_preload_js__WEBPACK_IMPORTED_MODULE_0__["default"])(".overlay", "body", "style");
  window.addEventListener("scroll", _modules_showTopMenu_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  if (window.innerWidth >= 768) {
    listener("click");
  } else {
    listener("touchend");
  }
  function listener(action) {
    window.addEventListener(action, e => {
      if (e.target.classList.contains("style__show") || e.target.closest(".btn__styles")) {
        (0,_modules_styles_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, ".btn__styles", "styles__link", "styles__title", "style__show");
      } else if (e.target.closest(".products")) {
        (0,_modules_products_js__WEBPACK_IMPORTED_MODULE_3__["default"])("menu__full_white", "menu__forbigproduct", "show", "overflow_hidden");
      } else if (e.target.closest(".menu__subtitle")) {
        (0,_modules_smallMenu_js__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, "show", "height", "overflow_scroll");
      } else if (e.target.closest(".hamburger") || e.target.classList.contains(".hamburger")) {
        (0,_modules_hamburger_js__WEBPACK_IMPORTED_MODULE_1__["default"])("menu__full_white", "menu__forbigproduct", "menu__big_show", "menu__list_hide", "menu__display_none", "overflow_scroll", "overflow_hidden", "show", "height");
      }
    });
  }
  _services_variables_js__WEBPACK_IMPORTED_MODULE_6__.stylesLink.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      _services_variables_js__WEBPACK_IMPORTED_MODULE_6__.stylesImg[i].classList.add("show");
    });
    item.addEventListener("mouseout", () => {
      _services_variables_js__WEBPACK_IMPORTED_MODULE_6__.stylesImg[i].classList.remove("show");
    });
  });
  const featuresTitle = document.querySelectorAll(".features__item-title");
  const featuresSpans = document.querySelectorAll(".spans");
  featuresTitle.forEach(title => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      const featuresSpans = title.querySelector(".spans");
      if (content && content.classList.contains("features__item-content")) {
        content.classList.toggle("show-content");
        featuresSpans.classList.toggle("create-cross");
      }
    });
  });
  const coockersList = document.getElementById("cookers-top__list");
  if (coockersList) {
    coockersList.addEventListener("change", e => {
      let selectedValue = e.target.value;
      let sections = document.querySelectorAll(".cookers-bottom__type");
      sections.forEach(section => {
        if (selectedValue === "All") {
          section.style.display = "block";
        } else {
          if (section.id === selectedValue) {
            section.style.display = "block";
          } else {
            section.style.display = "none";
          }
        }
      });
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=pages.js.map