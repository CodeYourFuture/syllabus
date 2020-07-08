---
id: mentors
title: Mentor Notes
sidebar_label: Mentor Notes
---

## Resources

- [Quiz - React Module - 28/04/2019](https://github.com/CodeYourFuture/react-quiz)
  - Created by London and Ali Smith

## Solutions

- [PokeDex In-Class - Exercise Solution - 05/06/2020](https://github.com/CodeYourFuture/pokedex-solution)
  - Created by London and Ali Smith

## Notes for mentors

### Updating data when props change

### "Lifecycle" of a component

With Hooks, we don't really talk about the "lifecycle" of a component any more, but this section is intended to show exactly what happens at each step in the code.

Walking through the code like this is sometimes called "playing computer". A step-by-step description has been provided in the syllabus, but this was intended as revision material. It is recommended to keep the code example on the screen and walk through each line together with the students.

To keep students engaged, it can be useful to ask them to predict what the next step does. This also allows you to get feedback on whether a student is following or not.

At the end of the "playing computer" ask whether the students have spotted the bug in the logic: the effect is not updating when the prop changes. Therefore the key point to emphasize is that `useEffect` is **not** queued when the component re-renders.

### ESLint rule for React Hooks

Emphasize that the rule likely knows best, so if it suggests adding a dependency it is recommended to add it.

### Interactive Example Index

- [State recap](https://codesandbox.io/s/react-3-state-recap-38x3b?file=/src/Counter.js)
- [Data fetching recap](https://codesandbox.io/s/react-3-recap-h2p24?file=/src/MartianPhotoFetcher.js)
- [Effects with prop updates (not working)](https://codesandbox.io/s/fetch-with-prop-updates-starting-point-x1dox?file=/src/App.js) (used in "playing computer" exercise)
- [Effects with prop updates (working)](https://codesandbox.io/s/fetch-with-prop-updates-working-64vw3?file=/src/App.js)
- [Fetch with loading state (on initial load)](https://codesandbox.io/s/fetch-with-loading-state-part-1-7bi9z?file=/src/FetchWithLoadingState.js)
- [Fetch with loading state (between prop changes)](https://codesandbox.io/s/fetch-with-loading-state-part-2-dvu6k?file=/src/FetchWithLoadingState.js)
- [Controlled component](https://codesandbox.io/s/controlled-component-4jq1yqy8kx?file=/src/SimpleReminder.js)
- [Controlled component with multiple fields](https://codesandbox.io/s/controlled-component-createaccountform-m7p083zn6p?file=/src/CreateAccountForm.js)
- [Object spread operator](https://jsbin.com/suyekiwezu/edit?js,console)
- [Object spread operator with overrides](https://jsbin.com/hiwuwobeza/edit?js,console)
- [Computed property names](https://jsbin.com/jegerohati/edit?js,console)

### Exercise solutions

- [`BestPokemonSelector` component](https://codesandbox.io/s/bestpokemonselector-component-mdz0o?file=/src/BestPokemonSelector.js) for copying into dependencies array exercise
- [`BestPokemonSelector` exercise (starting point after copy/pasting)](https://codesandbox.io/s/bestpokemonselector-exercise-starting-point-yt3cw?file=/src/BestPokemonSelector.js)
- [`BestPokemonSelector` exercise (completed)](https://codesandbox.io/s/bestpokemonselector-exercise-finishing-point-pcfwp?file=/src/BestPokemonSelector.js)
- [`CaughtPokemon` exercise (starting point)](https://codesandbox.io/s/caughtpokemon-form-exercise-starting-point-t5wul?file=/src/CaughtPokemon.js)
- [`CaughtPokemon` exercise (completed)](https://codesandbox.io/s/caughtpokemon-form-component-wx99d?file=/src/CaughtPokemon.js)
