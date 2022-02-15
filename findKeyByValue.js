const assertEqual = require("./assertEqual")


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


module.exports = findKeyByValue