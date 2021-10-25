---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## IMPORTANT - Setup Needed For Trainees

If you are teaching this class in the coming weeks you **must** instruct your trainees to complete the instructions below.

[Git Preparation](../preparation)

If you trainees do not arrive with these steps completed then you will lose a lot of time on your first lesson. You should consider running short mid-week sessions the week before to help trainees get set up.

## IMPORTANT - Setup needed For Teacher

One of the teacher-led demos in this class relies on the user not having permission to push to CodeYourFuture's GitHub repositories. As a teacher, you probably have access to push these repositories, and so your demo will not show all of the steps it's meant to show. We recommend using a different GitHub account for this class - if you don't have a second account, and don't want to set one up, come chat in `#cyf-module-git` - we can set up a shared one you can use.

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-git](https://codeyourfuture.slack.com/archives/C01DANTAGRK)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Resources

### Slides

Example slides for this lesson. Source is [here](https://docs.google.com/presentation/d/1zqXv_78uzEGyTErx8zQwYmWG7aGIg6pnTn-3xSIVjhY/edit#slide=id.g7df9eebc96_0_290).

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRXRL4f2rcCw_bw0GYSo-CfGJrD5Wi3R1RqgA7tpQRWgCNTMt3CyAAQoRquAruIcUH9gzAL_v5E6YXZ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Lesson Notes

### Aims

Git and GitHub are vast topics, and learners have historically struggled a lot with them. We have very intentionally reduced the scope of what we're teaching here to just things which are immediately useful. This is both to reduce cognitive load, and to try to ensure the things we _do_ teach actually stick (because struggling with _how_ to submit your homework is really demoralising, whether you've excelled at the homework, or struggled with it).

The aims are:

1. To get the learners able to submit homework.
2. To set the learners up so that in the coming weeks they can practice basic Git workflows via their ordinary homework.
3. To see that Git maybe has _some_ use to them for now (via "checkpoint" commits), and encourage frequent commits.

We've purposefully left out anything which may require resolving merge conflicts (merging, pulling after an initial clone, reverting), as well as branches in general. These will be introduced later in the course, when they're actively useful for the learners. For now, they don't _need_ them, so we won't overload them.

We also intentionally opted to avoid the command line. This was much debated, but the consensus was that `git` is not the most friendly command line tool for your first experience, and Git is complicated and scary enough without loading in more learning alongside it. Again, `git` will come later, after the learners have used the command line for something else.

### Background & Discussion

This lesson was discussed at length and has been archived here:

https://github.com/CodeYourFuture/syllabus/issues/77

Further discussion can take place in:

`#cyf-module-git`

### Structure

This class was designed to be taught through lots of worked examples (both teacher-led, and as individual and group exercises). A full four hours is allocated to it, but the actual taught content is relatively light. There should be plenty of time for questions, and it's recommended to take them as they come up. The class is very linear, so any confusion early on is likely to compound. However, the teacher-led demos lend themselves to being completed without much interruption - just seeing the whole flow end-to-end will answer many of the questions that come up, and stopping to take questions will make this less clear, so after starting a demo, perhaps try to finish it before taking questions.

First, we try to give the learners experience of the problems Git solves before introducing Git as a solution, through real-world non-coding examples.

We then introduce Git in a concrete use-case similar to the examples shown.

Before the learners use Git, we point them at the cheatsheet. They _will_ forget things and get stuck in the coming weeks, so we try to keep reminding them where to look if this happens.

Show them each step of the teacher-led demo. There aren't many steps, but there are a lot of little ideas to teach at each stage. Then they do the same thing themselves.

Commit messages, commit hygiene, when to commit, etc are all skills that are hard to teach, particularly when the learner has never written code before - the learners will hopefully work them out over time. Don't worry too much about them fully grasping the intricacies here, but try to seed some things to think about, which they will hopefully understand more over time.

## Teacher Led Demos

### Lets do some homework

**Important**: This section end with an error message - this is expected and used as a learning experience! Continue to the next section when you get a `permissions error`.

## Exercises Overview

### Exercise 1

**Aim**: To show the trainee a concrete example of the problem they are trying to solve with using Git.

Let this exercise open a discussion about why this is hard and how this could become completely unmanageable in a larger system.

Open questions:

- It's manageable for three versions, what about 100 versions?
- Have you ever seen this problem before?
- What would happen if 100 people need the final version?

### Exercise 2

**Aim**: Hands on experience of cloning a repository.

You should expect a host of small issues and problems with the trainees doing this. Work closely with them in small groups to resolve these issues.

This exercise may draw out for a long time with all manner of login issues, UI issues, and general confusion. Let it take as long as it takes. Make sure every learner has succeeded before moving on.

### Exercise 3 & 4

**Aim**: Hands on experience creating a Pull Request.

Again, you should expect a host of small issues and problems with the trainees doing this. Work closely with them in small groups to resolve these issues.

### Exercise 5

**Aim**: A follow on exercise that demonstrates how a file can can be added to a Pull Request.

This small exercise demonstrates a key misunderstanding that trainees have around how they can add files to a Pull Request.

You should prompt and call attention to how we should always write good commit messages. Don't write "_Changes_". Do write "_Added an answer to the other-file.txt file_".

### Exercise 6

**Aim**: A follow on exercise that demonstrates how a file can can be added to a Pull Request.

### Exercise 7

**Aim**: A rounding off exercises that shows the solution to the first problem that we discussed.

Open questions:

- Do you think this is easier to tell what has changed in the files?
-
