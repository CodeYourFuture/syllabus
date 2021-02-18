/* 
A person named Alice is defined below. 
Add a method "sayName" so this person can say their own name. 
Hint: use 'this' keyword to access the name property.
*/

let person = {
  name: "Alice",
  age: 25,
  sayName: function () {
    return `My name is ${this.name}.`;
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
);
