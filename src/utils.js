// estimate limit to find n prime
// https://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
function estimateLimit(n) {
  return n >= 6 ? parseInt(n * (Math.log(n) + Math.log(Math.log(n)))) : null
}

// sieve of Atkin algo
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
  const sieve = new Array(limit).fill(false)

  for (let x = 0; x * x < limit; x++) {
    for (let y = 0; y * y < limit; y++) {
      let n = 4 * x * x + y * y
      if (n <= limit && (n % 12 == 1 || n % 12 == 5)) sieve[n] = true

      n = 3 * x * x + y * y
      if (n <= limit && n % 12 == 7) sieve[n] = true

      n = 3 * x * x - y * y
      if (x > y && n <= limit && n % 12 == 11) sieve[n] = true
    }
  }
  for (let r = 5; r * r < limit; r++) {
    if (sieve[r]) for (let i = r * r; i < limit; i += r * r) sieve[i] = false
  }

  const res = [2, 3]
  for (let a = 5; a < limit; a++) {
    if (sieve[a]) res.push(a)
  }
  return res
}

export function generatePrime(n) {
  if (n < 1) throw new Error('You need to generate at least 1 prime.')

  const expectedNumber = parseInt(n)

  const limit = estimateLimit(expectedNumber)
  if (limit === null) {
    const basePrime = [2, 3, 5, 7, 11]
    return basePrime.splice(0, expectedNumber)
  }
  const res = atkin(limit)
  return res.splice(0, expectedNumber)
}
