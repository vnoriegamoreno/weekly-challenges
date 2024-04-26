const transformToMorse = require('./solution');
const cases = require('./test-cases.json');

describe('transformToMorse', () => {
  it('transform natural code to code morse', () => {
    cases.tests.forEach((test) => expect(transformToMorse(test.input)).toBe(test.output));
  });
});
