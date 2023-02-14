---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## Before Teaching this Module

Before you start teaching this module you must inform all trainees that there is preparation work to do.

You can find the preparation material [here](../preparation).

Be sure to assign all of the tasks to your trainees several days before you aim to teach.

## Delivery Notes

### Context

This module takes us out of the browser for a few weeks and is trainees first exposure to actual javascript code, both of which might be challenging. It's worth spending time helping trainees to not feel too lost.

### Flipped classroom recap/Q&A

The flipped classroom practice should have trainees

- Write and run (using node/the terminal inside of VS Code) their first single-line console.log program
- Write and run multi-line console.log program
- Use the REPL to evaluate expressions (and define variables)
  - strings
  - let variable + assign
  - template strings (preferred to using `+`)
  - simple arithmetic operations
  - call functions that are part of standard javascript (e.g. Math)
  - define functions and call them
- Write and call their own functions
- Maybe run `npm install` and `npm test` (or this happens while doing coursework)

Some questions/prompts that may be useful

- What does this program do? (show programs of varying degrees of complexity using console.log, strings, template strings, variables, function definitions and function calls)
- What does this expression evaluate to?
- What is the difference between an expression and a statement? (don't need to get too technical beyond "does something" vs "evaluates to a value")
- What kinds of data types have we seen so far? (without getting too technical, "string", "number", maybe "undefined")
- What is the difference between defining and calling a function?
- How do arguments in function calls and parameters in function definitions match up?
- Why/when do we use variables and functions?
- Discuss solutions to practice exercises (particularly 3.1 - don't get too bogged down in scope + global variables for now)

### Giving Feedback to Each Other

For this exercise, you should open the Pull Request and share you screen. Elicit answers from the trainees based on what they've just read.

You should only type what they say, try to let them take the lead.

**Important**: Please delete the comments after you have finished the exercise so that another teachers can use it!

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-js1](https://codeyourfuture.slack.com/archives/C7RBFFKUK)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Presentations

- [Week 1 Midweek Catch-up - JS Core 1 [Google Slides] - 01/05/2020](https://drive.google.com/open?id=1iyqMSJUhaDSIdRQeguqxt_GZwKCwFk4cvikZpwK5Emo)
  - Created by Scotland and Richard Darby

## Videos

- [Functions, Variables and Bees - An Introduction to JS1-1 Concepts](https://youtu.be/58zaP4gumpA)
  - Created by Scotland and Rares Matei

## What worked well

- Having all the exercises for the module in the js-exercises repo works well.

### Things to improve

- Array methods in syllabus seem outdated / not the most useful.

  - e.g. setting a new array value using the [x] notation should be replaced with .push()
  - Also suggest adding filter() to array methods section.

- Can we introduce arrow functions here? It is likely trainees will encounter this notation during their research, so it would be useful to cover this.

### Other thoughts

- Trainees confuse returns and console.logs
- It's difficult for trainees to differentiate between variables the coder has created, and reserved words that are built into javascript. e.g. multiply() vs push()
- The Predicates section was spent mostly trying to grasp typeof. Not sure if this is just a good opportunity to teach typeof, or if it distracts from the point of the lesson i.e. predicates?
- Trainees make some confusions between the function definition and the function call during the tdd exercises. They try to reuse the values or the variables passed as parameters when calling the function inside the function itself. For Example, given the definition: function addOne(numbers) and the call: addOne(myArray), trainees try to use the name myArray inside the function or they think that the parameter in the function definition should be called myArray...
