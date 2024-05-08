const isAmstrong = (n) => {
  if (!n || typeof n !== 'number' || n < 0) return -1;
  return [...`${n}`].reduce((calc, num) => {
    calc += num ** 3;
    return calc;
  }, 0);
};

module.exports = isAmstrong;
