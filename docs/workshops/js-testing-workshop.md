---
id: js-testing-workshop
title: JavaScript Testing Workshop
sidebar_label: JavaScript Testing Workshop
---

## What will we learn today?

- [Tracing Code](#tracing-code)
- [Testing](#testing-our-code)
- [Unit Testing](#unit-testing)
- [Unit Testing Frameworks - JEST](#jest)
- [Test-driven Development](#test-driven-development)
- More on Testing
  - [Test coverage](#test-coverage)
  - [Refactoring](#refactoring)
  - [Modules](#modules)

> Fork and Clone the [js-exercises-tdd repo](https://github.com/CodeYourFuture/js-exercises-tdd)

## Tracing Code

What is Code? Computer code is a **set of rules or instructions**. It is made up of words and numbers and when you put them in the **right order** it will tell your computer what you want it to do.

Let's trace these code samples together:

- [Sample 1](https://github.com/CodeYourFuture/js-exercises-tdd/blob/master/I.write-tests/01-greet-people/greet-people.js)

- [Sample 2](https://github.com/CodeYourFuture/js-exercises-tdd/blob/master/I.write-tests/02-remove-vowels/remove-vowels.js)

- [Sample 3](https://github.com/CodeYourFuture/js-exercises-tdd/blob/master/I.write-tests/03-remove-vowels-from-array/remove-vowels-in-array.js)

## Testing our code

We have just traced the output of some code on paper, but how do ensure that the code actually does what it is supposed to do when we run it.

> Discussion: How have we been testing our code so far? How do ensure it is _correct_. What is "_correct_" anyhow?

In many organisations, there are full teams dedicated to **testing** and ensuring that the code written behaves correctly, to report **bugs** and make sure that they are fixed on time. In general, **Quality Assurance** is a responsibility of everyone in a team starting from Project Manager, Scrum Masters, Developers and Testers.

There are typically several levels of testing when working on a project:

- Unit testing
- Integration testing
- Functional, End to End testing and User Acceptance Testing (UAT)

[This answer from Stack Overflow](https://stackoverflow.com/a/4904533) has a good explanation of types of testing. The defintions for Functional, e2e and UAT are often mean different things in different teams, the responisibility for them also falls on different individuals depending on the team.

_Unit testing_ though is always the responsibility of the Developer, and it is a very important skill for any professional developer to be able to write tests, and also write code that is testable.

> Discussion: What is testable code?

```js
var result;

function getMentorInfo(mentors, name) {
  var greeting = "Hello ";

  result = mentors.find(function (person) {
    return person.name === name;
  });

  var mentorTitle = "Junior Developer";

  if (result.yearsOfExp > 10) {
    mentorTitle = "Senior Developer";
  } else if (result.yearsOfExp > 20) {
    mentorTitle = "Very Senior Developer";
  }

  result.jobTitle = mentorTitle;
  result.fullName = result.title + " " + result.name;

  return result;
}

/*
  var mentors = [
      {
          name: 'Irina',
          title: 'Dr.',
          yearsOfExperience: 10
      }, {
          name: 'Ashleigh',
          title: 'Dame',
          yearsOfExperience: 20
      }, {
          name: 'Etza',
          title: 'Professor',
          yearsOfExperience: 30
      }
  ];
  
  var result = getMentorInfo(mentors, 'Etza')
  Trace the value of "result"
*/
```

## Unit Testing

Testing is a key skill for any software programmer. We need to make sure our
software is thoroughly tested, otherwise bad things happen. Testing makes sure
our programs behave like we intend them to do - **if we don't test, we can cause
severe bugs**. Bad software can make planes crash, companies bankrupt, and users
of your software really frustrated.

There are different levels on which we can test software, for example
integration testing, end-to-end testing, and unit testing. Today we will deal
with unit testing, which is probably the most universal testing discipline.

A unit test is exactly that - it tests a _unit_ of code. "Unit" can mean
different things, but in JavaScript it usually refers to a single function.

Remember when we talked about functions? Functions take _input_ (as arguments),
do something with it (in the function body), and return _output_ (using the
`return` statement). Ideally, a function should always return the same output if
the same input is given. It makes it predictable and testable - and that's what
we want!

```
         |-----------------|
input => | doing something | => output
         |-----------------|
```

So, when unit testing a function, we want to make sure that _for a certain
input, we get the expected output_. For this we need to make sure that the
output matches our expectations. In the simplest form that means we do an
equality check:

```js
myFunction(input) === expectedOutput;
```

We can formalise this using another function that compares two values and
complains when they do not match. Such a function is prepared in
`unit-testing/equals.js`.

We can use this function to simply compare to values:

```js
equals(1, 1); // This should pass
equals(1, 2); // This should fail
equals("Hello", "Hello"); // This should pass
```

Now we can use this `equals()` function to test our own code by comparing a
function result to an expected value.

Remember that one function can be used as an argument when a second function is called. In this instance, the function we are testing would represent our first function, and our `equals()` function would represent the second, like so...

```js
equals(myNewFunction(arg1, arg2, etc), expectedOutput);
```

As you can see in this example, instead of using a number as the first argument to the `equals()` function, we have used a function instead; the one we wish to test.

> Exercise: Write tests for the the exercises under `I.write-tests`

### Unit testing frameworks

There are lots of other things you might want to test for than two things being
equal. You might want to test if a number is smaller or greater than another, if
a function was called, if an error happened, or if one thing happened before
another thing, or how long a function call took to execute.

We don't have to build all these things ourselves. Instead there are _unit
testing frameworks_ that take all that work off our shoulders. All we need to do
is provide the code and the tests.

### Jest

The unit testing framework we are trying to day is called
[Jest](https://facebook.github.io/jest/). It's created by Facebook and useful
for all kinds of unit testing (especially testing React, which we will do in a
later lesson).

Look into your `jest/` folder. You will find a file there, `sum.test.js`. The
suffix `.test.js` tells Jest that this file contains tests it should execute. To
execute the test, run the following command in your terminal:

```sh
npm test
```

This command runs the test in `sum.test.js`, which tests the `sum()` function.
You can see the test output and the fact that the test passed.

Tests cases in Jest have the following structure:

```js
test("test description", function () {
  // Test instructions
});
```

Jest provides a set of functions that you can use to write your actual tests.
They are created in a way that imitates natural language, for example:

```
_Expect_ sum of 1 and 2 _to be_ 3
```

becomes

```js
expect(sum(1, 2)).toBe(3);
```

You can add multiple test statements in the same test case (a test case is one
call of the `test` function, but you can also create multiple test cases in one
file. It is important that you give all your test cases meaningful descriptions.

> _Exercise:_ Add another test case to `sum.test.js`. Is the sum of 10 and -10
> really zero? Run the tests using Jest.

> _Exercise:_ Take the `findNeedle` function you have tested previously, copy it
> into the `jest/` folder and call it `findNeedle.test.js`. Then write a test to
> be used with Jest, similar to `sum.test.js`. Make sure you cover multiple
> inputs and give all tests meaningful descriptions! Run the tests using Jest.

## Test Driven Development

Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements. [Wikipedia]

When developing following TDD, you normally follow this sequence:

1. Add a test
2. Run all tests and see if the new test fails (Red)
3. Write the simplest code to make the test pass (Green)
4. Refactor
5. Repeat

Read more on the [Wikipedia article](https://en.wikipedia.org/wiki/Test-driven_development) and the resources at the end.

[Red Green Refactor](https://www.codecademy.com/articles/tdd-red-green-refactor)

> Exercise: Two mentors pair on a problem doing "ping pong" TDD. One writing the test, the other writing the implementation.

## More on Testing

### Test coverage

Test coverage describes the extent to which a code base is tested. When Jest
runs your tests, it generates a so-called _coverage report_. This report tells
you how many of your _lines of code_ are covered by tests, how many functions,
statements, and branches.

> A branch is one of multiple ways a code control flow can go. For example, if
> you have an `if() ... else ...`, both the "if" and the "else" branch must be
> covered by tests.

We want to keep our code coverage as high as possible. Jest allows us to
generate a coverage report when we run the following command in the terminal:

```sh
npm test -- --coverage
```

> _Exercise:_ Check your code coverage for the tests you wrote. Is any of the
> numbers below 100%? If so, try and bring it up to 100%!

### Refactoring

There are times when we want to make our code better without changing any
functionality, for example because we just learnt about a better way to solve a
certain problem (like, finding needles in haystacks). This is called
_refactoring_.

When previously **GREEN** code - working code! - suddenly does not work anymore,
we call this a _regression_. Our existing tests can make sure that when we
refactor, the functionality of our code actually stays the same, and does not
regress.

> Exercise: Refactor some of the exercise we've written tests for.

## Modules

So far, all our programs have been in their own single files. But Node programs
can become really large, and having all our code in only one file will not be
maintainable.

We can therefore split our code into so-called _modules_. A module is basically
a JavaScript file that makes its functionality available to other modules and
programs.

### Creating modules, exporting code

It is really simple to take existing JavaScript code and turn it into a module
by exporting its functionality:

```js
function printName(name) {
  console.log("My name is " + name);
}

module.exports = printName;
```

The key here is the line containing `module.exports`. As you see, this is an
assignment, and whatever is assigned to `module.exports` will be made available
to other modules and program when this file is imported.

### Using modules, importing code

But how do we make use of another module in our program? We need to _import_ it,
and this is done using a function called `require()`.

> There are different module formats for JavaScript. The one we are using here,
> which is natively supported by Node, is called **CommonJS**.

```js
var printName = require("./printName.js");
```

> The string passed to the `require()` function is a _path_ to the file you are
> importing. `./` signifies the current directory, so the above command will
> import a file called "printName.js" that is in the same directory as our
> program.

Assuming our program is in the same folder as `printName.js`, we can use the
above code to import the functionality provided by that module and store it in
the `printName` variable.

We can then continue to use the `printName` function as if it we defined it in
our own program!

```
var printName = require('./printName.js');

printName();
```

> Modules can not only export functions, but all variable types you already
> learned about. Most commonly, they export a function or an object containing
> multiple functions.

> _Together:_ Edit the file `modules/main.js` and follow the instructions.

### Separating code and tests

Exporting and importing modules is really useful for testing, too.

As a rule of thumb, we never want to mix our actual code with our tests. It is
therefore common to put them in separate files. We are going to call the file
containing the tests after the file containing the code to be tested, just
appending `.test` at the end of the filename. Like so:

```
main.js               # Our main program
main.test.js          # Tests for our main program
someOtherCode.js      # A module called "someOtherCode"
someOtherCode.test.js # Tests for the "someOtherCode" module
```

> The naming is really up to convention - you can even put your tests in a
> different folder! However, for Jest it is important to call test files
> "\*.test.js".

# Glossary

You should know these terms by the end of this class: Testing, Quality Assurance, Unit Tests, Integration Tests, Refactoring, Regression Tests .. any more?

# Resources

1. [MDN Objects basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
2. [MDN OOP in JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
3. [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)
4. [Jest](https://facebook.github.io/jest/)
5. [Modules](https://nodejs.org/api/modules.html)
6. [Setup VS Code for Debugging](https://medium.com/software-developer/debugging-facebooks-jest-for-react-in-visual-studio-code-9059223e1e71)

## Tracing code resources

Check out these videos. They contain code that is not JavaScript being traced on paper.

[Hand Tracing - Intro to Java Programming](https://www.youtube.com/watch?v=TZss5ukwN8s)

[Tracing code by hand](https://www.youtube.com/watch?v=tJGrie7k97c)

[Tracing a flowchart](https://www.youtube.com/watch?v=SEtNBShckCg)

[Java Tracing Arrays Worksheet 1](https://www.youtube.com/watch?v=niwBxBUzDu4)

[Nested loops](https://www.youtube.com/watch?v=5mxT9x5rgCg)

## Coursework

1. Finish the Katas and exercises in the project we've worked on [today](https://github.com/CodeYourFuture/js-exercises-tdd)

2. Follow this tutorial about [Debugging with Chrome](https://developers.google.com/web/tools/chrome-devtools/javascript/)

3. Register yourself on the Marc Littlemore's free [JavaScript Testing for Beginners](https://www.marclittlemore.com/courses/javascript-testing-beginners-course/?signup=cyf-course) course and work your way through the 7 lessons, which are delivered via a daily email. The course uses a Mocha/Chai framework, which is in common use within the web development industry. This will give you more TDD practice using a different approach to Jest, as well as more exposure to ES2015/ES6 JavaScript.

## Research

1. Research other module formats than CommonJS. What is AMD? What are ES6
   modules and how do their differ from CommonJS?
1. What are other test frameworks for JavaScript?
1. More parts of the Jest (Jasmine) DSL than just `.toBe()`
