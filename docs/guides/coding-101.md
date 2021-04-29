---
id: coding-101
title: Coding 101
sidebar_label: Coding 101
---

**What we will learn today?**

- What is a computer program?
- Getting started with JavaScript

## What is a computer program

> Intro to programming logic – Making a sandwich (Source:
> <http://static.zerorobotics.mit.edu/docs/team-activities/ProgrammingPeanutButterAndJelly.pdf>)

1. Ask the trainees what they think a program is at its most basic level
   - Guide, if necessary, towards the idea that its instructions or an action
     etc.
2. Focus on the idea of instructions:
   - Explain that like with a physical activity - tools and steps are required
     to carry out instructions
   - Introduce the group activity of programming the activity of making a
     sandwich
3. Ask the trainees what items we will need to make a sandwich:
   - As they shout them out list them on the screen for the whole class to see
   - Introduce the concept of objects and classes. Tie into the idea of how in a
     program these would be the 'tools' required for an activity and how for our
     sandwich making task the items we have listed previously are our classes
4. Now that we have all of the tools we need to make a sandwich ask the trainees
   to shout out what they think the first step or instruction is:
   - Write the instruction out on the screen and ask the trainees which object
     would be needed to carry out that instruction
   - Copy the instruction and place it under the object that the trainees have
     decided is responsible for it and introduce the idea of methods
   - Continue asking the trainees for instructions and listing them under the
     objects that would be responsible for them (in the case where two objects
     are required to carry out an instruction try and break it down further with
     the trainees until only one object is responsible for any one instruction –
     could be a good way to introduce the idea of how specific you need to be in
     programming and the concepts that are detailed in the source example of
     this exercise)
5. Once the trainees are satisfied with the instructions take the best formed
   class and ask the trainees to come up with a one word summary for each
   instruction that is has. Explain the benefits of well named methods in
   programming and (maybe?) touch on naming conventions.

## Getting started with JavaScript

We will spend most of this lesson in Codepen. To get started, go to
<https://codepen.io/pen> to create a new Pen. On the bottom left,
click the "Console" button to open the console.

You can place your cursor right behind the `>` sign. Type a simple expression,
such as `2 + 2` and hit enter. You will see expression, as well as its result,
in the window above.

You will be able to follow most of this session along just entering expressions
in the console like this.

## Variables and assignments

For an expression or a value to be of any use to us, we need to store it in a
variable.

Variables have a name (_identifier_) that we can use to refer to a value. You
can assign a value to a variable with the following statement:

```js
var x = 3;
^   ^ ^ ^
|   | | value
|   | assignment operator
|   identifier
declaration statement
```

Let's break this statement down:

- `var`: With the `var` statement we tell the JavaScript engine that `x` is now
  a variable
- `x`: The variable name/identifier. It can be short or long, but must not
  contain spaces and must not start with a number.
- `=`: The equal sign is the assigmnent operator
- `3`: The value that we assign to the variable. This can be any number, string
  or boolean, or any more complex data type that we will introduce later. You
  can also use an existing variable here.
- `;`: THe semicolon is not strictly needed, but is generally used to terminate
  a statement.

Now you can use the identifier instead of the actual value in an expression:

`x + x`, `x * x`, `console.log(x)`

## Simple data types & Expressions

### Numbers

Let's start with something seemingly simple - numbers. Here are some:

```js
1;
15;
3195803798;
1.4;
0.0000005;
0 - 23;
```

You will see that there are whole numbers (no decimal point) and real numbers
(decimal point), which in JavaScript are so-called “floating point” numbers.
Numbers can be positive or negative and they support all the basic math
operators that you would expect:

```js
2 + 2; // 4
2 - 5; // -3
2 * 3; // 6
10 / 2; // 5
3 * -2; // -6
```

Operators have the same precedence as in algebra: `*` and `/` have higher
precedence than `+` and `-`.

- **TODO:** Do math exercise
- **TODO:** What about Infinity, Math.PI, IEEE floating points, NaN

### Strings

Strings represent any sort of text. They are delimited by single quotes (`'`) or
double quotes (`”`) and can be of any length.

```js
""; // empty string
""; // empty string
"Hello";
"I am learning JavaScript";
'It\'s been a great journey so far!';
"Double quotes work as well";

```

> If you need single or double quotes _inside the string_, you need to “escape”
> them by putting a backslash in front of them. If you don't do this, the
> JavaScript engine will think the string ends here, because it encounters a
> quote.

The most common operation on strings is to append one string to another. This is
called _string concatenation_. It's achieved by the plus (`+`) operator:

```js
"Hello" + "World"; // "HelloWorld"
```

- **TODO:** Introduce string concatenation
- **TODO:** What about basic string functions, like substr, replace etc?

### Booleans

[Booleans](https://en.wikipedia.org/wiki/Boolean_data_type) are a data type that
can only have two values: `true` and `false`.

Like numbers, they can be combined using operators, but there are different
operators for booleans (analoguous to
[Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra)). The most
important ones are:

- `!` (NOT), which negates a value:

```js
!true; // false
!false; // true
```

- `&&` (AND), which is only true if both operands are true:

```js
false && false; // false
true && false; // false
false && true; // false
true && true; // true
```

- `||` (OR), which is true if at least one of the operands is true:

```js
false && false; // false
true && false; // true
false && true; // true
true && true; // true
```

**TODO:** When to introduce truthiness and falsiness? Probably in `comparisons`?

---

> **Exercise**: Put simple mathematical expressions into the console: `2 * 2`,
> `2 + 2`, `5 * 7 - 13` > **Exercise**: Calculate the area of a circle (`r * r * pi`). Do a quick Google search on how to use PI in JavaScript.
>
> See what happens when you "add" two strings together
>
> Research the JS Math library. sqrt, floor, ceil, round
>
> Write an expression that outputs the percentage of trainees who are female.
> Make it so it outputs it as `58%`, and make sure you use the actual numbers of
> women and the total number of trainees. Solution: `console.log(Math.round(7 / 17 * 100) + "%");`

### From REPL to console.log

- Single expressions are not very useful, you want to write applications
- More than one statement? Move it to the `JS` box in Codepen
- Now you don't get any immediate feedback
- Use `console.log` to print to the console: `console.log(3 + 3);`
- Write statements below each other

> **THOUGHT:** Codepen does not have a "run" button, so it's quite intransparent
> when it actually re-runs a program. Maybe a different tool is better? A simple
> jsbin configuration, maybe?
