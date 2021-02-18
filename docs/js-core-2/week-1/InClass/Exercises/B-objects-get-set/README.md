### Getting the value of an object's property

Let's take one of the objects we looked at earlier..

```js
let laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true
};
```

> Try to `console.log(laptop)`. The output might depend on your environment!

To find out the value of an object's property, you can use the dot notation..

```js
console.log(laptop.brand);
```

You can also use the bracket notation (although this is rarely used, it's good to know):

```js
console.log(laptop['brand']);
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
    isTouchscreen: true
};

// DON'T DO THIS
laptop.screenSize = "15 inch";

// OK TO DO
laptop.screenSize = 15;
```



