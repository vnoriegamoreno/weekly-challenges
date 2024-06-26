const isYearLeap = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

const transformMonthToDays = (month, year) => {
  if (month > 12) month = month % 12 === 0 ? 12 : month % 12;
  const monthMap = {
    1: 31,
    2: isYearLeap(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  return monthMap[month];
};

const getFullDate = (date) => [
  Number(date.split('/')[0]),
  Number(date.split('/')[1]),
  Number(date.split('/')[2]),
];

const calcDayDiff = (date1, date2) => {
  const [d1, m1, y1] = getFullDate(date1);
  const [d2, m2, y2] = getFullDate(date2);
  const totalMonths = y2 > y1 ? (12 + m2) : m2;
  let totalDays = 0;
  for (let m = m1; m < totalMonths; m++) {
    const transformedDays = transformMonthToDays(m, m > 12 ? y2 : y1);
    totalDays += transformedDays;
  }
  totalDays += d2 - d1;
  return totalDays;
};

const validateDateFormat = (d) => {
  if (typeof d !== 'string' && d !== '') throw new Error(`Date ${d} is not a string`);

  const parts = d.split('/');
  if (parts.length !== 3) throw new Error(`Date ${d} is not formatted correctly`);

  const [day, month, year] = parts.map(Number);
  if (day <= 0 || day > 31) throw new Error(`Date ${d} has wrong day format`);
  if (month <= 0 || month > 12) throw new Error(`Date ${d} has wrong month format`);
  if (year <= 0) throw new Error(`Date ${d} has wrong year format`);

  return true;
};

// eslint-disable-next-line consistent-return
const calcDateDiffInDays = (d1, d2) => {
  try {
    let days = 0;
    if (validateDateFormat(d1) && validateDateFormat(d2)) {
      const [_, m1, y1] = getFullDate(d1);
      const [__, m2, y2] = getFullDate(d2);
      if (y1 < y2 || (y1 === y2 && m1 <= m2)) days = calcDayDiff(d1, d2);
      if (y1 > y2 || (y1 === y2 && m1 >= m2)) days = calcDayDiff(d2, d1);
    }
    return days;
  } catch (err) {
    throw Error(err.message);
  }
};

module.exports = calcDateDiffInDays;
