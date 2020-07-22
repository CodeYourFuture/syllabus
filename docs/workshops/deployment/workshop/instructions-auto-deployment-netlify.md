---
id: instructions
title: Setting up automatic site deployment using Netlify and GitHub
sidebar_label: Instructions
---

## Instructions

- Visit https://www.netlify.com/
- Either click on "new site from git" or visit https://app.netlify.com/start
- choose "github"
- read the permissions and click "Authorize Netlify by Netlify"
- If prompted "where do you want to install netlify", choose your github username.
- Choose "all repositories", for simplicity, but read the permissions you are allowing.
  - if you want to choose "only select repositories", that is ok (but more work)
- click ok
- Under "Continuous Deployment: GitHub App", select which repo you want to set up
  - Common Problem: if the repo is not there, it may be because you haven't granted netlify to look at all of your repos. Follow the prompt to configure github-netlify integration and grant permissions for the repo you want.
- Under "branch to deploy" choose the branch of your repo to which you will most often be committing when working on the site. That way, your deployed site will be updated with every change you make. (Later in the course you'll change this way of working.)
- Do not fill in "build command" and "publish directory" - these should be empty for your current projects.
- Click "Deploy site"
- Wait til it finishes
- Click on the presented (random) link
- Check your site is really there, and working

## Changing your site name

- Click site settings, and scroll to site details,site information
- Click "change site name".
- Enter a new site name and press save
- Scroll to the top and click the new link (something.netlify.com)
- Check your site is accessible via that new url
- Test by committing and pushing new changes to your branch.
