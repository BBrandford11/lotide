const without = function (source, itemsToRemove) {
  const removedItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      removedItems.push(source[i]);
    }
  }
  return removedItems;
};
module.exports = without;
