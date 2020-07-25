---
id: lesson
title: React - Week 2
sidebar_label: Lesson
---

**What will we learn today?**

- [Recap](#recap)
- [Handling Events](#handling-events)
- [Re-Rendering Components](#re-rendering-components)
- [State](#state)
- [Fetching Data in React](#fetching-data-in-react)
- [Further Reading](#further-reading)

---

Click [here](./learning-objectives) to see the Learning Objectives for this lesson.

---

## Recap

Last week we looked at how to write a `HelloMentor` React component ([interactive example](https://codesandbox.io/s/react-2-recap-7zvk9n1950?file=/src/HelloMentor.js)):

```js title="Greeting.js"
function Greeting() {
  return <span>Hello</span>;
}
```

```js title="Mentor.js"
function Mentor(props) {
  return <span>{props.name}</span>;
}
```

```js title="index.js"
import Greeting from "./Greeting";
import Mentor from "./Mentor";

function HelloMentor() {
  return (
    <div>
      <Greeting />
      <Mentor name="Ali" />
    </div>
  );
}
```

## Handling events

So far we have only looked at React apps that are "static": they don't respond to user input. This week we will look at making our apps _dynamic_.

### Recap: First-class functions in JavaScript

Before we look more at React we need to recap a concept in JavaScript. You may remember that functions in JavaScript are "first class" - that means we can pass a _reference_ to a function (as a variable) and then call it elsewhere. Let's look at an example ([interactive example](https://jsbin.com/xudukezaje/edit?js,console)):

```js
function hello() {
  return "Hello!";
}

console.log(hello); // Logs: "ƒ hello() {}"
console.log(hello()); // Logs: "Hello!"
```

In the example above `hello` is a **reference** to a function. In the first `console.log` we log out the whole function. The function is **not called** until we use parentheses `()`, so we only log the string `"Hello!"` in the second `console.log`.

This is a really important and useful in React, as we can make a function and pass it to React so that it can call it when a user interacts with our app.

### Event handlers in components

In previous lessons we learned how to attach event listeners with `addEventListener`:

```js
// Create an event handler
function logWhenClicked() {
  console.log("buttonElement was clicked!");
}

// Listen for events and call the event handler when triggered
buttonElement.addEventListener("click", logWhenClicked);
```

We still need to listen events in React, but event handlers are set up in a slightly different way ([interactive example](https://codesandbox.io/s/event-handlers-cc3h7?file=/src/ClickLogger.js)):

```js
function ClickLogger() {
  function logWhenClicked() {
    console.log("Button was clicked!");
  }

  return <button onClick={logWhenClicked}>Click me!</button>;
}
```

Every element in React has some special props that start with `on` that can be assigned to a function which will be called when the event is triggered.

Here's a few examples (a full list is available [here](https://reactjs.org/docs/events.html#reference)):

- `onClick` - the element was clicked
- `onCopy` - the clipboard is used to copy some text
- `onKeyDown` - a key is pressed down
- `onBlur` - the element loses "focus"
- `onChange` - only available for `<input>` & `<select>` (and a few others), triggered when changed
- `onDoubleClick` - the element was double-clicked!
- `onPlay` - a video starts playing
- `onSubmit` - a form element is submitted

Notice that just like with `addEventListener` above, we pass the function reference to `onClick` instead of calling the function. If we call the function, it will run when we render, not when the user clicks on the button.

:::tip
Think of it like this: we give the event handler to React, so that React can call our function when the element is clicked.
:::

| **Exercise A**                                                                                                                            |
| :---------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Open the `pokedex` React application from last week and open the `Logo.js` file.                                                       |
| 2. Add a function named `logWhenClicked` within the `Logo` component. (Hint: look at the example above).                                  |
| 3. In the `logWhenClicked` function, `console.log` a message (it doesn't matter what the message is).                                     |
| 4. Add an `onClick` handler to the `<img>` that will call `logWhenClicked`. (Hint: look at the `ClickLogger` component above).            |
| 5. In your web browser, try clicking on the logo image. What do you see in the JavaScript console?                                        |
| 6. In a group of 2 - 3 students, discuss what would happen if you changed your code to `onClick={logWhenClicked()}`. Can you explain why? |
| 7. Report your discussion back to the rest of the class.                                                                                  |

### Passing Functions as Props

Sometimes we need to pass a function to another component as a prop, so that it can handle the event.

A common example for this is a Button component. This component adds some styling to a normal `<button>`, but still needs to be able to pass an event handler function to `onClick`. Let's look at an example ([interactive example](https://codesandbox.io/s/passing-functions-as-props-zqlnmo16y3?file=/src/ClickLoggerApp.js)):

```js
function ClickLoggerApp() {
  function logWhenClicked() {
    console.log("Button was clicked");
  }

  return (
    <div>
      <FancyButton handleClick={logWhenClicked} />
      <p>Then look in the console.</p>
    </div>
  );
}

function FancyButton(props) {
  return (
    <button className="my-fancy-classname" onClick={props.handleClick}>
      Click Me!
    </button>
  );
}
```

Notice how this is very similar to the example above where we created the handler and used it in the same component? The only difference here is that we are passing the function reference through a prop. We could even pass it through multiple components as props.

| **Exercise B**                                                                                                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. Open the `pokedex` React application and open the `Logo.js` file.                                                                                          |
| 2. Copy and paste the `logWhenClicked` function from the `Logo` component to the `App` component.                                                             |
| 3. Pass the `logWhenClicked` function **reference** as a prop to the `Logo` component. (Hint: look at the `ClickLoggerApp` component above for an example).   |
| 4. In the `Logo` component change the `onClick` prop so that it passes `props.handleClick`. (Hint: look at the `FancyButton` component above for an example). |
| 5. In a group of 2 - 3 students, discuss what you think will happen when you click the logo image now. Can you explain why?                                   |
| 6. Report back to the rest of the class what you thought was going to happen and why.                                                                         |

## Re-rendering components

So far we've seen that when the page loads, React calls our function components. The JSX elements that are returned from the component functions are turned into the DOM for you by React.

To be able to react to changes, we need to _re-render_ our function components to get different JSX elements. React can then update the DOM based on the new JSX elements.

Let's look at how a component is re-rendered ([interactive version](https://codesandbox.io/s/force-component-re-rendering-llow115pll?file=/src/Counter.js)):

```js
function Counter(props) {
  console.log(`Rendering. props.likeCount is ${props.likeCount}`);

  return <button id="like-button">Likes: {props.likeCount}</button>;
}
```

If you look in the console, you'll see that the component is rendered once when the page loads. `props.likeCount` starts at 0, so React inserts "Count: 0" into the DOM.

We won't look at how this works at the moment, but behind the scenes there is some code that will listen for clicks on the button and force React to update. That means when you click the button, the function component is called again (or _re-rendered_).

Now `props.likeCount` is **1**. React now **updates** the DOM to make sure it shows the correct number. Every time we click the button, the function component is called and React updates the DOM for us.

We don't need to worry about changing the DOM ourselves! This is what makes React so powerful. Even better, React will figure out exactly the right bits of the DOM that need to be changed, a concept called the ["virtual DOM"](https://reactjs.org/docs/faq-internals.html). This makes it extremely efficient and fast.

## State

_State_ is a general concept in software engineering. It is used when a part of your app needs to "remember" something that changes when people interact with it.

<img src={require('!file-loader!../assets/state-diagram.png').default}/>

This is a simple example, but if we had lots of bits of state, then we can make very complex apps.

### React Hooks

React has built-in functionality for initialising and updating state in our components. We will access state via a React _Hook_ called `useState`.

Hooks are a new-ish feature in React. You may find older tutorials that don't use Hooks, but don't panic. The concepts we learn here are the same whether or not you use Hooks. We are looking at Hooks first because they are simpler to learn for beginners.

### Importing `useState`

To be able to access the `useState` Hook, we first need to import it from the React package. Let's look at an example ([interactive example](https://codesandbox.io/s/importing-usestate-hook-8jr9f?file=/src/App.js)):

```js
import React, { useState } from "react";

console.log(useState);
```

If we look at the console, `useState` is just a function. It lives inside the React code that you installed when you created the app.

To reference the `useState` function in our component, we need to import it from the React code. The curly braces around `useState` are a bit like writing:

```js
import React from "react";
let useState = React.useState;
```

In fact we can just write `React.useState` in our component if we want! But to type a bit less code, we import it (using the curly braces) once and then can just use `useState`.

### Using `useState`

Now let's look at how we can use the `useState` Hook ([interactive example](https://codesandbox.io/s/initialising-and-rendering-usestate-variables-zgszi?file=/src/Counter.js)):

```js
function Counter() {
  const [count, setCount] = useState(0);

  return <p>You clicked {count} times</p>;
}
```

Let's break this down into small pieces. First, let's look at calling the `useState` function:

```js
useState(0);
```

This initialises the state variable to 0. Any parameter passed to `useState` will be used as the initial value.

Next, let's look at how we render the state variable in our component:

```js
return <p>You clicked {count} times</p>;
```

`count` is just a variable, so to insert it into our JSX we treat it like any other variable: we use curly braces.

Finally, let's at how we get hold of the `count` variable:

```js
const [count, setCount] = useState(0);
```

To fully understand this bit of code, we first have to understand _destructuring_. Let's look at [this blog post by Wes Bos about array destructuring](https://github.com/wesbos/es6-articles/blob/master/19%20-%20Destructing%20Arrays.md).

Now we can understand that `useState` is returning an array, with two items. The first item in the array is the current value of the `count` state. In our example it will be 0 on the first render. The second item in the array is a function that we will use to update our state.

:::tip
Follow the `useState` naming convention.
:::

When we destructure an array, we can name the variables whatever we want, but there is a naming convention when destructuring the `useState` array. The first variable should be named whatever your state is called, and the second variable should be the same name but prefixed with `set`. Let's look at some examples:

```js
const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

const [username, setUsername] = useState('chris')

const [unreadMessages, setUnreadMessages] = useState(5)
```

### Updating State

Our Counter isn't very useful right now! Let's make it more useful by getting `count` to actually count up ([interactive example](https://codesandbox.io/s/usestate-counter-lorv5?file=/src/Counter.js)):

```js
function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={incrementCount}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
```

Our component now has a `<button>`, which will call the `incrementCount` function when clicked:

```js
<button onClick={incrementCount}>Click me</button>
```

The `incrementCount` function then calculates the **new** state by adding 1 onto the current `count`. And then calls `setCount` to set the new state:

```js
function incrementCount() {
  setCount(count + 1);
}
```

`setCount` does two things. First, it updates the state that our component is "remembering". Whatever you pass as the argument to `setCount` will be remembered as the new state.

It also tells React that the old state that is **still shown in the DOM** is outdated and so the DOM needs to change. Because of this, React will re-render all of our components to figure out what to change in the DOM.

When re-rendering, `useState` now gives us the **updated** state:

```js
function Counter() {
  const [count, setCount] = useState(0);

  ...
}
```

On the second render, `count` is now set to 1. Every time we click the button, the whole cycle starts again.

| **Exercise C**                                                                                                                                               |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Open the `pokedex` React application and open the `CaughtPokemon.js` file.                                                                                |
| 2. Create a new state variable called `totalCaught` and initialise it to `0`                                                                                 |
| 3. When you create the `totalCaught` state, you should also set the function that will update this state (hint: refer to the syntax of the `useState` hook). |
| 4. Replace the number 0 in the JSX with your new `totalCaught` state.                                                                                        |

#### Don't mutate State

As we just learned, `setCount` updates the state for us, but it also notifies React of changes. Because of this we can't change (or _mutate_) state variables ourselves. In fact, React makes it impossible to modify (or _mutate_) state ([interactive example](https://codesandbox.io/s/dont-mutate-state-hex49?file=/src/Counter.js)):

```js
function Counter() {
  let [count, setCount] = useState(0);

  function handleClick() {
    count = count + 1;
  }

  return (
    <div>
      Count: {count}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
```

Clicking the button doesn't do anything! React is letting us know that we have to use `setCount` to be able to update state.

### Where does State live?

We have talked about how a component "remembers" state. In fact, each component _instance_ remembers **separate** state from other components. This means we can have multiple different Counters, each with a different state ([interactive example](https://codesandbox.io/s/multiple-counters-xm1x4?file=/src/App.js)):

```js
function App() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
```

### Setting multiple States

So far we've only seen an example with one state variable. But you can create multiple state variables if you want! Let's see an example ([interactive example](https://codesandbox.io/s/multiple-state-variables-piq5w?file=/src/FruitCounter.js)):

```js
function FruitCounter() {
  const [fruit, setFruit] = useState("bananas");
  const [count, setCount] = useState(0);

  function handleOrangesClick() {
    setFruit("oranges");
  }
  function handleBananasClick() {
    setFruit("bananas");
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        Pick a fruit:
        <button onClick={handleOrangesClick}>Oranges</button>
        <button onClick={handleBananasClick}>Bananas</button>
      </div>
      <p>
        We have {count} {fruit}
      </p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```

| **Exercise D**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Back in the `CaughtPokemon.js` file in your `pokedex` app                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2. Add a button to the component with an `onClick` handler that calls a function called `incrementTotal`.                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3. What do you think will happen when the button is clicked? Why is that?                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4. Using the fruits example above, make changes to the `CaughtPokemon` component so that the `totalCaught` state is increased by 1 on each click. <details><summary>Click here if you are stuck.</summary>The <code>incrementTotal</code> function you created gets called onClick, but so far, it doesn't actually do anything. To fix this, <code>incrementTotal</code> will need to call the function you set when you created the <code>totalCaught</code> state (the 2nd item in the useState array).</details> |

### When do you use Props or State?

We've looked at the 2 main ways of managing data in our React components. But when should we use props and when should we use state?

Remember that props are like "arguments" to a component. It's good practice to make sure that you don't modify arguments after you receive them. Just like state, React prevents you from mutating them. Let's have a look at an example ([interactive example](https://codesandbox.io/s/when-to-use-props-or-state-9wl90npk4?file=/src/Greeting.js)):

```js
function Greeting(props) {
  function handleThing() {
    props.name = "Mozart";
  }

  return (
    <div>
      <p>Hello {props.name}</p>
      <button onClick={handleThing}>Click me</button>
    </div>
  );
}
```

When you click the button, you might expect the `name` prop to change to "Mozart". But it doesn't! React has made props _read-only_, which is a reminder that we shouldn't change props.

If we were allowed to change props, React doesn't have a way of telling that we've changed the data. Our UI is now _stale_ - not up-to-date with the latest data - and has no way of knowing that it has to re-render.

From this we can get a clue about when to use state. If data _changes over time_, then we need to use state. My rule of thumb is that I always use props until I know that it needs to change over time, then I convert it to state.

## Further Reading

[Array Destructuring](https://github.com/wesbos/es6-articles/blob/master/19%20-%20Destructing%20Arrays.md)

What happens if you forget to pass a prop to a component? Or if you pass the wrong type of data to a component? Sometimes React will just render an empty element but sometimes it could throw an error! This is why `propTypes` are useful. [This page on the React documentation](https://reactjs.org/docs/typechecking-with-proptypes.html) describes how to use `propTypes` in more detail.

> **Exercise H**
> Complete the FreeCodeCamp [exercise](https://learn.freecodecamp.org/front-end-libraries/react/) on `propTypes`:
>
> 1. [Use PropTypes to Define the Props You Expect](https://learn.freecodecamp.org/front-end-libraries/react/use-proptypes-to-define-the-props-you-expect/)

## Homework

Click [here](./homework) to view the homework for this lesson.