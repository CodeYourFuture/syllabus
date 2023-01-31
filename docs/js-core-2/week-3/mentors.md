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

## Presentations

- [JS 2 Week 3 - 2023 - London](https://docs.google.com/presentation/d/1SmA3dXyxhRUHRLpKBhbptYF04V6xIoYXbKtfnU0WEEg/edit?usp=sharing)
  - Created by London Volunteers

## Notes

### Build a static mockup first

- I'll normally have the trainees first make a prototype static html version of the expected output, based on their interpretation of the homework's written task
- Do they agree? Give them time to discuss it and convince each other. If they all agree on the same wrong question interpretation, I'll be tempted to aim for that rather than correct them - knowing the learning objectives is important here.
- Normally I'll have them do this mockup on codepen, or somewhere quite distinct from their programmatically-constructed work so they don't mix them up.

### Give trainees the intended HTML

- I'd much prefer the exercise provided these mock-ups up-front, so the trainee can focus on the programming task. They waste a lot of time trying to interpret ambiguous task statements, and I'm sure volunteers also waste a lot of time trying to write them clearly, too. Picture is worth a 1000 words.

### DOM Tree diagram

- I'll have (or I'll help) the trainees draw the _intended_ DOM tree based on their static HTML prototype. By hand is best (https://autodraw.com is quick and simple).
- I'll have the trainees draw the starting DOM diagram (often the exercise has a starting div element into which the trainees will append created elements)
- I'll show the trainees how I think of createElement and appendElement working - the former creating an element that is imagined but not yet attached to the tree
- I'll stress that only those elements attached somehow to the tree will be shown.

### Element view in dev tools

- This will come in particularly useful when the trainees are debugging the addition of elements which are invisible due to missing text content.

### Decomposition

- Guide the trainees in breaking down the task into smaller steps, including learning experiments not directly contributing to the final wanted HTML.
- With each subtask, prepare starting and target versions of HTML prototype codepen, and the starting version of the DOM tree diagram.

### Use ALL of the representations

- Get trainees to work through making the changes to the static HTML prototype (codepen) and then their DOM tree diagram, talking through the operations they need (creating an element, appending an element (where?)).
- get commitment to predictions at each point.
- Be wary of overwhelming the trainees with too many representations, but if they've met all of these individually with the exception of the DOM tree diagram, I have only seen struggling trainees embrace these different views and benefit from them. Certainly let them choose the ones that work best for them. Whatever helps them to reason about the task, their code, and the changes they need to make to it.
