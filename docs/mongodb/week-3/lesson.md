---
id: lesson
title: MongoDB - 3
sidebar_label: Lesson
---

## Outline

- This session is all about recapping the previous two weeks of MongoDB and also the Node.js API concepts.
- The idea is to have a very hands on session that allows the learners to cement their understanding.
- There may be a lot of confusion between all the different technologies and how they all fit together.
- The lesson is designed to be run in cycles of:
  - Thought experiment (~15 mins)
  - Instructor led pseudo-code (~10 mins)
  - Student led implementation (~30 mins)
  - Intructor led implementation (~10 mins)
- The expectation is that the whole of week 1 and week 2 was not fully completed by this point.

---

## Setup

### Create an atlas account

Atlas is a MongoDB service in the cloud. It's easy to get started and free to use for hobby level projects.

1. Navigate to https://www.mongodb.com/cloud/atlas
1. Click on "Start free"
1. Either "Sign up with Google" or fill out the registration form and "Get started free"
  > **NB**: _if you chose to use Google, you will need to click on "Link My Accounts", then enter a password_

### Create a new cluster

A cluster is a collection of databases that work together to ensure data is continuously backed-up. You can store several databases on a cluster.

1. Click "Build a cluster"
1. Choose "Shared Clusters" (the free one)
1. You will set a settings page, you can leave everything on the default setting, except the region: choose the one closest to you. _In the UK that's Ireland (eu-west-1)_
1. Click "Create cluster". _It will take several minutes to initialise_

### Create a user

In order to connect to your database you will need a user. This is not the same as a user account, but rather a set of credentials you use to access your database programatically.

1. Click "Database Access" on the left hand side panel
1. Click "+ Add new database user" on the right hand side
1. Enter a username and password
    > **NB:** Make a note of these, you will need them shortly
1. Click "Clusters" to return to the main screen
1. Click "Connect" on the main screen
1. Choose "Connect using MongoDB Compass"
1. Copy the connection string, and replace the username and password with the ones you just created
    > **NB:** It should look something like this:
    `mongodb+srv://cyf_user:myawesomepassword@cluster0.cqawy.mongodb.net/test`

### Download Compass

Compass is an app for managing your database. It's useful to help you visualise the data you have stored there.

1. Navigate to https://www.mongodb.com/products/compass
1. Click "Try it now"
1. Click "Download" on the right hand side
1. Once the installer has downloaded, open it and follow your system's normal installation procedure.
1. Open Compass
1. Paste the connection string from Atlas, then click "Connect"

> **NB:** If you are unable to connect you can reset you password in Atlas. Click "Database Access" to find your user, then "Edit" to update their password.

> Don't forget to check you have added your username and password to the connection string

### Create a new database

Now that you are all set up you can create a database using Compass, and add some data

1. Click "Create database"
1. Choose a name for the database, and a name for your first collection
1. Click on the database you just created
1. Click on the collection you just created
1. Click "Add data" > "Insert Document"

> Starting with an empty database will make it easier for to work through the lesson, so once you are comfortable with the interface, you should create a new database.

> Make sure that the first endpoint you tackle is CREATE, otherwise there will be nothing to display!

---

## CRUD Recap

We've covered a lot of ground over the last two modules. You've looked at building APIs with Node, and persisting data using CRUD.

Let's recap everything by building a CRUD API backed by a Mongo database.

Firstly, let's remind ourselves what CRUD means:

- Create
- Read
- Update
- Delete

For each of these actions, let's build out an HTTP request handler in a Node app. We'll go through the following steps for each one:

Thought experiment (15 mins)
------------------

Imagine an app (Netflix, Amazon) is showing you a list of things (movies, products) etc.

Trace the journey of the request:

BROWSER -> REACT -> HTTP -> SERVER -> MONGODB -> SERVER -> HTTP -> REACT -> BROWSER

You can use any method you like to describe each stage: it could be a diagram, flow chart or code snippets if you prefer.

Think about the following:

- How does data get sent between the server and the client?
- How does the Node server communicate with MongoDB?
- What format does the data get transferred in?
- How would React display this data?

Pseudo-code the HTTP request handler (10 mins)
------------------------------------

Sketch out what a HTTP request handler might look like using pseudo-code.

You don't need to worry about the exact syntax, you can always look that up later. Instead just try to think about what steps need to happen to:

- Handle the request
- Retrieve the required data from the server
- Send it back to the client

Think about the following:

- Which HTTP status code should you use?
- What happens if there is no data?
- What happens if something goes wrong?

Code out the HTTP request handler in groups (30 mins)
-------------------------------------------

Using the starter code provided, fill in the empty request handler for the enpoint just covered in the pseudo-code.

Now is the time to look up the syntax for any bits of the pesudo-code that you're unsure of. Don't forget to test your endpoints using Postman.

If you are finding things challenging, don't feel afraid to ask for help. If you feel comfortable with the syntax think about how you can extend the exercise.

You might want to think about:

- Validating the data from the client
- Sending a useful error if validation fails or the data can't be found


Share your solution with the class (10 mins)
----------------------------------

Once you are finished with your endpoint, you can share your code with the class and your instructor. You should have a few minutes to ask any questions or share any intersting solutions you came up with.

Rinse and repeat!
-----------------

Now that you've completed the C of CRUD, repeat the whole process until all the endpoints are completed.