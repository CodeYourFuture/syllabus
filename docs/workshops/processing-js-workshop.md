---
id: processing-js-workshop
title: Processing.js Workshop
sidebar_label: Processing.js Workshop
---

If you enjoyed using JavaScript to make drawings and animations, we recommend further study and play with the almost identical p5.js library. It's better.

## Where to start coding with p5.js

- We recommend the site called [OpenProcessing](https://www.openprocessing.org/) - it makes it easy to click ["new sketch"](https://www.openprocessing.org/sketch/create) and start immediately
  - Alternatively, [here's a starting sketch](https://www.openprocessing.org/sketch/812085) that defines functions the way you have learned so far
- If you want to use CodePen, here's a [p5.js starting "pen"](https://codepen.io/enz0/pen/vYEXyZr?editors=1010)
- If you want to see the whole picture of how you could use this on a website, [here's a website project on Glitch](https://glitch.com/~cyf-p5js-start) with HTML, CSS, and JavaScript files
- [A tutorial for a random words poster](https://www.openprocessing.org/sketch/812093) which works through a project using p5.js

## Why change?

- Khan Academy platform is not stable for complicated programs
- Khan Academy doesn't "feel professional" or "polished"
- The Processing.js library used by Khan Academy has been retired
- p5.js is much more widely used than Processing.js
- p5.js has more and better documentation and tutorials
- p5.js is more advanced and more powerful than Processing.js. You can make sketches that:
  - Process video from the webcam
  - [Process audio from your microphone](https://www.openprocessing.org/sketch/812282)
    - [Simplest example](https://www.openprocessing.org/sketch/812284/)
  - Load and show 3d models
  - Interact with all sorts of other interesting JavaScript libraries
    - Random example: [p5.js pose-detection with using PoseNet](https://codepen.io/enz0/full/wvBzoMN)
- You can use _modern_ javascript language features, which make things nicer

### Pick one element at random from an array

However, some of my favourite differences are very, very small. Here's one: If you have an array, you can pick one element of it at random, simply by passing the array as a parameter to the `random()` function.

Example:

```javascript
// (inside your draw() function...)

var colorNames = ["maroon", "skyblue", "whitesmoke"];
var chosenColor = random(colorNames);
fill(chosenColor);

var words = ["code", "your", "future"];
var chosenWord = random(words);
text(chosenWord, 100, 100);
```

## Best place to learn p5.js

We recommend Daniel Shiffman's Youtube course: ["Code! Programming with p5.js"](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA).

## What's OpenProcessing.org?

The above course introduces a website called "p5.js web editor" which allows you to quickly write your projects and test them out. It's ok, but we recommend a different website which does the same thing: [https://www.openprocessing.org/](https://www.openprocessing.org/).

It has [a huge gallery of work by other artists](https://www.openprocessing.org/browse/), and you can see all of their code to learn from!

### When you read others' code and it makes no sense...

**Don't Panic!** Do not be worried when you find a project that looks amazing but then you look at the code and can't understand it - this is normal.

- These projects can become VERY complex and the artists often aren't very concerned about how easy their code is to read
- Code reading is a skill you have to work on
- Take it slow. Study simpler projects to start with

## Other courses

In addition to ["Code! Programming with p5.js"](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)...

- The creators of processing have [a p5.js course on kadenze.com - "Introduction to Programming for the Visual Arts with p5.js"](https://www.kadenze.com/courses/introduction-to-programming-for-the-visual-arts-with-p5-js-vi/info)
- Joshua Davis has some courses on processing on skillshare, which is free for 2 months.

  [Programming Graphics I: Introduction to Generative Art](https://www.skillshare.com/classes/Programming-Graphics-I-Introduction-to-Generative-Art/782118657). This does _not_ teach in javascript but in Processing, which uses the Java language instead. However, if you LOVE the topic, you could skim these videos and still learn a lot. Normally I would recommend getting strong in ONE language \(JavaScript\) for the first year or two of your programming journey.

- Mostly aimed at teachers: [Introduction to Computational Media with p5.js](https://nycdoe-cs4all.github.io/) has material for teachers to run a course. Trainees can find some interesting project ideas.
- If you want to stick with processing.js and Khan Academy longer, there is [Advanced JS: Games and Visualizations](https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations). I haven't worked through this course, yet.

## Some more differences between Processing.js and p5.js

As discussed above, there are some differences between Processing.js \(used in the Khan Academy environment\) and p5.js. Here are some more details of the differences.

### You must always define the `draw()` function

- The `draw` function is not optional.
- All drawing operations \(`fill()`, `ellipse()`, `rect()`, etc\) should go inside the `draw()` function.

### You can provide a `setup()` function for set-up

It will be called before the first call to your `draw()` function.

### If you _don't_ want animation, you must call `noLoop()`

Unlike Khan Academy's Processing.js, you must always define a `draw()` function, even if you don't want animation. `noLoop()` and `loop()` can be used to prevent or enable animation by repeated calls to the `draw()` function. The default is to animate.

[Live Demo](https://www.openprocessing.org/sketch/812071):

```javascript
var setup = function () {
  noLoop();
};

var draw = function () {
  fill(random(255), random(255), random(255));
  rect(50, 50, 400, 400);
};
```

### You can't call Processing.js functions at the top level

You can't call functions like `random()`, `fill()`, `color()`, `rect()` at the top-level \(i.e. outside of the p5.js functions such `setup()`, `draw()`, `mousePressed()`, etc\). If you try to do this, you'll get an error such as `Uncaught ReferenceError: random is not defined`

The editor at OpenProcessing.org is kind enough to add the following good advice - read your error messages! `Did you just try to use p5.js's random() function? If so, you may want to move it into your sketch's setup() function.`

### Global variables must be initialised in `setup()`, if they need p5.js functions

If you want a _global_ variable to be initialised at random, using p5.js's `random()` function, you must do it in two parts:

1. Declare the variable `var xPos;` outside of the `setup()` function
2. Initialise the variable inside the `setup()` function. Example: `xPos = random(0, 400);`

**GOOD CODE example** - do this if you need to initialise a global variable using `random()` or `color()` or `width` or `height`...

```javascript
var xPos;

var setup = function () {
  xPos = random(0, 400);
};
```

**BAD CODE example** - this won't work

```javascript
// Start of program
var xPos = random(0, 400); // can't call random() outside of setup() or draw(), etc.

var draw = function () {
  rect(xPos, 100, 50, 50);
};
```

### The default canvas is only 100, 100...

However, you can make it bigger calling `createCanvas()` in `setup()`.

[Live Demo of specifying canvas size](https://www.openprocessing.org/sketch/create):

```javascript
var setup = function () {
  createCanvas(windowWidth, windowHeight);
};
```

p5.js provides global variables `windowWidth` and `windowHeight`, AND `width` and `height` which will hold the size of the canvas.

## Where's the documentation?

The p5.js documentation is at [https://p5js.org/reference/](https://p5js.org/reference/). Each function has multiple examples of how it can be used.

## Other migration guides

If you want to stick with Processing.js, Khan Academy have [this guide to using Processing.js outside Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/advanced-development-tools/a/using-processingjs-outside-khan-academy).
