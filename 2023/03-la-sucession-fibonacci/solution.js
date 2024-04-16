const fibonacci = (fibo) => {
  if (fibo <= 0) return 0;

  let left = 0;
  let right = 1;
  let sequence = left + right;

  for (let i = 2; i <= fibo; i++) {
    sequence = left + right;
    left = right;
    right = sequence;
  }

  return sequence;
};

module.exports = fibonacci;
