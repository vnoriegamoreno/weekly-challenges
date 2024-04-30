const balanceExpressions = (expression) => {
  if (!expression?.length) return false;

  const evaluateExp = {
    left: ['{', '[', '('],
    right: ['}', ']', ')'],
    balanced: ['{}', '[]', '()'],
  };
  const trimmedExp = [...expression.split(' ').join('')];
  const middleIndex = (trimmedExp.length - 1) / 2;

  let isExpBalanced = false;
  let rightIndex = trimmedExp.length - 1;

  for (let leftIndex = 0; leftIndex !== middleIndex; leftIndex++) {
    const leftExp = trimmedExp[leftIndex];
    if (evaluateExp.left.includes(leftExp)) {
      let rightExp;
      for (rightIndex; rightIndex !== middleIndex; rightIndex--) {
        rightExp = trimmedExp[rightIndex];
        if (evaluateExp.right.includes(rightExp)) {
          rightIndex--;
          break;
        }
      }
      isExpBalanced = evaluateExp.balanced.includes(`${leftExp}${rightExp}`);
      if (!isExpBalanced) break;
    }
  }

  return isExpBalanced;
};

module.exports = balanceExpressions;
