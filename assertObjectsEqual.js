const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};
// const eqObjects = function (object1, object2) {
//   let key1 = Object.keys(object1);
//   let key2 = Object.keys(object2);
//   if (key1.length !== key2.length) {
//     return false;
//   }
//   for (let key of key1) {
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

module.exports = assertObjectsEqual;
