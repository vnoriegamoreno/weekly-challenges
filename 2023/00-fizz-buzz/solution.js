const fizzBuzz = () => [...'.'.repeat(100)]
  .reduce((fzbzRes, _, i) => {
    const index = i + 1;
    if (index % 3 === 0 && index % 5 === 0) fzbzRes += 'fizzbuzz';
    else if (index % 3 === 0) fzbzRes += 'fizz';
    else if (index % 5 === 0) fzbzRes += 'buzz';
    else fzbzRes += index;
    fzbzRes += '\n';
    return fzbzRes;
  }, '')
  .trim();

module.exports = fizzBuzz;
