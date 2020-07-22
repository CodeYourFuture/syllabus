---
id: cheatsheet
title: "Cheatsheet: Netlify & GitHub Automatic Deployment"
sidebar_label: Cheatsheet
---

## Using Netlify for the first time

- Create account and link it to your github account

## Set up a project for deployment

- [deployment setup instructions are here](./instructions-for-automatic-deployment-with-netlify-and-github.md)
- Make sure to follow [site-naming convention for CYF projects](../cyf-site-naming-conventions.md)

## Deploy changes to your project

- Make changes locally, test locally
- commit your changes
- push to github
- wait for auto deployment to finish
- test on your site

Note: Netlify only monitors your _master_ branch, by default. But you can choose a branch to be monitored.

## Rename your site

- log in to https://netlify.com/
- select your site from the list
- click on `site settings`
- click on `change site name`
- follow instructions

### Think about this when renaming a site

If this a CYF Homework project...

- Does your teacher have your updated URL?
- Have you followed CYF site naming conventions (help your teachers!) TODO: Link

## Deleting your site

- log in to https://netlify.com/
- select your site from the list
- click on `site settings`
- scroll down and choose `_delete this site_`
- follow the instructions to confirm

## Common problems

- My site is not deploying when I push a change to github
  - Are you sure netlify is configured for the branch you are pushing to?
  - Be aware that changes can take some minutes to show up
  - Check the logs
- My repo doesn't show up in the netlify menu
  - Follow the prompt to configure your netlify-github integration and give it access to the repo you need (or all repos).
- My site has the wrong name
  - rename it (see above)
- You create the site using the wrong repo or wrong github account
  - Delete & recreate site.
