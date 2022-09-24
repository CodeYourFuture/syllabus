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

![Netlify homepage](../assets/first-site/01-netlify-homepage.png)

2. Choose "GitHub" on the sign up page

![Netlify sign up page](../assets/first-site/02-netlify-signup.png)

3. If you are logged out of GitHub, then log in
4. Read the permissions and click the "Authorize netlify" button

![Granting GitHub account permissions to Netlify](../assets/first-site/03-github-account-permissions.png)

5. If prompted to "Tell us about yourself", fill out the information. Note: only the "I'm using Netlify for" question is required, so you can skip everything else if you want
6. Click the "Import from Git" button

![Choose how to deploy your site on Netlify](../assets/first-site/04-deploy-first-project.png)

7. When asked to connect a Git provider, click the "GitHub" button

![Choose your site's Git provider on Netlify](../assets/first-site/05-git-provider.png)

8. A pop-up window will ask for some more GitHub permissions. Click the "Authorize Netlify" button

![Granting further GitHub permissions to Netlify](../assets/first-site/06-github-further-permissions.png)

9. You will be asked to "Install Netlify". If you are prompted "Where do you want to install Netlify", choose _your personal_ GitHub username. Do **NOT** choose Code Your Future's account, as this won't work!

![Installing Netlify into your GitHub account](../assets/first-site/07-install-netlify.png)

10. Select the GitHub repo which you would like to create a site from

![Choosing the GitHub repo to create your site from](../assets/first-site/08-choose-repo.png)

11. Under "Branch to deploy" choose the "main" branch of your repo, which is usually called `main`. You do not need to change anything under "Customize build settings", Netlify will do this for you

![Choosing the branch to create your site from](../assets/first-site/09-choose-branch.png)

12. Click the "Deploy site" button
13. It make take a few minutes before the deploy is complete. Try refreshing your browser, when a `.netlify.app` URL appears then the site is live

![The site is live](../assets/first-site/10-site-is-live.png)

## Deploying another site

1. Log into [Netlify](https://www.netlify.com/) (remember that you sign in using GitHub)
2. On your Netlify dashboard, click "Sites" in the top navigation

![Netlify dashboard](../assets/another-site/01-netlify-dashboard.png)

3. Click on the "Add new site" button, then "Import an existing project"

![Creating a new site from an existing project](../assets/another-site/02-sites-page.png)

4. This might be familiar now! Click "GitHub" as your Git provider

![Choosing your site's Git provider](../assets/another-site/03-git-provider.png)

5. A pop up will show briefly, but then you'll see a list of your GitHub repos. Click on the relevant one

![Choosing the GitHub repo to create your site from](../assets/another-site/04-choose-repo.png)

6. Under "Branch to deploy" choose the "main" branch of your repo, which is usually called `main`. You do **not** need to change anything under "Basic build settings", Netlify will do this for you

![Choosing a branch to create your site from](../assets/another-site/05-choose-branch.png)

7. Click the "Deploy site" button
8. It make take a few minutes before the deploy is complete. Try refreshing your browser, when a `.netlify.app` URL appears then the site is live

<!-- 06-site-is-live.png -->

![The site is live](../assets/another-site/06-site-is-live.png)

## Changing your site name

Once you have a site deployed, you may notice that Netlify has created a randomised `.netlify.app` URL to access it.

You may want to change this to a "friendlier" URL so that it is easier to remember and share. We also ask you to change the URL of sites you create for coursework, so that it is easier to for volunteers to find your site and give feedback. See [website naming conventions](../site-naming-conventions.md) for rules to name your site.

:::tip
If you already have the site open in Netlify, you can skip the first few steps!
:::

1. Log into [Netlify](https://www.netlify.com/) (remember that you sign in using GitHub)
2. On your Netlify dashboard, click "Sites" in the top navigation

![Netlify dashboard](../assets/renaming-site/01-netlify-dashboard.png)

3. Click on the site that you want to rename in the list of all of your sites

![List of your Netlify sites](../assets/renaming-site/02-list-of-sites.png)

4. On the site overview page, click on "Site settings"

![Site overview page](../assets/renaming-site/03-site-overview.png)

5. Scroll down to the "Site information" section and click "Change site name"

![Site information in site settings](../assets/renaming-site/04-site-settings.png)

6. Enter your new site name and click "Save"

![Site name input](../assets/renaming-site/05-site-name-input.png)

7. Your site should now be renamed! If you scroll to the top, the URL should be `NEW_NAME.netlify.app`. Try clicking to make sure that the URL still works
