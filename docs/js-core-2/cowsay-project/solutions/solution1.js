// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

const args = process.argv.slice(2);

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = '';

// 3. Make a cow that takes a string

function cowsay(saying) {
if(saying) {
  let cowsaying =
        `
       ${topLine.repeat(saying.length)}
     < ${saying} >
       ${bottomLine.repeat(saying.length)}
       /
      /
^__^ /
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||`;

    return cowsaying;
  } else {
    // account for empty strings
    return 'You must add an argument. Try again and add "some words in quotes".'
  }
}

//4. Pipe argument into cowsay function and return a cow
console.log(cowsay(args[0]));
