---
id: lesson
title: JavaScript Core III - 3
sidebar_label: Lesson
---

<!-- These imports are used to enable this feature. Do not delete. -->
<!-- https://v2.docusaurus.io/docs/markdown-features#multi-language-support-code-blocks -->

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Feedback from "@theme/Feedback";

## Learning Objectives

- The learner should understand the concept of variable scope and be able to define them in global, local and block scope
- The learner should be able to use destructuring to extract data from arrays
- The learner can describe why you would want to use array destructuring

## Agenda

The purpose of this class is to introduce to the trainee:

1. The scoping of variables, specifically in reference to:
   - Global
   - Local
   - Block
2. Array Destructuring
3. Project Work
4. PD (Resilience)

## 1. Variable Scope

### The Problem

Variables are amazing! Variables let us store data and reuse it many times rather than writing the same data over and over again, also if the variables are well named then it makes it much easier to think about what our code is doing.

As we know, after we declare or define a new variable we can refer to it later in our code using the variable name.

```js
let name = "mo";
let age = 42;
let favouriteFoods = ["pizza", "apples", "tofu"];

// lots of code here

// later
console.log("My name is " + name);
```

Now, imagine what would happen when our code gets really long. Every time we want to define a new variable we have to check that it hasn't already been used for something else. If that variable is already being used and we redefine it, bad things can happen. We could overwrite something important.

Imagine a banking app being built by two developers. Developer 1 uses the variable name `money` to store the total amount of cash a single customer has in the bank, Developer 2 uses the variable name `money` to store the total amount of cash that ALL customers have in the bank added together, the total money in the bank's vaults. This could be really good news for a customer who accidentally receives the entire bank's money in their account, but really BAD news for us as the owners of a bank.

### The Solution

One solution might be that every time we want to create a new variable, we call around all of the other developers on the project and ask them if it's safe to use the variable name `money`. We can quickly see a problem with this, some codebases are millions of lines long! No single person knows what is contained in every file. It would be impossible to know what variables are safe to use and which are not.

Instead, we need to find a way to make variables **safer**. We need a way to use the best variable name to describe our data, without worrying that we will be causing problems in a different part of the codebase.

We call this `scope`.

### What is Scope?

Think about the way that laws are set in different countries. Most laws are set by the government of that country and are `local` to that country. However, some laws are international, laws like 'no slavery' apply across all countries, these are `global` laws.

In some countries, different regions inside the country can set their own laws too. In America you must be 21 to drink (national law), but in the state of Massachusetts all bars must be closed by 2AM (state law). These are two levels of local laws.

![Types of laws](https://i0.wp.com/blog.codeanalogies.com/wp-content/uploads/2017/11/474b7-1ywpubaj-_gmws4jedvbufa.png?w=730&ssl=1)

In Massachusetts, a citizen must follow all 3: International Law, National Law and State Law.

But a pirate 🏴‍☠️ in the middle of the ocean only needs to follow International Law (and perhaps the law of the Ship).

In the same way we think about which laws apply to which **parts of a country** we must also think about which variables apply to which **parts of your code**. Variables, like laws, only apply to a certain area.

When we try to access a variable that does not exist or has gone out of scope, JavaScript will throw a `ReferenceError` telling us that a variable is not defined.

```js
let globalLaw = "no slavery";
// only 1 law applies here

function usa() {
  let nationalLaw = "drinking age is 21";
  // 2 laws apply here

  function massachusetts() {
    let stateLaw = "bars closed at 2am";
    // all 3 laws apply here
  }
}

console.log(stateLaw); // Error: 'stateLaw' is not defined
```

In the example above, the State Law only applies to Massachusetts. When we try to `console.log` the `stateLaw` variable at the end, it is not defined. This part of your code does not even know this variable exists!

### Global scope

Variables declared outside of any function or code block are available throughout an application. They are referred to as global variables and exist in global scope.

We can see in the previous example that `globalLaw` is a global variable.

Because global variables are visible by throughout the application, data stored in them can be read and updated by any part of your code. At first this might seem convenient, but in practice this is likely to cause problems in longer term as your code base grows.

- It may not be obvious where in your code global variables are used, which can make refactoring hard
- Other part of your code may accidentally overwrite values in global variables and lead to bugs.

Because of above **it is good engineering practice to only use global variables when absolutely necessary**.

Note that you can also declare a global variable by assigning to a variable without declaring it with a `var`, `let` or `const` keyword.

```js
function accidentallyGlobal() {
  oops = "I am global";
}

accidentallyGlobal();

console.log(oops);
```

Be sure to keep an eye out for above problem and avoid it.

### Local Variables

Let's rewind and look at this in detail. We know that variables are declared using the `var`, `let` or `const` keyword.

```js
let greeting = "Hi ";
```

If we define a variable inside a function, it becomes **local** to that function. If we want to use a fancy word, we can also say it becomes **scoped** to that function.

```js
function greetUser(name) {
  let greeting = "Hi "; // This variable only exists here
  console.log(greeting + name);
}

greetUser("Naima");
console.log(greeting); // It doesn't exist here
```

The `console.log(greeting)` on the last line throws an error, it tells us that "greeting is not not defined". Why is this? Because the variable `greeting` was defined in the `greetUser` function, it **does not exist** outside the function.

This lets us do new things with variables. You cannot usually create two variables with the same name. For example:

```js
function greetUser(name) {
  let greeting = "Hi";
  let greeting = "Shalom";
  // Error: 'greeting' has already been declared
}
```

But in the same way countries have own laws, functions have own `scopes`! And so it becomes possible to use the same variable name for different situations.

```js
function greetOnce(name) {
  let greeting = "Hi ";
  console.log(greeting + name);
}

function greetAgain(name) {
  let greeting = "Shalom ";
  console.log(greeting + name);
}
```

We have used the variable name `greeting` twice but it's very important to remember that **these are not the same variable**! The two variables called 'greeting' do not even know each other exist.

### Nesting

It is important to note that scope is nested. That means when you have one function inside another function, you can access variables defined in outer function from the inner function. However you cannot access variables defined in inner function from outer function.

```js
function grandfather() {
  let name = "Hammad";
  // likes is not accessible here
  function parent() {
    // name is accessible here
    // likes is not accessible here
    function child() {
      // Innermost level of the scope chain
      // name is also accessible here
      let likes = "Coding";
    }

    child();
  }

  parent();
}

grandfather();
```

### Block scope

#### Code block

A block is piece of code inside by curly brackets, for example following `if` statements and `for` or `while` loops.

```js
if (age > 18) {
  // code block
}
```

#### var vs let and const

In addition to previous scope rules, JavaScript uses different scope methods for variables depending how they are defined.

- Variables declared using `var` keyword use function scope. That means variables defined using `var` exist within function they are defined in.
- Variables declared using `let` or `const` keyword use block scope. Variables defined using `let` or `const` keywords exist within the block they are defined in.

```js
function getBook() {
  if (true) {
    var bookOne = "JavaScript: The Good Parts";
    let bookTwo = "Eloquent JavaScript";
    const bookThree = "The JS Way";
  }

  console.log(bookOne); // JavaScript: The Good Parts
  console.log(bookTwo); // ReferenceError: bookTwo is not defined
  console.log(bookThree); // ReferenceError: bookThree is not defined
}
```

**Any time you define a variable inside a block, that variable cannot escape that block.** We say the variable is `scoped` to that block.

Scope allows us to control where our variables can be accessed from. We want to ensure that variables are available where they are needed and ideally as little as possible elsewhere to prevent naming collisions or accidental updates. As a result using `let` or `const` is preferrable to using `var` since they has stricter scope definition.

### Exercise

:::note Exercise

In small groups answer the following the questions.

Try to solve each exercise before running code to verify answer. Try to explain your answer using what you learned above about scope. Think about the order JavaScript will execute each piece of code and what the values will be at each stage.

```js
// 1.
function one() {
  var a = 10;
}
one();
console.log(a); // what is the value of a

// 2.
function two() {
  let b = 10;
  let b = 20;
}
two();
console.log(b); // what is the value of b and why

// 3.
let c;
function three() {
  c = 25;
}
three();
console.log(c); // what is the value of c and why

// 4.
function four() {
  d = 25;
}
four();
console.log(d); // what is the value of d and why

// 5.
let e;
function five() {
  const greeting = "Hello";

  function greet() {
    let name = "Eddie";
    e = `${greeting} ${name}`;
  }
  greet();
}
five();
console.log(e); // what is the value of e and why

// 6.
function six() {
  if (true) {
    let f = 50;
  }
  console.log(f); // what is the value of f and why
}

six();
```

:::

## 2. Array Destructuring

### The Problem

In [Javascript 1 - Lesson 2](https://syllabus.codeyourfuture.io/js-core-1/week-2/lesson#arrays), you learnt how to store multiple values in one variable using an **array**.

```js
let fruits = ["apple", "orange", "banana"];
```

You also learnt that you can retrieve a value from an Array by using the **index** of the value to access it.

```js
let firstFruit = fruits[0];
console.log(firstFruit); // This will print 'apple'

let secondFruit = fruits[1];
console.log(secondFruit); // This will print 'orange'

let thirdFruit = fruits[2];
console.log(thirdFruit); // This will print 'banana'

console.log(
  `My fruits array contains: ${firstFruit}, ${secondFruit} and ${thirdFruit}.`
);
```

#### Exercise (1)

:::note Exercise

We have the names of the Simpsons family stored in an array called `familyMembers`. Create variables to store the names of the family members so that the `console.log` will print out the following message:
`In the Simpsons family, Homer and Marge are the parents. Bart is the son, Lisa is the daughter, and Maggie is the baby.`

```js
let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// Create variables to store the values here

console.log(
  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`
);
```

**Question**: How many lines of code did you add?

:::

### Destructuring syntax

There is a way to extract all the values of an array into variable in just **one line of code**. This technique is called **destructuring** and it has a special syntax.

Here is the code we used in the last exercise with array destructuring.

```js
let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

let [dad, mum, son, daughter, baby] = familyMembers;

console.log(
  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`
);
```

With array destructuring you were able to reduce this code down from 7 lines of code to just 3 lines of code. This means your code is shorter and there is less chance for you to have a bug in your code.

#### Exercise (2)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

Rewrite the code below to use array destructuring instead of assigning each value to a variable.

```js
let sentence = ["Hello", "Code", "Your", "Future"];

let firstWord = item[0];
let secondWord = item[1];
let thirdWord = item[2];
let fourthWord = item[3];

console.log(
  `FirstWord: ${firstWord}, SecondWord: ${secondWord}, ThirdWord: ${thirdWord}, FourthWord: ${fourthWord},`
);
```

:::

</TabItem>
<TabItem value="solution">

```js
let sentence = ["Hello", "Code", "Your", "Future"];

let [firstWord, secondWord, thirdWord, fourthWord] = sentence;

console.log(
  `FirstWord: ${firstWord}, SecondWord: ${secondWord}, ThirdWord: ${thirdWord}, FourthWord: ${fourthWord},`
);
```

</TabItem>
</Tabs>

#### Exercise (3)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

We have a function called `sumAndMultiply`. It will take two numbers and then return an array where the first number is the sum of the two numbers, and the second number is the multiplication of the two numbers.

```js
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

// Assign variables using array destructuring on this line

console.log(
  `The sum of the two numbers is ${sum}, the multiplication of the two numbers is ${multiply}`
);
```

Which of the following lines of code can be used above?

- A) let sum, multiply = sumAndMultiply(2, 3);
- B) let [sumAndMultiply] = sumAndMultiply(2, 3);
- C) let [sum, multiply] = sumAndMultiply(a, b);
- D) let [sum, multiply] = sumAndMultiply(2, 3);

:::

</TabItem>
<TabItem value="solution">

```js
// Option D
let [sum, multiply] = sumAndMultiply(2, 3);
```

</TabItem>
</Tabs>

#### Exercise (4)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

When you do array destructuring, the array can be of any data type. Try destructuring with the next array, which contains objects.

```js
let citiesByPopulation = [
  { name: "London", population: 8000000 },
  { name: "Birmingham", population: 1000000 },
  { name: "Glasgow", population: 600000 },
  { name: "Manchester", population: 500000 },
];

// Assign variables using array destructuring on this line

console.log(`${london.name} population is ${london.population}`);
console.log(`${birmingham.name} population is ${birmingam.population}`);
console.log(`${glasgow.name} population is ${glasgow.population}`);
console.log(`${manchester.name} population is ${manchester.population}`);
```

:::

</TabItem>
<TabItem value="solution">

```js
let citiesByPopulation = [
  { name: "London", population: 8000000 },
  { name: "Birmingham", population: 1000000 },
  { name: "Glasgow", population: 600000 },
  { name: "Manchester", population: 500000 },
];

let [london, birmingham, glasgow, manchester] = citiesByPopulation;

console.log(`${london.name} population is ${london.population}`);
console.log(`${birmingham.name} population is ${birmingham.population}`);
console.log(`${glasgow.name} population is ${glasgow.population}`);
console.log(`${manchester.name} population is ${manchester.population}`);
```

</TabItem>
</Tabs>

#### Exercise (5)

:::note Exercise

Complete all of the exercises found [here](https://repl.it/@codeyourfuture0/ArrayDestructuring)

:::

### Resources

Here are some useful resources to help you understand this material

- [FreeCodeCamp's Intro To Array Destructuring](https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)
- [Why Is Array/Object Destructuring So Useful And How To Use It (Video)](https://www.youtube.com/watch?v=NIq3qLaHCIs)
- [The Most In-Depth Yet Understandable ES6 Destructuring Tutorial](https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers)

## 3. Project Work

### Explanation

For the rest of the day we'll be working together on our group projects

The project is called [TV Show](../tv-show-dom-project/readme.md)

Trainees should group into teams based on the Level that they are working on currently.

## PD (Resilience)

**Session objective:** This workshop is about understanding resilience, the challenge of looking for jobs and how you can develop a resilient mindset when being faced with job rejections. At the end of this session, you will be able to understand what resilience is, identify current coping habits, and develop resilience strategies.

:::note Exercise (10 min)

**Exercise objective:** To define what resilience is.

Discuss as a class the following questions:

- What does resilience mean to you?
- Why is it important to have resilience? 

***Answer Key***

Resilience is the ability to face adversity (challenging situations, rejection, trauma or stress), and being able to bounce back from it. Resilience helps to protect our mental health. It allows us to keep balance during stressful times in life, giving us the strength to bounce back. When facing difficult situations, our resilience defines how quickly we can pick ourselves back up and build our strength. 

Think about resilience as “it’s not what happens to us, but how we react to it”. We cannot always control what happens to us, although we can control how we deal with the situation, and what we learn from it.

:::

:::note Exercise (20 min)

**Exercise objective:** To reflect on past experiences of demonstrating resilience.

Work in small groups and answer the following questions:

- What does it mean to be resilient as a web developer and job seeker?
- How have you shown resilience in the past when you have faced adversity?

Remember:

- This is an interactive session
- You all come from different backgrounds and have a lot of lived experiences you can draw from and it would be useful to share them with others
- It’s really important to hear your views throughout the session

Write down the main points you’ve discussed, and nominate someone within your group to share them afterwards with the class.

:::

:::note Exercise (20 min)

**Exercise objective:** To develop a resilient mindset.

Work in small groups and make a list of tips for someone who would like to develop a resilient mindset.

Volunteer to share your list with the class.

***Answer Key***

Good answers would include:

- Reflect on your own achievements - look at what you have achieved already to get here. Your life experiences are full of examples of resilience and achievement.
- Focus on things in your control - focus on the aspects that you can control, make sure you apply for the right type of job at the right time.
- Embrace rejection - rejection is part of the process. There is so much you can learn from making mistakes and things not going your way. Take time to reflect on what went well, and what you can improve next time round.
- Employers need you as much as you need them. - it’s a 2-way process.
- You’re not on your own - you have a ready-made support network at CYF. Volunteers, mentors, teachers and your peers are here to support you all the way.
- Apply when you are ready - you will know you are ready by discussing with CYF. Your Edu buddies, PD team and chatting with your mentors. If you apply too early or when you are unprepared, you are more likely to get rejections

:::

**Wrap up**

When looking for your first role after CYF, you’ll find yourself applying for a large number of roles. Job hunting can be a frustrating experience, particularly when changing career paths due to the lack of hands-on experience in the new field, which is something most employers are looking for. Today we focused on how to best navigate through uncertainty, frustration, and rejection, unpacking some techniques on how to create a resilient mindset.

We’ll learn about specific interview skills in a different session, but a few words here: Interviewing is an art that needs to be learnt and mastered. We improve and learn new tips in each interview we get through. Try to look at an interview as an opportunity to practice your interview skills, regardless of the outcome. Take time to reflect on what went well, and what areas you could improve next time.

*Key 2023 job interview statistics*

- An average of 10 to 20 interviews are needed before getting an offer - These numbers are average, remember it can take many more or less to achieve your first job.
- The average interview process in the UK takes 27.5 days to complete - The average number of interviews needed to get an offer, plus the time that each company takes for their own interview process, means that you’ll need resilience to keep going through it until you get your first job in IT.
- Only 2% of applicants will get selected for an interview.

(Source: https://standout-cv.com/job-interview-statistics)

*Top tips:*

- Have a plan B!
- Look at what you have achieved already!
- Develop a resilient mindset!
- You already have a support network -CYF is here to help you!
- Focus on things in your control
- Have realistic expectations

## Coursework

Click [here](./homework) to view the homework for this lesson.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 3" week="Week 3" />
