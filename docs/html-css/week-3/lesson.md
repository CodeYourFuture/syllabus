---
id: lesson
title: HTML/CSS - 3
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## What will we learn today?

- [Forms](#forms)
- [HTML/CSS Frameworks](#htmlcss-frameworks)

---

## Learning Objectives

Learning objectives for this lesson can be found [here](./learning-objectives.md)

---

## Forms

On many websites, the user can enter data into the website.
This is done using a web **form**, which contains **form controls** such as text input fields.

In HTML, we create a form using the `form` element, and create input fields within it.

### Form controls

HTML provides several form controls for us to use.
Every form control **must** have a label and should have a name.

:::tip
Form controls don't inherit font styling in some browsers.
We can make sure it uses the defined font by using the following CSS.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```
:::

#### Text input fields

When we want the user to enter text, we can use a text input field in our form.

We can use `<input type="text">` to create a single-line text input, like in the following example.

```html
<input type="text">
```

:::note Interactive example
<input type="text"/>
:::

However, as a user, what are we supposed to enter here?
There is no information to tell us what to enter!

To provide this information, we use a `label` element.
We:

- Create a `label` element
- Add an `id` to the `input`
- Add a `for` attribute with the same `id` to the `label` to connect it to the input

```html
<label for="username">Username</label>
<input id="username" type="text" name="username">
```

:::note Interactive example
<label for="username" style={{marginRight: '0.25rem'}}>Username</label>
<input id="username" type="text" name="username"/>
:::

Now we can see that we are supposed to enter a username!

We can also choose a different `type` other than `text` to suit our needs, such as `type="password"` to show the input text as asterisks.
If you want to view more input types, visit the [MDN input types page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types).

If we want the user to enter multiple lines, we can use `<textarea>` instead, like in the following example.

```html
<label for="description">Description</label>
<textarea id="description" cols="50" rows="5"></textarea>
```

:::note Interactive example
<label for="description" style={{display: 'block'}}>Description</label>
<textarea id="description" cols="50" rows="5"></textarea>
:::

#### Radio input fields

When we want the user to select a single choice out of a list of options, we can use radio inputs in our form.

We can use `<input type="radio">` to create a radio input, like in the following example.
When creating a group of radio inputs, we should give each radio input the same `name` so we can indicate that each option is part of the same list.
We can also use the `checked` attribute to make an option selected by default.

```html
<input id="small" type="radio" name="name" value="small">
<label for="small">Small</label>

<input id="medium" type="radio" name="name" value="medium" checked>
<label for="medium">Medium</label>

<input id="large" type="radio" name="name" value="large">
<label for="large">Large</label>
```

:::note Interactive example
<input id="small" type="radio" name="name" value="small"/>
<label for="small" style={{marginRight: '0.5rem'}}>Small</label>

<input id="medium" type="radio" name="name" value="medium" checked />
<label for="medium" style={{marginRight: '0.5rem'}}>Medium</label>

<input id="large" type="radio" name="name" value="large"/>
<label for="large">Large</label>
:::

However, as a user, what does small, medium and large refer to?
Even though each radio input has a label, there is no information to tell us what our choice means!

For a group of radio inputs, we can wrap the inputs in a `fieldset` with a `legend` to add a label to the group of inputs to give it meaning.

```html
<fieldset>
  <legend>Coffee size</legend>

  <input id="small" type="radio" name="name" value="small">
  <label for="small">Small</label>
  
  <input id="medium" type="radio" name="name" value="medium">
  <label for="medium">Medium</label>
  
  <input id="large" type="radio" name="name" value="large">
  <label for="large">Large</label>
</fieldset>
```

:::note Interactive example
<fieldset>
  <legend>Coffee size</legend>

  <input id="coffee-small" type="radio" name="coffee-name" value="small"/>
  <label for="coffee-small">Small</label>

  <input id="coffee-medium" type="radio" name="coffee-name" value="medium"/>
  <label for="coffee-medium">Medium</label>

  <input id="coffee-large" type="radio" name="coffee-name" value="large"/>
  <label for="coffee-large">Large</label>
</fieldset>
:::

Now we can see that we are choosing the size of a cup of coffee!

:::tip
Fieldsets are rendered with a black border by default.
However, it is uncommon nowadays to see this style in forms.

This does not mean we should use another HTML element instead for a different look.
As we learned in [lesson 1](../week-1/lesson.md#semantic-html), we should always use the correct HTML structure, then use CSS afterwards to style our website.
So when we create groups of inputs, we should always wrap them in a `fieldset` with `legend`, then use CSS to change the style to our desired look.
:::

#### Checkbox input fields

When we want the user to toggle a choice, or select multiple choices out of a list of options, we can use checkbox inputs.

We can use `<input type="checkbox">` to create a checkbox input, like in the following example.

```html
<input id="agreement" type="checkbox" name="agreement">
<label for="agreement">I agree you are the best mentor in CodeYourFuture</label>
```

:::note Interactive example
<input id="agreement" type="checkbox" name="agreement" onClick={(event) => event.target.checked && alert("I'm the best, aren't I?")}/>
<label for="agreement">I agree you are the best mentor in CodeYourFuture</label>
:::

Like with radio inputs:

- When creating a group of checkboxes, we should give each checkbox the same `name` so we can indicate that each option is part of the same list.
- We should add a label to the group of checkbox inputs using `fieldset` and `legend`.
- We can make checkbox inputs checked by default by using the `checked` attribute.

```html
<fieldset>
  <legend>Fruit I like</legend>
    
  <input id="apples" type="checkbox" name="favourite-fruit" value="apples">
  <label for="apples">Apples</label>
  
  <input id="bananas" type="checkbox" name="favourite-fruit" value="bananas">
  <label for="bananas">Bananas</label>
  
  <input id="oranges" type="checkbox" name="favourite-fruit" value="oranges">
  <label for="oranges">Oranges</label>
</fieldset>
```

:::note Interactive example
<fieldset>
  <legend>Fruit I like</legend>
  
  <p style={{marginBottom: 0}}>
    <input id="apples" type="checkbox" name="fruit" value="apples"/>
    <label for="apples">Apples</label>
  </p>
  <p style={{marginBottom: 0}}>
    <input id="bananas" type="checkbox" name="fruit" value="bananas"/>
    <label for="bananas">Bananas</label>
  </p>
  <p style={{marginBottom: 0}}>
    <input id="oranges" type="checkbox" name="fruit" value="oranges"/>
    <label for="oranges">Oranges</label>
  </p>
</fieldset>
:::

#### Select input fields

When we want the user to select a single choice out of a list of options, we can use a select input in our form.

We can use the `select` and `option` elements to create a dropdown of values for the user to select, like in the following example.
We can also use the `selected` attribute to make an option selected by default.

```html
<label for="cuisine">Favourite cuisine</label>
<select id="cuisine" name="cuisine">
  <option value="scottish" selected>Scottish</option>
  <option value="italian">Italian</option>
  <option value="french">French</option>
  <option value="polish">Polish</option>
  <option value="romanian">Romanian</option>
  <option value="greek">Greek</option>
  <option value="mexican">Mexican</option>
  <option value="turkish">Turkish</option>
  <option value="lebanese">Lebanese</option>
  <option value="syrian">Syrian</option>
  <option value="moroccan">Moroccan</option>
  <option value="ethiopian">Ethiopian</option>
  <option value="nigerian">Nigerian</option>
  <option value="indian">Indian</option>
  <option value="chinese">Chinese</option>
  <option value="thai">Thai</option>
  <option value="korean">Korean</option>
  <option value="japanese">Japanese</option>
</select>
```

:::note Interactive example
<label for="cuisine">Favourite cuisine</label>
<select id="cuisine" name="cuisine">
  <option value="scottish" selected>Scottish</option>
  <option value="italian">Italian</option>
  <option value="french">French</option>
  <option value="polish">Polish</option>
  <option value="romanian">Romanian</option>
  <option value="greek">Greek</option>
  <option value="mexican">Mexican</option>
  <option value="turkish">Turkish</option>
  <option value="lebanese">Lebanese</option>
  <option value="syrian">Syrian</option>
  <option value="moroccan">Moroccan</option>
  <option value="ethiopian">Ethiopian</option>
  <option value="nigerian">Nigerian</option>
  <option value="indian">Indian</option>
  <option value="chinese">Chinese</option>
  <option value="thai">Thai</option>
  <option value="korean">Korean</option>
  <option value="japanese">Japanese</option>
</select>
:::

:::tip
Both radio and select inputs allow the user to select one choice out of many.
When do we know which one to use?

A helpful guideline is if there are only a few options to choose from (less than 5), use radio inputs.
If there are lots of options to choose from, use a select input.
:::

### Labels

Every form control **must** have a label.
Firstly, this is important for users to see what they should enter into the form.
Secondly, there are visually-impaired users that use screen readers to interact with websites.
When screen reader users navigate to a form control, the screen reader reads out the label so the user can understand what to enter into the form.
Without a label, the screen reader user does not get a description of what they are supposed to enter.

There are two ways to associate a `label` with an `input`.
The first way is by connecting the `label` and `input` using `for` and `id` as we have seen.
This is the preferred way as it is more explicit.

```html
<label for="username">Username</label>
<input id="username" type="text" name="username">
```

The second way is by wrapping the `input` within the `label`.

```html
<label>
  Username
  <input type="text" name="username">
</label>
```

It is also important that every group of radio and checkbox inputs is wrapped in a `fieldset` with a `legend`, which we've seen in the [radio input fields section](#radio-input-fields).
Again, when screen reader users navigate to this group of inputs, they will understand what the website is asking them to choose.

Another feature of labels is that the user can click on the label to activate the form control.
This provides a larger clickable area to select the form control, and can be beneficial to users who have motor disabilities.

:::tip
It is quite common to add placeholders to text inputs.
Adding only placeholders is bad practise, because it is not guaranteed to be read out by screen readers.
Default styles for placeholders can also have poor colour contrast, which means visually-impaired users might not be able to read it.

<input style={{width:'100%', marginBottom:'1rem'}} type="text" placeholder="I am a placeholder. Placeholders are not labels so do not use me as a label."/>

In summary, always give every form control a label.
:::

### Form validation

We can add attributes to our form controls to prevent the form from being submitted when there are invalid values.
The following example demonstrates some of the attributes we can use.

```html
<form>
  <label for="username">Username that must be between 3 and 8 characters</label>
  <input id="username" type="text" minlength="3" maxlength="8" required>

  <label for="email">Email that is required</label>
  <input id="email" type="email" required>

  <label for="password">Password that can autocomplete with a suggested new password</label>
  <input id="password" type="password" autocomplete="new-password" required>
  
  <label for="age">Age that must be between 18 and 118</label>
  <input id="age" type="number" min="18" max="118" required>
  
  <label for="disabled">Disabled input</label>
  <input id="disabled" type="text" value="You cannot click me" disabled>
  
  <label for="disabled">Read-only input</label>
  <input id="disabled" type="text" value="You can only read my value" readonly>
  
  <button>Submit</button>
</form>
```

:::note Interactive example
<form style={{border:'1px solid black', padding:'0.5rem'}} onSubmit={(event) => {event.preventDefault(); alert('Form submit success!\n\nThe form does not have any invalid values.')}}>
  <p>
    <label for="username" style={{display:'block'}}>Username that must be between 3 and 8 characters</label>
    <input id="username" type="text" minlength="3" maxlength="8" required/>
  </p>
  
  <p>
    <label for="email" style={{display:'block'}}>Email that is required</label>
    <input id="email" type="email" required/>
  </p>
  
  <p>
    <label for="password" style={{display:'block'}}>Password that can autocomplete with a suggested new password</label>
    <input id="password" type="password" autocomplete="new-password" required/>
  </p>
  
  <p>
    <label for="age" style={{display:'block'}}>Age that must be between 18 and 118</label>
    <input id="age" type="number" min="18" max="118" required/>
  </p>
  
  <p>
    <label for="disabled" style={{display:'block'}}>Disabled input</label>
    <input id="disabled" type="text" value="You cannot click me" disabled/>
  </p>
  
  <p>
    <label for="disabled" style={{display:'block'}}>Read-only input</label>
    <input id="disabled" type="text" value="You cannot edit me" readonly/>
  </p>
  
  <button>Submit</button>
</form>
:::

If you want to view more input attributes, visit the [MDN input attributes page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes).

### Form submission

Finally, to let the user submit the form, we can add a `button` within the `form` element.

- A `button` within a `form` will submit it.
- Pressing the `Enter` key when on a form control within a `form` will also submit it.

To prevent a button from submitting the form, we can add `type="button"` to the button.

```html
<form>
  <label for="search">Search</label>
  <input id="search" type="text">
  
  <button>I will submit the form</button>
  <button type="button">I will not submit the form</button>
</form>
```

:::note Interactive example
<form onSubmit={(event) => {event.preventDefault();alert('Form submitted!')}}>
  <label for="search">Search</label>
  <input id="search" type="text"/>
  <button>I will submit the form</button>
  <button type="button">I will not submit the form</button>
</form>
:::

Websites typically handle form submissions in one of two ways.
They will either:

1. Send the form to the web server, or
1. Handle the form using JavaScript.

#### Server-side form submission

To tell the `form` to submit itself to the server, we need to provide it with `action` and `method` attributes.

- `action` tells the browser which URL to submit the form to
- `method` tells the browser what type of request it is.
  Usually this is either a GET (asking for something) or a POST (updating something) request.
  GET and POST requests will be covered in more detail in the JavaScript module.

The form values are converted into **key-value** pairs and are sent along in the request.

In the following example, if we type in `codeyourfuture` into the input field and submit the form,
the browser will send the `q=codeyourfuture` key-value pair to `https://duckduckgo.com` in the format `https://duckduckgo.com?q=codeyourfuture`.

```html
<form action="https://duckduckgo.com" method="get">
  <label for="search">Search</label>
  <input id="search" type="submit" name="q">
  <button>Search DuckDuckGo</button>
</form>
```
:::note Interactive example
<form action="https://duckduckgo.com" method="get">
  <label for="search">Search</label>
  <input id="search" type="search" name="q"/>
  <button>Search DuckDuckGo</button>
</form>
:::

:::note Exercise (30 minutes)
Create a form that performs a search on GitHub.
It should:

- Make a GET request to `https://github.com/search`
- Have a dropdown to select how the results should be sort by,
  with the `name` as `s` and possible values as `stars`, `forks` and `updated`.
- Have a set of radio options for the sort order, with `name` as `o` and possible values as `desc` and `asc`
- Have a search input field with `name` as `q`

If you want to open the search results in a new tab, you can add `target="_blank"` to the `form`.
:::

#### Client-side form submission

If we want to handle the form using JavaScript instead, we don't add `action` and `method` attributes.
Instead, we can add an `onsubmit` attribute with a value that is a function name or expression to execute JavaScript.

However, as we haven't covered JavaScript yet, don't worry about this right now.
We'll cover it later in the course.

### Form security

Forms are one way in which users can enter data to a website.
However, this also means that malicious users can enter malicious data into your website to try to break it or compromise it!
In software, we follow the rule that we **never** trust user input.

Learning about web security is outside the scope of this module,
but if you want an introduction to web security, visit the [MDN website security page](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security).

## HTML/CSS Frameworks

A design framework is a collection of re-usable code snippets which you can use to build a website. It is sometimes called a "design system", "style guide", or "pattern library", and will usually consist of three things:

1. **Brand guidelines** define the appropriate typography, colors and logos to use.
2. **Components** define re-usable code snippets for common requirements, like navigation menus.
3. **Helpers** define additional code tools to construct the site, like layout grids.

The main goals of a design framework are to ensure design consistency and avoid writing the same code twice.

### Bootstrap 4

[Bootstrap](https://getbootstrap.com/) is CSS and JavaScript code that we [load in our HTML pages](https://getbootstrap.com/docs/4.0/getting-started/introduction/). Bootstrap's documentation describes how to write HTML code that fits the Bootstrap components, including a [grid layout](https://getbootstrap.com/docs/4.0/layout/grid/) as well as several [components](https://getbootstrap.com/docs/4.0/components/alerts/).

:::note Exercise (15 minutes)
Fork [this repository](https://github.com/NateWr/groupstrap) and follow the instructions in the [readme](https://github.com/NateWr/groupstrap) to create a new page and add a card component to it.
:::

:::note Exercise
Over the last two weeks, you've been building personal websites as part of your homework. Now we want you to take those websites and apply the knowledge you've learned to make them as good as you can. Some ideas:

- Add [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) to your site and use some of the components.
- Use re-usable class names to reduce your CSS code.
- [Validate your HTML code](https://validator.w3.org/#validate_by_input) to find and fix problems.
- Add a second page and link to it from your first page.
- Try to style the first article differently so that it stands out from the rest.

By the end, you should have created a repository for your site on GitHub with all the commits you've made.
:::

## Retrospective

At the end of each module, we'll have a retrospective. What went right? What went wrong? What can we do better to help you learn? Let's discuss the HTML/CSS module.

## Coursework

Click [here](./homework) to view the coursework for this lesson.

## Further learning

There's much more we haven't covered in this module.
Once you're comfortable with CSS, you can read up on the following topics which are used by a variety of software teams.  

- [BEM](http://getbem.com/introduction/) — this is a set of rules to improve the naming and structure of a project's CSS
- [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) — this is used to create an animation from one state to another
- [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) — this is used to create looping animations
- [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) — these are variables within CSS

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="HTML/CSS" week="Week 3" />
