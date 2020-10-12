---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

## Resources

- [Quiz - React Week 2 - 28/05/2020](https://docs.google.com/forms/d/e/1FAIpQLSf3NisqE5bfJyMXm41W_kW9oSLQVUfaatvHS-gNTh-QXbjWJQ/viewform)
  - Created by Chris Owen

## Solutions

- [PokeDex In-Class - Exercise Solution - 05/06/2020](https://github.com/CodeYourFuture/pokedex-solution)
  - Created by London and Ali Smith
- [Hotel Homework - Solution - 24/07/2020](https://github.com/CodeYourFuture/Hotel-React-solution)
  - Created by Manchester and Dorota Sobkow

## Notes for Mentors

### Handling Events

- Function references vs function calls is a very common source of confusion
  - It is worth recapping again to ensure that students really do understand it
- Passing event handler function references
  - The concept trips up a lot of students - will try to immediately call the function when passing to an event handler (e.g. `onClick={this.foo()})`
- Passing functions as props
  - This concept isn't really that much different from the section above, but passing across components does often confuse students

### Re-Rendering Components

- The goal of this section is to demonstrate React re-rendering but **without using state**
  - i.e. showing that React will call component functions again to get updated JSX after props/state changes
  - Teaching separately allows us to emphasise that setting state has 2 jobs: updating the state and triggering React to re-render
  - It is also convenient to (briefly) discuss how the virtual DOM is efficient
- Re-rendering demo
  - Focus on the `Counter` component primarily, in particular the `console.log`
  - The code in `index.js` is just a way of forcing a re-render without using state. But we don't really want students to learn the bad habits here (we want them to ultimately learn state), so they are hidden away.

### State

- This section takes a bit of a risk - it deliberately shows the wrong way trying to do state, then refactors to fix it
- Before fixing the problem, something to emphasise is the moment when we start using the virtual DOM for the first time
  - When we trigger a manual re-render to `ReactDOM.render()`
  - But we are updating the DOM here - we mentioned in lesson 1 that this was hard, and now we've got an easy way of updating it. This is the true power of React
  - The demo is not very impressive, so it's easy for the students to miss
- We cover the problems with using a global variable, so hopefully that is enough to prevent the students copy/pasting the wrong way
  - Ensure that you emphasise this is the wrong way to do state
- Demonstrate the app with multiple counters
  - Shows that each components remembers their own state separate to other components
- When to use props or state?
  - My rule of thumb: use props until you need it to change over time, then switch to state
- Container components
  - To be honest I kept this in here as a hold over from previous lessons
  - Arguably it's less relevant recently in React
  - If you're short on time then it can be skipped

### Interactive Example Index

- [Recap](https://codesandbox.io/s/react-2-recap-7zvk9n1950?file=/src/HelloMentor.js)
- [Function reference vs function call recap](https://jsbin.com/xudukezaje/edit?js,console)
- [Event Handlers](https://codesandbox.io/s/event-handlers-cc3h7?file=/src/ClickLogger.js)
- [Passing Functions as Props](https://codesandbox.io/s/passing-functions-as-props-zqlnmo16y3?file=/src/ClickLoggerApp.js)
- [Re-Rendering Components](https://codesandbox.io/s/force-component-re-rendering-llow115pll?file=/src/Counter.js)
- [Component variables resetting on re-render](https://codesandbox.io/s/component-variables-resetting-on-re-render-101h1?file=/src/Counter.js)
- [Importing useState Hook](https://codesandbox.io/s/importing-usestate-hook-8jr9f?file=/src/App.js)
- [Initialising and rendering useState variables](https://codesandbox.io/s/initialising-and-rendering-usestate-variables-zgszi?file=/src/Counter.js)
- [Using array index syntax](https://jsbin.com/lihajikesi/edit?js,console)
- [Using array destructuring](https://jsbin.com/keparevoqe/edit?js,console)
- [Updating state](https://codesandbox.io/s/usestate-counter-lorv5?file=/src/Counter.js)
- [Don't Mutate State](https://codesandbox.io/s/dont-mutate-state-hex49?file=/src/Counter.js)
- [Multiple state variables](https://codesandbox.io/s/multiple-state-variables-piq5w?file=/src/FruitCounter.js)
- [When to Use Props or State](https://codesandbox.io/s/when-to-use-props-or-state-9wl90npk4?file=/src/Greeting.js)

### Exercise solutions

- [`BestPokemonFetcher` exercise (completed)](https://codesandbox.io/s/bestpokemonfetcher-exercise-finishing-point-ght8k?file=/src/BestPokemonFetcher.js)
