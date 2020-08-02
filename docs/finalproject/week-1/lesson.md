---
id: lesson
title: Final Project - Week 1
sidebar_label: Lesson
---

## Overview

- Welcome
- Getting Setup
- Agile Development
  - Daily Stand-ups
  - Sprints
  - Mid-week Check-ins
- Minimum Viable Product

## Welcome

## Getting Setup (15 minutes)

Once you have your team and your assignment, start by sorting out the basic administrative requirements.

```txt
1. Give your team a name!
   - This will be your identity
   - Use it in all communications/presentations.
```

```txt
2. Create a public Slack channel
   - The name should start with your class name (e.g. #ldn6, #nw3, #wm1...)
   - Invite all of your team members to it
```

```txt
3. Create a GitHub repository
   - Pick one member to own the repo,
   - Everyone else should be invited as a [collaborator](https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository))
   - You can fork [this starter kit](https://github.com/CodeYourFuture/cyf-final-project-starter-kit) for a basic React/Express/MongoDB app
```

## Agile Development (60 minutes)

### Project Management Boards (5 minutes)

Project Management boards are a tool that you can use to help you organise how you work.

```txt
Create a [project board](https://help.github.com/en/articles/about-project-boards) in the repo for your tasks and stories
```

### Daily Stand-ups

Every day you should post a message in the team's Slack channel to let the rest of the team know what you’re working on, what progress you’ve made (even, and perhaps _especially_, if it’s none so far) and share anything that’s blocking you.

Set a time for this and stick to it.

Afterwards, post a team summary in the main class channel.

```txt
In your teams, you should decide the time you want to share your stand-up message and who is responsible for sharing them with the wider team.
```

### Minimum Viable Product (60 minutes)

Then we can do some high-level design. You should be able to answer all of these questions by the end of this exercise.

- What’s the minimal viable product (MVP)
  - i.e. the simplest possible thing we could build that lets us make some progress towards the business goals?
- What tasks will users be carrying out?
- What information will they need to have and/or provide to do that?
  - This will allow you to figure what pages you could have and which endpoints you'll need to use.
- What entities/resources/data are we going to have in the system?
- What information do we need to store to achieve the goals?
  - This will allow you to figure out what collections you’ll likely have in the database.
- What are we going to need to expose to the React app?
  - Where is that the same as the above (i.e. you’re just going to have an endpoint for a resource) and where might it be different (i.e. there will be some kind of calculation or aggregation between the database and the frontend)? This will allow you to figure out what the REST API is going to look like.
- What might these pages look like?
  - Sketch them out with a marker pen
    - We **don’t** want to spend too much time doing very detailed layout
  - How could we decompose them into separate [components](/react/week-1/lesson) to work on?

This will give you an idea of what work needs to get done during the week, which you can then assign to members of your team.

Make sure you identify the "edges" between different tasks (e.g. you have to agree on an API so that the backend and frontend match up, or on the props passed between a parent component and a child component) so that you know who has to collaborate with whom to make sure it all fits together, and will be able to identify the impacts of one part getting blocked.

```txt
At the end of this exercise you should add all the answers to a Google Doc and share with the rest of the class.

If you haven't finished, make sure that you finish these by the end of the week.
```

### Sprint Planning (60 minutes)

In this project we will be working in `Sprints`.

A Sprint is a unit of time (normally a week or two weeks) where teams believe they can deliver by the end of the time given to them.

```txt
Work with your product manager to begin to split the work into tasks that each person in the team can work on. These tasks should be as small as possible.
```

After you've completed the task you should decide what you’re each going to be doing during the following week and what you want to have completed.

Make sure that you assigned everybody tasks on your Project Management board.

## Prepare for next week

Next week you will be presenting what you've done this week to the whole class. This means you need to prepare a presentation - it is the responsibility of the Product Manager to coordinate this.
