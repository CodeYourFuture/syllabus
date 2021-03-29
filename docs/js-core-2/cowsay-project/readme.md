---
id: readme
title: Cowsay
sidebar_label: Cowsay Project
---

## Cowsay

This coursework assumes you have [Node](https://nodejs.org/en/download/), a text editor, and a terminal or command line.

Cowsay is a fun script that prints an [ASCII](https://simple.wikipedia.org/wiki/ASCII) cow with your words in a speech bubble. It works like this: there is a library of pictures of cows made out of ASCII characters. You call the script in your terminal and you pass in arguments. There are lots of options, but one argument is required: a text string for the cow to say.

```
 ________
< Mooooo >
 --------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

Cowsay was originally written in [Perl](https://simple.wikipedia.org/wiki/Perl). In this coursework, we will run it with Node. How would we go about this? What things would be helpful? I think we could use:

* A node package that contains the cowsay library. I'll start you off by letting you know there is one, and it is called ```cowsay```
* A way to execute the script.

Before we start, what's the fastest way you could get the cow to talk? Well, you can execute some packages directly [in the command line with npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner).

```
npx cowsay Moooo
```

We did it! But let's explore some more. How would you install cowsay as a dependency? Make a new folder called /cowsaying and initialise a new package.
```
mkdir /cowsaying
cd /cowsaying
npm init
```
Press return through all the options and then do.
```
npm install cowsay
```
### npm run

Let's find out how to execute cowsay from our package.json. Open /cowsaying in your text editor and look at the [package.json](https://nodejs.dev/learn/the-package-json-guide).

Add cowsay to the scripts array. 
```
"scripts": {
    "cowsay": "cowsay Mooooo"
  },
```
Now cowsay is listed as a script, and it has an argument.  In your terminal, run cowsay.
```
npm run cowsay
```
What are the downsides of this approach? I would say one is that we want to be able to pass in arguments, not just always say moo. How could we make the cow say Baaaa?

Remove the hardcoded "Mooooo".  Can you pass a different string in the command line?

### node 

Now let's execute cowsay in a different way. Open /index.js in your text editor. Import the cowsay package with require.
```
const cowsay = require("cowsay");
```
And log a cow to the console that says "I require a package". Add some more arguments if you can.
```
console.log(cowsay.say({
        text : "I require a package",
        e : "oO",
        T : "U "
    }));
```
Now run this with node:
```
node index.js
```
## Going deeper, your stretch goal

How is this cow being made and what else can we make? Open your node modules and look inside cowsay. There's a README file that tells you all about the package and a library of other animals you can make. Read it. You don't have to understand all the code to get an idea of what is going on. 

How would you extend this library to add a new animal? What about [a duck](https://www.asciiart.eu/animals/birds-water)? Look at how the existing ```.cows``` are imported and try adapting this for your own .cow. There are no solutions provided for this challenge. Dig around for yourself.

## Project

Let's figure out how to make a cow say things in Node by ourselves. For this project we don't really need a package, a library or lots of options. Let's just get the cow printing out and saying whatever we write in the command line. What would be helpful? I think we need to:

* [Accept an argument](https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line) from the command line.
* Output to the command line. You've already done this with console.log.
* Make an ASCII cow.
* Write a function that puts the string into the cow's speech bubble.

Write your solution in a file called solution.js and test it by running your program in the command line. How will you handle a null argument?

### Iterating

We could make our program more accessible by adding a command line interface that prompts us to write in the cow's words. What tools can we use? I think we could use:

* A command line interface. I'll start you off by letting you know that there is a built in CLI called [readline](https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs).
* Our ASCII cow again.
* And our cow function.

Write your solution in a file called solution2.js and test it by running your program in the command line. Use a prompt to ask for your cow saying.

If you get stuck, I've included a couple of solutions. Yours might be different and that's ok. If you can print a cow and you can make it say different things, you solved it. Below I include a slightly simpler ASCII cow that might help if you hit formatting issues.

```
       /
      /
^__^ /
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||
   ```
