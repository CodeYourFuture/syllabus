---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

Want to make a change to this week but don't have the time? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=enhancement&template=change-request.md&title=)

Want to report a bug in this week? Click [here](https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=bug&template=bug-report.md&title=)

---

## Questions and Help

We highly recommend joining the relevant Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content.

[cyf-module-html-css](https://codeyourfuture.slack.com/archives/CEFGER48H)

For general Syllabus feedback and help you can post in [cyf-syllabus](https://codeyourfuture.slack.com/archives/C012UUW69S8)

## Presentations

- [Week 2 - Responsive Design [Google Slides] - 28/05/2020](https://docs.google.com/presentation/d/1REawHd4Uy-WGVDmrwvyLLtX-mEurrS15b9QyLn8lULo/edit)
  - Created by Birmingham
- [Week 2 - Flexbox & Media Queries [Google Slides] - 28/05/2020](https://docs.google.com/presentation/d/10Y7ev8w0OZSwuCDU3dUB3wertwVgRIwd0pWC5l5qS8Y/edit#slide=id.g854eaaa097_0_58)
  - Created by Birmingham

## Overview

This outline provides tips to help mentors guide trainees to the best answers or outcomes for the lesson topics and exercises.

### Articles

- [History of Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
- [Most Common ViewPort Sizes](https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/)

### Responsive Web Design

Devices to brainstorm together:

- Phones
- Tablets
- Laptops
- Desktop computers
- Gaming consoles (Playstation/Xbox)
- [Apple Watch](https://www.youtube.com/watch?v=wmyth7Bpyyo)
- Smart devices (fridges, washing machines, TVs)
- Screen readers
- Crawlers (search engines)

Use this list to illustrate the range of device sizes we build for. Reinforce the separation between data and display.

### Media Queries

When completing the exercises, make sure they use a "mobile-first" technique. They shouldn't shrink the text on small screens, but enlarge it on bigger screens.

```css
/* Don't */
@media (max-width: 480px) {
  .jumbotron .display-3 {
    font-size: 3rem;
  }
}

/* Do */
.jumbotron .display-3 {
  font-size: 3rem;
}
@media (min-width: 480px) {
  .jumbotron .display-3 {
    font-size: 4.5rem;
  }
}
```

When completing the second exercise, make sure they're only modifying the buttons in the jumbotron. The button in the header shouldn't be effected.
