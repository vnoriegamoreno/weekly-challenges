const isPrimeNumber = require('./solution');

describe('isPrimeNumber', () => {
  it('should detect prime numbers from the interval 1 - 100', () => {
    // eslint-disable-next-line max-len
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    for (let i = 1; i <= 100; i++) {
      expect(isPrimeNumber(i)).toBe(primeNumbers.includes(i));
    }
  });
});
