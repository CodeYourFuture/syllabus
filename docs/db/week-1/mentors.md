---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

## IMPORTANT - Setup Needed For Trainees

If you are teaching this class in the coming weeks you **must** instruct your trainees to complete the instructions below.

[PostgreSQL Preparation](../prep)

If you trainees do not arrive with these steps completed then you will lose a lot of time on your first lesson. You should consider running short mid-week sessions the week before to help trainees get set up.

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-db](https://codeyourfuture.slack.com/archives/C7V4GNES1)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## What worked well

## Things to improve

## Other thoughts


---

## Windows set up instructions - ideally everyone should be on linux/mac but just in case...

### WSL (Windows Subsystem for Linux)

If your computer supports WSL, you can - and should - use that instead.

Follow the instructions above for Ubuntu in WSL.

**Note:** Some of CYF members have reported that WSL will be buggy when used in the VSCode terminal. To ensure this is working properly, run WSL from the Windows command prompt.

### Install

**Note that you must be logged in as a user with Administrator privileges on Windows for all these steps.**

If you have Windows as your operating system you can install PostgreSQL from the installer executable. Download this from https://www.postgresql.org/download/windows/ but make sure you choose PostgreSQL version 12 for 64-bit or version 10 for 32-bit. Once you have downloaded the installer then run the file (postgresql-12.3-2-windows-x64.exe or similar). The installer prompts for various information as it initialises and you can mostly take the default values. Make a note of the installation folder when prompted for it - you don't need to change it. You must, however, provide a password for the postgres user - make sure you remember this password!

If prompted to configure StackBuilder at the end of installation, just click Cancel - we won't need it.

Before you can use any of the command line tools you must first add the PostgreSQL software to your PATH variable. This is a bit convoluted on Windows so please go carefully:

1. In the File Explorer find This PC and right-click on it.
2. In the menu select Properties
3. In the properties dialog (Control Panel) click on the Advanced system settings option (on left hand side)
4. In the System Properties dialog, Advanced tab, click the Environment Variables button near the bottom of the window
5. In the Environment Variables window, in the top half (User variables for ...) select the Path variable then click Edit
6. In the Edit environment variable window first check that the PostgreSQL pathname hasn't been added already by the installer (if it has you can cancel out of all these dialogs)
7. To add the PostgreSQL pathname you must click the New button on the right then type (or paste) the path `C:\Program Files\PostgreSQL\12\bin` into the new entry space. (Note: if you installed version 10 or 11 then the pathname will be slightly different - check using File Explorer)
8. Click the OK button in each dialog to exit back to the Control Panel window, which you can just close normally

If the next step (trying the `psql` command) fails you may need to log out and log back in again to apply the new PATH variable.

The default installation provides only one user and no databases. To verify your installation open the Command Prompt and enter the following command:

```
    C:\...> psql -U postgres --version
```

Enter the password for user `postgres` (defined during installation) when prompted. The command should display something like this:

    psql (PostgreSQL) 12.2

### Create a User and the Database

PostgreSQL initially uses an authorisation mode that depends on the operating system username; that is why we had to switch to user `postgres` to verify our installation because the installer only creates this user.

You must create a user that you can use to access PostgreSQL, one that is not `postgres` (which we shouldn't use for normal work). You can use your operating system (Windows) username and this makes access to the database easier. To find your Windows username start a command prompt session and you should see your username in the prompt, for example:

```
C:\Users\keith>
         ^^^^^ is my username
```

Now create the PostgreSQL user that you'll use for the lessons

```
C:...> createuser -U postgres -P --createdb <your user name>
```

You must supply the password for the `postgres` user for this command.

Obviously you substitute your own username for `<your user name>`, so for me (keith) I would use:

```
C:\Users\keith> createuser -U postgres -P --createdb keith
```

To create a database you can now use your new username:

```
C:\...> createdb -U <your user name> cyf_hotels
```

On Windows you'll need to enter your password for the new account each time you use the username. To access your new database you just need to enter:

```
C:\...> psql -U <username> cyf_hotels
```

then enter your password when prompted.

Windows users need to change the console character code page for each new session. Issue the command:

```
C:\...> chcp 65001
```

to set the current code page to use UTF-8 encoding. You will see a warning message when you enter `psql` as follows:

```
WARNING: Console code page (65001) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
```

Please ignore this - your setting will allow psql to display customer names, etc., which are stored in UTF-8 format, correctly.

### Enabling Passwordless Logins

If you have chosen your username as the same as your windows user you can allow passwordless logins from your own PC. To do this you need to modify a configuration file. Locate the file `pg_hba.conf` in the installation directory's `data` subdirectory. For example, if the installation directory is:

    C:\Progam Files\PostgreSQL\12

then look for `pg_hba.conf` in `C:\Program Files\PostgreSQL\12\data`.

Open this file using your favourite text editor (Visual Studio should work OK). Scroll down past all the comment lines (starting with `#`) until you find the header line:

    # TYPE  DATABASE        USER            ADDRESS                 METHOD

You should find a number of non-comment lines below this - these define login methods for different situations. Enter the following line just below the header line:

    host    cyf_hotels       all             ::1/128                 trust

Save the changes.

Finally you must restart the PostgreSQL service so that the configuration changes are used. To do this right click in the taskbar at the bottom of the screen and choose Task Manager. Click the Services tab and locate the postgresql service (named `postgresql-x64-12` or similar). Right click and choose Restart.

From here onwards you shouldn't need to switch to the postgres user again nor enter a password. You can get into the PostgreSQL command-line tool using just:

```
C:\...> psql cyf_hotels
```

This connects you to the database named cyf_hotels and connects as the same username as your Windows user.

The output from this command should look something like this:

```
    psql (12.4)
    Type "help" for help.
    WARNING: Console code page (65001) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.

    cyf_hotels=>
```

Note that to exit psql back to the terminal prompt use the command `\q`.

**Windows Install Complete**
