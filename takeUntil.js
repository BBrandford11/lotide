const takeUntil = function (array, callback) {
  let results = [];
  for (item of array) {
    //console.log(callback(item))
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;
