#! /usr/bin/env node

// Reference: https://stackoverflow.com/a/57329003/3001761
if (process.env.npm_execpath.indexOf("yarn") === -1) {
  console.log("Please use Yarn, not NPM.");
  process.exit(1);
}
