---
id: deploying-server
title: How to deploy a server on Render
sidebar_label: How to deploy a server on Render
---

1. Make sure you have connected your GitHub account to Render (see [How to connect your GitHub to Render](./connecting-github.md))
2. Log into the Render dashboard

![Render dashboard](./assets/render-dashboard.png)

3. Click on the New + button

![New + button on dashboard](./assets/dashboard-new-button.png)

4. Click on Web Service from the dropdown list

![Select Web Service from the New + button dropdown](./assets/new-web-service.jpg)

5. Select your repo to connect to Render by clicking on the Connect button

![Connect repo to Render](./assets/connect-repo.jpg)

6. Fill out the Name field, which will be used to label the server within Render

![Name the new web service](./assets/name-web-service.jpg)

7. Provide a Start Command field. This should be in the format `node YOUR_FILENAME.js`, it is likely `node server.js`

![Provide a Start Command field for the new web service](./assets/start-command.jpg)

8. Create your new server by clicking on the Create Web Service button

![Create the server by clicking on the Create Web Service button](./assets/create-web-service.jpg)

9. You should have been taken to the Build page for your new server
10. Wait for the build to complete (it may take a couple of minutes). It should display "Build successful" as well as "Live"

![Wait for the build to complete](./assets/build-successful.jpg)

11. You can view your newly deployed server by clicking the URL at the top of Web Service page

![URL to the newly deployed server at the top of the Web Service page](./assets/url-to-deployed-web-service.jpg)
