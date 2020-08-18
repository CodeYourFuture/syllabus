---
id: lesson
title: JavaScript Core III - 3
sidebar_label: Lesson
---

## Learning Objectives

- The learner should understand the concept of variable scope and be able to define them in global, local and block scope
- The learner should be able to use destructuring to extract data from arrays
- The learner can describe why you would want to use array destructuring

## Agenda

The purpose of this class is to introduce to the student:

1. The scoping of variables, specifically in reference to:
   - Global
   - Local
   - Block
2. Array Destructuring
3. Project Work

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

## 2. Array Destructuring

In [Javascript 1 - Lesson 2](https://syllabus.codeyourfuture.io/js-core-1/week-2/lesson#arrays), you learnt how to store multiple values in one variable using an **array**.

```
let fruits = ['apple', 'orange', 'banana'];
```

You also learnt that you can retrieve a value from an Array by using the **index** of the value to access it.

```
let firstFruit = fruits[0];
console.log(firstFruit); // This will print 'apple'

let secondFruit = fruits[1];
console.log(secondFruit); // This will print 'orange'

let thirdFruit = fruits[2];
console.log(thirdFruit); // This will print 'banana'

console.log(`My fruits array contains: ${firstFruit}, ${secondFruit} and ${thirdFruit}.`);
```

### Exercise (1)

We have the details of a student stored in an array called `student`. Create variables to store the values in the array so that the `console.log` will print out the message: `My name is Sara Lee. I am 30 years old. I live in London and I am studying Javascript.`.

```
let student = ['Sara','Lee', 30, 'London', 'Javascript'];

// Create variables to store the values here


console.log(`My name is ${firstName} ${lastName}. I am ${age} years old. I live in ${city} and I am studying ${subject}.`);
```

**Question**: How many lines of code did you add?

### Destructuring syntax

There is a way to extract all the values of an array into variable in just **one line of code**. This technique is called **destructuring** and it has a special syntax.

Here is the code we used in the last exercise with array destructuring.

```js
let student = ["Sara", "Lee", 30, "London", "Javascript"];

let [firstName, lastName, age, city, subject] = student;

console.log(
  `My name is ${firstName} ${lastName}. I am ${age} years old. I live in ${city} and I am studying ${subject}.`
);
```

With array destructuring you were able to reduce this code down from 7 lines of code to just 3 lines of code. This means your code is shorter and there is less chance for you to have a typo or a bug in your code.

#### Exercise (2)

We have a function called `sumAndMultiply`. It will take two numbers and then return an array where the first number is the sum of the two numbers, and the second number is the multiplication of the two numbers.

```js live
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

// Assign variables using array destructuring on this line

console.log(
  `The sum of the two numbers is ${sum}, the multiplication of the two numbers is ${multiply}`
);
```

Which of the following lines of code can be put on line 5?
A) let sum, multiply = sumAndMultiply(2, 3);
B) let [sumAndMultiply] = sumAndMultiply(2, 3);
C) let [sum, multiply] = sumAndMultiply(a, b);
D) let [sum, multiply] = sumAndMultiply(2, 3);

#### Exercise (3)

Complete all of the exercises found [here](https://repl.it/@ChrisOwen101/ArrayDestructing)

## 3. Project Work

### Explanation

For the rest of the day we'll be working together on our group projects

You can find the project [here](/js-core-3/tv-show-dom-project/readme)

Students should group into teams based on the Level that they are working on currently.

## Homework

Click [here](./homework) to view the homework for this lesson.
