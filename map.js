const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const eqArrays = function (first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    console.log(first[i], second[i]);
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (first, second) {
  if (eqArrays(first, second)) {
    console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${first} !== ${second}`);
  }
};

const results1 = map(words, word => word[0]);
//console.log(results1);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ] ))

