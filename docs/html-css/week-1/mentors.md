---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

---

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content. The Module Gardeners, who lead this module globally, keep an eye on this channel.

[cyf-module-html-css](https://codeyourfuture.slack.com/archives/CEFGER48H)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Trainees Prior Knowledge

Trainees come to this class having already built several small web pages with HTML and CSS in the Intro to Digital course and having completed at least some of [FreeCodeCamp Responsive Web Design Certification](https://www.freecodecamp.org/learn/responsive-web-design/).

All trainees should have prepared for class with a recap course: [HTML CSS Crash Course](https://scrimba.com/learn/htmlcss)

This means that this lesson is a level setting and expectation setting session.

If it is obvious that your trainees already understand the concepts that you are covering, you are encouraged to move quickly through the content and spend your time on the main instructor-led theme of the lesson: **structuring data with semantic HTML**.

## Overview

This outline provides tips to help mentors guide trainees to the best answers or outcomes for the lesson topics and exercises.

### The HTML section

This is an opportunity for any trainees who are struggling to get another pass at the basics. Even if it seems like some trainees get it quickly, try not to rush through this section.

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

Trainees may need more or less review depending on how much they remember from their application process. If trainees are struggling with the basics, have them go through this [CSS Introduction course](https://www.codecademy.com/courses/web-beginner-en-TlhFi/resume?curriculum_id=50579fb998b470000202dc8b), starting with the CSS Syntax lesson. Mentors should help guide them through and identify where they're struggling.

Trainees should set the button background color using the `.btn-primary` selector, and adjust the white button using the `.btn-secondary` selector. If they use the `.btn` selector, they'll affect both buttons. When they do that, use it as a lesson in how classes in CSS work and how to choose the right selector.

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

### Content Layout: Flexbox

This lesson is really just intended to get them a bit familiar with flexbox, media queries and thinking about different viewports when doing their layouts. Make sure that trainees are not relying on Bootstrap's grid when completing these exercises. Make sure they're only using flexbox in `min-width` media queries, and that they're applying sensible class naming patterns and wrapping elements where necessary.

When they add a background and border to the "Learn More" articles, make sure they're adding padding so the text doesn't go right up to the edge. If they are using `px` units, nudge them towards `em` and explain that `em` is often preferred because it scales well when you need to change font size for different viewports.

## Coursework

When checking their use of flexbox in their webpage, make sure they're using gutters where appropriate and that they're using the kinds of design patterns you would expect to see on a website (ie - items line up, text is proportionate, etc).
