webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.ea4125e4c0e068d2014f.hot-update.js.map