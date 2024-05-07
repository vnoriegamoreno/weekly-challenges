const isWordPalindrome = (word) => {
  if (!word?.length) return false;

  const cleanedWord = word
    .replace(/[!"#$%&/()=?¡.,\-_,[\]¨*{}^`´'~]/g, '')
    .replace(/[áéíóú]/gi, (match) => {
      const wordsMap = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
      };
      return wordsMap[match.toLowerCase()];
    });
  const splitedWord = [...cleanedWord.toLowerCase().split(' ').join('')];

  let rightI = splitedWord.length - 1;

  for (let leftI = 0; leftI <= (splitedWord.length / 2); leftI++) {
    if (splitedWord[leftI] !== splitedWord[rightI]) return false;
    rightI--;
  }

  return true;
};

module.exports = isWordPalindrome;
