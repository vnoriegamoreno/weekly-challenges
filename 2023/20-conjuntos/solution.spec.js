const getSets = require("./solution");

describe("getSets function", () => {
  it("base tests", () => {
    expect(getSets([1, 2, 3], [4, 5, 6], false)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(getSets([1, 2, 3], [4, 5, 6], true)).toEqual([]);
  });
});
