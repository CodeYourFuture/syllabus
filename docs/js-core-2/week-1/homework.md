---
id: homework
title: Coursework
sidebar_label: Coursework
---

## 0) Flipped Classroom Practice (3h)

The video playlist contains some "content" videos and one "practice" video for each content video.

0. Define an object. Complete the following code, assigning objects to the variables `salem` and `ijeoma` so that the output of the program is as below. Don't change the function!

```js
let salem = {
  // fill in object here
};

// create an object here and assign it to a variable called ijeoma

// This function is provided. You should not modify it!
// It takes as input a person -> how it uses the fields
// in the person object will tell you what fields to put in the
// objects above
function logInformationAbout(person) {
  let age = 2023 - person.yearOfBirth;
  console.log(
    `${person.firstName} is from ${person.countryOfOrigin}`,
    `and will be ${age} years old in 2023`
  );
}

logInformationAbout(salem);
logInformationAbout(ijeoma);
```

The output should be

```
Salem is from Sudan and will be 30 years old in 2023
Ijeoma is from England and will be 22 years old in 2023
```

1. 1.1 Predict, evaluate and explain the following expressions in the node REPL

```js
let stock = {
  name: "aapl",
  lastClosingPrice: 171.45,
  lastFiveDaysClosingPrices: [180.33, 176.28, 175.64, 172.99, 171.45],
};

stock.name;
stock["name"];
stock.lastClosingPrice * 100;
stock.lastFiveDaysClosingPrices[1];

stock.name = "AAPL";

stock;
```

2. Add a field (a key + value pair) to the stock object, describing it's change over the last 5 days

```js
let stock = {
  name: "aapl",
  lastClosingPrice: 172.99,
  lastFiveDaysClosingPrices: [179.99, 180.33, 176.28, 175.64, 172.99],
};

// write code here to add the changeInLastFiveDays field to stock

console.log(
  "In the last 5 days, the stock changed by",
  stock.changeInLastFiveDays
);
```

The output should be

```
In the last 5 days, the stock changed by -7
```

3.1 Write a program that prints out to the console information from the following object

```js
uk = {
  name: "The United Kingdom of Great Britain and Northern Ireland",
  shortName: "The UK",
  capitalCity: {
    name: "London",
    population: 9648000,
  },
};
```

The output should be

```
The capital of The UK is London. London has a population of 9648000
```

3.2 Complete the following program so that it prints out information about the stocks that went down in the past 5 days.

```js
const stocks = [
  {
    name: "aapl",
    lastClosingPrice: 172.99,
    lastFiveDaysClosingPrices: [179.99, 180.33, 176.28, 175.64, 172.99],
  },
  {
    name: "msft",
    lastClosingPrice: 327.29,
    lastFiveDaysClosingPrices: [340.69, 342.45, 334.69, 333.2, 327.29],
  },
  {
    name: "amzn",
    lastClosingPrice: 3408.34,
    lastFiveDaysClosingPrices: [3384.44, 3393.39, 3421.37, 3420.74, 3408.34],
  },
  {
    name: "googl",
    lastClosingPrice: 2869.45,
    lastFiveDaysClosingPrices: [2951.88, 2958.13, 2938.33, 2928.3, 2869.45],
  },
  {
    name: "tsla",
    lastClosingPrice: 938.53,
    lastFiveDaysClosingPrices: [1101.3, 1093.94, 1067.0, 1008.87, 938.53],
  },
];

function getMessage(stock) {
  // return a message containing the name and last closing price of the stock
}

function isStockPriceDecreasing(stock) {
  // return a boolean indicating whether the stock decreased in price over the last 5 days
}

const decreasingStocks = stocks.filter(isStockPriceDecreasing);
const messages = decreasingStocks.map(getMessage);
console.log("Stocks that decreased in price over the last 5 days:");
for (const message of messages) {
  console.log(message);
}
```

Most of the code is already written. You should only modify the functions `isStockPriceDecreasing` and `getMessage`

The output should be

```
Stocks that decreased in price over the last 5 days:
aapl last closing at 172.99
msft last closing at 327.29
googl last closing at 2869.45
tsla last closing at 938.53
```

4. Complete the `lastClosingPrice` method of the stock object so that it returns the last element of the `lastFiveDaysClosingPrices` array. This practice exercise is optional.

```js
let stock = {
  name: "aapl",
  lastClosingPrice: function() {
    // complete the function
  },
  lastFiveDaysClosingPrices: [179.99, 180.33, 176.28, 175.64, 173.99],
};

console.log(stock.lastClosingPrice());
```

The output should be

```
173.99
```

5. Add a test to your solution to `1-weather-report.js` in `JavaScript-Core-1-Coursework-Week3`. This test should check that when 3 city names are passed as an argument to the `getTemperatureReport` function, the returned array should be of length 3.

The `assertion` portion of such a test would look like this:

```js
expect(getTemperatureReport(usersCities).length).toEqual(3);
```

## 1) Review Solutions for Last Weeks Coursework

Before starting this week, be sure to review the solutions for last weeks coursework

https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week4-Solution

Make sure you work out what you don't understand and spend some time considering how the code works.

In each of the folders you'll find a `solutions.md` file that will explain more of the solution to you. You should read each of them.

**Note**: This is a private repository. Please speak to your Teacher, Buddy or Class Coordinator to get access. You should ask them to invite your whole class.

## 2) CodeWars (1 hour)

https://docs.codeyourfuture.io/course-processes/running-the-course/codewars#codeyourfuture-collections

Every week you need to complete at least three kata. Spend at least 20 minutes, three times a week, on your kata workout. You must be at **level 7 kyu** or below in this week of the course.

Find the Collection for JS2 Week 1 on the CodeYourFuture account: https://www.codewars.com/users/CodeYourFuture/authored_collections

## 3) JavaScript Challenges (3 hours) 🔑

Here are a set of exercise that will help you to solidify your knowledge of JavaScript.

For this step, open the "Mandatory" folder and complete all of the challenges.

https://github.com/CodeYourFuture/JavaScript-Core-2-Coursework-Week1

Before you start, **make sure you fork the repository** to your Github account.

## 4) Git and the Command Line (7 Hours)

This week we'll be introducing you to Git on the Command Line. You can find these exercises here

https://syllabus.codeyourfuture.io/git/cli/homework

_Instructor Note: Please open this link and copy each task one by one to Google Classroom_

## 5) Teamwork Project - Set your team up (PD - 1 hour)

In small groups, your challenge is to collaborate and design a product for a fictional client. Your product must have a positive impact on the world or solve a global challenge, for example you might choose to build a website that provides information on how to grow your own food.

The goal of this teamwork project is for you to understand how the pre-work of the coding is done. This is an important phase and, if done well, can ensure the teamwork is efficient and delivers fast.

The team should be:
- A mix of technical skills/levels
- A mix of genders
- Groups can be max size of 5

1. Define the team
2. Define what fictional product you would build

## 6) Teamwork Project - Roles research (PD - 1h)

Each of the team members should research one of the roles below: 
- A front end web developer
- A back end web developer 
- A UX/UI designer or UX researcher 
- A Product manager
- A QA tester 

Once you have researched the roles, you must create a one slide presentation explaining what each of the roles do and how these roles work together in a team on a project.

## 7) Teamwork Project - Agile reading (PD - 1 hr)

Read the following material and discuss the 4 key principles of agile in your Teamwork Project group.

- [Agile manifesto](https://agilemanifesto.org/)
- [Agile 101](https://www.agilealliance.org/agile101/)
