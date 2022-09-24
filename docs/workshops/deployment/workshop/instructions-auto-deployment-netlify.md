---
id: instructions
title: Setting up automatic site deployment using Netlify and GitHub
sidebar_label: Instructions
---

## Introduction

In this guide, we'll learn how to set up automatic website _deployment_.

Deploying is the process of making your site available to everyone on the internet. This is important otherwise you won't be able to share your site with the world!

Using GitHub and Netlify we can set up **automatic** deployment, so that every time you update your site it is deployed!

## Deploying your first site

1. Visit https://www.netlify.com/ and click the "Sign up" button in the top navigation

![Netlify homepage](../assets/01-netlify-homepage.png)

2. Choose "GitHub" on the sign up page

![Netlify sign up page](../assets/02-netlify-signup.png)

3. If you are logged out of GitHub, then log in
4. Read the permissions and click the "Authorize netlify" button

![Granting GitHub account permissions to Netlify](../assets/03-github-account-permissions.png)

5. If prompted to "Tell us about yourself", fill out the information. Note: only the "I'm using Netlify for" question is required, so you can skip everything else if you want
6. Click the "Import from Git" button

![Choose how to deploy your site on Netlify](../assets/04-deploy-first-project.png)

7. When asked to connect a Git provider, click the "GitHub" button

![Choose your site's Git provider on Netlify](../assets/05-git-provider.png)

8. A pop-up window will ask for some more GitHub permissions. Click the "Authorize Netlify" button

![Granting further GitHub permissions to Netlify](../assets/06-github-further-permissions.png)

9. You will be asked to "Install Netlify". If you are prompted "Where do you want to install Netlify", choose _your personal_ GitHub username. Do **NOT** choose Code Your Future's account, as this won't work!

![Installing Netlify into your GitHub account](../assets/07-install-netlify.png)

10. Select the GitHub repo which you would like to create a site from

![Choosing the GitHub repo to create your site from](../assets/08-choose-repo.png)

11. Under "Branch to deploy" choose the "main" branch of your repo, which is usually called `main`. You do not need to change anything under "Customize build settings", Netlify will do this for you

![Choosing the branch to create your site from](../assets/09-choose-branch.png)

12. Click the "Deploy site" button
13. Your site is now deploying!

## Changing your site name

- Click site settings, and scroll to site details,site information
- Click "change site name".
- Enter a new site name and press save
- Scroll to the top and click the new link (something.netlify.com)
- Check your site is accessible via that new url
- Test by committing and pushing new changes to your branch.
