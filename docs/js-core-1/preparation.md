---
id: preparation
title: Preparation
sidebar_label: Preparation
---

## 1) Install a UNIX based operating system

You probably already have this if you have done Fundamentals and Html/CSS.

You probably already have this if you have done Fundamentals and Html/CSS.

:::warning
Code Your Future does not support Windows
:::

If you have a Mac or Linux machine already, you already have a UNIX based operating system. All CYF-supplied laptops run Mac OS or Linux. If you have your own machine and it runs **Windows**, you should already have set up a Linux partition after Fundamentals.

If you have still not done this, you must do it now. We cannot support trainees using Windows. It takes too much time from everybody else. If you need help doing this, post in #cyf-ask-tech-stuff, or bring your laptop to a CYF co-working space to get support. It's normal to need help with this process.

[**&rarr; Dual Boot on Windows**](https://help.ubuntu.com/community/WindowsDualBoot)

## 2) Install Node.js (30 minutes)

If you get stuck on any of the below or above instructions, please post in your class channel on Slack.

### On Ubuntu

1. Type ctrl + alt + T to open up the terminal
2. Check whether you already have NodeJS installed by runnning `node -v`, which should return a version number. If it does, you can skip the next steps.
2. Install NodeJS and npm by copying and pasting the following into the terminal: `sudo apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs`
3. Check that you have successfully installed NodeJS by ensuring that the following command returns returns a version number e.g. "v18.12.1"
   - `node -v`
4. Check that you have successfully installed npm by ensuring that the following command returns a version number e.g. "8.19.2"
   - `npm -v`

### On Mac

1. Click cmd + spacebar and type "Terminal" to open up the terminal
2. Install Homebrew, which is a package manager for MacOS. Copy and paste the following command into your terminal: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
3. Ensure that you have successfully installed Homebrew by typing `brew -v` in your terminal - you should get an output that says something like "`Homebrew <version number>`"
4. Install NodeJS and npm by typing `brew install node@18`
5. Check that you have successfully installed NodeJS by ensuring that the following command returns a version number e.g. "v18.12.1"
   - `node -v`
6. Check that you have successfully installed npm by ensuring that the following command returns a version number e.g. "8.19.2"
   - `npm -v`
