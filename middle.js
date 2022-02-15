const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

const middle = function (array) {
  let returnedArray = [];
  let center = Math.floor(array.length / 2);

  if (array.length < 3) {
    return returnedArray;
  } else if (array.length % 2 === 0) {
    returnedArray[0] = array[center - 1];
    returnedArray[1] = array[center];
    return returnedArray;
  } else if (array.length % 2 === 1) {
    returnedArray[0] = array[center];
    return returnedArray;
  }
};
module.exports = middle
