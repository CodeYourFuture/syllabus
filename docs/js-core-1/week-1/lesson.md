---
id: lesson
title: JavaScript Core I - 1
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Contents

- [Hello World](#hello-world)
- [Variables](#variables)
- [Strings](#strings)
- [Numbers](#numbers)
- [Statements & expressions](#statements-and-expressions)
- [Functions](#functions)

## Learning Objectives

By the end of this class, you should be able to:

- Use `console.log()` to print information to the console
- List and describe the different primitive data types in JS
- Use `typeof` to find the type of a variable
- Assign data to variables using `let` and `const`
- What are expressions and statements (and what's the difference)?
- Define what expressions and statements are and describe the difference
- Write, call and evaluate functions in JavaScript
- Manipulate strings with concatenation and interpolation techniques
- Manipulate numbers with mathematical operators using the `Math` library
- Define the difference between `console.log()` and `return`
- Call functions within functions
- Search and read documentation to help when you are stuck
- Use the Code Style Guide to give feedback on other students work

---

## Before you start

Before you arrive at class you **must** have completed the following setup work.

[JavaScript Preparation](../preparation)

_If you are a teacher reading this, please check the [Instructor Notes](./instructors)_

## Prerequisites

1. Access to a Linux console (either on Mac, Ubuntu or by using Ubuntu WSL for Windows 10)
1. VS Code running a default Linux terminal
1. NodeJS must be installed

To test, you can write `node -v` in your terminal and you should see something like `v11.10.0`. If you don't see this please talk to a teacher!

## Hello World

It is programming tradition that the first thing you do in any language is make it output 'Hello world!'.

We'll do this in JavaScript, using a command called `console.log()`. The `console.log()` method writes a message to the console.

The console is a tool which is mainly used to log information - it's useful for testing purposes.

### Exercise (10 minutes)

_(This exercise will help you understand how to run a basic JS script and explore the different ways you can run JS code)_

1. Create your first `js1-week1.js` script
2. Type `console.log("Hello World!")`
3. There are 2 ways you can run this script - one way is by pressing F5 in your VS Code application. Can you find out what the second way is? Pair up and use a search engine to find out! Choose your favourite method and use that from now on.

**BONUS:** there is a third way of running JS code (notice how I haven't said scipt) - do you know what that is?

### Exercise (5 minutes)

_(This exercise will help you expand your understanding of console.log)_

Write 10 statements like these, but in different languages.

For example:

```
Halo, dunia! // Indonesian
Ciao, mondo! // Italian
Hola, mundo! // Spanish
```

## Variables

When you write code, you'll want to create shortcuts to data values so you don't have to write out the same value every time.

We can use a _variable_ to create a reference to a value. Variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container.

Before you use a variable in a JavaScript program, you must declare it. Variables are declared with _let_ and _const_ keywords as follows.

```js
let greeting = 'Hello world';

console.log(greeting);
```

```js
const name = 'Irina';

console.log(name);
```

The program above will print "Hello world" to the console. Notice how it uses the value assigned to the variable `greeting`.

### Exercise (5 minutes)

1. Add a variable `greeting` to js1-week1.js and assign a greeting of your choice to the variable
2. Print your `greeting` to the console 3 times. You should see your greeting 3 times on the console, one on each line.

## Strings

In programming there are different _types of_ data. You've used one data type already: **string**.

Computers recognise strings as a sequence of characters but to humans, strings are simply lines of text.

```js
const message = 'This is a string';
```

Notice that strings are always wrapped **inside of quote marks**. We do this so that the computer knows when the string starts and ends.

You can check that the data is a string by using the `typeof` operator:

```js
const message = 'This is a string';
const messageType = typeof message;

console.log(messageType); // logs 'string'
```

### Exercise (5 minutes)

1. Write a program that:

- creates a variable called `colors`
- assigns colors "blue" and "yellow" as a comma separate string to `colors`
- logs the type `colors` using `typeof`.

2. What is the `typeof` a number?

### String concatenation

You can add two strings together using the plus operator (`+`) or _string interpolation_.

String interpolation is a useful JavaScript feature that allows you to put variables directly into a string:

```js
// Here is an example using the plus operator to concat strings
const greetingStart = 'Hello, my name is ';
const name = 'Daniel';

const greeting = greetingStart + name;

console.log(greeting); // Logs "Hello, my name is Daniel"
```

```js
// Here is example using the String interpolation to concat strings
const greetingStart = 'Hello';
const name = 'Daniel';

const greeting = `${greetingStart}, my name is ${name}`;

console.log(greeting); // Logs "Hello, my name is Daniel"
```
### Exercise (5 mins)

1. Write a program that logs a message with a greeting and your name using the two concatenation methods we used

## Numbers

The next data type we will learn is **number**.

Unlike strings, numbers do not need to be wrapped in quotes.

```js
const age = 30;
```

You can use mathematical operators to calculate numbers:

```js
const sum = 10 + 2; // 12
const product = 10 * 2; // 20
const quotient = 10 / 2; // 5
const difference = 10 - 2; // 8
```
#### Expected result

```sh
Number of students: 15
Number of mentors: 8
Total number of students and mentors: 23
```
### Numbers as decimals

Numbers can be integers (whole numbers) or floats (numbers with a decimal point).

```js
const preciseAge = 30.612437;
```

Numbers with decimals can be rounded to the nearest whole number using the `Math.round` function:

```js
const preciseAge = 30.612437;
const roughAge = Math.round(preciseAge); // 31
```

### Exercise (15 mins)

1. Create two variables `numberOfStudents` and `numberOfMentors`
2. Log a message that displays the total number of students and mentors
3. Using the variables provided in the exercise, calculate the percentage of mentors and students in the group (percentages must be rounded to the nearest integer)

You should then log this number to the console.

#### Expected result

```sh
Percentage of students: 65%
Percentage of mentors: 35%
```

### Extra Exercise (10 minutes)

_Intructor note: Only complete this exercise if you have enough time in the lesson_

Using online documentation, what other things can you do with the `Math` library?

Pick one thing on your table that you can do other than `Math.round` and prepare an explanation for the rest of the class.


You can also use expressions with string interpolation or as a `return` value.

```js
console.log(`2 + 4 is ${2 + 4}`); // 2 + 4 inside the string template evaluates to 6

function double(num) {
  return num * 2; // expression num * 2 being returned from this function
}
```

## Statements and expressions

In JavaScript, there are **expressions** and **statements**. 
We will use these words frequently to describe code.
### Statement

A statement is some code that typically carries out an instruction. You have encountered statements already:

```js
const greeting = "Hello Code Your Future!";
```

The above piece of code is a **variable declaration**, which is also a statement. 
This statement is just an instruction to store the value `"Hello Code Your Future!"` in the variable `greeting`.

Statements end in a semi-colon, though they can be omitted in JavaScript.

There are other different types of statements that we will learn about in the coming weeks.

### Expression

Any unit of code that can be evaluated to a value is known as an **expression**.<br />
We say that an expression _evaluates to_ a value.
We use expressions all the time in lot of different places:

- they can be assigned to variables
- returned from functions (more on this later)
- passed as arguments to functions (more on this later)
- combined with other expressions to form new expressions

The following are all examples of expressions:

```js
1 + 1 // evaluates to 2
"hello" // evaluates to "hello"
2 * 4 // evaluates to 8
"Hello" + "World" // evaluates to "HelloWorld"
```

We can take the value produced by an expression and assign it to a variable.

```js
let total = 1 + 1; // assign the expression 1 + 1 to a variable total
let greeting = "hello"; // assign the expression "hello" to a variable greeting
let product = 2 * 4; // assign the expression 2 * 4 to a variable product
let worldGreeting = "Hello" + "World"; // assign the expression "Hello" + "World" to a variable worldGreeting
```


### Exercise ( 15 mins )

You can run `node` by itself, which will open a _node console_, also called a [Read–Eval–Print Loop (REPL)](https://www.tutorialspoint.com/nodejs/nodejs_repl_terminal.htm).

This console allows you to enter code in the console line by line and is a great way of testing bits of code before writing it in a script.

In your terminal, run the command `node` and then enter a line of code from the code below and then run enter. Do this for each line of code in the list.
Think about the following questions each time:

What is the output in the terminal each time ?
Is there anything you didn't expect ?

Can you work out which of the lines of code below are **expressions** and which are not ?

_Remember it can only be an expression if you can place it on the right hand side of an assignment._

```js
1 + 2

"hello"

"hello" + " " + "students and volunteers!"

let favouriteColour = "purple"

favouriteColour

"hello" + 42

if (true) {}

const hoursInADay = 24

hoursInADay * 7

`My favourite colour is ${favouriteColour}`
```

(To exit the node REPL, you have to click Ctrl+d or Cmd+D on Mac)

## Functions

Functions are blocks of code that can do a task as many times as you ask them to. They take an input and return an output.

Here's a function that doubles a number:

```js
function double(number) {
  return number * 2;
}
```

To use a function then we we need to **call** it ( some people will say **invoke** )

```js
const result = double(2);

console.log(result); // 4
```

The function `double` is being invoked by placing parathenses after the name of the function like this `double()`

🔑
The input given to a function is called a **argument**

🔑 A **parameter** is a variable that is used to refer to an **argument**

A function can have one or more **parameters**, check out the example below:

```js
function add(a, b) {
  return a + b;
}
```

In the function `add`, the parameters are `a` and `b`.

If we call the function like this `add(10,32)` then we're passing 2 arguments (or inputs) into the function : `10` and `32`.

When you write a function (sometimes called _declaring a function_) you can define the parameters with any valid variable name.

The function below does exactly the same thing as the one above:

```js
function add(num1, num2) {
  return num1 + num2;
}
```

### Exercises (20 minutes)

Try creating a new file when solving the each of the questions below:


1. Create a function called `formatPenceToPounds` that should

- take a number as an input ( representing an amount of money in pence )
- return a string starting with a`£` sign and the input number converted to pounds.

For example, `formatPenceToPounds(199)` should evaluate to `"£1.99"`

In your groups, think carefully about the following things:

- what the parameter name should be
- creating good names for any variables you use
- don't use `console.log` inside the body of the function

Call `formatPenceToPounds` a few times with different inputs and `console.log` the outputs in order to check your function. 🙂


---
<br />

2. Create a function called `increaseByHalf` that should

- take a number as an input
- return this input number **increased by a half**

E.g. `increaseByHalf(50)` should **evaluate** to `75` 

E.g. `increaseByHalf(100)` should **evaluate** to `150`

In your groups, think carefully about the following things:

- what the parameter name should be
- creating good names for any variables you use
- don't use `console.log` inside the body of the function

Call `increaseByHalf` a few times with different inputs and `console.log` the outputs in order to check your function is working properly.


Now declare a variable called `pocketMoney` and assign to it a value of `413`.<br />
Someone's been generous and decided to increase your `pocketMoney` by 50% 😎

Using the functions `increaseByHalf` and `formatPenceToPounds` only, find the new amount of pocket money as a string in pounds with a `£` symbol at the front.


---
<br />

3. Check out the code below:

```js
function printMessage(x) {
  console.log('Hello, nice to meet you ' + x);
}

function getMessage(name) {
  return 'Hello, nice to meet you ' + name;
}

printMessage('Mitch');

printMessage('August');

getMessage('Laetitia');
```

The functions above behave similarly but _differ_ in some important ways.

In groups, study the code above and then answer the following questions:

a) How many times is the function `printMessage` called ?<br />
b) How many times is the function `getMessage` called ?<br />
c) What is the parameter name for the function `printMessage` ?<br />
d) What is the parameter name for the function `getMessage` ?<br />

Discuss briefly which **parameter name** is better out of the two functions and why ?

e) What is the **return value** of the function `printMessage` whenever it is called ?


Someone then creates 2 further variables `messageForAli` and `curiousMessage`:

```js
const messageForAli = getMessage('Ali');

const curiousMessage = getMessage(42);
```

f) What will the variable `messageForAli` evaluate to when the code above is executed ?<br />
g) What will the variable `curiousMessage` evaluate to when the code above is executed ?

Hint: Think carefully about the parameters and arguments for `getMessage` for part g)


### Exercise (10 minutes)

1. Swap your laptop with your neighbouring pair and review each other's code - what can be improved? Is the code readable?

## Giving Feedback to Each Other

A critical part of being developer is reading other people's code and giving good feedback and improvements. This can happen even when you don't know a lot of code - everybody has unique ideas and insights into how to make code better!

Let's spend the next five minutes reviewing CodeYourFuture's Style Guide.

This style guide is how we expect you to write code whilst you're at CodeYourFuture - most companies have one and it's really important you stick to it to make sure we all write code that other people can understand.

[https://syllabus.codeyourfuture.io/guides/code-style-guide](https://syllabus.codeyourfuture.io/guides/code-style-guide)

:::tip
A style guide doesn't change anything about how your code operates - code that breaks these rules will still work. However it's important so that **other people** can more easily read your code.
:::

### Exercise (5 minutes)

_This is a Live exercise. The Teacher should take suggestions from the class on how this code can be improved and add comments themselves. Please read the [teaching notes](./instructors#giving-feedback-to-each-other)._

Next, let's see an example of some code that we could suggest some improvements to.

[https://github.com/CodeYourFuture/BadCodeExample/pull/1](https://github.com/CodeYourFuture/BadCodeExample/pull/1)

Using what you've just read in the Style Guide.

- What improvements could we suggest on the code?
- Are there any other improvement we could suggest that aren't in the Style Guide?

## Glossary

- Console: a place on your computer to run scripts or commands from
- Command: something that you type on your computer which performs an operation that your computer does
- Directory: another word for "folder" on your computer
- Parameter: a placeholder for values you can pass into functions
- Primitive type: a built-in type in JavaScript (e.g. strings and numbers are primitive types in JavaScript)
- Script: a file that contains a program
- Terminal: another word for "console"

## Homework

Click [here](./homework) to view the homework for this lesson.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 1" week="Week 1" />
