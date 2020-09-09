---
id: container-components
title: React Further Reading - Container Components
---

In real world applications, the things we want to remember in state follow the [_business logic_](https://en.wikipedia.org/wiki/Business_logic) required by our users. So for example the number of caught Pokemon in the exercise increases when you click on the button _Catch Pokemon_. Most of the time, business logic is about figuring out when and how to change state.

To help us cleanly split up code that performs business logic from code that shows the user interface, we split components into _presentational_ and _container_ components. Often we have components that don't do anything except manage state according to the business rules and render the right presentational components. On the other hand, we often have components that don't change any state, and just render using the provided props.

Container components usually have some state and handler methods, while presentational components usually just receive props and render JSX using these props.

[This article by Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) has more details.

| Exercise A                                                                                                                                                   |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Take a look at the components in your Pokedex app - can you identify a good use case for a 'container' component? What about 'presentational' components? |
| 2. Discuss this with another student.                                                                                                                        |
