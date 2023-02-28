---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-js1](https://codeyourfuture.slack.com/archives/C7RBFFKUK)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Flipped classroom recap/Q&A

The flipped classroom practice should have trainees

- Get a basic understanding of truthiness and falsiness (see notes below)
  - In particular, using an `if (argumentToFunction)` for functions with optional arguments
  - `let foo = val || "default value"` and `if (val && val.foo === 3)` are not yet covered
- Write and run programs using basic array functionality
  - initialise an array: `const names = ["Biruk", "Ali", "Mitch"];`
  - access a zero-indexed element: `let ali = names[1];`
  - modify a zero-indexed element: `names[2] = "Jyoti"`
  - get the length of an array: `let countNames = names.length`
  - add elements to an array: `names.push("Zsolt")`
- Iterate through an array using `for (const name of names) {console.log(name);}`
- Iterate through an array using `for (let i=0; i<names.length; i++) {console.log(i, names[i])}`
  - it is not important at this stage for all trainees to understand this (it's included only for completeness as trainees will find these loops through stackoverflow/google)
  - equivalence between c-style for and while loop is not yet clarified
- Note: array methods are not covered, particularly 2nd order functions: `.filter()`, `.map()`, `.forEach()`

Some questions/prompts that may be useful

- What does this program do? (show programs of varying degrees of complexity using arrays)
- What does this expression evaluate to, using array expressions?
- What kinds of data types have we seen so far? (without getting too technical, "string", "number", "boolean", "undefined"). What values are falsy/truthy?
- What are some ways to iterate over an array? Why would we use one over the other?
- Discuss solutions to practice exercises

## Notes on truthy, falsy, null, and undefined

This session is only to establish some initial habits of thought, especially around debugging. This is such a tricky idea to grasp and so helpful to understand, so talk a little bit about different errors produced by these states.

Don't get too deep into the technicalities as trainees have not yet covered enough JS to grasp the implications (eg scope, state and initialisation). Instead, try to produce some common [Type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) errors and [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) errors, particularly:

`Uncaught TypeError: Cannot read property of undefined`
`Uncaught TypeError: undefined is not a function`

and discuss them together. If you have time, connect this back to user input validation in HTML Forms. What happens when you write code that assumes a variable has a length, but the user doesn't set a name?

There's a small [Codewars collection](https://www.codewars.com/collections/cyf-handling-falsy) and you could work through a kata in class as a group.

## Presentations (Out of date, for reference only)

- [Week 3 - JS Core 1 [Google Slides] - 01/05/2020](https://drive.google.com/open?id=1q98KUoX5QQoFEDUl52hLxOnWkoCi2vGrehHjBBEnfdI)
  - Created by Manchester Volunteers

## Resources

- [Quiz - `Git vs Github, Arguments vs Parameters` - (07/05/2020)](https://forms.gle/jQw4C9bmw1b14jHQ8)
- [Quiz - `JavaScript 1 Recap` - (10/05/2020)](https://docs.google.com/forms/d/1-jVH3eTZy6Cig8iEZqDTdLaFgJCgVKv8q5HIF5yDUQ0/edit)
  - This can be done in class or set as homework.
- [Self-Assessment - JavaScript Core 1](https://docs.google.com/forms/u/1/d/e/1FAIpQLScW1J7Cr9H7Yr0rjPkgs9hv91nOnGueFe2d4Ir1-pNWEAisGQ/viewform)
  - Created by London and Chris Owen
- [Basic JS Comprehension Assessment](https://docs.google.com/document/d/1nzNd1cUl_u1lO35_cPVZ_A9SIbbGTe8xGcHnHHy-q9o/edit)
  - Created by Shukri Ali and Birmingham

## Notes
