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

## Lesson Aims

This is the first time that trainees have been introduced to network programming and so can be a hard lesson since we fit a lot in

We made a very conscious decision to not include the teaching of `Promises` in this lesson and simply teach `fetch` as a recipe. The aim is to have the trainees creating interesting projects to keep them engaged rather than overload them with theory.

The overarching plan for this lesson is repetition. By the end of the week they should be getting very used to the flow of

1. Use fetch to get some data
2. Parse the result
3. Use DOM manipulation to do something on the screen with the data

## Lesson Overview

### Debugging Quiz Answers

What are the four questions we ask ourselves in the Debugging Framework?

- What did I expect to happen?
- Is it actually broken?
- What happened instead?
- What have I tried so far?

What are three of the tools we could use to debug our programs?

- See [here](https://syllabus.codeyourfuture.io/js-core-3/week-1/lesson#tools)

What is a syntax error?

- See [here](https://syllabus.codeyourfuture.io/js-core-3/week-1/lesson#tools)

What is a reference error?

- See [here](https://syllabus.codeyourfuture.io/js-core-3/week-1/lesson#reference-errors)

What is a type error?

- See [here](https://syllabus.codeyourfuture.io/js-core-3/week-1/lesson#examples-of-type-errors)

### How the web works

We felt it was important to give a recap of how the internet works in particular `Status Codes` and `Methods` since they will be using them in the lesson.

We tried to keep it to the most minimal selection of codes and methods so that we don't overload the trainees with too much new information.

### What are APIs and how to interact with them

A short overview of what an API is and how it works.

When showing examples of APIs it's important to show it working in a browser so the trainees can see the JSON response. They should be fairly good at reading JSON at this point since it's very similar to a JavaScript Object.

### Fetch

The most important points to impart when teaching this section are

- The general flow of a `Promise`
  - i.e. first you use `fetch().` and then `.then()`
- Whatever is returned from a `.then()` is returned in the next section
- How to use `.json()` to get the JSON from the request

Live Coding from scratch is really important here since the trainees will be doing an exercise later on to

#### Exercise 1

A completed example of this exercise can be found [here](https://github.com/CodeYourFuture/completed-country-website)

## To Be Improved
