const factorialNumber = (n) => {
  if (!n || typeof n !== 'number' || n < 0) return 0;
  return n === 1 ? n : factorialNumber(n - 1) * n;
};

module.exports = factorialNumber;
