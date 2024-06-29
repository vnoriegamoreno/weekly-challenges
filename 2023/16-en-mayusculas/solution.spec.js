const toUpperCase = require("./solution");

describe("toUpperCase function", () => {
  describe("giving inputs that are not strings", () => {
    it("should return empty string", () => {
      expect(toUpperCase()).toBe("");
      expect(toUpperCase(1)).toBe("");
      expect(toUpperCase(null)).toBe("");
    });
  });
  describe("giving one word", () => {
    it("should return first word capitalized", () => {
      expect(toUpperCase("hello")).toBe("Hello");
    });
  });
  describe("giving multiple words", () => {
    it("should return every word capitalized", () => {
      expect(toUpperCase("hello  world!")).toBe("Hello World!");
    });
  });
});
