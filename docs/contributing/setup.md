---
id: setup
title: Setup Guide
sidebar_label: Setup Guide
---

## Website Details

This website is built using [Docusaurus 2](https://v2.docusaurus.io/).

## 1. Download the Code

All of the code for this website can be found on the [Syllabus Repository](https://github.com/CodeYourFuture/syllabus)

You should clone this repo using the command

```cmd
$ git clone https://github.com/CodeYourFuture/syllabus.git
```

## 2. Installation

```cmd
$ npm install
```

## 3. Local Development

```
$ npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Deployment

### Local Building

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### To Production

All commits are deployed automatically when they are merged into `main`.
