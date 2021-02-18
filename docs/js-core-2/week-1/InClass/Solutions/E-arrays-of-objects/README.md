### Arrays of objects

In the past weeks, you've learned about using arrays of numbers, arrays of string etc... In the following, we will learn how to use arrays of objects.

```js
let kitten1 = {
    name: 'Fluffy',
    weeksOld: 2
};

let kitten2 = {
    name: 'Megatron',
    weeksOld: 1
};

let kitten3 = {
    name: 'Billy',
    weeksOld: 5
};

let kittens = [kitten1, kitten2, kitten3];
```

You can also use all the functions for arrays that you learned before: find, some, every, filter, map, forEach... As an example, we want to filter all the kittens who are less than 3 weeks old:

```js
function isYoungerThan3Weeks(kitten) {
    return kitten.weeksOld <= 3;
}

kittens.filter(isYoungerThan3Weeks);    // returns [kitten1, kitten2];
```

What if we want to get an array of all the kitties names?

```js
function getName(kitten) {
    return kitten.name;
}

kittens.map(getName);   // returns ["Fluffy", "Megatron", "Billy"]
```