# Session 1

## Requirements gathering

### Learning objectives

After this lesson, you should be able to:
* Take a description of a problem and identify described requirements.
* Identify extra requirements from your own experience.
* Resolve trade-offs in conflicting requirements.
* Translate requirements into high-level design outlines.

While it can sometimes be fun to work on open-ended projects, exploring with no particular plan, most of the time we are trying to achieve something with a project.

It is very useful to think about **why** we're working on a project, **who** we're making it for, and **what** they're going to use it for.

Before starting to solve a problem, step back and ask yourself those **why**, **who**, and **what** questions.

We're going to think about a few projects, and try to come up with some requirements for them. This is really important in order to do technical work, but you don't need to have any coding experience, or be thinking about coding, when doing this. Great TODO:engineers think about people, not just code.

### Exercise: Coursework tracker, part 1 (10 minutes)

Let's start with an example close to home. As trainees, you have coursework to do. We can imagine a website which tracks how coursework is going for you all. Some example user stories could be:

* As a trainee, I can ask for help with a topic or task.
* As a mentor, I can see who needs extra support.
* As a trainee, I can see what coursework I need to complete and when.
* As a mentor, I can see what coursework has not been turned in.

These each take the form "As [who], I can [what]". They aren't very explicit about the "why". In groups, try to:
1. Talk about why the "who" is useful. What would we be missing if we didn't think about the "Who"?
2. Think about the "why" for each of these user stories. Why are they important?

### Exercise: Coursework tracker, part 2 (10 minutes)

Try to think of as many extra user stories as you can for our coursework tracker.

Make sure you've thought about the "who", "what", and "why" for each.

This is meant to be completely open-ended. You can think of new "who"s (e.g. the people who write the coursework questions), and as many "what"s as you want - but make sure you remember the "why". Just think about everything you think could be useful.

### Coursework tracker: Reflection

Why do you think thinking about user stories may be useful?

What's useful about thinking about the "who" and the "why"? What could go wrong if you don't think about them?

### Exercise: Groceries App (10 minutes)

Think about an app for ordering groceries. Come up with as many user stories as you can for it. Remember to think about the **who**, **when**, **what**, and **why**, and try to think of stories for at least two different "who"s. Here are a few ideas to get you thinking:
* There are at least the following roles involved: a customer, someone managing stock in a warehouse, someone picking and packing the groceries, and someone delivering them.
* Sometimes things don't go according to plan. There are user stories for problems, too! (e.g. when something is out of stock, or a delivery is late).

TODO: Discuss edge cases.

### Exercise: Favourite App (10 minutes)

Split into groups and think about one of your favourite phone apps. Come up with as many user stories as you can for it.

TODO: Work out how to get people to reflect/compare.

### Exercise: To Do List (10 minutes)

Split into groups and think about the problem described below:

> I often forget to do some chores I'm meant to do. I would like a website to help me remember what things I need to do.

### Prioritisation and the MVP

Between all of us, we have a long list of possible user stories for our to do list app. While all of these things may be useful, we have to start somewhere, and we will probably run out of time before doing we can do all of them.

It can be useful to work out an answer to the question: "What's the minimum set of user stories we could implement for this product to be useful?" (or: "What is the minimum viable product?").

For our to do list app, maybe that's just a list we can add to and never mark things as done. Or maybe we think marking things done is really important, and someone couldn't use a to do list without it. Probably re-ordering things is useful but not required. Sharing with other users? Notifications when things are done? Different ways of doing notifications (email/SMS/tweet/whatever)? Those sound like a lot of work.

So pick somewhere to start, and do that one thing! Then one more thing, and keep going. It can be useful to remember what other things you're going to do in the future (e.g. if you know you're planning to support re-ordering in the future, you may want things to look differently than if you're not). But try to focus on one thing at a time.

### Resolving conflicts

TODO: This whole section could really do with some examples.

Sometimes two user stories will be in conflict - that's ok! It happens! It's our job to work out how to resolve that conflict.

Sometimes, one of story is just more important than the other, and we can just decide not to do the other.

More often, though, we need to compromise - consider the trade-offs involved with each user story, and work out where we can meet in the middle.

## Breaking down problems

Most problems we solve involve different sub-problems.

For instance, let's imagine you want to find the tallest person in the class. One way would be to find out everyone's height, sort the heights, and find the biggest. And even those have sub-problems! To find out someone's height, maybe you would have them take off their shoes, stand against a wall, and measure them with a tape measure.

A big part of working in software is working out how to take a bigger problem, and break it down into things you already know (or can find out) how to do.

In particular, computers aren't very smart. They do exactly what you tell them to, but there aren't very many things they know how to do. You can't tell a computer "Here are the class's heights, who's the tallest?", but you _can_ tell a computer "Here are the class's heights, sort them biggest to smallest, and give me the first one".

### Exercise: Going shopping (10 minutes)

Let's imagine you want to give a computer instructions to buy a list of items from a shop. Try breaking down this problem into steps, and keep breaking those steps into smaller steps until you don't think you can break them down any more.

Present your steps to someone else in the class. See if they can work out even smaller steps to break yours down into. Keep going until you don't think the steps can be any smaller!

# Session 2

TODO: Work out what requirements we're going to put on the personal home page project, and get the trainees to formalise and prioritise them.

TODO: Instruct to implement a new requirement or two.