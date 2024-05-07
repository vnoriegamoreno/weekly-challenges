const isWordPalindrome = require('./solution');

describe('isWordPalindrome', () => {
  it('should return true words that are palindromes', () => {
    expect(isWordPalindrome('radar')).toBeTruthy();
    expect(isWordPalindrome('reconocer')).toBeTruthy();
    expect(isWordPalindrome('oso')).toBeTruthy();
    expect(isWordPalindrome('somos')).toBeTruthy();
  });
  it('should return true phrases that are palindromes', () => {
    expect(isWordPalindrome('Ana lleva al oso la avellana')).toBeTruthy();
    expect(isWordPalindrome('A mama Roma le aviva el amor a mama')).toBeTruthy();
    expect(isWordPalindrome('Anita lava la tina')).toBeTruthy();
    expect(isWordPalindrome('La ruta natural')).toBeTruthy();
    expect(isWordPalindrome('Dabale arroz a la zorra el abad')).toBeTruthy();
  });
  describe('should ignore special characters', () => {
    it('should return true when words are palindromes', () => {
      expect(isWordPalindrome('A mamá !Roma le aviva el amor a mamá')).toBeTruthy();
      expect(isWordPalindrome('Dábale -arroz a la zorra el abad')).toBeTruthy();
      expect(isWordPalindrome('Amo la pacífica paloma.')).toBeTruthy();
    });
  });
  describe('special negative scenarios', () => {
    it('should return false empty parameter', () => {
      expect(isWordPalindrome()).toBeFalsy();
    });
    it('should return false empty string', () => {
      expect(isWordPalindrome('')).toBeFalsy();
    });
  });
});
