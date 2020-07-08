---
id: learning-objectives
title: Learning Objectives
sidebar_label: Learning Objectives
---

## React Week 2

### Event Handlers

React to user interaction via events.

- Be able to pass functions to event handlers
  - Log to the console when a button is clicked

### State

Create a simple counter component, demonstrating knowledge of React state.

- Be able to use state variables
  - Initialise with a value with `useState(initialValue)`
  - Destructure state variable into `[stateValue, setStateValue]`
  - Render state variables to the view
  - Update with a new value with `setStateValue(newValue)`
- Identify when to use props or state

### Data fetching

Show some data from an API in a component.

- Can explain why a loading state is necessary when fetching data as the result is not available on the initial render
- Be able to trigger `fetch()` using the `useEffect()` callback
  - Be able to an empty array (`[]`) as the 2nd dependencies argument
  - Understand that this will be explained further in week 3
- Be able to store data from a successful API call in state
  - And be able to explain that this causes a re-render
- Be able to catch an unsuccessful API call, store the error in state and render an error message
