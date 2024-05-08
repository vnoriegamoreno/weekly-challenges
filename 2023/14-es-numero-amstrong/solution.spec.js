const isAmstrong = require('./solution');

describe('isAmstrong', () => {
  it('should return same number if number is amstrong', () => {
    expect(isAmstrong(153)).toBe(153);
    expect(isAmstrong(370)).toBe(370);
    expect(isAmstrong(407)).toBe(407);
  });
  it('should return -1 if the number is not amstrong', () => {
    expect(isAmstrong(-1)).toBe(-1);
    expect(isAmstrong()).toBe(-1);
    expect(isAmstrong('')).toBe(-1);
    expect(isAmstrong(null)).toBe(-1);
    expect(isAmstrong(undefined)).toBe(-1);
    expect(isAmstrong('153')).toBe(-1);
  });
});
