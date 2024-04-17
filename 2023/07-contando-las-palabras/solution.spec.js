const countTheWords = require('./solution');

describe('countTheWords', () => {
  it('should return the correct count number of each words', () => {
    expect(countTheWords('Lorem Ipsum')).toStrictEqual({
      l: 1,
      o: 1,
      r: 1,
      e: 1,
      m: 2,
      i: 1,
      p: 1,
      s: 1,
      u: 1,
    });
    expect(countTheWords(' Welcome to Tijuana!')).toStrictEqual({
      w: 1,
      e: 2,
      l: 1,
      c: 1,
      o: 2,
      m: 1,
      t: 2,
      i: 1,
      j: 1,
      u: 1,
      a: 2,
      n: 1,
    });
  });
  it('should not count special characters', () => {
    expect(countTheWords('!"#$%&/zz.,')).toStrictEqual({ z: 2 });
  });
  it('should return empty object if input is not support it', () => {
    expect(countTheWords()).toStrictEqual({});
    expect(countTheWords(null)).toStrictEqual({});
    expect(countTheWords(123234)).toStrictEqual({});
  });
});
