---
id: workshop-1-mentors
title: "Workshop 1: Mentor Notes"
sidebar_label: "Mentors"
---

## What's this?

Mentor notes outlining an in-class workshop in which students will learn the basics of automatic deployment of their (simple) html/css projects using Netlify and GitHub.

## Who's it for?

It's for students in the HTML/CSS module.

It's intended students attend the actual workshop session, which this document supports but does not replace.

Later in the course, a more advanced workshop may be given.

## Workshop goals:

- After this first 20-minute workshop, students should be able to:

  - Configure the automated deploy of any STATIC (non-generated) site they create on github in future (including all significant CYF homework projects).
  - Recover from common mistakes they make during deployment configuration.

### NON-goals:

- After this _first_ workshop, the students DON'T need to be able to explain HOW it is working (only what the trigger(s) and results are). We'll have time in later sessions.

## Workshop pre-requisites:

Students should have:

- made some very simple sites (even a single index.html)
- the source of at least some of those sites as repos on github.
- know their github login
- [created netlify account for homework](https://classroom.google.com/u/1/c/Mzk3NDA1NjA4MTVa/a/NjA0NjEwMzM1MzRa/submissions/by-status/and-sort-first-name/not-done)

Students **don't** need to know anything about the command line or npm.

### Computer setup

Wipe the projects from your netlify account, if you've previously given the workshop.

## Overview:

- demo 1
- demo 2
- practice deploy 1
- site naming conventions
- practice deploy 2
- practice deploy 3

## Demonstration #1. A 60-second demonstration

Demonstrate VERY quickly, to build curiosity. We'll break it down later.

Live coding:

- Show teacher's copy of cake repo on github [nbogie/responsive-cake-webpage](https://github.com/nbogie/responsive-cake-webpage)
- Modify the content to prove we are live (students can suggest some silly (text) content.
- State: I wish to publish at https://cyf-nbogie-cakes.netlify.com/
- [Post to slack](https://app.slack.com/client/T2H71EFLK/CSE061L6L/thread/CSE061L6L-1581174531.227000)
- Have a student check there's nothing there yet
- Add the site to Netlify
- Observe deployed site (random name)
- Change site name
- Observe at new location
- Commit and push
- [Observe deployed site](https://cyf-nbogie-cakes.netlify.com/) (maybe wait 60 seconds)
- Have students observe at new location

## Demonstration #2. (Another 60-second demonstration.)

- If you haven't already, fork the project from https://github.com/CodeYourFuture/p5js-minimal
- [Show the project source](https://github.com/nbogie/p5js-minimal)
- Deploy it
- Change the site title
- [Observe site](https://cyf-nbogie-p5js.netlify.com/)
- Commit & Push a change
- [Observe site](https://cyf-nbogie-p5js.netlify.com/)

### About the demos

- I configured a free service called Netlify to automatically deploy one of my github repos as a website, whenever there was a change on the master branch.
- It made the website available at a random site name under netlify.com
- I configured my choice of site name.
- I tested it was working by pushing new changes to that branch.

This is what you'll learn to do now this workshop.

### Setup: Creating a netlify account - ONE TIME ONLY

#### Exercise 1: deploy "responsive cakes" site

#### Exercise 1b - push some code changes

**Note**: CYF site naming conventions

Use the standard format for site names for all CYF homework projects - see [site naming conventions](/workshops/deployment/cyf-site-naming-conventions)

- cyf-[your github username]-[exact project name as supplied by teacher]

Examples:

- cyf-lucymac-cakes.netlify.com
- cyf-nbogie-cakes.netlify.com

### Exercise 2 - deploy "karma clone" site

#### Demo Linking to your site from your github repo

- Put your full URL into your github repo website field
- Also, include it in your homework submissions.

**Note**: don't worry about "unfinished" sites

**Don't worry** that you are deploying "unfinished" projects - you can continue to make improvements over the next couple of weeks and your changes will automatically be deployed.

We just need to repeatedly practice the process so that you can do it on your own in future.

## Trouble-shooting - when things go wrong

Mentor notes - points to cover:

- Simplest approach is often to delete & recreate site. (e.g. if you use the wrong github account or repo).
- Renaming site is possible
- When repos don't show up in the menu
- If site is not deploying on push to master (logs, branch awareness, propagation delay)

**Note:** Alternatives exist, but we'll use Netlify

Many alternatives for hosting exist (heroku, github pages) but we'll do it this way for CYF projects, to make it easier for volunteers. (You are free to deploy elsewhere in ADDITION to netlify!)

## Deleting your hosted site

If you decide you don't want a site public, you can delete it.

Practice deleting a site.

[Instructions here](./cheatsheet)

## Group exercise, recap & vocab

In your table, define what these things mean to you:

- `deployment`
- `automatic deployment`
