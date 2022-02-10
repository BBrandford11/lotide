const letterPositions = function(sentence) {
  let chars = sentence.split(" ").join("").split("")
  const results = {};
  //console.log(chars)
  for( let i = 0; i < chars.length; i++){
    //console.log(results)
    if (results[chars[i]] === undefined){
      results[chars[i]] = [i]     
      
    }else {
      results[chars[i]].push(i) 
    }

  }
  return results;

    //console.log(letters)
  }
  // logic to update results here
  
  console.log(letterPositions("i love claire so much"))
/*
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
    console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${first} !== ${second}`);
  }
};

console.log(assertArraysEqual("hello", "hello"))
*/