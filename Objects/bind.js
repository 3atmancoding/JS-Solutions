/*

bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, ... , argN)


*/

let fruit1 = {
  name: 'Apple',
  price: 100,
};

let fruit2 = {
  name: 'Guava',
  price: 120,
};

let whichFruit = function () {
  console.log(`Hey your fruit is ${this.name} and the price is ${this.price}`);
};

let bindFruit = whichFruit.bind(fruit2); //bindFruit will have the copy of function whichFruit
bindFruit();
