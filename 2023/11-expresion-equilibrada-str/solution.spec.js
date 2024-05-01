const balanceExpressions = require('./solution');

describe('balanceExpressions', () => {
  it('should evaluate correct balance expressions', () => {
    let res = {
      in1: 'abcdxyz',
      in2: 'aebfcgdh',
      str1: 'abcdxyzefgh',
      str2: 'aebfcgdhxyz',
    };
    expect(balanceExpressions(res.in1, res.in2)).toStrictEqual({
      str1: res.str1,
      str2: res.str2,
    });
    res = {
      in1: 'abcd',
      in2: 'efgh',
      str1: 'abcdefgh',
      str2: 'efghabcd',
    };
    expect(balanceExpressions(res.in1, res.in2)).toStrictEqual({
      str1: res.str1,
      str2: res.str2,
    });
  });
  it('should evaluate repeated balance expressions', () => {
    const res = {
      in1: 'abcd',
      in2: 'abcd',
      str1: 'abcd',
      str2: 'abcd',
    };
    expect(balanceExpressions(res.in1, res.in2)).toStrictEqual({
      str1: res.str1,
      str2: res.str2,
    });
  });
  it('should not evaluate empty expressions', () => {
    expect(balanceExpressions()).toStrictEqual({});
  });
});
