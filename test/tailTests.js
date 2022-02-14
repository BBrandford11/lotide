const tail = require("../tail")
const assert = require("chai").assert;
//const words = ["Yo Yo", "Lighthouse", "Labs", "check"]

//assertEqual(tail(words), "check")
describe("Tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns 14 for [1, 2, 3, 14]", () => {
    assert.strictEqual(tail([1, 2, 3, 14]), 14);
  });
  it("returns check for Yo Yo, Lighthouse, Labs, check", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs", "check"]), "check");
  });
});