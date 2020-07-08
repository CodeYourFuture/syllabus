---
id: learning-objectives
title: Learning Objectives
sidebar_label: Learning Objectives
---

## React Week 3

### Data fetching (advanced)

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
