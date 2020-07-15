---
id: instructors
title: Instructor Notes
sidebar_label: Instructor Notes
---

This outline provides tips to help mentors guide students to the best answers or outcomes for the lesson topics and exercises.

## Presentations

- [Week 2 - HTML & CSS 2 - Responsive Design [Google Slides] - 28/05/2020](https://docs.google.com/presentation/d/1REawHd4Uy-WGVDmrwvyLLtX-mEurrS15b9QyLn8lULo/edit)
  - Created by Birmingham
- [Week 2 - Flexbox & Media Queries [Google Slides] - 28/05/2020](https://docs.google.com/presentation/d/10Y7ev8w0OZSwuCDU3dUB3wertwVgRIwd0pWC5l5qS8Y/edit#slide=id.g854eaaa097_0_58)
  - Created by Birmingham

## Articles

- [History of Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
- [Most Common ViewPort Sizes](https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/)

## Responsive Web Design

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

## Media Queries

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

## Content Layout: Flexbox

This lesson is really just intended to get them a bit familiar with flexbox, media queries and thinking about different viewports when doing their layouts. Make sure that students are not relying on Bootstrap's grid when completing these exercises. Make sure they're only using flexbox in `min-width` media queries, and that they're applying sensible class naming patterns and wrapping elements where necessary.

When they add a background and border to the "Learn More" articles, make sure they're adding padding so the text doesn't go right up to the edge. If they are using `px` units, nudge them towards `em` and explain that `em` is often preferred because it scales well when you need to change font size for different viewports.

## Homework

When checking their use of flexbox in their webpage, make sure they're using gutters where appropriate and that they're using the kinds of design patterns you would expect to see on a website (ie - items line up, text is proportionate, etc).
