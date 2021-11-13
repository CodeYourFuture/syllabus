# Session 1

## Requirements gathering

### Learning objectives

* Be able to take a description of a problem and identify described requirements.
* Be able to identify extra requirements from your own experience.
* Be able to consider and resolve trade-offs in conflicting requirements.
* Be able to translate requirements into high-level design outlines.

While it can sometimes be fun to work on open-ended projects, exploring with no particular plan, most of the time we are trying to achieve something with a project.

It is very useful to think about **why** we're working on a project, **who** we're making it for, and **when** they're going to use it.

Before starting to solve a problem, step back and ask yourself those **why**, **who**, and **when** questions.

When you built your personal home page, [we gave you some requirements](https://docs.google.com/document/d/1jYPXv5bmWyFOk4OaNi6vL1ZDVtBo4XGTqKyNOnnVwDU/edit) which took the form "Given [...] when [...] then [...]", e.g. "Given a personal home page, When I read the content, Then I learn something about you". This can be a useful framework for making sure you really understand what you need to be doing.

Sometimes, when working on more complex projects, it can also be usful to think more about **who** and **why**. One useful way of thinking about these questions is in the form of user stories. These are typically single sentence including **who**, **when**, **what**, and **why**.

Let's take the example of a homework tracker - a website where your mentors can keep track of how you're doing with your homework. Some example user stories could be:

* As a mentor, when planning my week, I can see which trainees are struggling with this week's home, so I can offer them extra support.
* As a mentor, when homework is due, I can see what homework my trainees haven't handed in, so I can check in with them and remind them.
* As a lead teacher, when I'm getting ready to teach class, I can see what topics trainees struggled with this week, so I know what topics to recap at the start.
* As a lead teacher, I can see how much homework is getting done, so I know if I'm setting too much or two little.

These all take a fairly standard form: "As [who], when [when], I can [what], so [why]".

Each of these parts is useful!

**Who** is useful because you may have different kinds of users who will use your project. For instance, when setting and tracking your homework, there may be different user stories for lead teachers, trainees, education buddies, programme managers, and so on. Thinking about different perspectives can help make the differences more clear, and help us focus on the user experience.

**When** is useful because context matters when interacting with a website. Why is the user doing what they're doing? It may help to think about questions like: Should the functionality be part of an existing screen, or a new one? Does the user need to be logged in to perform the action?

**What** is what we're trying to achieve.

**Why** is really important! There may be a lot of different ways we _could_ implement something, and often the "why" is the way we decide between them. For instance, let's we're tracking homework. The same what: "I can see how people are progressing with their homework" may have really different ideal interfaces depending on the "why":
* If my "why" is "so I know who to remind to hand in their homework", maybe I want a list of names.
* If my "why" is "so I know what topics people are struggling with, so we can recap them in class", maybe I want a list of themes.
* If my "why" is "so I know which homework tasks are confusing", maybe I want a break-down of how people did by question.
If we don't think about the "why", we may build the wrong thing!

### Exercise: Groceries App (10 minutes)

Think about an app for ordering groceries. Come up with as many user stories as you can for it. Remember to think about the **who**, **when**, **what**, and **why**, and try to think of stories for at least two different "who"s. Here are a few ideas to get you thinking:
* There are at least the following roles involved: a customer, someone managing stock in a warehouse, someone picking and packing the groceries, and someone delivering them.
* Sometimes things don't go according to plan. There are user stories for problems, too! (e.g. when something is out of stock, or a delivery is late).

TODO: Work out how to get people to reflect/compare.

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

A big part of being a software engineer is working out how to take a bigger problem, and break it down into things you already know (or can find out) how to do.

In particular, computers aren't very smart. They do exactly what you tell them to, but there aren't very many things they know how to do. You can't tell a computer "Here are the class's heights, who's the tallest?", but you _can_ tell a computer "Here are the class's heights, sort them biggest to smallest, and give me the first one".

### Exercise: Going shopping (10 minutes)

Let's imagine you want to give a computer instructions to buy a list of items from a shop. Try breaking down this problem into steps, and keep breaking those steps into smaller steps until you don't think you can break them down any more.

Present your steps to someone else in the class. See if they can work out even smaller steps to break yours down into. Keep going until you don't think the steps can be any smaller!

# Session 2

TODO: Work out what requirements we're going to put on the personal home page project, and get the trainees to formalise and prioritise them.

TODO: Instruct to implement a new requirement or two.