/*

Function.prototype.call()
=========================
call()
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, ... , argN)

*/

//Using call to chain constructors for an object

function Shop(name, price) {
  this.name = name;
  this.price = price;
}

function Books(name, price) {
  Shop.call(this, name, price);
  this.discount = '5%';
}

function Drinks(name, price) {
  Shop.call(this, name, price);
}

const newBook = new Books('physics', '$10');
//Output Books {name: "physics", price: "$10", discount: "5%"}

//Using Objects

let car = {
  model: 'Tesla',
  year: 2018,
};

let carDetails = function (owner) {
  console.log(
    'Hello,',
    owner,
    ' your product is ',
    this.model,
    ' and make is',
    this.year
  );
};

let mobile = {
  model: 'Pixel 4',
  year: 2019,
};
carDetails.call(mobile, 'John'); //this refers to mobile object
