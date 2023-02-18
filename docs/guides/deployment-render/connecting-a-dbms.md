---
id: connecting-a-dbms
title: Connecting a database management system to a database on Render
sidebar_label: Connecting a database management system to a database on Render
---

:::tip

This guide uses a database management system (DBMS) called [DBeaver](https://dbeaver.io/), but the ideas still apply if you are using another DBMS. If you are using another piece of software, try looking for similarly named controls.

:::

1. Navigate to the Database tab and select New Database Connection

![Creating a new Database Connection](./assets/new-connection.png)

2. Select PostgreSQL then click the Next button

![Selecting PostgreSQL from the available databases](./assets/selecting-postgres.png)

3. Often, after the first installation or use of a specific database type, you may encounter the download of relevant drivers modal. This is perfectly normal, just click Download and proceed to the next step. DBeaver will download and install the relevant drivers needed for using your specific database type

![Downloading PostgreSQL drivers](./assets/db-drivers.png)

4. To the right of Main tab, Click on PostgreSQL tab. Check the Show all databases checkbox and return to Main tab

![Enabling option to show all database](./assets/show-all-databases.png)

5. Enter your database credentials into the form:
   1. URL: the External Database URL from your Environment Variables section on Render
   1. Host: the same External Database URL, **except** remove everything up to and including the `@` sign then remove everything after `.com`. It should look something like: `dpg-...-a.oregon-postgres.render.com`
   1. Database: the name you used for the Database field when [creating the database](./creating-a-postgres-db.md)
   1. Username: your username
   1. Password: your password

![Form to fill out with your database credentials](./assets/db-credentials.png)

6. Click the Test Connection… button. You should see a modal displaying Connected message. Click OK, and then the Finish button

![A successful connection test](./assets/connection-test.png)

7. You are now connected to your Render PostgreSQL database on DBeaver!

![Successfully connected DBeaver to Render Postgres](./assets/connection-successful.png)

## Warning/Failure messages

- You may see warning/failure messages like the one below (I did!)
- Not to worry, calmly step through the entire process slowly.
- After a few tries, if you don’t succeed, ask for help in the relevant communication channels

![A connection error message](./assets/connection-error.png)
