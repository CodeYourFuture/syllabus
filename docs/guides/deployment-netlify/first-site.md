---
id: first-site
title: Deploying Your First Site
sidebar_label: Deploying Your First Site
---

1. Visit https://www.netlify.com/ and click the "Sign up" button in the top navigation

![Netlify homepage](./assets/first-site/01-netlify-homepage.png)

2. Choose "GitHub" on the sign up page

![Netlify sign up page](./assets/first-site/02-netlify-signup.png)

3. If you are logged out of GitHub, then log in
4. Read the permissions and click the "Authorize netlify" button

![Granting GitHub account permissions to Netlify](./assets/first-site/03-github-account-permissions.png)

5. If prompted to "Tell us about yourself", fill out the information. Note: only the "I'm using Netlify for" question is required, so you can skip everything else if you want
6. Click the "Import from Git" button

![Choose how to deploy your site on Netlify](./assets/first-site/04-deploy-first-project.png)

7. When asked to connect a Git provider, click the "GitHub" button

![Choose your site's Git provider on Netlify](./assets/first-site/05-git-provider.png)

8. A pop-up window will ask for some more GitHub permissions. Click the "Authorize Netlify" button

![Granting further GitHub permissions to Netlify](./assets/first-site/06-github-further-permissions.png)

9. You will be asked to "Install Netlify". If you are prompted "Where do you want to install Netlify", choose _your personal_ GitHub username. Do **NOT** choose Code Your Future's account, as this won't work!

![Installing Netlify into your GitHub account](./assets/first-site/07-install-netlify.png)

10. Select the GitHub repo which you would like to create a site from

![Choosing the GitHub repo to create your site from](./assets/first-site/08-choose-repo.png)

11. Under "Branch to deploy" choose the "main" branch of your repo, which is usually called `main`. You do not need to change anything under "Customize build settings", Netlify will do this for you

![Choosing the branch to create your site from](./assets/first-site/09-choose-branch.png)

12. Click the "Deploy site" button
13. It make take a few minutes before the deploy is complete. Try refreshing your browser, when a `.netlify.app` URL appears then the site is live

![The site is live](./assets/first-site/10-site-is-live.png)
