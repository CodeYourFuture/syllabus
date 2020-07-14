---
id: challenges
title: Khan Academy challenges with objects and arrays
sidebar_label: Challenges
---

## Challenge: Make it rain... objects!

Make a spin-off of your ["Make it rain" project](https://www.khanacademy.org/computing/computer-programming/programming/arrays/pp/project-make-it-rain), and change it to use 1 array of **objects** instead of many arrays. So instead of `xPositions`, `yPositions`, `speeds`, etc arrays you'll simply have 1 `raindrops` array, and each raindrop will have:

- An `x` property
- A `y` property
- ...

More ideas:

- Try adding more properties to each object:
  - A `speed` property
  - A `size` property to each object and randomise it at the start.
  - A `color` property to each object - you can make a random colour like this: `color(random(255), random(255), random(255))`
- Try using squares or rectangles instead of ellipses
- Try using images instead of ellipses

## Challenge: Fishtank v2 - using objects

Go back to your [https://www.khanacademy.org/computing/computer-programming/programming/functions/pp/project-fish-tank](https://github.com/CodeYourFuture/intro-to-programming-module/tree/444e160bfd54fc9fe6a786b5b7643c30f0694c76/Fish%20tank%20project/README.md), and make a spin-off.

In the spin-off, change your code so that each fish is represented by an object. Fish objects might have these properties:

- `x`
- `y`
- `speed`
- `colour`
- `size`

Add bubbles \(if you have not already\). Make these bubbles objects, too, with these properties:

- `x`
- `y`
- `size`
- `speed` \(if you want some to move at different speeds\)

Add a sea-bed with pebbles which could be objects too. What properties do you think the pebble objects should have?

Add some _seaweed_.

- Try to use the `random()` function for the x position, but with a fixed y position
- Try to make the height random
- Try a random color _variation_

### Advanced challenge 1

Make each bubble clickable - when you click it it changes in colour. To track which bubbles have been clicked, you should add a `clicked` property to each bubble object.

Use the function `dist(x1, x2, x2, y2)` to find the distance between two points.

### Advanced challenge 2

Try to make the fish swim the other way.

## Challenge: many snowmen, with objects!

Go back to the ["Simple snowman" challenge](https://www.khanacademy.org/computing/computer-programming/programming/drawing-basics/pc/challenge-simple-snowman) and make a spin-off.

You don't need to animate this one, so you don't need a `draw()` function.

- Change the code so that you draw 100 snowmen in random places
- Use an object to keep track of the position of each snowman
- Optional: try to have each snowman be a different size
- Optional \(very advanced\): can you have each snowman choose from 3 different faces? One way to do this would be to have three functions: `drawFace1(x, y, size)`, `drawFace2(x, y, size)`, `drawFace3(x, y, size)` and somehow choose between them for each snowman/snow-woman
- Optional: it would be nice to give the snow-people a colourful hat and scarf

## Challenge: shooting stars, with objects

Go back to the ["Shooting stars" project](https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pp/project-shooting-star) and make a spin-off.

- Change your code so that shooting stars are represented by objects. Each star would have an `x` and `y` property, and a `xSpeed` and `ySpeed` property. \(To move the star increment `x` by `xSpeed`, and `y` by `ySpeed`\)
- If you didn't already, add some buildings for a skyline
  - Each building should be an object with x, y, and height
  - You don't need to draw the windows if you haven't already done that

## p5.js Challenge - font outline

Only attempt this challenge if you've seen and understand p5.js and OpenProcessing before.

- Fork \(spin-off\) [this "Font as points" challenge project](https://www.openprocessing.org/sketch/812356)
- Read the code comments for details
- Essentially, you are provided with an array of points on the outline of some text, and you must draw a circle at each point.
