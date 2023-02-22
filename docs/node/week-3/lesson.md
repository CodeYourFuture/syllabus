---
id: lesson
title: Node - 3
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Learning Objectives

By the end of this lesson trainees should be able to:

- Process a PUT request using Express and Node to update data in memory
- Upload their node app to the internet so it can be accessed anywhere using Heroku

---

## 1) Presentations

As part of last week's homework we asked you to prepare a very short presentation on what you learnt last week.

Split into groups of 2-4 people and present what you have learnt. Remember, your whole presentation should be no more than 120 seconds!

## 2) CRUD Review

So what will we build? We will build a **CRUD** API. CRUD stands for Create, Retrieve, Update, Delete. If you think about it, this is what most applications do:

- Create some "resources"
- Retrieve them (GET them)
- Update them
- Delete them

> Which of these have we learnt so far?

### 2.1) Using Update

This is a teacher led exercise which can be used to remind students how to update resources by making a PUT request.

:::note Teacher-Led Live Coding

#### Objective

Change a quote API server to allow updating a quote according to the given ID.

The route should use the HTTP method PUT and should use the URL:

> /quotes

You should use the starting project: [cyf-quotes-id-start](https://glitch.com/~cyf-quotes-id-start). This is because this project has quotes with IDs.

When you remix the starting project, immediately rename it as your own.

:::

#### 2.2 Workshop: Updating Data

Let's look back at our original objectives using the albums project from previous lessons. Try to apply what you learned about PUT routes to this project.

:::note Glitch Albums Project

If you don't have your albums project in available, you can practice creating a PUT route using the [cyf-albums-start](https://glitch.com/~cyf-albums-start) project.

:::

> `PUT /albums/:albumId` should update the album (that matches the passed albumId)

This means that `PUT /albums/2` should update an album with the id `2` and return `200` with JSON `{ success: true }` to the user.

The code should look something like this:

```js
// notice .put
app.put("/albums/:albumID", function (req, res) {
  console.log("PUT /albums route");
});
```

Remember, you have got to **update** the album, not add it to the list.

Test that your API works by updating one of the albums.

:::note Extra Challenges

To challenge yourself even further, try to complete these challenges:

* CHALLENGE 1: return the old version of the object you updated as well as the new value in the response
* CHALLENGE 2: validate the request body to make sure the ID can't be updated and that users can't add additional fields
* CHALLENGE 3: persist your changes to file so that you are able to return your updated values even after you make code changes in Glitch

:::

## 3) Heroku

We can use Heroku to host our APIs online (similar in the way you might have used Netlify in the past). This can be a little tricky.

:::caution

If you're using WSL, Snap may not work immediately. If you see errors using Snap, run the following command in WSL instead. You can ask a TA for help:

```bash
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
```

:::

:::note Exercise

Work in pairs and with Teaching Assistants to get your homework from the previous two weeks working online by following [this Heroku walkthrough](https://youtu.be/MxfxiR8TVNU).


If you don't have your albums project available, you can follow [Heroku's guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs) and deploy one of their provide apps.

You should complete all of the following sections:

- Introduction
- Set up
- Deploy the app
- View logs
- Define a Procfile
- Run the app locally

Now when you use

```bash
# This is an interesting command - Heroku deploys your app by requiring that you push your code to their remote git repository. If you're using the Heroku docs, this remote repo will already be set up, but you will need to add Heroku's git remote repository if you want to use this method on your own private codebase.
git push heroku main
```

your updated website will be made available online!

Note that `heroku ps:scale web=1` may look like a confusing command, but it's actually broken down as follows:

```bash
heroku    # the Heroku client you installed through the guide/video
ps:scale  # telling Heroku that you want to perform a scale operation on a process
web=1     # in your procfile, you defined a process called web - you're just telling Heroku to scale this process to 1 here
```

:::

## 4) City Guide and Paired Programming

:::note Exercise

For this exercises you should split into groups of two or three people. Focus on just completing level 100 if you can! This exercise is designed to test your pair programming skills and to get you thinking about how to design a full stack application! :) You're not expected to get everything completed.

You're encouraged to collaborate on either React or Node at any one time (i.e. both of you working on React or Node at one time - recommendation is to start on the side that at least one of you are not comfortable with!) - one of you should "drive" (i.e. code) while the other "navigates" (i.e. provide suggestions). Make sure to switch roles every so often to share the experience!

You can find the [challenge](https://github.com/CodeYourFuture/cyf-node-challenges/tree/master/challenge-london-mini-guide) here.

Remember to use `create-react-app`!

It is **very important** that you do not move onto the next level of the challenge until **both** of you have completed the level.
  * e.g. Both of you have to finish Level 100 before continuing onto Level 200.
  * If one of you gets stuck - help each other!

:::

## PD (5 Whys Problem Solving)

**Session objective:** In this session we will talk about how the 5 Whys technique is a proven and effective problem-solving technique.

[5 whys problem solving slides](https://docs.google.com/presentation/d/1K-k4AHUl4WgyPrVQbddDZmo7iNBWX-wKFPS0iGVJfMQ/edit#slide=id.ga9333c68a9_0_33)

:::note Exercise (30 min)

**Exercise objective:** To practice 5 Whys problem solving technique

Pair with another trainee that has a different work style to yours. Talk to each other in turns about a recent problem you faced, what action you have taken so far and what help you still need.

Use active listening skills and apply the 5 Whys technique to discover the root cause of the problem.
Repeat this exercise in 3 different pairs.

:::


## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="Node" week="Week 3" />
