---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

This outline provides tips to help mentors guide students to the best answers or outcomes for the lesson topics and exercises.

## Resources

- [Bootstrap Demo](https://github.com/anthonytranDev/cyf-bootstrap)

## Articles

- [What is design system - Please scroll the bottom for explanation in the FAQs](https://enonic.com/blog/what-is-design-system)

## Quizzes

- [HTML/CSS Quick Quiz - 19/05/2020](https://drive.google.com/open?id=1_6kJSfIqY2f5iltyH_SUXyfeUGXRLZiGKcecATavByA)
  - Created by Scotland and Nate
- [HTML/CSS Quick Quiz - 18/04/2020](https://drive.google.com/open?id=1x-5GVJMeSe-gauVC6rDOBAa--ltZJNPd5pE095zYmC4)
  - Created by Manchester and Anthony Tran

## Open-source HTML/CSS Frameworks

Using the [Navbar color schemes](https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes), use the browser's dev tools to show how changing the navbar classes in the example website changes the look based on Bootstrap.

Using the [Card](https://getbootstrap.com/docs/4.0/components/card/#example) example, try to illustrate the way tags are nested inside of each other in a specific hierarchy. Emphasise the practice of paying close attention to documentation and picking up on minor details.

## Git Branching Excercise

A mentor should act as a `remote` repository and have a large sheet of paper. Students should have 4-5 sheets of paper.

1. The mentor should write their name at the top of the sheet, and write `master` below that.
2. Students should clone the main sheet on one of their sheets (`git clone`), with their name and `master` on the sheet.
3. Students should take a new sheet of paper. Copy their main sheet, and replace `master` with `feature-branch` (`git checkout -b feature-branch`).
4. Students should write their country of origin on their `feature-branch` sheet. Then show it to the mentor (`git commit`, `git push` and pull request).
5. The mentor should "merge" each pull request by copying the country of origin onto their sheet.
6. Take a moment to indicate how their local sheet have divered from the mentor's sheet.
7. Ask the students to take their `master` sheet and copy the mentor's sheet (`git checkout master` and `git pull upstream master`).
8. Have the students take their `feature-branch` sheet, ball it up, and throw it away (`git branch -D feature-branch`).

Spend some time with this [Git Cheatsheet](https://ndpsoftware.com/git-cheatsheet.html). Point to your sheets and their sheets and ask them to identify what's in the Upstream Repository, Local Repository, Index and Workspace. Then walk through the whole process from Workspace up:

1. A student makes a change on their sheet. This change is in the Workspace.
2. A student does a `git add`. This change is now in the Index.
3. A student does a `git commit`. This change is now in the Local Repository.
4. A student does a `git push`. This change is now in the Remote Repository.

## Personal Websites

The goal of this exercise is to identify students who are struggling to keep up. Try to identify where a student is struggling:

- Can they find their files quickly?
- Are they using the command line when appropriate?
- Do they understand how their HTML and CSS interact?
- Do they seem to understand syntax, or are they writing code in the wrong place?

If you find a student who is struggling with any of these basics, try to work through them together, then give them a short assignment where they need to do something on their own.

There will be several students who have the basics down. If they do, push them on some of the higher-level abstract concepts, like re-usable HTML/CSS components, and using CSS specificity cleverly (eg - basic and primary buttons). Beyond that, let them read up on HTML Forms (links in the resources), do some of the advanced suggestions in the syllabus, or challenge them to read and implement BEM naming syntax.
