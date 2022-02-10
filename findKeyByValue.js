const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      "😊😊😊 Assertion Passed: [" + actual + "] === [" + expected + "]"
    );
  } else {
    console.log(
      "😭😭😭 Assertion Failed: [" + actual + "] !== [" + expected + "]"
    );
  }
};

const findKeyByValue = function (object, value) {
  //objects.keys to search thru keys
  //for of loop over keys
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
    console.log(key);
  }
};
// TEST CODE

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
