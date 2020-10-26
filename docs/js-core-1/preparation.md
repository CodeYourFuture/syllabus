---
id: preparation
title: Preparation
sidebar_label: Preparation
---

## 1) Install "Windows Subsystem for Linux" (60 minutes)

**For students with Windows 10 only (if you have been assigned this and you don't have Windows 10, please submit as resolved and comment your OS).**

WSL stands for "Windows Subsystem for Linux" and allows Windows 10 users to run Linux instructions (more commonly called "commands") without running Linux as an operating system. If you are a Mac user, you do not need WSL because Mac runs like Linux and most commands that you can run on Linux can be run on a Mac. You will need to run Linux commands throughout your course, especially if you want to run JavaScript or a web application on your machine.

WSL is only available for Windows 10 users, so if you have an older version of Windows than Windows 10, you will be required to install Ubuntu alongside or instead of your Windows installation (please reach out to a volunteer if you have an older version of Windows than Windows 10).

PLEASE NOTE: IF YOU DO NOT COMPLETE THIS HOMEWORK, YOU WILL NOT BE EQUIPPED TO START JAVASCRIPT CORE 1.

If any of the above or below instructions are unclear, please post to #london-class6 channel on Slack.

To install WSL as a Windows 10 user, click on this link and follow the instructions (NOTE: At the section "Install your Linux Distribution of Choice", select Ubuntu 18.04 LTS):

https://docs.microsoft.com/en-us/windows/wsl/install-win10

## 2) Install Node.js (30 minutes)

All command line instructions below will be provided between backticks (`). When copying them, please ensure you only copy the text between the backticks and not including the backticks.

If you get stuck on any of the below or above instructions, please post to #london-class6 on Slack.

### On Mac

1. Click cmd + spacebar and type "Terminal" to open up the terminal
2. Install Homebrew, which is a package manager for MacOS. Copy and paste the following command into your terminal: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
3. Ensure that you have succesfully installed Homebrew by typing `brew -v` in your terminal - you should get an output that says something like "Homebrew <version number>"
4. Install NodeJS and npm by typing `brew install node`
5. Check that you have successfully installed NodeJS by ensuring that the following command returns "v13.8.0": `node -v`
6. Check that you have successfully installed npm by ensuring that the following command returns "6.13.6": `npm -v`

## On Ubuntu

1. Type ctrl + alt + T to open up the terminal
2. Install NodeJS and npm by copying and pasting the following into the terminal: `sudo apt-get install curl && curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash - && sudo apt-get install nodejs`
3. Check that you have successfully installed NodeJS by ensuring that the following command returns "v13.8.0": `node -v`
4. Check that you have successfully installed npm by ensuring that the following command returns "6.13.6": `npm -v`

## On Windows

1. Open Ubuntu WSL (click Windows button then type "Ubuntu")
2. Follow the instructions from the "On Ubuntu" section starting from step 2

## 3) KhanAcademy Review (4 hours)

We are going to review the essentials of the Khan Academy course that we learned during the Fundamentals course.

### 3.1) Reading

Please read the following materials

- Variables (Review): https://www.khanacademy.org/computing/computer-programming/programming/variables/a/review-variables
- Functions (Review): https://www.khanacademy.org/computing/computer-programming/programming/functions/a/review-functions
- Logic and if Statements (Review): https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/a/review-logic-and-if-statements
- Looping (Review): https://www.khanacademy.org/computing/computer-programming/programming/looping/a/review-looping
- Arrays (Review): https://www.khanacademy.org/computing/computer-programming/programming/arrays/a/review-arrays

If you think you need more time to re-assimilate these concepts you can go over the video tutorials again.

### 3.2) Project

Create a spin-off of the following project

https://www.khanacademy.org/computer-programming/bubbles/6227974791118848

You'll see there's a fish and a bubble.

- Add more bubbles of different sizes in random positions.
- BONUS: Animate the bubbles.
- BONUS: Animate the fish.
- BONUS: Make the fish turn back after hitting the edge of the tank.

Try to use in your solution the constructions you just reviewed: variables, functions, if statements, loops or arrays. You can adapt and reuse any code from your previous projects.
