---
id: minutes
title: React Module Syllabus Team Minutes
sidebar_label: Team Minutes
---

## 2022-11-07

Present: Ali, Tom

## Agenda Items
- Ali leaving the React module team (@Ali)
  - Ali is planning to leave the React module syllabus team (as he originally planned), though will still be around in CYF to help
	- His role was to set up the team and get the ball rolling, which has been successful
	- All of the team are free to join the Global Syllabus team meeting
- Team time/task progress - something's not working (@Tom)
  - Not everyone in attendance at regular meetings, and often rescheduled
	- Few agenda points and not much work in progress on the board
	- This not a problem with the individuals in the team! It is a symptom of the team's setup
	- The Global Syllabus team generally has enough work on so that everyone has a task assigned, meaning there are always agenda point for the regular meeting
	- The React module is generally complete and only needs a few improvements, with no specific deadlines, so tickets are not always in progress
	- No specific feedback from module coordinators to update the module - does this mean the module is good, or is there just no feedback?
	- Even if there was enough work (i.e. feedback to re-write the whole module, which is unlikely), would it take 4 people more than 1 month?
	- Maybe the team needs restructuring & re-focussing. Current 'TODO' work could be completed in less than 1 month, will the team have no purpose after this?
- How can we get feedback for the module?
	- Cape Town towards end of module instruction, Birmingham and Manchester starting in November, London in March
  - A good opportunity to get feedback from module coordinators

### Action Items
- Ali: reach out/refer us to city coordinators who can tell us who the most recent module instructor was, to get feedback
- Ali: discuss with Global Syllabus team re above agenda items
- Tom: create ticket to update module coordinator page to 'keep notes on questions & feedback and submit tickets at end of teaching'

---

## 2022-10-17 - React Syllabus

Attendees:
- Ali
- Alex
- Zach
- Tom

### 3 => 4 Week
- Alex introduced the concept  of separating course into 4
- Presentational components -> state -> syncronosity ->  forms
- Old syllabus kind of covered this slightly better
- Forms were always 'tacked on' to cover for final projects as it always comes up with students.
- Data fetching used to be a lot simpler, edge cases are now a lot harder. Dependency array adds a lot of complexity.
- Ali has always had a bias to skip some of this complexity if it comes up, just focus on the empty dependency array.
- Beneficial to change it to a real API - Glitch app in the coursework that's a basic express server. Microserver somewhere on free infrastructure.
- Possible free access to some kind of server at some point, check with ops team.
- [React Assessment](https://github.com/CodeYourFuture/react-assessment) also available - Codewars not brilliant for React. (success is usually tied to engagement rather than the code quality on Codewars). Has a netlify functions app.
- South Africa has already gone through the three weeks, recapping the material is probably best for now.
- Ali needs to let Sally know we're slightly further ahead in SA than previously thought.
- Aim for a London release, so that Ali / Tom / Alex can be present and see how it's going.

###  Action Items
- Alex to set up a  drop in to start the work on coding the final form.
- Zach to grab feedback on the React module itself from SA students.
- Ali to figure out the next actual React cohort
- Have a gander through repos to ensure that they are using latest CRA.
- Ali to raise migrating away from CRA with the syllabus team.
- Keep meeting for regular time.

### Other business
-  Should we add subtasks to the 3 => 4 weeks ?
- We should think more about coursework, does it flow properly with the new week format?
- Look through additional material, should we write some more?
	- How can we help other teachers teach?
	- What questions are the students currently asking? Can we provide them with more information on this sort of thing? Maybe this would be more useful after the course and we don't need to worry too much.
		- Redux  good example of this, deliberately we have chosen to keep it as outside of the scope of the syllabus.
		- Can we use more React documentation as additional material as the quality increases over time?
- Can we get rid of `import React from "react";`?
	- Probably yes!
	- We may need to update the code sandboxes and  the coursework repo.
- Can we link out to a post on what bundling is? Probably not a priority for the lesson itself, might be useful to have.
	- Go to dev tools and see minified JavaScript and generated HTML?
	- Used to be on the course, but added a lot of complexity. Possibly beyond the 'minimum viable lesson'. Shorten the loop.
- Syllabus team looking into Front End specific course, job market implications though.

### Action Items from Last Time
- All to complete reading the syllabus and coursework
	- Tom has looked over it and has corrected typos
	- Alex to still look at the coursework
- Sharlu added ticket for testing ticket
- Internal push for more testing - open call for TDD
	-	Alex to join call on 1st of November

---

## 2022-09-12

Present: Ali, Alex, Tom, Sharlu

### Syllabus corrections

- Create a PR for any small typos/invalid link corrections, no need to create a ticket
- If links are invalid due to permission issues, reach out to Global Syllabus team for help
- For more 'controversial' tickets (e.g. #345), no need to wait to discuss in a meeting, create a PR and discuss async in comments

### Style Guides

- The syllabus contains some strong opinions around styling, would a specific style guide help to be clear around style?
  - A 'CYF [style guide](https://github.com/CodeYourFuture/syllabus/blob/master/docs/guides/code-style-guide.md) exists but is not React specific
  - Sticking to a strict style guide can be confusing; trainees will find 'unstyled' code online which can be confusing
  - Using Prettier in JS projects in a good standard

### Meeting the Global Syllabus team

- Ali suggested to meet the global syllabus team during one of the bi-weekly Thursday meetings to find out what they do and how they work

### Updating React module syllabus team meeting

- Time changed to 19:30 (GMT+1)

### Actions

- All: complete reading syllabus and coursework
- Tom: create PR to correct typos/dead links
- Sharlu: create ticket to add optional testing module (done: #478)
- Ali: ask Global Syllabus team about adding testing to other modules
- Ali: update meeting invite to new time (19:30)
- Alex: convert lessons into a single .md file to find 'splitting points'
- All: discuss sync/async suitable 'splitting points' in the 3 week course for updating to a 4 week course (#468)

---

## 2022-08-01

Present: Ali, Alex, Tom, Sharlu, Zach

### The board

- https://github.com/CodeYourFuture/syllabus/projects/10?fullscreen=true
- Use this to plan and track our work (kanban-style)
- Feel free to open tickets if there is work that you would like to do
- Monthly planning: move tickets to the Todo column if someone is going to pick up the ticket in the next month

### Expanding the Hotel coursework

- Problem
  - The Hotel homework only takes a hour or 2 a week to complete, it could be expanded to have some more exercises
  - Exercises cover most or all of the content covered in the lesson - but need more practice of those concepts
  - Strong trainees could do with some more stretch goals - those that challenge them to extend knowledge of the concepts
- We have a very good set of alternative "challenge" projects that are part of the coursework
  - However, these are (intentionally) not very "prescriptive", unlike the Hotel coursework
  - But would still like to keep because trainees gain experience of setting up different React projects, and different problems to solve

### Actions

- Everyone: get familiar with the React module in it's current state
- Tom: write up ticket for splitting content over 4 weeks
- Ali: write up ticket for expanding coursework
- Alex: write up ticket for improving teaching of the concept of state
