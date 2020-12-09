---
id: minutes
title: Team Minutes
sidebar_label: Team Minutes
---

### 14/10/2020

#### In Attendance: Ali Smith, Chris Owen, Greg Dyke, Daniel Wagner-Hall, Tim Hamrouge, Neill Bogie, Mike Hayden, 

##### GIT & COMMAND LINE V. GITHUB DESKTOP

Discussion around wether to teach GIT & COMMAND LINE (G&CL) or GITHUB DESKTOP (GHD)

- No final decision was made in the meeting about which technology should be taught. 
    - It was agreed that in order to teach anything with Git comprehensively, more teachning time would be needed. Chris said that the 2 hours used to teach the topic could be spread out to 4. 
    - There much discussion about multiple lessons on Git, in order to reduce the cognitive load and increase familiarity for stuents. Chris said that while additional lessons cannot be added, additional reources (as homework etc.) can be included. 
    - Daniel and Ali agreed to work on the Git lesson plan for 31/10/2020.

##### STUDENT FEEDBACK FORM

- Chris has created a Pull Request for a new feedback form to give to students at the end of lessons. 
    - There was consensus that the form was a good idea, and would be added to the syllabus. It is a substantial change because it will affect all lessons. 
    - Ali suggested an additional 'Anything Else?' field to capture intangible feedback, Chris Agreed.
    - Neill pointed out it must be made clear to students who can see their answers and how they will be used, all agreed. 
- ACTION: Chris to check form feedback in 1 month.

---

### 28/10/2020

#### In Attendance: Ali Smith, Chris Owen, Daniel Wagner-Hall, Tim Hamrouge, Carlos from Migracode

##### CARLOS FROM MIGRACODE

Welcome to Carlos from Migracode who use our syllabus for their course in Spain.

- Carlos answered questions and gave some insight into Migracode.
  - Migracode have been around for 1 year. They were using our syllabus from then to teach with until April when Carlos started updating their syllabus with our new content.
  - Migracode began with one class, then another two in March and started three more in July. The classes consist of ~12 people.
  - The feedback from Spain is that our syllabus is great because of how up to date it is - particularly the content on React hooks. 
  - They have split their classes out into smaller groups to enable them to give students more attention. They also have 1 Spanish class and 1 English class because a lot fo their students are from South America, but they do not translate the syllabus, the teacher does that while teaching. 
  - They offer free English lessons to students. They are able to do this by using trainee teachers who can use the teaching time as credit for their courses. 

##### GIT LESSON

- Chris thanked all those who had worked on the content for the Git lesson.
  - Chris introduced the lesson content to the Birmingham team and it was well received, the lesson will be run by them for the first time on 31/10/20.

##### AOB

- Chris needs some eyes on some PRs. Tim said he would take a look.
- Ali asked for some resources on 'How to ask good questions' and 'How to give good answers'. Ali will write a ticket for this.

---

### 25/11/2020

#### In Attendance: Ali Smith, Chris Owen, Daniel Wagner-Hall, Greg Dyke, Tim Hamrouge

##### Membership
Atenas will be joining in ~4 weeks after final projects finish in Birmingham.

##### Style guide

Discussing https://github.com/CodeYourFuture/syllabus/issues/105#issuecomment-731769854

General consensus supporting Ali's comment.
Important that learners understand the why (e.g. around indentation and naming), and in what Prettier does (particular that Prettier will reformat things to avoid surprising changes), less important to understand things like "how many spaces are correct".
We should make sure TAs (particularly when marking homework) know what to expect, and what things are worth highlighting in review.
We should also consider what things we encourage all volunteers (particularly teachers & TAs) to do, e.g. should we try to get people to always add semicolons after statements?
We should make sure to proactively re-format homework before setting it, so that they don't submit huge whitespace diffs.

For React and beyond: Rely on default ESLint that comes from create-react-app.

We've had incidents in the Backend/Mongo course where client-side and server-side code were using different formatters with different spaces, which caused some issues. We should unify where they conflict.

Best practices docs: We should have some. Should probably set reading these as homework, rather than in-course, and will also be useful to be able to link to from PRs.

Try to avoid per-module advice in this doc - we should create per-module cheatsheets/similar where they're needed, but don't want to glom it all into one doc. These could also be useful to get teachers for later modules familiar with conventions that were taught in earlier modules (e.g. how much do we care about `==` vs `===` of `if (blah)` vs `if (blah === undefined)`).

Can easily get ESLint installed into VS Code, but ESLint rules are harder because they're generally installed as npm packages. Could maybe bundle them in our own extension if we wanted. .eslint files in the CYF-Coursework-Template could fill this niche.

Ali will move forwards.

##### How we teach functions

No one seems to teach functions well.

Coding Train does a good job because he makes a distinction between functions that do things, and functions that return data, but we can't use it directly because it uses p5.js which is very specific. Covering functions which both return things and have side-effects is maybe important too.

Everyone treats "and you can store the result in a variable" as obvious. Haven't really seen how to teach "some returned value are ignored" much either.

How/when do we teach expressions? Week 2 of JS1 (functions are Week 1 of JS) - students have typically struggled with this.

Learners often struggle with map vs forEach. We struggled when we moved away from `for` loops, have moved a bit closer to `for` to help the learners understand the basics, but still need to cover `map` et al by the time we get to React.

Our examples aren't places where functions aren't actually useful (e.g. a `sum` function) - hopefully we can reframe into something more realistic as a motivating example.

Mitch is probably going to be away for a bit, so Chris will take it over and start gathering opinions this sprint.

##### This sprint

###### [SQL](https://github.com/CodeYourFuture/syllabus/pull/139)
Pretty much everyone except London teaches MongoDB. Glasgow and Manchester have some SQL experts, and Birmingham fell through some cracks of undocumented prep work from having not run the course before.

Why does ~everyone teach SQL except London?
> Partially because of domain knowledge in the particular cities.
> Partially lack of clarity around what's more valuable to focus on.

Birmingham want to move from Postgres to MySQL. We should work out what to support...
We should find out why Birmingham want to switch. It may be because they had a bad experience from the first class, but we should find out for sure. 
Maybe we could just have them connect to pre-running SQL servers, and not need to worry about which flavour of SQL they're using.
For Mongo, we don't have them run anything locally, just use a hosted MongoDB.

###### [JS2-2 coursework](https://github.com/CodeYourFuture/syllabus/issues/120)

When we introduce the DOM, there's not much homework. Could do with someone reading over it and evaluate whether the coursework meets the learning objectives. The jump after this week is to a big project.

Tim will pick up.

##### AOB

Chris is taking most of December off (enjoy!). Will still check in to the meeting on December 9th, but won't be picking up work.

We should do an idea generation session, with many attendees, to work out what else folks would like the syllabus team to prioritise, to fill in a backlog.

---

### 09/12/2020

#### In Attendance: Chris Owen, Ali Smith, Mitchell Lloyd, Tim Hamrouge

##### Functions

[Minutes from the call on 7th Dec](https://docs.google.com/document/d/19F9GAR09wP9CwomDp6Y4rYwfBMNnnZgrirHd-8k4uiM/edit#).

Chris overall happy with it. Flagged that the coursework needing to be checked that trainees don't see content out-of-order.

Also had discussion of timings of lesson 1. Concern about fitting in good naming content, but pointed out that this can be covered in variables section earlier. Assigned some rough timings for AM/PM content in week 1.

Next steps:

- Suggested that start learning objectives first
- Then write exercises that fulfill the LOs
- And then fill out content

##### Code style guide

Ali has started writing it up, but not lots of progress yet.

##### JS Core 2 Exercises

Tim demoed some of the exercises so far. Progress looks good.

##### Typing tips/test for Intro to Coding

Ali wrote up a [quick guide](https://github.com/CodeYourFuture/Intro-To-Coding-Course/pull/2), but wasn't sure what to do with it. Decided to write up a ticket for the board for Syllabus Team to discuss how to integrate into ItC.
