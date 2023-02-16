---
id: session
title: Iteration
sidebar_label: Session
---

import Feedback from "@theme/Feedback";

Welcome to week two! In week two we will explore iteration. Iteration means to repeat. Developers do many small iterations to build software, each time adding or changing some small thing. This is why your phone is always updating: each new version is an iteration. If developers waited until software was perfectly ‘finished’, it would never be delivered.

#### &rarr; [Learning objectives](./learning-objectives.md)

## Blockers! (60 minutes)

[Online Version of this game](https://www.dr-mikes-math-games-for-kids.com/online-traffic-jam-game.html)

#### **Objectives**

- Share your screen
- Identify the blocker
- Use driver and navigator pattern
- Break down a problem into steps
- Negotiate a strategy with your team
- Follow directions

### Gameplay

:::note Exercise (30 minutes)
In groups or breakout rooms of 4 trainees maximum.

One person will share their screen and be the **driver**. The driver can only move the pieces where you are told by the navigators. The driver cannot make any decisions!

The others will be the **navigators**. Together, the navigators must figure out a strategy to unblock the car, and tell the driver how to do it!
:::

**Each person must drive,** so set a timer for [**5 minutes per round**](https://www.google.com/search?q=set+a+timer+for+5+minutes) and then swap.

:::tip
Mentors can only be passengers: no driving or navigating. Mentors may ask questions but not answer them. Mentors will make sure the driver and navigators are following their roles correctly.
:::

### Reflection

Back in the main room.

:::note Exercise (20 minutes)
What did people think about this game? Let’s go around and each group share **one thing** they noticed about it.
:::

## Sharing Our Blockers (45 minutes)

We call problems that stop our progress "blockers". We talk through our blockers regularly and help each other get "unblocked" or "unstuck".

:::note Exercise: 5 mins

Join the Jam board and add your blockers. Make sure to add only _one_ blocker per note.
:::

## MVP

### Recap - user stories

Last time we discussed **user stories**. Can you remember the structure of a typical user story?

:::tip User Story

As a _[who]_, I can _[what]_ so that _[why]_
:::

:::note Exercise: Favourite App (10 minutes)

Split into groups and think about one of your favourite phone apps. Agree on one you all know. Come up with as many user stories as you can for it. You must come up with at least 10, but try for more. Set a timer for 10 minutes and write them on a new [Jamboard](https://jamboard.google.com/)
:::

### Defining the Minimum Viable Product

Come back into the main room, now we have a long list of user stories, how do we decide what to do first? Where do we start? As always with software development, we start with the simplest thing possible. Let’s define the **MVP**.

What's the _minimum_ set of user stories we could implement for this product to be useful? Another way to say this is: **"What is the minimum viable product?**

:::note Exercise: Prioritise! (10m)

1. Swap your [Jamboard](https://jamboard.google.com/) with another group.
2. Now go back into breakout rooms, with another group’s Jamboard of user stories
3. Set a timer for 10 minutes
4. Choose the stories that make up the MVP for that app
5. Are there any missing? Note them down

:::

Now come back into the main room.

## Partners

:::info Meet Capgemini (60m)
In regions with a partnership, our partners will drop in and spend an hour with you.
:::

---

## Iterating

### Pairing

It's good to code with a friend. You learn SO much. Programmers call this pair programming and many professional teams program in pairs for a part of each day. Mentors will demonstrate pairing now.

:::note Exercise: Pairing

In pairs, iteratively develop a solution to the CYF Blocks problem you are given.

- Switch between driver and navigator roles every 10 minutes
- The "driver" is the person typing on the keyboard, just thinking about what needs to be written
- The "navigator" reviews what the driver is doing and is thinking about to write next
- Don't dominate - this is teamwork

:::

### CYF Blocks

Now we have started to think about the idea of MVP, how can we use this to help us build _working_ software?

:::tip
It's important that software _works_ and that we can _use_ it!
:::

In software development, we start with the smallest, simplest thing we can build _that works_. Then we _incrementally_ improve it. This is **iteration**.

You all built a personal home page in Intro to Digital, and last week you shipped it. Now let's iterate on your websites.

:::note Exercise: Point (10m)

In pairs, define some user stories for your own websites, to improve it. These should be:

- a small change
- that is achievable with the CYF Blocks seen in the course so far
- but a complete feature
- try for at least one feature that updates or changes the page when an action is taken

:::

:::tip Read ahead
Read ahead to Ship It to see where to paste your code.
:::

:::note Exercise: Click! (25m)
In the same pairs, try to implement one user story. While implementing, try to break down into steps where you can visually check that your code runs as expected.
:::

---

## PD (feedback)

::: Giving and receiving feedback 

**Session objective:** Transparency is the key to success. An important  part of being a successful developer is the ability to give and receive feedback. In order to start that process, you must be able to showcase your work in progress. Now that you have had a chance to try some coding, it’s time to be transparent and talk about it.

:::note

Exercise (20 minutes per person)

**Exercise objective:** To talk about challenges, ask and give feedback.

Find a partner. In pairs take turns to discuss the questions below. Talk through your fears, get feedback, and work together to find solutions to some of the challenges you face. Each person has to give one piece of advice to support their fellow team member:

- When it comes to showing your work in progress, what are your three biggest fears?
- How will you overcome these fears?
- When it comes to showing your work in progress, what’s the absolute worst thing that can happen?
- What is the best thing that can happen?
- When it comes to the working world, what do you need from your teammates?
- How will you support your teammates?
- What’s a better outcome, making a mistake and learning something new or never making mistakes and never learning at all?

After 20 min, it’s time to swap.

:::

::: note

Exercise (10 minutes)

**Exercise objective:** To practice public speaking skills

Volunteer to share your challenges to the class and ask for feedback.

:::

## Ship It

It's important to ship your work, so let's ship the new version of our websites. In ITD, you wrote code in [Codepen](https://codepen.io/), an online Integrated Development Environment (IDE). Now you will use [Visual Studio Code](https://code.visualstudio.com/) (VSCode), a professional IDE you will use at work.

You’ll export your page to a folder on your computer, edit it in your IDE, upload the folder to Github, and deploy it to Netlify.

### You will need

- Your landing page on Codepen
- The VSCode IDE
- An account with Github and to be logged in
- An account with Netlify, and to be logged in

:::note Exercise

Export your page to a folder on your computer, edit it in your IDE, upload the folder to Github, and deploy it to Netlify.

There is a step by step to help you if you need it.
:::

### Step by step

- Find your landing page on Codepen and click **Export > Export as zip**
- Find your zip on your hard drive and unzip it
- Open VSCode
- In VSCode, choose **File > Open Folder** and choose your unzipped folder
- Now your IDE shows your code just like Codepen did. Your work is in the /src folder. Take a look. You can also view the rendered view right in your browser. Take a look!
- Copy and paste the static html from CYF Blocks to your existing project in VSCode. Paste the html into the index.html file.
- Copy and paste the generated JavaScript from CYF Blocks to the script.js file in your VSCode project.
- Test the results in your browser. Try adding Live Server to speed up your workflow
- Ship it to Netlify. See last week's Ship It for how to do this.

## Retro

We will do a 15 minute retro together.

## Coursework

Find the coursework for this week on the [coursework](./coursework) page.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="Fundamentals" week="Week 2" />
