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

/***/ "./src/components/stopwatch.js":
/*!*************************************!*\
  !*** ./src/components/stopwatch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Stopwatch {\n    constructor() {\n        this.stopwatchContainer = document.querySelector(\"#stopwatch\");\n        this.timer = this.stopwatchContainer.querySelector(\"#timer\");\n        this.startButton = this.stopwatchContainer.querySelector(\"#start-button\");\n        this.stopButton = this.stopwatchContainer.querySelector(\"#stop-button\");\n        this.resetButton = this.stopwatchContainer.querySelector(\"#reset-button\");   \n        this.startTime = null;\n        // this.intervalId = null;\n        this.animationId = null;\n        this.attachEventListeners();\n    }\n\n    attachEventListeners() {\n        this.startButton.addEventListener(\"click\", this.handleStart.bind(this));\n        this.stopButton.addEventListener(\"click\", this.handleStop.bind(this));\n        this.resetButton.addEventListener(\"click\", this.handleReset.bind(this));\n    }\n\n\n    handleStart() {\n        if (this.startTime) {\n            this.startTime = this.startTime + performance.now();\n        } else {\n            this.startTime = performance.now();\n        }\n        // this.intervalId = setInterval(this.updateTime.bind(this), 0);\n        this.updateTime();\n        this.startButton.disabled = true;\n        this.stopButton.disabled = false;\n        this.resetButton.disabled = true;\n    }\n\n    handleStop() {\n        this.startTime = this.startTime - performance.now();\n        // clearInterval(this.intervalId);\n        cancelAnimationFrame(this.animationId);\n        this.animationId = null;\n        this.startButton.disabled = false;\n        this.stopButton.disabled = true;\n        this.resetButton.disabled = false;\n    }\n\n    handleReset() {\n        this.printTime(0,0,0);\n        this.resetButton.disabled = true;\n        this.startTime = null;\n    }\n\n\n    updateTime() {\n        let minutes, seconds, milliSeconds;\n        const currentTime = performance.now();\n        \n        let timeElapsed = currentTime - this.startTime;\n\n        milliSeconds = Math.floor(timeElapsed % 1000);\n        seconds = (Math.floor((timeElapsed)/1000)) % 60;\n        minutes = Math.floor((timeElapsed / 1000) / 60)\n        this.printTime(milliSeconds, seconds, minutes);\n        this.animationId = requestAnimationFrame(this.updateTime.bind(this));\n        console.log(this.animationId);\n    }\n\n    printTime(milliSeconds, seconds, minutes) {\n        milliSeconds = milliSeconds.toString().padStart(3, '0');\n        seconds = seconds.toString().padStart(2, '0');\n        minutes = minutes.toString().padStart(2, '0');\n\n        const time = [minutes.toString().padStart(2, '0'), seconds, milliSeconds].join(\":\");\n        this.timer.textContent = time;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stopwatch);\n\n//# sourceURL=webpack://stopwatch/./src/components/stopwatch.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_stopwatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stopwatch */ \"./src/components/stopwatch.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    new _components_stopwatch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});\n\n//# sourceURL=webpack://stopwatch/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;