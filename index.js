const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require("./assertArraysEqual.js")
const assertEqual = require("./assertEqual.js")
const assertObjectsEqual = require("./assertObjectsEqual.js")
const countLetters = require("./countLetters.js")
const countOnly = require("./countOnly.js")
const eqArrays = require("./eqArrays.js")
const eqObjects = require("./eqObjects.js")
const findKey = require("./findKey.js")
const findKeyByValue = require("./findKeyByValue.js")
const letterPositions = require("./letterPositions.js")
const map = require("./map.js")
const reverse = require("./reverse.js")
const takeUntil = require("./takeUntil.js")
const without = require("./without.js")


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  reverse: reverse,
  takeUntil: takeUntil,
  without: without
};

