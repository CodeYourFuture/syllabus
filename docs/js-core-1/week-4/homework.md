---
id: homework
title: Coursework
sidebar_label: Coursework
---

## 0) Flipped Classroom Practice (3h)

The video playlist contains some "content" videos and one "practice" video for each content video.

0.1 What does the following code do?

Can you refactor it so that:

- the variables have more understandable names
- the if statements are rewritten into a function with an understandable name
- the whole loop is extracted into a reusable function with an understandable name (test the function by calling it with the values `[3, 12, 6, 11, 2]` and also logging the output)

```js
const c = [13, 4, 10, 7, 1];
const t = [3, 12, 6, 11, 2];
const n = [];
for (const k of c) {
  let v = k;
  if (k === 13) {
    v = "K";
  } else if (k === 12) {
    v = "Q";
  } else if (k === 11) {
    v = "J";
  } else if (k === 1) {
    v = "A";
  } else {
    v = k;
  }
  n.push(v);
}

console.log("Your cards are named", n);
```

1.1 Refactor this code to use the `.filter()` array method

```js
const yourCards = [13, 4, 10, 7, 1];
const theirCards = [3, 12, 6, 11, 2];

function getNumberCards(cards) {
  const numberCards = [];
  for (const card of cards) {
    if (card > 1 && card < 11) {
      numberCards.push(card);
    }
  }
  return numberCards;
}

console.log("Your number cards are", getNumberCards(yourCards));
console.log("Their number cards are", getNumberCards(theirCards));
```

2.1 Refactor the code from 0.1 above even further to use the `.map()` array method.

3.1 Using `.filter()` and `.map()`, can you write a program that starts with the same `yourCards` and `theirCards` arrays as above and prints out to the console:

```
Your suit cards are [ 'K', 'A' ]
Their suit cards are [ 'Q', 'J' ]
```

## 1) Review Solutions for Last Weeks Coursework (30 minutes)

You should do this every week from now on. We will stop reminding you soon.

Once a week, someone with Github maintainer access in your city will release the solutions repo to last week's coursework to your class team.
Your class team is a child of Students and lives here: https://github.com/orgs/CodeYourFuture/teams/students/teams

Once you have access to the solutions repo, review your work compared to the example solutions. Set a timer for thirty minutes. There is a marking guide that talks through common mistakes. Which ones have you made? How will this help you identify what you need to practice more, and where you feel strong?

Write down your target areas and take them to your buddy group. What does your mentor think? Do they agree with your assessment?

## 2) JavaScript Challenges (10 hours)

In the repository for week 4, complete all of the exercises in the "Mandatory" folder.

https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week4

## 3) Codewars (1 hour)

https://docs.codeyourfuture.io/course-processes/running-the-course/codewars

Every week you need to complete at least three kata. Spend at least 20 minutes, three times a week, on your kata workout.

This week, try pairing on a kata with a colleague. We will do more pairing in the next module.

## 4) (Stretch) Extra JavaScript Challenges

Have some extra time before our next class? Fill it with these harder challenges to help you stretch your abilities!

**Alert:** Some of these challenges might include concepts that we haven't taught you yet. You should us Google to try to learn how to solve them.

https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week4

## 5) Writing a meeting request email (PD - 30 min)

In the following scenario imagine you are a recruit for a company and your team leader asks you to write an email requesting a meeting with the Head of Customer Services (HCS). Remember to include the subject line and use appropriate formatting.

"HCS has complained about the customer services application to the software team leader. He has found some frustrating problems with the user interface. The team leader told you to go and see the HCS, find out what is wrong and then come back with improvements. The HCS is very busy. You should email requesting a meeting and outline clearly what you need the meeting for."
