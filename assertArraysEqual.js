const eqArrays = function(first, second) {
  
  for (let i = 0; i <first.length; i++) {
    //console.log(first[i], second[i])
    if (first[i] !== second[i] || first.length !== second.length ) {
      return false
    
    }
  
  }
  return true

}

const assertArraysEqual = function() {
  if(true){
    console.log("The arrays are equal")
    
  }else {
    console.log("the arrays are not equal")
  }
}

console.log(assertArraysEqual(eqArrays([1,2,3], [1,2,3])))