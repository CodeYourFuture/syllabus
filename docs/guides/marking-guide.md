---
id: marking-guide
title: Reviewing 
sidebar_label: Reviewing Guide
---

## How To Evaluate Coursework

Details on how we give feedback in code review are on the docs site:

[Coursework Feedback Docs](https://docs.codeyourfuture.io/teams/education/homework-feedback)

## Overview

### Completeness

- The code achieves all of the tasks in the coursework [[read more about completeness]](#complete-all-tasks)
- The code achieves the task in an intended way and solves the "general" problem [[read more about intention]](#achieves-task-in-intended-way)
- The code covers all edge cases [[read more about edge cases]](#edge-cases)
- The code does not contain any obvious bugs
- The code handles error responses as well as success responses [[read more about errors]](#error-responses)

### Code Style

- The code follows a consistent style
- The code follows CodeYourFuture's coding standards: [[read more about coding standards]](#coding-standards)
- The code is well indented: [[read more about indentation]](#well-indented-code)
- The code uses good variable names: [[read more about naming variables]](#good-variable-names)
- The code uses good function names: [[read more about naming functions]](#good-function-names)
- The code uses code which is easy to read and understand: [[read more about readability]](#more-readable-code)
- The code should not use hard coded values: [[read more about hard coded values]](#hard-coded-values)

### Clarity

- The code is broken up into small reusable functions: [[read more about small functions]](#small-functions)
- Code is not repeated in several locations of the coursework: [[read more about DRY]](#non-duplicated-code)
- The coursework does not have commented out code: [[read more about commented out code]](#commented-out-code)
- There is no dead code in the coursework: [[read more about unreachable code]](#dead-code)
- There is no extra or debug logging: [[read more about debug logging]](#debug-logging)

## Explanations

### Complete All Tasks

Completion of all of the tasks is essential.

### Pass the tests

Do not rewrite the tests to 'pass' your code. Rewrite your code to pass the tests. Pay attention to the real goal here.

Tests are your friend and your guide. Let tests help you. When you work for an employer, will they find it a good solution if you "fix" their payments system by making any input a valid credit card number? If not, why not? 

### Achieves task in intended way

You should also always try to solve the problem in the "general" rather than in the "specific".

For example, we could set the challenge

> Print every element of an array to the console
> Test 1: let array = ["A","B","C"]
> Test 2: let array = ["1","2","3","4"]
> Test 3: let array = ["Up", "Down"]

To make this test pass you could write

```js
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
```

However, that would not work for _every_ case that exists - only the ones that we're writing. Your aim isn't to just pass the tests, it's to write good code that solves the problem.

A better solution would be

```js
array.forEach((item) => {
  console.log(item);
});
```

### Edge Cases

Edge cases are when code does something you're not expecting and you didn't account for in your code.

Some edge cases are valid data, and some are not.

Some names contain punctuation; some people may only have a single name; your code must handle these edge cases. If someone doesn't enter a name at all, your code should reject this edge case and throw an error.

If your code doesn't notice unexpected inputs, you might rely on data that doesn't exist or are malformed. As your code gets more complicated, these problems get more difficult to resolve.

See [Falsehoods Programmers Believe About Names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/) for some interesting examples.

Good code should handle all of these cases so that they can't happen - and if they do - they don't make your program crash or stop working.

Validations are used wherever necessary. The code never breaks under any circumstances. User input is never trusted. Regardless of it being a negative, over-sized, invalid format, etc., every input passed should be processed, sanitized before taking it further. Every object is checked for its existence before accessing its properties.

#### More Reading

- [Don't forget edge cases](https://www.geeksforgeeks.org/dont-forget-edge-cases/)

### Small Functions

Writing small functions makes your code easier to understand and easier to work with. Ideally you should be able to describe what a function does in one sentence, without the word "and".

Good examples: "This function returns the user's favourite author", "This other function Tweets the title of an author's most popular book".

Bad example: "This function finds the user's favourite author and sends a Tweet with the name of that author's most popular book".

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

Not just the error messages, every response that is returned by the server must be properly handled. It should have necessary headers, response messages, error codes and any other necessary details attached with it in required format. All possible scenarios are tested to avoid timeouts, unresponsive UI, etc.

#### More Reading

- [Handling Error HTTP Responses in Javascript fetch](https://usefulangle.com/post/314/javascript-fetch-error-handling)

### Non-duplicated Code

Duplicated code should be moved into functions so they can be referenced from multiple places.

Having lots of duplicated code in your coursework means that it is harder to change or update your code.

#### More Reading

- [Duplication Code](https://dev.to/thinkster/code-smell-duplicated-code-fc1)

### Commented Out Code

Commenting out code is a great way to debug your code but when you use it to keep code for later it can become a problem.

Instead of commenting out code you want to keep but not use, consider moving it to separate file. This will make it easier to keep track of the code you're currently working on.

Having lots of commented out code make your code harder to read and make it easier for you to get overwhelmed and lost in your code.

Since we use Git to record all of the changes to our code you can always use the Git History to see everything that has changed.

#### More Reading

- [Please don't comment out code](https://kentcdodds.com/blog/please-dont-commit-commented-out-code)
- [Putting comments in code: the good, the bad, and the ugly.](https://www.freecodecamp.org/news/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83/)
- [Git History](https://syllabus.codeyourfuture.io/git/index#history)

### Dead Code

Dead Code is code that is in your coursework but can't be reached or run by your program.

For example, a function that is never called is considered dead code.

Dead code should be removed from your coursework or re-written so it is used. Having lots of dead code in your coursework can make your work hard to read and understand.

#### More Reading

- [Dead Code](https://en.wikipedia.org/wiki/Dead_code)

### Coding Standards

All code written by Trainees at CodeYourFuture should follow our [Coding Standard](./code-style-guide) guidelines.

These guidelines are based on ones used in industry.

Guidelines are important in big organisations so that everyone writes code in the same way across a large application. It's important that trainees get used to writing in a consistent style early on.

#### More Reading

- [CodeYourFuture Coding Standards](./code-style-guide)

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
function removeCapitalLetters(){)
```

Sometimes if you can't come up with a good function name it's an indication that the function doesn't have a nice, crisp focus and needs to be refactored.

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

means that the variable `pocketMoney` is being used to store how much pocket money you have. Right now you have £20.

The name given to each variable is up to the programmer, but ideally a variable name should have meaning you can understand without needing to read any other code, i.e. it should reflect the value that it is holding.

#### More Reading

- [Good Variable Names](https://spin.atomicobject.com/2017/11/01/good-variable-names/)
- [Programming Basics - Naming Variables](https://www.bbc.co.uk/bitesize/guides/zwmbgk7/revision/3)

### More Readable Code

The most important thing when writing code is to make it easy to read and understand, and as simple as possible.

An example of write more readable code might be using a `filter` instead of a complicated `for` loop. This is better, because it is immediately obvious what you're trying to do - filter an array - and you're less likely to make a mistake using it.

For example,

```js
const trees = ["Oak", "Birch", "Beech", "Elm", "Hazel"];

let treesBeginningWithB = [];
for (var i = 0; i < trees.length; i++) {
  if (trees[i].chatAt(0) === "B") {
    treesBeginningWithB.push(trees[i]);
  }
}

console.log(treesBeginningWithB); // ["Birch", "Beech"]
```

Could be written like this be easier to understand and read.

```js
const trees = ["Oak", "Birch", "Beech", "Elm", "Hazel"];

let treesBeginningWithB = trees.filter((tree) => tree.chatAt(0) === "B");

console.log(treesBeginningWithB); // ["Birch", "Beech"]
```

As you can see, we've reduced six lines of code into one and it is immediately obvious that it is trying to filter the trees beginning with B.

Writing readable code is a big topic and one that you'll get better at as you go on. We encourage you to read more about it.

#### More Reading

- [Readable Code](https://blog.pragmaticengineer.com/readable-code/)

### Hard Coded Values

Hard coded values with no explanation make code hard to understand and read in the long term. For example

```js
getData("https://www.api.com/retrieve");
calculateScreenSize(1800);
```

Will be hard to understand when you codebase grows.

Instead use constants to store your hard coded values - this means the value has a name, which can be [usefully descriptive](#good-variable-names). For example

```js
let WEATHER_ENDPOINT = "https://www.api.com/retrieve";
let MAX_SCREEN_WIDTH = 1800;

getData(WEATHER_ENDPOINT);
calculateScreenSize(MAX_SCREEN_WIDTH);
```

#### More Reading

- [Is it ever a good idea to hardcode values into our applications?](https://softwareengineering.stackexchange.com/questions/67982/is-it-ever-a-good-idea-to-hardcode-values-into-our-applications)
