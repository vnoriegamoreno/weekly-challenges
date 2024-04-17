const reverseString = (str) => {
  if (!str?.length) return '';
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

module.exports = reverseString;
