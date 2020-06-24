# possible solutions + variants (with/without `for` loops)

## iterating and printing off an object

Exercise Write a function "printProperties" that takes an object and prints its
properties

```js
// with for loop
function printProperties(student) {
  var properties = [];
  for (var p of student) {
    properties.push(p);
  }
  console.log(properties.join(","));
}

// without for loop
function printProperties(student) {
  var properties = Object.keys(student);
  console.log(properties.join(","));
}
```

Write a function called hasProperty that takes an object and a property. The
function should return true if the property exists,false if it doesn't.

```js
// with for loop
function hasProperty(student, propertyName) {
  for (var p of student) {
    if (p === propertyName) {
      return true;
    }
  }
  return false;
}

// without for loop
function hasProperty(student, propertyName) {
  Object.keys(student).some(function(p) {
    return p === propertyName;
  });
}

// shortcut/lazy way (js already has a method like this)
function hasProperty(student, propertyName) {
  return student.hasOwnProperty(propertyName);
}
```

Write a function called printObject that takes an object and iterates through
all its properties and prints a string formatted property: value Bonus point if
you can format the list of interests properly

```js
// with for loop (and not handling array property (interests)
function printObject(student) {
  var result = []
  for (var p of student) {
    result.push(`${p} is ${student[p]}`)
  }
  console.log(result.join("\n"))
}

// with for loop, handling array values
function printObject(student) {
  var result = []
  for (var p of student) {
    if (Array.isArray(student[p])) {
      result.push(`${p} are ${student[p].join(",")}`)
    } else {
      result.push(`${p} is ${student[p]}`)
    }
  }
  console.log(result.join("\n"))
}

// without for loop, handling array values
// could be more concise with a ternary, this seemed easier to read/parse
function printObject(student) {
  var result = Object.keys(student).map(function (p) {
    if (Array.isArray(student[p]) {
      return `${p} are ${student[p].join(",")}`;
    } else {
      return `${p} is ${student[p]}`
    }
  })
  console.log(result.join("\n"))
}
```

## More advanced working with objects

Notes:

* examples here are done on with the most straightforwar/simplest way possible
  _first_ - if you were to write `sumWallet` as dynamic for different note
  denominations on the first attempt, you'd basically have finished the entire
  section.
* they are also using `forEach` and mutations in favour of `reduce` in order to
  keep it simple. feel free to demonstrate a solution using reduce if you feel
  it's appropriate.

Write a function that takes in the wallet as an argument, and returns the total
money in the wallet.

```js
// quotes or no quotes will work for these keys
function sumWallet(wallet) {
  var total = 0;
  total += wallet[5];
  total += wallet[10];
  total += wallet[20];
  return total;
}
```

Write a function that takes the array `wallets` and returns the total amount of
money for all of the wallets.

```js
function sumAllWallets(walletArray) {
  var total = 0;
  walletArray.forEach(function(wallet) {
    total += wallet[5];
    total += wallet[10];
    total += wallet[20];
  });
  return total;
}
```

Write another function that takes the array of wallets and combines all of the
notes in each of them, returning a single wallet with all of the other wallets'
notes.

```js
function combineWallets(walletArray) {
  var resultWallet = {
    5: 0,
    10: 0,
    20: 0
  };
  walletArray.forEach(function(wallet) {
    resultWallet[5] += wallet[5];
    resultWallet[10] += wallet[10];
    resultWallet[20] += wallet[20];
  });
  return resultWallet;
}
```

See if you can write a function that will sum up and return the total amount in
a single wallet, but it could have any denomination of notes inside it (£7 note
or a £13 or any other number).

Note: we're using javascript's coercion for the `*` operator for our object key
`note` (it's a string). If that coercion fails - it will not throw and will
result in `NaN` polluting the rest of the calculation. I've decided to leave out
any `isNaN` checks here to keep the example code clear.

```js
function sumDynamicWallet(wallet) {
  var total = 0;
  Object.keys(wallet).forEach(function(note) {
    total += note * wallet[note];
  });
  return total;
}
```

See if you can write a function that takes in any number of wallets, which could
contain any denomination/type of notes inside them (each being different). Tip:
have a think about if you could re-use a function from a previous example...

```js
function sumDynamicWallets(walletArray) {
  var grandTotal = 0; // could be `total`, renamed for clarity/to avoid confusion
  walletArray.forEach(function(wallet) {
    grandTotal += sumDynamicWallet(wallet);
  });
  return grandTotal;
}

// with reduce (I'd recommend showing this example if you can get to it)
function sumDynamicWallets(walletArray) {
  return walletArray.reduce(sumDynamicWalletForReduce, 0);
}

// modifying the previous example's function `sumDynamicWallet` to take a total in
// and return a new total with the wallet total added to it
function sumDynamicWalletForReduce(acc, wallet) {
  Object.keys(wallet).forEach(function(note) {
    acc += note * wallet[note];
  });
  return acc;
}
```
