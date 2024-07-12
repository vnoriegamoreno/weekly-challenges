const fs = require("fs");
const path = require("path");

const readFileAndCalculate = (filePath) => {
  const absPath = path.resolve(__dirname, filePath);
  const optMap = {
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
  };
  try {
    let data = fs.readFileSync(absPath, "utf-8");
    data = data.split("\n");
    let tmpOpt;
    return data.reduce((res, val) => {
      if (optMap[val]) tmpOpt = val;
      else if (optMap[tmpOpt] === "+") res += Number(val);
      else if (optMap[tmpOpt] === "-") res -= Number(val);
      else if (optMap[tmpOpt] === "*") res *= Number(val);
      else if (optMap[tmpOpt] === "/") res /= Number(val);
      else if (
        typeof Number(val) === "number" &&
        !optMap[tmpOpt] &&
        !Number.isNaN(Number(val + 1))
      )
        res = Number(val);
      else throw new Error("Invalid operation or data");
      return res;
    }, 0);
  } catch (error) {
    throw new Error("Data operation can not be proccesed");
  }
};

module.exports = readFileAndCalculate;
