---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

- Class components section
  - Trainees often get tripped on converting between functional & class components
  - Common problem - `render(props)` instead of using `this.props`
- Uses the `state = {}` class property pattern
  - This avoids having to use a `constructor` and calling `super(props)`
    - Trainees won't have encountered class inheritance, so this can cause confusion
- Uses the `foo = () => {}` method style
  - For non-React-provided methods (e.g. lifecycle methods)
  - Avoids issues with `this`. Which is a huge pain to explain/understand, so we avoid it
  - This syntax isn't part of the spec yet, but CRA has babel plugin for it
  - Ensure that you cover the exception (lifecycle methods)
- Unmounting
  - Open dev tools and show how DOM updates - shows that the DOM is changing in response to React
- Lifecycle
  - The lifecycle diagram has been edited to simplify to just the lifecycle methods that we're interested in
- Clock exercise
  - Make sure they copy/paste the example code - post in Slack
  - Demonstrates the need to tear down subscriptions set up
  - Might need to touch on memory leaks
    - this is hard for them to grasp as "just a console.log" seems like it wouldn't take much memory
- Data fetching
  - Touch on `.then(res => res.json())` - turns response into JSON
  - API is from Nasa - fetches Curiosity rover image from the given date
  - Error handling code to get fetch to throw an error on a non-200 response:

```js
.then((res) => {
  if (res.ok) {
    return res
  } else {
    throw new Error('HTTP error')
  }
})
```
