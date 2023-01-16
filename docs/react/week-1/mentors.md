---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

## IMPORTANT - Setup Needed For Trainees

If you are teaching this class in the coming weeks you **must** instruct your trainees to complete the instructions below.

[React Preparation](../prep)

If your trainees do not arrive with these steps completed then you will lose a lot of time on your first lesson. You should consider running short mid-week sessions the week before to help trainees get set up.

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-react](https://codeyourfuture.slack.com/archives/C76GQDRH9)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Resources

- [Quiz - React Week 1 - 28/05/2020](https://docs.google.com/forms/d/e/1FAIpQLScF624jfjHCVzrqfu9sR-MWYyaZD3vRGHz3pDjUgbfyJ4vq_A/viewform)
  - Created by Chris Owen
- [Video - Job Listing Homework Introduction - 29/05/2020](https://youtu.be/-wLrSkSABzQ)
  - Created by Subhav Gautam

## Solutions

- [PokeDex In-Class - Exercise Solution - 05/06/2020](https://github.com/CodeYourFuture/pokedex-solution)
  - Created by London and Ali Smith
  - These are now embedded into the syllabus itself, see [`demos` folder](https://github.com/CodeYourFuture/syllabus/tree/master/docs/react/week-1/demos) for source
- [Hotel Homework - Solution - 24/07/2020](https://github.com/CodeYourFuture/Hotel-React-solution)
  - Created by Manchester and Dorota Sobkow

## Notes for mentors

- Components - talk about the conceptual idea components, not just React components
  - E.g. bootstrap components
- Why React?
  - Updating the DOM is potentially buggy, verbose, slow
  - In complex web apps (like Facebook), updating the DOM is common
  - React solves a lot of those problems
- Thinking in React exercise - useful to print out the screenshot, so they can draw on it
- Rendering in React section
  - Build towards component usage from vanilla DOM
  - This hopefully reduces the "magic" that React is
  - Although don't spend too much time on it - the trainee's don't know about other frameworks, and so don't really care about other approaches
  - Also useful to identify why the React api is improved over the vanilla DOM apis
- JSX section
  - Open the [Babel REPL](https://babeljs.io/repl/) - demonstrate that there isn't any magic in JSX
  - Just React.createElement calls with syntax sugar
- Installing Create-React-App
  - This should be set as homework ahead of the lesson
    - Saves time waiting for everyone to install
    - Also saves CPU cycles on slower computers, which may affect video calls
  - CRA can consume a lot of resources (especially on older laptops) so emphasize stopping/starting
  - This is the first time that trainees will have encountered a file watcher/daemon background process
    - So take some time to demonstrate how to start and stop the app
    - Recommend that trainees with slower computers stop the app when they are not using it
- Installing `stop-runaway-react-effects`
  - A package to prevent accidental infinite `useEffect` loops
  - It **must** be imported before the `react` import so that `useEffect` can be monkey-patched
  - [Package docs](https://github.com/kentcdodds/stop-runaway-react-effects)
- React components section
  - Originally this was written with class components first
    - However, trainees went home and googled and saw alternative syntaxes
    - This is a common theme in this first lesson - have to teach some stuff that is perhaps unnecessary just so that they're prepared when they see it at home
- Making an argument for props section - Relate to a situation in real life, something like: imagine what our boss might ask for with this small application. What could our boss ask for which would mean we would have to make changes to the code?
- Exercises
  - Written to be quite step-by-step deliberately
    - Some trainees were distracted by the wording and not getting to the useful part of the exercise
    - This is a tricky balance though - now some trainees will be distracted by the wordy-ness of the exercises. Feedback welcome
  - Exercises in lessons 2 & 3 depend on the completing the exercises in lesson 1
    - So ensure trainees have completed most of them before moving on
    - We may want to introduce a way of "catching them up" - have tagged "checkpoints" on a git repo?
- Interactive examples
  - All of the examples should have an associated CodeSandbox with identical code
  - This is so that you can change the example to help demonstrate if necessary
    - I have found this very useful in the past, especially when answering questions like "what happens if you do X?"
    - You can type up exactly what they're asking about and demo it
  - Props section
    - Makes a common analogy of "props as arguments" to a function
    - Trainees often get tripped on up on the `props` argument to a functional component
      - They tend to forget to add it to the function signature
      - Or they think that each prop is given as a separate argument
  - The first class may be a little short. But not short enough to start getting into state
    - If you have extra time, PropTypes/defaultProps might be worth covering
    - There is a Further Reading section at the very end of lesson 2 about this

### Interactive Example Index

- [Vanilla DOM "Hello World"](http://jsbin.com/motorexehu/edit?html,output)
- [React.createElement "Hello World](http://jsbin.com/recegadexu/edit?html,output)
- [JSX "Hello World"](http://jsbin.com/gekahexige/edit?html,output)
- [Component composition](https://codesandbox.io/s/0x4wonqn00)
- [Interpolation in JSX](https://codesandbox.io/s/l910pqnjql)
- [Interpolation with methods in JSX](https://codesandbox.io/s/nw29kzx744)
- [Interpolation with .map in JSX](https://codesandbox.io/s/7mw0mw3qx0)
- [Key prop for lists in React](https://codesandbox.io/s/pwp8ox4kn0)
- [Importing/Exporting React Components](https://codesandbox.io/s/1z6xozl81l)
- [Intro to Props](https://codesandbox.io/s/vmjy0o91m7)

### Exercise solutions

- [Exercise G: BestPokemon finishing point](https://codesandbox.io/s/bestpokemon-component-exercise-finishing-point-u12ke)
