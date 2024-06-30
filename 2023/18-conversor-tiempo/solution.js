/* eslint-disable no-eval */
const PARSE_TO = {
  SECONDS: "SECONDS",
  MINUTES: "MINUTES",
  HOURS: "HOURS",
  DAYS: "DAYS",
};

const transformToMS = (time, converTo) => {
  if (converTo === PARSE_TO.DAYS)
    return Math.abs(eval(time * 60 ** 2 * 24 * 1000));
  if (converTo === PARSE_TO.HOURS) return Math.abs(eval(time * 60 ** 2 * 1000));
  if (converTo === PARSE_TO.MINUTES) return Math.abs(eval(time * 60 * 1000));
  if (converTo === PARSE_TO.SECONDS) return Math.abs(eval(time * 1000));
  return 0;
};

module.exports = { transformToMS, PARSE_TO };
