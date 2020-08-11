---
id: this-keyword
title: The 'this' Keyword
sidebar_label: The 'this' Keyword
---

One aspect of JavaScript that often leads to confusion is the keyword `this`. Its value depends on where it is used and how that function is called.

### `this` in a constructor

We saw previously that a `constructor` in a `class` is a special method which is used to instantiate on a new object. When used inside a `constructor`, `this` refers to the new object being created.

```js
class Person {
  constructor() {
    console.log(this);
    this.name = "Mike";
  }
}

const person = new Person();
```

### `this` in a method

A method is a function that belongs to an object. That object can be either be created as an object literal or using a class.

```js
class Person {
  constructor() {
    this.name = "Mike";
  }

  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

const person = new Person();
person.sayHi();
```

In both above example `sayHi` is a method which belong to `person`.

When a method is called, the value of `this` inside of that method will be the object that the method belongs to. In the example above that will be `person`.

### `this` in a function

The value of `this` in a standalone function if it's executed in the browser will be the `window` object. If it is executed in Node it will be the `global` object.

```js
function sayHey() {
  console.log(this);
}

sayHey();
```

### methods called as functions

We can take a method and assign it to a variable. Essentially that turns it from being a method into a standalone function.

```js
class Person {
  constructor() {
    this.name = "Mike";
  }

  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

const person = new Person();
const sayHi = person.sayHi;

sayHi(); // TypeError: Cannot read property 'name' of undefined
```

In above example, we are executing `sayHi` as a function, not method. As a result we no longer have access to the object the method belongs to. That results in the value of `this` being lost and instead of being `person` it is now `undefined`.

That can be a problem. Fortunately we can fix it

### arrow functions to the rescue

Latest versions of JavaScript allow us to declare methods in classes using arrow functions. When an arrow function is used, the value of `this` inside it is bound to the object it belongs to. That allows us to call methods as functions without losing the value of `this` inside it.

```js
class Person {
  constructor() {
    this.name = "Mike";
  }

  sayHi = () => {
    console.log(`Hi, ${this.name}`);
  };
}

const person = new Person();
const sayHi = person.sayHi;

sayHi(); // Hi, Mike
```

This behaviour will become important in the near future, when we will need to start passing methods to be called other parts of our code.

### Exercises

In break out groups solve the following exercises. Only run code to verify answers. Try to understand what each line of code is doing and the effect it has.

```js
// Exercise 1
class Car {
  goFaster() {
    this.speed = 100; // what is the value of this code below is run
  }
}

const ferrari = new Car();
ferrari.goFaster();

// Exercise 2
class Car {
  goFaster() {
    this.speed = 100; // what is the value of this code below is run
  }
}

const honda = new Car();
const quicker = honda.goFaster;

quicker();

// Exercise 3

// How can we fix the bug above? Why do have a problem and how does your solution fix it?
```
