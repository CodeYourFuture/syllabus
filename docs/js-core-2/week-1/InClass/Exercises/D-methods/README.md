### Object methods

Besides having specific properties, objects in the real world can also do things. For example, a computer can display something on the screen, a person can say their names etc... In Javascript, we do this using 'methods'. A method is a function attached to a particular object. You have already used some predefined methods before, for example *toUpperCase()* on a string or *filter()* on an array.

```js
let athlete = {
    name: 'Usain Bolt',
    goldMedals: 25,
    sayHi: function() {
        return "Hi everybody!";
    }
};
```

How do we call this method? 

```js
athlete.sayHi(); // returns "Hi everybody!"
```

An object method can also rely on the other properties of the object to do more complex calculation. To reference the current object in the body of the method, we will use the keyword *this*. Let's take an example.

```js
let athlete = {
    name: 'Usain Bolt',
    goldMedals: 25,
    sayName: function() {
        return "My name is " + this.name;
    }
};

athlete.sayName(); // returns "My name is Usain Bolt"
```

Knowing this, you can have methods which modify existing properties of your object.

```js
let athlete = {
    name: 'Usain Bolt',
    goldMedals: 25,
    winNewMedal: function() {
        this.goldMedals = this.goldMedals + 1;
    }
};

athlete.winNewMedal();
console.log(athelete.goldMedals); // prints "26"
```

As methods are just functions attached to objects, they can also take parameters.

```js
let athlete = {
    name: 'Usain Bolt',
    goldMedals: 25,
    silverMedals: 7,
    winNewMedal: function(medal) {
        if (medal === "gold") {
            this.goldMedals = this.goldMedals + 1;
        } else {
            this.silverMedals = this.silverMedals + 1;
        }
    }
};

athlete.winNewMedal("silver");
console.log(athlete.goldMedals); // prints "25"
console.log(athlete.silverMedals); // prints "8"
```