---
id: lesson
title: JavaScript Core II - 2
sidebar_label: Lesson
---

<!-- These imports are used to enable this feature. Do not delete. -->
<!-- https://v2.docusaurus.io/docs/markdown-features#multi-language-support-code-blocks -->

import Feedback from "@theme/Feedback";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ExerciseSolutions from "@theme/ExerciseSolutions";

## Learning Objectives

By the end of this lesson trainees should be able to:

- Describe the TDD cycle
- Write and call methods inside JavaScript objects
- Use Objects when contained inside an array
- Write code that uses objects built-in methods
- Write code that can iterate through an object
- In a pair, complete a kata using array and object methods

---

## TDD and Methods

We've used string methods. We've used array methods. We've used object methods. This week we will bring all these things together and start understanding how to use methods on arrays of objects. Then, to help you embed this learning we will practice some kata together. But first, let's spend a short time talking about Test Driven Development, so you can start using it to help you in your kata practice.

### Red, Green, Refactor

Test Driven Development (TDD) is a method of writing code. Instead of writing code and then writing tests, you write the test first.

#### Red

Begin by writing the simplest test you can, to satisfy the smallest requirement you can see. Of course, this test will fail, as there is no code! This is the "red" stage.

#### Green

Next, write just enough code to pass the test. TDD is all about finding the smallest, simplest step to take. Once your test is passing, you have reached the "green" stage.

#### Refactor

The final stage is "refactor". To refactor your code, you will improve the form without changing the function. With TDD, you can do this safely, because if the refactor changes the underlying function, the test will fail.

### Kata

- First, mentors will demonstrate pairing on a kata using Test Driven Development.
- Then we will work through exercises to understand the methods the mentors used in the kata.
- Last, everyone will pair on a kata from [CYF Array and Object Methods](https://www.codewars.com/collections/cyf-array-and-object-methods).

:::note TDD Kata 20 minutes
Two mentors (or a mentor and trainee) will pair on [this kata](https://www.codewars.com/kata/582746fa14b3892727000c4f) from [CYF Array and Object Methods](https://www.codewars.com/collections/cyf-array-and-object-methods) in a TDD style.

Remember the Steps: _Red, Green, Refactor_

- Red: Write a failing test
- Green: Write the minimum code to make your test pass
- Refactor

:::

:::note Exercise: Reflect on TDD

TDD is a popular method for writing code among professional programmers. Why do you think this is?

In small groups, take 5 minutes to discuss what you think the benefits of TDD might be?

Then report your findings back to the group. There isn't really a "correct" answer here, it's a good idea to discuss with other trainees and volunteers.

:::

## Arrays of objects

In the past weeks, you've learned about using arrays of numbers, arrays of string etc... In the following, we will learn how to use arrays of objects.

```js
let kitten1 = {
  name: "Fluffy",
  weeksOld: 2,
};

let kitten2 = {
  name: "Megatron",
  weeksOld: 1,
};

let kitten3 = {
  name: "Billy",
  weeksOld: 5,
};

let kittens = [kitten1, kitten2, kitten3];
```

You can also use all the functions for arrays that you learned before: find, some, every, filter, map, forEach... As an example, we want to filter all the kittens who are less than 3 weeks old:

```js
function isYoungerThan3Weeks(kitten) {
  return kitten.weeksOld <= 3;
}

kittens.filter(isYoungerThan3Weeks); // returns [kitten1, kitten2];
```

What if we want to get an array of all the kitties names?

```js
function getName(kitten) {
  return kitten.name;
}

kittens.map(getName); // returns ["Fluffy", "Megatron", "Billy"]
```

### Exercise (1)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

1. Define an array containing the 3 persons defined below.
2. Return an array of the person names (hint: use map).
3. Filter the persons to return an array with the person younger than 28 years old (hint: use filter).

```js

let person1 = {
  name: "Alice",
  age: 25,
};

let person2 = {
  name: "Bob",
  age: 30,
};

let person3 = {
  name: "John",
  age: 20,
};

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let persons = // Complete here

let personNames = // Complete here

let personsYoungerThan28YearsOld = // Complete here

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Question 1: array defined with 3 persons -> ",
  persons[0] === person1 && persons[1] === person2 && persons[2] === person3
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 2: array containing the person names -> ",
  personNames[0] === "Alice" &&
    personNames[1] === "Bob" &&
    personNames[2] === "John"
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 3: array containing the persons younger than 28 years old -> ",
  personsYoungerThan28YearsOld[0] === person1 &&
    personsYoungerThan28YearsOld[1] === person3
    ? "Passed :)"
    : "Not yet :("
);
```

:::

</TabItem>

<TabItem value="solution">

```js
/*
1) Define an array containing the 3 persons defined below.
2) Return an array of the person names (hint: use map).
3) Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/

let person1 = {
  name: "Alice",
  age: 25,
};

let person2 = {
  name: "Bob",
  age: 30,
};

let person3 = {
  name: "John",
  age: 20,
};

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let persons = [person1, person2, person3];

let personNames = persons.map((person) => person.name);

let personsYoungerThan28YearsOld = persons.filter((person) => person.age < 28);

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Question 1: array defined with 3 persons -> ",
  persons[0] === person1 && persons[1] === person2 && persons[2] === person3
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 2: array containing the person names -> ",
  personNames[0] === "Alice" &&
    personNames[1] === "Bob" &&
    personNames[2] === "John"
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 3: array containing the persons younger than 28 years old -> ",
  personsYoungerThan28YearsOld[0] === person1 &&
    personsYoungerThan28YearsOld[1] === person3
    ? "Passed :)"
    : "Not yet :("
);
```

</TabItem>
</Tabs>

### Exercise (2)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1. Filter the travelDestinations array to return all destination names reachable within 500 kms.
2. Find a destination name reachable by ferry.
3. Print in the console all the destination names more than 300 kms far away and reachable by train.

```js

let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};

let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};

let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};

let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};

let travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let destinationNamesWithin500Kms = // Complete here

let destinationNameReachableByFerry = // Complete here

let destinationNamesMoreThan300KmsAwayByTrain = // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`
);
console.log(
  `Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`
);
console.log(
  `Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`
);

```

:::

</TabItem>

<TabItem value="solution">

```js
/*
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};

let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};

let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};

let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};

let travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];

/* 
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let getDestinationName = (destination) => destination.destinationName;

let isWithin500Kms = (destination) => destination.distanceKms <= 500;
let destinationNamesWithin500Kms = travelDestinations
  .filter(isWithin500Kms)
  .map(getDestinationName);
// or in one line
// let destinationNamesWithin500Kms = travelDestinations.filter(destination=>destination.distanceKms<=500).map(destination=>destination.destinationName);

let isReachableByFerry = (destination) =>
  destination.transportations.includes("ferry");
let destinationNameReachableByFerry = travelDestinations
  .filter(isReachableByFerry)
  .map(getDestinationName);
// or in one line
// let destinationNameReachableByFerry = travelDestinations.filter(destination=>destination.transportations.includes('ferry')).map(destination=>destination.destinationName);

let isMoreThan300KmsAwayByTrain = (destination) =>
  destination.distanceKms > 300 &&
  destination.transportations.includes("train");
let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations
  .filter(isMoreThan300KmsAwayByTrain)
  .map(getDestinationName);
// or in one line
// let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations.filter(destination=>destination.distanceKms>300 && destination.transportations.includes('train')).map(destination=>destination.destinationName)

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`
);
console.log(
  `Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`
);
console.log(
  `Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`
);
```

</TabItem>
</Tabs>

### Exercise (3)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats,
the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1. Define a method findAvailableRestaurants which takes a number of people in parameter and returns
   all the restaurant names which have the required number of seats available at the moment.

2. Define a method findRestaurantServingDish which takes a dish name in parameter and returns
   all the restaurant names serving this dish.

3. Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west),
   and returns the number of restaurants in this area.

```js
let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    // Complete here
  },
  findRestaurantServingDish: function (dishName) {
    // Complete here
  },
  countNumberOfRestaurantsInArea: function (area) {
    // Complete here
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

let restaurantsAvailableFor5People =
  restaurantFinderApplication.findAvailableRestaurants(5);
console.log(
  `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
);

let restaurantsServingSalad =
  restaurantFinderApplication.findRestaurantServingDish("salad");
console.log(
  `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
);

let numberOfRestaurantsInCityCentre =
  restaurantFinderApplication.countNumberOfRestaurantsInArea("center");
console.log(
  `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
);
```

:::

</TabItem>

<TabItem value="solution">

```js
/* 
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats, 
the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1) Define a method findAvailableRestaurants which takes a number of people in parameter and returns 
all the restaurant names which have the required number of seats available at the moment.

2) Define a method findRestaurantServingDish which takes a dish name in parameter and returns
all the restaurant names serving this dish.

3) Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west),
and returns the number of restaurants in this area.
*/

let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

/* 
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

const isRestaurantAvailable = (restaurant, numberOfPeople) => {
  const availableSeats = restaurant.totalSeats - restaurant.numberOfCustomers;
  return availableSeats >= numberOfPeople;
};

const includesDish = (restaurant, dishName) =>
  restaurant.menu.includes(dishName);

let restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    return restaurants
      .filter((restaurant) => isRestaurantAvailable(restaurant, numberOfPeople))
      .map((restaurant) => restaurant.name);
    // or
    // return restaurants.filter((restaurant) => (restaurant.totalSeats - restaurant.numberOfCustomers) >= numberOfPeople ).map(restaurant => restaurant.name);
  },
  findRestaurantServingDish: function (dishName) {
    return restaurants
      .filter((restaurant) => includesDish(restaurant, dishName))
      .map((restaurant) => restaurant.name);
    // or
    // return restaurants.filter(restaurant => restaurant.menu.includes(dishName)).map(restaurant => restaurant.name);
  },
  countNumberOfRestaurantsInArea: function (area) {
    return restaurants.filter((restaurant) => restaurant.address.area === area)
      .length;
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

let restaurantsAvailableFor5People =
  restaurantFinderApplication.findAvailableRestaurants(5);
console.log(
  `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
);

let restaurantsServingSalad =
  restaurantFinderApplication.findRestaurantServingDish("salad");
console.log(
  `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
);

let numberOfRestaurantsInCityCentre =
  restaurantFinderApplication.countNumberOfRestaurantsInArea("center");
console.log(
  `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
);
```

</TabItem>
</Tabs>

## Object built-in methods

Since we started JavaScript, we have used `console.log` to print things to our console.

In week 2 and 3, you learned about array methods like `.map()`, and `.filter()`.

These are what we call built-in methods, and they're part of the JavaScript language. Someone else created these methods, and we can use them in our code.

Like arrays, objects have built-in methods that can help us. In this lesson, we will learn about `Object.keys()` and `Object.values()`.

### Object.keys()

This method goes into our object, and returns the object property names as an array.

Here is an example output for using `.keys()`:

```js
let footballClubs = {
  chelsea_fc: "England",
  fc_barcelona: "Spain",
  ac_milan: "Italy",
};

console.log(Object.keys(footballClubs));
// prints [ 'chelsea_fc', 'fc_barcelona', 'ac_milan' ]
```

### Object.values()

This method goes into our object, and returns the values of every property as an array.

Here is an example output for using `.values()`:

```js
let footballClubs = {
  chelsea_fc: "England",
  fc_barcelona: "Spain",
  ac_milan: "Italy",
};

console.log(Object.values(footballClubs));
// prints [ 'England', 'Spain', 'Italy' ]
```

### Exercise (1)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

Return the keys and values of the following object

```js

let capitalCities = {
  scotland: "Edinburgh",
  kenya: "Nairobi",
  australia: "Canberra",
  canada: "Ottawa",
};

let highScores = {
  55: "Alistair",
  100: "David",
  89: "Hannah",
  34: ["Sergi", "Frank"],
};

// ONLY EDIT BELOW HERE

let capitalCitiesKeys = ;
let highScoresKeys = ;
let capitalCitiesValues = ;
let highScoresValues = ;

// ONLY EDIT ABOVE HERE

console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys);
// prints ['34, '55', '89', '100']

console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

console.log(highScoresValues);
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']
```

:::

</TabItem>

<TabItem value="solution">

```js
/*

Return the keys and values of the following object

*/

let capitalCities = {
  scotland: "Edinburgh",
  kenya: "Nairobi",
  australia: "Canberra",
  canada: "Ottawa",
};

let highScores = {
  55: "Alistair",
  100: "David",
  89: "Hannah",
  34: ["Sergi", "Frank"],
};

// ONLY EDIT BELOW HERE

let capitalCitiesKeys = Object.keys(capitalCities);
let highScoresKeys = Object.keys(highScores);
let capitalCitiesValues = Object.values(capitalCities);
let highScoresValues = Object.values(highScores);

// ONLY EDIT ABOVE HERE

console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys);
// prints ['34, '55', '89', '100']

console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

console.log(highScoresValues);
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']
```

</TabItem>
</Tabs>

### Exercise (2)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.

You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.

```js

let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};

// ONLY EDIT BELOW THIS LINE

let mentorsNames = ;

let mentorsNamedUppercased = ;

// ONLY EDIT ABOVE THIS LINE

console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]

```

:::

</TabItem>

<TabItem value="solution">

```js
/*

You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.

You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.

*/

let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};

// ONLY EDIT BELOW THIS LINE

let mentorsNames = Object.keys(mentorsAges);

let mentorsNamedUppercased = mentorsNames.map((mentorName) =>
  mentorName.toUpperCase()
);

// ONLY EDIT ABOVE THIS LINE

console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]
```

</TabItem>
</Tabs>

### Exercise (3)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

```js
let storeBranches = {
  glasgow: {
    manager: "Andrew",
    assistant: "Laura",
    interns: {
      head_intern: "Mozafar",
      intern: "James",
    },
  },

  edinburgh: {
    director: "Kelly",
    manager: "Sally",
    assistant: "Derek",
    interns: {
      head_intern: "John",
      intern: "Sarah",
    },
  },
};

// ONLY EDIT BELOW THIS LINE

// # 1
// prints [ 'glasgow', 'edinburgh' ]
console.log();

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
console.log();

// # 3
// prints [ 'head_intern', 'intern' ]
console.log();

// ONLY EDIT ABOVE THIS LINE
```

:::

</TabItem>

<TabItem value="solution">

```js
/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/

let storeBranches = {
  glasgow: {
    manager: "Andrew",
    assistant: "Laura",
    interns: {
      head_intern: "Mozafar",
      intern: "James",
    },
  },

  edinburgh: {
    director: "Kelly",
    manager: "Sally",
    assistant: "Derek",
    interns: {
      head_intern: "John",
      intern: "Sarah",
    },
  },
};

// ONLY EDIT BELOW THIS LINE

// # 1
// prints [ 'glasgow', 'edinburgh' ]
console.log(Object.keys(storeBranches));

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
console.log(Object.keys(storeBranches.glasgow));

// # 3
// prints [ 'head_intern', 'intern' ]
console.log(Object.keys(storeBranches.glasgow.interns));

// ONLY EDIT ABOVE THIS LINE
```

</TabItem>
</Tabs>

## Loop through an Object

Once in a while it will be required to loop through objects. You can achieve this in various ways.

### Use `for...in` statement

The `for...in` statement iterates over all distinct properties of an object.

Example:

```js
const flowers = {
  tulip: 20,
  rose: 10,
  lily: 15,
};

for (const key in flowers) {
  console.log(`${key}: ${flowers[key]}`);
}

// Prints
// tulip: 20
// rose: 10
// lily: 15
```

### Convert object into an array and loop through the array

Since we started JavaScript, we have used `console.log` to print things to our console.

Once you create an array of the object's keys or values using the `Object.keys`, `Object.values` methods, you can loop through it as if it was a normal array using array methods like `forEach`.

Example:

```js
const flowers = {
  tulip: 20,
  rose: 10,
  lily: 15,
};

// Looping through the array created from Object.keys
const flowerKeys = Object.keys(flowers);

flowerKeys.forEach((key) => {
  console.log(`${key}: ${flowers[key]}`);
});

// Prints
// tulip: 20
// rose: 10
// lily: 15
```

#### Exercise (1)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

You are given an object of trainee names and grades
Loop through all the trainees' grades and console log the name and grade of the ones with grade more than 18
Try to use both methods shown above to achieve this

```js
const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

// Prints
// TOM - 20
// ABDUL - 19
```

:::

</TabItem>

<TabItem value="solution">

```js
// You are given an object of trainee names and grades
// Loop through all the trainees' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

for (let name in traineeGrades) {
  if (traineeGrades[name] > 18) {
    console.log(`${name.toUpperCase()} - ${traineeGrades[name]}`);
  }
}

// Alternatively:
// const traineeNames = Object.keys(traineeGrades);
// traineeNames.forEach((name) => {
//     if (traineeGrades[name] > 18) {
//         console.log(`${name.toUpperCase()} - ${traineeGrades[name]}`)
//     }
// });

// Prints
// TOM - 20
// ABDUL - 19
```

</TabItem>
</Tabs>

## Pair Programming Kata

You will be randomly assigned a pair.

:::note exercise Coding Meetup 25 minutes

- [Set a timer](https://www.google.com/search?q=ten+minute+timer) and switch between driver and navigator roles after 10 minutes
- The "driver" is the person typing on the keyboard, just thinking about what needs to be written
- The "navigator" reviews what the driver is doing and is thinking about to write next

Choose a kata from [CYF Array and Object Methods](https://www.codewars.com/collections/cyf-array-and-object-methods) that suits you both.
:::

## PD (Gathering requirements)

**Session objective:** This session will explore what a tech product is, who are the users of a product, and how the product meets user needs.

**What is a product?**

Let's talk about briefly as a class what we mean when say a "product".

*Quick definition*: Product is something that satisfies a Business Need. Products deliver value to the business stakeholders (internal or external).

:::note
Exercise (20 minutes)

**Exercise objective:** To understand the mission of a product

During the previous week's coursework you defined your team's product. Discuss the following questions to identify the users for your product.

- Who are your users? What different user profiles will there be?
- What user needs is your product trying to address?

Volunteer to share your thoughts with the class.
:::

:::note
Exercise (20 minutes)

**Exercise objective**: To identify how products achieve user needs

Brainstorm the following questions in your teams to understand your product better.

- What is the functionality of your product?
- How does it address the user needs / solve their problem?

Volunteer to share your thoughts with the class for group discussion. Invite other groups to provide feedback, thoughts, additional suggestions.

:::

**Quick definitions**

Go through the following definitions. You don't need to go into details, you will need to have a basic understanding of these concepts for this week's coursework.

*What is an MVP?*

MVP (Minimum Viable Product) refers to a product that has just enough features to satisfy the needs of early customers and, more importantly, give them something to provide feedback on to shape the future of the product.

*What is a feature?*

A feature is the product’s service/function that provides business value and meets customer needs. A single product is likely to have multiple features.

*What is a user story?*

A user story is a brief description of software features, written from the user's perspective, that describes how that functionality will provide some values.

## Coursework

Click [here](./homework) to view the homework for this lesson.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 2" week="Week 2" />
