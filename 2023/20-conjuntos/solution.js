const getSets = (arrA, arrB, cond) => {
  const mapSet = {};
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      const equals = arrA[i] === arrB[j];
      const notEqual = arrA[i] !== arrB[j];
      if (cond && equals && !mapSet[arrA[i]]) mapSet[arrA[i]] = [arrA[i]];
      if (cond && equals && !mapSet[arrA[j]]) mapSet[arrB[j]] = [arrB[j]];
      if (!cond && notEqual && !mapSet[arrB[j]]) mapSet[arrB[j]] = arrB[j];
      if (!cond && notEqual && !mapSet[arrA[i]]) mapSet[arrA[i]] = arrA[i];
    }
  }
  return Object.keys(mapSet).length ? Object.values(mapSet) : [];
};

module.exports = getSets;
