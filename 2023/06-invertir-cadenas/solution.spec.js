const reverseString = require('./solution');

describe('reverseString', () => {
  it('should invert strings', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH');
    expect(reverseString('2Pac')).toBe('caP2');
    expect(reverseString('12345')).toBe('54321');
  });
  it('should not invert empty strings', () => {
    expect(reverseString()).toBe('');
  });
  it('should not invert numbers', () => {
    expect(reverseString(12345)).toBe('');
  });
});
