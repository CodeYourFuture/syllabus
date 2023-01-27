---
id: lesson
title: HTML/CSS - 3
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Contents

- [Responsive Web Design](#responsive-web-design)
- [Media Queries](#media-queries)
- [Grid](#grid)
- [PD - Delivering tutorials](#pd-delivering-tutorials)

---

## Learning Objectives

Learning objectives for this lesson can be found [here](./learning-objectives.md)

## Coursework review (45 minutes)

We open our class with live coding and group debugging using trainees' work as material. This session is an opportunity to work through common problems with coursework and also to demonstrate productive code review and debugging strategies. Use Devtools and live code.

## Responsive Web Design

When we build for the web, we're making websites that can be viewed in a phone, a laptop, a tablet and more. To ensure we're presenting a website that's easy to use on any device, we use Responsive Web Design techniques to modify how content is displayed depending on the viewport.

See how much variety there is in [viewport sizes](https://decadecity.net/blog/2014/08/19/a-device-agnostic-approach-to-inlining-css).

:::note Exercise (5 minutes)
As a group, let's brainstorm as many devices as we can think of which might access the websites we build.
:::

## Media Queries

As you learned in your homework assignment, media queries help us change the display of our content depending on the size of the viewport. Let's review what you learned and break down a media query:

```css
@media screen and (min-width: 900px) {
  body {
    background: red;
  }
}
```

In this media query, we're assigning a red background color to the `<body>` element whenever the viewport is larger than `900px`, and we're viewing on a screen.

- `@media` starts the media query
- `screen` tells it to apply these styles to screen displays. Other displays
  might be `print`, for when a webpage is being printed.
- `(min-width: 900px)` tells it to apply these styles when the viewport is
  larger than `900px`

Finally, we wrap all of our styles for this media query in brackets (`{` and `}`), just like a CSS rule.

:::note Exercise (10 minutes)
Working in pairs, reduce the size of the "Bikes for Refugees" text so that it fits on a small screen (`320px`). But make sure it increases in size on larger screens.
:::

:::note Exercise (10 minutes)
The two buttons in the jumbotron don't fit on the same line on small screens around `320px` wide. Can you adjust their size so that they fit on the same line?
:::

## CSS Grid

:::note Exercise (5 minutes)
Open a web page.
Everyone point to the grid.
Now everyone circle a card component. You can use the annotations tool in Zoom or an extension like [Annotate](https://chrome.google.com/webstore/detail/annotate-web-annotations/gdojjgflncpbcfmenbkndfhoamlhajmf/related) in person.

Go around the room -- each person must circle a smaller component until you have reached single html tags.
:::

### What is CSS Grid?

CSS grid is a way to lay out both components and whole pages with CSS. We can define a layout grid, then slot child components into the grid wherever we want them, regardless of the HTML structure. It's a display property, so first we turn on the grid:

```css
display: grid;
```

Then we define the layout of the grid as a template. There are lots of ways to do this, but the simplest way is to do this with named areas so it's really clear what should go where. Let's imagine in our semantic html page we have a header, some navigation, some main content, a sidebar and a footer. We can describe that with grid:

```css
grid-template-areas:
  "header header header"
  "nav    nav    sidebar"
  "main   main   sidebar"
  "footer footer footer";
```

:::tip
CSS Grid areas, like all HTML elements, are always rectangles. To make more complicated shapes you must overlap areas.
:::

:::note Exercise (1min)
Draw around the words to create a wireframe layout. When you are designing your CSS grid, it helps to sketch the boxes first.
:::

The words make a layout template - a little map of where things will be placed on the page. This is a different kind of semantics. Instead of describing our code to a computer, we are describing it to our fellow coders. The computer doesn't understand these words at all.

:::note Exercise (10 minutes)
Unlike the semantic HTML elements we discussed, where different tags are parsed in different ways by the browser, you could use any string of characters as a name in CSS Grid. But should you? What is the value and purpose of naming things clearly? Discuss your ideas in small groups.
:::
=======
## PD (Delivering tutorials)

**Session objective:** In this section we'll continue exploring how to use the technical language to communicate to different audiences.

:::note Exercise (20 min)

**Exercise objective:** To explain concepts to different audiences

In small groups. Prepare a 3 min tutorial based on what you have learned so far to one of the four different audiences:
1. A group of 10 year olds
2. People who are new internet users
3. Your boss
4. A team of new developers

The tutorial should explain the following:

1. What are HTML forms used for?
2. How do form control labels benefit users?
3. Why are forms useful for different types of users?

:::

:::note Exercise (30 min)

**Exercise objective:** To practice public speaking skills

Volunteer to present back to the class.

:::

:::note Exercise (10 min)

**Exercise objective:** To reflect on tasks and identify strengths

Reflect on what you found challenging and share one positive feedback to the wider group.

:::

## Coursework

Click [here](./homework) to view the coursework for this lesson.


## Further Learning

There are other CSS layout techniques not covered in this lesson.
To learn more about these other techniques, visit the following MDN pages.

- [CSS positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning) — this is still commonly used across the web.
- [CSS grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) — this is a recent addition to CSS. Flexbox is used for creating 1-dimensional layout; grid is used for creating 2-dimensional layout.
- [CSS floats](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats) — this is not really used anymore, so it's not essential to know it.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="HTML/CSS" week="Week 2" />
