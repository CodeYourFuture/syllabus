---
id: lesson
title: MongoDB - 2
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Outline:

- Review
- Signing up for MongoDB Atlas
- Making a local Express server
- Connecting to a MongoDB server from a local Node server
- Creating and dropping databases and collections in Atlas
- Reading documentation
- BSON types
- Creating documents
- Creating a document in Atlas
- Creating a document with the MongoDB Node Driver
- Updating a document
- Deleting a document

## Review

In the last lesson, we learned

- what a database is,
- what a DBMS is,
- what MongoDB is,
- what a callback function is,
- how to connect to a MongoDB server from a Node server,
- how to get all documents in a collection,
- how to search for documents in a collection, and
- how to get a single document in a collection using its ID.

Now that we know how to read databases, collections, and documents, let's learn how to create, update, and delete them.

## Signing up for MongoDB Atlas

MongoDB Atlas is an online service for hosting a MongoDB database server. Luckily, there is a free version for simple projects like ours. Let's sign up for an account so we can create our own database.

1. Go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas).
2. Click the "Try Free" button at the top of the page.
3. Enter your email address, your name, and a new password, then agree to the terms and click "Get started free".
4. When you see a popup, click the "Build my first cluster" button. It might ask you some questions and give you some tips, but you can skip those.
5. Click the "Create Cluster" button at the bottom of the page.

This actually creates a group of servers called a "cluster". However, it might take a few minutes for the cluster to be ready. While it is being prepared, let's make an Express server to connect to one of the servers in the cluster.

## Making a local Express server

In the last lesson, we made an Express server on Glitch. In this lesson, however, we will make one on our own computer -- in other words, we will make a "local" server.

Running a local server is the way most professional developers work, so it is important for you to learn.

Follow [these instructions for making a node app and installing Express.js](https://expressjs.com/en/starter/installing.html). When prompted, set the "entry point" to be `server.js`. If you miss the chance, you can edit `package.json` to fix this.

Now that we have Express ready, let's start writing our JavaScript. Open your favourite code editor (for example, Visual Studio Code) and create a new file with this:

```js
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", function (request, response) {
  response.send("Hello, world!");
});

app.listen(3000);
```

Save this as `server.js` in your project directory.

The code should look a bit familiar from previous lessons. It imports Express, creates a new Express app, tells Express to return "Hello, world!" when you go to the `/` endpoint, and starts listening for requests on port 3000.

Let's run it. Back in your shell, enter this:

```js
node server.js

```

This starts the Node server that we wrote in `server.js`. When you run a server on your computer, you can usually get to it by going to `localhost` in your browser. However, because we told it to listen to port 3000, we need to go to [`localhost:3000`](http://localhost:3000/). When you go here in your browser, you should see "Hello, world!"

## Connecting to a MongoDB server from a local Node server

We now have a working Node server that uses the Express package. Let's connect it to a server in our new MongoDB cluster.

Add the MongoDB Node Driver package to your project. To do this, stop your server by pressing `ctrl+c`, and run this in the terminal:

```js
npm install mongodb

```

To use the driver to connect to our MongoDB server, we need to finish some more tasks on Atlas. Go back to the Atlas website in your browser, and you should see a "CONNECT" button. Click that, and you should see a new window with two steps: (1) whitelisting IP addresses and (2) creating a MongoDB user.

In step 1, click a button to add a new IP address. A form should appear. Use the IP address `0.0.0.0`, which lets you use the database anywhere, and click the button to add it.

In step 2, enter a new username (for example, `cyf`) and new password that you will not forget (for example, `LetsLearnMongoDB2019`). You will put these in your code, so if you want people to look at your code, do not use a password you use somewhere else! Click the button to create the user, and then click the "Choose a connection method" button.

You should now see three options. Click the second option: "Connect Your Application". This should show you a database URI that you can use to connect to a server in your MongoDB cluster.

Note: you only need to use the part of the URI up to `mongodb.net` (not the `/test?...` part).

Now, let's write some code. Open your `server.js` file again, and add a new line at the top to import the MongoDB driver:

```js
const mongodb = require("mongodb");
```

Also add a line before your endpoints to define the database URI from Atlas, without the `/test?...` part:

```js
const uri = "mongodb+srv://xxxx:xxxx@cluster0-xxxx.mongodb.net";
```

Make sure that you use the real username, password, and address in this string. In the previous lesson, we were using public code on Glitch, so we put this in an environment variable. However, because this is local code and not public, we can put the password in the code for now.

Warning: do not put this code on Glitch or in a Git repository! If you do that, your password will become public, and then anyone can edit your database! (If you really want to make the code public, look into using environment variables.)

With the URI, we can now connect to a database. Let's do that in the endpoint callback function:

```js
app.get("/", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    response.send("It worked!");
    client.close();
  });
});
```

Let's try to run this. Back in the shell, if you are still running your Node server, stop it by pressing `ctrl+c`. You need to run it again to run your new code:

```js
node server.js

```

Once you run this, try reloading `localhost:3000` in your browser, and you should see "It worked!"

## Creating and dropping databases and collections in Atlas

To make our Express server useful, we need some data in our database. Let's learn how to add a database and a collection.

To add a database, click the "COLLECTIONS" button on Atlas. Let's add our own data, so click the "Add my own data" button.

Now, you can enter the names of your first database and collection. Enter whatever you want, but you cannot use spaces or some special characters. Then click the Create button.

After that, you should see your collection (but it does not have any documents yet).

If you ever want to delete a collection, hover over the the name of the collection in the database list, and click the rubbish bin icon to the right. A modal appears, and you just need to type in the name of the collection and click the Drop button to confirm.

When you drop a collection, if your database has nothing in it, the database will just disappear.

If you want to drop a whole database and all its collections and documents at the same time, just follow the same steps for the database: click the rubbish bin next to it, enter the name, and click the Drop button.

Now that we can create collections, we can create some documents. However, before we do that, let's look at a great way to help us understand the details.

## Reading documentation

When you use tech like Node, Express, or MongoDB, you can usually find official notes online that tell you details about how to use it. These are called the "**documentation**" or "docs". Usually, you can find them on the official website.

For MongoDB, you can find the documentation at [`docs.mongodb.com`](https://docs.mongodb.com/). Let's see what it has.

If you go to the MongoDB docs, you can find basic introductions like Getting Started and deeper explanations like the MongoDB Manual. If you want to search for something specific, you can use the search field at the top of the page.

Warning: be careful when reading code in the MongoDB docs, because it is usually not for the MongoDB Node Driver! Typically, when you see code, it will be for what is called the "Mongo Shell", which is another way to access a database. It looks similar to the kind of code we have been writing, but if you use it on a Node server, you might get confusing errors.

Let's find the docs just for the MongoDB Node Driver. On the left side bar, click "MongoDB Drivers". This takes you to a page with drivers for different coding languages. Click "Node.js", which will take you to the MongoDB Node Driver page. A very helpful link here is "Usage Guide".

Another very helpful link is "API Reference". Open this in a new tab. We will come back to it later.

In the next section, we will learn about **BSON**, the JSON-like format used for MongoDB documents. Before we start, click the "Server" tab at the top of the page, try searching for "BSON" in the docs, and then open the BSON Types page.

## BSON Types

Many coding languages have a list of data types. For example, in JavaScript, there is

- Number,
- String,
- Boolean (`true` or `false`),
- `null`,
- `undefined`, and
- Object.

In BSON (which stands for "Binary JSON"), the data types are different and a bit more complicated. Here are some of them:

- 32-bit integer -- for whole numbers with no decimal points (examples: `0`, `1`, `183941`, `-42`)
- Double -- for number with decimal points (examples: `0.1`, `1.0`, `-31.39585`)
- String
- Boolean
- Null
- Object
- Array
- ObjectId -- the `ObjectId`s you learned about in the last lesson
- Date -- like JavaScript `Date`s

You can find all of them and more information about them on that MongoDB docs page.

We will use some of these BSON types when we create our first documents.

## Creating documents

Let's learn a couple of ways to create MongoDB documents.

### Creating a document in Atlas

Now, we are finally ready to make our first database documents! Let's open Atlas again and create a new database: `cinema`. Let's also create a new collection called `films`.

To create a document in Atlas, click the "INSERT DOCUMENT" button on the right side of the page. A popup will appear with an `ObjectId` already made for us. Now, we can add the rest of the fields.

To start, let's add a field called `title` for our film names. To the right of the field, you can see that there is already a data type selected: String. This is perfect for a title, so let's just type the name of a film as the field value. Use one of your favourite films! Then, press Enter.

Let's try another field with another data type. Add a field named `year`, and select the type "Int32" (for 32-bit integer) so we can add numbers without decimal points. As the value, put the year the film was released. (Don't know the year? Use [IMDb](https://imdb.com/) to find out.)

Now, let's try adding a new data type: Array. Select Array from the drop-down list, and give it the name `actors`. You should see the index `0` appear below it. Here, you can enter the name of an actor in the film. When you press Enter, you can add even more.

When you have entered a few actors, click the Insert button to add the document. Now, you can see it inside of your collection.

That is how you can add a document easily with MongoDB Atlas.

#### Exercise 1

:::note Exercise

Try adding two new films to your database, using the Atlas web interface. Give each of them a title, year, and a few actors.

:::

### Creating a document with the MongoDB Node Driver

When you build an app, you might also want to add documents from your server. This is how you can add a single document:

```js
const doc = {
  // ...
};

collection.insertOne(doc, function (error, result) {
  // ...
});
```

Here, you can just make a normal object that will convert to JSON, and MongoDB will automatically convert the data types to BSON. Also, if you do not include the `_id` field, MongoDB will automatically add one for you.

Notice that the callback function for `insertOne` has a `result` argument. This is an object that has some useful information about what you inserted into the collection. One useful property is `result.ops`, which is an array with all the documents you just created, including the automatic `_id`.

Let's try adding an endpoint for creating a film to our code. Open up your code editor again, and add this new endpoint:

```js
app.post("/films", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("cinema");
    const collection = db.collection("films");

    const film = {
      title: "Princess Mononoke",
      year: 1997,
      actors: ["Billy Crudup", "Billy Bob Thorton", "Claire Danes"],
    };

    collection.insertOne(film, function (error, result) {
      response.send(error || result.ops[0]);
      client.close();
    });
  });
});
```

Here, when the user sends a `POST` request to `/films`, the server creates a new film document with the title "Princess Mononoke" and responds with the inserted document, including the new `_id` field.

To try it, restart your server first: go to your terminal shell, press `ctrl+c` to stop the server, press the `up` key to go to your previous command, and then press `enter`. Now, try sending a `POST` request to `localhost:3000/films` with Postman, and then check your collection on Atlas.

#### Exercise 2

:::note Exercise

Update the new endpoint to take query parameters `title`, `year`, and `actors` and create and return a new film with those fields and values. Make sure that only those fields are added. If a query parameter is missing, return a `400` error. Make sure that the year is a number in the database (not a string). Let the actors be separated by commas.

For example, sending a `POST` request to `/films?title=Ex Machina&year=2014&actors=Domhnall Gleeson,Oscar Isaac,Alicia Vikander` should create a new film document in the database like this:

```js
{
  "_id": "5d057f95243295255b98b6a0",
  "title": "Ex Machina",
  "year": 2014,
  "actors": ["Domhnall Gleeson", "Oscar Isaac", "Alicia Vikander"]
}

```

(Hint: you can turn a string like `a,b,c` into an array like `['a', 'b', 'c']` with `'a,b,c'.split(',')`.)

:::

## Updating a document

To update a single document, you can use `findOneAndUpdate` with a `$set` operator like this:

```js
const searchObject = {
  // ...
};

const updateObject = {
  $set: {
    // ...
  },
};

const options = {
  // ...
};

collection.findOneAndUpdate(
  searchObject,
  updateObject,
  options,
  function (error, result) {
    // ...
  }
);
```

This will update the first document that matches `searchObject` with the fields in `updateObject` using some `options`.

There are several options you can use. The one that we will use in this lesson is `returnOriginal`. If your options include `returnOriginal: false`, then you can get the updated document (not the original one) from `result`.

However, `result` here is different than the one for `insertOne`. Let's investigate.

#### Updating a document - investigating findOneAndUpdate's `result` in the documentation

To see what this is, let's go to the [API Reference](https://mongodb.github.io/node-mongodb-native/3.5/api/) tab we opened earlier.

On this page, on the left side bar, we can see many objects we can use from the `mongodb` package. We want to find information about the `findOneAndUpdate` function, which is on a `Collection`, so let's click the "Collection" link. This opens many properties that a `Collection` has, including its methods (functions). Find and click the link for `findOneAndUpdate`.

Here, we can see description of the function and its arguments. For example, you can see a list of options we can use. We can also see a column with the arguments types. We want to see what we can do with the `result` argument of the callback function, so click the type for `callback`: "[Collection~findAndModifyCallback](https://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#~findAndModifyCallback)".

Now, we can see the description of what our callback function and its arguments should be. Click on the type of `result` so we can find out more about it: "[Collection~findAndModifyWriteOpResult](https://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#~findAndModifyWriteOpResult)".

Finally, we can see the properties of `result`. Notice the first property, `value`, which will be our updated document. We can use this to return the updated document to the user.

Note: at the time of writing this lesson, the docs have some problems. For example, the description of the `value` property says that it is from the `findAndModify` command, but it is really from the `findAndUpdateOne` command for us. Mistakes like these are not uncommon in documentation. (If you are stuck on something, and docs do not help, a good place to ask for help is [Stack Overflow](https://stackoverflow.com/).)

#### Updating a document - back to the code...

Now, we know how to use `result`. For example, we can do this:

```js
const searchObject = { title: "Princess Mononoke" };

const updateObject = {
  $set: {
    year: 2000,
  },
};

const options = { returnOriginal: false };

collection.findOneAndUpdate(
  searchObject,
  updateObject,
  options,
  function (error, result) {
    response.send(error || result.value);
    client.close();
  }
);
```

Here, we make a search object for a film whose title is "Princess Mononoke". We also make an update object to set the film's year to 2000. We also set some options to include the updated film in `result` (not the original film, whose `year` was `1997`). We then pass these to `collection.findOneAndUpdate` with a callback function. After the Node Driver finds the first film with that matches the search object and updates it with the update object, it runs the callback function, which responds with the new film document (or an error) and closes the client.

Let's try it in our code. Add a new endpoint like this:

```js
app.put("/films", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("cinema");
    const collection = db.collection("films");

    const searchObject = { title: "Princess Mononoke" };

    const updateObject = {
      $set: {
        year: 2000,
      },
    };

    const options = { returnOriginal: false };

    collection.findOneAndUpdate(
      searchObject,
      updateObject,
      options,
      function (error, result) {
        response.send(error || result.value);
        client.close();
      }
    );
  });
});
```

Now, when we make a `PUT` request to `/films`, the server changes the year of Princess Mononoke to 2000, and it returns the film.

To try it, restart your server again (in the terminal: `ctrl+c`, `up`, `enter`) and make a `PUT` request to `localhost:3000/films` in Postman.

#### Exercise 3

:::note Exercise

Change the new endpoint to `/films/:id`, and make it take a JSON object body and replace the document that has that `id`.

If the `id` is not a valid `ObjectId` string, return a `400` status code.

Allow only the properties `_id`, `title`, `year`, and `actors`. Do not allow objects with missing properties. Only allow the correct data type for each property. Do not allow the `_id` to be changed. If the JSON body is not allowed, return a `422` status code.

If no film has that `id`, return a `404` status code.

If the update is successful, return the updated document.

For example, if there is a film with `_id: ObjectId("5d057f95243295255b98b6a0")`, then sending a `PUT` request to `/films/5d057f95243295255b98b6a0` should update that film with the JSON body.

Hint: use this function to check if the request body is allowed.

```js
/** Given `request.params` and `request.body`, check if the `PUT` request body is allowed. */
function getPutBodyIsAllowed(requestParams, requestBody) {
  const fieldNames = Object.keys(requestBody);
  const allowedFieldNames = ["_id", "title", "year", "actors"];

  return (
    fieldNames.length === allowedFieldNames.length &&
    fieldNames.every((name) => allowedFieldNames.includes(name)) &&
    requestParams.id === requestBody._id &&
    typeof requestBody.title === "string" &&
    typeof requestBody.year === "number" &&
    Array.isArray(requestBody.actors) &&
    requestBody.actors.every((actor) => typeof actor === "string")
  );
}
```

:::

## Deleting a document

To delete a single document, you can use `collection.deleteOne` like this:

```js
const searchObject = {
  // ...
};

collection.deleteOne(searchObject, function (error, result) {
  // ...
});
```

This will delete the first object that matches the fields in `searchObject`.

Here, `result` is also different than before. One property we will use is `result.deletedCount`, which should be `1` if a document was deleted.

Question: what status code should we give if we delete something successfully? When we call `response.send()`, the code will be `200` by default. However, `200` actually means that the response will should have some data. When we delete a film, though, we are removing the data for that film, so we do not need to return it. The status code for success but no data is `204`. (You can learn more about HTTP status codes [here](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).)

Let's see an example of `deleteOne` and a `204` response:

```js
const searchObject = { title: "Princess Mononoke" };

collection.deleteOne(searchObject, function (error, result) {
  if (error) {
    response.status(500).send(error);
  } else if (result.deletedCount) {
    response.sendStatus(204);
  } else {
    response.sendStatus(404);
  }
});
```

This tries to delete the first document with the title "Princess Mononoke". If an error happens, it returns a `500` status code and the error in the response body. Otherwise, if something was deleted, it returns an empty `204` response. If something was *not* deleted, that means that MongoDB could not find any match, so it returns an empty `404` response.

Let's put this in a new endpoint of our code:

```js
app.delete("/films/:title", function (request, response) {
  const client = new mongodb.MongoClient(uri);

  client.connect(function () {
    const db = client.db("cinema");
    const collection = db.collection("films");

    const searchObject = { title: request.params.title };

    collection.deleteOne(searchObject, function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else if (result.deletedCount) {
        response.sendStatus(204);
      } else {
        response.sendStatus(404);
      }

      client.close();
    });
  });
});
```

When a user sends a `DELETE` request to `/films/Princess Mononoke`, for example, it should either (1) delete the first film called "Princess Mononoke" if it exists and return `204` (2) just return `404` if it does not exist.

To try it, restart your server, find a film title in your database, and send a `DELETE` request to `/films/<put the film title here>` in Postman.

#### Exercise 4

:::note Exercise

Change the new endpoint to `/films/:id`. Make it delete only the object with the given `id`.

:::

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="MongoDB" week="Week 2" />
