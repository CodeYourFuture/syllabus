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

If any of the above or below instructions are unclear, please post in your city channel on Slack.

To install WSL as a Windows 10 user, click on this link and follow the instructions (NOTE: At the section "Install your Linux Distribution of Choice", select Ubuntu 20.04 LTS):

https://docs.microsoft.com/en-us/windows/wsl/install-win10

## 2) Install Node.js (30 minutes)

If you get stuck on any of the below or above instructions, please post in your class channel on Slack.

### On Mac

1. Click cmd + spacebar and type "Terminal" to open up the terminal
2. Install Homebrew, which is a package manager for MacOS. Copy and paste the following command into your terminal: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
3. Ensure that you have succesfully installed Homebrew by typing `brew -v` in your terminal - you should get an output that says something like "`Homebrew <version number>`"
4. Install NodeJS and npm by typing `brew install node`
5. Check that you have successfully installed NodeJS by ensuring that the following command returns a version number e.g. "v13.8.0"
   - `node -v`
6. Check that you have successfully installed npm by ensuring that the following command returns a version number e.g. "6.13.6"
   - `npm -v`

## On Ubuntu

1. Type ctrl + alt + T to open up the terminal
2. Install NodeJS and npm by copying and pasting the following into the terminal: `sudo apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash - && sudo apt-get install -y nodejs`
3. Check that you have successfully installed NodeJS by ensuring that the following command returns returns a version number e.g. "v13.8.0"
   - `node -v`
4. Check that you have successfully installed npm by ensuring that the following command returns a version number e.g. "6.13.6"
   - `npm -v`

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

## 4) Visual Studio Code

### 4.1) Install VSCode and Extensions

Instructions for how to do this can be found here

https://docs.codeyourfuture.io/course-processes/joining-the-course/getting-setup#visual-studio-code

To make your programming life a lot easier, you should install Prettier on VS Code (which will automatically make your code look more "neat" and readable) and enable autosaving on VS Code (so that you don't forget to save your file before you run your script).

### 4.2) Enable Autosave

To enable autosave:

1. Open VS Code
2. Go to File and click Auto Save
