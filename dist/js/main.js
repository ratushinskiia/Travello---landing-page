/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const favorite = __webpack_require__(/*! ./modules/favorite.js */ \"./src/js/modules/favorite.js\");\r\nconst hotelsTabs = __webpack_require__(/*! ./modules/hotels-tabs.js */ \"./src/js/modules/hotels-tabs.js\");\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/favorite.js":
/*!************************************!*\
  !*** ./src/js/modules/favorite.js ***!
  \************************************/
/***/ (function(module) {

eval("// let sum = (a, b) => a + b;\r\n// module.exports = sum;\r\n\r\nconst Hearts = document.querySelectorAll('.hotels-item__heart-path');\r\nfor (var i = 0; i < Hearts.length; i++) {\r\n    let heart = Hearts[i];\r\n    heart.addEventListener(\"click\", function() {\r\n        if (heart.classList.contains(\"favorited\")) {\r\n            heart.classList.remove(\"favorited\");\r\n        }\r\n        else {\r\n            heart.classList.add(\"favorited\");\r\n        }\r\n    });\r\n};\r\n\r\n\r\nmodule.exports = Hearts;\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/favorite.js?");

/***/ }),

/***/ "./src/js/modules/hotels-tabs.js":
/*!***************************************!*\
  !*** ./src/js/modules/hotels-tabs.js ***!
  \***************************************/
/***/ (function(module) {

eval("const onTabClick = function(idContainer, idElement) {\r\n    let dataAttribute = `[data-${idContainer}`;\r\n    for (let item of document.querySelectorAll(`${dataAttribute}-name`)) {\r\n        item.classList.remove('active');\r\n    }\r\n    for (let item of document.querySelectorAll(`${dataAttribute}-tab`)) {\r\n        item.classList.remove('active');\r\n    }\r\n    document.querySelector(`${dataAttribute}-name=${idElement}]`).classList.add('active');\r\n    document.querySelector(`${dataAttribute}-tab=${idElement}]`).classList.add('active');\r\n}\r\nlet tabsName = document.querySelectorAll('.tab-name');\r\ntabsName.forEach((tab) => {\r\n    tab.addEventListener('click', (event) => {\r\n        onTabClick(event.target.parentElement.id, event.target.dataset.hotelsCountriesName)\r\n    })\r\n})\r\n\r\nmodule.exports = onTabClick;\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/hotels-tabs.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;