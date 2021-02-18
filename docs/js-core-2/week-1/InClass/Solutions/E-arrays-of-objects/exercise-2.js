/* 
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Find all the destination names that are both more than 300 kms far away and reachable by train.
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
