---
id: session
title: Requirements
sidebar_label: Session
---

import Feedback from "@theme/Feedback";

Welcome to Fundamentals! In this course we will explore the fundamentals of software development by going through this cycle: Requirements, Iteration, Delivery. Each day we will go through each stage and each week we will explore a stage in depth.

**Requirements** - in week one we will explore requirements. What are requirements, and how do we use the idea of requirements to help us develop complex systems in small, approachable steps? We’ll find out today.

**Iteration** - in week two we will explore iteration. Iteration means to repeat. Developers do many small iterations to build software, each time adding or changing some small thing. This is why your phone is always updating: each new version is an iteration. If developers waited until software was perfectly ‘finished’, it would never be delivered.

**Delivery** - in week three we will explore delivery. Delivery is the catch-all term for shipping your code, or putting it in online, in a public place where real people can use it. This ability is key to being a successful professional developer.

#### &rarr; [Learning objectives](./learning-objectives.md) | &rarr; [Course Goals](../index.md)

---

## Welcome

### Trainee Agreement, Code of Conduct & House Rules

While you're at Code Your Future, we expect you to follow some rules. This is so that everyone has a fun, productive and enjoyable experience.

You have read through the [Trainee Agreement](https://docs.codeyourfuture.io/organisation/agreements-and-rules/student-agreement), [Code of Conduct](https://codeyourfuture.github.io/syllabus-master/CODE_OF_CONDUCT.html) and [House Rules](https://codeyourfuture.github.io/syllabus-master/others/house-rules.html) before coming to class.

---

#### &rarr; [Learning objectives](./learning-objectives.md)

## Slack (15mn)

You should have installed Slack on your computer and phone during your class preparation.

Post 5 interesting things about yourself in a thread.

---

## PD (introspection)

**Session objective:** Professional Development starts here. Today is the very beginning of your career journey, and it starts by thinking about your personal and professional development.

:::note Exercise (30 minutes)

**Exercise objective:** To identify goals and motivations.

In small groups, introduce yourself. Identify a speaker for your group. Answer the following questions in turns:

- Why did you apply to CYF?
- What is one goal you have achieved in your life?
- What is your career goal?

The speaker presents the group's ideas to the class.

:::

:::note Exercise (30 minutes)

**Exercise objective:** To discuss specific actions and commitments.

In small groups, identify a speaker for your group. Discuss why you want a job in tech; Name three actions you will take to commit to your journey into your new career. Consider following questions:

- Will you keep up-to-date with job opportunities by researching roles
- Will you build side projects to make yourself stand out?
- Will you commit to CYF?

The speaker presents the group's three specific actions to the class.

:::

## Code.org

Code.org is a block based programming tool. We will use something similar to build our course project. Let's look at Code.org together now and work through the first two exercises. A mentor will share their screen.

:::note Exercise (20 minutes)
Go to [Course Three, Lesson 2: The Maze](https://studio.code.org/s/course3/lessons/2/levels/1)

1. Look at the interface together
2. Everybody open the interface on their own computer as well
3. Complete the first exercise
4. Complete the second exercise

:::

## Iteration: CYF Blocks

For the majority of this course, we will use a custom CYF application called [CYF Blocks](https://blocks.codeyourfuture.io/). It uses the same visual programming editor, [Block.ly](https://developers.google.com/blockly/reference/overview), as Code.org, but you will use it to create JavaScript for real websites you can show others.

Let's all look through the interface together now, and do one exercise as a group.

:::note Exercise (20 minutes)

- Look at the interface together
- Everybody open the interface on their own computer as well
- Complete all steps of the first exercise

:::

---

# Requirements

## Telephone

:::note Exercise (15 minutes)
In groups of no more than 5, we’re going to play a game of telephone.

**&rarr; [Telephone](https://garticphone.com/)**
:::

**Communication is hard.** Today, let’s explore some ways we communicate with each other in software development. It’s not enough to draw a picture of a website and assume the other person will build what you imagine. It’s never a good idea to assume shared context or shared interpretations.

So how do we understand what to do? By understanding _requirements_.

## Formalising Requirements

Today we're going to think about requirements. We're going to ask these questions:

- **why** we're working on a project
- **who** we're making it for
- **what** they're going to use it for.

Before starting to solve a problem (**how**), step back and ask yourself those **why**, **who**, and **what** questions.

We're going to think about a few projects and discover some requirements. This is really important in order to do technical work, but you don't need to have any coding experience, or be thinking about coding, when doing this.

:::tip Remember
To make great software, we need to think about people, not just code.
:::

## User Stories

We can discover requirements with something called 'User Stories'. The simplest user story looks like this:

> As a [type of user], I can [achieve some goal].

:::tip 🔑 Key term
A **user story** is a short sentence stating some goal a user can expect to achieve when using the product we are implementing.
:::

#### Imagine a coursework tracker

As trainees, you have coursework to do. Imagine a website which tracks how coursework is going for you all. Thinking about that website, some user stories could be:

- As a trainee, I can ask for help with a topic or task.
- As a mentor, I can see who needs extra support.
- As a trainee, I can see what coursework I need to complete and when.
- As a mentor, I can see what coursework has not been turned in.

These each take the form "As _[who]_, I can _[what]_". They don't say _why_ yet.

:::note Exercise (10 minutes)
In groups of about 5.

1. Talk about why the "who" is useful. What would we be missing if we didn't think about the "Who"?
2. Now think about the "why" for each of the listed user stories. Why are they important?

:::

### Discover requirements

> As a _[who]_, I can _[what]_ so that _[why]_

:::note Exercise (10 minutes)
Write some user stories for our coursework tracker on a [Jamboard](https://jamboard.google.com/).

Think about the "who", "what", and "why" for each.

You can think of new "who"s (e.g. the people who write the coursework questions), and as many "what"s as you want - but make sure you remember the "why".
:::

### Reflecting

:::note Exercise: Reflection (10 mins)

Why do you think thinking about user stories may be useful?

What's useful about thinking about the "who" and the "why"? What could go wrong if you don't think about them?
:::

## Ship It

The last thing we will do today is ship some code, because we expect you to ship very often at CYF.

You're going to be working on and developing your own projects over the Fundamentals course, so let's begin with your personal home page. In Intro to Digital (ITD) you built a Personal Home Page to complete the course. Now we’ll ship it to become a “real” website. When developers talk about shipping or deployment they mean turning the version that they’re developing into something that users can access.

:::tip
It's important that software _works_ and that we can _use_ it!
:::

#### You will need:

- Your personal home page on Codepen
- An account with Github and to be logged in
- An account with Netlify, so [sign up now](https://app.netlify.com/signup) using the “Sign up with Github” option

:::note Exercise
You’ll export your page to a folder on your computer, upload it to Github, and deploy it to Netlify.
:::

### Step by step

#### Step One : Codepen

Find your landing page on Codepen and click **Export > Export as zip**

#### Step Two : Github

1. Create a new repo by going to repo.new or by clicking the + icon in the top navigation
2. Leave the Repository Template as “No template”
3. Type in a name for your project. It can be anything, but “landing-page” or “tribute-page” are probably good choices
4. Leave the rest of the options as the defaults
5. Click “Create repository”. Once it’s created it will take you to your new repo
6. Now click the link to upload an existing file, which takes you to https://github.com/YOUR_GITHUB_NAME/YOUR_PROJECT_NAME/upload
7. Find your downloaded zip file on your computer, unzip it and drag the folder on to your Github web interface.

#### Step Three: Netlify

1. Log in to Netlify and follow [this workshop to deploy your site](../../guides/deployment-netlify/index.md).

2. 🎉 Congratulations! You shipped it!

:::tip Stretch goal?
Follow the instructions in the workshop to change the site name to YOUR_GITHUB_NAME-home-page
:::

## Retro

A mentor will briefly explain what a retro is and then we will do a short retro together using Figma. Set a timer for 15 minutes.

## Coursework

Find the coursework for this week on the [coursework](./coursework) page.

## Feedback

Spend two minutes reviewing this session to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="Fundamentals" week="Week 2" />
