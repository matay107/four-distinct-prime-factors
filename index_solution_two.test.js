
const { isPrime, findFirstOfFourConsecutive } = require('./index_solution_two');


describe('isPrime', () => {
  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  test('should return false for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
  });
});

describe('findFirstOfFourConsecutive', () => {
  test('should return the first number in the first set of four consecutive numbers each with four distinct prime factors', () => {
    const result = findFirstOfFourConsecutive();
    expect(result).toBe(134043); 
  });
});