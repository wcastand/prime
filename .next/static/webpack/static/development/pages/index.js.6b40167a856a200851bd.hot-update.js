webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/utils */ "./src/utils.js");
var _jsxFileName = "/Users/wcastand/Documents/prime/pages/index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Prime table"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Hello world!"));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
  console.log(limit, n, res.length);
  return res.splice(0, n);
}

/***/ })

})
//# sourceMappingURL=index.js.6b40167a856a200851bd.hot-update.js.map