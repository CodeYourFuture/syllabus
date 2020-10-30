---
id: coding-standards
title: Coding Standard
sidebar_label: Coding Standards
---

## Overview

At CodeYourFuture, we follow the AirBnB coding guidelines

https://github.com/airbnb/javascript

## General

- Indentation should be consistent

  - I.e. all files should use either tabs or spaces and the same width (e.g. 4
    characters)
  - Do not mix tabs and spaces

- Use one casing style

  - Usually:
    - camelCase for JavaScript
    - hyphen-case or camelCase for CSS
  - Do not mix casing styles e.g. let first_name = person.firstName;

- Test coverage should be sufficient
- Comment code that might be difficult to understand...
  - ...but also consider simplifying complex code if at all possible. If you
    find that you're writing a lot of comments, then it's a good indicator that
    your code is too verbose and potentially over-engineered

## JavaScript

- Variable and function names should be descriptive

  - E.g. `const actors = getActorsFromFilm(film);` is easier to understand than
    `const temp2 = doStuff(temp);`

- Keep functions as short as possible

  - If a function is longer than 15 lines, consider breaking it down into
    smaller functions

- Use variables if a literal value is repeated more than once
  - E.g. `console.log('Peter', 'Peter'.length);` -> `const name = 'Peter'; console.log(name, name.length);`

## CSS

- Styles should be based upon class selectors where possible e.g. `.some-class`

  - Facilitates reuse

- **Don't** use ID-based selectors e.g. `#some-id`
- Avoid styling HTML element selectors directly, unless it's to remove default
  browser styling

- Avoid using style properties in JavaScript
  - E.g. `myElement.style.display = 'none';`
  - This results in styles that are difficult to reuse
  - Use `Element.prototype.classList` instead e.g.
    `myElement.classList.add('hidden');`

## Git

- Make small, frequent commits

  - If you make a mistake, then it's easier to revert than if you only make
    large, occasional commits

- Avoid committing commented-out code
  - If the code exists in a previous commit, then use GitHub or `git diff` to
    view it
