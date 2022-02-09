const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false
  }
  for (let i = 0; i < first.length; i++) {
    console.log(first[i], second[i])
    if (first[i] !== second[i]) {
      return false
    
    }
  
  }
  return true

}

const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`✅✅✅ Assertion Passed: [${first}] === [${second}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${first}] !== [${second}]`);
  }
};

const middle = function(array) {
  let returnedArray = []
  let center = Math.floor(array.length / 2)
  
    if(array.length < 3) {
      return returnedArray
    }else if (array.length % 2 === 0 ) {
      returnedArray[0] = array[center -1]  
      returnedArray[1] = array[center]
      return returnedArray
    }else if (array.length % 2 === 1) {
      returnedArray[0] = array[center]
      return returnedArray
  }
  

 
}

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]