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


## Setup

Learners should have already created an [Atlas account](https://www.mongodb.com/cloud/atlas), have [Compass](https://www.mongodb.com/products/compass) installed. If not you will need to allow time for them to get set up.

<!--
Update this to be a more prescriptive set of instructions that take the students through the step steps
-->


Starting with an empty database will make it easier for you to get started. You should ensure that the first endpoint you tackle is CREATE, otherwise there will be nothing to display!

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