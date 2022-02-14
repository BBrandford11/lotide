const eqArrays = function (first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    //console.log(first[i], second[i]);
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

// const assertArraysEqual = function (first, second) {
//   if (eqArrays(first, second)) {
//     console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${first} !== ${second}`);
//   }
// };

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // True
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // False
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // True
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // False
