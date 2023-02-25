---
id: lesson
title: Node - 2
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Learning Objectives

By the end of this lesson trainees should be able to:

- Define what each part of CRUD is and what it does
- Process a GET request using Express and Node to retrieve data from memory
- Process a POST request using Express and Node and store data in memory
- Process a DELETE request using Express and Node to remove data from memory
- Install a third party library using `npm`

---

## 1) Presentations

As part of last weeks homework we asked you to prepare a very short presentation on what you learnt last week.

Split into groups of 2-4 people and present what you have learnt. Remember, your whole presentation should be no more than 120 seconds!

## 2) CRUD Continued

So what will we build? we will build a **CRUD** API. CRUD stands for Create, Retrieve, Update, Delete. If you think about it, this is what most applications do:

- Create some "resources"
- Retrieve them (GET them)
- Update them
- Delete them

Below are three in-class exercises which can be used to demonstrate parts of the API workshop below.

## 3) Workshop

You can use this [Express Cheatsheet](https://github.com/nbogie/express-notes/blob/master/express-cheatsheet.md) to help you.

**API** stands for Application Programming Interface.

Read this description of what an API from [How To Geek](https://www.howtogeek.com/343877/what-is-an-api/).

> Think of an API like a menu in a restaurant. The menu provides a list of dishes you can order, along with a description of each dish. When you specify what menu items you want, the restaurant’s kitchen does the work and provides you with some finished dishes. You don’t know exactly how the restaurant prepares that food, and you don’t really need to.
> Similarly, an API lists a bunch of operations that developers can use, along with a description of what they do. The developer doesn’t necessarily need to know how, for example, an operating system builds and presents a “Save As” dialog box. They just need to know that it’s available for use in their app.

An API does not have to be web-based. But in our work, since we are doing web development, we will work only with web based APIs, so you might as well hear the word **Web Service**, and we will communicate with those services using the protocol for Web: **HTTP**.

:::note Checkpoint
Recap what we know about HTTP before continuing.
:::

### Workshop Objective

Our **API** will manage Beyoncé albums:

- Create a new album,
- Retrieve a list of albums or a single album,
- Update an existing album's information
- Delete an album

We will build these endpoints:

- `GET /albums` should return all the albums
- `GET /albums/:albumId` should return a single album (that matches the passed albumId)
- `POST /albums` should save a new album
- `PUT /albums/:albumId` should update the album (that matches the passed albumId)
- `DELETE /albums/:albumId` should delete the album (that matches the passed albumId)

### 3.1) Get All Albums

To get started, let's setup our server so that we can retrieve all of the albums at once

:::note Exercise

1. In `server.js` Add the endpoint for `GET /albums`.

```js
const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});
```

2. Test the endpoint with Postman. `GET /albums` should return a JSON reply with the array we specified.

3. Add another item to the array and test that the `GET /albums` returns three items. (Remember you need to close the server `ctrl+c` and run it again `node server.js`)

:::

### 3.2) Get Album by ID

### 3.2.1) Live Coding

This is an Teacher led exercise which can be used to show how we might retrieve an element by ID using a GET request.

:::note Teacher Led Live Coding

#### Objective

Change a quote API server to allow `GET`ting a quote according to the given ID.

The id should be given in the URL structure like this:

> /quotes/242342

You should use the starting project: [cyf-quotes-id-start](https://glitch.com/~cyf-quotes-ids-start). This is because this project has quotes with IDs.

When you remix the starting project, immediately rename it as your own.

:::

### 3.2.2) Workshop

Sometimes, we do not want to _list_ all the information in one request, maybe we only want to get the information related to a single album. Imagine if we have a page to display the details of one album, we could call the server and get all albums then filter the one we need _client-side_, but would it not be more effective to tell the server to just return the one album we are interested in?

Let us add a new endpoint to return only a single album `GET /albums/:albumId`. In this case, _albumId_ will tell us what album we can return so the call will be something like `GET /albums/242342` and that will return the album with that has _albumId_ 242342.

This endpoint has something different. The endpoint `/albums/:albumId` has a _dynamic_ part, the _albumId_ will vary depending on what the client send. If we call `/albums/424252` then albumId is 424252, if we call `/albums/242342` then we will return the album with albumId 242342 and so on.

How can we achieve that using `express` - `req.params` will have the value of

```js
app.get("/albums/:albumId", function (req, res) {
  // req.params.albumId will match the value in the url after /albums/
  console.log(req.params.albumId);
  // now we can use the value for req.params.albumId to find the album requested
  // how do we "find" something in an array

  // finish the code yourself - it should end with res.send(album) where album is the single album you found  based on the id
});
```

### 3.3) Install Nodemon

It is a bit annoying that we have to _kill_ and _restart_ our server every time we want to test our changes. There is a handy **npm package** that can help us with that task.

`npm install --save-dev nodemon`

Make sure the package is added to your _package.json_, add this line to the script:

```js
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
},
```

now from your terminal, use the command `npm run dev` and that will run the _server_ with `nodemon` which is a package that makes the server listen to code changes and automatically restart.

### 3.4) Add a New Album

#### 3.4.1) Live Coding

This is an Teacher led exercise which can be used to show how we might add an element using an API

:::note Teacher Led Live Coding

#### Objective

Change a quote API server to allow POSTs of new quotes.

The new quotes should be added to your quotes list, which is an array in memory.

You can assume the POSTed quotes are all in the correct JSON format.

The route should use the HTTP method POST and should use the URL:

> /quotes

You should use the starting project: [cyf-quotes-post-start](https://glitch.com/~cyf-quotes-post-start), NOT your own existing quote server. This is because our project has an HTML form for creating new quotes.

When you remix our starting project, immediately rename it.

Then you can visit / and submit the form there, when you are ready to try to submit new quotes!

:::

#### 3.4.2) Workshop

Our analogy with the Restaurant menu is somewhat incomplete.

In a restaurant, we only GET items from the menu. In the world of APIs, we also have the possibility to create items, we can provide _ingredients_ to create a new dish.

In this case, we provide some data (a payload) and we use a different verb **POST** (Create) as opposed to GET.

`POST /albums` should save a new album and return `200` with JSON `{ success: true }` to the user.

```js
// notice .post (not .get)
app.post("/albums", function (req, res) {
  console.log("POST /albums route");
});
```

Let's start by testing using Postman. Do a `POST` request to the endpoint and make sure it prints the console.log message we have added.

:::note Tip
In Postman, change the request `method` to `POST` instead of `GET` and test our endpoint. It should log the message to the terminal but the request will hang because we did not end it, i.e. we did not say `res.send(something)`
:::

So what format does the client send the data with? It is up to us, but since we already are familiar with `json`, let us use it.

In order for our _server-side_ to receive and use the data sent by the client, we will need to install and use a **middleware**.

> Middleware: We will cover middleware in more details in the next class. For now, imagine pieces of code that process a request and pass it to the next middleware until one of them returns a response (with `res.send` for example).

The JSON middleware makes it easy for our route handlers to read JSON data from the request. If the `Content-Type` request header indicates that the request body contains JSON data then the middleware calls `JSON.parse` to convert the request body into a JavaScript data structure.

To register the JSON middleware, add the following to the server code:

```js
app.use(express.json()); // before our routes definition
```

Now we will receive the data as `req.body`.

```js
app.post("/albums", function (req, res) {
  console.log("POST /albums route");
  console.log(req.body);
});
```

:::note Exercise
Use Postman to `POST` this data to `/albums` endpoint.

```json
{
  "albumId": "13",
  "artistName": "Beyoncé",
  "collectionName": "B'Day (Deluxe Edition)",
  "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Music/v4/6c/fc/6a/6cfc6a13-0633-f96b-9d72-cf56774beb4b/source/100x100bb.jpg",
  "releaseDate": "2007-05-29T07:00:00Z",
  "primaryGenreName": "Pop",
  "url": "https://www.youtube.com/embed/RQ9BWndKEgs?rel=0&amp;controls=0&amp;showinfo=0"
}
```

:::

:::note Exercise
Finish the code for the route `POST /albums` to add the album data to the albums list (how to amend to an array?)
:::

### 3.5) Delete an album

#### 3.5.1) Delete Exercise

This is an Teacher led exercise which can be used to show how we might remove an element using an API

:::note Teacher Led Live Coding

#### Objective

Change a quote API server to allow updating a quote according to the given ID.

The id should be given in the URL structure like this:

> /quotes/2

You should use the `delete` HTTP method

You should use this starting project: [cyf-quotes-id-start](https://glitch.com/~cyf-quotes-id-start), NOT your own existing quote server. This is because this project has quotes with IDs.

When you remix the starting project, immediately rename it as your own.

:::

#### 3.5.2) Workshop

Lets look back at our original objectives.

> `DELETE /albums/:albumId` should delete the album (that matches the passed albumId)

This means that `DELETE /albums/2` should delete an album with the id `2` and return `200` with JSON `{ success: true }` to the user.

The code will look like this

```js
// notice .delete
app.delete("/albums/:albumID", function (req, res) {
  console.log("DELETE /albums route");
});
```

Can you work out how to remove an album using this code?

## PD (Diversity and inclusion)

**Session objective:** How to recognise systemic problems and to contribute to a more diverse and inclusive community

[Diversity and inclusion slides](https://docs.google.com/presentation/d/11PpNt-Rsw44FhYMe4JAKg666eRiQHONADQgImN5NW9M/edit#slide=id.gaa71b86f5e_0_0)

:::note Exercise (10 min)

**Exercise objective:** To identify feelings associated with being included in and excluded from a group

Think about a time when you have experienced:
- Being part of a group 
- Being excluded by a group

Discuss as a class how it feels to be included and excluded.

:::

:::note Exercise (15 min)

**Exercise objective:** To think about the existing privileges and discrimination experiences

Discuss as a class:

- Some ways you have privilege
- Some ways you have faced oppression or discrimination

:::

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="Node" week="Week 2" />
