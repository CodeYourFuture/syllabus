---
id: lesson
title: JavaScript Core III - 3
sidebar_label: Lesson
---

## Learning Objectives

- The learner should understand the concept of variable scope and be able to define them in global, local, block and class scope
- The learner should understand the concept of a JavaScript ES6 class and describe examples of when they are useful
- The learner should be able to create a JavaScript ES6 class that represents a simple object
- The learner should be able to use `this` keyword to define variables specific to a class instance

## Agenda

The purpose of this class is to introduce to the student:

1. The scoping of variables, specifically in reference to:
   - Global
   - Local
   - Block
2. Classes
3. `this`
4. Project Work

## 1. Variable Scope

### The Problem

Variables are amazing! Variables let us store data and reuse it many times rather than writing the same data over and over again, also if the variables are well named then it makes it much easier to think about what our code is doing.

As we know, after we declare or define a new variable we can refer to it later in our code using the variable name.

```js
let name = "mo";
let age = 42;
let favouriteFoods = ["pizza", "apples", "tofu"];

// lots of code here

// later
console.log("my name is " + name);
```

Now, imagine what would happen when our code gets really long. Every time we want to define a new variable we have to check that it hasn't already been used for something else. If that variable is already being used and we redefine it, bad things can happen. We could overwrite something important.

Imagine a banking app being built by two developers. Developer 1 uses the variable name `money` to store the total amount of cash a single customer has in the bank, Developer 2 uses the variable name `money` to store the total amount of cash that ALL customers have in the bank added together, the total money in the bank's vaults. This could be really good news for a customer who accidentally receives the entire bank's money in their account, but really BAD news for us as the owners of a bank.

### The Solution

One solution might be that every time we want to create a new variable, we call around all of the other developers on the project and ask them if it's safe to use the variable name `money`. We can quickly see a problem with this, some codebases are millions of lines long! No single person knows what is contained in every file. It would be impossible to know what variables are safe to use and which are not.

Instead, we need to find a way to make variables **safer**. We need a way to use the best variable name to describe our data, without worrying that we will be causing problems in a different part of the codebase.

We call this `scope`.

### What is Scope?

Think about the way that laws are set in different countries. Most laws are set by the government of that country and are `local` to that country. However, some laws are international, laws like 'no slavery' apply across all countries, these are `global` laws.

In some countries, different regions inside the country can set their own laws too. In America you must be 21 to drink (national law), but in the state of Massachusetts all bars must be closed by 2AM (state law). These are two levels of local laws.

![Types of laws](https://i0.wp.com/blog.codeanalogies.com/wp-content/uploads/2017/11/474b7-1ywpubaj-_gmws4jedvbufa.png?w=730&ssl=1)

In Massachusetts, a citizen must follow all 3: International Law, National Law and State Law.

But a pirate 🏴‍☠️ in the middle of the ocean only needs to follow International Law (and perhaps the law of the Ship).

In the same way we think about which laws apply to which **parts of a country** we must also think about which variables apply to which **parts of your code**. Variables, like laws, only apply to a certain area.

When we try to access a variable that does not exist or has gone out of scope, JavaScript will throw a `ReferenceError` telling us that a variable is not defined.

```js
let globalLaw = "no slavery";
// only 1 law applies here

function usa() {
  let nationalLaw = "drinking age is 21";
  // 2 laws apply here

  function massachusetts() {
    let stateLaw = "bars closed at 2am";
    // all 3 laws apply here
  }
}

console.log(stateLaw); // Error: 'stateLaw' is not defined
```

In the example above, the State Law only applies to Massachusetts. When we try to `console.log` the `stateLaw` variable at the end, it is not defined. This part of your code does not even know this variable exists!

### Global scope

Variables declared outside of any function or code block are available throughout an application. They are referred to as global variables and exist in global scope.

We can see in the previous example that `globalLaw` is a global variable.

Because global variables are visible by throughout the application, data stored in them can be read and updated by any part of your code. At first this might seem convenient, but in practice this is likely to cause problems in longer term as your code base grows.

- It may not be obvious where in your code global variables are used, which can make refactoring hard
- Other part of your code may accidentally overwrite values in global variables and lead to bugs.

Because of above **it is good engineering practice to only use global variables when absolutely necessary**.

Note that you can also declare a global variable by assigning to a variable without declaring it with a `var`, `let` or `const` keyword.

```js
function accidentallyGlobal() {
  oops = "I am global";
}

accidentallyGlobal();

console.log(oops);
```

Be sure to keep an eye out for above problem and avoid it.

### Local Variables

Let's rewind and look at this in detail. We know that variables are declared using the `var`, `let` or `const` keyword.

```js
let greeting = "Hi ";
```

If we define a variable inside a function, it becomes **local** to that function. If we want to use a fancy word, we can also say it becomes **scoped** to that function.

```js
function greetUser(name) {
  let greeting = "Hi "; // This variable only exists here
  console.log(greeting + name);
}

greetUser("Naima");
console.log(greeting); // It doesn't exist here
```

The `console.log(greeting)` on the last line throws an error, it tells us that "greeting is not not defined". Why is this? Because the variable `greeting` was defined in the `greetUser` function, it **does not exist** outside the function.

This lets us do new things with variables. You cannot usually create two variables with the same name. For example:

```js
function greetUser(name) {
  let greeting = "Hi";
  let greeting = "Shalom";
  // Error: 'greeting' has already been declared
}
```

But in the same way countries have own laws, functions have own `scopes`! And so it becomes possible to use the same variable name for different situations.

```js
function greetOnce(name) {
  let greeting = "Hi ";
  console.log(greeting + name);
}

function greetAgain(name) {
  let greeting = "Shalom ";
  console.log(greeting + name);
}
```

We have used the variable name `greeting` twice but it's very important to remember that **these are not the same variable**! The two variables called 'greeting' do not even know each other exist.

### Nesting

It is important to note that scope is nested. That means when you have one function inside another function, you can access variables defined in outer function from the inner function. However you cannot access variables defined in inner function from outer function.

```js
function grandfather() {
  let name = "Hammad";
  // likes is not accessible here
  function parent() {
    // name is accessible here
    // likes is not accessible here
    function child() {
      // Innermost level of the scope chain
      // name is also accessible here
      let likes = "Coding";
    }

    child();
  }

  parent();
}

grandfather();
```

### Block scope

#### Code block

A block is piece of code inside by curly brackets, for example following `if` statements and `for` or `while` loops.

```js
if (age > 18) {
  // code block
}
```

#### var vs let and const

In addition to previous scope rules, JavaScript uses different scope methods for variables depending how they are defined.

- Variables declared using `var` keyword use function scope. That means variables defined using `var` exist within function they are defined in.
- Variables declared using `let` or `const` keyword use block scope. Variables defined using `let` or `const` keywords exist within the block they are defined in.

```js
function getBook() {
  if (true) {
    var bookOne = "JavaScript: The Good Parts";
    let bookTwo = "Eloquent JavaScript";
    const bookThree = "The JS Way";
  }

  console.log(bookOne); // JavaScript: The Good Parts
  console.log(bookTwo); // ReferenceError: bookTwo is not defined
  console.log(bookThree); // ReferenceError: bookThree is not defined
}
```

**Any time you define a variable inside a block, that variable cannot escape that block.** We say the variable is `scoped` to that block.

Scope allows us to control where our variables can be accessed from. We want to ensure that variables are available where they are needed and ideally as little as possible elsewhere to prevent naming collisions or accidental updates. As a result using `let` or `const` is preferrable to using `var` since they has stricter scope definition.

### Exercise

In small groups answer the following the questions. Try to solve each exercise before running code to verify answer. Try to explain your answer using what you learned above about scope. Think about the order JavaScript will execute each piece of code and what the values will be at each stage.

```js
// 1.
function one() {
  var a = 10;
}
one();
console.log(a); // what is the value of a

// 2.
function two() {
  let b = 10;
  let b = 20;
}
two();
console.log(b); // what is the value of b and why

// 3.
let c;
function three() {
  c = 25;
}
three();
console.log(c); // what is the value of c and why

// 4.
function four() {
  d = 25;
}
four();
console.log(d); // what is the value of d and why

// 5.
let e;
function five() {
  const greeting = "Hello";

  function greet() {
    let name = "Eddie";
    e = `${greeting} ${name}`;
  }
  greet();
}
five();
console.log(e); // what is the value of e and why

// 6.
function six() {
  if (true) {
    let f = 50;
  }
  console.log(f); // what is the value of f and why
}

six();
```

## 2. Classes

Variables can be used to hold information about the state your code is in, e.g. how many times someone has clicked on a button:

```javascript
let timesClicked = 0;

let whenButtonClicked = () => {
  timesClicked++;
  console.log(`Button has been clicked ${timesClicked} times`);
};

document
  .querySelector("#myButton")
  .addEventListener("click", whenButtonClicked);
```

However, you may end up being in a situation where you'll have to keep track of the click state of multiple buttons, or even a dynamic number of buttons:

```javascript
let timesClicked1 = 0;
let timesClicked2 = 0;

let whenButtonClicked1 = () => {
  timesClicked1++;
  console.log(`Button has been clicked ${timesClicked1} times`);
};

let whenButtonClicked2 = () => {
  timesClicked2++;
  console.log(`Button has been clicked ${timesClicked2} times`);
};

document
  .querySelector("#myButton1")
  .addEventListener("click", whenButtonClicked1);
document
  .querySelector("#myButton2")
  .addEventListener("click", whenButtonClicked2);
```

We can reduce this code duplication by using a JavaScript `class` (not the same as a class in CSS). Classes are templates which are used to create objects containing methods and properties of the class. For example here the class `Counter` ties together the state, `timesClicked`, and the functions that reference it like `whenButtonClicked`:

```javascript
class Counter {
  constructor() {
    this.timesClicked = 0;
  }

  whenClicked() {
    this.timesClicked++;
    console.log(`Button has been clicked ${this.timesClicked} times`);
  }
}

let counter1 = new Counter();
let counter2 = new Counter();

document
  .querySelector("#myButton1")
  .addEventListener("click", () => counter1.whenClicked());
document
  .querySelector("#myButton2")
  .addEventListener("click", () => counter2.whenClicked());
```

We can create instances of a class using the `new` operator, followed by the class name. When a class instance is created, its `constructor` function is called automatically. We can pass the constructor arguments to use during initialisation.

For example, here is a `CounterFromN` class that starts counting from a number that's passed in:

```javascript
class CounterFromN {
  constructor(n) {
    this.timesClicked = n;
  }

  whenClicked() {
    this.timesClicked++;
    console.log(`Button has been clicked ${this.timesClicked} times`);
  }
}

let counterFromTen = new CounterFromN(10);

counterFromTen.whenClicked();
// Button has been clicked 11 times
```

As shown above, a class' functions can be called by referring to the name of the object's function followed by brackets. If the function expects any arguments then these can be passed into it inside the brackets as per normal. Functions defined within classes are also be known as **methods**.

Variables specific to a particular instance of a class are defined and referenced using the `this` keyword (e.g. `this.timesClicked`) within that instance. `this` refers to the object which is created by the class when it instantiated.

### Exercises

Try these exercises in your breakout groups.

#### Exercise 1

Implement the `add` and `getTotal` methods of the `RunningTotal` class below.

```javascript
class RunningTotal {
  constructor() {
    this.currentTotal = 0;
  }

  add(n) {
    // Implement this method
  }
  getTotal() {
    // Implement this method
  }
}

const runningTotal = new RunningTotal();

runningTotal.add(3);
runningTotal.add(7);
runningTotal.add(7);
runningTotal.getTotal();
// 17
```

#### Exercise 2

Implement the `constructor` method of the `StopWatch` class below.

```javascript
class StopWatch {
  constructor() {
    this.secondsElapsed = 0;

    //Finish implementing the rest of the constructor so that secondsElapsed is updated
  }

  getTime() {
    return `Seconds elapsed: ${this.secondsElapsed}`;
  }
}

const stopWatch = new StopWatch();

// Wait a few seconds...

stopWatch.getTime();
// 'Seconds elapsed: 3'

// Wait a few more seconds...

stopWatch.getTime();
// 'Seconds elapsed: 7'
```

#### Exercise 3

Implement the `constructor`, `store` and the `lookup` methods of the `AddressBook` class below.

```javascript
class AddressBook {
  // Implement the constructor method
  // Implement the store method
  // Implement the lookup method
}

const myAddresBook = new AddressBook();

myAddressBook.store("bart", "bart@simpsons.com");
myAddressBook.store("maggie", "maggie@simpsons.com");

myAddressBook.lookup("bart");
// 'bart@simpsons.com'

myAddressBook.lookup("homer");
// 'address not found'
```

Notice that when you come to using a class instance, you are only interacting with it through its methods, e.g. `store` and `lookup` for `AddressBook`. Similar to functions, classes provide a way of creating abstractions over lower-level implementations, which can help us better organise and maintain our code.

## 4. `this` keyword

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

## 4. Project Work

### Explanation

For the rest of the day we'll be working together on our group projects

You can find the project [here](/js-core-3/tv-show-dom-project/readme)

Students should group into teams based on the Level that they are working on currently.

## Homework

Click [here](./homework) to view the homework for this lesson.
