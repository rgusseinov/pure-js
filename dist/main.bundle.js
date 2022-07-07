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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ normalize)\n/* harmony export */ });\nconst countries = [\r\n  { name: \"istanbul\", country: \"turkey\" },\r\n  { name: \"Moscow \", country: \" Russia\" },\r\n  { name: \"iStanbul\", country: \"tUrkey\" },\r\n  { name: \"antalia\", country: \"turkeY \" },\r\n  { name: \"samarA\", country: \"  ruSsiA\" },\r\n  { name: \"Miami\", country: \"usa\" },\r\n];\r\n\r\nfunction normalize(countries) {\r\n  const countyList = [];\r\n  countries.forEach((item) => {\r\n    const trimedCountry = item.country.toLowerCase().trim();\r\n    if (!countyList.includes(trimedCountry))\r\n      countyList.push([trimedCountry, []]);\r\n  });\r\n\r\n  const countyListObject = Object.fromEntries(countyList);\r\n  countries.forEach((item) => {\r\n    const trimedCountry = item.country.toLowerCase().trim();\r\n    const trimedName = item.name.toLowerCase().trim();\r\n    let list = [];\r\n\r\n    const key = trimedCountry.toString();\r\n\r\n    if (key in countyListObject) {\r\n      list = countyListObject[key];\r\n      if (!list.includes(trimedName)) list.push(trimedName);\r\n\r\n      countyListObject[key] = list;\r\n      list = [];\r\n    }\r\n  });\r\n\r\n  Object.keys(countyListObject).forEach((key) => {\r\n    const cList = countyListObject[key].slice();\r\n    countyListObject[key] = cList.sort();\r\n  });\r\n\r\n  return countyListObject;\r\n}\r\n\r\nconsole.log(normalize(countries));\r\n\r\nconst set = new Set();\r\nconst russia = [\"moscow\", \"omsk\"];\r\nconst usa = [\"new york\"];\r\n\r\nset.add(russia);\r\nset.add(usa);\r\n\r\nfor (let country of set) {\r\n  console.log(country);\r\n}\r\n\n\n//# sourceURL=webpack://native-js/./src/index.js?");

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