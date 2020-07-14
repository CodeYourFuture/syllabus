---
id: contributing-guide
title: Contributing Guide
sidebar_label: Contributing Guide
---

Thanks for your interest in contributing! All of our lessons are a "Work in Progress" and we welcome new people willing to help out.

## Consider the scope

To help us out, please consider the scope of your change(s). If the change is a typo or other minor change, please [make a Pull Request](#making-a-pull-request).

If you would like to change significant parts of a lesson, please first [discuss it with us](#discussing-your-change). The section of content you wish to change might be in need of significant work and we would happy accept a contribution. Other sections may be more settled and require more discussion.

## Discussing your change

When making a significant change we ask that you discuss it with us first. This is because we do have previous experience teaching our students with the existing content. It is important for us to retain this because we have learnt which strategies tend to work better than others.

Please create an issue describing your change and the reasoning behind it.

## Making a Pull Request

If you know how to clone a GitHub repo and write Markdown, please follow the [Git instructions](#git). If not, don't worry! You can still contribute by following the [Web editor instructions](#web-editor).

### Web editor

GitHub supports editing via a web interface.

1. Find the relevant file that you want to change. If you are struggling to find it, please ask via an issue or Slack!
2. Click the pencil "Edit this file" button in the top left header
3. Edit the file! Please see the [Markdown section](#markdown) below. You can preview the change by clicking the "Preview changes" tab at the top of the editor
4. Once you have made your change, please fill out the 2 text boxes below the editor. The first one is a short description of what you changed, and the second is a longer description of why you made the change
5. Click the "Propose file change" button

This will create a _Pull Request_ that is sent to us to review. If we have any feedback we will comment on the Pull Request and you will be notified via email.

### Git

1. Click the Fork button to make a copy on your own account
2. Clone the repo to your computer (e.g. `git clone git@github.com:YOUR_GITHUB_USERNAME/fundamentals-course.git`)
3. Edit the relevant Markdown files. All typical Markdown syntax is supported.
4. Commit and push your changes to your fork
5. Visit `https://github.com/YOUR_GITHUB_USERNAME/fundamentals-course/pull/new/YOUR_BRANCH_NAME`
6. Fill out the Pull Request title (what changed) and description (why you made the change)

### Markdown

Lesson content is written in [Markdown](https://en.wikipedia.org/wiki/Markdown), and compiled into a web page using [Gitbook](https://www.gitbook.com/).

You may find [this Markdown guide](https://guides.github.com/features/mastering-markdown/) helpful if you are unfamiliar with Markdown.

### Adding a new page

Due to the way Gitbook works, if you want to add a new page that you want to appear in the web site, it must be added to `SUMMARY.md`. Add a link to the new file using a relative file path, for example:

```md
- [My amazing page](path/to/my-page.md)
```
