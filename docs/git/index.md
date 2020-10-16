---
id: index
title: Introduction
sidebar_label: Introduction
---

Most software engineers use a tool called Git to organise their code, and collaborate with other people.

Git can be used for many things, and we will see lots of them throughout the course.

Each week, you're going to use Git to get a copy of your homework exercises, to submit your solutions, and to get feedback on your solutions. Today, you're going to learn how to do these things.

## Learning Objectives

By the end of this class, you should be able to:

* Get a copy of your homework questions onto your computer.
  * (To _clone_ a repository).
* Save your answers, and send them to our volunteers.
  * (To _commit_ and _push_ changes).
* See and respond to feedback on your homework.
  * (To _fork_ a repository, use Github's _pull request_ workflows, and _push_ further changes).
* Explore how a file has changed over time.
  * (To use Git's _history log_).

---

## Prerequisites

1. A Github account. If you don't have one already, go to https://github.com/ and sign up for one.
2. Installed Github Desktop. If you don't have it yet, go to https://desktop.github.com/ and follow its instructions to install it.
3. Sign in to Github Desktop with your Github account. Run Github Desktop (TODO: Instructions on how to find it), click "Sign in to GitHub.com", and go through the steps to sign in.
4. Installed VS Code.

## What problem does Git solve?

Git is used to solve many problems, but today we're going to focus on how it:
* Helps us to share information.
* Enables people to make their own changes to that information, and share it back.
* Allows us to track how information has changed over time.

## How does Git do that?

Imagine your teacher wanted everyone in the class to answer three questions and to send back the answers. What capabilities would we need in order to be able to do that?

**First**, the teacher needs to be able to write the questions, and **store** them somewhere.

When we're using Git, we write things down in files in a folder (these could be text files, Word documents, images, or really any kind of file). When we save these files, we We say we're _committing_ them, and we call the folder where we're saving them a _repository_ (or _repo_ for short).

TODO: Insert graphic of teacher writing and committing.

**Next**, the teacher needs to put the repository somewhere where the learners can get it. We call this _pushing_ the repository. The teacher won't send a copy to each learner, but will put one copy somewhere on the Internet, and tell the learners where it is. The place the teachers on this course will be pushing to is a website called [Github](https://github.com), but there are other websites they could push to if they wanted to. This is the difference between Git and Github - Git is a way of storing and sharing files, and Github is one website where you can use Git.

**Then**, now that the teacher has pushed the questions, each learner needs to be able to **get the questions onto their computer**.

When we're using Git, we call this _cloning_ the teacher's repository (because we're making our own copy). After we've cloned the repository, we will have the same folder on our computer as the teacher created, committed, and pushed.

TODO: Insert sequence diagram of teacher committing, pushing, and learners cloning.

### Exercise (10 minutes)

Code Your Future has already pushed an example repository, so you're going to try to clone it from Github onto your computer.

1. Open up Github Desktop, and sign in if you're not already signed in.

TODO: Insert screenshots for each step.

2. You should see a button saying "Clone a Repository from the Internet" - click it. (If you don't see it, look in the menu at the top of the screen, open the "File" menu, and select the "Clone Repository" option).

3. Now we need to tell Github Desktop where we want to repository we want to clone is. Choose the "URL" heading, and paste into the URL box: `https://github.com/illicitonion/cyf-demo-repo` (TODO: Replace with a CYF repo). The second box ("Local Path") is saying where it's going to clone it to on your computer. That's all Github Desktop is doing - copying a repository _from_ Github _to_ your computer. We don't need to change this box, but it can be useful to know where we can find our files later on.

4. Press the Clone button. Github Desktop should soon show you a screen like this:

TODO: Screenshot

5. Click the "Open in Visual Studio Code" button (TODO: Explain to Linux users how to do this, because they probably don't have the button).

6. Visual Studio code should open, and you should see an "Explorer" bar which says `CYF-DEMO-REPO` and under it `README.md`. If you click on where it says `README.md`, it should open the file. Congratulations, you have just cloned your first Git repository!

## What did we just do?

TODO: Diagram showing a teacher's copy, a copy on Github, and a copy on each of three students' laptops.

Each of you just cloned a repository which CodeYourFuture created onto your computer, and opened up your copy of one of the files. This is the process you're going to follow to get your homework every week.

## Let's do some homework (teacher-led demo)

The file you opened, `README.md`, has a question in it. We're going to answer the question, and submit it as if it was our homework.

We can edit the file in VS Code to answer the question, and save it like normal.

After we've saved the file, if we open up Github Desktop, something interesting has changed. On the left, it now says "1 changed file", and on the right, it shows us what the change was. Things we've removed get a red background, and things we've added get a green background.

This is a really useful way for us to check over our homework before submitting it. If we've accidentally deleted things, or changed things we didn't mean to, we can notice now, and un-do them by editing the file again.

When we're happy with our change, we can press the "Commit to main" button. That tells Git "This change is a good change, I want to keep it".

Now, because we committed a change, our copy of the repository is different from CodeYourFuture's copy. Github Desktop now gives us a new button: "Push origin" ("origin" is what Git calls "where I cloned this repository from"). If we press it, it will try to send our change to the CodeYourFuture version.

We didn't have this button before, because we hadn't committed any changes. There's an important distinction here: When we save files in VS Code, we store them in the file on our computer, but Git doesn't automatically commit them. It notices the changes (it showed them to us!), and asks us if we want to commit them. TODO: I'm not in love with any ways of describing "when to commit"...

So, we're happy with our homework, we've committed it, let's try pushing it!

## Forking

Github Desktop just gave us a really useful warning, but it uses some words we haven't seen yet!

We just tried to push our changes to CodeYourFuture's copy of this repository. But we're not allowed to do that! Imagine if anyone could just push anything they wanted to our repository! Then someone naughty could delete the homework, or worse.

To avoid this, we use something called a _fork_ and something called a _pull request_.

Remember when we cloned the repo, we pasted (TODO: URL) in as the place to clone from? Let's look at that:

TODO: Insert image annotating bits of the URL

This is saying "On Github, the user CodeYourFuture has a repository called TODO, I want that".

Github lets you host your own copy of the repository on Github too! If your username is EagerLearner, can you guess what URL your repository would be at?

That's right, https://github.com/EagerLearner/TODO!

This is called a _fork_. It's a copy of the repository, where you're allowed to make changes. So when Github Desktop just asked us "Do you want to fork this repository?", what it's really saying is "You're not allowed to make changes to CodeYourFuture's repository, would you like to make your own copy on Github where you _are_ allowed to make changes, and put your changes there?"

That sounds like exactly what we want to do, so we'll click the "Fork This Repository" button.

Then Github asks us whether we want to fork "To contribute to the parent project" (i.e. because we want to work with CodeYourFuture) or "For my own purposes" (i.e. because we want to do our own thing apart from CodeYourFuture). We want to work with CodeYourFuture, so we'll select "To contribute to the parent project" and press Continue.

Now if we press "Push origin", it will copy our changes to our fork on Github.

TODO: Insert graphic showing four repositories: Teacher's computer, CodeYourFuture, EagerLearner Fork, EagerLearner's computer.

## Making a Pull Request

Now that we've pushed our homework to our fork, we need to tell CodeYourFuture about it, so that the volunteers know to look at it!

We do this with something called a _pull request_. This is a slightly weird name, in the context of homework. Normally, when people push changes to a fork on Github, they're doing so because they want the person who owns the repository to look at the changes, and pull the changes into their repository. For example, this webpage we're reading the syllabus on right now is hosted on Github, and if someone spots a typo, they can fix it, push it to their fork, and request for CodeYourFuture to pull their change into CodeYourFuture's version (hence the name a pull request - "requesting to pull in changes"). We call pulling someone's change into a repository "merging" the change (some people use the phrase "merge request" instead of "pull request").

For submitting homework, you're going to create a pull request, and a volunteer will look at it and give you feedback, but we won't be pulling your homework into CodeYourFuture's copy (then the next student would have the answers when they tried to read the questions!). You'll be creating pull requests, but we won't actually merge your changes into the repository.

In Github Desktop, if you open the Branch menu, and click "Create Pull Request", it will open your web browser at Github, and how you the changes you're about to make a pull request for. This is another great time to check that you're happy with your homework (if you're not, go back to VS Code, make your changes, commit them, push them to origin again, and refresh this page).

If you're happy, press the "Create pull request" button. Fill in the details in the form, so that the volunteers know what they're meant to be reviewing, and press "Create pull request".

Now there's a pull request that volunteers can look at! They can see who made the pull request, and see all the changes you've made.

### Exercise (20 minutes)

Try doing what your teacher just did:
1. Answer the question in `README.md` in VS Code and save your changes.
2. Make a commit in your local repository.
3. Try to push your changes, make a fork, and then actually push your changes.
4. Make your first pull request!

### Exercise (5 minutes)

There's another file in the repository you've cloned, SECOND_QUESTION.md. Open it, answer the question in the file, commit, and push.

Notice a couple of things are different this time!

It didn't ask you to fork the repository - that's because you already have a fork you're allowed to push to.

You may also notice that if you click the "Create Pull Request" menu item, it brings you to a different page. It doesn't have a "Create Pull Request" button, it has a "View Pull Request" button. This is because if you already have a pull request open, when you push more changes, it will update your existing pull request.

This is useful for responding to feedback you get on your homework. There are ways to open more than one pull request at a time (using something called branches), which we'll learn about in the future, but for now, one should do!

## Getting feedback

When you've made your pull request, our volunteers will be notified. They will look at your changes. When they are done, you will get an email. Here are some of the things they may do:
* Make comments with suggestions, either about a particular bit of code, or about the whole pull request.
* Add labels to the pull request (e.g. marking it as complete, or unfinished).

If they give you suggestions, you should try to implement the suggestions, and push a new commit. If you're confused, struggling, or find them unclear, you can respond to the comment with a comment of your own, or ask on Slack.

## History

One useful features of Git is how it stores your commits. In Github Desktop, if you open the History tab, you can see a list of each commit that's been made in the repository, with the oldest at the bottom and the newest at the top.

If you click on one of the commits, you'll see the changes that happened in it. This can be really useful to understand how the repository evolved to how it looks today. It can also help us to find out when bugs were introduced!

You may notice that your commits all have messages like "Update README.md", whereas the ones before you started editing have different messages.

These messages can be really useful to understand what a change did without having to read the whole thing. Let's try out an exercise to help us understand this:

### Exercise (10 minutes)

1. Clone https://github.com/illicitonion/git-log-example TODO: Move this repo into CodeYourFuture. TODO: Give instructions for how to clone a second repo (beacuse the screen is different from your first time).
2. Have a read of the README.md file. See if you can find a problem in the file.
3. Look through the history in Github Desktop. See if you can work out when and why the problem was introduced.
4. Make a pull request fixing the problem.

## Commit messages

If you looked through the history of the Git repository, you may have been able to see where the problem came in just from the commit message, without having to look at the changes that were actually made. If the commit messages were all just "Update README.md", that would've been much harder!

When we make commits in Git, we try to give clear, helpful messages, describing what changed, and why. (The why is really important! You can always work out _what_ changed by reading the change itself, but it's much harder to work out _why_ if no one wrote it down!)

There is a convention when using Git to use the following format for commit messages:

```
One sentence summary

Longer explanation of how, the reasons, exceptions, or anything that may be surprising.
This may be many sentences, and keep going for a long time.
```

Try to use this format when making your own commits. Github Desktop tries to encourage this by having two boxes above the "Commit to main" button - one which is just one line, and one where you can put lots of lines.

TODO: Insert image of a good commit message in Github Desktop.

## Homework going forwards

For the next three modules, most weeks your homework is going to be to clone a repository from Github, write some code, and make a Pull Request with the code.

## Glossary

We introduced a few new things in this class, and it can be a bit confusing to know which is which:

* **Git** is a system for storing changes to files in commits, and sharing them between different computers. There are also other systems which do this, but Git is the most popular one.
* **Github** is a website which will store a copy of your Git repository, and allow you to clone it, and push changes to it. There are also other websites which can do this, but Github is the most popular one.
* **Github Desktop** is a program made by Github to allow you to use Git easily from your computer. Later in the course, we will use other programs to use Git, too.
