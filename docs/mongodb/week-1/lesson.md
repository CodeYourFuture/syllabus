---
id: lesson
title: MongoDB - 1
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Outline

- Before you start
- What is a database?
- Database management systems
- MongoDB
- Review of callback functions
- Connecting to a database from an Express server
- Getting all documents in a collection
- Searching for documents in a collection
  - Getting documents with a field value
  - Getting documents with multiple field values
- IDs
- Getting one document in a collection
- Optional: search operations
  - `$or`
  - `$ne`, `$gt`, `$gte`, `$lt`, `$lte`

## Before you start

Before you arrive at class you **must** have completed the following setup work.

[Node Preparation](../preparation)

_If you are a teacher reading this, please check the [Instructor Notes](./instructors)_

## What is a database?

A database is **an organised collection of data**. Example: the [Internet Movie Database (IMDb)](https://www.imdb.com/) is an organised collection of information about films. You can even say that a few simple files are a kind of database.

However, when people people talk about website databases, they are often really talking about *database management systems*.

## Database management systems

A database management system (DBMS) is **a kind of software for creating, managing, and using databases**. DBMSs are good for keeping data even if you restart the server. They are extra helpful for large amounts of data, because they can let us

- get and change data quickly,
- use a database from many computers at the same time,
- and more.

## MongoDB

In this module, you will learn to use a DBMS named "MongoDB Server" -- usually just called "MongoDB" (or "Mongo"). MongoDB stores data in a format similar to JSON (but not exactly the same). It also lets you use JavaScript to access the data.

MongoDB is fairly popular, but it is not *the most* popular DBMS. More popular DBMSs use a coding language called "SQL" and store data in tables. You will learn MongoDB, though, so that you do not need to learn a new language or data format.

With MongoDB, the JSON-like objects are called "**documents**". These documents are put in named groups called "**collections**". Each database in MongoDB is a named group of collections.

![Database with collections and documents](./assets/database.png)

For example, in this lesson, we will use a database called `music`. In this database, there is one collection: `tracks`. The collection has documents like this:

```js
{
  "_id": ObjectId("5cf2eb7d1c9d4400006fca92"),
  "title": "Genesis",
  "artist": "Justice",
  "album": "Cross",
  "year": 2007
}

```

(You might notice the `_id` field has "`ObjectId`", which does not work in JSON. We will learn about this later.)

## Review of callback functions

The typical way to use MongoDB with a Node server uses JavaScript functions called "callback functions". A callback function is **a function that (1) you give to another function and (2) the other function can run**.

For example, there is a built-in function called `setTimeout`. This function takes two arguments: (1) a callback function and (2) a number of milliseconds. It then runs the callback function after it waits that number of milliseconds.

```js
function sayHello() {
  console.log("Hello!");
}

setTimeout(sayHello, 1000);
```

Here, the callback function is `sayHello`. This code will show the message `Hello!` in the console after one second (1000 milliseconds).

Another way to write it is like this:

```js
setTimeout(function () {
  console.log("Hello!");
}, 1000);
```

Here, we give an unnamed callback function to `setTimeout`. It will do the same thing: show `Hello!` after one second.

If we want, we can also put callback functions inside of other callback functions:

```js
setTimeout(function () {
  console.log("Hello!");

  setTimeout(function () {
    console.log("Goodbye!");
  }, 1000);
}, 1000);
```

This will show `Hello!` after one second and then show `Goodbye!` after *another* second.

We can even put *another* callback function inside of that callback function:

```js
setTimeout(function () {
  console.log("Hello!");

  setTimeout(function () {
    console.log("Goodbye!");

    setTimeout(function () {
      console.log("Hello again!");
    }, 1000);
  }, 1000);
}, 1000);
```

This will show `Hello!` after one second, `Goodbye!` after another second, and then `Hello again!` after another second.

These nested callback functions can be confusing, but they are important to understand before continuing.

#### Exercise 1

:::note Exercise

Look at this code:

```js
function getString() {
  return "foobar";
}

function showString() {
  const string = getString();
  console.log(string);
}

setTimeout(showString, 1000);
```

This should print the string `'foobar'` after one second.

Which is the callback function?

- (a) `getString`
- (b) `showString`
- (c) `setTimeout`

:::

#### Exercise 2

:::note Exercise

Rewrite the code in the previous exercise so that there are no new function names.

:::

#### Exercise 3

:::note Exercise

Write a new function `sayHiAndRun(callback)` that takes a callback function, prints `Hi!`, and then runs the callback function.

:::

#### Exercise 4

:::note Exercise

Which other functions that you learned in CYF lessons take a callback function as an argument?

:::

## Connecting to a database from an Express server

In the rest of this lesson, we will use an Express server on Glitch that connects to a MongoDB server.

Let's start by remixing this Glitch web app: https://glitch.com/~cyf-db-lesson-1

After you do that, take a look at the file `server.js`. Some of this should look familiar to you from previous lessons. However, there is some new code, such as this line near the top:

```js
const mongodb = require("mongodb");
```

This imports what is called the "MongoDB Node Driver", which is just some JavaScript that lets you use MongoDB in a Node server. Here is another new line:

```js
const uri = process.env.DATABASE_URI;
```

In Node, `process.env` holds what are called "environment variables". These are variables that are usually stored outside of the code. They are often used for secret values, such as passwords. On Glitch, you put them in the `.env` file. Here, other people can see your environment variable names, but *only you* can see the values. Click on the `.env` file to see it for yourself.

In this case, the variable is a Uniform Resource Identifier (URI). A URI is like a URL, but instead of `http://` or `https://`, it can have other things. It can also include a user name and password. For this lesson, put this in your `.env` file:

```js
DATABASE_URI=mongodb+srv://cyf:LetsLearnMongoDB2019@cluster0-cxacx.mongodb.net

```

Here, we use `mongodb+srv` instead of `http` to connect to a MongoDB server. We also add a user name, `cyf`, and a password, `LetsLearnMongoDB2019`. Finally, we have the address of the server, which is already hosted somewhere online.

If you go back to `server.js`, you can also see these lines:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    response.send("Hello, world!");
    client.close();
  });
});
```

Here, we see some callback functions. We give one callback function to `app.get`, and it runs when the user goes to the `/` endpoint. Next, we see how to make what is called a Mongo "client": a JavaScript object that we use to connect to the database server using the URI. To connect, we call `client.connect` and give it another callback function that runs after it finishes connecting. Here, we then give the response `Hello, world!` and then close the client.

Right now, our code connects to the database server, but it does not do anything with any database. Let's instead start using the database called `music`. We can get the database like this:

```js
const db = client.db("music");
```

Let's put this inside of our endpoint and see if it works:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("music");
    response.send("It worked!");
    client.close();
  });
});
```

If you click "Show" on Glitch and pick an option, you should now see "It worked!"

Next, let's get documents from the database.

## Getting all documents in a collection

To get the documents, we must first get a collection. Remember that a collection is just a bunch of documents.

In our database, there is already a collection called `tracks`, which has documents for musical recordings. We can get it like this:

```js
const collection = db.collection("tracks");
```

Now, we can use the collection to get the documents. We can do this with the `collection.find` function, which searches for documents. Let's just get *all* documents, so we do not need to give any search arguments to `find`:

```js
collection.find();
```

This code does not actually give us the tracks yet. Instead, it gives us what is called a "cursor": an object that *points* to results in the database. To get the track documents, we can call `toArray` on the cursor like this:

```js
collection.find().toArray(function (error, tracks) {
  // You can do something with the tracks here.
});
```

Notice that we give another callback function, which runs when the cursor finishes making an array. Notice also that the first argument in the callback function is `error`: if there is a problem getting the array, this will have an error object. Otherwise, it will be `null`, and then can use `tracks`.

Let's add this to our code and tell the server to respond with either the error (if there is one) or the tracks:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("music");
    const collection = db.collection("tracks");

    collection.find().toArray(function (error, tracks) {
      response.send(error || tracks);
      client.close();
    });
  });
});
```

When the page refreshes, you should see JSON text for some tracks like this (without the spaces):

```js
[
  {
    _id: "5cf2eb7d1c9d4400006fca92",
    title: "Genesis",
    artist: "Justice",
    album: "Cross",
    year: 2007,
  },
  {
    _id: "5cf6d1bf1c9d4400007568a2",
    title: "Head/Off",
    artist: "Sebastian",
    album: "Ross Ross Ross",
    year: 2006,
  },
  {
    _id: "5cf972f71c9d4400007dc0a4",
    title: "Flat Beat",
    artist: "Mr Oizo",
    album: "Flat Beat",
    year: 1999,
  },
  {
    _id: "5cf973571c9d4400007dc0a5",
    title: "Safe and Sound",
    artist: "Justice",
    album: "Woman",
    year: 2016,
  },
  {
    _id: "5cf973bf1c9d44000067167c",
    title: "Greel",
    artist: "Sebastian",
    album: "Ed Rec Vol. 2",
    year: 2007,
  },
];
```

We told Express to respond with an array, and Express automatically turned it into JSON text. Notice that the value for `_id` is a string, but remember from earlier that it was something like `ObjectId("5cf2eb7d1c9d4400006fca92")`. What happened? The `ObjectId` object gets translated into a string whenever you turn it into JSON text.

#### Exercise 5

:::note Exercise

Make a new Express endpoint on the server for `/books`. There is another database on the MongoDB server named `literature` and a collection named `books`. Connect to that collection on this endpoint and return all the documents. How many of them are there?

:::

## Searching for documents in a collection

Let's now learn how to get only documents that match some details.

### Getting documents with a field value

To get all documents with a field that has a certain value, you can use the same `collection.find` function, but you give an object with the field and value you want.

For example, if we want all tracks with `"artist": "Justice"`, we can do this:

```js
const searchObject = { artist: "Justice" };
collection.find(searchObject);
```

Let's put this in our code:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("music");
    const collection = db.collection("tracks");

    const searchObject = { artist: "Justice" };

    collection.find(searchObject).toArray(function (error, tracks) {
      response.send(error || tracks);
      client.close();
    });
  });
});
```

Now, when the user goes to `/`, they will get only the tracks by Justice.

#### Exercise 6

:::note Exercise

Make a new endpoint for `/tracks/search`. When a user requests it with the query parameter `artist`, return only the tracks with that query parameter's value. For example, if you go to `/tracks/search?artist=Sebastian`, it should show only the tracks by Sebastian.

:::

### Getting documents with multiple field values

To get all document with *multiple* field values, you can just add each field and value to your search object.

For example, if we want all tracks with both `"artist": "Justice"` *and* `"year": 2007`, we can just do this:

```js
const searchObject = { artist: "Justice", year: 2007 };
collection.find(searchObject);
```

Let's put this in our code:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("music");
    const collection = db.collection("tracks");

    const searchObject = { artist: "Justice", year: 2007 };

    collection.find(searchObject).toArray(function (error, tracks) {
      response.send(error || tracks);
      client.close();
    });
  });
});
```

Now, the user will only get only the tracks by Justice from the year 2007.

#### Exercise 7

:::note Exercise

Update your endpoint `/tracks/search` so that it works with the query parameter `year`, too. For example, if you go to `/tracks/search?artist=Sebastian&year=2006`, it should show only the tracks by Sebastian from the year 2006.

:::

#### Exercise 8

:::note Exercise

Update the `/tracks/search` endpoint so that it works with any combination of the query parameters `title`, `artist`, `album`, and `year`. For example, if you go to `/tracks/search?artist=Sebastian&album=Total`, it should show only the track by Sebastian on the album *Total*.

:::

## IDs

An ID is an identifier: something that is different for every item in a group. From the last module, you might remember seeing ID properties like `id: 0`, `id: 1`, `id: 2`, and so on. However, by default, MongoDB uses fields called `_id` with special IDs called `ObjectId`s, which you saw above.

`ObjectId`s have a value made with a number system called "hexadecimal". Hexadecimal can be represented by a string of the numbers zero to nine and the letters "a" to "f". For `ObjectId`s, these strings all have 24 characters. (If you are curious, you can learn more about hexadecimal [here](https://en.wikipedia.org/wiki/Hexadecimal) and `ObjectId`s [here](https://docs.mongodb.com/manual/reference/method/ObjectId/).)

To make an object ID, you can type `new mongodb.ObjectID(string)` where `string` is the 24-character hexadecimal string.

For example, if we want to make an `ObjectId` with the string `'5cf2eb7d1c9d4400006fca92'`, we can do this:

```js
const string = "5cf2eb7d1c9d4400006fca92";
const id = new mongodb.ObjectID(string);
```

Here, we assign the `ObjectId` to `id`.

## Getting one document in a collection

To get only one document in a collection, you can pass a search object to `collection.findOne`.

For example, if you want to get only one track with the artist Justice, you can do this:

```js
const searchObject = { artist: "Justice" };

collection.findOne(searchObject, function (error, track) {
  // You can do something with the track here.
});
```

Notice that you give a callback function as the second argument to `findOne`.

If you want to get the document with the `ObjectId` with the string `'5cf2eb7d1c9d4400006fca92'`, you can do this:

```js
const string = "5cf2eb7d1c9d4400006fca92";
const id = new mongodb.ObjectID(string);
const searchObject = { _id: id };

collection.findOne(searchObject, function (error, track) {
  // ...
});
```

Let's try this in our code:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("music");
    const collection = db.collection("tracks");

    const string = "5cf2eb7d1c9d4400006fca92";
    const id = new mongodb.ObjectID(string);
    const searchObject = { _id: id };

    collection.findOne(searchObject, function (error, track) {
      response.send(error || track);
      client.close();
    });
  });
});
```

Now, we should only get the one track with that ID (not an array).

#### Exercise 9

:::note Exercise

Add an endpoint `/tracks/:id` that returns only the track with the given ID. For example, if you go to `/tracks/5cf2eb7d1c9d4400006fca92`, you should get only the track with the ID `5cf2eb7d1c9d4400006fca92`. Make sure that it does not return an array. Make sure that `/tracks/search` still works.

:::

#### Exercise 10

:::note Exercise

What happens when you give a 24-character ID that does not exist in the database? For example, try going to `/tracks/0123456789abcdef01234567`. Update the endpoint so that it returns a `404` status when this happens.

:::

#### Exercise 11

:::note Exercise

What happens when you try to give an ID that is not 24 characters long or has non-hexadecimal characters? For example, try going to `/tracks/foobar`. Update the `/tracks/:id` endpoint so that it returns a `400` status when there is that kind of error.

:::

## Optional: search operations

### `$or`

What if we want to get tracks with the artist Justice *or* Sebastian? We have to check for either `"artist": "Justice"` *or* `"artist": "Sebastian"`.

To get all documents with any of multiple field values, you can use the special `$or` key in your search object with an array value of other search objects.

If we want all tracks by Justice or Sebastian, we can do this:

```js
const searchObject = {
  $or: [{ artist: "Justice" }, { artist: "Sebastian" }],
};

collection.find(searchObject);
```

Let's put this in our code:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("music");
    const collection = db.collection("tracks");

    const searchObject = {
      $or: [{ artist: "Justice" }, { artist: "Sebastian" }],
    };

    collection.find(searchObject).toArray(function (error, tracks) {
      response.send(error || tracks);
      client.close();
    });
  });
});
```

Now, when the user goes to `/`, they should only tracks by Justice and tracks by Sebastian.

What if we want

1. tracks by Justice from 2007 and
2. tracks by Sebastian from 2006?

Here, we can just update our search objects like this:

```js
const searchObject = {
  $or: [
    { artist: "Justice", year: 2007 },
    { artist: "Sebastian", year: 2006 },
  ],
};

collection.find(searchObject);
```

Let's put this in our code:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("music");
    const collection = db.collection("tracks");

    const searchObject = {
      $or: [
        { artist: "Justice", year: 2007 },
        { artist: "Sebastian", year: 2006 },
      ],
    };

    collection.find(searchObject).toArray(function (error, tracks) {
      response.send(error || tracks);
      client.close();
    });
  });
});
```

Now, the user will get all tracks whose artists is either Justice or Sebastian.

### `$ne`, `$gt`, `$gte`, `$lt`, `$lte`

So far, we have searched for documents with field values equal to something. However, we also have more options.

If you want to get documents with field values *not equal* to something, you can a special field value object with the `$ne` key and the value that you do not want.

For example, if you want to get all tracks whose artist is not Justice, you can do this:

```js
const searchObject = {
  artist: {
    $ne: "Justice",
  },
};

collection.find(searchObject);
```

Let's try this in our code:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("music");
    const collection = db.collection("tracks");

    const searchObject = {
      artist: {
        $ne: "Justice",
      },
    };

    collection.find(searchObject).toArray(function (error, tracks) {
      response.send(error || tracks);
      client.close();
    });
  });
});
```

Now, when you visit the page, you should see all tracks whose artist is not Justice.

You can also search for documents with a field value *greater than* something. To do this, you can do the same thing, except you use the `$gt` key.

For example, to get tracks released after 2006, you can do this:

```js
const searchObject = {
  year: {
    $gt: 2006,
  },
};

collection.find(searchObject);
```

Let's try this in our code, too:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("music");
    const collection = db.collection("tracks");

    const searchObject = {
      year: {
        $gt: 2006,
      },
    };

    collection.find(searchObject).toArray(function (error, tracks) {
      response.send(error || tracks);
      client.close();
    });
  });
});
```

Now, we should only get tracks from 2007 or later.

If you want to also include tracks from 2006, you could use `$gte` instead:

```js
const searchObject = {
  year: {
    $gte: 2006,
  },
};

collection.find(searchObject);
```

This would get tracks from a year *greater than or equal to* 2006.

Following this pattern, you can also use `$lt` for field values *less than* something, and you can use `$lte` for field values *less than or equal to* something.

#### Exercise 12

:::note Exercise

Add an endpoint `/tracks/new` that returns only the tracks released after 2010.

:::

#### Exercise 13

:::note Exercise

Add an endpoint `/tracks/old` that returns only the tracks released before 2000.

:::

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="MongoDB" week="Week 1" />
