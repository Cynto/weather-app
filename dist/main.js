/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/basicDom.js":
/*!*************************!*\
  !*** ./src/basicDom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const basicDOM = (() => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  header.appendChild(nav);
  document.body.appendChild(header);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basicDOM);


/***/ }),

/***/ "./src/coordinatesModule.js":
/*!**********************************!*\
  !*** ./src/coordinatesModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCoordinates)
/* harmony export */ });
/* harmony import */ var _weatherModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherModule */ "./src/weatherModule.js");


async function getCoordinates(location) {
  try {
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=e1ac105a4456be2d9e8b62718e4f0bb3&query=${location}`,
    );
    const coordinates = await response.json();
    const latCord = coordinates.data[0].latitude;
    const longCord = coordinates.data[0].longitude;
    const coordArray = [latCord, longCord];
    return coordArray;
  } catch {}
}


/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _weatherModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherModule */ "./src/weatherModule.js");
/* harmony import */ var _coordinatesModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinatesModule */ "./src/coordinatesModule.js");



async function getWeather(location) {
  try {
    const coordArray = await (0,_coordinatesModule__WEBPACK_IMPORTED_MODULE_1__.default)(location);
    const weatherData = await (0,_weatherModule__WEBPACK_IMPORTED_MODULE_0__.default)(coordArray[0], coordArray[1]);

    console.log(weatherData);
    const weatherObject = {
      currentTemp: Math.round(weatherData.current.temp),
      currentWeather: weatherData.current.weather[0].main,
      forecast: weatherData.daily,
    };
    return weatherObject;
  } catch {}
}



/***/ }),

/***/ "./src/weatherModule.js":
/*!******************************!*\
  !*** ./src/weatherModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
async function getWeatherData(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&APPID=3916b14217fff7a0be917af95b868464`,
    );
    const weatherData = await response.json();
    return weatherData;
  } catch {}
}


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherModule */ "./src/weatherModule.js");
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");
/* harmony import */ var _coordinatesModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coordinatesModule */ "./src/coordinatesModule.js");
/* harmony import */ var _basicDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basicDom */ "./src/basicDom.js");






const idk = (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)('bridgend');
(async () => {
  console.log(await idk);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9iYXNpY0RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb29yZGluYXRlc01vZHVsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCOztBQUU5QjtBQUNmO0FBQ0E7QUFDQSxtR0FBbUcsU0FBUztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjZDO0FBQ0k7O0FBRWpEO0FBQ0E7QUFDQSw2QkFBNkIsMkRBQWM7QUFDM0MsOEJBQThCLHVEQUFjOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7O0FDakJQO0FBQ2Y7QUFDQTtBQUNBLDZEQUE2RCxTQUFTLE9BQU8sVUFBVTtBQUN2RjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNIO0FBQ087QUFDaEI7OztBQUdqQyxZQUFZLHVEQUFVO0FBQ3RCO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNpY0RPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBiYXNpY0RPTTtcbiIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL3dlYXRoZXJNb2R1bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5wb3NpdGlvbnN0YWNrLmNvbS92MS9mb3J3YXJkP2FjY2Vzc19rZXk9ZTFhYzEwNWE0NDU2YmUyZDllOGI2MjcxOGU0ZjBiYjMmcXVlcnk9JHtsb2NhdGlvbn1gLFxuICAgICk7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgbGF0Q29yZCA9IGNvb3JkaW5hdGVzLmRhdGFbMF0ubGF0aXR1ZGU7XG4gICAgY29uc3QgbG9uZ0NvcmQgPSBjb29yZGluYXRlcy5kYXRhWzBdLmxvbmdpdHVkZTtcbiAgICBjb25zdCBjb29yZEFycmF5ID0gW2xhdENvcmQsIGxvbmdDb3JkXTtcbiAgICByZXR1cm4gY29vcmRBcnJheTtcbiAgfSBjYXRjaCB7fVxufVxuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlck1vZHVsZSc7XG5pbXBvcnQgZ2V0Q29vcmRpbmF0ZXMgZnJvbSAnLi9jb29yZGluYXRlc01vZHVsZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb29yZEFycmF5ID0gYXdhaXQgZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb24pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoY29vcmRBcnJheVswXSwgY29vcmRBcnJheVsxXSk7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgY29uc3Qgd2VhdGhlck9iamVjdCA9IHtcbiAgICAgIGN1cnJlbnRUZW1wOiBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcCksXG4gICAgICBjdXJyZW50V2VhdGhlcjogd2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLm1haW4sXG4gICAgICBmb3JlY2FzdDogd2VhdGhlckRhdGEuZGFpbHksXG4gICAgfTtcbiAgICByZXR1cm4gd2VhdGhlck9iamVjdDtcbiAgfSBjYXRjaCB7fVxufVxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mdW5pdHM9bWV0cmljJkFQUElEPTM5MTZiMTQyMTdmZmY3YTBiZTkxN2FmOTViODY4NDY0YCxcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCB7fVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi93ZWF0aGVyTW9kdWxlJztcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL2dldFdlYXRoZXInO1xuaW1wb3J0IGdldENvb3JkaW5hdGVzIGZyb20gJy4vY29vcmRpbmF0ZXNNb2R1bGUnO1xuaW1wb3J0IGJhc2ljRE9NIGZyb20gJy4vYmFzaWNEb20nXG5cblxuY29uc3QgaWRrID0gZ2V0V2VhdGhlcignYnJpZGdlbmQnKTtcbihhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGF3YWl0IGlkayk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==