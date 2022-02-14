const eqArrays = require("../eqArrays")
const assertEqual = require("../assertEqual")
const assertArraysEqual = require("../assertArraysEqual")

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);