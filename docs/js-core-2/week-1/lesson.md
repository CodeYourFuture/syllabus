---
id: lesson
title: JavaScript Core II - 1
sidebar_label: Lesson
---

<!-- These imports are used to enable this feature. Do not delete. -->
<!-- https://v2.docusaurus.io/docs/markdown-features#multi-language-support-code-blocks -->

import Feedback from "@theme/Feedback";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ExerciseSolutions from "@theme/ExerciseSolutions";

## Contents

- [Objects](#objects)
- [Objects Get and Set](#objects-get-and-set)
- [More complex objects](#more-complex-objects)
- [Object methods](#object-methods)
- [PD - Setting up the team](#pd-setting-up-the-team)

---

## Learning Objectives

By the end of this lesson trainees should be able to:

- Define what an object is in JavaScript
- Be able to write code that can use an object to store data
- Be able to write code that changes the properties of an object
- Be able to write code that can retrieve data from an object
- Write and call methods inside JavaScript objects

---

## Objects

Objects in the real world have properties that describe how they are unique. Your laptop, for example, has a brand (Lenovo/Apple etc.), a screen size (13/15 inch), RAM (8/16GB) etc.

How would we describe the above laptop as a JavaScript object?

```js
let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};
```

### Exercise (1)

<Tabs
defaultValue="exercise"
values={[{ label: "Exercise", value: "exercise" }, { label:"Solution", value: "solution" }]}>
<TabItem value="exercise">

:::note Exercise

Describe your own laptop as a JavaScript object. Try to think of as many properties as you can!

Example:

```js
let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};
```

:::

</TabItem>
<TabItem value="solution">

<ExerciseSolutions password="password">

The solution to this depends on your laptop! Here's an example:

```js
let laptop = {
  brand: "Apple",
  model: "MacBook Pro",
  screenSize: 13,
};

console.log(laptop);
```

</ExerciseSolutions>

</TabItem>
</Tabs>

### Exercise (2)

:::note Exercise

Think of 5 different real world "things" that you can describe with a JavaScript object
Assign each of them to a separate variable

Example:

```js
let jumper = {
  color: "blue",
  isCotton: true,
};
```

:::

### Exercise (3)

:::note Exercise

The objects below have some syntax issues - try and fix them all!

```js


let kitten = {
    fur colour: "orange",
    age "23"
};

let laptop =
    brand: "Lenovo"
    ram "5GB"
}

let phone = {
    operating system "iOS",
    hasStylus: true,
    megapixels 12
    "batteryLife": "24 hours"
```

Useful words to remember when talking about objects:

- **object literal**: anything that has a set of `{...}` around a set of properties is an object literal
- **property** or **key**: `brand`, `screenSize` and `isTouchScreen` are properties/keys of the object
- **values**: `"Lenovo"`, `13` and `true` are values of the object's properties

:::

### Exercise (4)

:::note Exercise

Choose a few nearby colleagues and one mentor, and go through each variable you
declared above in Part 1, 2 or 3, reading everything that happens out loud.

Make sure each member of your group has read at least one variable!

Make sure you use words like:

- object literal
- property / key
- value
- string / number / boolean
- declaring a variable
- etc.

:::

## Objects Get and Set

### Getting the value of an object's property

Let's take one of the objects we looked at earlier..

```js
let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};
```

> Try to `console.log(laptop)`. The output might depend on your environment!

To find out the value of an object's property, you can use the dot notation..

```js
console.log(laptop.brand);
```

You can also use the bracket notation (although this is rarely used, it's good to know):

```js
console.log(laptop["brand"]);
```

#### Exercise (1)

Console.log the values of each property of "kitten"

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

```js
/*
    Console.log the values of each property of "kitten"
*/

let kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};
```

:::

</TabItem>

<TabItem value="solution">

```js
/*
    Console.log the values of each property of "kitten"
*/

let kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};

// YOUR CODE GOES BELOW HERE
console.log(kitten.ageMonths);
console.log(kitten.isFemale);
console.log(kitten.furColour);

// YOUR CODE GOES ABOVE HERE
```

</TabItem>
</Tabs>

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

The following code contains syntax errors - try and fix them!
Once you fix them, run the code, it should output the correct values!

It should output:
iPhone
2017

```js
let phone = {
  brand:'iPhone,
  model 'iPhone X'
  launchYear: 2017,
  is Unlocked: true
;

let phoneBrand = phone.brand;
let phoneLaunchYear = phone["launchYear"];

console.log(phoneBrand);
console.log(phoneLaunchYear);

```

:::

</TabItem>

<TabItem value="solution">

```js
let phone = {
  brand: "iPhone",
  model: "iPhone X",
  launchYear: 2017,
  isUnlocked: true,
};

let phoneBrand = phone.brand;
let phoneLaunchYear = phone["launchYear"];

console.log(phoneBrand);
console.log(phoneLaunchYear);
```

</TabItem>
</Tabs>

### Setting the value of a property

Similar to reading, if we want to set a property:

```js
laptop.brand = "Apple";
```

It's strongly recommended you always use the same **type** when re-assigning an object's property (if it was a string before, keep it a string - and so on).

```js
let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};

// DON'T DO THIS
laptop.screenSize = "15 inch";

// OK TO DO
laptop.screenSize = 15;
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

Write code in the space provided so that it outputs "Gilbert"

It should output: "Gilbert"

```js
// WRITE CODE BELOW THIS

// WRITE CODE ABOVE THIS

console.log(kitten.name);
```

:::

</TabItem>

<TabItem value="solution">

```js
/*
  Write code in the space provided so that it outputs "Gilbert"
*/

// WRITE CODE BELOW THIS
const kitten = {
  name: "Gilbert",
};

// WRITE CODE ABOVE THIS

console.log(kitten.name);

// -> it should output: "Gilbert"
```

</TabItem>
</Tabs>

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

Write code in the space provided so that the expected values output

It should output:
Rex
true

```js
let dog = {
  name: "Billy",
  wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE

// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true
```

:::

</TabItem>

<TabItem value="solution">

```js
/*
  Write code in the space provided so that the expected values output
*/

let dog = {
  name: "Billy",
  wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
dog.name = "Rex";
dog.wantsToPlay = true;

// WRITE CODE ABOVE THIS LINE

//DO NOT MODIFY BELOW
console.log(dog.name);
console.log(dog.wantsToPlay);

// it should output:
// Rex
// true
```

</TabItem>
</Tabs>

## More Complex Objects

Object properties can even be assigned other objects, arrays or variables too. The example below shows an object with keys that have been assigned a variable, an array, and an object.

```js
let kittenName = "Feathers";

let kitten = {
  name: kittenName,
  toyCollection: ["blue ball", "green ball", "hoover box"],
  favoriteLocation: {
    roomName: "Living room",
    napPlace: "window",
    idealTemperatureCelsius: 24,
  },
};
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

Given the following house - follow the instructions below.

Make sure you run the file after and it outputs the correct results.

```js
let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// - change the address of "house" to '51 Berkley Road'
// - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// - change the last name of the current owner of "house" to "Montgomery"

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: 51 Berkley Road. Actual result: ${house.address}`
);
console.log(
  `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
);
console.log(
  `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
);
```

:::

</TabItem>

<TabItem value="solution">

```js
/*
  Given the following house - follow the instructions below.

  Make sure you run the file after and it outputs the correct results.
*/

let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// - change the address of "house" to "51 Berkley Road"
house.address = "51 Berkley Road";
// - change the previous owners of "house" to ["Brian M.", "Fiona S."]
house.previousOwners = ["Brian M.", "Fiona S."];
// - change the last name of the current owner of "house" to "Montgomery"
house.currentOwner.lastName = "Montgomery";

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Expected result: 51 Berkley Road. Actual result: " + house.address
);
console.log(
  "Expected result: Brian M., Fiona S. Actual result: " +
    house.previousOwners.toString()
);
console.log(
  "Expected result: Montgomery. Actual result: " + house.currentOwner.lastName
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

Given the same "house" object again

Follow the instructions below and then run the file
and make sure it outputs the correct results

```js
let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

let newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez",
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
    house.currentOwner === newCurrentOwner
  }`
);
console.log(
  `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
);
console.log(`Expected result: false. Actual result: ${house.isForSale}`);
```

:::

</TabItem>
<TabItem value="solution">

```js
/*
    Given the same "house" object again

    Follow the instructions below and then run the file 
    and make sure it outputs the correct results
*/

let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

let newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez",
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
house.currentOwner = newCurrentOwner;
// - from the list of previous owners, replace only "John A." with "Stephen B."
house.previousOwners[1] = "Stephen B.";
// - give the house a new property called 'isForSale' with the value 'false'
house.isForSale = false;

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  "Did you correctly assign the new owner using the given variable?",
  `Expected result: true. Actual result: ${
    house.currentOwner === newCurrentOwner
  }`
);
console.log(
  `Expected result: Claire M., Stephen B.Actual result: ${house.previousOwners.toString()}`
);
console.log(`Expected result: false.Actual result: ${house.isForSale}`);
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

Given the same "house" object again

Write the code for the functions as per the description above them

```js
let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {}

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);
```

:::

</TabItem>

<TabItem value="solution">

```js
/*
    Given the same "house" object again

    Write the code for the functions as per the description above them
*/

let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return `${house.currentOwner.firstName} ${house.currentOwner.lastName}`;
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  return [house1.currentOwner.email, house2.currentOwner.email];
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  return house1.price < house2.price ? house1.address : house2.address;
}

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);
```

</TabItem>
</Tabs>

## Object Methods

Besides having specific properties, objects in the real world can also do things. For example, a computer can display something on the screen, a person can say their names etc... In Javascript, we do this using 'methods'. A method is a function attached to a particular object. You have already used some predefined methods before, for example _toUpperCase()_ on a string or _filter()_ on an array.

```js
let athlete = {
  name: "Usain Bolt",
  goldMedals: 25,
  sayHi: function () {
    return "Hi everybody!";
  },
};
```

How do we call this method?

```js
athlete.sayHi(); // returns "Hi everybody!"
```

An object method can also rely on the other properties of the object to do more complex calculation. To reference the current object in the body of the method, we will use the keyword _this_. Let's take an example.

```js
let athlete = {
  name: "Usain Bolt",
  goldMedals: 25,
  sayName: function () {
    return "My name is " + this.name;
  },
};

athlete.sayName(); // returns "My name is Usain Bolt"
```

Knowing this, you can have methods which modify existing properties of your object.

```js
let athlete = {
  name: "Usain Bolt",
  goldMedals: 25,
  winNewMedal: function () {
    this.goldMedals = this.goldMedals + 1;
  },
};

athlete.winNewMedal();
console.log(athelete.goldMedals); // prints "26"
```

As methods are just functions attached to objects, they can also take parameters.

```js
let athlete = {
  name: "Usain Bolt",
  goldMedals: 25,
  silverMedals: 7,
  winNewMedal: function (medal) {
    if (medal === "gold") {
      this.goldMedals = this.goldMedals + 1;
    } else {
      this.silverMedals = this.silverMedals + 1;
    }
  },
};

athlete.winNewMedal("silver");
console.log(athlete.goldMedals); // prints "25"
console.log(athlete.silverMedals); // prints "8"
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

A person named Alice is defined below.

1. Add a method "greet" so this person can say hello.
2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

```js
let person = {
  name: "Alice",
  age: 25,
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: Hello everybody. Actual result: ${person.greet()}`
);
console.log(
  `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
);
```

:::

</TabItem>

<TabItem value="solution">

```js
/*

A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

*/

let person = {
  name: "Alice",
  age: 25,
  greet: function () {
    return "Hello everybody";
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: Hello everybody. Actual result: ${person.greet()}`
);
```

</TabItem>
</Tabs>

### Exercise (2)

:::note Exercise

The following code contains syntax errors - try and fix them!
Once you fix them, run this file, it should output the correct values!

```js

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: (newAddress) {
        currentAddress = newAddress;
    },
    celebrateBirthday: function {
        that.age = that.age + 1;
    }
};
```

:::

### Exercise (3)

:::note Exercise

The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!

```js

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: (newAddress) {
        currentAddress = newAddress;
    },
    celebrateBirthday: function {
        that.age = that.age + 1;
    }
};


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.changeAddress("Edinburgh");
console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);

person.celebrateBirthday();
console.log(`Expected result: 26. Actual result: ${person.age}`);

```

:::

### Exercise (4)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.

```js
let person = {
  name: "Alice",
  friends: ["John", "Nina"],
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log(
  `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
);
```

:::

</TabItem>

<TabItem value="solution">

```js
/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

let person = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend: function (friendName) {
    this.friends.push(friendName);
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log(
  `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
);
```

</TabItem>
</Tabs>

### Exercise (5)

<Tabs
defaultValue="exercise"
values={[
{ label: 'Exercise', value: 'exercise', },
{ label: 'Solution', value: 'solution', },
]
}>
<TabItem value="exercise">

:::note Exercise

A coffee machine is defined below.
One that can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee
only if the inserted amount is greater or equal than the price of the coffee!

```js
let coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0,
  },
  insertedAmount: 0,
  insertMoney: function (amount) {},
  getCoffee: function (coffee) {},
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
    "cappuccino"
  )}`
);

coffeeMachine.insertMoney(1.5);
console.log(
  `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
    "blackCoffee"
  )}`
);

coffeeMachine.insertMoney(4.0);
console.log(
  `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);
```

:::

</TabItem>

<TabItem value="solution">

```js
/*
A coffee machine is defined below.
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee
only if the inserted amount is greater or equal than the price of the coffee!
*/

let coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0,
  },
  insertedAmount: 0,
  insertMoney: function (amount) {
    this.insertedAmount += amount; // or this.insertedAmount = this.insertedAmount + amount;
  },
  getCoffee: function (coffee) {
    if (this.insertedAmount >= this.prices[coffee]) {
      this.insertedAmount = 0; // insertedAmount resets after a transaction
      return `Please take your ${coffee}`;
    } else {
      return `Sorry you don't have enough money for a ${coffee}`;
    }
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
    "cappuccino"
  )}`
);

coffeeMachine.insertMoney(1.5);
console.log(
  `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
    "blackCoffee"
  )}`
);

coffeeMachine.insertMoney(4.0);
console.log(
  `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);
```

</TabItem>
</Tabs>

## PD (Setting up the team)

During the JS2 module, you will prepare a Teamwork Project for your PD coursework. You will set up a team and work on a fictional product for a fictional client. You are not going to do any coding. This project aims to improve your teamwork skills. You will learn how to prepare for a project before the web development phase.

You will:

- Set up your team
- Agree on the fictional product you will prepare for
- Define the minimum viable product for your project
- Prepare a brief for your project

**Session objective**: In this session, we will talk about tech teams and different tech roles. We will briefly discuss different aspects of teamwork; such as setting up goals, software development processes, time management, communication, and conflict management.

:::note
Exercise (10 minutes)

**Exercise objective**: To brainstorm about teamwork at tech industry

Think about the teams you will work with in the future when you move into tech. Discuss in groups:

- What is your dream future job?
- What job roles will be in your team?
- What other people/teams will you interact with?
- What non-technical skills do you bring?
- What non-technical skills should you develop while at CYF?

Work in groups for about 5 minutes, then discuss as a class for 5 minutes.

:::

:::note
Exercise (5 minutes)

**Exercise objective:** To talk about different roles in tech teams

The following are the roles typically found within a development team. There are plenty of roles other than ‘Full-Stack Developer’.

Discuss as a class the responsibilities of the following tech roles:

- A front end web developer
- A back end web developer 
- A UX/UI designer or UX researcher 
- A Product manager
- A QA tester 
- Tech lead 

**Answer key**

Brief descriptions of the roles:

- A front end web developer: developer that mainly works on the look and feel of the website 
- A back end web developer: developer that mainly works on the server-side code (database, API, etc) 
- A UX/UI designer or UX researcher: Provides the design and user experience of the website
- A Product manager: Sets work priorities, and product direction 
- A QA tester: quality assurance team member. Their responsibility is to test the work that developers produce, making sure it works well, with no defects or missing functionality.
- Tech lead: Hands-on developer responsible for tech excellence, code best practices (no people management responsibilities)

:::

:::note
Exercise (10 minutes)

**Exercise objective:** To discuss the importance of setting clear goals and responsibilities within a team

You might come across the following questions in your future work as part of a ceremony called “team charter”. Team charters define roles, responsibilities and ways of working. If these are not clear for you when you join a new company, you should ask and seek clarification urgently.

Discuss as a class:

- Why is it important for your team to understand their main goal?
- Why is it important for everybody on your team to understand the role each other play?
- What happens when you are not clear about these two points?

:::

:::note
Exercise (5 minutes)

**Exercise objective:** To get familiar with different processes in the software development cycle
Match the process to the stage in the software development lifecycle (SDLC) as a class. Don’t go too much into detail, you can do some research later if you would like to learn more. These processes vary from company to company, and determine what steps need to happen before code is shipped to production. They aim to reduce the risk of mistakes going to production. For example during the deployment process, code is reviewed by at least one person, deployed to a testing environment (server), successfully tested by a QA, and the release is scheduled to a time approved by the end customer.

Process:

a. Gathering Requirements

b. Code Review

c. Bug Fixes

d. Deployment Processes

Software Development Cycle:

Planning

Analysis

Design

Implementation

Testing&Integration

Maintenance

What other processes can you think of?

**Answer Key**

Gathering Requirements - Analysis and planning

Code Review - Implementation

Bug Fixes - Testing and maintenance

Deployment Processes - Integration

:::

:::note
Exercise (10  minutes)

**Exercise objective:** To identify the most common time management challenges when working as a team
Work in groups for about 5 minutes, then discuss as a class for 5 minutes:

- How will you ensure that your group will remain on schedule?
- What is your strategy if the project falls behind schedule? 

:::

:::note
Exercise (10  minutes)

**Exercise objective:** To recognise the value of co-working tools

Work in groups for about 5 minutes, then discuss as a class for 5 minutes:

- What is your strategy for communication within your team?
- How would you work with your team to agree on task/workload allocation? What tools will you use?

**Answer Key**
For the second question the correct answer at CYF is “GitHub Projects”.
Some examples for tools: Jira, GitHub (repo and project boards), IDE (integrated development environment), Slack, Teams, Google calendar, Calendly, Microsoft Office, Outlook, shared documents, Miro, Figma, Jamboard

:::

:::note
Exercise (10 minutes)

**Exercise objective:** To brainstorm about the causes of conflicts and methods to manage them

Remember, there will be a more detailed PD session on conflict resolution in the upcoming weeks. Work in groups for about 5 minutes, then discuss as a class for 5 minutes:

- How would you communicate key challenges in your team?
- How would you minimise conflicts in your team?
- How would you resolve conflicts in your team?
- How would you hold each other accountable?
- How would you hold yourself accountable?

## Coursework

[The coursework for this lesson](./homework).

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 2" week="Week 1" />
