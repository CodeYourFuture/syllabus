### Object.keys()

Since we started JavaScript, we have used `console.log` to print things to our console.

In week 2 and 3, you learned about array methods like `.map()`, `.length()`.

These are what we call built-in methods, and they're part of the JavaScript language. Someone else created these methods, and we can use them in our code.

Like arrays, objects have build in methods that can help us. In this lesson, we will learn about `Object.keys()`. This method goes into our object, and returns the object property names as an array.

Here is an example output for using `.keys()`:

```js
let footballClubs = {
  chelsea_fc: 'England',
  fc_barcelona: 'Spain',
  ac_milan: 'Italy'
};

console.log(Object.keys(footballClubs));
// prints [ 'chelsea_fc', 'fc_barcelona', 'ac_milan' ]
```
