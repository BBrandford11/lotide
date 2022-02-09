const eqArrays = function(first, second) {
  
  for (let i = 0; i <first.length; i++) {
    console.log(first[i], second[i])
    if (first[i] !== second[i] || first.length !== second.length ) {
      return false
    
    }
  
  }
  return true

}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😊😊😊 Assertion Passed: [" + actual + "] === [" + expected + "]");
  } else {
    console.log("😭😭😭 Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);

