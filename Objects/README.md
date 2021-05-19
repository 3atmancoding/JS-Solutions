## Understanding JS Objects

```js
let object = {
  key: value,
};

let user = {
  name: 'John',
  age: 30,
};
```

### Remove a property

```js
delete user.name;
```

### Add multiword property

```js
let user = {
  'full name': 'John Dave',
};
// To access property "full name" user.full name is wrong syntax
user['full name'];

// OR

let key = 'full name';
user[key];

//To delete
delete user[key];
```

```js
let obj = {
  0: 'test', // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert(obj['0']); // test
alert(obj[0]); // test (same property)
// obj.0     //will throw error since we cannot use numeric literal
```

### Method in an object

```js
let user = {
  sayHi: function () {
    alert('Hello');
  },
};

// Method shorthand
user = {
  sayHi() {
    // same as "sayHi: function(){...}"
    alert('Hello');
  },
};

let user = {
  name: 'Tom',
  greet() {
    return this.name;
  },
};

user.greet(); // Output is Tom

let obj = {
  model: 'Ford',
  greet: function () {
    let self = this;
    function inner() {
      console.log(self.model);
    }
    inner();
    return console.log(this.model);
  },
};
obj.greet(); // Output will be undefined for inner() and Ford
```
