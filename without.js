const without = function(source, itemsToRemove) {
  const removedItems = [];
  for (let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
      removedItems.push(source[i])
    }
    
  }
  return removedItems;
};

const eqArrays = function(first, second) {
  
  for (let i = 0; i <first.length; i++) {
    //console.log(first[i], second[i])
    if (first[i] !== second[i] || first.length !== second.length ) {
      return false
    
    }
  
  }
  return true

}

const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${first} !== ${second}`);
  }
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


