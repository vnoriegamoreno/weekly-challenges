const fibonacci = require('./solution');
const data = require('./data-assertion.json');

describe('fibonacci', () => {
  it('should return 0 if pass a sequence less than 0', () => {
    expect(fibonacci(-1)).toBe(0);
  });
  it('should calculate the fibonacci sequence from 0 to 51', () => {
    const expectedSeq = data.fibonacciSequence;
    expectedSeq.forEach((fibo, arrIndex) => expect(fibonacci(arrIndex)).toBe(fibo));
  });
});
