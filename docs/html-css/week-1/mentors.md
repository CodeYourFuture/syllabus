---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

---

## Questions and Help

We highly recommend joining the relevent Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-html-css](https://codeyourfuture.slack.com/archives/CEFGER48H)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Overview

This outline provides tips to help mentors guide students to the best answers or outcomes for the lesson topics and exercises.

### The HTML section

This is an opportunity for any students who are struggling to get another pass at the basics. Even if it seems like some students get it quickly, try not to rush through this section.

### HTML Structure exercise

When conducting the parent/child tags exercise, don't forget to point out that the first `<p>` tag is both a parent _and_ a child.

### Example HTML/CSS Project exercise

**Why don't we put everything in one file?**

Discuss:

- Keeping data separate from display
- Keeping code organised into manageable parts
- Working in large teams with narrow skill-sets

### Semantic HTML exercise

HTML elements with the following classes should receive the following semantic tags:

- `.site-header` -> `<header>`
- `.navbar` -> `<nav>`
- `.primary-content` -> `<main>`
- `.article` -> `<article>` (check in primary column and sidebar)
- `.sidebar-content` -> `<aside>`
- `.site-footer` -> `<footer>`

**Who benefits when we write "semantic" HTML?**

Search engines, anyone with a visual impairment who uses a screen reader. Reinforce the distinction between data and display. Data should be meaningful regardless of display.

### CSS Selectors

Students may need more or less review depending on how much they remember from their application process. If students are struggling with the basics, have them go through this [CSS Introduction course](https://www.codecademy.com/courses/web-beginner-en-TlhFi/resume?curriculum_id=50579fb998b470000202dc8b), starting with the CSS Syntax lesson. Mentors should help guide them through and identify where they're struggling.

Students should set the button background color using the `.btn-primary` selector, and adjust the white button using the `.btn-secondary` selector. If they use the `.btn` selector, they'll effect both buttons. When they do that, use it as a lesson in how Object-Oriented CSS works and how to choose the right selector.

### Box Model

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

### CSS Project

Make sure the put the student in similar ability teams as far as you can.

You can use this project to run out the rest of the lesson if you have extra time or remove it if you're short for time. It's purely a consolidation exercise from the day.

## Coursework

Make sure they know that the Responsive Web Design Fundamentals course will take up the majority of their homework time, even though it's really preparation for the next class.
