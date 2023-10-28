---
id: another-site
title: Deploying Another Site
sidebar_label: Deploying Another Site
---

1. Log into [Netlify](https://www.netlify.com/) (remember that you sign in using GitHub)
2. On your Netlify dashboard, click "Sites" in the left navigation

![Netlify dashboard](./assets/another-site/01-netlify-dashboard.png)

3. Click on the "Add new site" button, then "Import an existing project"

![Creating a new site from an existing project](./assets/another-site/02-sites-page.png)

4. This might be familiar now! Click "GitHub" as your Git provider

![Choosing your site's Git provider](./assets/another-site/03-git-provider.png)

5. A pop up will show briefly, but then you'll see a list of your GitHub repos. Click on the relevant one

![Choosing the GitHub repo to create your site from](./assets/another-site/04-choose-repo.png)

6. Under "Branch to deploy" choose the "main" branch of your repo, which is usually called `main`. You do not need to change anything under "Customize build settings", Netlify will do this for you

![Choosing the branch to create your site from](./assets/another-site/05-choose-branch.png)

7. Set your settings to build the site. By default it will be build command `npm run build` and publish directory `build`. After that, Click the "Deploy site" button.

![Choosing the build settings to create your site](./assets/another-site/06-choose-build-settings.png)

8. It may take a few minutes before the deploy is complete.

![The site is deploying](./assets/another-site/07-site-deploying.png)

9. Once the site is deployed, a pop up will appear saying that the deploy was sucessful. Click on `View site deploy`.

![The site is live](./assets/another-site/08-deploy-sucess.png)

10. Click on the `.netlify.app` url to visit your site.

![Visit the site](./assets/another-site/09-site-live.png)
