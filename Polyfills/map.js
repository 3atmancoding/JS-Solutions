/*Regular syntax of map function
arr.map(function(a){
 return a*2;
})*/

Array.prototype.mapPolyFill = function (callback) {
  var arr = [];
  console.log('value of this', this); //this points to that array on which you want to execute the function
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};
let animals = ['cat', 'dog', 'monkey', 'giraffe'];
let animalList = animals.mapPolyFill((animal) => {
  return animal;
});
console.log('The map returns -->>', animalList);
