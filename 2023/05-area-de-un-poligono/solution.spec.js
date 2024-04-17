const calcArea = require('./solution');

describe('calcArea', () => {
  it('calculate the area of a general triangle', () => {
    expect(calcArea({
      type: 'triangle', a: 3, b: 4, c: 5,
    })).toBe(6);
  });
  it('calculate the area of a rectangle', () => {
    expect(calcArea({ type: 'rectangle', base: 10, height: 7 })).toBe(70);
  });
  it('calculate the area of a square', () => {
    expect(calcArea({ type: 'square', long: 10 })).toBe(100);
  });
});
