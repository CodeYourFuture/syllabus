---
id: lesson
title: HTML/CSS - 1
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Contents

- [What makes a web page?](#what-makes-a-web-page)
- [HTML anatomy](#html-anatomy)
- [HTML structure](#html-structure)
- [Semantic HTML](#semantic-html)
- [CSS selectors, CSS cascade, Pseudo-classes such as `:hover`/`:focus`](#css-selectors)
- [Box model: `margin`/`padding`/`border` etc...](#box-model)

---

## Learning Objectives

Learning objectives for this lesson can be found [here](./learning-objectives.md)

---

## What makes a web page?

<img src={require('!file-loader!../assets/webpage-parts.png').default}
  alt="Diagram showing that structure (HTML), presentation (CSS), and behaviour (JavaScript) are interlinked"/>

A web page consists of three programming languages: HTML, CSS, and JavaScript.
They define the structure (HTML), presentation (CSS), and behaviour (JavaScript) of the page.

> **Separation of Concerns:** In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. ([Wikipedia](https://en.wikipedia.org/wiki/Separation_of_concerns))

> **Principles** - During the course, we will highlight principles that apply to the specific topic but also to Computer Science and Programming in general. It is important to understand these principles, terms and apply them to your thinking in general.

## HTML anatomy

<img src={require('!file-loader!../assets/html-anatomy.png').default}
  alt="HTML code of an element with a p tag, class=text attribute, and 'Welcome to lesson 1' content"/>

An HTML element is made up of tags, attributes, and content.

- A tag is the HTML element name enclosed in angle brackets.
  In the image above, `<p>` is the opening tag and `</p>` is the closing tag.
- An attribute comes after the HTML element name within the angle brackets.
  In the image above, `class="text"` is an attribute.
  - `class` is the attribute name
  - `text` is the attribute value
- The content is the part of the code in between the opening and closing tags.
  In the image above, `Welcome to lesson 1` is the content.

### Exercise (1 minute)

All together, let's review the basic syntax in the following example:

```html
<article>
  <h1>Learning HTML</h1>
  <p>Get to know the HTML basics.</p>
  <a href="http://html5rocks.com">Read Article</a>
</article>
```

Which parts are the **tags** and which parts are the **attributes**?

## HTML structure

Every HTML document has the same base structure, shown in the code example below.

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>My web page</title>
</head>

<body>
  <article>
    <h1>Learning HTML</h1>
    <p>Get to know the HTML basics.</p>
    <a href="http://html5rocks.com">Read Article</a>
  </article>
</body>

</html>
```

The `html` element declares that it is an HTML document, and contains a `head` and `body` element.

- The `head` contains data about the web page, such as the name of the page (`My web page`) and the text encoding (`UTF-8`).
- The `body` contains the content which is shown in the browser.

HTML tags are arranged in a hierarchy. This is sometimes called "nesting" tags or creating an HTML "tree". Between the opening `<article>` tag and the closing `</article>` tag there are three other tags. We call these "child" tags, because they have a parent-child relationship.

<img src={require('!file-loader!../assets/html-hierarchy.png').default}
  alt="Tree diagram showing an article tag with h1, p, and a tags as direct children"/>

### Exercise (5 minutes)

As a group, let's try to name all of the parent and child tags in the following example.

```html
<article>
  <h1>Learning HTML</h1>
  <p>
    <span class="author">Author:</span>
    <a href="http://codeyourfuture.io">Code Your Future</a>
  </p>
  <p>Get to know the HTML basics.</p>
  <a href="http://html5rocks.com">Read Article</a>
</article>
```

## Example HTML/CSS Project

In today's class, we will begin adapting styles on this example website. We'll review some of the HTML/CSS basics you already encountered during your application process and learn some new techniques. By the end of the third lesson, we will have worked together to improve the example site on the left screenshot below so that it looks like the screenshot below on the right.

<a href="../assets/screenshot-start.png" target="blank">
 <img src={require('!file-loader!../assets/screenshot-start.png').default} alt="Bikes for Refugees home page, unstyled" width="50%"/>
</a>
<a href="../assets/screenshot-complete.png" target="blank">
 <img src={require('!file-loader!../assets/screenshot-complete.png').default} alt="Bikes for Refugees home page, styled" width="50%"/>
</a>

The example website you'll begin working with is available on the Code Your Future [Bikes for Refugees repository](https://github.com/CodeYourFuture/bikes-for-refugees) on GitHub.
Fork the repository to your personal account and then clone the repository.

### Exercise (5 minutes)

Spend a few minutes exploring the `.html` and `.css` files for this page. Why don't we put everything in one file?

## Semantic HTML

When writing HTML code, we can use different tags to describe the content. Is it a navigation menu, a paragraph of text, or an article? By using the correct tag, we help search engines like Google or screen readers for the visually impaired understand the content better.

When possible, we should use semantic HTML instead of generic HTML like `<div>` and `<span>`.

> Semantic HTML is the use of HTML markup to reinforce the semantics, or **meaning**, of the information in webpages and web applications rather than merely to define its presentation or look. [Wikipedia](https://en.wikipedia.org/wiki/Semantic_HTML)

### Sectioning content

HTML provides elements that allow us to semantically divide our page into sections.

<img src={require('!file-loader!../assets/webpage-structure.png').default}
  alt="Wireframe of a web page with <header> at the top, <main> at the middle, <footer> at the bottom, and <aside> at the right"/>

The image above shows a common layout of a web page.
We can use specific HTML elements for each of these sections.

- We can use a `<header>` tag for the header content
- We can use a `<footer>` tag for the footer content
- We can use a `<main>` tag for the main content of the page
- Sidebar content can go in an `<aside>` tag
- If there is a list of links, such as in the `<header>`, they can go in a `<nav>` tag

Additionally, we can use `<article>` and `<section>` to divide these sections into more sections.

### Text content

For text content, we can use the following elements.

- We can use `<h1>` to `<h6>` for headings
  - There should be only one `<h1>` element on the page, and we shouldn't skip levels
- We can use `<p>` for paragraphs of text
- We can use `<ul>` and `<ol>` for lists
  - `<ul>`, unordered list, shows as bullet points
  - `<ol>`, ordered list, shows as numeric points
- We can use `<em>` for emphasis
- We can use `<strong>` to indicate importance, seriousness or urgency

### Image content

We can use `<img>` to display images on our page.

Every `<img>` element **must** have an `alt` attribute which describes the image.
This is important so that if the image does not load or if the user is using a screen reader, users can still understand the image content.

If the image is not important because it is only for decoration, we can provide an empty `alt` (`alt=""`) to indicate this.

```html
<!-- Image with a description -->
<img src="sleepy-cat.jpg" alt="A sleeping cat">

<!-- Unimportant image for decoration -->
<img src="unimportant.jpg" alt="">
```

### Tabular content

We can use `<table>` and its related tags to display tabular content.

Below is a table with a caption, along with the HTML code that creates it.

<table>
  <caption>Family member ages</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kehinde</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Chadwick</td>
      <td>27</td>
    </tr>
  </tbody>
</table>

```html
<table>
  <caption>Family member ages</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kehinde</td>
      <td>29</td>
    </tr>
    <tr>
      <td>Chadwick</td>
      <td>27</td>
    </tr>
  </tbody>
</table>
```

### Exercise (10 minutes)

_Paired Programming Challenge_

Work in pairs to determine where the following tags should be used instead in the Bike for Refugees `index.html` file.

- `<header>`
- `<footer>`
- `<main>`
- `<nav>`
- `<article>`
- `<aside>`

Who benefits when we write "semantic" HTML?

## CSS Selectors

During your application process, you became familiar with CSS selectors. We'll review the basic selectors and then practice combining these to modify our button styles.

> If you want to review the selectors, read the [Common Selectors section](http://learn.shayhowe.com/advanced-html-css/complex-selectors/) of this page.

### Exercise (10 minutes)

_Paired Programming Exercise_

Work in pairs to make the blue buttons on the page red (`#ce5f31`). The white button, which says "Volunteer", should remain white but the text should change to red.

## Pseudo Classes

You can assign CSS rules to a class like this:

```css
.btn {
  background: #ce5f31;
}
```

There are also things called "pseudo" classes. In this section, we'll introduce you to the common pseudo classes for assigning styles to interactions, such as moving your mouse over a link.

> "pseudo" is a fancy word for "fake". We call them "pseudo" classes because they're not really there in the HTML, but the browser knows what to do with them.

Here's an example of a pseudo class which changes the color of a link when the mouse moves over it.

```css
.btn:hover {
  background: #ef7f52;
}
```

Not everyone uses a mouse. Some users will prefer a keyboard, where they can hit `tab` to move between links on a page. So that they can see where they are, you should add effects to the `:focus` pseudo class too.

```css
.btn:hover,
.btn:focus {
  background: #ef7f52;
}
```

### Exercise (10 minutes)

Work in pairs and use the pseudo classes to make the background color of the red buttons change when in a "hover" or "focus" state. See if you can make the white "Volunteer" button change to a different background without effecting the red buttons.

## Box Model

In CSS, everything is a box. An image is a box. A link is a box. The area around this box can be modified with properites that we call margins, borders and padding. Here's a diagram showing what the box looks like.

![Box Model. Source: MDN](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)

### Exercise (10 minutes)

Work in pairs and use the `margin` and `padding` rules to spread your navigation links out a bit wider. There should be a small gap between them and enough padding so that the border is not too tight on the text.

## Borders

You may have noticed that the border you added to the navigation links causes the links to jump around when you move your mouse over them. That's because the border is adding to the width of the box model, pushing the others to the side.

You can also set a transparent border, so that it takes up the space without showing a visible border.

```css
.navlink {
  border: 1px solid transparent;
}
```

### Exercise (10 minutes)

Use a transparent border so that the width of each navigation menu item stays the same even when it is hovered or focused.

## CSS Project (60 minutes+)

In this repository you will find a CSS Project for you to complete using what you've learnt so far today.

Work in pairs to complete all the mistakes in the project and fix them.

[Zoo Project](https://github.com/CodeYourFuture/HTML-CSS-Challenges/tree/main/zoo-css-challenge)

## Resources

1. [HTML5 - semantic elements](https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5)
2. [CSS Selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
3. [The Cascade - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
4. [Box Model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
5. [Box Model, box-sizing: border-box - CSS Tricks](https://css-tricks.com/international-box-sizing-awareness-day/)
6. [CSS specificity - MDN](https://developer.mozilla.org/en/docs/Web/CSS/Specificity)
7. [Pseudo classes - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

## Coursework

Click [here](./homework) to view the coursework for this lesson.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="HTML/CSS" week="Week 1" />
