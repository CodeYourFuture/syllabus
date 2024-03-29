---
id: lesson
title: Node - 3
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Learning Objectives

By the end of this lesson trainees should be able to:

- Process a PUT request using Express and Node to update data in memory
- Upload their node app to the internet so it can be accessed anywhere using Render

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

You should use the `cyf-quotes-id-start` project from [https://github.com/CodeYourFuture/Node-Exercises](https://github.com/CodeYourFuture/Node-Exercises). This is because this project has quotes with IDs.

:::

#### 2.2 Workshop: Updating Data

Let's look back at our original objectives using the albums project from previous lessons. Try to apply what you learned about PUT routes to this project.

:::note Albums Project

If you don't have the album project already done you can use the `cyf-albums-start` project from [https://github.com/CodeYourFuture/Node-Exercises](https://github.com/CodeYourFuture/Node-Exercises) as a baseline.

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
* CHALLENGE 3: persist your changes to file so that you are able to return your updated values even after you restart the server

:::

## 3) Render

We developed our Node projects locally in the past, and you might have also used Glitch for some very simple projects. For more complex projects there various options available. We prefer Render as it has a free tier for hosting Node APIs online. Setting it up can be a littly tricky however.

:::note Exercise

Work in pairs and with Teaching Assistants to get your homework from the previous two weeks working online by following [this Render walkthrough](https://syllabus.codeyourfuture.io/guides/deployment-render/).

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
