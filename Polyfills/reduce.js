Array.prototype.reducePolyfill = function (callback, initialValue) {
  var accumulator = initialValue === undefined ? undefined : initialValue;
  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = callback(this[i]);
    }
  }
  return accumulator;
};

//callback comprises of -->>>> accumulator, current value, index, array
//undefined --> this which refers to object in call function
