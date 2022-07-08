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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Validator)\n/* harmony export */ });\nclass Validator {\r\n  constructor(type) {\r\n    this.stringValidTypes = [\"\", null, undefined];\r\n    this.validTypes = { string: this.stringValidTypes };\r\n    this.activeTypes = this.validTypes[type];\r\n    this.isRequired = false;\r\n    this.value = null;\r\n  }\r\n\r\n  string() {\r\n    return new Validator(\"string\");\r\n  }\r\n\r\n  required() {\r\n    this.isRequired = true;\r\n  }\r\n\r\n  isValid(value) {\r\n    if (!this.isRequired) {\r\n      console.log(this.activeTypes.includes(value));\r\n    } else {\r\n      console.log(!this.activeTypes.includes(value) && value.length > 0);\r\n    }\r\n  }\r\n  contains(value) {\r\n    this.value = value;\r\n    return this;\r\n  }\r\n}\r\n\r\nconst v = new Validator();\r\nconst schema = v.string();\r\nschema.isValid(); // true\r\nschema.isValid(null); // true\r\nschema.isValid(undefined); // true\r\n\r\nschema.required();\r\n\r\nconsole.log(\"-------\");\r\nschema.isValid(\"what does the fox say\"); // true\r\nschema.isValid(\"hexlet\"); // true\r\nschema.isValid(null); // false\r\nschema.isValid(\"\"); // false\r\n\r\nconsole.log(\"-------\");\r\nconsole.log(schema.contains(\"what\").isValid(\"what does the fox say\")); // true;\r\n// console.log(schema.contains(\"what\")); // true;\r\n\n\n//# sourceURL=webpack://native-js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;