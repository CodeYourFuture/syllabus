---
id: lesson
title: Final Project - Week 1
sidebar_label: Lesson
---

## Overview

- Welcome
- Getting Setup
- Agile Development
  - What is Agile Development?
  - What is a Product Manager?
  - Daily Stand-ups
  - Sprints
  - Mid-week Check-ins
- What are we going to build?
- Sprint Planning

## Welcome

## Getting Setup (15 minutes)

Once you have your team and your assignment, start by sorting out the basic administrative requirements.

### 1. Introductions
   - Before we introduce ourselves let's introduce one of the tools we'll be using to collaborate during the project, [Miro](https://miro.com/). Whiteboards are a simple yet powerful tool software teams use to share ideas and solve problems - Miro is just a virtual version. It should be intuitive but if you want help there's lots of [content online](https://www.youtube.com/watch?v=pULLAEmhSho).
   
   - Once you're familiar with the tool one person should make a copy of [this Miro board](https://miro.com/app/board/o9J_knoA0Ag=/) for your team to work on. 
   
   - OK, now we're setup with let's get to know each other a little using **Exercise 1: Icebreaker** on your team's copy of the Miro board.


### 2. Give your team a name!
   - Follow **Exercise 2: Finding a name** in Miro
   
   - This will be your identity - use it in all communications/presentations.

### 3. Create a public Slack channel
   - The name should start with your class name (e.g. #ldn6, #nw3, #wm1...)
   
   - Invite all of your team members to it


### 4. Create a GitHub repository
   - Pick one member to own the repo,
   
   - Everyone else should be invited as a [collaborator](https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository))
   
   - You can fork [this starter kit](https://github.com/CodeYourFuture/cyf-final-project-starter-kit) for a basic React/Express/MongoDB app



## Agile Development (60 minutes)


### What is Agile Development? (30-45 minutes)

TO DO 

### What is a Product Manager? (25-30 minutes)
To work in an Agile way it's best to be part of a cross-functional team, so we've asked some Product Managers (PM) to join us for the final project. To introduce who they are and what their role is your PM will run through this [What is a Product Manager?](https://docs.google.com/presentation/d/1W8H8V0Fxor-XPcCY7kuXPCWbA9xTqS1vW1RMVCcCZRc/edit#slide=id.p) presentation. 

  *A note for PMs* - don't forget to create your own copy of the presentation and update the 'Who am I?' section.

### Project Management Boards (5 minutes)
Project Management boards are a tool that you can use to help you organise how you work.

```txt
Create a [project board](https://help.github.com/en/articles/about-project-boards) in the repo for your tasks and stories
```


### Daily Stand-ups (5 minutes)
Every day you should post a message in the team's Slack channel to let the rest of the team know what you’re working on, what progress you’ve made (even, and perhaps _especially_, if it’s none so far) and share anything that’s blocking you.

Set a time for this and stick to it.

Afterwards, post a team summary in the main class channel.

```txt
In your teams, you should decide the time you want to share your stand-up message and who is responsible for sharing them with the wider team.
```

### BREAK (10-15 minutes) 
Go stretch your legs or grab a snack!


## What are we going to build?  (90 minutes)
You should be able to fill in the answers to this using **Exercise 3: Defining our product** in our Miro board 

### 1. Framing the problem (20 minutes)
To figure out the right thing to build we should use our project brief to answer a few key questions, such as:

- What is the problem we're trying to solve?
- Who is our customer?
- What is the business value of solving this problem?
- What metrics could we use to measure if we've been successful?

### Defining our solution (40 minutes)
Now we've got the problem framed we can spend some time thinking about specific solutions:

- What's our Lean Hypothesis?
- What is our ideal User Journey?
- What is our MVP (Minimum Viable Product)?
- What does the rest of our Roadmap look like?

### Planning our work (30 minutes)
When our solution is clear we can dig into some implementation details:

- What information will they need to have and/or provide to do that?
  - This will allow you to figure what pages you could have and which endpoints you'll need to use.
- What entities/resources/data are we going to have in the system?
- What information do we need to store to achieve the goals?
  - This will allow you to figure out what collections you’ll likely have in the database.
- What are we going to need to expose to the React app?
  - Where is that the same as the above (i.e. you’re just going to have an endpoint for a resource) and where might it be different (i.e. there will be some kind of calculation or aggregation between the database and the frontend)? This will allow you to figure out what the REST API is going to look like.
- What might these pages look like?
  - Sketch them out (either draw on paper and upload a photo or use lines and boxes on Miro)
    - We **don’t** want to spend too much time doing very detailed layout
  - How could we decompose them into separate [components](/react/week-1/lesson) to work on?

This will give you an idea of what work needs to get done during the week, which you can then assign to members of your team.

Make sure you identify the "edges" between different tasks (e.g. you have to agree on an API so that the backend and frontend match up, or on the props passed between a parent component and a child component) so that you know who has to collaborate with whom to make sure it all fits together, and will be able to identify the impacts of one part getting blocked.

```txt
At the end of this exercise you should add all the answers to the Miro and share with the rest of the class.

If you haven't finished, make sure that you finish these by the end of the week.
```


### BREAK (10-15 minutes) 
Go stretch your legs or grab a snack!


## Sprint Planning (60 minutes)

In this project we will be working in `Sprints`.

A Sprint is a unit of time (normally a week or two weeks) where teams believe they can deliver by the end of the time given to them.

```txt
Work with your product manager to begin to split the work into tasks that each person in the team can work on. These tasks should be as small as possible.
```

After you've completed the task you should decide what you’re each going to be doing during the following week and what you want to have completed.

Make sure that you assigned everybody tasks on your Project Management board.

## Prepare for next week

Next week you will be presenting what you've done this week to the whole class. This means you need to prepare a presentation - it is the responsibility of the team to get this done but your product manager may be able to help co-ordinate.
