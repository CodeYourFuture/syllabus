---
id: lesson
title: JavaScript Core I - 2
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Contents

- [Booleans](#booleans)
- [Comparison Operators](#comparison-operators)
- [Conditionals](#conditionals)
- [Logical Operators](#logical-operators)
- [Loops](#loops)
- [Arrays](#arrays)
- [Extra exercises](#extra-exercises)

## Learning Objectives

By the end of this class, you should be able to:


- Define what was a conditional is
- Define what `for` and `while` loops are and define the difference
- Write an if statement using a conditional
- Define comparator operators and list the different types
- Use comparator operators in an `if` statement
- Define what a logical operator is and give examples
- Write functionality that uses the `assert` module
- Describe what an array is and write code that interacts with them

---

## Booleans

There is another _primitive type_ in JavaScript known as a **boolean** value. A boolean is either `true` or `false`, and it should be written without quotes.

```js
let codeYourFutureIsGreat = true;
let thisIsATerribleClass = false;
```


## Comparison Operators

In the previous exercise, you used an **expression** that evaluates to a `boolean` value. This was possible because of the **comparison operator** `===`. Using a comparison operator will always return a `boolean` value.

### `checkIsTrue`

We have created a function `checkIsTrue` that checks if an **expression** evaluates to `true`or `false`. For the time being, you don't need to know how the function is implemented - you will only need to understand what the function does.

For example,

`checkIsTrue(10 === 10)` should print `"Yes, this expression evaluates to true! ✅"`
`checkIsTrue(3 > 10000)` should print `"Sorry, this expression evaluates to false! ❌"`

**Can you work out what will happen with the code below?**

```js
checkIsTrue(1 > 2);
// and...
checkIsTrue(2 < 1);
```

The `>` symbol in the expression is a **comparison operator**. Comparison operators compare two values. This operator checks to see if the number on the left is bigger than the number on the right.

```sh
>   greater than
<   less than
<=  less than or equal
>=  greater than or equal
=== same value and same type
!== not the same value and type
```

You might see people use two other comparison operators. They are valid, but are the evil twins of `===` and `!==` and it is generally considered bad practice because of the bugs the can cause.

**&#10008; - Do not use == and !=**

```sh
== equal compares only value
!= unequal compares only value
```

**&#10004; - Do use === and !==**

```sh
=== equal compares both value and type
!== unequal compares both value and type
```

If you see these, suggest people change them in pull requests.


### Exercise ( 15 mins )

1. What do `typeof true` and `typeof false` evaluate to - write some code and log the output to the console to work out the answer.

2. Check out the code below.

Replace the variable `FILL_ME_IN` with actual values to prevent the `checkIsTrue` function from logging an error message.

```js
const mentorCount = FILL_ME_IN;
const studentCount = FILL_ME_IN;
checkIsTrue(mentorCount < studentCount);

const capacity = FILL_ME_IN;
const people = FILL_ME_IN;
checkIsTrue(capacity > people);

const organisation = FILL_ME_IN;
checkIsTrue(typeof organisation === 'string')
checkIsTrue(organisation.startsWith('Code'));
checkIsTrue(organisation.includes(' your '));
checkIsTrue(organisation.endsWith('Future!'));

const firstName = FILL_ME_IN;
const lastName = FILL_ME_IN;
checkIsTrue(firstName[0] === lastName[0]);

const mystery = FILL_ME_IN;
checkIsTrue(typeof mystery === 'boolean');
checkIsTrue(!mystery);

// You will need to research falsy values in order to work out the next 2 problems below!

const mysteryString = FILL_ME_IN;
checkIsTrue(typeof mysteryString === 'string');
checkIsTrue(!mysteryString);

const mysteryNumber = FILL_ME_IN;
checkIsTrue(typeof mysteryNumber === 'number');
checkIsTrue(!mysteryNumber);

// Can you work out what an exclamation mark at the front of an expression does ?

const nums = [1, 2, 3, 4, 5];
const numsCopy = FILL_ME_IN;
checkIsTrue(nums === numsCopy);

// Don't change anything below this point
var FILL_ME_IN;
function checkIsTrue(value1) {
  if (value1) {
    console.log("\x1b[32m%s\x1b[0m","Yes, this expression evaluates to true! ✅");
  } else {
    console.log("\x1b[31m%s\x1b[0m","Sorry, this expression evaluates to false! ❌");
  }
}
```

The array comparison doesn't work because JavaScript comparison only works as expected on `number`s, `string`s, and `boolean`s.

You need to be aware of this, and you can go deeper into outside of the lesson, but generally remember that only `number`s, `string`s, and `boolean`s work with equality.

MDN have some in depth, if not too in depth documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).

---

3. Create a function called `isEven` that should
- take a number as an input
- return a **boolean** indicating if the number is even or odd

Remember to avoid using `console.log` _inside_ the function itself

E.g. `isEven(100)` should return `true`<br />
E.g. `isEven(53)` should return `false`


Call your function with a number of different inputs to check your function is working as expected. 😄

## Conditionals

Like humans, computer programs make decisions based on the information given to them. **Conditionals** are a way of representing these decisions in code (remember, you saw this in a previous exercise!)

For example:

- In a game, if the player has 0 lives, then the game is over
- In a weather app, if rain is forecast, a picture of rain clouds is shown

The most common type of conditional is the **if statement**.

An if statement runs some code if a condition is met. If the condition is not met, then the code will be skipped.

```js
let isHappy = true;

if (isHappy) {
  console.log("I am happy");
}
```

The code in paratheses - e.g. `(isHappy)` - is the condition. The condition can be _any_ expression. The following are all valid conditions:

```js
// boolean value
if (true) {
  // do something
}

// variable assigned to boolean value
let isHappy = true;
if (isHappy) {
  // do something
}

// equality operator returns a boolean value
if (1 + 1 === 2) {
  // do something
}

// comparison operator returns a boolean value
if (10 > 5) {
  // do something
}

// function call returns boolean value
if (greaterThan10(5)) {
  // do something
}
```

An `if` statement runs code when a condition is met. What if the condition is not met? Sometimes you want to run an alternative bit of code.

An **if...else statement** also runs code when the condition is _not_ met.

```js
let isHappy = true;

if (isHappy) {
  console.log("I am happy 😄");
} else {
  console.log("I am not happy 😢");
}
```

What if there is more than one condition you want to handle in your function? For example, what if you can be confused as well? You can use **else if** to handle multiple conditions.

### Exercise (5 mins)

Can you explain what this function does line by line? What happens when you pass in a string?

```js
function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}
```

### Exercise (10 mins)

Create a function that gives you a message depending on your mood! It should:

- take one input
- return "Good job, you're doing great!" if you pass in "happy"
- return "Every cloud has a silver lining" if you pass in "sad"
- return "Beep beep boop" if you pass in a number
- return "I'm sorry, I'm still learning about feelings!" if you pass in anything else

## Logical Operators

There are three logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT).

They let you write expressions that evaluate to a boolean value.

Suppose you want to test if a number is bigger than 3 and smaller than 10. We can write this, using different logical operators.

```js
let num = 10;

function satisfiesRequirements(num) {
  if (num > 3 && num < 10) {
    return true;
  }

  return false;
}
```

We can test expressions with logical operators in a node console too.

### Exercise (5 mins)

Type the following expressions into your node REPL and note the output. Anything you didn't expect?

- `let num = 10`
- `num > 5 && num < 15`
- `num < 10 || num === 10`
- `false || true`
- `!true`
- `let greaterThan5 = num > 5`
- `!greaterThan5`
- `!(num === 10)`

### Exercise (15 mins)

In pairs, write a function that checks a username is of an acceptable format for a user type. The function must:

- take two parameters: one for the username and one for the user type
- if the username starts with a capital letter _and_ has length between 5 and 10 characters long, it must return `"Username valid"`; otherwise, it must return `"Username invalid"`
- if the user type is an `admin` _or_ a `manager`, all usernames must return `"Username valid"`

## Loops

When we're writing programs, we often find that we want to repeat a bit of code over and over, or repeat it but change something about it each time. To save ourselves from writing all that code, we can use a **loop**. JavaScript has two kinds of loops, a `while` loop and a `for` loop.

### while loop

A `while` loop is a way to repeat code until some condition is evaluated to `false`. For example:

```js
let i = 0;
while (i < 20) {
  someFunction(i);
  i++;
}
```

Notice the line **i++** - this is the same as saying **i = i + 1** It does exactly the same thing but it is just more convenient to write.

It's important that the condition inside the parenthesis becomes false at some point - otherwise, we'll have what's known as an infinite loop!

### Exercise (10 minutes)

Write a function that:

- Takes one number `n` as a parameter
- Adds all numbers from `0` to `n`. For example, if the input is `3`, the output should be `0 + 1 + 2 + 3`
- You should use a while loop

### for loop

The `for` loop is similar to a while loop, but with a more specialized syntax. Programmers invented the for loop when they realized they were always doing the same three things: creating loop counter variables (like `i` above), incrementing them by some amount, and checking that they're less than a value.

The `for` loop syntax has special places for each of those three things. Here's the same loop as the first while loop above, as a for loop:

![For loop](https://user-images.githubusercontent.com/31692/75388870-9213a880-58dd-11ea-90e6-4e67eabf390b.png)

```js
for (let i = 0; i < 20; i++) {
  someFunction(i);
}
```

### Exercise (10 minutes)

Write a function, similar to the last exercise, that:

- Takes one number `n` as a parameter
- Adds all numbers from `0` to `n`. For example, if the input is `3`, the output should be `0 + 1 + 2 + 3`
- You should use an for loop

## Arrays

If you ever find yourself writing code like this...

```js
const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Rares";
```

...then it's probably time to use an **array**!

Arrays are data structures that hold a list of values. We call these values the **elements** of the array.

```js
const mentors = ["Daniel", "Irina", "Rares"];
```

Arrays can hold any type of value (although almost always you only have one data type per array).

```js
const testScores = [16, 49, 85];
const grades = ["F", "D", "A"];
const greetings = ["Hello, how are you?", "Hi! Nice to meet you!"];
```

You can access elements in an array using the **index** of an element with **bracket notation**

**🔔 Remember:** All arrays start at position 0! To access the first element in an array, you need to access index `0`, the second element at `1`, the fifth at `4` and so forth. This is called zero-based indexed arrays. There are some [very intense reasons for this](http://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html), but most people just accept it and move on.

```js
const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

students[0]; // "Ahmed"
students[3]; // "Nahidul"
```

You can also _assign_ new values to parts of an array:

```js
const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

students[2] = "Bianca";

console.log(students); // ["Ahmed", "Maria", "Bianca", "Nahidul", "Jack"]
```

### Exercise (5 mins)

In the node REPL, enter the following array:

```sh
> const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
```

Now, using the correct indexes, get the following values from the array:

- strawberry
- kiwi
- orange
- banana

Then, replace 'apple' with 'raspberry', and replace 'fig' with 'pineapple'.

### Exercise (5 mins)

Complete this function so that, if the second element in the array contains the name "Amy", it returns `"Second element matched!"`

```js
function secondMatchesAmy(array) {
  if ( ) {
    return "Second element matched!";
  }
  return "Second element not matched";
}
```

### Using for loops with arrays

We can use the power of loops to run some code for each element in our array.

When we do this say we **iterate** over an array.

```js
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < daysOfWeek.length; i++) {
  const dayMessage = "day is: " + daysOfWeek[i];
  const indexMessage = "index is: " + i;
  console.log(indexMessage, dayMessage);
}
```

### Exercise (10 mins)

Write a function which takes your **students** array as an input. In the function, use a for loop to **iterate** over the array and print the name of each student to the console.

### Exercise - extra credit (20 mins)

In pairs, write a function which squares all numbers in an array and returns the array of squared numbers.

Write a second function which takes an input of arrays and only returns an array of even numbers.

How can you combine the two functions to return an array of even and squared numbers?

## Extra exercises

### Playing computer I

1. Working in pairs or groups, you have to predict the output of this program without executing it.
2. What is printed to the console?
3. Have you learned anything new during this exercise?

```js
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function workingDay(day) {
  return day + " is a working day";
}

function weekendDay(day) {
  return day + " is at the weekend!";
}

for (let i = 0; i < daysOfWeek.length; i++) {
  if (i < 5) {
    let day = workingDay(daysOfWeek[i]);
    console.log(day);
  } else {
    let day = weekendDay(daysOfWeek[i]);
    console.log(day);
  }
}
```

### Playing computer II

1. Working in pairs or groups, you have to predict the output of this program without executing it.
2. What is printed to the console?
3. Have you learned anything new during this exercise?

```js
const a = 4;
const b = 8;

const multiplyNumbers = function (a, b) {
  return a * b;
};

const addNumbers = function (a, b, c) {
  return a + b + c;
};

for (let i = 0; i < 5; ++i) {
  if (i < 3) {
    const day = addNumbers(i, 2, a);
    console.log(day);
  } else {
    const day = multiplyNumbers(i, 4);
    console.log(day);
  }
}
```

### Playing computer III

1. Again, working in pairs or groups, you have to predict the output of this program without executing it.
2. What is printed to the console?
3. What was difficult about this exercise?
4. Have you learned anything new?

```js
let x = 2;
let y = 4;
let a = 2;
let b = 20;

const f1 = function (a, b) {
  return a * b;
};

const f2 = function (a, b, c) {
  return a + b + c;
};

console.log(x);
x = 3;
y = f1(x, 2);
console.log(y);

for (let i = 0; i < 10; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, y, a);
    console.log(d);
  } else {
    const e = f1(i, 2);
    console.log(e);
  }
}
```

## Glossary

- Assert: to determine whether something is `true` or not `true`, more precisely `false`
- Duplicate: exact copies of something (e.g. two or more files, numbers, directory can be exactly the same)
- Index: numbers that let you know an item's position inside an array
- Element: another name for an item in an array
- Iterate: to repeat some code multiple times, as we do when we use a loop
- REPL: (Read-Eval-Print-Loop) an interactive way to execute code you write inside the console
- Zero-based Index: an `array` starting at `0` and not at `1`

For words like **Terminal**, **Primitive Types** please see [Glossary: JavaScript Core I - 2](../week-1/lesson.md#Glossary)

## Homework

Click [here](./homework) to view the homework for this lesson.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 1" week="Week 2" />
