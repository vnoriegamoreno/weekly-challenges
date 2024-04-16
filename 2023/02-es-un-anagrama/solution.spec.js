const isAnagram = require('./solution');

describe('isAnagram', () => {
  it('should return false if the two words are the same', () => {
    expect(isAnagram('xyz', 'xyz')).toBeFalsy();
  });
  it('should evaluate next anagrams and return true', () => {
    expect(isAnagram('debit card', 'bad cRedit')).toBeTruthy();
    expect(isAnagram('eleven plus two', 'Twelve plus one')).toBeTruthy();
    expect(isAnagram('astroNomer', 'moon starer')).toBeTruthy();
    expect(isAnagram('dormitory', 'dirtY room')).toBeTruthy();
  });
});
