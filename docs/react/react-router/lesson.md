---
id: lesson
title: React Router
sidebar_label: Lesson
---

## Introduction to React Router

In the past few weeks, you've learned how to build applications with React and the different applications and examples were all built on a single page. However, what if you wanted to have different pages with each page having its own URL (so you can bookmark it for example)? You will need to introduce a router in your application. In JavaScript, a router is the piece of code which is in charge of switching between views of your application and keep each view in sync with a specific URL. For example, you could imagine having a homepage reachable from the root path `/` and a users page with the path `/users`. In React, a popular library to help you achieve this is React Router.

Let's look at a first example ([interactive example](https://codesandbox.io/s/react-router-1-forked-hz6po?file=/src/index.js)):

```js
const Index = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Users = ({ names }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/" element={<About />} />
          <Route path="/users/" element={<Users names={["Raresh", "Nate"]} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
```

React Router provides some default React components that you can use to enable routing in your application. First, notice the top level `<BrowserRouter>` component which wraps everything else. Then, the `<Routes>` component which will choose one `<Route>` based on the current path. Each route is defined with the `<Route>` component which maps a path (defined with the `path` props) to a React component. You can pass an entire component including its properties to the `element={...}` prop. Finally, the `Link` component can be used to create links to navigate to different routes.

> **Exercise A**
> Open the `pokedex` React application. In this exercise, React Router will be introduced. Instead of displaying all your components in the same page, we will use React Router to define different pages in the `pokedex` application.
>
> 1. In the terminal, install React Router with `npm install --save react-router-dom`.
> 2. Open `src/App.js` and import BrowserRouter, Route, Routes and Link components from React Router (hint: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";`)
> 3. Wrap all the components in the `render` method in the `<BrowserRouter>` component.
> 4. In the following, we will have `CaughtPokemon` and `BestPokemon` displayed with different route. But first, let's create some links to navigate to different pages. Still in the `<BrowserRouter>` in the `render` method of `src/App.js`, use the `Link` component to create 2 links: one to navigate to the URL `/best-pokemon` and another one to navigate to `/caught-pokemon` (hint: `<Link to="/best-pokemon">Best Pokemon</Link>`).
> 5. Open the `pokedex` in your browser and verify that you can see 2 links on the page. When clicking on each of these links, the URL in your browser address bar should change (but nothing will change on the screen yet!).
> 6. Create a `<Routes> </Routes>` component inside your `<BrowserRouter>`. This is where we will nest our `<Route>` components. It will display one of them at a time depending on the current URL path.
> 6. Now let's define the routes to map a path to a React component. First, create a route to map `/best-pokemon` to the `BestPokemon` component. Then, use another route to map `/caught-pokemon` to the `CaughtPokemon` component (Hint: move the component inside the `element` key, as in `<Route element={...} path="/my-path" />`).
> 7. Open the `pokedex` in your browser and verify that when clicking on each link, `BestPokemon` and `CaughtPokemon` are rendered accordingly.

## URL parameters

Sometimes, parameters can be passed from the URL to a React component directly via its props. In this case, different URLs can be mapped to one single React component. For example, in an online shopping application, a React component `Product` may be responsible to display a specific product on the page. By using URL parameters, the name or ID of the requested product can be specific in the URL and React Router will pass it a props of the `Product` component ([interactive example](https://codesandbox.io/s/react-router-2-forked-8q0rl?file=/src/index.js)):

```js
const Product = () => {
  let { name } = useParams();
  return <h2>Product: {name}</h2>;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <h2>Product List</h2>
          <ul>
            <li>
              <Link to="/products/laptop">Laptop</Link>
            </li>
            <li>
              <Link to="/products/tv">TV</Link>
            </li>
            <li>
              <Link to="/products/teddy-bear">Teddy Bear</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/products/:name" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
```

In the route definition above, a specific syntax is used to define the URL parameter: `:name`. Then in the `Product` component, the value of `name` can be accessed through `useParams()`.

> **Exercise B**
> In the following, we will create a new component to display a Pokemon information. The Pokemon name will be passed through the URL and displayed on the screen.
>
> 1. Create a new component `PokemonInfo`.
> 2. In `src/App.js`, create a new route which maps the path `/pokemon/:name` to the previously created component `PokemonInfo` (hint: `<Route path="/pokemon/:name" element={<PokemonInfo />} />`).
> 3. In the `render` method of `PokemonInfo` component, display the name of the Pokemon which is passed in the URL parameter (hint: use the hook `useParams()` and extract `name` from the object it returns ).
> 4. Open the `pokedex` in your browser and try several URLs (such as `http://localhost:3000/pokemon/Pikachu` and see if the Pokemon name is displayed accordingly on your screen.
> 5. **(STRETCH GOAL)** Instead of passing the name of the Pokemon in the URL parameter, now pass an ID. The ID passed correspond to the ID of the Pokemon in the Poke API. For example, the ID 1 corresponds to the Pokemon Bulbasaur (https://pokeapi.co/api/v2/pokemon-species/1/). In the `PokemonInfo` component, use the Pokemon ID from the URL to load the corresponding Pokemon data from the Poke API and display the following Pokemon information on the screen: name, color.name, shape.name, base_happiness and capture_rate.

## Further Reading

A lot of examples are available on the [official React Router website](https://reactrouter.com/docs/en/v6/getting-started/overview).
