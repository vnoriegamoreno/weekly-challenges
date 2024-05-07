const factorialNumber = require('./solution');

describe('factorialNumber', () => {
  it('positive numbers should return the correct factorial number', () => {
    expect(factorialNumber(1)).toBe(1);
    expect(factorialNumber(2)).toBe(2);
    expect(factorialNumber(3)).toBe(6);
    expect(factorialNumber(4)).toBe(24);
    expect(factorialNumber(5)).toBe(120);
    expect(factorialNumber(6)).toBe(720);
    expect(factorialNumber(7)).toBe(5040);
    expect(factorialNumber(8)).toBe(40320);
    expect(factorialNumber(9)).toBe(362880);
    expect(factorialNumber(10)).toBe(3628800);
  });
  it('negative numbers should return 0', () => {
    expect(factorialNumber(-1)).toBe(0);
    expect(factorialNumber(-2)).toBe(0);
    expect(factorialNumber(-3)).toBe(0);
    expect(factorialNumber(-4)).toBe(0);
    expect(factorialNumber(-5)).toBe(0);
    expect(factorialNumber(-6)).toBe(0);
    expect(factorialNumber(-7)).toBe(0);
    expect(factorialNumber(-8)).toBe(0);
    expect(factorialNumber(-9)).toBe(0);
    expect(factorialNumber(-10)).toBe(0);
  });
  it('undetermine cases should return 0', () => {
    expect(factorialNumber()).toBe(0);
    expect(factorialNumber('')).toBe(0);
    expect(factorialNumber('1')).toBe(0);
    expect(factorialNumber(null)).toBe(0);
    expect(factorialNumber(undefined)).toBe(0);
  });
});
