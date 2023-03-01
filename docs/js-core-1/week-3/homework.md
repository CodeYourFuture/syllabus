---
id: homework
title: Coursework
sidebar_label: Coursework
---

## 0) Flipped Classroom Practice (3h)

The video playlist contains one "practice" video for each content video.

Here is an overview of the practice exercises:

0.1 After copy-pasting the function into the node REPL, predict, evaluate and explain the following expressions

```js
function getTruthiness(expression) {
  if (expression) {
    return true;
  } else {
    return false;
  }
}

getTruthiness(0); // make your prediction here
getTruthiness(4);
getTruthiness(-1);
getTruthiness("");
getTruthiness("hello");
getTruthiness(undefined);
getTruthiness();
```

0.2 After copy-pasting the function into the node REPL, predict, evaluate and explain the following expressions

```js
function getPhoneNumber(number, prefix) {
  if (prefix) {
    if (number.startsWith("0")) {
      number = number.substring(1); // substring(1) removes one character at the start of the string
    }
    return `${prefix}${number}`;
  } else {
    return `${number}`;
  }
}

getPhoneNumber("073858489"); // make your prediction here
getPhoneNumber("73858489", "+49");
getPhoneNumber("073858489", "+33");
```

1.1 Predict, evaluate and explain the following expressions in the node REPL

```js
let animals = ["cat", "dog", "cow"];

animals; // make your prediction here
animals.length;
animals[1];
animals[0];

animals[2] = "mouse";
animals;

animals[3] = "elephant";
animals.length;
animals;
```

1.1 Write a program that defines an array: `const colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];`

The program should print out to the console:

```
The 2nd colour in a rainbow is orange (counting from 1)
There are 7 colours in a rainbow
```

Modify the initial value of the array so that it is `const colours = ["yellow", "green", "blue", "indigo", "violet"];`

Predict and check what your program will now print out.

2.1 Write a program that defines an array (these are the steps I took last week): `const stepCounts = [2211, 11745, 7390, 14284, 7902];`

Incrementally create your program so that it prints out to the console the steps taken on each day

```
2211
11745
7390
14284
7902
```

2.2 Then add the total number of steps taken

```
2211
11745
7390
14284
7902
There were 43532 total Steps
```

2.3 Last add the number of days where the steps were over 10000

```
2211
11745
7390
14284
7902
There were 43532 total Steps
You met your goal of 10000 steps 2 times
```

3.1 Predict, evaluate and explain the following expressions in the node REPL

```js
const dinosaurs = ["t-rex", "stegosaurus", "velociraptor"];

dinosaurs;
dinosaurs.length;
dinosaurs.push("diplodocus");
dinosaurs.push("iguanadon");
dinosaurs;
dinosaurs.length;
```

3.2 Write a program that defines an array of names: `const names = ["Karin", "Fatemeh", "Luke", "Michael", "Douglas", "Jyoti"];`

Create a new array containing only the names with less than 7 letters and print it out to the console:

```
The short names are [ 'Karin', 'Luke', 'Jyoti' ]
```

## 1) Review Solutions for Last Weeks Coursework (45 minutes)

You should do this every week. We will stop reminding you next week.

Once a week, someone with Github maintainer access in your city will release the solutions repo to last week's coursework to your class team.
Your class team is a child of Students and lives here: https://github.com/orgs/CodeYourFuture/teams/students/teams

Once you have access to the solutions repo, review your work compared to the example solutions. There is a marking guide that talks through common mistakes. Which ones have you made? How will this help you identify what you need to practice more, and where you feel strong?

Write down your target areas and take them to your buddy group. What does your mentor think? Do they agree with your assessment?

## 2) JavaScript Challenges (10 hours)

Next, in the same repository complete all of the exercises in the "Mandatory" folder.

https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week3

## 3) Code review in your Buddy Group

Code review is a valuable skill for a developer, and is a good way to practice talking about code with confidence. Let's level up our code review now.

1. Review Google's [engineering guide on code review](https://google.github.io/eng-practices/review/reviewer/comments.html).
2. In your Buddy group, code review each of your colleague's nominated pull reqs.
3. Stretch: Try [suggesting line changes](https://docs.github.com/en/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request#applying-suggested-changes), and accepting them yourself:

## 4) Codewars (1 hour)

https://docs.codeyourfuture.io/course-processes/running-the-course/codewars

Every week you need to complete at least three kata. Spend at least 20 minutes, three times a week, on your kata workout.

Find the collection for JS-1 Week 3 on the CodeYourFuture account: https://www.codewars.com/users/CodeYourFuture/authored_collections

Have you found the [Troubleshooting Guide](https://docs.codewars.com/training/troubleshooting/) yet? :D

## 5) Learn About the Terminal part 2 (4 hours)

Most developers spend a lot of time using something called the terminal. This week, you are going to follow a course to learn about the terminal - it has [its own homework page here](/git/terminal/homework) for you to work from.

You should have started this course last week. Complete it now.

## 6) (Stretch) Extra JavaScript Challenges

Have some extra time before our next class? Fill it with these harder challenges to help you stretch your abilities.

**Alert:** Some of these challenges might include concepts that we haven't taught you yet. You should expect to frequently encounter concepts you haven't been taught in class yet or at all. Learning how to tackle this is a crucial skill we are supporting you to develop. How will you handle this? Will you create a study group? Find a mentor? Ask for a session in class? It's your professional development, so take control of it.

https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week3

## 7) Giving constructive feedback (PD - 1 hr)

Imagine yourself in one of the following scenarios. How would you prepare to give constructive feedback in that situation?

- Write a short paragraph explaining what you would do
- Or write a dialogue between you and the person you are giving feedback to

Scenarios:

- Your colleague took your lunch from the office fridge
- Your colleague keeps interrupting you and others in meetings
- Your flatmate left dirty cups in the sink for several days

## 8) Working with your team (PD - 2 hr)

Feedback from colleagues gives you insight into your career progress. Every week you will be requesting feedback from two people. This will give you insight into your progress on this course.

This week, invite a classmate for a call. Choose someone you have worked with in a small group. Invite your PD or Education Buddy too. Exchange feedback. Try to be helpful, candid, and kind.

Write a 250 word essay reflecting on your strengths and development areas. Use the feedback to help you write this essay.
