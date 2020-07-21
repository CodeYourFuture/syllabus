---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

---

This outline provides tips to help mentors guide students to the best answers or outcomes for the lesson topics and exercises.

## Presentations

- [Week 1 - CSS [Google Slides] - 28/05/2020](https://docs.google.com/presentation/d/18gCQlySM5kNaK4og4-XF8kHlyJVZUrRcbRK1zXC5SBg/edit#slide=id.p)
  - Created by Birmingham

## HTML Syntax

This is an opportunity for any students who are struggling to get another pass at the basics. Even if it seems like some students get it quickly, try not to rush through this section.

When conducting the parent/child tags exercise, don't forget to point out that the first `<p>` tag is both a parent _and_ a child.

## Code Walkthrough

**Why don't we put everything in one file?**

Discuss:

- Keeping data separate from display
- Keeping code organised into manageable parts
- Syntax highlighting in code editors
- Linting Tools
- Working in large teams with narrow skill-sets

## Semantic HTML

HTML elements with the following classes should receive the following semantic tags/attributes:

- `.site-header` -> `<header>`
- `.navbar` -> `<nav>`
- `.primary-content` -> `role="main"`
- `.article` -> `<article>` (check in primary column and sidebar)
- `.sidebar-content` -> `<aside role="complementary">`
- `.site-footer` -> `<footer>`

**Who benefits when we write "semantic" HTML?**

Search engines, anyone with a visual impairment who uses a screen reader. Reinforce the distinction between data and display. Data should be meaningful regardless of display.

## CSS Selectors

Students may need more or less review depending on how much they remember from their application process. If students are struggling with the basics, have them go through this [CSS Introduction course](https://www.codecademy.com/courses/web-beginner-en-TlhFi/resume?curriculum_id=50579fb998b470000202dc8b), starting with the CSS Syntax lesson. Mentors should help guide them through and identify where they're struggling.

Students should set the button background color using the `.btn-primary` selector, and adjust the white button using the `.btn-secondary` selector. If they use the `.btn` selector, they'll effect both buttons. When they do that, use it as a lesson in how Object-Oriented CSS works and how to choose the right selector.

## Box Model

For the second exercise, the answer will look something like this:

```css
.nav-link {
  border: 1px solid transparent;
}
.nav-link:hover,
.nav-link:focus {
  border-color: #ce5f31;
}
```

## Git

This will be the most challenging for students. Let them fail and try again until they get it.

## Homework

Make sure they know that the Responsive Web Design Fundamentals course will take up the majority of their homework time, even though it's really preparation for the next class.
