---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## Lesson Aims

This is the first time that students have been introduced to network programming and so can be a hard lesson since we fit a lot in

We made a very conscious decision to not include the teaching of `Promises` in this lesson and simply teach `fetch` as a recipe. The aim is to have the students creating interesting projects to keep them engaged rather than overload them with theory.

The overarching plan for this lesson is repetition. By the end of the week they should be getting very used to the flow of

1. Use fetch to get some data
2. Parse the result
3. Use DOM manipulation to do something on the screen with the data

## Lesson Overview

### How the web works

We felt it was important to give a recap of how the internet works in particular `Status Codes` and `Methods` since they will be using them in the lesson.

We tried to keep it to the most minimal selection of codes and methods so that we don't overload the students with too much new information.

### What are APIs and how to interact with them

A short overview of what an API is and how it works.

When showing examples of APIs it's important to show it working in a browser so the students can see the JSON response. They should be fairly good at reading JSON at this point since it's very similar to a JavaScript Object.

### Fetch

The most important points to impart when teaching this section are

- The general flow of a `Promise`
  - i.e. first you use `fetch().` and then `.then()`
- Whatever is returned from a `.then()` is returned in the next section
- How to use `.json()` to get the JSON from the request

Live Coding from scratch is really important here since the students will be doing an exercise later on to

#### Exercise 1

A completed example of this exercise can be found [here](https://github.com/CodeYourFuture/completed-country-website)

## To Be Improved
