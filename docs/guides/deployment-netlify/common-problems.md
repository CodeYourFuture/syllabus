---
id: common-problems
title: Common Problems
sidebar_label: Common Problems
---

## My site is not updating when I push a change to GitHub

- Are you sure that you are pushing to the same branch that Netlify is "watching"?
- Be aware that changes can take a few minutes to show up
- Check the logs under the Deploy tab. If there is an error, Netlify won't be able to deploy your site

## My repo doesn't show up in the Netlify menu

- Follow the prompt to configure your Netlify-GitHub integration and give it access to the repo you need (or all repos).

## The site is using the wrong repo or wrong GitHub account

- Delete & recreate your site.

## The site is failing to deploy due to submodule not found

- This usually happens after running create-react-app on an exisiting react app folder.
- You will find a subfolder inside the repository with the same name as the repository. If the subfolder is empty, delete it and push your changes.
