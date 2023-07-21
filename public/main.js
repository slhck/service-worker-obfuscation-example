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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("// src/main.js\nif (\"serviceWorker\" in navigator) {\n  navigator.serviceWorker\n    .register(\"/serviceWorker.js\")\n    .then((registration) => {\n      console.log(\"Service worker registered:\", registration);\n    })\n    .catch((error) => {\n      console.error(\"Error registering service worker:\", error);\n    });\n}\n\n// Fetch an image and log whether it's fetched from cache or network\nconst imgElement = document.getElementById(\"my-image\");\nconst imageUrl =\n  \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BillieEilishO2160622_%2844_of_45%29_%2852152978743%29_%28cropped%29.jpg/346px-BillieEilishO2160622_%2844_of_45%29_%2852152978743%29_%28cropped%29.jpg\";\n\nimgElement.addEventListener(\"click\", () => {\n  fetch(imageUrl)\n    .then((response) => {\n      if (response.ok) {\n        console.log(\"Image fetched from network:\", imageUrl);\n      } else {\n        console.log(\"Image fetch failed:\", imageUrl);\n      }\n    })\n    .catch((error) => {\n      console.error(\"Image fetch error:\", error);\n    });\n});\n\n\n//# sourceURL=webpack://service-worker-example/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;