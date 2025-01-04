/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const API_BASE_URL = 'http://localhost:3000/api/testimonials';\n    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';\n    const API_URL = 'https://api.frontendexpert.io/api/fe/testimonials';\n\n    const testimonials = [];\n    let hasNext = true;\n    const testimonialContainer = document.querySelector(\"#testimonial-container\");\n\n    function fetchData(limit, after) {\n        fetch(`${API_BASE_URL}?limit=5`)\n            .then(data => data.json())\n            .then(data => {\n                if (!data.hasNext) {\n                    hasNext = false;\n                }\n                addTestimonial(data.testimonials);\n            });\n    }\n\n    function addTestimonial(testimonials) {\n        const container = document.createDocumentFragment();\n        testimonials.forEach((testimonial) => {\n            const p = document.createElement('p');\n            p.append(testimonial.message);\n            p.classList.add('testimonial');\n            container.append(p);\n        });\n        testimonialContainer.append(container);\n    }\n\n    fetchData(5);\n});\n\n\n//# sourceURL=webpack://infinite-scroller/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;