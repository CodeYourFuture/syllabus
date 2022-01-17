---
id: session
title: Fundamentals 1
sidebar_label: Session
---

import Feedback from "@theme/Feedback";

---

## Learning Objectives

Learning objectives for this lesson can be found [here](./learning-objectives.md)

---

## Welcome

Welcome to Fundamentals! In this course we will explore the fundamentals of software development by going through this cycle: Requirements, Iteration, Delivery. Each day we will go through each stage and each week we will explore a stage in depth.

**Requirements** - in week one we will explore requirements. What are requirements, and how do we use the idea of requirements to help us develop complex systems in small, simple steps? We’ll find out today.

**Iteration** - in week two we will explore iteration. Iteration means to repeat. Developers do many small iterations to build software, each time adding or changing some small thing. This is why your phone is always updating: each new version is an iteration. If developers waited until software was perfectly ‘finished’, it would never be delivered.

**Delivery** - in week three we will explore delivery. Delivery is the catch-all term for shipping your code, or putting it in online, in a public place where real people can use it. This ability is key to being a successful professional developer.

## Code.org

## Telephone

:::info Exercise (15 minutes)
In groups of no more than 5, we’re going to play a game of telephone.

[Telephone](https://garticphone.com/)
:::

## Requirements

Communication is hard! Today, let’s explore some ways we communicate with each other in software development. It’s not enough to draw a picture of a website and assume the other person will build what you imagine. It’s never a good idea to assume shared context or shared interpretations.

So how do we understand what to do? By understanding requirements.

## Formalising Requirements

### Learning objectives

- [ ] Take a description of a problem and identify described requirements.
- [ ] Identify extra requirements from your own experience.
- [ ] Resolve trade-offs in conflicting requirements.
- [ ] Translate requirements into high-level design outlines.

Today we're going to think about requirements. We're going to ask these questions:

- **why** we're working on a project
- **who** we're making it for
- **what** they're going to use it for.

Before starting to solve a problem (**how**), step back and ask yourself those **why**, **who**, and **what** questions.

We're going to think about a few projects and discover some requirements. This is really important in order to do technical work, but you don't need to have any coding experience, or be thinking about coding, when doing this.

:::tip Remember
To make great software, we need to think about people, not just code.
:::

## User Stories 60 minutes

We can discover requirements with something called 'User Stories'. The simplest user story looks like this:

> As a [type of user], I can [achieve some goal].

#### Imagine a coursework tracker

As trainees, you have coursework to do. Imagine a website which tracks how coursework is going for you all. Thinking about that website, some user stories could be:

- As a trainee, I can ask for help with a topic or task.
- As a mentor, I can see who needs extra support.
- As a trainee, I can see what coursework I need to complete and when.
- As a mentor, I can see what coursework has not been turned in.

These each take the form "As _[who]_, I can _[what]_". They don't say _why_ yet.

:::info Exercise (10 minutes)
In groups of about 5.

1. Talk about why the "who" is useful. What would we be missing if we didn't think about the "Who"?
2. Now think about the "why" for each of the listed user stories. Why are they important?

:::

### Discover requirements

> As a _[who]_, I can _[what]_ so that _[why]_

:::info Exercise (10 minutes)
Write some user stories for our coursework tracker.

Think about the "who", "what", and "why" for each.

You can think of new "who"s (e.g. the people who write the coursework questions), and as many "what"s as you want - but make sure you remember the "why".
:::

### Reflecting

:::info Reflection (10 mins)

Why do you think thinking about user stories may be useful?

What's useful about thinking about the "who" and the "why"? What could go wrong if you don't think about them?
:::

## MVP

## CYF Blocks

## Ship It

### Objectives

- [ ] Export your Codepen to zip
- [ ] Upload your folder to Github
- [ ] Deploy your folder to Netlify

### Exercise (60 minutes)

In ITD you built a Personal Home Page to complete the course. Now we’ll ship it to become a “real” website! When developers talk about shipping or deployment they mean turning the version that they’re developing into something that users can access.

:::info Exercise
You’ll export your page to a folder on your computer, upload it to Github, and deploy it to Netlify.
:::

#### You will need:

- Your personal home page on Codepen
- An account with Github and to be logged in
- An account with Netlify, so [sign up now](https://app.netlify.com/signup) using the “Sign up with Github” option

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

1. Log in to Netlify and follow this workshop to deploy your site. [https://syllabus.codeyourfuture.io/workshops/deployment/workshop/instructions](https://syllabus.codeyourfuture.io/workshops/deployment/workshop/instructions)

2. 🎉 Congratulations! You shipped it!

:::tip Stretch goal?
Follow the instructions in the workshop to change the site name to YOUR_GITHUB_NAME-home-page
:::

## Retro

## Coursework

Find the coursework for this week on the [coursework](./coursework) page.

## Feedback

Please spend two minutes reviewing this session to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="Fundamentals" week="Week 1" />
