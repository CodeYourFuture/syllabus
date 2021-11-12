---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-js3](https://codeyourfuture.slack.com/archives/C7SLBMSJE)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Resources

- [Quiz - JS3 Week 1 - 27/05/2020](https://docs.google.com/forms/d/e/1FAIpQLScYHmS7LOfI4ML3z2axEpZd2Zgvbe-9FBB5rsWoqqMcw2u6SA/viewform)
  - Created by London Volunteers and Louise Chow

## Lesson Aims

The aim of this lesson is to teach the trainees the key skills they need to be able to debug their work.

Each section of the lesson has a `Vocabulary` section where you should elicit answers from the class there appropriate.

### Why is Debugging Important?

The aim of this section is to frame some of the more disastrous bugs that have happened in history. The idea is to give debugging a greater importance that just "making my code work" and that good and thorough debugging is of vital importance.

You should play the videos to the trainees and have a short discussion around the questions posed.

### The Debugging Mindset

To bring the lesson back more to the trainees day to day lives - the trainees should have short groups discussions around the bugs that they've experienced in the past.

Try to keep the discussion focussed around the bugs that the trainees have had and not the solutions to the bugs. This will come later!

Framing their answers in the context of the `type` of error they are is a good way to engage the trainees with the next part of the class.

Encouraging the trainees to open up about the problems they have faced is part of a theme of 'normalising' bugs in code - it is important to reinforce that bugs are a part of life, they don't mean you suck!

### Types of Errors

By outlining some of the most common errors that trainees see, we aim to give them answers to the errors they see most often.

Take the time to the run code if necessary for the more complex issues and see if you can fix them in the class.

### Tools

This section can be quite lecture heavy so make sure to demonstrate the tools that you're using as much as possible in a browers and using live coding.

Try to elicit answers from the trainees about _when_ these tools might be useful for solving different kinds of bugs. If any of the trainees have used these tools before then elicit answers around when they've used them in the past.

### Exercise 1

These are the errors:

• Homer string syntax: apostrophe not escaped (syntax)
• for loop: off-by-one error on check (logical)
• Incorrect calling of the function (other)
• Typo (typerror on k) (other)

### Project Setup

Please take some time to fully explore the project and what the trainees are trying to achieve over three weeks.

The most important message to send is that the trainees should move at their own pace and **only continue to the next level when they understand the current one**.

You should walk the trainees through the setup guide and use the rest of the lesson to make a start on the project in groups.

### Quiz

You should reserve 10-15 minutes at the end of the lesson to run through the following summative assessment with the trainees. Have the trainees answer all the questions in the quiz and submit their answers before leaving for the day.

#### Solutions

##### Question 1

- To prevent bugs being released into production and having negative consequences on users - such as with Therac-25.
- Because finding bugs is harder the more complex the code gets. It is better to test little and often.

##### Question 2

A - False: A bug is when the program is not behaving as expected. This can be due to logic problems rather than compile or runtime errors.
B - False: Rubber ducking is a common method to debug problems and can involve talking through the problem with another person.
C - True: When your program is not working as expected, start by asking yourself the questions in the debugging framework.
D - True: Breakpoints are used to pause the execution of code.

##### Question 3

To `Step through the code` means to go line-by-line through the code and check what the state of the program is by looking at the values of variables or expressions on that line.
We use this method when debugging, so that we can pinpoint on which line our program begins to behave unexpectedly.

##### Question 4

A - True (Some at least, though not all)
B - True
C - False
D - True

##### Question 5

1. Add the word `debugger` into the line of code where you want to pause.
2. Click on the line you want to pause on in the debugger tool

##### Question 6

Line 4

This would be the accompanying code:

```js
function foo2() {
  return 1;
}
console.log(foo);
```

##### Question 7

1. What did I expect to happen?
2. Is it actually broken?
3. What happened instead?
4. What have I tried so far?

##### Question 8

Line 9

Correct code:

```js
var testArray = ["Test"];

function testFunction(testArray) {
  for (var i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
  }
}

testFunction(testArray);
```

##### Question 9

If you input a negative amount then your balance with credit. E.g. 100 - (-10) = 110

Solution:

```js
let accountBalance = 100;

function withdrawl(amount) {
  if (amount <= 0) {
    console.log("Please enter a number greater than zero.");
  } else {
    accountBalance = accountBalance - amount;
  }
  console.log("You have " + accountBalance + " in your bank account.");
}

// Change the input value below
input = -10;

withdrawl(input);
```

##### Question 10

A syntactical error is an error that is caused when your code does not follow the rules of the language.

Examples are `Unexpected token`, `Illegal character`, `Missing parenthesis`

## To Be Improved

### From London Class 6

- Could we make exercises that are even harder to enable them to use the tools more
- Build in some more checking for understanding
- We didn't think about `warnings` at all.
  - "Don't ignore errors and warnings"
  - "Start from the first warning"
