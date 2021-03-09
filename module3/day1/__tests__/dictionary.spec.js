const { sum } = require('../day1-js-exercises')

it('should sum two numbers', () => {
  const result = sum(2, 2)
  expect(result).toBe(12)
  expect(sum(3,4)).toBe(7)
})
