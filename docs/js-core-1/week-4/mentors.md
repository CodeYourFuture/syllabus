---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## Coursework

As an alternative to week 4 coursework, some consolidation on week 3 using array methods could be done.

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-js1](https://codeyourfuture.slack.com/archives/C7RBFFKUK)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Flipped classroom recap/Q&A

The flipped classroom practice should have trainees

- Refactor code to pull out meaningfully named functions to represent business logic (e.g. `isShortName` instead of `name.length<7`)
- Refactor code to use array methods as appropriate instead of `for ... of`
  - `.map()`
  - `.filter()`
- As bonus, some minimal explanation of named functions, anonymous functions and arrow functions is given -> not all trainees need to understand it at this stage. They should return to the video when they are ready for it/feel the need for it.
- Note that the following are _not_ currently covered
  - `.forEach()` does not tend to have much value over for ... of, so is not covered
  - `.reduce()` trainees find a lot of code with reduce on the web and typically cannot adequately explain it
- Not covered but trainees can look up in syllabus or MDN
  - `.includes()`
  - `.sort()`
  - other array methods

Some questions/prompts that may be useful

- What does this program do? (show programs of varying degrees of complexity using `.map()` and `.filter()`)
- When do we use `.map()`?
- When do we use `.filter()`?
- What is the difference between `arr.filter(isBig)` and `arr.filter(isBig())`?
- What is the difference between `.map()` and `.filter()`
  - in terms of the result that is output?
  - in terms of the function that must be passed
- What are some reasons for refactoring expressions into functions that evaluate to the same thing? e.g.

```js
if (cards.length > 7) {
  console.log("you have too many cards in your hand");
}
```

vs

```js
shouldDiscard(cards) {
  return cards.length > 7;
}

if (shouldDiscard(cards)) {
  console.log("you have too many cards in your hand");
}
```

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
