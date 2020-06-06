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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/catalog-body/catalog-body.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/catalog-body/catalog-body.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function droppingList() {
  var spans = document.getElementsByClassName("catalog-types-span");

  for (var i = 0; i < spans.length; i++) {
    spans[i].addEventListener("click", function () {
      var current = this.nextElementSibling;
      current.classList.toggle("visible-class");
    });
  }
}

droppingList();

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/news-text/news-text.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/news-text/news-text.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function pagination() {
  var newsWrapper = document.querySelectorAll(".news-text-content"),
      newsButtons = document.querySelectorAll(".news-text-button"),
      currentWrapper;
  newsButtons.forEach(function (item) {
    item.addEventListener("click", chooseButton);
  });

  function chooseButton() {
    newsButtons.forEach(function (item) {
      item.classList.remove("news-bg-color");
    });
    this.classList.add("news-bg-color");
    currentWrapper = this.getAttribute("data-text-name");
    console.log(currentWrapper);
    chooseContent(currentWrapper);
  }

  function chooseContent(currentWrapper) {
    newsWrapper.forEach(function (item) {
      item.classList.contains(currentWrapper) ? item.classList.add("visible-text") : item.classList.remove("visible-text");
    });
  }
}

pagination();

/***/ }),

/***/ "./src/blocks/modules/project-tabs/project-tabs.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/project-tabs/project-tabs.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tab() {
  var buttons = document.querySelectorAll(".project-tabs-button"),
      content = document.querySelectorAll(".project-tabs-content"),
      currentTab;
  buttons.forEach(function (item) {
    item.addEventListener("click", selectTab);
  });

  function selectTab() {
    buttons.forEach(function (item) {
      item.classList.remove("button-bg");
    });
    this.classList.add("button-bg");
    currentTab = this.getAttribute("data-tab-name");
    selectContent(currentTab);
  }

  function selectContent(currentTab) {
    content.forEach(function (item) {
      item.classList.contains(currentTab) ? item.classList.add("tab-active") : item.classList.remove("tab-active");
    });
  }
}

tab();

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_catalog_body_catalog_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/catalog-body/catalog-body */ "./src/blocks/modules/catalog-body/catalog-body.js");
/* harmony import */ var _modules_catalog_body_catalog_body__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_body_catalog_body__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_project_tabs_project_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/project-tabs/project-tabs */ "./src/blocks/modules/project-tabs/project-tabs.js");
/* harmony import */ var _modules_project_tabs_project_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_project_tabs_project_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_news_text_news_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/news-text/news-text */ "./src/blocks/modules/news-text/news-text.js");
/* harmony import */ var _modules_news_text_news_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_news_text_news_text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map