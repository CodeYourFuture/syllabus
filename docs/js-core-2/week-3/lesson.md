---
id: lesson
title: JavaScript Core II - 3
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Contents

- [JS in the Browser](#js-in-the-browser)
  - [The DOM](#the-dom)
  - [Access DOM elements](#access-dom-elements)
    - [Preparation for exercises](#preparation-for-exercises)
    - [Exercise (1)](#exercise-1)
  - [Attach events to DOM elements](#attach-events-to-dom-elements)
    - [Exercise (2)](#exercise-2)
    - [Exercise (3)](#exercise-3)
  - [Create DOM elements](#create-dom-elements)
    - [Exercise (4)](#exercise-4)
  - [Manipulate DOM elements](#manipulate-dom-elements)
    - [Exercise (5)](#exercise-5)
  - [PD - Delivery](#pd-delivery)
---

## Learning Objectives

By the end of this lesson trainees should be able to:

- Define what the DOM is and what it does
- Use query selectors to retrieve elements from the DOM
- Use event listeners to respond to events that happen on the DOM
- Create DOM elements using JavaScript and add them to the DOM
- Manipulate DOM elements using JavaScript to change their properties

---

## JS in the Browser

Up until now we've been using `console.log` to see the results of our code running, because it allows us to focus on writing code and seeing the results instantly. But JavaScript was not meant to be run in `console.log`: it was meant to make web pages dynamic.

Lots of websites are powered by JavaScript today, and some (like Facebook) cannot function at all without it: it's become that important to the look and feel of the website.

## The DOM

Your webpages are made up of a bunch of HTML elements, nested within each other (parents and children). But JavaScript doesn't know about any of that.

Thankfully, in JavaScript we have access to this "DOM" object (Document Object Model) which is actually a representation of our webpage that JavaScript can work with.

Here are two examples, HTML and then JavaScript, of how the DOM might look like:

```html
<html>
  <body>
    <h1>Welcome!</h1>
    <p>Hello world!</p>
  </body>
</html>
```

```js
let document = {
  body: {
    h1: "Welcome",
    p: "Hello world!",
  },
};
```

This is how we would represent the document hierarchy above as a tree of nodes:

<img src={require('!file-loader!./tree.png').default}/>

## Access DOM elements

The DOM offers a lot of useful functions we can use to find elements on the page. Here are some we'll be using today:

```js
document.querySelector("#mainHeader");
document.querySelectorAll("p");
```

Both `.querySelector` and `querySelectorAll` accept a CSS selector as an input.
`.querySelector` selects only the first element it finds, `querySelectorAll` selects all elements (it returns a `NodeList`, which you can think of as being similar to an array; it is an ordered sequence of DOM elements which you can loop through like with an array. The difference is that many common array methods like `.map` or `.concat` can't be used on a `NodeList`. To turn a `NodeList` into an array, you can use `Array.from`, e.g. `let elementArray = Array.from(document.querySelectorAll("div"));`).

### Preparation for exercises

:::note Exercise

Let's work on the code provided here:
https://github.com/CodeYourFuture/JavaScript-Core-2-Classwork-Week3

1. Open `1-exercises` project in VS code
2. View your changes by
   - using [vscode-live-server](https://github.com/ritwickdey/vscode-live-server) plugin to get live updates of your changes.
     - Install the plugin
     - Right click on `index.html` and select "Open with Live Server"
   - or just open the `index.html` on your browser and refresh every time you change your code

:::

### Exercise (1)

:::note Exercise

Write JavaScript below that logs:

1. all the "p" element nodes of the document,
   --> should log a list of nodes with a length of 6

2. the first div element node
   --> should log the ".site-header" node

3. the element with id "jumbotron-text"
   --> should log the "#jumbotron-text" node

4. all the "p" elements contained inside the .primary-content element node
   --> should log a list of nodes with a length of 3

:::

## Attach events to DOM elements

Once you retrieve an element using `.querySelector`, you can attach an **event** to it. An event is any action that can be performed on that element. For now, we will just use the **click** event:

```js
let myButton = document.querySelector("#myButton");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Something");
}
```

You will notice in the example that we passed a second argument to `addEventListener`. That second argument is the **function** that we want to invoke when that event has happened.

### Exercise (2)

:::note Exercise

When a user clicks the "ALERT" button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"

The elements returned by `document.querySelector` have the same properties as a normal HTML element: for example, you can get access to their css **styles**.

```js
let myElement = document.querySelector("#myElement");
myElement.style.backgroundColor = "red";
```

:::

### Exercise (3)

:::note Exercise

Write JavaScript below that changes the background colour of the page when the "Change colour" button is clicked.

:::

## Create DOM elements

Using the `document`, you can also create new elements. These elements will not appear until you append them as a child of another element though:

```js
let paragraph = document.createElement("p"); // here we're just creating it, element is not visible yet
myElement.appendChild(paragraph); // now the element is added to our view, but it's empty
```

`document.createElement` accepts as an input any element type. So for example `document.createElement("article")` will create a new article element.

### Exercise (4)

:::note Exercise

When a user clicks the "Add some text" button, a new paragraph should be added below the buttons that says "Read more below."

:::

## Manipulate DOM elements

You can then change the text displayed inside elements using the `innerText` property:

```js
paragraph.innerText = "How are you?"; // now we can see the text displaying on the screen
```

We've been using `document.querySelector` to retrieve a single element.
To retrieve a list of multiple elements (that match a specific class name for example, or a specific tag) we use `document.querySelectorAll`.

```js
//change the background of all the paragraph items on our page
let paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "blue";
}
```

We've learned that `style` and `innerText` are properties of DOM elements. Image tags can also have `width` and `height`.

While it's really easy to change styles directly on elements using the `style` property, it is not usually a good idea to mix JavaScript and CSS (see separation of concerns in the first lesson). To solve this, we can use the `className` property to set the class for an element instead of changing its styles directly:

```js
//before: <div id="myContainer"></div>
let container = document.querySelector("#myContainer");
container.className = "largeBlock";
//after: <div id="myContainer" class="largeBlock"></div>
```

To get the text from an Input field:

```js
let updateTitleBtn = document.querySelector("#updateTitleBtn");

updateTitleBtn.addEventListener("click", function () {
  let inputBox = document.querySelector("#titleInput");
  let title = inputBox.value;

  let titleElement = document.querySelector("#lessonTitle");
  titleElement.innerText = title;
  inputBox.value = title;
});
```

The above waits for click on a button. When the button is clicked, it gets the input box element (`inputBox` variable).
To get the entered text from it, we use the `value` property: `let title = inputBox.value`.

### Exercise (5)

:::note Exercise

When the "Larger links!" button is clicked, the text of all links on the page should increase.

:::

## PD (Delivery)

**Session objective**: This session will explore how to create features, user stories and tasks for a product.

:::note  
Exercise (5 minutes)

**Exercise objective**: To understand the requirements of building a library website.

Let’s assume we have been asked to build a library website, one that would allow you to borrow books. Let’s discuss briefly as a class what would be the questions we would ask in order to have a better understanding of what we have been tasked to build.

:::

:::note
Exercise (15 minutes)

**Exercise objective**: To understand the process of breaking down a product into features.

Let’s assume that we got answers to all our questions about the product. Overall, the goal is to build a website that would have a catalogue of books that can be borrowed by users of the system. In small groups, identify what would be **the main features** you would expect to see in this website? You can refer to the slide #11 from JS1 - Week1 to remind yourselves about the features and user stories.

Discuss in small groups. Group representatives share thoughts with the class.

:::

:::note
Exercise (20 minutes)

**Exercise objective**: To understand the process of breaking down features into user stories.

Now that we have all the features, we need to break them down into user stories. A user story is an informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature will provide value to the customer. In small groups, pick one of the features and break it down into at least **3 user stories**.

Discuss in small groups. Group representatives share thoughts with the class.

:::

:::note
Exercise (20 minutes)

**Exercise objective**: To understand the process of breaking down user stories into tasks and distribute those tasks among team members.

Now that we have user stories, it is time to break them down into tasks. Tasks are used to break down user stories into smaller components that can then be assigned to individual team members. Let’s take a user story and in small groups, complete the following:

- Identify all the tasks that need to be completed in order to deliver value to the user, providing the outcome described in the user story.
- Identify relationships and dependencies between tasks. How does a change in Task A affect other tasks? - Does Task A need to be completed before we can work on Task B?
- Size those tasks taking into account complexity and dependencies.
- Answer this question: when it is time to assign tasks to team members, what would be the criteria you would follow when assigning tasks?

Discuss in small groups. Group representatives share thoughts with the class.

***Answer Key***

This key offers some examples and is not exhaustive.

*Exercise 1*

In this example features could be: a shopping cart, book search, user personalisation, library events banner, etc.

*Exercise 2*

For example, for the shopping cart feature the user stories could be:

As a library user I want to be able to manage items I have included in my shopping cart so by the time I checkout only the books remaining are the ones I want to borrow.
As a library user I want to be able to check out books in my shopping cart so they can be delivered to me.

*Exercise 3*

Examples of tasks for a user story describing the book search functionality could be: Search Box, Text Autocomplete, Database creation and setup.

An example of a dependency between tasks could be not being able to work on Autofill functionality without having the search box and the underlying database ready.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 2" week="Week 3" />
