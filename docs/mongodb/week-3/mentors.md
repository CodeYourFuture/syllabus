---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## Presentations

## Resources

- [Example Thought experiment](./resources/Full-stack.CRUD.flow.-.Neill.pdf)
- [Full-stack diagram example](./resources/Full-stack.CRUD.flow.png)

## Notes

### Setup

Learners should create a database for this session, they should have a database user that can connect to this database. Students should be able to connect to this database with Compass.

You might want to do this as a homework in advance, but either way you should allow time to ensure everyone is set up correctly at the start of the session.

You'll probably find it easier to start with an empty database (which will save time seeding data), and make sure you begin with the CREATE route.

### Thought experiment

Something that learners might need prompting with is how JSON is used as the "universal language" between frontend and backend.

### Request handler pseudo-code

```js
// get collection (movies)
// get data from request.body (NOT the query...)
// collection.insertOne(data, function(error, result))
// if everything is not ok -> send error response (500)
// if everything is ok -> send returned record (a bit tricky to find it...)
```

### Starter code

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

### Example request data

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