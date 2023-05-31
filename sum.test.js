const sum = require("./sum");

test("testing sum function", () => {
  expect(sum(2, 10)).toBe(12);
});
