### Objects

Objects in the real world have properties that describe how they are unique. Your laptop, for example, has a brand (Lenovo/Apple etc.), a screen size (13/15 inch), RAM (8/16GB) etc.

How would we describe the above laptop as a JavaScript object?

```js
let laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true
};
```

Useful words to remember when talking about objects:
- **object literal**: anything that has a set of `{...}` around a set of properties is an object literal
- **property** or **key**: `brand`, `screenSize` and `isTouchScreen` are properties/keys of the object
- **values**: `"Lenovo"`, `13` and `true` are values of the object's properties