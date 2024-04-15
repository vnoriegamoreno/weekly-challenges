const leetTransform = require('./solution');

describe('leetTransform', () => {
  it('should transform "Hello World" into leet code', () => {
    expect(leetTransform('Hello World')).toBe('|-|€|_|_Ø ЩØ®|_cl');
  });
  it('should not transform empty strings into leet code', () => {
    expect(leetTransform()).toBe('');
  });
  it('should not transform a string of special characters into leet code', () => {
    expect(leetTransform('!"#$%&/()=?¡@,.{}+')).toBe('!"#$%&/()=?¡@,.{}+');
  });
  it('should not transform a string of numerics into leet code', () => {
    expect(leetTransform('1234567890')).toBe('1234567890');
  });
});
