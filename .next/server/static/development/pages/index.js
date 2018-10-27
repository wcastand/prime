module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils */ "./src/utils.js");
var _jsxFileName = "/Users/wcastand/Documents/prime/pages/index.js";




var primes = Object(_src_utils__WEBPACK_IMPORTED_MODULE_3__["generatePrime"])(100);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1386148555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1386148555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Prime table"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1386148555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    cellspacing: "0",
    className: "jsx-1386148555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-1386148555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-1386148555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-1386148555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), primes.map(function (x, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      key: "prime_row_".concat(idx),
      className: "jsx-1386148555",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, x);
  })), primes.map(function (x, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: "prime_col_".concat(idx),
      className: "jsx-1386148555",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      className: "jsx-1386148555",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, x), primes.map(function (y, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        key: "prime_res_".concat(idx, "_").concat(index),
        className: "jsx-1386148555",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, x * y);
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "522474906",
    css: "table.jsx-1386148555{margin:0;padding:0;color:#232323;}tr.jsx-1386148555{margin:0;padding:0;}th.jsx-1386148555{font-weight:bold;min-width:15px;margin:0;padding:5px;text-align:center;border-right:1px solid #232323;border-bottom:1px solid #232323;}td.jsx-1386148555{min-width:15px;margin:0;padding:5px;text-align:center;border-right:1px solid #232323;border-bottom:1px solid #232323;}td.jsx-1386148555:nth-child(even),th.jsx-1386148555:nth-child(even){background-color:#f1f1f1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93Y2FzdGFuZC9Eb2N1bWVudHMvcHJpbWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQixBQUdrQixBQUtBLEFBSVEsQUFTRixBQVdVLFNBNUJmLEFBS0EsTUFhRCxFQVRNLEVBUkQsQUFLaEIsS0FhYyxDQVVkLE9BbkJXLENBUlgsR0FrQm9CLEtBVE4sWUFDTSxDQVNhLGlCQVJBLGNBVUMsaUJBVEEsZUFVbEMsaUJBVEEiLCJmaWxlIjoiL1VzZXJzL3djYXN0YW5kL0RvY3VtZW50cy9wcmltZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgZ2VuZXJhdGVQcmltZSB9IGZyb20gJy4uL3NyYy91dGlscydcblxuY29uc3QgcHJpbWVzID0gZ2VuZXJhdGVQcmltZSgxMDApXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UHJpbWUgdGFibGU8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8dGFibGUgY2VsbHNwYWNpbmc9XCIwXCI+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggLz5cbiAgICAgICAgICB7cHJpbWVzLm1hcCgoeCwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8dGgga2V5PXtgcHJpbWVfcm93XyR7aWR4fWB9Pnt4fTwvdGg+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdHI+XG4gICAgICAgIHtwcmltZXMubWFwKCh4LCBpZHgpID0+IChcbiAgICAgICAgICA8dHIga2V5PXtgcHJpbWVfY29sXyR7aWR4fWB9PlxuICAgICAgICAgICAgPHRoPnt4fTwvdGg+XG4gICAgICAgICAgICB7cHJpbWVzLm1hcCgoeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHRkIGtleT17YHByaW1lX3Jlc18ke2lkeH1fJHtpbmRleH1gfT57eCAqIHl9PC90ZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHRhYmxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBjb2xvcjogIzIzMjMyMztcbiAgICAgIH1cbiAgICAgIHRyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgdGgge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWluLXdpZHRoOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjMyMzIzO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIzMjMyMztcbiAgICAgIH1cbiAgICAgIHRkIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjMyMzIzO1xuXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjMyMzIzO1xuICAgICAgfVxuXG4gICAgICB0ZDpudGgtY2hpbGQoZXZlbiksXG4gICAgICB0aDpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/wcastand/Documents/prime/pages/index.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1316378968",
    css: "*{box-sizing:border-box;}html,body{margin:0;padding:0;line-height:1.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93Y2FzdGFuZC9Eb2N1bWVudHMvcHJpbWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0R1QixBQUcrQixBQUtiLFNBQ0MsVUFDTSxHQU5sQixhQU9BIiwiZmlsZSI6Ii9Vc2Vycy93Y2FzdGFuZC9Eb2N1bWVudHMvcHJpbWUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB7IGdlbmVyYXRlUHJpbWUgfSBmcm9tICcuLi9zcmMvdXRpbHMnXG5cbmNvbnN0IHByaW1lcyA9IGdlbmVyYXRlUHJpbWUoMTAwKVxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlByaW1lIHRhYmxlPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPHRhYmxlIGNlbGxzcGFjaW5nPVwiMFwiPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIC8+XG4gICAgICAgICAge3ByaW1lcy5tYXAoKHgsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPHRoIGtleT17YHByaW1lX3Jvd18ke2lkeH1gfT57eH08L3RoPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3RyPlxuICAgICAgICB7cHJpbWVzLm1hcCgoeCwgaWR4KSA9PiAoXG4gICAgICAgICAgPHRyIGtleT17YHByaW1lX2NvbF8ke2lkeH1gfT5cbiAgICAgICAgICAgIDx0aD57eH08L3RoPlxuICAgICAgICAgICAge3ByaW1lcy5tYXAoKHksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDx0ZCBrZXk9e2BwcmltZV9yZXNfJHtpZHh9XyR7aW5kZXh9YH0+e3ggKiB5fTwvdGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApKX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICB0YWJsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6ICMyMzIzMjM7XG4gICAgICB9XG4gICAgICB0ciB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgIHRoIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1pbi13aWR0aDogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIzMjMyMztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMzIzMjM7XG4gICAgICB9XG4gICAgICB0ZCB7XG4gICAgICAgIG1pbi13aWR0aDogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIzMjMyMztcblxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIzMjMyMztcbiAgICAgIH1cblxuICAgICAgdGQ6bnRoLWNoaWxkKGV2ZW4pLFxuICAgICAgdGg6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=/Users/wcastand/Documents/prime/pages/index.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: generatePrime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePrime", function() { return generatePrime; });
// estimate limit to find n prime
// https://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
function estimateLimit(n) {
  return n >= 6 ? parseInt(n * (Math.log(n) + Math.log(Math.log(n)))) : null;
} // sieve of Atkin algo
// https://www.geeksforgeeks.org/sieve-of-atkin/
// https://en.wikipedia.org/wiki/Generating_primes

/* Mark siev[n] is true if one
      of the following is true:
  a) n = (4*x*x)+(y*y) has odd number of
      solutions, i.e., there exist
      odd number of distinct pairs (x, y)
      that satisfy the equation and
      n % 12 = 1 or n % 12 = 5.
  b) n = (3*x*x)+(y*y) has odd number of
      solutions and n % 12 = 7
  c) n = (3*x*x)-(y*y) has odd number of
      solutions, x > y and n % 12 = 11
*/


function atkin(limit) {
  var sieve = new Array(limit).fill(false);

  for (var x = 0; x * x < limit; x++) {
    for (var y = 0; y * y < limit; y++) {
      var n = 4 * x * x + y * y;
      if (n <= limit && (n % 12 == 1 || n % 12 == 5)) sieve[n] = true;
      n = 3 * x * x + y * y;
      if (n <= limit && n % 12 == 7) sieve[n] = true;
      n = 3 * x * x - y * y;
      if (x > y && n <= limit && n % 12 == 11) sieve[n] = true;
    }
  }

  for (var r = 5; r * r < limit; r++) {
    if (sieve[r]) for (var i = r * r; i < limit; i += r * r) {
      sieve[i] = false;
    }
  }

  var res = [2, 3];

  for (var a = 5; a < limit; a++) {
    if (sieve[a]) res.push(a);
  }

  return res;
}

function generatePrime(n) {
  var limit = estimateLimit(n);

  if (limit === null) {
    var basePrime = [2, 3, 5, 7, 11];
    return basePrime.splice(0, n);
  }

  var res = atkin(limit);
  return res.splice(0, n);
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map