const balanceExpressions = (str1, str2) => {
  if (!str1 || !str2) return {};
  const transformedWord = (in1, in2) => {
    const in1Words = [...in1];
    return in1 + [...in2].reduce((concatenatedStr, int2Word) => {
      if (!in1Words.includes(int2Word)) {
        concatenatedStr += int2Word;
      }
      return concatenatedStr;
    }, '');
  };
  return {
    str1: transformedWord(str1, str2),
    str2: transformedWord(str2, str1),
  };
};

module.exports = balanceExpressions;
