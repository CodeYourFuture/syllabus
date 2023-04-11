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
- [Extra exercises](#extra-exercises)
- [PD - Dealing with conflict in teams](#pd-dealing-with-conflict-in-teams)

## Learning Objectives

By the end of this class, you should be able to:

- Define what a conditional is
- Define what `for` and `while` loops are and define the difference
- Write an if statement using a conditional
- Define comparator operators and list the different types
- Use comparator operators in an `if` statement
- Define a logical operator and give examples

---

## Booleans

There is another _primitive type_ in JavaScript known as a **boolean** value. A boolean is either `true` or `false`, and it should be written without quotes.

```js
let codeYourFutureIsGreat = true;
let thisIsATerribleClass = false;
```

We can use boolean values to make decisions in our code based on certain conditions, as we shall see later on.

## Comparison Operators

We can also create an **expression** that evaluates to a `boolean` value - that is, either `true` or `false`. This is possible when we use **comparison operators** such as `===`. This comparison operator will check if two values are the same.

For example,

`42 === 42` will evaluate to `true`.
You can check this by logging the expression `42 === 42` in the Node REPL.

`42 === 50` will evaluate to `false`.
You can also check this out by logging the expression `42 === 50` in the Node REPL.

Using a comparison operator will always return a `boolean` value.

### `checkIsTrue`

Let's pretend that we have created a function `checkIsTrue` that checks if an **expression** evaluates to `true` or `false`. For the time being, you don't need to know how the function is implemented - you will only need to understand what the function does.

For example,

`checkIsTrue(10 === 10)` should print `"Yes, this expression evaluates to true! ✅"`
`checkIsTrue(3 > 10000)` should print `"Sorry, this expression evaluates to false! ❌"`

**Can you work out what will happen with the code below?**

```js
checkIsTrue(1 > 2);
// and...
checkIsTrue(2 < 1);
```

The `>` symbol in the expressions above is also a **comparison operator**. This operator checks to see if the number on the left is bigger than the number on the right.

```sh
>   greater than
<   less than
<=  less than or equal
>=  greater than or equal
=== same value and same type
!== not the same value and type
```

You might see people use two other comparison operators, `==` and `!=`. They are valid, but are the evil twins of `===` and `!==` and it's generally considered bad practice because of the bugs they can cause.

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

:::note Exercise 1

What do `typeof true` and `typeof false` evaluate to - write some code and log the output to the console to work out the answer.

:::

:::note Exercise 2

Check out the code below.

Replace the variable `FILL_ME_IN` with actual values to prevent the `checkIsTrue` function from logging an error message.

```js
const mentorCount = FILL_ME_IN;
const traineeCount = FILL_ME_IN;
checkIsTrue(mentorCount < traineeCount);

const capacity = FILL_ME_IN;
const people = FILL_ME_IN;
checkIsTrue(capacity > people);

const organisation = FILL_ME_IN;
checkIsTrue(typeof organisation === "string");
checkIsTrue(organisation.startsWith("Code"));
checkIsTrue(organisation.includes(" your "));
checkIsTrue(organisation.endsWith("Future!"));

const mystery = FILL_ME_IN;
checkIsTrue(typeof mystery === "boolean");
checkIsTrue(!mystery);

// Don't change anything below this point
var FILL_ME_IN;
function checkIsTrue(value1) {
  if (value1) {
    // "\x1b[32m%s\x1b[0m" will change console output to green
    console.log(
      "\x1b[32m%s\x1b[0m",
      "Yes, this expression evaluates to true! ✅"
    );
  } else {
    // "\x1b[31m%s\x1b[0m" will change console output to red
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Sorry, this expression evaluates to false! ❌"
    );
  }
}
```

:::

:::note Exercise 3

Create a function called `isEven` that should

- take a number as an input
- return a **boolean** indicating if the number is even or odd

Remember to avoid using `console.log` _inside_ the function itself

E.g. `isEven(100)` should return `true`
E.g. `isEven(53)` should return `false`

Call your function with a number of different inputs to check your function is working as expected. 😄

Bonus: Can you ensure your function doesn't use an `if` statement for this exercise 😎

:::

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

:::note Exercise

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

:::

### Exercise (10 mins)

:::note Exercise

Create a function that gives you a message depending on your mood! It should:

- take one input
- return "Good job, you're doing great!" if you pass in "happy"
- return "Every cloud has a silver lining" if you pass in "sad"
- return "Beep beep boop" if you pass in a number
- return "I'm sorry, I'm still learning about feelings!" if you pass in anything else

:::

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

:::note Exercise

Type the following expressions into your Node and note the output. Anything you didn't expect?

- `let num = 10`
- `num > 5 && num < 15`
- `num < 10 || num === 10`
- `false || true`
- `!true`
- `let greaterThan5 = num > 5`
- `!greaterThan5`
- `!(num === 10)`

:::

### Exercise (15 mins)

:::note Exercise

In pairs, write a function that checks a username is of an acceptable format for a user type. The function must:

- take two parameters: one for the username and one for the user type
- if the username starts with a capital letter _and_ has length between 5 and 10 characters long, it must return `"Username valid"`; otherwise, it must return `"Username invalid"`
- if the user type is an `admin` _or_ a `manager`, all usernames must return `"Username valid"`

:::

## Loops

When we're writing programs, we often find that we want to repeat a bit of code over and over, or repeat it but change something about it each time. To save ourselves from writing all that code, we use a **loop**. JavaScript has two main kinds of loops, a `while` loop and a `for` loop.

### while loop

A `while` loop is a way to repeat code until some condition is evaluated to `false`. For example:

```js
let i = 0;
while (i < 20) {
  someFunction(i);
  i++;
}
```

It's a convention to use `i` in loops. You could use any valid string as your variable name: loops don't have special rules. Programmers use `i` to remind ourselves this is an _iterator_.

Notice the line **i++** - this is the same as saying **i = i + 1** It does exactly the same thing but it is just more convenient to write.

:::warning Infinite loop ∞
It's important that the condition inside the parenthesis becomes false at some point - otherwise, we'll have what's known as an infinite loop.
:::

### Exercise (10 minutes)

:::note Exercise

Write a function that:

- Takes one number `n` as a parameter
- Adds all numbers from `0` to `n`. For example, if the input is `3`, the output should be `0 + 1 + 2 + 3`
- You should use a while loop

:::

### for loop

The `for` loop is similar to a while loop, but with a more specialized syntax. Programmers invented the for loop when they realized they were always doing the same three things: creating loop counter variables (like `i` above), incrementing them by some amount, and checking that they're less than a value.

The `for` loop syntax has special places for each of those three things. Here's the first while loop above, now written as a for loop:

![For loop](https://user-images.githubusercontent.com/31692/75388870-9213a880-58dd-11ea-90e6-4e67eabf390b.png)

```js
for (let i = 0; i < 20; i++) {
  someFunction(i);
}
```

### Exercise (10 minutes)

:::note Exercise

Write a function, similar to the last exercise, that:

- Takes one number `n` as a parameter
- Adds all numbers from `0` to `n`. For example, if the input is `3`, the output should be `0 + 1 + 2 + 3`
- You should use a for loop

:::

### for of loop

> The `for of` loop The for...of statement creates a loop iterating over iterable objects...[~MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

An iterable object is something that can be counted. A basket of seventeen apples is an iterable object. You might write a rule that says "check each apple in this basket and if it's green, yell BARNY". Let's try this out with strings, an iterable object in JS.

```js
const myName = "Sally";

for (const letter of myName) {
  console.log(letter);
}
```

To JavaScript, your name is a string of characters. It has a length, and you can access each characters with bracket notation, like this:

```js
let myName = "Sally";
myName.length; //5
myName[1]; //a
```

It's an iterable object. Let's work through this "offline". We don't need to write any code. We can play computer ourselves just by understanding the rules of JavaScript.

:::note Exercise, in pairs, (10 mins)

1. Each person write down their first name. Write it out like this S A L L Y and number the letters with a zero-indexed count like this 0 1 2 3 4.
2. Now pick a letter of the alphabet, any letter, and make up a rule for your partner to say, do, or act out. You could make them meow like a cat, or draw a picture, or anything (fun and nice).
3. The first player, speak your rule - say "**For** each letter **of** your name, if that letter is $letterYouChose, do $ruleYouInvented."
4. The second player, hold up your name and act out the `for of` loop.
5. Now swap!

:::

So to sum up, `for of` loops are pretty similar to `for` loops, but:

- they only work on iterable objects
- the iterator is the value, directly, so you don't need to access the value using bracket notation
- you don't need to set an end case as the loop will always go through every value in the iterable object and then end

Next week, we will think more about the most common iterable object in JavaScript: [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## PD (Dealing with conflict in teams)

Adapted from [Tectonica Interpersonal Conflict Resolution](https://github.com/Techtonica/curriculum/blob/main/career/conflict-resolution.md).

**Session objective:** This session explores what conflict is and the common ways we address it. We will explore conflict resolution toolkits and how we can become better at managing conflict effectively. We will talk about what effective body language is; what effective choice of words is; and how to build trust among teams.

[Conflict resolution slides](https://docs.google.com/presentation/d/1hTBEMDXrYBC2QTXWaRJkWI378DTVF-s8t_Uxi8mT7bQ/edit#slide=id.g1b73cb08c45_0_0)


:::note Exercise 1 (15 minutes)

**Exercise objective:** To role-play a workplace conflict scenario.

We are going to read through the scenario and practice with some role play.

In groups of 3 – one person will play the role of Missy, one person will play her manager, and the third person will be the observer.

Missys:  It’s after the meeting and you are going to talk with your manager about what happened.  You want to practice doing this the right way – click back to previous slide for advice.  

Managers: You will play the role you think the manager might play – you can respond well, or poorly to Missy – the choice is yours.

Observers: you will be experiencing this practice session as an invisible observer.  If you see Missy struggling or stumbling, you are the only person who can call a time out and provide her with some coaching/advice.

You get 3 minutes to prepare.

:::


:::note Exercise 2 (5 minutes)

**Exercise objective:** To identify feelings evoked through different body languages.

Stand (if able) and face another trainee. (If you're online, you'll be placed in separate breakout rooms).

First, display to each other an example of closed body language.
- How do you feel about the communication?

Now display an example of open body language and eye contact.
- How do you feel about that communication?

Facilitators will adapt the exercise to the diverse needs of trainees, or skip the exercise when the adaptation is not possible.

:::

:::note Exercise 3 (5 minutes)

**Exercise objective:** To identify the impact of emphasis and intonation during verbal communication.

Try reading "I can't wait to go to work today" out loud like you are excited. Now try nervous, and angry.

Say the sentence out loud emphasizing the word “I”. Next try emphasizing “work”, and “today”. 

How does the sentence means different things when you emphasize different words?

Facilitators will adapt the exercise to the diverse needs of trainees, or skip the exercise when the adaptation is not possible.

:::

## Coursework

[View the homework](./homework) for this lesson.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 1" week="Week 2" />
