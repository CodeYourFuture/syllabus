---
id: multiple-form-fields
title: React Further Reading - Multiple Form Fields
---

In Week 3 of the React lessons, we looked at how we could make a form with multiple fields in React.

To do this, we used multiple state variables. But there is actually an approach which uses only one state variable, but relies on some new JavaScript functionality that we have not looked at previously.

Let's take a look at how we could simplify our form component ([interactive example](https://codesandbox.io/s/controlled-component-createaccountform-m7p083zn6p?file=/src/CreateAccountForm.js)):

```js
function CreateAccountForm() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const updatedUserData = {
      ...userData,
      [event.target.name]: event.target.value,
    };

    setUserData(updatedUserData);
  }

  function submit() {
    console.log("Do something with the form values...");
    console.log(`Username = ${userData.username}`);
    console.log(`Email = ${userData.email}`);
    console.log(`Password = ${userData.password}`);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={submit}>
        Create account
      </button>
    </div>
  );
}
```

As before, we have three different inputs named `username`, `email` and `password`. We still have one method (`handleChange`) that keeps track of changes for all values.

The difference is that we now keep each value as a field in an object in state. This means that our change handler has to be updated to update the object in state, instead of calling a different state setter function.

## Updating an Object in State

Did you spot the strange syntax in `handleChange`? We are using two techniques that you may not have seen in JavaScript before.

### Object Spread

We are using [object spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals) syntax, which copies properties from one object to another. We are using this to update the state object but without _mutating_ the original object.

Let's break this down into 2 steps. Here we create a **new** object based on another object, and **adding** a new property ([interactive example](https://jsbin.com/suyekiwezu/edit?js,console)):

```js
const sherlock = {
  name: "Sherlock Holmes",
};

const sherlockAfterMoving = {
  ...sherlock,
  address: "221b Baker Street",
};

console.log(sherlock);
console.log(sherlockAfterMoving);
```

We can also _override_ a property if the keys are the same ([interactive example](https://jsbin.com/hiwuwobeza/edit?js,console)):

```js
const watson = {
  name: "John Watson",
  address: "123 Fake Road",
};

const watsonAfterMoving = {
  ...watson,
  address: "221b Baker Street",
};

console.log(watson);
console.log(watsonAfterMoving);
```

Notice how Watson "moves" from "123 Fake Road" to "221b Baker Street"? Because the `address` key is in both objects, the **second** one "wins" and overrides the other key.

### Computing Property Names

The second bit of new syntax (`[event.target.name]`) is called a _computed property name_. Inside a JavaScript object, you can use a variable wrapped in square brackets which acts as a dynamic key, such as ([interactive example](https://jsbin.com/jegerohati/edit?js,console)):

```js
const theKey = "hat";
const theValue = "Deerstalker Cap";

const sherlockClothes = {
  [theKey]: theValue,
};

console.log(sherlockClothes); // => { hat: "Deerstalker Cap" }
```

We are combining all of the concepts above to make a new object, that has all the same properties as the `userData` object, except for the property that is computed from `event.target.name` for the key and `event.target.value` for the value.

| Exercise A                                                                                                                                                |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Open the `pokedex` React application again and open the `src/CaughtPokemon.js` file.                                                                   |
| 2. Change your `CaughtPokemon` component to use an object for the `pokemonNameInput` state. Use the pattern above to update state in `handleInputChange`. |
| 3. Add another `<input>` field to the component which the user can use to write a description of the Pokemon.                                             |
