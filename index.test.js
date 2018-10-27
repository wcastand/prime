import {generatePrime} from './src/utils'

test('expect to generate primes', () => {
  const res = generatePrime(3)
  const expected = [2, 3, 5]
  expect(res).toEqual(expected)
})
