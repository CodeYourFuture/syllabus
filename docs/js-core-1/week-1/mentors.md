---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## Before Teaching this Module

Before you start teaching this module you must inform all students that there is preparation work to do.

You can find the preparation material [here](../preparation).

Be sure to assign all of the tasks to your students several days before you aim to teach.

## Delivery Notes

### Giving Feedback to Each Other

For this exercise, you should open the Pull Request and share you screen. Illicit answers from the students based on what they've just read.

You should only type what they say, try to let them take the lead.

**Important**: Please delete the comments after you have finished the exercise so that another teacher can use it!

## Questions and Help

We highly recommend joining the relevent Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-js1](https://codeyourfuture.slack.com/archives/C7RBFFKUK)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Presentations

- [Week 1 - JS Core 1 [Google Slides] - 01/05/2020](https://drive.google.com/open?id=10rob7Nw6mEpA0h1wEZueVIF7doBZqlfY2twQEYlIse4)
  - [Function demo](https://github.com/anthonytranDev/cyf-js-core-1-function-demo)
  - Created by Manchester and Anthony Tran
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

- Can we introduce arrow functions here? It is likely students will encounter this notation during their research, so it would be useful to cover this.

### Other thoughts

- Students confuse returns and console.logs
- It's difficult for students to differentiate between variables the coder has created, and reserved words that are built into javascript. e.g. multiply() vs push()
- The Predicates section was spent mostly trying to grasp typeof. Not sure if this is just a good opportunity to teach typeof, or if it distracts from the point of the lesson i.e. predicates?
- Students make some confusions between the function definition and the function call during the tdd exercises. They try to reuse the values or the variables passed as parameters when calling the function inside the function itself. For Example, given the definition: function addOne(numbers) and the call: addOne(myArray), students try to use the name myArray inside the function or they think that the parameter in the function definition should be called myArray...
