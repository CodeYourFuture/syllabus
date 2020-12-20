---
id: workshop
title: "Workshop: Basic Automatic Project Deployment using Netlify"
sidebar_label: Workshop
---

Student exercises and notes.

## NOTE: Wait!

Don't start each exercise until the teacher asks you to.

## Setup: Creating a netlify account - ONE TIME ONLY

(If you have not already done this for homework...)

- Log in to github with the account you use for CYF homework
- Visit https://www.netlify.com/
- Click "get started for free"
- Choose `github` under "Sign up with one of the following"
- Read the permissions you are granting and click "authorize netlify"

## Exercise 1: deploy "responsive cakes" site

- Deploy your "responsive cakes" homework using the instructions below
- project name: `cakes`
- Name the site cyf-YOUR-GITHUB-USERNAME-cakes
  e.g.
  `cyf-nbogie-cakes`

Instructions: [the instructions are here](./instructions).

## Exercise 1b - push some code changes

- Make some VERY quick visual changes to your site in vscode (change an `<h1>` or a background colour)
- Commit and _push_ the change to github (to the same branch you chose at setup)
- Check your site url again - is it updated? (it might take 60 seconds)
- Check on someone's phone, too.
- Check your neighbour's site (send the link via slack)
- (Celebrate!)

## Note: CYF site-naming conventions

Use the standard format for site names for all CYF homework projects - see [site naming conventions](../site-naming-conventions.md)

- cyf-[your github username]-[exact project name as supplied by teacher]

Examples:

- cyf-lucymac-cakes.netlify.com
- cyf-nbogie-cakes.netlify.com

## Exercise 2 - deploy karma clone

- [karma clone](https://github.com/CodeYourFuture/karma-clone)
- project name: `karma-clone`

* Set up netlify to automatically deploy it
* Set up the site title correctly
* Test the deployed site to check it seems ok
* Make (and push) some changes to check the site is redeployed automatically
* Test the site on your phone, and bookmark it
* Test the site of the person sitting next to you!

## Exercise 3 - deploy a p5.js site

- Fork this repo: [p5js minimal example](https://github.com/codeyourfuture/p5js-minimal)
- deploy it as cyf-username-p5js

- Set up netlify to automatically deploy it
- Set up the site title correctly (CYF naming conventions!)
- Test the deployed site to check it seems ok
- Make (and push) some changes to check the site is redeployed automatically
- Test the site on your phone, and bookmark it
- Test the site of the person sitting next to you!

## Exercise 4: delete a deployed site

[Instructions for deleting a site](./cheatsheet-1.md) (if you need them).

## Reference material

### For when you forget!

- [The CYF Netlify auto-deploy CheatSheet](./cheatsheet-1.md) (for when you forget all this stuff)

### Learning more

- We'll revisit Netlify deployment later in the course.
- [This video tutorial](https://www.youtube.com/watch?v=mN9oI98As_4) (2 minutes) is old and has some inaccuracies.
  - you can watch it, but for detail use OUR instructions.
- These written instructions are also not perfect:https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/ (you should not fill in "dir" and "build command" (until the React module))
- The [official Netlify docs](https://docs.netlify.com/) may be initially overwhelming - you won't need to use many of their features.
