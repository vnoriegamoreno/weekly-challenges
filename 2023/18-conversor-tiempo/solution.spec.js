const { transformToMS, PARSE_TO } = require("./solution");

describe("transformToMS function", () => {
  describe("default cases", () => {
    it("should convert seconds to miliseconds successfully", () => {
      expect(transformToMS(1, PARSE_TO.SECONDS)).toBe(1000);
      expect(transformToMS(10, PARSE_TO.SECONDS)).toBe(10000);
      expect(transformToMS(60, PARSE_TO.SECONDS)).toBe(60000);
    });
    it("should convert minutes to miliseconds successfully", () => {
      expect(transformToMS(1, PARSE_TO.MINUTES)).toBe(60000);
      expect(transformToMS(10, PARSE_TO.MINUTES)).toBe(600000);
      expect(transformToMS(60, PARSE_TO.MINUTES)).toBe(3600000);
    });
    it("should convert hours to miliseconds successfully", () => {
      expect(transformToMS(1, PARSE_TO.HOURS)).toBe(3600000);
      expect(transformToMS(10, PARSE_TO.HOURS)).toBe(36000000);
      expect(transformToMS(60, PARSE_TO.HOURS)).toBe(216000000);
    });
    it("should convert days to miliseconds successfully", () => {
      expect(transformToMS(1, PARSE_TO.DAYS)).toBe(86400000);
      expect(transformToMS(10, PARSE_TO.DAYS)).toBe(864000000);
      expect(transformToMS(60, PARSE_TO.DAYS)).toBe(5184000000);
    });
    it("should return 0 if unexpected parameters", () => {
      expect(transformToMS()).toBe(0);
    });
  });
  describe("given string numbers", () => {
    it("should convert seconds to miliseconds successfully", () => {
      expect(transformToMS("1", PARSE_TO.SECONDS)).toBe(1000);
      expect(transformToMS("10", PARSE_TO.SECONDS)).toBe(10000);
      expect(transformToMS("60", PARSE_TO.SECONDS)).toBe(60000);
    });
    it("should convert minutes to miliseconds successfully", () => {
      expect(transformToMS("1", PARSE_TO.MINUTES)).toBe(60000);
      expect(transformToMS("10", PARSE_TO.MINUTES)).toBe(600000);
      expect(transformToMS("60", PARSE_TO.MINUTES)).toBe(3600000);
    });
    it("should convert hours to miliseconds successfully", () => {
      expect(transformToMS("1", PARSE_TO.HOURS)).toBe(3600000);
      expect(transformToMS("10", PARSE_TO.HOURS)).toBe(36000000);
      expect(transformToMS("60", PARSE_TO.HOURS)).toBe(216000000);
    });
    it("should convert days to miliseconds successfully", () => {
      expect(transformToMS("1", PARSE_TO.DAYS)).toBe(86400000);
      expect(transformToMS("10", PARSE_TO.DAYS)).toBe(864000000);
      expect(transformToMS("60", PARSE_TO.DAYS)).toBe(5184000000);
    });
  });
  describe("given negative numbers", () => {
    it("should return absolute seconds to miliseconds successfully", () => {
      expect(transformToMS(-1, PARSE_TO.SECONDS)).toBe(1000);
      expect(transformToMS(-10, PARSE_TO.SECONDS)).toBe(10000);
      expect(transformToMS(-60, PARSE_TO.SECONDS)).toBe(60000);
    });
    it("should return absolute minutes to miliseconds successfully", () => {
      expect(transformToMS(-1, PARSE_TO.MINUTES)).toBe(60000);
      expect(transformToMS(-10, PARSE_TO.MINUTES)).toBe(600000);
      expect(transformToMS(-60, PARSE_TO.MINUTES)).toBe(3600000);
    });
    it("should return absolute hours to miliseconds successfully", () => {
      expect(transformToMS(-1, PARSE_TO.HOURS)).toBe(3600000);
      expect(transformToMS(-10, PARSE_TO.HOURS)).toBe(36000000);
      expect(transformToMS(-60, PARSE_TO.HOURS)).toBe(216000000);
    });
    it("should return absolute days to miliseconds successfully", () => {
      expect(transformToMS(-1, PARSE_TO.DAYS)).toBe(86400000);
      expect(transformToMS(-10, PARSE_TO.DAYS)).toBe(864000000);
      expect(transformToMS(-60, PARSE_TO.DAYS)).toBe(5184000000);
    });
  });
});
