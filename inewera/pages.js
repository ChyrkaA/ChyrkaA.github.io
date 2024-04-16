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


window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelectorAll(".overlay");
  const catalogItem = document.querySelectorAll(".catalog__link");
  const catalogHeader = document.querySelectorAll(".catalog__header");
  const catalogImg = document.querySelectorAll(".catalog__img");
  catalogItem.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      overlay[i].classList.add("active__overlay");
      catalogHeader[i].classList.add("active__header");
      catalogImg[i].classList.add("transform__scale");
    });
  });
  catalogItem.forEach((item, i) => {
    item.addEventListener("mouseout", () => {
      overlay[i].classList.remove("active__overlay");
      catalogHeader[i].classList.remove("active__header");
      catalogImg[i].classList.remove("transform__scale");
    });
  });
  const menuTop = document.querySelector(".menuTop");
  function scrolling() {
    if (scrollY > 200) {
      menuTop.classList.add("transform");
    } else {
      menuTop.classList.remove("transform");
    }
  }
  window.addEventListener("scroll", scrolling);
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
  window.addEventListener("click", e => {
    if (e.target.classList.contains("button")) {
      console.log(1);
      overlayModal.classList.add("overlay-modal__active");
      modalBig.classList.add("modal__active");
    } else if (e.target.classList.contains("modal__close") || e.target.classList.contains("overlay-modal")) {
      overlayModal.classList.remove("overlay-modal__active");
      modalBig.classList.remove("modal__active");
      modalMini.classList.remove("modal__active");
    }
  });
  const overlayModal = document.querySelector(".overlay-modal");
  const modalBig = document.querySelector(".modal_big");
  const modalMini = document.querySelector(".modal_mini");
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
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
          modalBig.classList.remove("modal__active");
          overlayModal.classList.add("overlay-modal__active");
          modalMini.classList.add("modal__active");
          setTimeout(function () {
            overlayModal.classList.remove("overlay__active");
            modalMini.classList.remove("modal-modal__active");
          }, 5000);
          form.reset();
        }
      }).catch(error => {
        console.log("Error:", error);
      });
      return false;
    });
  });
  let dataObj = "";
  let namesStartingWithLetter = [];
  fetch("data.json").then(function (response) {
    if (!response.ok) {
      throw new Error("Failed to load data: " + response.status);
    }
    return response.json();
  }).then(function (jsonData) {
    dataObj = jsonData;
    console.log(dataObj);
  }).catch(function (error) {
    console.error("Request failed:", error.message);
  });
  function createElement(node, classname) {
    const element = document.createElement(node);
    element.classList.add(classname);
    return element;
  }
  const letters = Array.from({
    length: 26
  }, (_, i) => String.fromCharCode(65 + i));
  const createSlide = letter => {
    const slide = createElement("div", "brendy__slider_slide");
    const overlay = createElement("div", "brendy__slider_slide-overlay");
    const overlayBlack = createElement("div", "brendy__slider_slide-overlayBlack");
    const overlayBorder = createElement("div", "brendy__slider_slide-border");
    const overlayBorderBox = createElement("div", "brendy__slider_slide-border-box");
    const letterDiv = createElement("div", "brendy__slider_slide-letter");
    letterDiv.textContent = letter;
    const letterSmallDiv = createElement("div", "brendy__slider_slide-letterSmall");
    letterSmallDiv.textContent = letter;
    const img = createElement("img", "brendy__slider_slide-bckg");
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
    const slide = createElement("div", "brendy__slider_wrapper");
    for (let i = startIndex; i < endIndex; i++) {
      const letter = letters[i];
      const slideItem = createSlide(letter);
      slide.appendChild(slideItem);
    }
    return slide;
  };
  const sliderItems = document.querySelectorAll(".itc-slider-item");
  sliderItems.forEach((item, i) => {
    let startIndex = i * 9;
    let endIndex = Math.min(startIndex + 9, letters.length);
    const slider = createSliderWithRange(letters, startIndex, endIndex);
    item.appendChild(slider);
  });
  const brendySliderOverlay = document.querySelectorAll(".brendy__slider_slide-overlay");
  const brendySlide = document.querySelectorAll(".brendy__slider_slide");
  const letter = document.querySelectorAll(".brendy__slider_slide-letter");
  const letterSmall = document.querySelectorAll(".brendy__slider_slide-letterSmall");
  const brendySliderOverlayBlack = document.querySelectorAll(".brendy__slider_slide-overlayBlack");
  const brendySlideerBorder = document.querySelectorAll(".brendy__slider_slide-border");
  brendySlide.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      brendySliderOverlay[i].classList.add("active__overlay");
      brendySliderOverlayBlack[i].classList.add("active__overlay");
      brendySlideerBorder[i].classList.add("active__header");
      letterSmall[i].classList.add("active__letterSmall");
      letter[i].classList.add("hidden__letter");
    });
    item.addEventListener("mouseout", () => {
      brendySliderOverlay[i].classList.remove("active__overlay");
      brendySlideerBorder[i].classList.remove("active__header");
      brendySliderOverlayBlack[i].classList.remove("active__overlay");
      letterSmall[i].classList.remove("active__letterSmall");
      letter[i].classList.remove("hidden__letter");
    });
  });
  const brendySlideerSlide = document.querySelectorAll(".brendy__slider_slide");
  const brendyLetter = document.querySelector(".brendy__letter");
  let letterContent = "";
  brendySlideerSlide.forEach((item, i) => {
    item.addEventListener("click", () => {
      letterContent = letter[i].textContent;
      brendyLetter.textContent = letterContent;
      filterData(letterContent, dataObj);
    });
  });
  const buttonCat = document.querySelectorAll(".button__Category");
  const menuBig = document.querySelector(".menuBig");
  const menuBigClose = document.querySelector(".menuBig__close");
  buttonCat.forEach(item => {
    item.addEventListener("click", () => {
      menuBig.classList.add("top");
      window.removeEventListener("scroll", scrolling);
      menuTop.classList.add("transform");
      menuTopLine.classList.remove("transform__translateX");
      menuBigLogp.classList.remove("hidden__letter");
      hamburger.classList.remove("hamburger__cross");
    });
  });
  menuBigClose.addEventListener("click", () => {
    menuBig.classList.remove("top");
    if (window.innerWidth >= 991) {
      window.addEventListener("scroll", scrolling);
    }
  });
  function filterData(letter, arr) {
    namesStartingWithLetter = arr.filter(object => object.phone.startsWith(`${letter}`)).map(object => object.phone);
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
  const overlayBlock = document.querySelector(".photo__overlay");
  const bigImg = document.querySelector(".photo__overlay_img");
  document.body.addEventListener("click", e => {
    if (e.target.closest(".photo__img")) {
      const img = e.target.closest(".photo__img");
      overlayBlock.classList.add("photo__overlay_active");
      const linkImg = img.getAttribute("src");
      bigImg.setAttribute("src", linkImg);
    } else if (e.target.closest(".photo__overlay_close")) {
      overlayBlock.classList.remove("photo__overlay_active");
    } else if (e.target.classList.contains("photo__overlay")) {
      overlayBlock.classList.remove("photo__overlay_active");
    }
  });
  function resize() {
    if (window.innerWidth <= 991) {
      window.removeEventListener("scroll", scrolling);
      menuTop.classList.add("transform");
    } else {
      window.addEventListener("scroll", scrolling);
      menuTop.classList.remove("transform");
    }
  }
  resize();
  window.addEventListener("resize", resize);
  const hamburger = document.querySelector(".hamburger");
  const menuTopLine = document.querySelector(".menuTop__line");
  const menuBigLogp = document.querySelector(".menuTop__bigLogo");
  hamburger.addEventListener("click", () => {
    menuTopLine.classList.toggle("transform__translateX");
    menuBigLogp.classList.toggle("hidden__letter");
    hamburger.classList.toggle("hamburger__cross");
  });
});

/***/ })

/******/ });
//# sourceMappingURL=pages.js.map