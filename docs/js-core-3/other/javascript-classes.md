---
id: javascript-classes
title: JavaScript Classes
sidebar_label: JavaScript Classes
---

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
