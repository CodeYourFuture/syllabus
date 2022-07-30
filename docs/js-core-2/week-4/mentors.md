---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-js2](https://codeyourfuture.slack.com/archives/C7TGMCLS2)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Classwork

Previous teachers have made the exercises in the syllabus lesson available in this classwork repo:

https://github.com/CodeYourFuture/JavaScript-Core-2-Classwork-Week4

## Quiz

- [End of Module Quiz - [Google Form] - 04/06/2020](https://docs.google.com/forms/d/e/1FAIpQLSeF4F3b9ogAWdgabCcrHfBlDx-59xQ3w-tIG-ojdEqnJng5Pg/viewform)
  - Created by London and Antigoni Makri
- [End of Module Quiz - [Google Form] - 28/05/2020](https://docs.google.com/forms/d/e/1FAIpQLSfMCZZkEWexs_7PbuRMpUPXqjjyXv814mhl3OikBv39QsqKSg/viewform)
  - Created by Chris Owen

## Presentations

Previous teachers have prepared and shared these slides:

https://docs.google.com/presentation/d/1RZYuEaXBOoQG1y1uWmuJBN19U9OQBcEZMu28vU6jJGU/edit?usp=sharing

## Notes

### Exercise - Synchronous vs Asynchronous

The aim of this exercise is to enable trainees to define the difference between synchronous and asynchronous code.This should be run in small groups and TAs should make sure that there's a discussion about the order of the expected results.

The main messages to be delivered here are:

1. In _synchronous_ programmes, if you have two lines of code (L1 followed by L2), then L2 cannot begin running until L1 has finished executing. You can imagine this as if you are in a line of people waiting to buy train tickets. You can't begin to buy a train ticket until all the people in front of you have finished buying theirs. Similarly, the people behind you can't start buying their tickets until you have bought yours.

2. In _asynchronous_ programmes, you can have two lines of code (L1 followed by L2), where L1 schedules some task to be run in the future, but L2 runs before L1's task completes. Picture eating at a sit-down restaurant. Other people order their food. You can also order your food. You don't have to wait for them to receive their food and finish eating before you order. Similarly, other people don't have to wait for you to get your food and finish eating before they can order. Everybody will get their food as soon as it is finished cooking.

### The Network Tab

The most important part of the Network Tab to explain is the relationship between the HTML file and the requests that are subsequently made.

That is to say that when a HTML is parsed that GET requests are made to the resources that are required to view the page. This can be shown by

- Showing how a JavaScript file is referenced in a `<script>` tag and is then loaded in the Network Tab
- Showing how an `<img>` tag referenced a `src` attribute and the image is loaded in the Network Tab

### Exercise - GET Requests

The aim of this exercises to let the trainees explore the network tab and spending some time reading code.

When the class has submitted their lists open the network tab and see exactly what was requested by the website. Have a discussion around each of the GET requests. You can find the website in the exercise [here](https://codeyourfuture.github.io/Network-Tab-Example/).

For trainees that go very quickly through the exercise send them to a complicated website and continue to let them explore through the exercises. Some ideas:

- https://codeyourfuture.io/meet-the-team/ - Good because it has lots of images
- https://www.bbc.co.uk/news - Lots of icons and images

### Exercise - POST Requests

Again, the aim of this exercises is to let the trainees see how requests can be triggered by a button click and forces them to see the difference between a GET and POST request.
