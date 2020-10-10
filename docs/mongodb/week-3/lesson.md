---
id: lesson
title: MongoDB - 3
sidebar_label: Lesson
---

## Outline

- This session is all about recapping the previous two weeks of MongoDB and also the Node.js API concepts.
- The idea is to have a very hands on session that allows the learners to cement their undertsanding.
- There may be a lot of confusion between all the different technologies and how they all fit together.
- The lesson is designed to be run in cycles of:
  - Thought experiment (~15 mins)
  - Instructor led pseudo-code (~10 mins)
  - Student led implementation (~30 mins)
  - Intructor led implementation (~10 mins)
- The expectation is that the whole of week 1 and week 2 was not fully completed by this point.


## Setup

Learners should have already created an [Atlas account](https://www.mongodb.com/cloud/atlas), have [Compass](https://www.mongodb.com/products/compass) installed. If not you will need to allow time for them to get set up.

Learners should create a database for this session, they should have a database user that can connect to this database. Students should be able to connect to this database with Compass.

You may find it easier to start with an empty database as uploading seed data can be time consuming. If you do start with an empty database you should ensure that the first endpoint you tackle is CREATE, otherwise there will be nothing to display!


## Starter code

```js
const express = require('express');
const mongodb = require('mongodb');
// fill in with your own username, password and domain
// eg: mongodb+srv://cyf:KHasdiLks@cluster0.00lbs.mongodb.net/mongo-week3
const uri = 'mongodb+srv://<username>:<password>@<domain>/<dbname>';
const mongoOptions = { useUnifiedTopology: true };
const client = new mongodb.MongoClient(uri, mongoOptions);

const app = express();
app.use(express.json());

client.connect(function () {
  const db = client.db('cinema');

  app.get('/films', function (request, response) {
    response.send('Retrieve all the films');
  });

  app.get('/films/:id', function (request, response) {
    response.send('Retrieve one film');
  });

  app.post('/films', function (request, response) {
    response.send('Create a film');
  });

  app.put('/films/:id', function (request, response) {
    response.send('Update one film');
  });

  app.delete('/films/:id', function (request, response) {
    response.send('Delete one film');
  });

  app.listen(3000);
});
```


## Cycle outline

Thought experiment
------------------

Imagine an app (Netflix, Amazon) is showing you a list of things (movies, products) etc.

Trace the journey of the request:

BROWSER -> REACT -> HTTP -> SERVER -> MONGODB -> SERVER -> HTTP -> REACT -> BROWSER

Learners can use any method they like to describe each stage, it could be a diagram or code snippets if they prefer.

Something that learners might need prompting with is how JSON is used as the "universal language" between frontend and backend.


Pseudo-code the HTTP request handler
------------------------------------

Guide the learners through a psudo-coded HTTP request handler in Node.js for each endpoint.

Since the students have already done this last week it should not be completely new to them.

```js
// get collection (movies)
// get data from request.body (NOT the query...)
// collection.insertOne(data, function(error, result))
// if everything is not ok -> send error response (500)
// if everything is ok -> send returned record (a bit tricky to find it...)
```


Learners to code out the HTTP request handler in groups and test with Postman
------------------------------------------------------------------------------

Using the starter code provided learners should fill in the empty request handler for the enpoint just covered in the pseudo code


Instructor to code through the solution with guidance from the leanrners
------------------------------------------------------------------------

The instructor now codes through the solution and draws out questions from the learners to ensure they have understood each line of code.


## Example request data

```json
{
  "title": "Metropolis",
  "year": 1927,
  "plot": "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.",
  "genres": [
    "Drama",
    "Sci-Fi"
  ],
  "languages": [
    "German"
  ],
  "writers": [
    "Thea von Harbou (screenplay)",
    "Thea von Harbou (novel)"
  ],
  "poster": "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX677_AL_.jpg",
  "cast": [
    "Alfred Abel",
    "Gustav Frèhlich",
    "Rudolf Klein-Rogge",
    "Fritz Rasp"
  ],
  "directors": [
    "Fritz Lang"
  ],
  "runtime": 153
}
```