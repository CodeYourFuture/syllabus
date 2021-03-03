// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = '';

// 3. Make a cow that takes a string

function cow(saying) {
    let cowsay =
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

    return cowsay;
}

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)

readline.question(`What does the cow say?`, saying => {
    console.log(cow(saying))
    readline.close()
})