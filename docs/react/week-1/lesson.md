---
id: lesson
title: React - Week 1
sidebar_label: Lesson
---

---

Click [here](./learning-objectives) to see the Learning Objectives for this lesson.

---

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

| Exercise A (estimate: 10 min)                                                                                                                                     |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Look at the example online shopping user interface in the [Thinking in React article](https://reactjs.org/docs/thinking-in-react.html) (the image at the top). |
| 2. Draw boxes around the components and give them names. Compare with the example components shown in the second image.                                           |

## Rendering with React

Remember how annoying it was to manage the DOM yourself in [our previous lesson](/js-core-2/week-2/lesson)? The "vanilla" JavaScript APIs for updating the DOM are quite long and difficult to remember. React makes this easier by manipulating each DOM element itself, instead of you doing it manually. You give React a "description" of the DOM that you want and it will update the DOM for you. React _abstracts_ away the management of the DOM.

Let's take a look at an example. We are going to walk through how to render a `<div>` with the text "Hello World" within it.

First, lets recap how we could do this using "vanilla" JS ([interactive version](https://jsbin.com/zexiyulavu/edit?html,output)):

```js
let divNode = document.createElement("div");
divNode.innerText = "Hello World";

let rootElement = document.querySelector("#root");
rootElement.appendChild(divNode);
```

Now let's convert to using React ([interactive version](https://jsbin.com/calaqitede/1/edit?html,output)):

```js
const element = React.createElement("div", {
  children: "Hello World",
});

const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);
```

## JSX

As you can see, React is already helping us a bit by cleaning up some of the verbose vanilla JS APIs. However in a typical React application you would still use a _lot_ of the `React.createElement` function. To improve the developer experience the React team developed **JSX**.

JSX is a simple syntax _sugar_ that looks like HTML, but is actually converted to the `React.createElement` function when you run it.

Using JSX ([interactive version](https://jsbin.com/gabujocuda/edit?html,output)):

```js
const element = <div>Hello World</div>;

const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);
```

As you can see, this is much easier to read than both the straight `React.createElement` API and the vanilla JS API. Most people using React use JSX to write their components.

| Exercise B (estimate: 5 min)                                                                                                                           |
| :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Change the [JSX example from above](http://jsbin.com/gekahexige/edit?html,output) to instead render a `h1` tag with the text "Hello Code Your Future". |

## Let's create a React app

| Exercise C (estimate: 10 min)                                                                                                                                     |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. If you haven't already, follow [the instructions to create a React app] called `pokedex`(https://docs.codeyourfuture.io/students/guides/creating-a-react-app). |

### What got created?

Diagram of folder layout created by create-react-app. Click [here](https://excalidraw.com/#json=5666421027635200,SRigco8_OhrCb94QSj4Wow) for live diagram.

<img src={require('!file-loader!../assets/diagram-of-folder-structure-for-create-react-app.png').default}/>

## React Components

We looked at the beginning of the lesson at the concept of components. Now let's look at how components are made in React.

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
3. We _render_ the `HelloWorld` component into a `div` with the id of `root`.

| Exercise D (estimate: 10 min)                                                                                                                                                                                                             |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. In the `pokedex` React app that you just created, open the `src/App.js` file.                                                                                                                                                          |
| 2. Delete everything in the file except the line containing `export default App`. You should see an error in your terminal and in your web browser - don't panic! We're going to remake the `App` component ourselves.                    |
| 3. Import React variable from the React package.                                                                                                                                                                                          |
| 4. Create a function named `App`, which will be our component.                                                                                                                                                                            |
| 5. Within the `App` function, return a `<h1>` element with the text "Welcome to the Pokedex". What do you see in your web browser?                                                                                                        |
| 6. Create a `<div>` element that _wraps around_ the `<h1>` you just created.                                                                                                                                                              |
| 7. Below the `<h1>` element (but within the `<div>`), create an `<img>` element. Then make its `src` attribute equal to `https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png`. What do you expect to see in your web browser? |
| 8. Now create a `<header>` element to wrap both the `<h1>` element **and** the `<img>` element.                                                                                                                                           |

#### Component Composition

A component can be combined with another component so that both are rendered. This is called _composition_ ([interactive example](https://codesandbox.io/s/0x4wonqn00)):

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

We are also using some shorter syntax within the `HelloWorld` component. `<Greeting />` is just a shorter way of writing `<Greeting></Greeting>`, which is useful if we don't need to put anything inside the `Greeting` component.

Notice how the components that we write (`HelloWorld`, `Greeting`, `Mentor`) are written using a `camel case` convention and always start with an uppercase letter? And "regular DOM" components (`div`, `span`) are always lowercase? This the convention to let you know whether you are using a "regular DOM component" or a component that you have written.

| Exercise E (estimate: 5 min)                                                                                                                                                       |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. In your `pokedex` React app, open the `src/App.js` file.                                                                                                                        |
| 2. Create a new function named `Logo`.                                                                                                                                             |
| 3. Copy the `<header>` element and its contents and paste it into the `Logo` component.                                                                                            |
| 4. Replace the `<header>` element in the `App` component with the new `Logo` component.                                                                                            |
| 5. Create a new component function named `BestPokemon` and return a `<p>` element with some text saying which is your favourite Pokemon (e.g. "My favourite Pokemon is Squirtle"). |
| 6. _Render_ your new `BestPokemon` component below the `Logo` component within the `App` component.                                                                                |

#### Arrow Functions for shorter syntax

Because a React component is just a function, we can also use the arrow function syntax:

```js
const HelloWorld = () => {
  return <div>Hello World</div>;
};
```

This can be even shorter again if we use parentheses and implicit return:

```js
const HelloWorld = () => <div>Hello World</div>;
```

Although this is shorter, it is less flexible as we cannot insert code that is **not** JSX. Like for example, a `console.log`:

```js
// THIS DOES NOT WORK!
const HelloWorld = () => (
  console.log('Hello!')
  <div>Hello world</div>
);
```

If we want to do this, we can still use arrow functions but we can't use the implicit return.

| Exercise F (estimate: 5 min)                                                              |
| :---------------------------------------------------------------------------------------- |
| 1. Using the `pokedex` React app that you created earlier and open the `src/App.js` file. |
| 2. Convert the `Logo` and `BestPokemon` functions into arrow functions.                   |

## Embedding JavaScript into JSX

So far all of the components we have looked at haven't been able to change - they are _hard-coded_. But this doesn't make very interesting websites, we want to be able to use variables with different data. We can insert variables (and some other things) into our React components.

Anything in the JSX that is inside curly braces `{}` is interpreted as a regular JavaScript _expression_. That means you can use every object or function from JavaScript that we have learned so far. Let's look at an example ([interactive example](https://codesandbox.io/s/l910pqnjql)):

```js
const Greeting = () => {
  const greetingWord = "Hello";

  return <span>{greetingWord}</span>;
};
```

Now instead of hard-coding the greeting in the `Greeting` component, we are using a variable. Remember that everything between the curly braces is just regular JavaScript. So we can use more than just variables ([interactive example](https://codesandbox.io/s/nw29kzx744)):

```js
const Mentor = () => {
  const mentors = ["Ali", "Sub", "Loic", "Anthony", "Lucy", "Mozart"];

  return <span>{mentors.join(", ")}</span>;
};
```

Now we have modified the `Mentor` component to use the `Array.join` method so that it lists several mentor's names. This also works with other JS types:

```js
const Addition = () => {
  return <span>{1 + 2 + 3}</span>;
};
```

```js
const Weather = () => {
  const weatherData = {
    temperature: 5,
    location: "London",
  };

  return (
    <p>
      The temperature in {weatherData.location} is {weatherData.temperature}
    </p>
  );
};
```

```js
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const Name = () => {
  const user = {
    firstName: "Bob",
    lastName: "Marley",
  };
  return <span>{formatName(user)}</span>;
};
```

A common pattern in React is to use `Array.map` to loop through a list of items and render a component for each one ([interactive example](https://codesandbox.io/s/7mw0mw3qx0)):

```js
const mentors = ["Ali", "Sub", "Loic", "Anthony", "Lucy", "Mozart"];

const List = () => (
  <ul>
    {mentors.map((name) => {
      return <li>{name}</li>;
    })}
  </ul>
);
```

Here we are using `Array.map` to turn an array of strings into an array of components.

| Exercise G (estimate: 10 min)                                                                                                                                                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Using the `pokedex` React app that you created earlier and open the `src/App.js` file.                                                                                                                               |
| 2. Inside the `Logo` component create a new variable called `appName` and assign it to `"Pokedex"`.                                                                                                                     |
| 3. Now replace the hard-coded app name with `{appName}`. What do you see in your web browser? What would you do if you wanted to change the app name?                                                                   |
| 4. Create a new component named `CaughtPokemon`. Within this component return a `<p>` tag with the text "Caught 0 Pokemon on" (we're going to fill in today's date in the next step).                                   |
| 5. Create a variable named `date` within the `CaughtPokemon` component, and assign it today's date (hint: `new Date().toLocaleDateString()`). Finally, render the `date` variable after the text "Caught 0 Pokemon on". |
| 6. Render the `CaughtPokemon` component within the `App` component (below `BestPokemon`).                                                                                                                               |
| 7. Within the `BestPokemon` component, create a variable named `abilities` and assign it to an array with some Pokemon abilities (e.g. `['Anticipation', 'Adaptability', 'Run-Away']`).                                 |
| 8. Change the `BestPokemon` component to return a `<div>` element with the existing `<p>` element inside it. Then add a `<ul>` element underneath the `<p>` element.                                                    |
| 9. Now use the `.map()` method on the `abilities` variable to loop over each name and return a `<li>` element for each (hint: look at the mentors list example above) within the `<ul>` element.                        |

## Keys

You may have noticed that we are now seeing a red error message in the Dev Tools: `Warning: Each child in a list should have a unique "key" prop.`. This error happens when you use `Array.map` to return a list of elements ([interactive example](https://codesandbox.io/s/pwp8ox4kn0)):

```js
const mentors = ["Ali", "Sub", "Loic", "Anthony", "Lucy", "Mozart"];

const List = () => (
  <ul>
    {mentors.map((name, index) => {
      return (
        <li key={index}>{name}</li>;
      )
    })}
  </ul>
);
```

Here we have added a `key` prop to the `li` element. A documentation page explaining in more depth is in the further reading section but basically the `key` prop has a special meaning in React because it is used internally to keep track of which element in the list is which.

## Importing/Exporting Components

To help organise your code, components can be imported and exported just like any other JavaScript code ([interactive example](https://codesandbox.io/s/1z6xozl81l)):

```js
import Greeting from "./Greeting";
import Mentor from "./Mentor";

const HelloMentor = () => (
  <div>
    <Greeting />
    <Mentor />
  </div>
);
```

We also need to export our components if we want to use them in other files:

```js
const Greeting = () => <div>Hello</div>;

export default Greeting;
```

The convention is to name component files exactly the same as the component (including the capital letter).

| Exercise H (estimate: 5 min)                                                                                                |
| :-------------------------------------------------------------------------------------------------------------------------- |
| 1. Using the `pokedex` React app that you created earlier.                                                                  |
| 2. Create a new file within the `src` directory named `Logo.js`.                                                            |
| 3. Copy and paste the `Logo` component from `App.js` into `Logo.js`.                                                        |
| 4. Remember to add `import React from 'react'` at the top of `Logo.js`.                                                     |
| 5. Export the `Logo` component from `Logo.js` (hint: look at the `Greeting` example above).                                 |
| 6. Delete the old `Logo` component from `App.js`.                                                                           |
| 7. Import the `Logo` component into `App.js` (hint: look at the `HelloMentor` example above).                               |
| 8. Repeat this process with the `BestPokemon` and `CaughtPokemon` components. What do you think the files should be called? |

## Making an argument for Props

What's the problem with our `HelloMentor` component above?

The component `HelloMentor` is very static. What if we want to say _hello_ to a different mentor? Currently, we would have to change the code too! This is easy in our tiny application but for "real" applications this might be more difficult.

Instead wouldn't it be good if we could change which mentor we are saying hello to every time we render the component? So we could reuse the `HelloMentor` component for different mentor names. This is what _props_ are for.

## What are Props?

Props are what we use in React to pass "arguments" to components. They are very similar to arguments in functions - you can "pass" props to components, and you can use those props within a component.

First let's look at passing props to your components ([interactive example](https://codesandbox.io/s/vmjy0o91m7)):

```js
<Mentor name="Mozafar" />
```

As you can see props are key-value pairs, in this example the key is `name` and the value is the string `'Mozafar'`. We can pass as many props as we like to a component.

We don't have to use strings, we can use any valid JavaScript data like numbers, arrays and objects. Remember that in JSX you can use curly braces `{}` to inject data that is not a string:

```js
<Mentor age={30}>
```

Now let's take a look at using props that we have passed to a component ([interactive example](https://codesandbox.io/s/vmjy0o91m7)):

```js
const Mentor = (props) => {
  console.log(props);
  return (
    <span>{props.name}</span>;
  )
};
```

React gives you access to props in the **first argument** to the component function. We can then inject props into our component using curly braces.

The `props` variable is just a normal object with key-value pairs that match what was passed to the component. Because it is just a variable, it can be used like any other variable. That includes injecting props into attributes:

```js
<div id={"mentor-id-" + props.id}>{props.name}</div>
```

Or calculating new values:

```js
<div>{props.age + 1}</div>
```

| Exercise I (estimate: 10 min)                                                                                                                                                 |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Using the `pokedex` React app that you created earlier.                                                                                                                    |
| 2. Open the `App.js` file.                                                                                                                                                    |
| 3. Pass a prop `appName="Pokedex"` to the `Logo` component.                                                                                                                   |
| 4. Now open the `Logo.js` file.                                                                                                                                               |
| 5. Delete the `appName` variable. What do you see in your web browser? Why?                                                                                                   |
| 6. Change the `Logo` function to access the first argument and call it `props`. Use `console.log` to inspect the `props` variable.                                            |
| 7. Change the usage of `appName` in the `<h1>` to be `props.appName` instead. Does this fix the problem? Why?                                                                 |
| 8. Now open the `BestPokemon.js` file.                                                                                                                                        |
| 9. Copy the `abilities` variable and then delete it from `BestPokemon.js`.                                                                                                    |
| 10. Paste the `abilities` variable into `App.js`.                                                                                                                             |
| 11. Pass the `abilities` variable as a prop to `BestPokemon` from `App.js`.                                                                                                   |
| 12. In the `BestPokemon.js` file replace the existing usage of `abilities` with the `abilities` **prop**. You should still see the Pokemon ability names in your web browser. |
| 13. **(STRETCH GOAL)** Repeat the process with the `date` variable in the `CaughtPokemon.js` file.                                                                            |

## Further reading

Fed up of having to provide a prop for every component? Do you want to make your component use a value most of the time, but it can be overridden with a prop? This is a good time to use `defaultProps`. [This page on the React documentation](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values) describes in more detail.

| Exercise J (OPTIONAL)                                                                                               |
| :------------------------------------------------------------------------------------------------------------------ |
| Complete the FreeCodeCamp [exercises](https://learn.freecodecamp.org/front-end-libraries/react/) on `defaultProps`: |
| 1. [Use Default Props](https://learn.freecodecamp.org/front-end-libraries/react/use-default-props/).                |
| 2. [Override Default Props](https://learn.freecodecamp.org/front-end-libraries/react/override-default-props/).      |

### Credits

Inspiration & examples for this module were taken from [Kent C. Dodd's](https://twitter.com/kentcdodds) [Beginner's Guide to ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-reactjs) course.

## Homework

Click [here](./homework) to view the homework for this lesson.
