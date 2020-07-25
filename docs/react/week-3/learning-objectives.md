---
id: learning-objectives
title: Learning Objectives
sidebar_label: Learning Objectives
---

## React Week 3

### Data fetching

Show some data from an API in a component.

- Can explain why a loading state is necessary when fetching data as the result is not available on the initial render
- Be able to trigger `fetch()` using the `useEffect()` callback, with an empty array (`[]`) as the 2nd dependencies argument
- Be able to store data from a successful API call in state
- Be able to catch an unsuccessful API call, store the error in state and render an error message
- Allow effects to update in response to prop changes
  - Explain why a component with an effect dependent on props is broken with empty `useEffect()` dependencies (`[]`)
  - Be able to fix a component with an effect dependent on props using the `useEffect()` dependencies
  - Can describe the "lifecycle" of a component with `useEffect()` when props change

### Forms

- Create a simple form in React using the controlled component pattern
  - Can initialise state with `useState()`
  - Be able to set the input `value` to the state variable
  - Can explain why the input does not change when typing if `onChange` is not set
  - Be able to update the state using an `onChange` handler
- Use data from a submitted form to update the application
  - Be able to handle an `onSubmit` event to the form
  - Be able to collect the form state variables and use them (setting state, POST request)
