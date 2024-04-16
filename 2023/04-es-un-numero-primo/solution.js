const isPrimeNumber = (number) => {
  if (number === 1) return false;
  let divisibleNumbers = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) divisibleNumbers++;
  }
  return !(divisibleNumbers > 2);
};
module.exports = isPrimeNumber;
