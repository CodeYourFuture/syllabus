---
id: branches
title: Branches
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

So far, we've seen that we can use git to share our work, get review, and view history. This week, we're going to learn more about how we can use git to work together in groups, and to work on more than one thing at the same time.

For this class, we're going to use the git CLI, but everything we're doing can also be done in GitHub Desktop. TODO: Link to cheat sheet with equivalences.

In this class, we're going to work with a GitHub repository of recipes. TODO: Have the trainees make a repo in their account from a template (https://github.com/illicitonion/GitExampleRecipes which we should move into CodeYourFuture) - we're going to have them make and merge pull requests, so we want them to be working with their own repo, rather than a CYF one.

## Learning objectives

By the end of this class, you should be able to:

- Explain why branches can be useful when using Git.
- Create a branch, and add commits to it.
- Switch between branches.
- Create a pull request from a branch to the main branch.
- TODO: Decide whether to include this: Create a pull request from a branch to another branch.
- Work with another trainee on non-conflicting changes to a single branch.

## What is a branch?

We saw in the first Git lesson that Git stores the history of your changes as a list of commits, one after the other:

TODO: Image of commit history

Since then, you've been pressing a button in GitHub Desktop called "Commit to main" to make a new commit. But what does that "to main" mean? main is called a _branch_, which is a list of commits. It turns out, you can have more than one branch, and they can share some commits if they want:

TODO: Image of two divergent branches with shared history, highlighting which is shared and which is divergent.

### Why would we want to do this?

There are a few reasons. The main one is: So you can work on more than one thing at the same time.

Let's look at our repo of recipes. Right now, it contains one recipe, for a brownie in a mug. There are a couple of changes we want to make:

1. We want to add an optional topping to put on top of the brownie (maybe ice cream, maybe you have a better idea). We'll need to add it both as an extra ingredient, and an extra step at the end.
2. A lot of recipes start with a story of how the author found them, or some time they've really enjoyed the recipe. We want to add a story, before the "What you need" section.

Let's imagine we start writing the story, but we want to quickly add the optional ice cream step. And let's imagine that we want someone else to review both changes before we merge them to main.

We could make both changes to main, and ask someone to review them both, but then they both need to be right before we can merge either one - we can't merge just the ice cream step until the story is finished.

Or we could only make the ice cream change, then send it for review, then when that merges, write the story and send it for review. But that slows us down, and also means that the reviewer can't review both changes at the same time.

It would be better if we could send out one pull request for the ice cream change, and another for the story. We can do this - with branches:

TODO: Same image as before, of divergent branches, but labelled "ice cream" and "story".

We can then add new commits on top of each branch, separately, and later on merge both branches to main.

### How do we create a new branch?

```console
$ git switch --create story
Switched to a new branch 'story'
```

Let's run through the bits of that command:

`git` - we're running a git command.

`switch` - we're switching to a different branch than the one we're on right now.

`--create` - we want git to create the branch we're switching to.

`story` - the branch we want to switch to (and create) is called `story`.

Running this command doesn't change any of the files in our repository - they stay the same, but if we commit changes, they will only get committed on this branch. If we switched back to the `main` branch, the changes would be un-done. But if we switch back to `story`, they'll come back!

### How do I know what branch I'm on?

You've already run one command which tells you this, you just may not have noticed!

```console
$ git status
On branch story
nothing to commit, working tree clean
```

That's right, `git status` tells you what branch you're on (and about any changes you haven't committed).

You can also find out more about branches by running:

```console
$ git branch
  main
* story
```

`git branch` tells you what branches exist in your repository, and puts a star next to the one you're currently switched to.

### Exercise 1 (15 minutes)

Let's make a new branch, and make a new commit on it.

Create a branch named story, and edit `mug-brownie.md`.

Before the "What you need" heading, make up a story about how the author discovered the recipe, or a time they enjoyed it.

When you've written a bit, make a commit (make sure to give it a good commit message!)

Explore the history with `git log` - make sure you understand the commits in your history and why they're there.

### Switching back to main

Can you guess how to switch back to the `main` branch?

What do you think will happen when you do?

What will the history look like?

### Exercise 2 (5 minutes)

Switch back to the `main` branch (hint: The command to run is like the one you used to create a new branch, but you're not creating a new one).

Look at the contents of `mug-brownie.md` - what's changed?

Explore the history with `git log` - make sure you understand the commits in your history and why they're there.

Share with the class what you saw.

### Managing multiple branches

TODO: Talk about how when you create a branch, it will share the history of whatever branch you were on before you created the new one, and that the trainees should generally make sure to branch from `main`.

TODO: Talk about naming branches.

TODO: Explain that we can create multiple branches, and have multiple in-flight pull requests. Benefits: If one idea needs a lot of work it doesn't block the others, reviewer can focus on one thing, keeps changes small.

### Exercise 3 (10 minutes)

Make another branch based on `main` called `extra-topping`.

Add a new topping to the recipe. Make sure to include it both in the ingredients list, and the steps.

Commit your changes.

### Managing branches for pull requests

TODO: Talk through pushing branches to remotes, the fact that they may fall behind just like `main`, and making pull requests from them.

### Teacher-led example

TODO: Make a pull request from one of your branches. Merge it. Delete the branch. Explain that it's ok to delete the branch because we know the changes are safely on `main`.
TODO: Show `git status` showing that branches are out of sync.

### TODO: Homework

Make pull requests for both of your branches.

Get a different trainee in your group to review each one of your two pull requests.

Reviewers: Give some feedback on the pull request you've been asked to review - try to suggest a change.

Authors: Make the suggested changes, then merge your pull requests. Delete your branch when you're done.

### TODO: GitHub Desktop equivalents
### TODO: Explain `git checkout -b` and `git checkout` as legacy for `git switch`

# Open questions

* Should we mention conflicts and/or give tips to avoid conflicts? We're going to teach conflicts in a separate session, but having the trainees avoid them for now is probably useful? The exercises are carefully crafted to avoid conflicts.
* Do we want to talk about reasons to branch from a branch other than `main`? I suspect not for now, keep it simple.
* Do we need to be more explicit about "How do I see what's on this branch?", or is getting them to look at `git log` sufficient?
* Do we want to touch on comparing branches (`git diff`) and/or inspecting other branches (`git log other-branch`)?
* Do we want to talk at all about the idea of "remote" branches and local branches (`git branch -r`), or restrict to just "you can push and pull remote branches"?
