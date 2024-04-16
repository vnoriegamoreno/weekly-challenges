const isAnagram = (word1, word2) => {
  if (word1 === word2) return false;
  const joinStr = (str) => str.toLowerCase().split(' ').join('');
  const orderStr = (str) => [...joinStr(str)].sort().join('');
  return orderStr(word1) === orderStr(word2);
};

module.exports = isAnagram;
