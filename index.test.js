import { generatePrime } from './src/utils'

test('expect to generate primes with n < 6', () => {
  const res1 = generatePrime(1)
  const res2 = generatePrime(2)
  const res3 = generatePrime(3)
  const res4 = generatePrime(4)
  const res5 = generatePrime(5)

  const expected1 = [2]
  const expected2 = [2, 3]
  const expected3 = [2, 3, 5]
  const expected4 = [2, 3, 5, 7]
  const expected5 = [2, 3, 5, 7, 11]

  expect(res1).toEqual(expected1)
  expect(res2).toEqual(expected2)
  expect(res3).toEqual(expected3)
  expect(res4).toEqual(expected4)
  expect(res5).toEqual(expected5)
})

test("can't use number smaller than 1", () => {
  expect(() => generatePrime(-2)).toThrow('You need to generate at least 1 prime.')
  expect(() => generatePrime(0)).toThrow('You need to generate at least 1 prime.')
})

test('parse to whole number', () => {
  const res = generatePrime(1.5)
  const expected = [2]
  expect(res).toEqual(expected)
})

test('expect to generate primes with n = 6', () => {
  const res = generatePrime(6)
  const expected = [2, 3, 5, 7, 11, 13]
  expect(res).toEqual(expected)
})

test('expect to generate 100 primes', () => {
  const res = generatePrime(100)
  expect(res.length).toBe(100)
})

test('expect to generate 110 primes', () => {
  const res = generatePrime(110)
  expect(res.length).toBe(110)
})

test('expect to generate 10 000 primes', () => {
  const res = generatePrime(10000)
  expect(res.length).toBe(10000)
})

test('expect to generate 20 000 primes', () => {
  const res = generatePrime(20000)
  expect(res.length).toBe(20000)
})
