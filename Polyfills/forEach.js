Array.prototype.forEachPolyfill = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

let animals = ['cat', 'dog', 'monkey', 'giraffe'];
let animalList = animals.forEachPolyfill((animal) => {
  return animal;
});
console.log('The forEach returns -->>', animalList);
