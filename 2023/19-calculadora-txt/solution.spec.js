const readFileAndCalculate = require("./solution");

describe("readFileAndCalculate function", () => {
  describe("when file input has not malformed data", () => {
    it("should calculate aritmetic operations successfully", () => {
      expect(readFileAndCalculate("operations/default-case.txt")).toBe(18.5);
    });
  });
  describe("when file input has malformed data", () => {
    it("should return an error that operations can not be processed", () => {
      expect(() =>
        readFileAndCalculate("operations/malformed-case.txt"),
      ).toThrowError(new Error("Data operation can not be proccesed"));
    });
  });
});
