/*

 SYNTAX
 ============
 apply(thisArg)
 apply(thisArg, argsArray)

 */
//Constructor method

function Shop(name, price) {
  this.name = name;
  this.price = price;
}

function Books(name, price) {
  Shop.apply(this, name, price);
  this.discount = '5%';
}

function Drinks(name, price) {
  Shop.apply(this, name, price);
}

let product = new Drinks(['Virgin Mojito', '$3']);

//Object
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

let output = whichFruit.apply(fruit1);
