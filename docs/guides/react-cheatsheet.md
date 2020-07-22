---
id: react-cheatsheet
title: React Cheatsheet
sidebar_label: React Cheatsheet
---

## Recipes

| **Recipe**                                                | **Links**                                                                                                                                                                            |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Including an image in your React app                      | [https://codesandbox.io/s/showing-images-in-create-react-app-tyyd9?file=/src/App.js](https://codesandbox.io/s/showing-images-in-create-react-app-tyyd9?file=/src/App.js)             |
| Including an image in your React app (alternative method) | [https://codesandbox.io/s/showing-images-in-create-react-app-0n77h?file=/src/App.js](https://codesandbox.io/s/showing-images-in-create-react-app-0n77h?file=/src/App.js)             |
| Importing a CSS file into your React component            | [https://codesandbox.io/s/using-css-in-create-react-app-2cu6y?file=/src/App.js](https://codesandbox.io/s/using-css-in-create-react-app-2cu6y?file=/src/App.js)                       |
| Including a custom font in your React app                 | [https://codesandbox.io/s/using-custom-fonts-into-create-react-app-tjw28?file=/src/App.js](https://codesandbox.io/s/using-custom-fonts-into-create-react-app-tjw28?file=/src/App.js) |
| Mapping over an array with JSX                            | [https://codesandbox.io/s/mapping-over-an-array-with-jsx-qsqzh?file=/src/App.js](https://codesandbox.io/s/mapping-over-an-array-with-jsx-qsqzh?file=/src/App.js)                     |
| Conditional rendering with JSX                            | [https://codesandbox.io/s/conditional-rendering-with-jsx-b2ryk?file=/src/App.js](https://codesandbox.io/s/conditional-rendering-with-jsx-b2ryk?file=/src/App.js)                     |
| Quick React setup                                         | [https://codesandbox.io/s/affectionate-dream-fmg69?file=/src/App.js](https://codesandbox.io/s/affectionate-dream-fmg69?file=/src/App.js)                                             |

### Using a 3rd-party library in your React app Example: "lodash"

- In your terminal, run the following command:
  npm install \&lt;package-name\&gt;E.g. npm install lodash
- Go to the file where you want to use the package and import it with require('package-name')E.g. const lodash = require('lodash')
- You should now be able to use the package in that file.E.g. let num = lodash.random(0, 10);
- If there is an error, try to restart your development server
  - Demo:[https://codesandbox.io/s/installing-and-using-an-npm-module-5ukh8](https://codesandbox.io/s/installing-and-using-an-npm-module-5ukh8)

## Links

| **Subject**                                         | **Link**                                                                                               |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| React code snippets for hooks                       | [https://devhints.io/react#hooks-new](https://devhints.io/react#hooks-new)                             |
| JSX syntax                                          | [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)         |
| Array Destructuring explained (useful for useState) | https://github.com/wesbos/es6-articles/blob/master/19%20-%20Destructing%20Arrays.md                    |
| create-react-app docs                               | [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started) |
| List special event-handler props (onClick, etc)     | [https://reactjs.org/docs/events.html#reference](https://reactjs.org/docs/events.html#reference)       |
| Glossary of React Terms                             | [https://reactjs.org/docs/glossary.html](https://reactjs.org/docs/glossary.html)                       |

## Netlify deployment

As before! You can set up automatic Netlify deployment from GitHub in the same way as your earlier HTML + JS websites.

Netlify should automatically set the following important build settings:

| **Important netlify build settings** | **Value**     |
| ------------------------------------ | ------------- |
| &quot;publish directory&quot;        | build/        |
| &quot;build command&quot;            | npm run build |

Note that deployment will be a bit slower than with simpler projects as it has to &quot;build&quot; your React project.

The full Netlify cheat sheet can be found [**here**](/guides/netlify-auto-deploy)

## Error scenarios

### Error when launching app with npm start

- Are you in the right directory?
  Or, this could be a problem with node modules
- For example, you may see an error with a message saying &quot;module not found&quot;
- Try to npm install the missing package
- If this fails, delete your node_modules folder and package-lock.json and re-run npm install|

### Stop Create React App development server

- In your terminal, you can press CTRL+C on your keyboard to stop create-react-app. ( **DON&#39;T** just close the terminal!)

## Definitions

(see also [https://reactjs.org/docs/glossary.html](https://reactjs.org/docs/glossary.html))

| **Term**         | **Definition**                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------ |
| React            | A library that is used to build UI components                                              |
| React DOM        | A library used to bridge React into the DOM                                                |
| JSX              | A helper to write HTML-like syntax in Javascript                                           |
| create-react-app | A tool to create a simple React app without having to setting up the scaffoldings manually |
| Netlify          | A platform to deploy our web apps to the internet                                          |
