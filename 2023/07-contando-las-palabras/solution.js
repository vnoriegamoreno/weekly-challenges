const countTheWords = (str) => {
  const countMap = {};
  if (!str?.length) return countMap;
  for (let i = 0; i < str.length; i++) {
    const word = str[i].toLowerCase();
    if (word.match(/[^a-zA-Z0-9]/g, '') === null) {
      if (!countMap[word]) countMap[word] = 1;
      else ++countMap[word];
    }
  }
  return countMap;
};

module.exports = countTheWords;
