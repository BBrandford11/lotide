const assert = require("chai").assert;
const head = require("../head.js");
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});
