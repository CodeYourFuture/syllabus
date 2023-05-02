---
id: lesson
title: React - Week 1
sidebar_label: Lesson
---

<!-- Docusaurus allows embedding React components via MDX -->
<!-- https://v2.docusaurus.io/docs/markdown-features#embedding-react-components-with-mdx -->

import Feedback from "@theme/Feedback";
import { ExerciseDDemo } from './demos/ExerciseD.js'
import { ExerciseEDemo } from './demos/ExerciseE.js'
import { ExerciseGDemo } from './demos/ExerciseG.js'

---

See the [Learning Objectives](./learning-objectives) for this lesson.

---

## Before you start

Before you arrive at class you **must** have completed the following setup work.

[React Preparation](../prep)

_If you are a teacher reading this, please check the [Instructor Notes](./instructors)_

## What is React?

React is a JavaScript library created by Facebook. It is used for making complex, interactive user interfaces. It has become very popular in the last 5 years.

Why has it become so popular?

- It is fast and efficient
- It is easy to understand & less verbose than the "vanilla" JS API
- It helps separate functionality into small, understandable pieces

## What is a component?

React heavily relies on a concept called "components". Components are like small Lego blocks for designing and developing user interfaces (UI). They can be stuck together in different ways to create new UI.

Let's have a look at an example: the GitHub header. What are the logical "pieces" of UI? What could be a component?

<img src={require('!file-loader!../assets/components.png').default}/>

Here we've highlighted some elements that could be components:

<img src={require('!file-loader!../assets/components-highlighted.png').default}/>

### Component tips

There are no hard & fast rules for making components. UIs can be split up into components in many different ways, requiring judgement based on your context.

- Components should follow the Single Responsibility Principle
  - Each component should only have 1 "responsibility"
  - Should only do 1 thing
- Components should have good, explicit names
  - This helps you to remember what the component's job is

#### Exercise A (estimate: 15 min)

:::note Exercise

1. Look at the user interface below:

![Twitter homepage](../assets/twitter-components-exercise.png)

2. Draw boxes around the components and give them names. Compare with the example components shown in the second image.

:::

## Rendering with React

Remember how annoying it was to manage the DOM yourself in [our previous lesson](/js-core-2/week-2/lesson)? The "vanilla" JavaScript APIs for updating the DOM are quite long and difficult to remember. React makes this easier by manipulating each DOM element itself, instead of you doing it manually. You give React a "description" of the DOM that you want and it will update the DOM for you. React _abstracts_ away the management of the DOM.

Let's take a look at an example. We are going to walk through how to render a `<div>` with the text "Hello World" within it.

How we could do this using "vanilla" JS? ([interactive version](https://jsbin.com/zexiyulavu/edit?html,output)):

```js
let divNode = document.createElement("div");
divNode.innerText = "Hello World";
```

Now convert to using React ([interactive version](https://jsbin.com/jagugot/edit?html,output)):

```js
const element = React.createElement("div", {
  children: "Hello World",
});
```

## JSX

React is already helping us a bit by cleaning up some of the verbose vanilla JS APIs. However in a typical React application you would still use a _lot_ of the `React.createElement` function. To improve the developer experience the React team developed **JSX**.

JSX is a syntax _sugar_ that looks like HTML, but is actually converts to the `React.createElement` function when you run it.

Using JSX ([interactive version](https://jsbin.com/rideris/edit?html,output)):

```js
const element = <div>Hello World</div>;
```

This is much easier to read than both the straight `React.createElement` API and the vanilla JS API. Most people using React use JSX to write their components.

#### Exercise B (estimate: 5 min)

:::note Exercise
Change the [JSX example from above](http://jsbin.com/gekahexige/edit?html,output) to instead render a `h1` tag with the text "Hello Code Your Future".
:::

## Let's create a React app

#### Exercise C (should be completed in prep)

:::note Exercise
If you haven't already, follow [the instructions to create a React app](../../guides/creating-a-react-app) called `pokedex`.
:::

### What got created?

Diagram of folder layout created by create-react-app.

<img src={require('!file-loader!../assets/diagram-of-folder-structure-for-create-react-app.png').default} width="60%" />

## React Components

We looked at the beginning of the lesson at the concept of components. Now look at how components are made in React.

```js
import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return <div>Hello World</div>;
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
```

There are 3 important parts in this code:

1. First we import `React`. This is important because JSX is converted to `React.createElement` calls. If the `React` variable is undefined then this will fail.
2. We create a React component called `HelloWorld`.
3. We _render_ the `HelloWorld` component into the element with the id of `root`.

:::note Definition
The process of _rendering_ is turning the JSX elements returned by the component function into DOM elements on the screen. This is done by React for you.
:::

#### Exercise D (estimate: 20 min)

:::note Exercise

In this exercise we replace the placeholder React app with our own. It should look like this:

<ExerciseDDemo />

Complete the following steps:

1. First off, head to the root of your `pokedex` repo and start the app using `npm start`.
2. In the `pokedex` React app that you just created, open the `src/App.js` file.
3. Delete everything in the file except the line containing `export default App`. You should see an error in your terminal and in your web browser - don't panic! We're going to remake the `App` component ourselves.
4. Import the React variable from the React package.
5. Create a function named `App`, which will be our component.
6. Within the `App` function, return a `<h1>` element with the text "Welcome to the Pokedex". What do you see in your web browser?
7. Create a `<div>` element that _wraps around_ the `<h1>` you just created.
8. Below the `<h1>` element (but within the `<div>`), create an `<img>` element. Then make its `src` attribute equal to `https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png`. What do you expect to see in your web browser?
9. Now create a `<header>` element to wrap both the `<h1>` element **and** the `<img>` element.

:::

#### Component Composition

You can combine a component with another component to render both. This is called _composition_ ([interactive example](https://codesandbox.io/s/0x4wonqn00)):

```js
function Greeting() {
  return <span>Hello</span>;
}

function Mentor() {
  return <span>Ali</span>;
}

function HelloWorld() {
  return (
    <div>
      <Greeting />
      <Mentor />
    </div>
  );
}
```

In the `HelloWorld` component we are using a reference to the `Greeting` and `Mentor` components. React reads these references when rendering `HelloWorld` and so it renders the `Greeting` and `Mentor` _child_ components.

We are also using some shorter syntax within the `HelloWorld` component. `<Greeting />` is a shorter way of writing `<Greeting></Greeting>`, which is useful if we don't need to put anything inside the `Greeting` component.

Notice how the components that we write (`HelloWorld`, `Greeting`, `Mentor`) are written using a `camel case` convention and always start with an uppercase letter. And "regular DOM" components (`div`, `span`) are always lowercase? This is a convention to let you know whether you are using a "regular DOM component" or a component that you have written. When you're making your own components, you should always start them with an uppercase letter.

#### Exercise E (estimate: 10 min)

:::note Exercise

In this exercise, we will split out a new `Logo` component from the `App` component. And then we'll add a new `BestPokemon` component:

<ExerciseEDemo />

You should complete the following steps:

1. In your `pokedex` React app, open the `src/App.js` file.
2. Create a new function named `Logo`.
3. Copy the `<header>` element and its contents and paste it into the `Logo` component.
4. Replace the `<header>` element in the `App` component with the new `Logo` component.
5. Create a new component function named `BestPokemon` and return a `<p>` element with some text saying which is your favorite Pokemon (e.g. "My favorite Pokemon is Squirtle").
6. _Render_ your new `BestPokemon` component below the `Logo` component within the `App` component.

:::

#### Arrow Functions for shorter syntax

Because a React component is a function, we can also use the arrow function syntax:

```js
const HelloWorld = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
```

This can be even shorter again if we use parentheses and implicit return:

```js
const HelloWorld = () => (
  <div>
    <h1>Hello World</h1>
  </div>
);
```

Although this is shorter, it is less flexible as we cannot insert code that is **not** JSX. Like for example, a `console.log`:

```js
// THIS DOES NOT WORK!
const HelloWorld = () => (
  console.log('Hello!');
  <div>
    <h1>Hello World</h1>
  </div>
);

```

So we will use arrow functions but we should not use the implicit return for now..

#### Exercise F (estimate: 10 min)

:::note Exercise

In this exercise, we'll convert the Pokedex app to use arrow functions. It should still look the same in your browser as Exercise E.

1. Using the `pokedex` React app that you created earlier, open the `src/App.js` file.
2. Convert the `Logo` and `BestPokemon` functions into arrow functions.

:::

## Embedding JavaScript into JSX

So far all of the components we have looked at haven't been able to change - they are _hard-coded_. But this doesn't make very interesting websites. We want to use variables with different data. We can insert variables (and some other things) into our React components.

Anything in the JSX that is inside curly braces `{}` is interpreted as a regular JavaScript _expression_. That means you can use every object or function from JavaScript that we have learned so far. Let's look at an example ([interactive example](https://codesandbox.io/s/interpolation-in-jsx-l910pqnjql)):

```js
function Greeting() {
  const greetingWord = "Hello";

  return <span>{greetingWord}</span>;
}
```

Now instead of hard-coding the greeting in the `Greeting` component, we are using a variable. Remember that everything between the curly braces is just regular JavaScript. So we can use more than just variables ([interactive example](https://codesandbox.io/s/interpolation-with-methods-in-jsx-nw29kzx744?file=/src/HelloWorld.js)):

```js
function Mentor() {
  const mentors = ["Ali", "Kash", "Davide", "German", "Gerald"];
  return <span>{mentors.join(", ")}</span>;
}
```

Now we have modified the `Mentor` component to use the `Array.join` method so that it lists several mentors' names. This works with other JS types:

```js
function Addition() {
  return <span>{1 + 2 + 3}</span>;
}
```

```js
function Weather() {
  const weatherData = {
    temperature: 5,
    location: "London",
  };

  return (
    <p>
      The temperature in {weatherData.location} is {weatherData.temperature}
    </p>
  );
}
```

```js
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function Name() {
  const user = {
    firstName: "Bob",
    lastName: "Marley",
  };
  return <span>{formatName(user)}</span>;
}
```

A common pattern in React is to use `Array.map` to loop through a list of items and render a component for each one ([interactive example](https://codesandbox.io/s/interpolation-with-map-in-jsx-7mw0mw3qx0?file=/src/MentorsList.js)):

```js
const mentors = ["Ali", "Kash", "Davide", "German", "Gerald"];

function MentorsList() {
  return (
    <ul>
      {mentors.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
```

Here we are using `Array.map` to turn an array of strings into an array of components.

#### Exercise G (estimate: 20 min)

:::note Exercise

In this exercise, we'll change the `Logo` component to use a variable for the app name. Then we'll add a new component `CaughtPokemon` which displays today's date. And finally we'll make `BestPokemon` show a list of abilities:

<ExerciseGDemo />

You should then complete the following steps

1. Using the `pokedex` React app that you created earlier, open the `src/App.js` file.
2. Inside the `Logo` component create a new variable called `appName` and assign it to `"[YOUR_NAME]'s Pokedex"`.
3. Now replace the hard-coded app name with `{appName}`. What do you see in your web browser? What would you do if you wanted to change the app name?
4. Create a new component named `CaughtPokemon`. Within this component return a `<p>` tag with the text "Caught 0 Pokemon on" (we're going to fill in today's date in the next step).
5. Create a variable named `date` within the `CaughtPokemon` component, and assign it today's date (hint: `new Date().toLocaleDateString()`). Finally, render the `date` variable after the text "Caught 0 Pokemon on".
6. Render the `CaughtPokemon` component within the `App` component (below `BestPokemon`).
7. Within the `BestPokemon` component, create a variable named `abilities` and assign it to an array with some Pokemon abilities (e.g. `['Anticipation', 'Adaptability', 'Run-Away']`).
8. Change the `BestPokemon` component to return a `<div>` element with the existing `<p>` element inside it. Then add a `<ul>` element underneath the `<p>` element.
9. Now use the `.map()` method on the `abilities` variable to loop over each name and return a `<li>` element for each (hint: look at the mentors list example above) within the `<ul>` element.

:::

## Keys

You may have noticed that we are now seeing a red error message in the Dev Tools: `Warning: Each child in a list should have a unique "key" prop.`. This error happens when you use `Array.map` to return a list of elements ([interactive example](https://codesandbox.io/s/key-prop-for-lists-in-react-pwp8ox4kn0?file=/src/MentorsList.js)):

```js
const mentors = ["Ali", "Sub", "Loic", "Anthony", "Lucy", "Mozart"];

function MentorsList() {
  return (
    <ul>
      {mentors.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
```

Here we have added a `key` prop to the `li` element. The `key` prop has a special meaning in React. React uses `key` to keep track of each element in the list. 

The [React documentation](https://reactjs.org/docs/lists-and-keys.html)  and [React learning book](https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key) explain this in more depth.

## Importing/Exporting Components

Organise your code by importing and exporting components. This works in the same way as regular JavaScript import and exports. ([interactive example](https://codesandbox.io/s/1z6xozl81l)):

```js
import Greeting from "./Greeting";
import Mentor from "./Mentor";

function HelloMentor() {
  return (
    <div>
      <Greeting />
      <Mentor />
    </div>
  );
}
```

We need to export our components to use them in other files:

```js
function Greeting() {
  return <span>Hello</span>;
}

export default Greeting;
```

Name component files exactly the same as the component (including the capital letter). Do this every time.

#### Exercise H (estimate: 10 min)

:::note Exercise

In this exercise, we'll split the Pokedex app into separate files. It should still look the same in your browser as Exercise G.

1. Open the `pokedex` React app that you created earlier.
2. Create a new file within the `src` directory named `Logo.js`.
3. Copy and paste the `Logo` component from `App.js` into `Logo.js`.
4. Remember to add `import React from 'react'` at the top of `Logo.js`.
5. Export the `Logo` component from `Logo.js` (hint: look at the `Greeting` example above).
6. Delete the old `Logo` component from `App.js`.
7. Import the `Logo` component into `App.js` (hint: look at the `HelloMentor` example above).
8. Repeat this process with the `BestPokemon` and `CaughtPokemon` components. What do you think the files should be called?

:::

## Making an argument for Props

What's the problem with our `HelloMentor` component above?

The component `HelloMentor` is static. What if we want to say _hello_ to a different mentor? We would have to change the code too! This is easy in our tiny application but for "real" applications this might be more difficult.

Instead, wouldn't it be good if we could _change_ which mentor we are saying hello to every time we render the component? We could reuse the `HelloMentor` component for different mentor names. This is what _props_ are for.

## What are Props?

Props are what we use in React to pass "arguments" to components. They are very similar to arguments in functions. You can "pass" props to components and you can use those props within a component.

First let's look at passing props to your components ([interactive example](https://codesandbox.io/s/intro-to-props-vmjy0o91m7?file=/src/HelloMentor.js)):

```js
<Mentor name="Mozafar" />
```

Props are key-value pairs. In this example, the key is `name` and the value is the string `'Mozafar'`. We can pass as many props as we like to a component.

We don't have to use strings; we can use any valid JavaScript data like numbers, arrays and objects. In JSX you can use curly braces `{}` to inject data that is not a string:

```js
<Mentor age={30}>
```

Now look at using props that we have passed to a component ([interactive example](https://codesandbox.io/s/intro-to-props-vmjy0o91m7?file=/src/Mentor.js)):

```js
function Mentor(props) {
  console.log(props);
  return <span>{props.name}</span>;
}
```

React gives you access to props in the **first argument** to the component function. We can inject props into our component using curly braces.

The `props` variable is a normal object with key-value pairs that match what was passed to the component. It is a variable and it can be used like any other variable. That includes injecting props into attributes:

```js
<div id={"mentor-id-" + props.id}>{props.name}</div>
```

Or calculating new values:

```js
<div>{props.age + 1}</div>
```

#### Exercise I (estimate: 20 min)

:::note Exercise

In this exercise, we'll move the variables in `Logo`, `BestPokemon` and `CaughtPokemon` to the `App` component. Then we'll make `App` pass those variables as props to the sub-components. Your app should still look the same in your browser as Exercise H.

1. Using the `pokedex` React app that you created earlier, open the `App.js` file.
2. Pass a prop `appName="Pokedex"` to the `Logo` component.
3. Now open the `Logo.js` file.
4. Delete the `appName` variable. What do you see in your web browser? Why?
5. Change the `Logo` function to access the first argument and call it `props`. Use `console.log` to inspect the `props` variable.
6. Change the usage of `appName` in the `<h1>` to be `props.appName` instead. Does this fix the problem? Why?
7. Now open the `BestPokemon.js` file.
8. Copy the `abilities` variable and then delete it from `BestPokemon.js`.
9. Paste the `abilities` variable into `App.js`.
10. Pass the `abilities` variable as a prop to `BestPokemon` from `App.js`.
11. In the `BestPokemon.js` file replace the existing usage of `abilities` with the `abilities` **prop**. You should still see the Pokemon ability names in your web browser.
12. **(STRETCH GOAL)** Repeat the process with the `date` variable in the `CaughtPokemon.js` file.

:::

### Credits

Inspiration & examples for this module were taken from [Kent C. Dodd's](https://twitter.com/kentcdodds) [Beginner's Guide to ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-reactjs) course.

## PD (Building confidence)

**Session objective:** This session will explore the confidence and imposter syndrome concepts.

Confidence plays an important life in a person's professional life. It’s not easy to work on it and improve it, especially in a competitive environment. So, it’s important to identify one’s area for improvement. Weak self-confidence can show through having an imposter syndrome and negative self-comparison. It’s important to know yourself enough to understand what causes you to feel like an imposter and how to overcome those feelings. 

:::note Exercise 1 (20 min)

**Exercise objective**: To learn about confidence, it’s misconceptions and imposter syndrome
There are some misconceptions about confidence, especially it being confused with being showy or arrogant and thinking that it’s a skill that can’t be improved. 

Below are some scenarios, try to identify which ones are a misconception, which ones show confidence and which indicate having imposter syndrome:

1. Asking your boss for a raise - you’ve worked in the company for years, have been selected as employee of the year but still haven’t received a raise
2. You get assigned a task by your boss who knows your capabilities well and you feel like it would be better if one of other coworkers did it or at least helped you with it
3. Not agreeing with your coworkers about certain work - sharing your opinion, explaining your own views/doubts on the topic
4. Presenting your ideas and thoughts on certain projects to your co-workers who have been employed in the company much longer than you
5. After finishing a project in pairs your coworker takes more credit for it than deserved and you let them, thinking “ah it’s ok, maybe sometimes they have worked more than me”
6. Having a meeting with your boss and explaining you should be able to come to work later than the rest of the employees because you work harder than the rest of them
7. Asking your boss to give you a better position at the workplace because you have more experience and knowledge than your coworkers
8. Not following the official schedule because you have a better plan how to reach the goal of a project
9. After encountering the problem and trying to solve it for a couple of days you ask a colleague for help and they call you incompetent
10. You see your co-worker do something bad and wrong but you don’t say anything as you don’t think it’s your place

:::

:::note Exercise 2 (25 minutes)

**Exercise objective**: To role-play the conversations and practice skills to gain confidence

Work in pairs. Choose one (or more if you can) of the following scenarios and practice your abilities to gain confidence in difficult positions.

1. You just started working in the company. You work on a project with your co-worker who is not satisfied with anything that you do and is also sometimes rude with how little experience you have. The co-worker is talking rudely to you and does not take you seriously. Your challenge is to approach this co-worker in a professional manner and try to find the middle ground since you have to finish the project. 
2. You play the role of manager and you are responsible to give your employee a performance review. You would like them to improve their performance if they want to get a salary bonus. However, the employee already thinks they’ve done a lot since they’ve been working more hours than the rest and have finished more projects than any of them in one year. 
3. A customer comes to a company, being very upset about the product, claiming the product is not functioning properly. However your role is to show the customer the product does work correctly, they just don’t know how to use it in the right way.

:::

**Wrap up**

***What is imposter syndrome?***

Imposter syndrome is having doubts about your abilities, feeling unwanted in the situation/area as if you don’t belong and thinking less capable than you are. It often feels like having anxiety, insecurities and not being able to perform at the level you are usually capable of. You feel discouraged by the achievements of the people around you and are unable to experience the full joy of your own success. 

It’s important to be confident so you can:
- be assertive
- do more (challenging) work
- communicate more effectively
- push yourself to step out of your comfort zone
- always stay true to yourself
- accept praise for your work
- know your weaknesses and strengths 

## Coursework

Follow to [view the coursework](./homework) for this lesson.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="React" week="Week 1" />
