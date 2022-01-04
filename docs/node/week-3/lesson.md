---
id: lesson
title: Node - 3
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Learning Objectives

By the end of this lesson trainees should be able to:

- Process an PUT request using Express and Node to update data in memory
- Upload their node app to the internet so it can be accessed anywhere using Heroku

---

## 1) Presentations

As part of last week's homework we asked you to prepare a very short presentation on what you learnt last week.

Split into groups of 2-4 people and present what you have learnt. Remember, your whole presentation should be no more than 120 seconds!

## 2) CRUD Review

So what will we build? we will build a **CRUD** API. CRUD stands for Create, Retrieve, Update, Delete. If you think about it, this is what most applications do:

- Create some "resources"
- Retrieve them (GET them)
- Update them
- Delete them

> Which of these have we learnt so far?

### 2.1) Using Update

This is a teacher led exercise which can be used to show how we might retrieve an element by ID using a GET request.

:::note Teacher-Led Live Coding

#### Objective

Change a quote API server to allow updating a quote according to the given ID.

The route should use the HTTP method PUT and should use the URL:

> /quotes

You should use the starting project: [cyf-quotes-id-start](https://glitch.com/~cyf-quotes-id-start). This is because this project has quotes with IDs.

When you remix the starting project, immediately rename it as your own.

:::

#### 2.2 Workshop: Updating Data

Let's look back at our original objectives.

> `PUT /albums/:albumId` should update the album (that matches the passed albumId)

This means that `PUT /albums/2` should update an album with the id `2` and return `200` with JSON `{ success: true }` to the user.

The code will look like this

```js
// notice .put
app.put("/albums/:albumID", function (req, res) {
  console.log("PUT /albums route");
});
```

Remember, you have got to **update** the album, not add it to the list

## 3) Heroku

We use can use Heroku to host our APIs online (similar in the way you might have used Netlify in the past).

This can be a little tricky however the documentation is good.

https://devcenter.heroku.com/articles/getting-started-with-nodejs

:::note Exercise

Work in pairs and with Teaching Assistants to get your homework from the previous two weeks working online.

You should complete all of the following sections:

- Introduction
- Set up
- Deploy the app
- View logs
- Define a Procfile
- Run the app locally

Now when you use

```
git push heroku master
```

After making a `commit` your updated website with my made available online.

:::

## 4) City Guide and Paired Programming

:::note Exercise

For this exercises you should split into groups of two or three people.

This challenge should be completed in a Pair Programming style.

You can find the [challenge](https://github.com/CodeYourFuture/cyf-node-challenges/tree/master/challenge-london-mini-guide) here.

#### Rules

1. One of you will be leading on building the React (Client) application
2. One of you will be leading on building the Node.js (Node) Application
3. It is **very important** that you do not move onto the next level of the challenge until **both** of you have completed the level.
   - e.g. Both of you have to finish Level 100 before continuing onto Level 200.
   - If one of you gets stuck - help each other!

:::

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="Node" week="Week 3" />
