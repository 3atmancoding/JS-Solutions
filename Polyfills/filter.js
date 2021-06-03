/**
 * @param context -> Optional parameter thisArg - value to use as this when executing callbackFn.
 * So basically it is callback's this value
 * @param this[i] -> Points to the array element
 * @param i -> index
 * @param this refers to the array
 */
Array.prototype.filterPolyfill = function (callback, context) {
  var arr = [];
  console.log('the context for this polyfill', context);
  for (var i = 0; i < this.length; i++) {
    console.log(context, this[i], i, this);
    if (callback.call(context, this[i], i, this)) {
      console.log('The context', context);
      arr.push(this[i]);
    }
  }
  return arr;
};

let animals = ['cat', 'dog', 'monkey', 'giraffe'];
let list = animals.filterPolyfill(function (animal) {
  return animal.length > 4;
});
console.log('The filtered array', list);
