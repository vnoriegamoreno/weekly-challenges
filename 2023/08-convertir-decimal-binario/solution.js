const convertToBinary = (number) => {
  if (typeof number !== 'number' || number === 0) {
    return 0;
  }
  const binary = [];
  const isNegative = number < 0;
  number = Math.abs(number);
  while (number > 0) {
    binary.unshift(number % 2);
    number = Math.floor(number / 2);
  }
  return Number(`${isNegative ? '-' : ''}${binary.join('')}`);
};

module.exports = convertToBinary;
