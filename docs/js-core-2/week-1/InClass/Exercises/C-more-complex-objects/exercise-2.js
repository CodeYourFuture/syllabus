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
      lastName: "Conway"
    }
};

let newCurrentOwner = {
    firstName: "Georgina",
    lastName: "Hernandez"
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
    "Did you correctly assign the new owner using the given variable?",
    `Expected result: true. Actual result: ${(house.currentOwner === newCurrentOwner)}`);
console.log(`Expected result: Claire M., Stephen B.Actual result: ${house.previousOwners.toString()}`);
console.log(`Expected result: false.Actual result: ${house.isForSale}`);