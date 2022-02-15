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

}
module.exports = letterPositions