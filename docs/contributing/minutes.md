---
id: minutes
title: Team Minutes
sidebar_label: Team Minutes
---
## 17/03/2021

Attendance: Ali, Chris, Daniel, Greg, Matthew, Sally

## Agenda

-  Location for solutions to in-class exercises
-  new Choose Your Own Adventure exercise for JS3 W1
-  should we add a section about paths in JS? 
-  MongoDB

### Glasgow forking fundamentals

Chris: Following up on our Scotland meeting - we are forking the repo and we would like them to raise issues and get their improvements feeding back in. Hopefully I'll invite them to come to these things again to have more of those kind of discussion.
 
### Class exercises

Daniel: Antigone put together solutions for class exercises. How and where should we maintain these solutions? Chris suggests tabs. Sally suggests passwords.

#### Action items: 
- now: put the solutions in tabs
- future: produce a react component to lock the solutions in future and provide the password after the appropriate lesson

### CYA coursework

Ali: Everyone is happy. Ticket merged. Done!

### Terminal lesson and Cowsay
https://github.com/CodeYourFuture/syllabus/pull/189
https://github.com/CodeYourFuture/syllabus/pull/166#issuecomment-770410775
Discussion: Should we learn paths earlier on? They are not a react concept. If we teach it too early they won't retain it. We won't do paths earlier, but we will do them more in JS3. Possibly put cowsay into JS3 and require a bunch of stuff? 

Ali: I wonder if we could actually take pretty much that entire coursework and turn it into a lesson in the end of js3. Chris: This one I think we definitely need an issue for it and it is gonna be a slightly longer running piece of work.

#### Action items: 
- Write a paths cheat sheet, SOMEONE? Ali?
- Dropped thread: cowsay lesson/expansion - Sally will chase this up

### General discussion about iterating and increasing complexity in exercises. 

Would it be interesting or annoying to recap some of the exercises from js1? But with objects, eg the transport one, which is, how can you get with different means of Transport between two cities? Just give them exactly the same exercise, but put the data in objects?

#### Action item:
Repeat some exercises from week 1 but this time with objects instead of arrays. Sally to make issue.

#### Action items:
- Redo TV show project in React (with call back to earlier project)
- Chris to contact Neil Bogie

### MongoDB
https://github.com/CodeYourFuture/syllabus/discussions/192

* Glasgow school got on well with Postgres
* He proposes to write out a list of all the things he plans to do so it can be reviewed
* Hopes to have this ready in 3 months
* Discussion about mongoDB vs Postgres - 

#### Action item:
Chris to speak to London teachers and see what they want to teach this year PostGres/Mongo

### Assessments
https://github.com/CodeYourFuture/JavaScript-Core-2-Assessment/blob/main/scrabble.md

Snapshot assessment at JS2 proved very useful. Teachers want it for JS1 JS3, and React.
The marking guide is the key part needed here. 

Action items: 
- Daniel will work on JS3, Matthew will work on JS1. Two assessments of 15 mins each, with a rubric to guide marking.
- Ali wrote an assessment for React, an open book assesment. Find it, update it, and add it.

### Homework marking guide

We want to write marking guides for buddies. Each coursework should have one. It should cover: the object of the coursework, key points to look for, common mistakes, and how to respond.

#### Action items:
- Chris is working on this. 
- Sally will review student submissions and find more patterns.

## 17/02/2021

Attendance: Daniel, Chris, Sally, Matthew, Ali, Greg

### Welcome new members

- Matthew
- Sally

### Updating the intro to coding course (/application process) (Chris)

- No need to get involved, just being generally aware that this is happening.
- Feedback comes from recent graduates/joiners
- Tech side: easy for students to pass by just following steps (/googling freecodecamp tribute page)
- Soft skills side: intro to coding course should represent the soft skills, so that it's a good "sample" of what students can expect

- Improving the tech skills
  - raise the upper level of how well students can do, by making a "challenge" approach.
  
- Questions
  - Should actual coding be part of intro to coding?
  - Are the cutoffs during the acceptance process in line with what they've learned and with what we're able to assess? (end of js1)
  - Could having some sass add coding fundamentals/some other version of programmatic thinking?
  - Long term intention of the fundamentals course was not really to do what we're doing.
  
Action for Chris -> discussion of what is taught in fundamentals course (e.g sass)

### What kinds of tech interviews do our students end up doing and what skills should they be practiced in going in (Chris)

- Cap Gemini put a lot of soft skills to the front (even rejected some strong coders from Birmingham)
- Got feedback from Cap Gemini hiring manager:
	- students did worst at selling their technical skills
	- very good at talking about their own experiences
	- very good at self directed learning
	- enthusiastic about learning new things
	- students tend to pigeon hole themselves (e.g. backend vs frontend)
	- students don't have confidence that they could learn a new language/take their learning and re-produce it.
	
- Question: does the final project affect students confidence in a negative way that we might want to address?
	- Would it be a good time to invite recent graduates?
	- Yes, it's quite common for students to fill low in confidence
	- Lack of having things on github
	
Action for Chris -> speak to German about who we're designing the syllabus for (who are the hirers, what skills are they asking for)
Action for Chris -> chase up city coordinators to fill in the outcomes spreadsheet

### JS Core 2 exercises (Ali)

- Choose your own adventure
	- Goal: Getting students used to the existence of objects
	- Concern: it's a bit different from what we've done in the class?
	- Comment: a bit like an internal DSL
	
Action for Chris: Get a Gist from Ali and give it to some students.
	
- Suits of cards
	- More standard
	- Can we make it more difficult/complex (Ali: assertions become tricky)
	
### Git branch (Daniel)

- Seeking feedback
- Planning to record feedback?

- Git bracken?
- Git prettyfier? (could then use asciicinema)

### Sprint planning (Chris)

- Git ticket almost ready
- introducing funtions, ready for review
- js excercises 2

New tickets

- Encouraging live coding?
- Cowsay? Sally could pick up
- Git diagrams? Daniel
- How to ask a good question -> maybe good for Atanas

Action for Chris, approach people about pairing up with Greg to get started on Mongo

## 03/02/2021

Present: Chris, Ali, Daniel, Mitch, Greg

### Interview Prep Workshop

- Ali & Daniel got chatting on PR about interview prep
- What kind of companies are we targeting for trainees?
  - "Upper bound" of companies
  - Type of company
- There are several kinds of tech interview
- Do we prepare trainees for all types of interview?
- Discussion of specific example of `LazyFlatIterator`
  - Problem is very abstract, which we think would throw a lot of trainees
- Is it realistic to expect trainees to get jobs at FAANG/top companies?
  - We think the majority of student's wouldn't pass the interview
  - Self-fulfilling strategy - if we prepared trainees for this, would they get it?
- We could prepare for what kind of things a tech interview, but without looking at specific kinds of problems (e.g. computer science-y problems)
  - E.g. explain thinking out loud
  - Think about performance of solutions
- Potentially involve Anahita - London PD
  - Tech recruiter for Capgemini
  - Has expressed interest in developing content in this domain
- Daniel opened a [ticket to discuss a workshop](https://github.com/CodeYourFuture/syllabus/issues/175)
- Action points
  - Chris to speak to Capgemini
  - Chris to decide what types of companies we are aiming for
  - Syllabus team to read ticket & discuss

### When do we release solutions to coursework?

- London were releasing the week after
  - Concern is that they could put in minimal effort to solve, then get solution without putting work in
- Releasing answers helps buddies since the answers are available, but it also means enforcing putting in effort
- Trainee who is putting in effort, but sees answers then thinks that they understand it, but without actually
- Suggestion
  - Release by default
  - But if Edu Buddy notices that trainee is coasting, the it can be flagged to City Coordinator
  - Can then restrict that trainee from getting the answers (by not inviting them to the private answers repo)
- Action points
  - Chris to write this up as policy for Edu buddies

### Team changes

- Tim taking some time off (too much going on)
- Few new people joining in the next few weeks

### Git CLI/Terminal

- Terminal lesson went out to London students
  - 12 students completed. No problems, but they are likely best students, so waiting to see how it goes for other students
- Git
  - Daniel working on it, roughly ready to go
  - PRs incoming
  - Diagrams are still TODO

## 20/01/2021

Present: Chris, Bukola, Mitch, Ali, Daniel, Greg, Lucy

### HTML & CSS discussion - led by Lucy

- Atannas has raised several questions regarding the syllabus
- Syllabus doesn't currently start from scratch with HTML & CSS
- Always have disparate level of abilities and knowledge with any class

#### Week 1

- Lucy's learning objectives:
  - Week-1
  - Starts with a summary of the learning objectives
  - How to attach CSS to a HTML document
  - Discuss CSS specificity
  - Write simple HTML and CSS pairings
  - Discuss the box model in CSS
- Avoid git issues and sandboxes
- Lots of interactive exercises throughout the lesson
- For homework build a website using some Figma designs
- Students can find extension tasks at Frontend Mentor
- Currently still using the bikes for refugees project over the HTML and CSS section
- Lucy is using smaller layout exercises for this section
- Try and get students to fork and clone the homework before the end of the class

#### Week 2

- Week 2 deals with responsive design, media queries
- Homework for week 2 is to add a media query to existing Karma Project for a mobile design
- More sandbox activities for manipulating the UI with media queries
- Students given a wireframe for a cake website with a mobile view and a desktop view

#### Week 3

- Start with a lot of repetitive stuff in CSS
- Introduce the need for classes in order to reuse CSS rules
- Then introduce a CSS framework like Bootstrap - there to solve the problem of consistency
- Give students some understanding of columns
- Issues with Bootstrap:
  - Comes with clutter like utility CSS etc
  - Also comes with a lot of JS components
  - Can sometimes be a little chaotic
  - Sometimes distracted by Bootstrap features
- Lucy has made a separate CSS framework "Simple Grid" for Code Your Future - just for columns ( no JS components and grid etc )
- Downside is that Bootstrap has loads of documentation and examples online so maybe more difficult for students to figure stuff out
- Homework for week 3 used Wix templates in the past - needs to change for copyright reaons

- May need an additional 4th class
- Syllabus is opinionated - but with flexibility built into it so people can choose to teach something in particular should they choose to do so
- Potentially focus on Bootstrap but if you want to use "Simple Grid" then you can if you want
- Syllabus there to define which concepts need to be understood and which skills need to be acquired but not to prescribe the particular resources used to achieve the skills / resources

### Cloud development - led by Bukola

- Would like to introduce cloud development in the syllabus at some point
- Could introduce deployment / automation especially when students encounter Netlify and there is a need for deployment
- Github CLI is a good starting point for this
- Make use of Bukola's notes for this topic
- Good turn this into an optional workshop
- Cloud infrastructure is the number one skill employers are after
- We could also have a postgraduate module for teaching students stuff after the course ( post graduation )
- Could introduce bonus material from early on so that the students are primed for the introduction of cloud stuff later on
- Is there scope for something like Lambda functions around the time of React to bridge with NodeJS
- Netlify uses a CLI tool for deployment of cloud functions

### Further actions

- Setup a future discussion further down the line re cloud workshop / module
- Establish learning objectives for a cloud workshop / module
- Setup a cyf-syllabus-cloud channel

---

## 06/01/2021

**In Attendance:** Daniel, Chris, Greg, Tim, Mitch, Ali

### Personal Development Syllabus

- https://personaldevelopment.codeyourfuture.io/
- Technical Interview might be missing
  - Can this be rolled into the PD Syllabus?
- Could we add more time CV Workshops
- "Asking Good Questions" is a section that could be pulled out earlier and more in depth
  - Has been included in Day 3 so can be pushed more around
- We should be aiming to interleave the content between the two Syllabus'
- "Imposter Syndrome" could be covered
  - You're not **meant** to understand everything

Action: All Attendees - To review the content in more details

### UseContext Discussion

- Greg recently learnt React to help TA a class
  - He discovered UseContext that could be used in place of Redux
- Ali - We can use the "Extra Lessons" to contain this
- Ali - We've always **not** included it as part of the course as it isn't required for most of what the students are trying to do
- Could this be included into the Post Graduate section of the course?

Action: Greg to investigate how they could be implemented and included

### Instructional Design Class

- Greg used to work in this area and knows people who want "clients" to work with
- Might be able to help us craft a pedagogically good workshop or help with HTML/CSS Module

Action: Greg to refer them to me

### Round Table

- Chris to prepare a plan for a Round Table discussion with lots of different stack holders of the

Action: Chris to write up plan and poll for the best time for the Round Table

### Lucy and HTML/CSS

- Lucy Zidour is an experience CYF Teacher from London who has historically taught HTML/CSS
- She has good tested material that could do with being folded into the Syllabus
- Lucy will attend our next meeting to discuss

### Git & Terminal

- As part of a roll-out of a better way to teach Git we need to start thinking about how to teach further Git Theory and the Terminal in preparation for React
- We should start working on this soon

Action: Chris to prepare meeting on this for next week

## 09/12/2020

**In Attendance**: Chris Owen, Ali Smith, Mitchell Lloyd, Tim Hamrouge

### Functions

[Minutes from the call on 7th Dec](https://docs.google.com/document/d/19F9GAR09wP9CwomDp6Y4rYwfBMNnnZgrirHd-8k4uiM/edit#).

Chris overall happy with it. Flagged that the coursework needing to be checked that trainees don't see content out-of-order.

Also had discussion of timings of lesson 1. Concern about fitting in good naming content, but pointed out that this can be covered in variables section earlier. Assigned some rough timings for AM/PM content in week 1.

Next steps:

- Suggested that start learning objectives first
- Then write exercises that fulfill the LOs
- And then fill out content

### Code style guide

Ali has started writing it up, but not lots of progress yet.

### JS Core 2 Exercises

Tim demoed some of the exercises so far. Progress looks good.

### Typing tips/test for Intro to Coding

Ali wrote up a [quick guide](https://github.com/CodeYourFuture/Intro-To-Coding-Course/pull/2), but wasn't sure what to do with it. Decided to write up a ticket for the board for Syllabus Team to discuss how to integrate into ItC.

## 25/11/2020

**In Attendance**: Ali Smith, Chris Owen, Daniel Wagner-Hall, Greg Dyke, Tim Hamrouge

### Style guide

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

### How we teach functions

No one seems to teach functions well.

Coding Train does a good job because he makes a distinction between functions that do things, and functions that return data, but we can't use it directly because it uses p5.js which is very specific. Covering functions which both return things and have side-effects is maybe important too.

Everyone treats "and you can store the result in a variable" as obvious. Haven't really seen how to teach "some returned value are ignored" much either.

How/when do we teach expressions? Week 2 of JS1 (functions are Week 1 of JS) - students have typically struggled with this.

Learners often struggle with map vs forEach. We struggled when we moved away from `for` loops, have moved a bit closer to `for` to help the learners understand the basics, but still need to cover `map` et al by the time we get to React.

Our examples aren't places where functions aren't actually useful (e.g. a `sum` function) - hopefully we can reframe into something more realistic as a motivating example.

Mitch is probably going to be away for a bit, so Chris will take it over and start gathering opinions this sprint.

### This sprint

#### [SQL](https://github.com/CodeYourFuture/syllabus/pull/139)

Pretty much everyone except London teaches MongoDB. Glasgow and Manchester have some SQL experts, and Birmingham fell through some cracks of undocumented prep work from having not run the course before.

Why does ~everyone teach SQL except London?

> Partially because of domain knowledge in the particular cities.
> Partially lack of clarity around what's more valuable to focus on.

Birmingham want to move from Postgres to MySQL. We should work out what to support...
We should find out why Birmingham want to switch. It may be because they had a bad experience from the first class, but we should find out for sure.
Maybe we could just have them connect to pre-running SQL servers, and not need to worry about which flavour of SQL they're using.
For Mongo, we don't have them run anything locally, just use a hosted MongoDB.

#### [JS2-2 coursework](https://github.com/CodeYourFuture/syllabus/issues/120)

When we introduce the DOM, there's not much homework. Could do with someone reading over it and evaluate whether the coursework meets the learning objectives. The jump after this week is to a big project.

Tim will pick up.

### AOB

Chris is taking most of December off (enjoy!). Will still check in to the meeting on December 9th, but won't be picking up work.

We should do an idea generation session, with many attendees, to work out what else folks would like the syllabus team to prioritise, to fill in a backlog.

---

## 28/10/2020

**In Attendance**: Ali Smith, Chris Owen, Daniel Wagner-Hall, Tim Hamrouge, Carlos from Migracode

### CARLOS FROM MIGRACODE

Welcome to Carlos from Migracode who use our syllabus for their course in Spain.

- Carlos answered questions and gave some insight into Migracode.
  - Migracode have been around for 1 year. They were using our syllabus from then to teach with until April when Carlos started updating their syllabus with our new content.
  - Migracode began with one class, then another two in March and started three more in July. The classes consist of ~12 people.
  - The feedback from Spain is that our syllabus is great because of how up to date it is - particularly the content on React hooks.
  - They have split their classes out into smaller groups to enable them to give students more attention. They also have 1 Spanish class and 1 English class because a lot fo their students are from South America, but they do not translate the syllabus, the teacher does that while teaching.
  - They offer free English lessons to students. They are able to do this by using trainee teachers who can use the teaching time as credit for their courses.

### GIT LESSON

- Chris thanked all those who had worked on the content for the Git lesson.
  - Chris introduced the lesson content to the Birmingham team and it was well received, the lesson will be run by them for the first time on 31/10/20.

### AOB

- Chris needs some eyes on some PRs. Tim said he would take a look.
- Ali asked for some resources on 'How to ask good questions' and 'How to give good answers'. Ali will write a ticket for this.

---

## 14/10/2020

**In Attendance**: Ali Smith, Chris Owen, Greg Dyke, Daniel Wagner-Hall, Tim Hamrouge, Neill Bogie, Mike Hayden,

### GIT & COMMAND LINE V. GITHUB DESKTOP

Discussion around wether to teach GIT & COMMAND LINE (G&CL) or GITHUB DESKTOP (GHD)

- No final decision was made in the meeting about which technology should be taught.
  - It was agreed that in order to teach anything with Git comprehensively, more teachning time would be needed. Chris said that the 2 hours used to teach the topic could be spread out to 4.
  - There much discussion about multiple lessons on Git, in order to reduce the cognitive load and increase familiarity for stuents. Chris said that while additional lessons cannot be added, additional reources (as homework etc.) can be included.
  - Daniel and Ali agreed to work on the Git lesson plan for 31/10/2020.

### STUDENT FEEDBACK FORM

- Chris has created a Pull Request for a new feedback form to give to students at the end of lessons.
  - There was consensus that the form was a good idea, and would be added to the syllabus. It is a substantial change because it will affect all lessons.
  - Ali suggested an additional 'Anything Else?' field to capture intangible feedback, Chris Agreed.
  - Neill pointed out it must be made clear to students who can see their answers and how they will be used, all agreed.
- ACTION: Chris to check form feedback in 1 month.

---
