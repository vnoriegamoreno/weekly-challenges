const calcArea = (fig) => {
  const area = {
    square: fig.long * fig.long,
    rectangle: fig.base * fig.height,
  };
  if (fig.type === 'triangle') {
    const { a, b, c } = fig;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  return area[fig.type] ?? 0;
};

module.exports = calcArea;
