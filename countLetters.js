
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😊😊😊 Assertion Passed: [" + actual + "] === [" + expected + "]");
  } else {
    console.log("😭😭😭 Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }
};

const countLetters = function(string) {
  // take in string and return count of letters
  //break down the string indivualy then count each
  // return as object with keys being letters and count
  let chars = string.split(" ").join("")
  console.log(chars)
  let count = {}
  for (let letters of chars) {
    if (count[letters] === undefined){
      count[letters] = 1
      
      
    }else if (count[letters] >= 1){
      count[letters] += 1
    }

    //console.log(letters)
  }
  return count 

}
module.exports = countLetters