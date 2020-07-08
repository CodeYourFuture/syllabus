---
id: first-week
title: First Week
sidebar_label: First Week
---

## First week

Once you have your team and your assignment, start by sorting out the basic administrative requirements:

- Team name! This will be your identity, use it in all communications/presentations
- Public Slack channel (name should start with #ldn5-)
- GitHub repository (pick one member to own the repo, everyone else is a [collaborator](https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository))
  - You can fork [this starter kit](https://github.com/textbook/starter-kit-cyf) for a basic React/Express/MongoDB app
  - Create a [project board](https://help.github.com/en/articles/about-project-boards) in the repo (or e.g. Trello board) for your tasks and stories

Then we can do some high-level design, think about:

- What’s the minimal viable product (MVP), i.e. the simplest possible thing we could build that lets us make some progress towards the business goals?
- What tasks will users be carrying out? What information will they need to have and/or provide to do that? This will allow you to figure what pages you could have and which endpoints they’ll need to use.
- What entities/resources are we going to have in the system? What information do we need to store to achieve the goals? This will allow you to figure out what collections you’ll likely have in the database.
- What are we going to need to expose to the React app? Where is that the same as the above (i.e. you’re just going to have an endpoint for a resource) and where might it be different (i.e. there will be some kind of calculation or aggregation between the database and the frontend)? This will allow you to figure out what the REST API is going to look like.
- What might these pages look like (sketch them out with a marker pen - we **don’t** want to spend too much time doing very detailed layout)? How could we decompose them into separate [components](https://codeyourfuture.github.io/syllabus-master/react/week-19/lesson.html#what-is-a-component) to work on?

This will give you an idea of what work needs to get done during the week, which you can then assign to members of your team. Make sure you identify the “seams” between different tasks (e.g. you have to agree on an API so that the backend and frontend match up, or on the props passed between a parent component and a child component) so that you know who has to collaborate with whom to make sure it all fits together, and will be able to identify the impacts of one part getting blocked.
