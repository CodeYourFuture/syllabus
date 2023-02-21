---
id: lesson
title: Final Project - Week 1
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

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
- Exit criteria and tracking the trainees work

## Welcome

## 1. Getting Setup (15 minutes)

Once you have your team and your assignment, start by sorting out the basic administrative requirements.

### 1.1. Introductions

- Before we introduce ourselves let's introduce one of the tools we'll be using to collaborate during the project, [Miro](https://miro.com/). Whiteboards are a simple yet powerful tool software teams use to share ideas and solve problems - Miro is just a virtual version. It should be intuitive but if you want help there's lots of [content online](https://www.youtube.com/watch?v=pULLAEmhSho).

- Once you're familiar with the tool one person should make a copy of [this Miro board](https://miro.com/app/board/o9J_knoA0Ag=/) for your team to work on.

- OK, now we're set up let's get to know each other a little using **Exercise 1: Icebreaker** on your team's copy of the Miro board.

### 1.2. Give your team a name!

- Follow **Exercise 2: Finding a name** in Miro

- This will be your identity - use it in all communications/presentations.

### 1.3. Create a public Slack channel

- The name should start with your class name (e.g. #ldn6, #nw3, #wm1...)

- Invite all of your team members to it

### 1.4. Create a GitHub repository

- Pick one member to own the repo
- Everyone else should be invited as a [collaborator](https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository))
- You can fork [this starter kit](https://syllabus.codeyourfuture.io/finalproject/prep#starter-projects) for a basic project
  - Make sure you choose the correct one for the stack that you learnt

## 2. Agile Development (60 minutes)

### 2.1. What is Agile Development? (30-45 minutes)

_Facilitated by Tech Assistants_

Before we determine what we're going to build we should discuss how we're going to build it. The Tech Assistants will lead us through a discussion on Agile best practices using this deck - [What is Agile Development?](https://docs.google.com/presentation/d/1p9AV-pz_VpM0B9Lo6K6WUNANF1ycXgEPU4SbpgNzzSI/edit#slide=id.p)

### 2.2. What is a Product Manager? (25-30 minutes)

_Facilitated by Product Managers_

To work in an Agile way it's best to be part of a cross-functional team, so we've asked some Product Managers (PM) to join us for the final project. To introduce who they are and what their role is your PM will run through this [What is a Product Manager?](https://docs.google.com/presentation/d/1W8H8V0Fxor-XPcCY7kuXPCWbA9xTqS1vW1RMVCcCZRc/edit#slide=id.p) presentation.

_A note for PMs_ - don't forget to create your own copy of the presentation and update the 'Who am I?' section.

### 2.3. Project Management Boards (5 minutes)

_Led by trainees_

Project Management boards are a tool that you can use to help you organise how you work. There are many tools in the market, but we use Github Projects.

Create a copy of this Project Board to manage your work - [Project Board](https://github.com/orgs/CodeYourFuture/projects/13)

After you've copied it have a quick look through and ask questions about anything that's unfamiliar - your PMs and TAs will be able to explain concepts like Backlogs and User Stories. 

You will create your User Stories as [Issues on Github](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-repository) and add them to your project board on Github. [Link your repo](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board) to your project board so you can do this easily. 

Your contributions will be evaluated during Final Projects, so it's important you show your work.

### 2.4. Daily Stand-ups (5 minutes)

_Facilitated by Tech Assistants_

Every day you should post a message in the team's Slack channel to let the rest of the team know what you’re working on, what progress you’ve made (even, and perhaps _especially_, if it’s none so far) and share anything that’s blocking you.

Don't forget to also read your teammates updates. This way you can understand what is happening in the team and support each other.

Set a time for this and stick to it. Put it in your calendar.

Afterwards, post a team summary in the main class channel.

```txt
In your teams, you should decide the time you want to share your stand-up message and who is responsible for sharing them with the wider team.
```

### BREAK (10-15 minutes)

Go stretch your legs or grab a snack!

## 3. What are we going to build? (90 minutes)

You should be able to fill in the answers to this using **Exercise 3: Defining our product** in our Miro board

### 3.1. Framing the problem (20 minutes)

_Facilitated by Product Managers_

To figure out the right thing to build we should use our project brief to answer a few key questions, such as:

- What is the problem we're trying to solve?
- Who is our customer?
- What is the business value of solving this problem?
- What metrics could we use to measure if we've been successful?

### 3.2. Defining our solution (40 minutes)

_Facilitated by Product Managers_

Now we've got the problem framed we can spend some time thinking about specific solutions:

- What's our Lean Hypothesis?
- What is our ideal User Journey?
- What is our MVP (Minimum Viable Product)?
- What does the rest of our Roadmap look like?

### 3.3. Planning our work (30 minutes)

_Facilitated by Tech Assistants_

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

## 4. Sprint Planning (60 minutes)

_Facilitated by Product Managers_

In this project we will be working in `Sprints`. You can plan your first sprint using the your copy of the [Project Board](https://github.com/orgs/CodeYourFuture/projects/13)

A Sprint is a unit of time (normally a week or two weeks) where teams believe they can deliver by the end of the time given to them. For Final Projects you will be mostly working in one week Sprints.

:::tip
Work with your product manager to begin to split the work into tasks that each person in the team can work on. These tasks should be as small as possible.
:::

After you've completed the task you should decide what you’re each going to be doing during the following week and what you want to have completed.

Make sure that you assigned everybody tasks on your Project Management board.

# 5. Exit criteria and tracking the trainees work
It is important for the trainees and volunteers to have clarity about the [exit criteria for Final Projects](https://docs.google.com/document/d/1jMxqI0L7IKFENCQ8Lw-D1lhnj3c3RZI_WK808wG4YJM/edit#heading=h.8bipiccmzk3c).

One important metric highlighted on our Intro page is about the [trainee tracker](https://docs.google.com/spreadsheets/d/16vSSJgzCZJKF-2pwuBTkKjJJJ9i1CGRqMbYB-HEO5mo/edit?usp=sharing). A file for your cohort will be created, so ask the Programma Manager to share this with you. Make sure this has been updated correctly (read notes on the titles that will guide you to fill it in correctly).

We also ask trainees to send [this form](https://forms.gle/62tdzNE81FXp2jKc7) weekly so we can track what has been done. Every week a different trainee should submit this form with the correct information.

## 6. Prepare for next week

Next week you will be presenting what you've done this week to the whole class. This means you need to prepare a presentation - it is the responsibility of the team to get this done but your product manager may be able to help co-ordinate.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="Final Project" week="Week 1" />
