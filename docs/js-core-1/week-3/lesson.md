---
id: lesson
title: JavaScript Core I - 3
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Contents

- [truthy and falsy](#truthy-and-falsy)
- [undefined and null](#undefined)
- [arrays](#arrays)
- [PD - Critical thinking](#pd-critical-thinking)

## Learning Objectives

By the end of this class, you should be able to:

- List the falsy values
- Explain the difference between null and undefined
- Define an array
- Write code that interacts with an array
- Loop over an array

---

## Truthy and falsy

In JavaScript, things can be set to or evaluated as true or false. We've already met this idea. The boolean data type has two possible values: `true` or `false`. But in JavaScript values may be _truthy_ or _falsy_.

> In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. **All values are truthy unless they are defined as falsy.** That is, all values are truthy except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. ~ [MDN, 'Truthy'](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

So in other words, the value is treated _as if_ it is true or false. The value is 'coerced' into true or false. Let's look at how this affects an `if` statement.

```js
function getFalsiness(value) {
  if (value) {
    return "Truthy";
  } else {
    return "Falsy";
  }
}
```

You can think of falsy as a closed door. If the value passed into `getFalsiness` is a falsy value, the door to the "Truthy" string will never be opened. `getFalsiness(undefined)` will return `"Falsy"`.

:::note Exercise (5 minutes)

1. Open your console and start `node`. Define the following function, `getTruthiness`:

```js
const getTruthiness = (value) => (value ? "Truthy!" : "Falsy");
```

2. Call `getTruthiness(null)`
3. Try each of the falsy values.
4. How will you get 'Truthy!' to return?
5. What would happen if you tried `getTruthiness(getTruthiness(0))` ? Make a prediction and then test your theory.

:::

Last week, we learned about loose equals `==` and strict equals `===` and why we should always [use strict equality](https://dorey.github.io/JavaScript-Equality-Table/unified/). In your console, try comparing:

```js
getTruthiness(null == undefined);
getTruthiness(null === undefined);
```

Now try doing the comparisons on their own:

```js
null == undefined;
null === undefined;
```

## Null and undefined

Both [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) and [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) are falsy values, but have some important differences.

```js
let thisUndefinedVariable;
let thisNullVariable = null;
```

`undefined` means the variable has been declared, but is undefined. No value, not even `0` or `null`, has been assigned to this variable.

`null` means the variable _has been assigned the value_ `null`.

:::note Exercise (5 mins)
If a variable has never been _declared_, and you try to call it, what will the console say?

1. Make a prediction, either by writing in chat or writing it on piece of paper and holding it up.

2. Try calling a nonexistent variable in your console now.

3. Discuss!

:::

We're spending a little time on this now because _the most common error_ you will encounter as a JavaScript programmer is `Uncaught TypeError: Cannot read property of undefined`. In fact 9 of the top 10 most common errors are to do with null or undefined. (The other one is CORS, more about this in future modules.) As you progress through the course you will incrementally develop your understanding of these concepts, often through debugging!

:::tip
You won't often assign `null` to a variable. However, you will often encounter `null` in [DOM traversal](https://javascript.info/dom-navigation), so we will come back to this in JS2 and JS3.
:::

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
const trainees = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

trainees[0]; // "Ahmed"
trainees[3]; // "Nahidul"
```

You can also _assign_ new values to parts of an array:

```js
const trainees = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

trainees[2] = "Bianca";

console.log(trainees); // ["Ahmed", "Maria", "Bianca", "Nahidul", "Jack"]
```

### Exercise (5 mins)

:::note Exercise

In Node, enter the following array:

```sh
> const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
```

Now, using the correct indexes, get the following values from the array:

- strawberry
- kiwi
- orange
- banana

Then, replace 'apple' with 'raspberry', and replace 'fig' with 'pineapple'.

:::

### Exercise (5 mins)

:::note Exercise

Complete this function so that, if the second element in the array contains the name "Amy", it returns `"Second element matched!"`

```js
function secondMatchesAmy(array) {
  if ( ) {
    return "Second element matched!";
  }
  return "Second element not matched";
}
```

:::

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

:::note Exercise

Write a function which takes your **trainees** array as an input. In the function, use a for loop to **iterate** over the array and print the name of each trainee to the console.

:::

### Exercise - extra credit (20 mins)

:::note Exercise

In pairs, write a function which squares all numbers in an array and returns the array of squared numbers.

Write a second function which takes an input of arrays and only returns an array of even numbers.

How can you combine the two functions to return an array of even and squared numbers?

:::

## Extra exercises

:::note Exercise

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

:::

:::note Exercise

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

:::

:::note Exercise

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

:::

## Glossary

- Assert: to determine whether something is `true` or not `true`, more precisely `false`
- Duplicate: exact copies of something (e.g. two or more files, numbers, directory can be exactly the same)
- Index: numbers that let you know an item's position inside an array
- Element: another name for an item in an array
- Iterate: to repeat some code multiple times, as we do when we use a loop
- REPL: (Read-Eval-Print-Loop) an interactive way to execute code you write inside the console
- Zero-based Index: an `array` starting at `0` and not at `1`

For words like **Terminal**, **Primitive Types** please see [Glossary: JavaScript Core I - 2](../week-1/lesson.md#Glossary)

## PD (Critical thinking)

**Session objective:** This session highlights the importance of critical thinking for developers, and provides methods to form good arguments.

[Critical thinking slides](https://docs.google.com/presentation/d/1sVBqkY_6EldPf3q7jcp6NJbD3Hn53xHCgxtDx2iOO8M/edit#slide=id.g1fbc3b09af8_0_1)

:::note Exercise (10 min)

**Exercise objective:** To identify arguments formed through critical thinking

Put the statements in the slides in the right order.

:::

:::note Exercise (20 min)

**Exercise objective:** To brainstorm as a group about critical thinking skills

In small groups, explore how and why developers need to develop critical thinking skills.

- How will you use critical thinking skills as a developer?
- Why is it important to use critical thinking skills when developing products for diverse audiences?

:::

:::note Exercise (10 min)

**Exercise objective:** To practice public speaking skills

Volunteer to share to the wider group one important reason to use critical thinking.

:::

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 1" week="Week 3" />
