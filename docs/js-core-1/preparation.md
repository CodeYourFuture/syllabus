---
id: preparation
title: Preparation
sidebar_label: Preparation
---

## 1) Install a UNIX based operating system

:::warning
Code Your Future does not support Windows
:::

If you have a Mac or Linux machine already, you already have a UNIX based operating system. All CYF-supplied laptops run Mac OS or Linux. If you have your own machine and it runs **Windows**, you should already have set up a Linux partition after Fundamentals.

If you have still not done this, you must do it now. We cannot support trainees using Windows. It takes too much time from everybody else. If you need help doing this, post in #cyf-ask-tech-stuff, or bring your laptop to a CYF co-working space to get support. It's normal to need help with this process.

[**&rarr; Dual Boot on Windows**](https://help.ubuntu.com/community/WindowsDualBoot)

## 2) Install Node.js (30 minutes)

If you get stuck on any of the below or above instructions, please post in your class channel on Slack.

### On Mac

1. Click cmd + spacebar and type "Terminal" to open up the terminal
2. Install Homebrew, which is a package manager for MacOS. Copy and paste the following command into your terminal: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
3. Ensure that you have succesfully installed Homebrew by typing `brew -v` in your terminal - you should get an output that says something like "`Homebrew <version number>`"
4. Install NodeJS and npm by typing `brew install node`
5. Check that you have successfully installed NodeJS by ensuring that the following command returns a version number e.g. "v16.17.0"
   - `node -v`
6. Check that you have successfully installed npm by ensuring that the following command returns a version number e.g. "8.15.0"
   - `npm -v`

### On Ubuntu

1. Type ctrl + alt + T to open up the terminal
2. Install NodeJS and npm by copying and pasting the following into the terminal: `sudo apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash - && sudo apt-get install -y nodejs`
3. Check that you have successfully installed NodeJS by ensuring that the following command returns returns a version number e.g. "v16.17.0"
   - `node -v`
4. Check that you have successfully installed npm by ensuring that the following command returns a version number e.g. "8.15.0"
   - `npm -v`

### 3) Refresh on JS (3 hours)

Explore the basics of JavaScript and refresh the concepts you learned in Intro to Digital.

- [Learn basic JavaScript](https://scrimba.com/learn/basicjavascript)

### 3.1) Project (2 hours)

Now do Module 1 of this course: Build a passenger counter app

- [Learn JavaScript](https://scrimba.com/learn/learnjavascript)

**Stretch** : Module 1, "Build a passenger counter app", of this course is mandatory, but we encourage you to continue through the other modules if you have time.

### Supplementary to 3) Reading

In addition, or if you run into issues with the interactive videos, please read the following materials:

- Variables (Review): https://www.khanacademy.org/computing/computer-programming/programming/variables/a/review-variables
- Functions (Review): https://www.khanacademy.org/computing/computer-programming/programming/functions/a/review-functions
- Logic and if Statements (Review): https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/a/review-logic-and-if-statements
- Looping (Review): https://www.khanacademy.org/computing/computer-programming/programming/looping/a/review-looping
- Arrays (Review): https://www.khanacademy.org/computing/computer-programming/programming/arrays/a/review-arrays

## 4) Visual Studio Code

:::tip
You use VSCode and Prettier to complete and format your coursework.
:::

### 4.1) Install VSCode and Extensions

Instructions for how to do this can be found here

https://docs.codeyourfuture.io/course-processes/before-the-course/getting-setup#extensions

Install Prettier on VS Code (which will automatically make your code look more "neat" and readable).

Turn on autosaving on VS Code (so that you don't forget to save your file before you run your script).

### 4.2) Enable "Autosave" & "Format On Save"

To enable Autosave:

1. Open VS Code
2. Go to File and click Auto Save

To enable "Format on Save"

1. Open VS Code
2. Go to Preferences > Settings
3. Click on "Search settings"
4. Enter "Format on save"
5. Enable "Editor: Format On Save"
