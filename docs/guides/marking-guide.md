---
id: marking-guide
title: Marking Guide
sidebar_label: Marking Guide
---

This Rubric should be used to guide your assessment of Students Homework at CodeYourFuture

## Overview

### Completeness (/10)

- The code achieves all of the tasks in the coursework
- The code covers all edge cases [[read more]](#edge-cases)
- The code does not contain any obvious bugs
- The code handles error responses as well as success responses [[read more]](#error-responses)

### Code Style (/5)

- The code follows a consistent style
- The code follows CodeYourFuture's coding standards [[read more]](#coding-standards)
- The code is well indented [[read more]](#well-indented-code)
- The code uses good variable names [[read more]](#good-variable-names)
- The code uses good function names [[read more]](#good-function-names)
- The code uses more optimal, less error prone code to solve problems [[read more]](#more-optimal-code)
- The code should not use hard coded values [[read more]](#hard-coded-values)

### Clarity (/5)

- The code is divided into functions of a good size. [[read more]](#small-functions)
- Code is not repeated in several locations of the coursework. [[read more]](#non-duplicated-code)
- The coursework does not have commented out code. [[read more]](#commented-out-code)
- There is no dead code in the coursework [[read more]](#dead-code)
- There is no extra or debug logging [[read more]](#debug-logging)

## Explanations

### Edge Cases

Edge cases are when code does something you're not expecting and you didn't account for in your code.

For example, using a number in a `Name` field of a form might cause problems since peoples names can't be numbers.

Good code should handle all of these cases so that they can't happen - and if they do - they don't make your program crash or stop work.

Validations are used wherever necessary. The code never breaks under any circumstances. Especially under invalid inputs that come from the user end. Regardless of it being a negative, over-sized, invalid format, etc., every input passed should be processed, sanitized before taking it further. Every object is checked for its actual data existence before accessing its properties.

#### More Reading

- [Don't forget edge cases](https://www.geeksforgeeks.org/dont-forget-edge-cases/)

### Small Functions

Writing small functions makes your code easier to understand and easier to work with

#### More Reading

- [How big should a function be?](https://thecodersblog.com/how-big-a-function-should-be/)

### Debug Logging

The code should not contain debug logging that was used during development. For example, any logs like

```js
console.log("Does this work");
console.log("1");
console.log(array[1].object.name);
```

should be removed.

### Error Responses

Not just the error messages, every response that is returned by the server must be properly handled. It should have necessary headers, response messages, error codes and any other necessary details attached with it in required format. All possible scenarios are tested to avoid deadlocks, timeouts, etc.

#### More Reading

- [Handling Error HTTP Responses in Javascript fetch](https://usefulangle.com/post/314/javascript-fetch-error-handling)

### Non-duplicated Code

Duplicated code should be moved into functions so they can be reference from multiple places.

Having lots of duplicated code in your coursework means that it is harder to change or update your code.

#### More Reading

- [Duplication Code](https://dev.to/thinkster/code-smell-duplicated-code-fc1)

### Commented Out Code

Commenting out code is a great way to debug your code but when you use it to keep code for later it can become a problem.

Instead of commenting out code you want to keep but not use, consider moving it to separate file. This will make it easier to keep track of the code you're currently working on.

Having lots of commented out code make your code harder to read and make it easier for you to get overwhelmed and lost in your code.

#### More Reading

- [I’ll Delete Your Commented Code Without Reading It and I’m Not Sorry](https://blog.submain.com/delete-commented-code-without-reading/)

### Dead Code

Dead Code is code that is in your coursework but can't be reached or run by your program.

For example, a function that is never called (or invoked) is considered dead code.

Dead code should be removed from your coursework or re-written so it is used. Having lots of dead code in your coursework can make your work hard to read and understand.

#### More Reading

- [Dead Code](https://en.wikipedia.org/wiki/Dead_code)

### Coding Standards

All code written by Students at CodeYourFuture should follow our [Coding Standard](./coding-standards) guidelines.

These guidelines are based on ones used in industry.

Guidelines are important in big organisations so that everyone writes code in the same way across a large application. It's important that students get used to writing in a consistent style early on.

#### More Reading

- [CodeYourFuture Coding Standards](./coding-standards)

### Well Indented Code

Indentation is a fundamental aspect of code styling, and plays a large role in influencing readability. First of all, indented code is easier to read through than unindented code.

With unindented code, the overall structure of the code might be somewhat difficult to see. However, with indented code, the overall structure of the code jumps out at you. Tabs tell you that a line of code is inside a function, loop, if statement, or else statement. Knowing which parts of the code is inside what will become especially important when your code becomes more complex.

#### More Reading

- [Importance of Code Indentation](http://mrbool.com/importance-of-code-indentation/29079)

### Good Function Names

Good function names are important so that code is easy to read and understand what it is doing.

A bad function name might be

```js
function doWork() {}
```

A good function name might be

```js
function removeCaptialLetters(){)
```

Sometimes if you can't come up with a good function name it's an indication that the function doesn't have a nice, crisp focus and needs to be refactored. If it's a class method, perhaps the class needs refactoring too.

But it's well worth the trouble finding the best possible names, since it makes your code so much more understandable and usable.

#### More Reading

- [Coding like Shakespeare: Practical Function Naming Conventions](https://dmitripavlutin.com/coding-like-shakespeare-practical-function-naming-conventions/)
- [Trouble coming up with good names for functions](https://stackoverflow.com/questions/979118/trouble-coming-up-with-good-names-for-functions)

### Good Variable Names

Each variable is named so it is clear which variable is being used at any time. It is important to use meaningful names for variables:

For example,

```js
let pocketMoney = 20;
```

means that the variable ‘pocketMoney’ is being used to store how much pocket money you have. Right now you have £20.

The name given to each variable is up to the programmer, but ideally a variable name should have meaning, ie it should reflect the value that it is holding.

#### More Reading

- [Good Variable Names](https://spin.atomicobject.com/2017/11/01/good-variable-names/)
- [Programming Basics - Naming Variables](https://www.bbc.co.uk/bitesize/guides/zwmbgk7/revision/3)

### More Optimal Code

Nearly always, there are better and worse ways of writing code. You should always try to write code in a way that is simple to understand and read.

An example of this might be using a `filter` instead of a complicated `for` loop

### Hard Coded Values

Hard coded values with no explanation make code hard to understand and read in the long term. For example

```js
getData("https://www.api.com/retrieve");
calculateScreenSize(1800);
```

Will be hard to understand when you codebase grows.

Instead us constants to store your hard coded values. For example

```js
let ENDPOINT = "https://www.api.com/retrieve";
let WIDTH = 1800;

getData(ENDPOINT);
calculateScreenSize(WIDTH);
```

#### More Reading

- [Is it ever a good idea to hardcode values into our applications?](https://softwareengineering.stackexchange.com/questions/67982/is-it-ever-a-good-idea-to-hardcode-values-into-our-applications)
