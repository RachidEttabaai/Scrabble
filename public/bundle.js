/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/Board.js":
/*!****************************!*\
  !*** ./assets/js/Board.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBoard)\n/* harmony export */ });\nfunction createBoard(rows)\n{\n    let board = []\n\n    for (let i=0;i<rows;i++) {\n        board[i] = [];\n     }\n   \n     return board;\n}\n\n//# sourceURL=webpack://scrabble/./assets/js/Board.js?");

/***/ }),

/***/ "./assets/js/Init.js":
/*!***************************!*\
  !*** ./assets/js/Init.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Init)\n/* harmony export */ });\n/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ \"./assets/js/Board.js\");\n\n\nfunction Init(){\n\n    let scrabbleboard = (0,_Board_js__WEBPACK_IMPORTED_MODULE_0__.default)(15)\n\n    let word = prompt(\"Saisir un mot: \")\n    let sens = prompt(\"Sens pour le mot (de gauche vers la droite [LtoR] ou du haut vers le bas [UtoD]): \")\n\n    if(word.length == 0 || word.length > 16){\n        alert(\"erreur!!!\")\n    }else{\n        console.log(word)\n        if(sens == \"LtoR\")\n        {\n            for (let index = 0; index < word.length; index++) \n            {\n                scrabbleboard[0][index] = word[index]\n            }\n        }else if(sens == \"UtoD\")\n        {\n            for (let index = 0; index < word.length; index++) \n            {\n                scrabbleboard[index][0] = word[index]\n            }\n        }else{\n            console.error(\"erreur sur le sens !!!\")\n        }\n        \n        console.log(scrabbleboard)\n    }\n}\n\n\n\n//# sourceURL=webpack://scrabble/./assets/js/Init.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js_Init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/Init.js */ \"./assets/js/Init.js\");\n\n\n(0,_assets_js_Init_js__WEBPACK_IMPORTED_MODULE_0__.default)()\n\n//# sourceURL=webpack://scrabble/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;