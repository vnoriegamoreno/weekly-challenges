const convertToBinary = require('./solution');

describe('convertToBinary', () => {
  it('should convert positive decimal numbers to binary numbers', () => {
    expect(convertToBinary(0)).toBe(0);
    expect(convertToBinary(1)).toBe(1);
    expect(convertToBinary(2)).toBe(10);
    expect(convertToBinary(3)).toBe(11);
    expect(convertToBinary(4)).toBe(100);
    expect(convertToBinary(5)).toBe(101);
    expect(convertToBinary(6)).toBe(110);
    expect(convertToBinary(7)).toBe(111);
    expect(convertToBinary(8)).toBe(1000);
    expect(convertToBinary(9)).toBe(1001);
    expect(convertToBinary(10)).toBe(1010);
  });
  it('should convert negative decimal numbers to negative binary numbers', () => {
    expect(convertToBinary(-0)).toBe(0);
    expect(convertToBinary(-1)).toBe(-1);
    expect(convertToBinary(-2)).toBe(-10);
    expect(convertToBinary(-3)).toBe(-11);
    expect(convertToBinary(-4)).toBe(-100);
    expect(convertToBinary(-5)).toBe(-101);
    expect(convertToBinary(-6)).toBe(-110);
    expect(convertToBinary(-7)).toBe(-111);
    expect(convertToBinary(-8)).toBe(-1000);
    expect(convertToBinary(-9)).toBe(-1001);
    expect(convertToBinary(-10)).toBe(-1010);
  });
  it('should return 0 if input is different than number', () => {
    expect(convertToBinary('asdfgk')).toBe(0);
  });
});
