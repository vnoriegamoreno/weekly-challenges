const balanceExpressions = require('./solution');

describe('balanceExpressions', () => {
  it('should evaluate correct balance expressions', () => {
    let expression = '{ [ a * ( c + d ) ] - 5 }';
    expect(balanceExpressions(expression)).toBeTruthy();
    expression = '{[a*(c+d)]-5}';
    expect(balanceExpressions(expression)).toBeTruthy();
  });
  it('should not incorrect balance expressions', () => {
    let expression = '{ a * ( c + d ) ] - 5 }';
    expect(balanceExpressions(expression)).toBeFalsy();
    expression = '{a*(c+d)]-5}';
    expect(balanceExpressions(expression)).toBeFalsy();
  });
  it('should not evaluate empty expressions', () => {
    expect(balanceExpressions()).toBeFalsy();
  });
});
