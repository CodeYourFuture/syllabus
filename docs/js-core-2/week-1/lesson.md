---
id: lesson
title: JavaScript Core II - 1
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Contents

- [Objects](#objects)
- [Objects Get and Set](#objects-get-and-set)
- [More complex objects](#more-complex-objects)
- [Object methods](#object-methods)
- [Arrays of Objects](#arrays-of-objects)
- [Object built-in methods](#object-built-in-methods)
- [Loop through an object](#loop-through-an-object)

---

## Learning Objectives

By the end of this lesson students should be able to:

- Define what an object is in JavaScript
- Be able to write code that can use an object to store data
- Be able to write code that changes the properties of an object
- Be able to write code that can retrieve data from an object
- Write and call methods inside JavaScript objects
- Use Objects when contained inside an array
- Write code that uses objects built-in methods
- Write code that can iterate through an object

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

Describe your own laptop as a JavaScript object. Try to think of as many properties as you can!

Example:

```js
let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};
```

### Exercise (2)

Think of 5 different real world "things" that you can describe with a JavaScript object
Assign each of them to a separate variable

Example:

```js
let jumper = {
  color: "blue",
  isCotton: true,
};
```

### Exercise (3)

```js
/*
The objects below have some syntax issues - try and fix them all!
*/

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

### Exercise (4)

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

#### Exercise (2)

```js
/*
The following code contains syntax errors - try and fix them!
Once you fix them, run the code, it should output the correct values!
*/

let phone = {
    brand:'iPhone,
    model 'iPhone X'
    launchYear: 2017,
    is Unlocked: true
;

let phoneBrand = phone.bbrand;
let phoneLaunchYear = phone[launchYear];

console.log(phoneBrand);
console.log(phoneLaunchYear);

// -> it should output:
// iPhone
// 2017
```

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

```js
/*
Write code in the space provided so that it outputs "Gilbert"
*/

// WRITE CODE BELOW THIS

// WRITE CODE ABOVE THIS

console.log(kitten.name);
// -> it should output: "Gilbert"
```

#### Exercise (2)

```js
/*
Write code in the space provided so that the expected values output
*/

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

#### Exercise (1)

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

#### Exercise (2)

```js
/*
Given the same "house" object again

Follow the instructions below and then run the file and make sure it outputs the correct results
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

#### Exercise (3)

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

#### Exercise (1)

```js
/*

A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

*/

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

#### Exercise (2)

The following code contains syntax errors - try and fix them!
Once you fix them, run this file, it should output the correct values!

```js
/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

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

#### Exercise (3)

```js
/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

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

#### Exercise (4)

```js
/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

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

#### Exercise (5)

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

```js
/*
1) Define an array containing the 3 persons defined below.
2) Return an array of the person names (hint: use map).
3) Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/

let person1 = {
    name: "Alice",
    age: 25
};

let person2 = {
    name: "Bob",
    age: 30
};

let person3 = {
    name: "John",
    age: 20
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

console.log("Question 1: array defined with 3 persons -> ",
    (persons[0] === person1 && persons[1] === person2 && persons[2] === person3) ? 'Passed :)' : 'Not yet :(');

console.log("Question 2: array containing the person names -> ",
    (personNames[0] === "Alice" && personNames[1] === "Bob" && personNames[2] === "John") ? 'Passed :)' : 'Not yet :(');

console.log("Question 3: array containing the persons younger than 28 years old -> ",
    (personsYoungerThan28YearsOld[0] === person1 && personsYoungerThan28YearsOld[1] === person3) ? 'Passed :)' : 'Not yet :(');

```

### Exercise (2)

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
    transportations: ["car", "bus", "train"]
};

let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"]
};

let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"]
};

let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"]
};

let travelDestinations = [destination1, destination2, destination3, destination4];

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

console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result:  ${destinationNamesMoreThan300KmsAwayByTrain}`);

```

### Exercise (3)

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

let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
  5
);
console.log(
  `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
);

let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
  "salad"
);
console.log(
  `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
);

let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
  "center"
);
console.log(
  `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
);
```

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

```js
/*

Return the keys and values of the following object

*/

let capitalCities = {
  scotland: 'Edinburgh',
  kenya: 'Nairobi',
  australia: 'Canberra',
  canada: 'Ottawa'
};

let highScores = {
  55: 'Alistair',
  100: 'David',
  89: 'Hannah',
  34: ['Sergi', 'Frank',]
};

// ONLY EDIT BELOW HERE

let capitalCitiesKeys = ;
let highScoresKeys = ;
let capitalCitiesValues = ;
let highScoresValues = ;

// ONLY EDIT ABOVE HERE

console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys)
// prints ['34, '55', '89', '100']

console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

console.log(highScoresValues)
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']

```

### Exercise (2)

```js
/*

You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.

You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.

*/

let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30
};

// ONLY EDIT BELOW THIS LINE

let mentorsNames = ;

let mentorsNamedUppercased = ;

// ONLY EDIT ABOVE THIS LINE

console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]

```

### Exercise (3)

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
console.log();

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
console.log();

// # 3
// prints [ 'head_intern', 'intern' ]
console.log();

// ONLY EDIT ABOVE THIS LINE
```

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

```js
// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

// Prints
// TOM - 20
// ABDUL - 19
```

## Coursework

Click [here](./homework) to view the homework for this lesson.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 2" week="Week 1" />
