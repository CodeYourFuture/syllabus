---
id: editing
title: Editing The Syllabus
sidebar_label: Editing The Syllabus
---

This website is built using an open source tool called `Docusaurus V2`. You can find the full docs for Docusaurus [here](https://v2.docusaurus.io/docs/).

## Editing a Page

All documents can be found in the `docs` folder in their relevant folder.

All files are written using [Markdown](https://daringfireball.net/projects/markdown/syntax).

Docusaurus also has [additionally Markdown functionality](https://v2.docusaurus.io/docs/markdown-features) that you might find interesting.

Additionally, you can scroll to the bottom of any page and click the `edit` button to edit directly in Github.

## Adding a Page

To add a page to Docusaurus you can create a `.md` file anywhere in the `docs` folder. The location is unimportant technically however you should put it in the correct folder depending on the topic of the page i.e. React content should go in the `react` folder.

### Markdown Headers

At the top of your `.md` page it's important that you include the below snippet of text to describe the page. For example, the snippet for this page would be:

```md
---
id: editing
title: Editing The Syllabus
sidebar_label: Editing The Syllabus
---
```

You can then continue to write your content below the line as normal.

More information on markdown headers can be found [here](https://v2.docusaurus.io/docs/markdown-features#markdown-headers)

### Sidebar

The Sidebar is the element shown to the left of this page that allows users to navigate internally around the sections.

It's important to add your page to the relevant sidebar for each navigation around the site. To do this you should navigate to the `sidebars.js` folder in the root of the website. Here is an example of the file for this:

```json
 "Contributing": {
    "Overview": [
      "contributing/overview",
      "contributing/technical",
      "contributing/editing",
    ],
    "Template Lesson": [
      "contributing/example/lesson-template",
      "contributing/example/homework-template",
      "contributing/example/instructors-template",
    ],
  },
```

In the above example `Contributing` is the group that the sidebar belongs to. You should add a link to your new page in the section that you want this to appear. The path is defined as

- The folder path of the file (where `docs` is the root)
  - e.g. `/contributing/`
- Followed the `id` that you used in the Markdown Header
  - e.g. `editing`

You can find more details about the Sidebar [here](https://v2.docusaurus.io/docs/docs-introduction#sidebar-object)
