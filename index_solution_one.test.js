// Import the functions you want to test
const {
  isPrime,
  getPrimeFactors,
  findFirstOfFourConsecutive,
} = require("./index_solution_one"); // Change this to your file name

describe("isPrime", () => {
  test("isPrime should return false for numbers less than or equal to 1", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test("isPrime should return true for prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
  });

  test("isPrime should return false for non-prime numbers", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
  });
});

describe("getPrimeFactors", () => {
  test("getPrimeFactors should return a set of prime factors", () => {
    expect(getPrimeFactors(30)).toEqual(new Set([2, 3, 5]));
    expect(getPrimeFactors(210)).toEqual(new Set([2, 3, 5, 7]));
  });

  test("getPrimeFactors should return an empty set for 1", () => {
    expect(getPrimeFactors(1)).toEqual(new Set());
  });
});

describe("findFirstOfFourConsecutive", () => {
  test("findFirstOfFourConsecutive should return the first number in the sequence of four consecutive numbers each having four distinct prime factors", () => {
    expect(findFirstOfFourConsecutive()).toBe(134043);
  });
});
