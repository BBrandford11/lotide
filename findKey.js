let findKey = (object, callback) => {
  for (let key in object) {
    console.log(callback(object[key]));
    if (callback(object[key])) {
      console.log(key);
      break;
    }
  }
};

module.exports = findKey;
