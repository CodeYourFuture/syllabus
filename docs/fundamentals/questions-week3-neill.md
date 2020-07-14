# Questions from week 3 (neill's class)

This is a rough resource for instructors.

Any question that the student raised at the start of the day went up on the whiteboard and was later transcribed here (Thanks Jon and Jacobo!).  Most were answered by volunteers in 1-to-1 discussion.

I've added some VERY rough answers here.

This may give us insight into what to cover in direct instruction and live-coding in subsequent runs of the course.

# When and how to use functions
Interested: R.M, Ajmal

* Re-watch Khan Academy section on functions [starts here](https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/functions)

* "It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other." - [Eloquent JavaScript](https://eloquentjavascript.net/03_functions.html) - (not recommended reading at this stage). 

You can read the first couple of paragraphs from some of these texts:
* [The Odin Project - on functions]https://www.theodinproject.com/courses/web-development-101/lessons/fundamentals-part-3
* [The JS Way - Chapter 5 on Functions](https://github.com/thejsway/thejsway/blob/master/manuscript/chapter05.md)
* [javascript.info on functions](https://javascript.info/function-basics)
* [Long MDN Article on Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) * 

# Very specific: How to cover the sun with clouds
Interested: Tam, Hamid, S.C

Very specific question hopefully answered 1-to-1 in class.

# Conditionals
Interested: Ajmal, Meisam

TODO: return to this in week 4 - I didn't get a specific question.

[This section of The Odin Project on Conditionals](https://www.theodinproject.com/courses/web-development-101/lessons/fundamentals-part-2#conditionals) links to many good articles on conditionals (if/else, etc)

# Inclusive vs. Exclusive Ranges
Interested: Cd

`randomInteger(0, 3)`  - does this function ever generate 0?  or 3?  Or does it start from 1?  Or max at 2?  How would you find out?  Always read the documentation for the specific function.  In the above case, if it picks values from 0, 1, 2, 3, we'd say it generates from 0 to 3 *inclusive*, rather than *exclusive*.

Whether the arguments to a function are used as inclusive or exclusive range limits *depends entirely on that specific function* and how it has been designed and, ultimately, coded.

# Docs for Processing.js
Interested: Cd, Tayfun

* The official processing.js documentation for the most recent version is at http://processingjs.org/reference/
* [Khan Academy also has processing.js reference documentation](https://www.khanacademy.org/computing/computer-programming/pjs-documentation) - this may differ from the above documentation, as khan academy doesn't use the latest version of processing.js (for the sake of course stability).

# Very specific: Nested loops - multiplication vs. increment
Interested: S.C, Hamid, Abdullah, Ajmal, R.M, (Illegible)

# Very specific: Changing animation speed for a single function
Interested: R.M, CoreA, S.C, Hamid, Ajmal

If you want to make something move slower (or faster) change the size of increment that's being made to its position, rather than changing the rate of animation.

### I REALLY want to call a function less often!

If the `draw()` is getting called 60 times per second and you want drawFish() to get called only one in every three frames, you can do:

```
var draw = function(){
  drawOctopus();
  if (frameCount % 3 === 0){
    drawFish();
  }
}
```

The `%` is called the [**remainder** operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder).  (Many call it the **modulo** operator.)  `frameCount % 3` will be 0 when frameCount is 0, 3, 6, 9, 12, ... etc, and false the other times.  Here's [a video tutorial about the % operator](https://www.youtube.com/watch?v=r5Iy3v1co0A) in a creative coding context.


# Changing (animating) drawing size & position.
Interested: Yusuf, Ryan, Sonj, Constantine

Answered in class.  The game loop & updating a global variable.

# Making groups of shapes resize

Interested: -

The best way to do this is to use [`scale()`](http://processingjs.org/reference/scale_/) along with `translate()`.  It takes a while to learn it, however.  [Here's khan academy's discussion of scale()](https://www.khanacademy.org/computer-programming/scalex-y/6712922034143232).

# Background image upload?
Interested: R.M, S.C

Not possible in the Khan Academy platform, to avoid potential offensive content upload.

In week 4 we'll look at the similar p5.js library and the platform https://openprocessing.org/ which makes this easy.

# Origin of rotation function
Interested: Tayfun

(Advanced.  Not needed for this course.)

[Here's the rotate() documentation](http://processingjs.org/reference/rotate_/).  

* It will rotate around the current origin.  
* The origin can be moved beforehand with `translate()`
* to restore the origin and rotation, use a pair of pushMatrix() before and popMatrix() after.
* the documentation above has an example which is rotated about the middle of the canvas. (because of the translation to width/2, height/2).

# Fill in a shape incrementally
Interested: -

(I don't know what this is.)

# When do we need the draw function?
Interested: Kyaw, Tam, Sonj

# Flow control - functions calling functions?
Interested: S.C, Ajmal, Hamid
