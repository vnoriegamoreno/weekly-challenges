const leetTransform = (encode) => {
  if (!encode?.length) return '';
  const leetCode = {
    a: '@',
    b: 'ß',
    c: '¢',
    d: 'cl',
    e: '€',
    f: 'ƒ',
    g: 'gee',
    h: '|-|',
    i: 'eye',
    j: '_]',
    k: '|<',
    l: '|_',
    m: '|V|',
    n: '/V',
    o: 'Ø',
    p: '|°',
    q: '0_',
    r: '®',
    s: '$',
    t: '†',
    u: 'µ',
    v: '|/',
    w: 'Щ',
    x: 'ecks',
    y: 'Ч',
    z: '-|_',
  };
  return [...encode].reduce((hackerLang, char) => {
    hackerLang += leetCode[char.toLowerCase()] ?? char;
    return hackerLang;
  }, '');
};

module.exports = leetTransform;
