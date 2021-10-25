---
id: lesson
title: HTML/CSS - 2
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Contents

- [Responsive Web Design](#responsive-web-design)
- [Media Queries](#media-queries)
- [Flexbox](#flexbox)

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

## Flexbox

Flexbox is a name for a set of CSS layout rules for laying out items in rows or columns. They allow you to apply rules to elements to place them side-by-side and re-arrange them. You just specify how you want your elements arranged and the browser will scale this arrangement depending on the screen size and device used for viewing.

To add flexbox:

1. Identify the elements you want to arrange in a certain way. For example, these three buttons:
   ```html
   <button>Home</button>
   <button>Gallery</button>
   <button>Contact</button>
   ```
1. Make sure they're part of the same container:
   ```html
   <div class="menu">
     <button>Home</button>
     <button>Gallery</button>
     <button>Contact</button>
   </div>
   ```
1. Tell the container to use Flexbox to arrange all its children:
   ```css
   .menu {
     display: flex;
   }
   ```

Once you have flexbox applied to the container you can start adding more rules to tell it exactly how the elements should be arranged.

### Display elements in a row

Use `flex-direction: row` to display the child elements in a row.

```css
.menu {
  display: flex;
  flex-direction: row;
}
```

<img src={require('!file-loader!../assets/css-flex-direction-row.png').default} alt=""/>

### Display elements in a column

Use `flex-direction: column` to display the child elements in a column.

```css
.menu {
  display: flex;
  flex-direction: column;
}
```

<img src={require('!file-loader!../assets/css-flex-direction-column.png').default} alt=""/>

### Space out elements equally in a row

Use `justify-content: space-between` to space out elements equally.

This can be used when the elements are displayed in a row:

```css
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* or space-around */
}
```

<img src={require('!file-loader!../assets/css-flex-justify-content-row.png').default} alt=""/>

### Space out elements equally in a column

This can be used when the elements are displayed in a column:

```css
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* or space-around */
}
```

<img src={require('!file-loader!../assets/css-flex-justify-content-column.png').default} alt=""/>

In the above 2 examples we used the same rule `justify-content: space-between`, but we changed `flex-direction` from `row` to `column`.
Notice how `justify-content` works in the same direction as `flex-direction`.
In the images above, the green arrow for `justify-content` is operating in the same direction as `flex-direction`.

### Align elements in a row

Use `align-items: center` to align the child elements in the centre.

This can be used when the elements are displayed in a row:

```css
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

<img src={require('!file-loader!../assets/css-flex-align-items-row.png').default} alt=""/>

### Align elements in a column

This can be used when the elements are displayed in a column:

```css
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

<img src={require('!file-loader!../assets/css-flex-align-items-column.png').default} alt=""/>

While `justify-content` works in the same direction as `flex-direction`, align-items works the opposite way!
Have a close look at the above images—the green arrow is opposite to the yellow `flex-direction` one.

If you want to view all flexbox rules, visit the [A Guide To Flexbox article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

:::note Exercise (20 minutes)
Continue editing the "Bike for refugees" website by adding 3 boxes below Jumbotron, and using Flexbox, make sure they are arranged like in the sketch below:

<img src={require('!file-loader!../assets/flexbox_practice.png').default}/>

You can start with something like the below, by just adding a container, and the 3 text pieces within it. Try to use flexbox to position the text elements within the container to match the picture:

```html
<div>
  <!-- CONTAINER START -->
  <div>Check availability</div>
  <div>Donate bikes</div>
  <div>Volunteer with us</div>
</div>
<!-- CONTAINER END -->
```

Once that's done you can move on to creating boxes for each individual text piece, and again, using flexbox to position the text piece in the middle of its box.
:::

:::note Exercise (5 minutes)
Let's take a break from flexbox for a minute. Do you remember the `:first-child` pseudo class? There's a `:last-child` pseudo class as well.

See if you can use these pseudo classes to give the left box a grey background (`#ddd`) and the right box a grey border (`1px solid #ddd`).
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
