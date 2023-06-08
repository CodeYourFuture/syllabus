---
id: minutes
title: Global Syllabus Team Minutes
sidebar_label: Team Minutes
---

## 2023-06-08

Attendees: Ali Smith, Carlos Perez, Daniel Wagner-Hall, Greg Dyke, Isar Fridriksson, Karolina Urn, Sally McGrath

### ❗Actions from last time

- [x] Mitch: Synthesise our assorted ideas for week themes into a proposal to discuss.
  - In https://github.com/CodeYourFuture/curriculum/pulls - people should take a look but they're not copy-edited yet.
  - Greg is very happy.
- [x] Ali: Work with Berkeli to get the "clone issues" App shipped (spec and WIP PR).
  - They had a chat, Berkeli is planning to do more work, but may need a little chasing.

### 📝 Agenda points

#### Introductions

* Ali Smith
  - London-based
  - Long-time CYF volunteer and syllabus creator, put together a lot of the React course
  - Working at Overleaf in Engineering Management
* Daniel Wagner-Hall
  - CYF volunteer for a few years, worked through most roles
  - Particularly motivated to try to get our trainees focusing less on code and more on problem solving
* Carlos Perez
  - Software Engineer at New Relic (mostly backend, a bit of frontend)
  - Volunteer at MigraCode since ~2 years ago, mostly teaching the last 1 year
  - Teaching the javascript modules, excited to learn React soon to be able to teach it
* Isar Fridriksson
  - Volunteer at MigraCode Barcelona for about 10 months
  - Syllabus is a fork of an old CodeYourFuture syllabus - think we should probably work together more
  - Mostly do management of volunteers, trainees, etc
  - Background is full-stack development, quite obsessed with automation, CI/CD
  - Studying at 42 School
* Karolina Urn
  - From HackYourFuture Denmark
  - Was student, then mentor, then professional FE developer and product manager, now a HYF staff member in education management
  - Mostly busy being hands-on, haven't had time to worry about the syllabus too much
  - Curriculum is quite out-dated - took over from Amsterdam a couple of years ago, works fine but could be better
* Greg Dyke
  - In Edinburgh, does a lot of work with CYF Glasgow - has done most things at CYF
  - Works at Avaloq on compilers, and looking for interesting ways to tie that into CYF
  - Currently trying to let the Glasgow volunteers work out how they're managing their cohort, and focusing more on syllabus development
  - Focus is around how to get trainees writing tests more and well, and also responsible for [CYF Blocks](https://blocks.codeyourfuture.io/) - block-based programming to focus on problem solving before knowing JS-syntax

#### CodeMirror 6 in Curriculum

We're hoping to move to [the new curriculum](https://cyf-curriculum.netlify.app/) ideally June 24th.

Ali has been working on a component that uses CodeMirror to allow making all code blocks editable (and maybe executable). Makes it easier in-class to try out edits to things, show examples.

Have talked about making code executable - could be something to do next. Probably by shoving the code into an iframe. [JS-Interpreter](https://github.com/NeilFraser/JS-Interpreter) could be useful at some point too.

We can also add an option to highlight specific lines.

Karolina: What's the goal, to serve exercises from the curriculum, or...?

Yes, mostly "sample problems" rather than homework, and examples we've prepared for our teachers/volunteers.

As an example, [this page](https://syllabus.codeyourfuture.io/js-core-2/week-2/lesson) has some "introduction to objects" code examples, and some "fill in some code with examples" exercises - being able to live-edit them would be super useful.

Also, a note: We're switching to flipped classroom model, where we assign the reading/learning for trainees to do at home, and then spend our classes with them actually helping them with their problems.

##### Sally demo'd the new curriculum website

* Remixable sources of data e.g. markdown, videos, etc.
* Coursework exists as issues on GitHub, which also gets pulled in
* Big problem this solves is that people aren't entirely sure what they should be doing and what to do next - new curriculum is strongly guided around "What do I do next?"

Isar: Would this allow for submitting work for review/correction? Currently no, but hopefully in the future.

Karolina: At HYF each module is currently a separate repo, and no one ever submits PRs to them because they're hard to find and there's a high barrier to entry.

We're moving to have one repo per module with all of the exercises, and using that as one of the input sources for rendering a module.

At the end of each week, we have a checklist of each learning objective, which can be checked off. We currently have trainees who both 

For forking our material - can have your own curriculum website using this system which pulls in material a mix of direct from CYF or from a fork or from other sources, and which makes transitioning to shared modules, or trying out new drafts of modules, really easy.

##### Are there any features we really want to keep from docusaurus?

* Admonitions - already implemented.
* Where will our minutes live?
* Search? Sally can build it if we need, but not sure how used/useful it is.
* Where do workshops and guides go? Guides exist at https://cyf-curriculum.netlify.app/guides/

#### Greg Wilson wants to make an intro a researcher

* Cat Hicks - research at Pluralsight Flow researching what makes developers effective
* Interested in learning more about CYF

#### June 24th for new curriculum

West Midlands are starting Fundamentals on June 24th. Would be ideal if they can start with the new curriculum and never know anything different. What blockers do we have?

#### ChatGPT

There's a lot of energy behind ChatGPT right now, we should get some enthusiastic community folks to put together a plan for how to embrace it in our course.

James Bromley has been giving some workshops in London.

One of Karolina's mentors has an interesting workshop for testing/code review via ChatGPT - happy to share.

Isar: MigraCode Barcelona have been working on a code-writing workshop - happy to share too.

#### London 10 & Glasgow 6

Have been trying to get the classes to work together, but not sure people are engaging across the classes.

Any engagement people are doing is probably in DMs. Sigh.

#### How are people feeling about sharing content?

Isar: Generally good, working together makes sense.

Carlos: Want to understand why the fork happened originally, and why edits were made since, but in principle makes sense.

Ali: We have prior experience of someone (CYF Colombia) trying to take our content, and it not working very well. Think a problem was that they assumed the curriculum was perfect and just needed translating, which was far from the case.

How would we transition plan and work out the logistics to work together?

Also, everyone should bear in mind none of the current curriculum content is "done" or "perfect" - please look at it with a "we can change anything" mindset!

### Sprint planning

We declared backlog bankruptcy. [Here's our new board](https://github.com/orgs/CodeYourFuture/projects/105/views/1).

### ❗Actions

- [ ] Everyone, but particularly Daniel: Review Fundamentals on https://cyf-curriculum.netlify.app/ (sourced from https://github.com/CodeYourFuture/curriculum) and fix/report anything that would mean it's not ready for June 24th.
- [ ] Greg: Start migrating flipped classroom content for JS1 to the new curriculum.
- [ ] Greg: Write a ticket for "work out how should we get feedback on classes/modules"
- [ ] ??: Work out how to make clear to people how to edit/improve the content of the new curriculum.
- [ ] Ali: Make a ticket for full-text search on the new curriculum.
- [ ] Ali: Make a ticket to change the random emoji menu button to just a hamburger menu icon
- [ ] Sally: Respond to code review on [CYF blocks toggle](https://github.com/CodeYourFuture/fundamentals-blockly/pull/93)
- [ ] Carlos + Daniel, Isar + Greg, Karo + Ali: Pair up and work on something together, come back next meeting with reports. Maybe in particular, try to work out fit / gaps for adoption.

---

## {DATE HERE}

Attendees:

### ❗Actions from last time

### 📝 Agenda points

### ❗Actions

---

## 2023-05-11

Attendees: Ali, Sally, Greg, Mitch, Daniel, Keith, Thomas

### ❗Actions from last time

- [x] Mitch: Synthesise our assorted ideas for week themes into a proposal to discuss.
- [ ] Daniel: Work with Berkeli to get the "clone issues" App shipped ([spec](https://github.com/CodeYourFuture/Changes/issues/2) and [WIP PR](https://github.com/CodeYourFuture/syllabus/pull/633)).
  - Handed over to Ali - who didn't manage to do it yet

### 📝 Agenda points

#### New Syllabus

- New syllabus
- Demo-ed
- Big bit of feedback from everyone: people want to know what to do and when
- Modules all have the same structure
  - Prep, 4(?) sprints, Backlog, Success, Product
- Block composition
  - Each page is a Markdown "config" file, with pointers to blocks
  - Blocks can be our content (another Markdown file), Youtube, links to other pages (marked with 🔗), ...other stuff
  - Concept: 1 source of truth, and we just configure the pointers
  - Backlog view
    - Coming from the module repo - the coursework tickets
    - Day plan - roughly what will happen during the day of the lesson
      - Computing timings for each block - this is configured from the block itself
  - Product view
    - A project for the whole module
    - Put separately - slightly unclear where this should live
    - 4 stages: Plan, build, ..., ship
  - Creating a module
    - Bash script to scaffold out the necessary files
- Being developed as a branch on the main syllabus repo
  - So can just pull it to play with it
    - Possibly depends on having Go installed
  - Sally will get it deployed on Netlify
- Where is help needed?
  - Code blocks
    - Have some code to render these blocks
    - Interested in setting up CodeMirror to render these - Ali can take a look at this
    - Goal: edit code and run it
      - Also run this in on mobile
      - Ali: just to clarify CM is really just a way of editing code in a IDE-like way, it doesn't do anything around storing/syncing/running code
- Daniel: How is coursework going to work mechanically?
  - Coursework issues are replacing google classroom
  - There'll be a button where they can clone issues from the template onto their repo
    - They can then manage their tickets on e.g. a kanban
  - All the code for a module will live in a "module repo" - which contains the issues and the code
  - This is being tested with LDN 10 & GLA X(?) - it's a bit rocky without the built in button to clone issues
- Sally: Talked to PD about what they wanted for their integrations
  - They don't like PRs/Github
  - So have built them a mini-CMS/platform for creating content
  - Can create their blocks directly on their platform
    - We can then just point at the platform via a block pointer
- Goal: make it easier to write content & experiment
  - Greg: can we make changes to a module but not have them go live until we update the config
  - Sally: can also write e.g. a workshop session, they can write
  - Wanting experiments with syllabus but with a single source of truth

#### Hello to Thomas 👋🏻

- Teach at QM Uni
- Approached Daniel, who pointed in our direction
- Interested in creating a Python/Data science course

#### Curriculum rewrite

- Mitch: Action from the previous meeting: synthesise feedback from the previous meeting
  - One of the main bits of feedback was around not trying to fit 1 learning theme into 1 module. They have to be threaded throughout, so we need to weave them together
- [Proposal on the Miro board](https://miro.com/app/board/uXjVMPkUc1E=/)
- First question: are people broadly happy with the overall direction
  - No objections
- Second question: Mitch has to be in deep focus to work on this, so cutting out Slack - but should this be more collaborative?
  - How do you see this being reviewed?
    - Depends on what we want
    - Proposal: sketch out like have done so far until the end of May, then report back
  - General agreement that we'd be happy to for Mitch to work on it, then we copy-edit it
  - High intensity for Mitch: is there a way of doing this in a lower fidelity way
    - E.g. "problem " wit hReact module - it's so cohesive that to iterate on it would be to un-weave and rework from there - will we end up with something like this with thus module
      - Another way of framing this - if produced at high fidelity, but we have to go back to rework the weaving, then we've wasted the work on the high fidelity
    - But on the other hand, the high fidelity output has been useful
  - Can we "user test" the content?
    - It's tricky to user test a single JS module - since it's a large-ish change we can't test it with a class

#### PD/Tech Ed Syllabus Teams meet up

- It's happening in 2 weeks
  - Not everyone realised it was going to be in-person
  - Ali & Sally (at least) will be around
- Lara from PD is organising - we should talk to her to sort out a plan
- Sally: PD PRs - are they ok?
  - Daniel: generally seem reasonable
    - Some points about the details of the content
    - The formatting/structure is generally good
- Sally: PD have a lot of technical problems with building stuff
  - E.g. just wanted a website - took Sally 3 hours to build this
  - Are there any other problems we can solve for them?

#### Python/ML module

- We don't currently cover any of this in the curriculum
- Is there demand for this?
  - Sally: We're focused on getting trainees good jobs - There's aspects of ML that will help them get a job, but some aspects that won't help
    - Many more advanced ML-like roles require degrees etc
    - There are more entry-level data engineering roles, so we would probably want to target this and / or identify roles where entry-level grads could get a job
    - The competition for entry-level jobs is really fierce, so we need to identify the best usage of our time
  - Daniel: if you have a 1 day workshop prepared, then this is a no-brainer, especially for grads
  - Daniel: not having seen multiple programming languages might be an issue for grads
    - So having some Python content to show the similarities could boost confidence and employability
  - Thomas: think that a bit of base-level knowledge is helpful for employability
- How could Thomas help create something?
  - Day job is designing modules, so can do various things in this area
  - Thomas: Happy to contribute towards ideas around developing Python content
    - Want to get to know the org a bit more first
    - Realise that it takes quite a long time to develop new courses - it takes 2 years at the university
  - Greg: we've observed that trainees struggle with going out on their own and solving big problems - could we do something unguided that they could work on in their own time?
    - Thomas: this sounds like something he was thinking of, so agree that this could work
- Greg: generally our volunteers are attracted to our course as it lines up well with our content, so they may not have a lot of experience with ML
- But we have some! And other volunteers might be interested in learning the content themselves
- Sally: we did get some funding to work on a [ML model](https://github.com/CodeYourFuture/Changes/issues/9) - so this might be interesting for Thomas too
- Suggested action for Thomas: reach out on general channel and offer to run a ML workshop - Tech Syllabus can help with pointers!

#### Greg Wilson

- Ali: noticed that Greg Wilson (author of Teaching Tech Together) was offering Lunch & Learn in return for a donation to charity, so took him up on the offer and he a gave a talk at the day job
  - Apparently he & Barny were emailing recently too
- So now have his email now and was thinking about asking him to come talk to us. Either to give one of his prepared talks or just fire questions at him
- General agreement that this would be a good idea

### ❗Actions

- [ ] Ali: Follow up with Berkeli re: the clone issues button work
- [ ] Keith: Review the coursework for the new [database module](https://github.com/CodeYourFuture/Module-Databases/). And potentially look at making a solutions repo
- [ ] Sally/Mitch: Catch up with Thomas in the next few weeks to talk about Python content, and what we could do next
- [ ] Sally: Continue working on the new curriculum
- [ ] Sally: Deploy the new syllabus on Netlify
- [ ] Ali: Ask Greg Wilson to come talk to us
- [ ] Ali: Investigate getting CodeMirror set up in the new syllabus

---

## {2023-04-27}

Attendees: Ali, Daniel, Greg, Mitch, Sally

### ❗Actions from last time

### 📝 Agenda points

#### Curriculum Rewrite

[Planning doc](https://docs.google.com/document/d/1p3Jd1ETGAuUfiYEl_YRNNdE7v3F8NmqkXgZLvPjkGb0/edit)

Focusing on JS1 for now, and further modules to come in the future.

4-week module structure is arbitrary, we can be flexible.

Aiming for one major learning theme per week.

Most content in the [planning board](https://miro.com/app/board/uXjVMPkUc1E=/).

Greg is concerned that trying to identify single themes per week is misleading because everything _is_ a thread that builds week-on-week.

#### Syllabus -> Curriculum

A syllabus is a top-line what you're teaching. A curriculum is the sequenced details of how you teach it.

We have a curriculum. We should call it one.

#### Coursework via GitHub Issues

Ali recently went to a London class and observed the new GitHub-based coursework.

It took about 45 minutes to explain how to copy issues onto their own board, and still not sure it fully landed.

There's a plan to build a GitHub application to do this, but until we have that running the workaround is to install an extension which clones issues. Which also requires access tokens and such.

In the mean time, worried the benefits and focus are being lost.

#### Greg demos latest "think like a computer"atron

Very cool demo :)

Next steps: Support some ES6

Ali: [CodeMirror](https://codemirror.net/) would be great for the presentation of the JS.

### ❗Actions

- [ ] Mitch: Synthesise our assorted ideas for week themes into a proposal to discuss.
- [ ] Daniel: Work with Berkeli to get the "clone issues" App shipped ([spec](https://github.com/CodeYourFuture/Changes/issues/2) and [WIP PR](https://github.com/CodeYourFuture/syllabus/pull/633)).

---

## {2023-04-13}

Attendees: Sally, Karen, Daniel, Ali

### ❗Actions from last time

- [x] Keith (with support), get Keith's SQL material into the syllabus
- [ ] Sally: Organise a regular joint PD & Tech syllabus team meetings - Carried over to this meeting.
- [ ] All: Mind map for JS1 concepts - Probably didn't happen, but Mitch and Sally have been doing rewrites anyway, so...

### 📝 Agenda points

#### PD Syllabus content to be in different files

Sally is building a swanky frontend which can collate views of the syllabus mixing in sources from assorted places.

Sally recommends: Just write the material wherever for now, and Sally will move things around as this launches. Don't want to block PD from writing things up.

Focus on _labelling_ content with competencies, so it can be easily moved around / re-linked to different weeks.

**Workflows for editing**

Would PD still be doing pull requests, etc?

No, basically building a workflow using Decamp CMS. Frontend can mix in content from arbitrary files from GitHub repos, will use a lightweight CMS which publishes to text files in GitHub.

We'll need approvals to gate merging things from the CMS to GitHub - that will need to be built somehow into the CMS.

The Netlify CMS supports creating PRs - will probably start leaning on this once PD have worked out what their workflows should look like, but for now, will probably run in "publish with no vetting" mode to experiment.

**How much GitHub experience do the PD team actually have?**

Most of the people actively working on the syllabus right now are engineers or engineering managers, and are happy with GitHub, but a lot of the wider PD community are (understandably!) intimidated by it.

#### PD & Tech Syllabus meeting-up (define when/what)

What do we expect from the meet up?

Introduction, get to know each other, people's backgrounds and focuses, etc.

In-person meet-ups generally lead to really high-quality high-throughput work outcomes. But everyone is super distributed. Ideally would get as many people in-person as we can, but may not be possible.

Possible themes for sessions:

- How do we get the trainees to work together in teams from earlier in the course (particularly when they don't have much coding or GitHub experience)?
- How do _we_ work well together across Tech and PD

Will arrange via Doodle.

Sally is going to happen to be in London the week of May 1st, may be a convenient, but many bank holidays in May.

#### Syllabus for Path/Tracks (QE, Cloud, PM, UI/UX)

**Karen's brief**

Would like syllabus written up for tracks - new volunteers are finding it weird to not have central organisation to consult and update.

**Sally's counterpoints**

The main syllabus is more chaos and full of lies than people realise.

Having a rigid formal syllabus disengages people from focusing on how they're teaching and that people are engaging. Makes it really easy for people to create content, or just present information, and not interact and engage.

We really want people to learn, not to just tell people things.

General goals of a syllabus:

- A place to codify consistent learning objectives
- Record experience of what's worked well and badly, lessons learnt, and e.g. exercises which have worked well in the past
- Offering a repeatable, scalable experience

Valuable goals to produce:

- Playbooks of how to run specific styles of seessions
- A living culture of getting experience in class, then graduating volunteers up to more leadership roles

General agreement that syllabus isn't a life-saver, but it would be useful to collate "things we've done that worked" somewhere.

Nobody actually reads the docs that are produced.

Why do we have a syllabus at all? An alternative is to lean heavily towards 1:1 mentoring. Syllabus should be a handbook to teachers: "Here's how to teach this stuff". But risk that this ends up as (ignored or poorly presented) lecture material.

**What did we learn from CYF+?**

There was no "teaching" as per normal CYF, but lots of mentoring.

Syllabus was explicitly designed not to be "this week you do this, next week you do that", but to be remixable. Very project driven.

#### What are we actually trying to offer as CYF to enable volunteers to succeed in teaching?

Not much, actually.

Example projects we've seen work, and a community to talk to.

#### How would we maintain things?

We realistically don't have the bandwidth to maintain 8 different syllabuses.

Idea that we would need to have a "lead" for each syllabus to maintain it.

Except in practice, this always becomes Sally's job.

Do we know why people aren't maintaining things? No, we've tried many things (making things "official", centralising, federating, ...)

#### How should people contribute material for re-use?

[Developing a track doc](https://docs.google.com/document/d/1xJSTOCWAm4nOvDR8lppG9EKHVbiUR8-A4nt9iI_tLLs/edit). [Example front-end track doc](https://docs.google.com/document/d/1_wNIPJdRUzXK6XoH9ndjaga6GO4A4mvwTqOswcCZ6OI/edit).

There's a [track template repo](https://github.com/CodeYourFuture/Track-Template), [module template repo](https://github.com/CodeYourFuture/Module-Template), and [coursework template repo](https://github.com/CodeYourFuture/CYF-Coursework-Template).

Make new repositories based on them and fill out the information.

Really important to be clear that we don't have capacity to reliably deliver more tracks than our main syllabus track.

### ❗Actions

- [ ] Karen to specify requirements for PD syllabus edit workflow.
- [ ] Karen to put together a Doodle of dates that work for her for a PD & Tech Syllabus meet-up.

---

## {2023-03-30}

Attendees: Sally, Keith, Ali, Greg

### ❗Actions from last time

- [ ] Keith (with support), get Keith's SQL material into the syllabus
- [x] Mitch: Raise an issue for fixing JS1 in short term with acceptance criteria
- [ ] Sally: Organise a regular joint PD & Tech syllabus team meetings
- [x] Ali & Mitch: share concept maps
- [x] Greg: tag Ali in on tidying up js1 coursework
- [x] Greg: put a meeting in for Sally to teach her how to write a block for CYF Blocks

### 📝 Agenda points

#### JS1 rewrite

Mitch:

- Written an issue with acceptance criteria
- Done draft of first week
- Next steps
  - Write out mind map + agree on it
  - Others to pick weeks and write them
- Github blocks should allow us to compose activities (so far only notes.md)

- Sally: assume Sally will take care of the composition problem
- Greg: composition: how to assemble the following for each topic,
  - the flipped classroom video
  - the practice exercises
  - the instructions for practice exercises
  - the coursework
  - the coursework solution
  - the summary for the benefit of volunteers/TAs

#### Single repo per module

- Goal: get rid of google classroom in a way that's useful to people
- Contains issues = homework
- Trainees get a board to help their planning
- Viewable by week
- Can get overviews that give us some insight into the shape of our coursework
- Some development work happening to facilitate trainees getting the issues from the sample board (existing extension, to be replaced by our own batch clone)
- Syllabus can pull in the coursework from github
- Long term, if that works, everything related to the syllabus will go there
- Can try with JS3 for GLA6 and LDN10

#### Think like a computer

Greg demos where he's at with think like a computer so far

- Mitch: "it's fucking awesome" (sic)
- Ali: what's the value over a debugger?
- Greg: definitely a good question to ask: meaningful goal = get a prototype, try it out with trainees and compare to teaching them to use the debugger.
- Greg
  - Doesn't just mutate state (e.g. variables in scope, go to next place in the callstack, etc.), but tell you what it's changing. Particularly valuable, e.g. for the addition of arguments to scope when a function is called
  - Visualise "movement" (like passing around of post-its in physical think like a computer) - and specialised movement of callback functions
  - Because it tells you what it's changing, it can be made into a quiz/"predict and evaluate" (and for different kinds of operation, either the computer could just do them, or it could pause and ask what will happen)

#### Flipped classroom content

Mitch

- Produced up to JS3, with consistent supervision/creation from Mitch
- Many small videos per week + practice materials
- Lots of contributors from different locations
- Negative: very time intensive to produce
- Negative: in practice coordinating all the different contributors has been tricky
- Doesn't seem sustainable to even finish this for JS3 -> Mitch will stop at end of JS2 and post on Slack to see where LDN10/GLA6 want to go
- We should make playlists going forward for JS3 that point to playlists on youtube

- Greg: would prefer we did our content in house, at least for JS1-3, because it's really good to have the right amount of context
- Greg: concerned that the practice materials need to be really good and tied to the content
- Greg: wonder whether having the degree of difficulty that's been put in is the right degree (varying from mind-numbingly easy, to maybe slightly too complex, with the goal that every trainee should have found the practice material doable to some extent)

#### Recap materials

- Greg: How do we collect the recap materials?
- Greg: How do we retro on "what makes a good recap"
- Greg: How do we scale recaps (make them so that any volunteer can run it with minimal prep)

#### Prison project

- Sally: one video so far
- Sally: offline version of codepen
- Sally: haven't solved Grasshopper + we'll need to solve it inhouse also

- Criteria for Grasshopper:
  - Content that's not too boring
  - On phone
  - 6-8h

### ❗Actions

- [ ] Keith (with support), get Keith's SQL material into the syllabus
- [ ] Sally: Organise a regular joint PD & Tech syllabus team meetings
- [ ] All: Mind map for JS1 concepts

## {2023-03-02}

Attendees: Sally, Keith, Ali, Greg

### ❗Actions from last time

- [x] Mitch: Invite Keith Bremer to a syllabus meeting
- [ ] Mitch: Raise an issue with acceptance criteria (for restructuring JS1?)
- [ ] Sally: Organise a regular joint PD & Tech syllabus team meetings
- [ ] Ali & Mitch: share concept maps
  - Ali thought he had one for JS but can't find it
  - We have the syllabus from Fatemeh -> Mitch or Greg should share

### 📝 Agenda points

#### SQL

- Keith: has a background as a trainer for Oracle + long-term involvement in CYF
- When you teach it: clear that there is not enough time to properly teach SQL
  - Locking
  - Transactions
  - Aggregate functions
- Greg: worried that with a medium SQL module we are both failing advanced trainees who are not learning enough, and struggling trainees who need to practice writing small full stack apps
- Greg: Wish that the last module was a "full stack apps" module with absolute bare minimum of SQL
- Greg: Maybe we could have both?
- Ali: Let's gather existing modules that exists
- Ali: ideally every module would be longer
- Sally: maybe we should put databases earlier, so that trainees who like this could branch into it (maybe just before React?)
- Sally: then have a bigger SQL module for them
- Ali: the "frontend path" is not really frontend
- Ali: might there be difficulty in recruiting volunteers for SQL?
- Keith: could we have a beginning of SQL before node/react and then gradually build as we make our full stack apps more complex?
- Maybe we should have a "taster module" with different parts of a full stack app (but how would we make it nicely decoupled)
  - Pitch workshops (so that you can just drop into them), maybe tied to job titles (a day in the life of...)
  - e.g. Data Engineering
  - How do we help trainees understand how things fit into the rest of the universe?
  - Has to be very hands on - exercises in various technologies?
- Fits into the bigger picture of how to make practical projects that they work on every module
- Structure of syllabus is pointlessly constraining
- Let's make projects / small increments as if we were already in the future where it all makes sense

#### 1000 paper cranes

- Could be for trainees near graduation to understand that a tool is just a tool and there are some underlying

#### ChatGPT

How can we support trainees in learning using it?

- Great at variable naming
- Given tests it can write pretty good code
- It is not good at even slightly unusual requirements
- It can't admit mistakes / confidently doubles down or spouts nonsense

#### Someone wanted to join the syllabus team? Invite them?

- yes!

### ❗Actions

- [ ] Keith (with support), get Keith's SQL material into the syllabus
- [ ] Sally -> reach out to person who would like to join syllabus team
- [ ] Mitch: Raise an issue for fixing JS1 in short term with acceptance criteria
- [ ] Sally: Organise a regular joint PD & Tech syllabus team meetings
- [ ] Ali & Mitch: share concept maps
- [ ] Greg: tag Ali in on tidying up js1 coursework
- [ ] Greg: put a meeting in for Sally to teach her how to write a block for CYF Blocks

---

## 2023-02-16

Attendees: Ali, Sally, Mitch, Greg, Daniel, Karen

N/A - apparently we haven't made minutes for a while

### ❗Actions

- [ ] Mitch: Raise an issue with acceptance criteria (for restructuring JS1?)
- [ ] Sally: Organise a regular joint PD & Tech syllabus team meetings
- [ ] Ali & Mitch: share concept maps

#### JS1 Week changes

- What is the larger refactoring referenced in ticket? The complete redo of all JS modules
- Want to make the smallest possible change
- Any further questions should be recorded so we can discuss them in more depth
  - We're interested in getting together to discuss goals - like we did with the fundamentals
  - Daniel: propose an experimental JS in the browser to see if it actually works
    - Put together a 1 day workshop and test with some trainees
- JS in the browser
  - Greg: Would like to try this
    - Can we figure out a migration path to this in the current work
- Flipped classroom shows that we have too much content in JS1W1
- Mitch: only audited Week 1
  - Changing this will have a ripple effect for following weeks
  - Suggestion: create new files in which to make the changes - prevent scope creeping out into the main discussion
- Greg: loops
  - Let's not teach all of the types of loops together - keep it restricted in the syllabus
  - But keep a "glossary" of materials on other types of loops
- Ali: Concept mapping
  - Can we try to map out the mapping of all the concepts we cover in JS
  - Decision: it shouldn't block this round of work
  - There's interest in syllabus development workshops
    - Mitch has a rough version of this, is happy

#### PD Syllabus

- Karen from PD syllabus team
- Currently mapping the syllabus
  - Compare tech vs PD syllabus
  - Trying to align soft skills that cross over between tech and PD
- Ultimate goal is to reduce friction in final projects
  - But intermediate goal is to try find module splits for syllabus
- Also keen for PD & Tech syllabus teams to work together
- Sally: consider that we may be moving parts of tech syllabus around (particularly in JS)
  - Problem: the syllabus is inflexible
  - Tech syllabus is working towards making pieces more independent, so we can move around
  - Broadly we want to stay within a module format
- Greg: we're in favour of integrating with PD
  - Trainees have historically not looked at PD as "real content"
  - Separating the content into separate sites was not helpful
  - So have been working to move the content into the "main" syllabus
- Greg: will PD modules map onto Tech modules e.g. feedback module would be taught alongside JS1?
  - Code review is similar to feedback
  - Tech picks up code review in JS1 - so makes sense to links these together
  - Greg: encouragement to revisit concept multiple times across
- Daniel: super short term - Esma has lots of PRs open & how will we handle them
  - Karen has reviewed them
    - There's some feedback from Sally - try to avoid things that are inaccessible
  - Reviewing the learning objectives are out-of-scope
  - Main immediate objective is to get into the syllabus
    - And then iterate from there
  - Should tech syllabus be involved at all? We don't know
    - Daniel thinks that we can get through them
  - Sally: to make things easier, we could use labels for topics
    - Can filter PRs?
- Ali: should we communicate the current/near future state of PD content, and that we want to iterate on it
  - Sounded like the consensus was no
  - Already put a message in the PD channels
- Ali: is the split of PD & Tech artificial?
  - General agreement that it's somewhat artificial
  - Having small teams is a benefit
  - We'd like to have more joint meetings

#### Codespaces

- Sally: have created lots of small tickets
- Want to encourage small contributions - Codespaces make this easy

#### New database module

- Sally: a new database module has apparently appeared
- We still like the database module that Keith Bremer wrote

### ❗Actions

- [ ] Mitch: Invite Keith Bremer to a syllabus meeting
- [ ] Mitch: Raise an issue with acceptance criteria
- [ ] Sally: Organise a regular joint PD & Tech syllabus team meetings
- [ ] Ali & Mitch: share concept maps

## 2022-11-24

Attendees:

### ❗Actions from last time

- Open a ticket to add the Bandit to the terminal lesson (Sally) []

### 📝 Agenda points

#### Feedback from flipped classroom Q & A

- [Here's a link to the notes from the Q&A session](https://docs.google.com/document/d/122t689Qpe_UbrrhW1xvpN88arM_I8ZGcoIAE9hd7ESs/edit) with Shaun and Zacheé re flipped classroom in S Africa
- Greg likes to think of flipped classroom more as having really well thought out prep work that makes the Saturday class run more smoothly

#### Brief talk through Saturday flipped classroom presentation

- Some discussion around the grouping of trainees on a Saturday:

  - Ask trainees how long they've spent on the prep work in a given week
  - May need to say in advance that someone in their group is going to be slightly/considerably more advanced than them
  - Very important to normalise the differentiation
  - Alternatively leave it vague who is strong/weak before grouping up trainees
  - If 2 people are trying to learn the same thing, say `useEffect`, then it makes sense for the `useEffect` people to work together
  - In general, the less they know specifically -> more mixed ability becomes possible
  - Could potentially get more frustration with people working at different levels
  - If we assume people are learning different things then groups don't matter massively

- Peer-2-peer collaboration will work better if trainees provide verbal explanations of how their code works

#### Video recording volunteers

- Lo-fi recordings done with volunteers
- Greg, very interested in helping with recordings - at some point in the future making some videos when he gains capacity
- Will to observe something beforehand to see how it works

#### Welcome to Will

- Welcome to Will who's joining on syllabus! 🎉
- Will was previously a mentor in 2nd LDN class in 2018

### ❗Actions

- [] Mitch and Will to catch up on a module PR later this week

---

## 2022-11-10

### ❗ Actions from last time

Still copying forward the tasks from last time.

### 📝 Agenda points

#### React module team

- Ali has been leading/encouraging progress but is going to be busy with moving soon
- Ideas for getting increasing engagement
  - Could we invite them to the Summit in Jan?
  - Run an ideas meeting, encourage ownership/long-term vision
    - Sally has lots of ideas that they could try, potentially could join

#### Coursework Reduction

- Sally created a bunch of tickets to reduce the amount of _mandatory_ coursework
- Do we know how long it takes trainees to work through the coursework
  - We've had a trainee who took 2 - 4 hours per week
  - But we've also had trainees take much longer
- Idea: reorder the coursework
  - So trainees are doing the most important work first
  - Could potentially do up to the 20 hour deadline
- Consistency
  - Can we make coursework clearer through consistency, so they're more likely to do it?
  - Top priorities have a CodeWars exercise & PR to main coursework repo
  - Next is to review the solutions
    - A lot of trainees skip this, which may be a problem --- don't know which way the causality is around
- Boilerplate classroom
  - Has a break down of coursework by week
  - Global syllabus should have access to this
  - It's used to set up new classes --- so editing this will affect all subsequent classes
    - There is a mechanism for updating existing classes, but it's on the cities to do it
- Goal of tickets: have a look through the tickets and see what can be removed
  - Some of the coursework might go, some might not
  - Just need to assess it

#### Flipped Classroom

- Is the syllabus ready for this?
  - Has ZA made progress/notes on how well this has worked?
- Sally moved coursework ahead 1 week
  - So trainees should be working ahead, seeing new concepts
  - And coming with questions to the next class
- Have coursework items to prepare for the next class
  - Encouraged to come with questions
- Mitch is planning to introduce flipped classroom model to NW soon
- Concerns that flipped classroom model will heighten the "I don't know what I'm doing so I won't say anything" issue
  - Need to encourage a culture of sharing blockers/vulnerability
- Think that just giving notes to trainees ahead of time isn't enough
  - Mitch plans to work with experienced teachers to prepare recordings alongside grads
- Training for software engineers to "get out of the way"
  - This was a suggestion that Ali had out of Mitch's teacher training session: we need a session on "practicing", basically solving exercises, pairing with trainees, etc
- Will trainees come to class having written some code?
  - Some but not lots
  - Goal: they have an introduction and have started thinking about questions when they arrive at class
- Syllabus tries to guide teachers on what they should cover in class
  - Do we need to go through it and add in some time for flipped classroom? Yes probably
- Naming
  - "Flipped classroom" may have something of a bad rap, maybe we should call it something different

#### The Bandit

- https://overthewire.org/wargames/bandit/bandit0.html
  - Levels 1 - 10
  - Challenges to SSH onto a box, and move around to find files, using various CLI tools
- Was added to CYF+ syllabus
  - Sally did it, and thought it was good
- We should add it to the main syllabus, as an stretch goal for terminal lessons

### ❗ Actions

- Open a ticket to add the Bandit to the terminal lesson

## 2022-10-27

Attendees: Sally, Ali, Greg & Mitch

### ❗Actions from last time

(3 tasks put back in actions for next time)

### 📝 Agenda points

#### Check github actions for unit tests for coursework repos

- need a ticket for this
- unclear in how many places it is/isn't running
- @Ali is writing a ticket

#### Ali is moving

#### Problem solving workshop in WM

- basics to help trainees with their problem solving skills
- e.g. how do the start solving codewars: (understanding the problem, inputs, outputs)
- biggest problem is "how to get started"
- other problem is TV show: "giant function nightmare"
- TV show project could be better scaffolded
- Suggestions:
  - Maybe TDD could help
  - Starting earlier with complexity
  - Adding katas
  - Scaffolding for how to solve the problem (how much scaffolding is too much? too little?)
- TDD intersecting with scaffolding (pre-writing tests)
- Write some broken implementations
  - Need to make a change
  - Easier with an existing test suite -> helps
  - Need for a new test
- We don't expose students to (good or bad) code
- What are we taking out of the course/coursework to make room for more problem solving?
  - And the job market
  - And the TDD
  - etc.
- We could make a lot less coursework mandatory
- Need a doc with some requirements
  - probably starting with TV Show is the wrong place
  - break down the requirements -> and then figure out how we can distribute them

#### Goals for TDD discussion next week

- Sally will make a post where we can post agenda points
- Greg has started working on a document

### ❗Actions

- [] Sally: Post the fundamentals job ad
- [] Greg: For js2, create at ticket to create an exercise that can be done with both Blockly and Javascript
- [] Greg: Write a ticket forming a module team for Fundamentals (possibly with some steps that can be checked off)

---

## 2022-10-13

Attendees: Sally, Ali, Greg & Mitch

### ❗Actions from last time

- [x] Sally: For HTML Karma-clone, create a ticket for a "build a hamburger" exercise that can be done with Blockly
- [x] Sally: Organise a discussion around TDD incorporation

### 📝 Agenda points

#### Syllabus team recruitment

- Keep on the lookout for new members of the Syllabus Team

#### 4 week React

- React module is being converted to 4 weeks ( along with all other modules )
- Potentially split week 1 - too densely packed at the moment
- S Africa very good at trialling new stuff - good place to trial new 4 weeks React

#### Netlify deployment PR

- Polishing PR ▶️ https://github.com/CodeYourFuture/syllabus/pull/481
- Scope for more drastic changes to the Netlify deployment workshop
- Proposal: take instruction pieces and turn into a guide, remove workshop and move content into HTML module

### ❗Actions

- [] Sally: Post the fundamentals job ad
- [] Greg: For js2, create at ticket to create an exercise that can be done with both Blockly and Javascript
- [] Greg: Write a ticket forming a module team for Fundamentals (possibly with some steps that can be checked off)

---

## 2022-09-29

Attendees: Mitch, Greg, Sally

### ❗Actions from last time

### 📝 Agenda points

Forming a module team needs more work that being an "action point"

- Write a ticket
- https://docs.google.com/document/d/1DbES2Ttw99AOT9Ib2Qe8HbAcFgIvxarv8iASFfFCWSA/edit?usp=sharing
- Have someone from PD part of the fundamentals module team -> ask Elizabeth

P2P learning

- should read and comment document
- should trial it (smaller city sounds easier than London)
- trial would have to have people (i.e. Mitch) be involved very directly to build up the culture
- having coursework on wednesday sounds really good

Employer feedback

- incompetence with git (commits that are too big, merge conflicts, poor commit messages and PR titles)

Sally video for trainees

- what CYF is and isn't

### ❗Actions

- [] Greg: For js2, create at ticket to create an exercise that can be done with both Blockly and Javascript
- [] Sally: For HTML Karma-clone, create a ticket for a "build a hamburger" exercise that can be done with Blockly
- [] Greg: Write a ticket forming a module team for Fundamentals (possibly with some steps that can be checked off)
- [] Sally: Organise a discussion around TDD incorporation

---

## 2022-09-15

Attendees: Barath, Lorenzo, Ali, Sally, Mitch, Greg

### ❗Actions from last time

### 📝 Agenda points

#### Barath's marvellous machine 🤖

_(Raised by Sally)_

- Barath started explaining certain concepts in JS like how array methods work
- Starting with an mental image and forming words to explain the particular concept - difficult with non-native speakers
- Barath wanted to devise a more visual way of explaining some of the concepts
- Built an awesome UI to visualise how some of the JS array methods work
- Enables you to change the input array elements, the iteratee and the array method you want to visualise
- The app can be found [here](https://unique-selkie-38a362.netlify.app/)
- Will really help with difficult concepts like the difference between `map` and `forEach`
- Great to extend this kind of visualisation app to other things like async code and HTTP requests
- Great to think about how we can use tooling to really get the most out of our trainees

- Next steps... 👣
  - Barath will continue using with LDN9
  - Try it with a running cohort
  - Get feedback and survey the trainees
  - Possibly create a smaller version and make other methods discoverable ❓

#### CYF cloud track 🌧️

_(Raised by Sally)_

- This is a Postgrad module
- Pedro originally ran an informal version of this course - people would go away and study something and then come back to discuss it
- Tension between teaching something interesting vs teach something step by step that is useful to a company
- Trainees can use free tier AWS accounts - but will be billed if you make mistakes
- [Plan has been created here](https://docs.google.com/document/d/1qsvH-C1vXvevcKflYb2o8Ny2mmY2W2foP_yNssvIkZE/edit) for the CYF cloud track
- Possible dates: Saturday 17th / 24th September
- Course is going to be more like a discussion with Q&A
- Focus of module: have some sort of application that you need to deploy
- Want to support unbanked students as part of digital inclusion so they can access platforms like AWS
- Need to get the balance right between videos and resources and independent learning and too many passive videos
- Sometimes trainees can get lost if the steps aren't clear and they're given too much independence - then have to introduce more structure
- This ties in with some of the emerging issues re peer-2-peer learning

#### Sprint planning / ticket taking 🎫

_(Raised by Sally)_

Autumn winter goals ⚾

**Greg:** Syllabus work for JS1 / JS2 with Richard, Transition materials for Blockly
**Ali:** Teacher training pair up, Develop teaching community in London,
**Mitch:** MVP Teacher training write up,
**Everyone**: Continuing to incorporate TDD into syllabus, Organise a meetup to discuss JS1/2/3 and our goals

#### TDD 🧪

_(Raised by Ali)_

- Confusion around Enzyme raised by someone in Slack
- TDD asked for more and more by trainees and employers
- Useful way to teach new stuff
- Don't really teach how to write tests at the moment
- Don't actually run the tests either too
- Having tests that run in the browser is a potential goal
- Tasks broken down with writing a test for each requirement:
  - 1 a) Write a test that asserts some func returns `[]`
  - 1 b) Write a test that asserts some other requirement ...
- Scaffolding for how to write tests properly with red-green-refactor etc
- Need to keep modelling good TDD practices over multiple weeks

### ❗Actions

- [] For js2, create at ticket to create an exercise that can be done with both Blockly and Javascript
- [] For HTML Karma-clone, create a ticket for a "build a hamburger" exercise that can be done with Blockly
- [] Form a module team for Fundamentals
- [] Organise a discussion around TDD incorporation

---

## 2022-07-21

Attendees: Sally, Apoorva, Greg, Mitch

### ❗Actions from last time

- [x] Sally: send list of some more people for React module team
- [x] Ali: chat with Lily about more people for React module team
- [x] Ali: coordinate with applicants so far for React module team
- [ ] Sally: follow up with ZA at some point about why they needed to conduct interviews

### Fundamentals feedback

- Feels like we need a lot of TA support for Fundamentals
- Add something to the module coordinator notes to think about the number of TAs required for a Fundamentals session
- TAs not assigned to a room in Scotland - so they all jump around
- They need experienced people to guide them when they go off piste
- LDN9 is a completely new group of volunteers - so good test of our unspoken assumptions
- Covering a lot of blocks in the Fundamentals course
- A lot of pushback from trainees, why are we using Blocks - like kids stuff
- Found the Blockly fundamentals homework overwhelming
- Greg: The split up of the homework was arbitrary - so we can rearrange it so we can add some more homework to Week 1 if required, for example
- A section on MVP in Week 2 - not realistic for it to be completed in 10 mins - more like 20 & 20 or 15 & 15
- Students said stuff "user stories" wasn't important
- Fundamentals will give students a better though far from complete impression of what being a software engineer involves
- Come up with a concrete outcome for the coursework - as trainees struggle to follow more abstract instructions
- Trainees are very wary of people in institutions - experience of being lied to etc
- Some things like create a discussion in a slack thread aren't happening
- Smaller spaces with games and retreat spaces good for breaking up large classes with 50+ people
- Rainbird and interview selection figures are very similar - vindication for Rainbird!
- Assumption that Fundamentals is different because Fun is a lot bigger than the rest of the course. Fun was supposed to be capped to 40 and come down to 30 for the main course
- Want to get a reduction in the early course dropout rate - target for next year
- 60+ for fundamentals is too big!
- Need to keep encouraging trainees to ask questions in main channels and _not_ DM TAs
- Asking questions, handling conflict are all essentials skills we need to keep developing in trainees as they progress through the course

### Immersive program

- Far more selective and demanding than the main course
- See link for more detail -> https://docs.google.com/document/d/1hNolfVFbwb3mYML3OaNw1zStACZbw5np-Obpx6eLtJ4/edit
- Course structure here -> https://docs.google.com/document/d/1V6HEu_OcJ3MHH-aHzUfANf06VJa1rPcGHcpBwql7QLA/edit#heading=h.dgaqq1am7dqu
- Invitation has been sent out to trainees
- Program is designed around x5 10 day sprints
- Hardly anyone has applied for the course so far - despite there being no consequences for applying

### Teacher training

- Currently running 2 iterations of the teacher training course in West Midlands and North West. West Midlands -> completely remote, North West -> Hybrid.
- Current format involves 4/5 x 2 hour workshops ( with plenty .of attendee participation and engagement). Using Miro to collect ideas - working well thus far.
- Course structure so far: take a section from a Saturday session and over the course of the workshops discuss and plan a short 20 - 25 mins lesson. The idea being that attendees ultimately feel more confident and empowered in taking on and delivering a section of the course.
- End of the course, Mitch is going to deliver the 20/25 mins of teaching that was planned and deliver it to the trainees on a Saturday class. Then volunteers will get the opportunity to observe what was successful and what can be improved next time
- Emphasis on planning and teaching as an iterative process

### ❗Actions

- [ ] For js2, create at ticket to create an exercise that can be done with both Blockly and Javascript
- [ ] For HTML Karma-clone, create a ticket for a "build a hamburger" exercise that can be done with Blockly

---

## 2022-07-07

Attendees: Greg, Sanyia, Ali

### Actions from last time

- [x] Sanyia: to speak to potential Deliveroo candidate for global syllabus team
- [x] Sanyia: start onboarding for Tom Daly for React module team
- [ ] Sanyia: speak to Carmen from Deliveroo for React module team

### React module syllabus team

- We have a team of 4 (including 1 grad) forming
- Ali is arranging a kick off call with them, likely next week
- Sanyia has a third Deliveroo person interested in volunteering

  - Since we have a team forming, we think it's best to hold them in reserve for now
  - # They are interested in hands-on teaching in London, so possible a syllabus team wouldn't be well suited for them - suggested connecting with London organisers since London 8 are currently doing final projects and they nearly always use React

  - Since we have a team forming, we think it's best to hold them in reserve for now
  - # They are interested in hands-on teaching in London, so possible a syllabus team wouldn't be well suited for them - suggested connecting with London organisers since London 8 are currently doing final projects and they nearly always use React

- Ali to write down some ideas for what the team could work on in the first few months

### Blocky

- Greg still owes some review to Mitch

## Missed agenda items

- Sally had other meetings running over, but had some agenda items which we can cover next time
  - 4 week revision update
  - Cyf+ update

## 2022-06-23

Attendees: Sanyia, Sally, Ali

### Actions from last time

- [ ] Sally: send list of some more people for React module team
- [x] Ali: chat with Lily about more people for React module team
- [x] Ali: coordinate with applicants so far for React module team
- [ ] Sally: follow up with ZA at some point about why they needed to conduct interviews
- [ ] Greg: set up a debrief with ZA (pending) - action!
- [ ] Greg: create a ticket for cypress testing in blockly - action!
- [ ] Ali?: take some time to review/give love to the group projects repo: https://github.com/CodeYourFuture/group-projects
- [ ] Ali: Recruit React Module Team (done-ish) and set up kickoff call

### ❗Actions

- [ ] Sanyia: to speak to potential Deliveroo candidate for global syllabus team
- [ ] Sanyia: start onboarding for Tom Daly for React module team
- [ ] Sanyia: speak to Carmen from Deliveroo for React module team

### React module team

- Sanyia has 1 definite joiner from Deliveroo, and 1 maybe joiner from Deliveroo
- Only 4 people have responded so far

### Global syllabus team

- Daniel leaving - looking for a syllabus team backfill (Sanyia may have someone in mind from Deliveroo)

### Upcoming work

- Sanyia - reactification of blocks
- Daniel - involved in creating an accelerator program to get students ready for high performing jobs (e.g. slack)
- Greg - cypress + contributing to blockly
- Ali - group projects

## 2022-05-26

Attendees: Daniel, Sanyia, Sally, Ali, Greg

### Actions from last time

- [ ] Greg: set up a debrief with ZA (pending) - action!
- [ ] Greg: create a ticket for cypress testing in blockly - action!
- [ ] Check how solid the module teams are at the moment - Sanyia
- [ ] Ali?: take some time to review/give love to the group projects repo: https://github.com/CodeYourFuture/group-projects
- [ ] Ali: Recruit React Module Team (done-ish) and set up kickoff call
- [x] Ali: Call with Elizabeth working on getting the PD changes merged into the fundamentals syllabus

### ❗Actions

- [ ] Sally: send list of some more people for React module team
- [ ] Ali: chat with Lily about more people for React module team
- [ ] Ali: coordinate with applicants so far for React module team
- [ ] Sally: follow up with ZA at some point about why they needed to conduct interviews

### React module team

- Only 4 people have responded so far
- Possibly not enough critical mass/skill so far?
- Maybe need clearer info about what applicants should tell us?

### Windows machines

- What are the options for students starting on Windows?
- Windows is "banned", WSL(2) is just not effective - the issue is the amount of support + create-react-app takes forever
- Can't get anyone to build a boot drive for Linux (even after offering money)
- Enforce after the Fundamentals
- If machine not powerful enough to dual boot Linux/Windows -> get them a laptop
- Mac is ok (ish).

### Github teams

- Why is Ali getting pinged about adding people to github?

### Upcoming work

- Sanyia - reactification of blocks
- Daniel - involved in creating an accelerator program to get students ready for high performing jobs (e.g. slack)
- Greg - cypress + contributing to blockly
- Ali - group projects

### Many people in Fundamentals in NW

- Multiple cohorts?
- Don't need fundamentals to be selective
- But not good to try to run a cohort with not enough volunteers

## 2022-05-12

Attendees: Sanyia, Ali, Sally, ??

### Actions from last time

- [ ] Greg: set up a debrief with ZA (pending) - action!
- [ ] Greg: create a ticket for cypress testing in blockly - action!
- [x] Ali: set up a Blockly Reactification call - action!
- [x] Open issue for slack exercise in Week 1 - Sally
- [x] Recruit people for React module team - Ali
- [ ] Check how solid the module teams are at the moment - Sanyia
- [x] Talk about new Fundamentals with WM - Greg
- [x] Arrange another call for markdown parser - Ali/Sanyia

### Report from Hack your Future summit

CYF was an early spinoff of HYF. Different in following ways

- Denmark, Netherlands, Belgium, Denmark
- Operating on a franchise model (with own leadership and staff)
- Different outcomes because e.g. Netherlands has an apprenticeship model in the hiring companies
- Don't graduate people until they are ready (part of how they've improved their outcomes)
- Not as much volunteer engagement/ownership
- Completely different curriculums in each franchise (w/ legal agreement that if outcomes are not met, franchise is revoked)
- In Denmark, companies pay to go into HYF to run a master class.

HYF Belgium super interested in LearnLab. They would like to share/collaborate on curriculum

Many projects we might like to fork and use + early JS modules.

StudyLens tool might be interesting/useful https://github.com/CodeYourFuture/study-lenses

Should potentially interact with HYF syllabus people in general.

### React Module Team

- Advertise for it
- Come up with commitments required of team
  - time
  - regular meeting (chair, minute taker)
  - visibility (minutes)
  - syllabus team member to come in for some amount of time to help bootstrapping)
  - review PRs, including to coursework
  - talking to teachers/gathering feedback
- 3-5 members is the sweet spot
- Need to ensure they take ownership: so far, no "here's some ideas, here's where we'd like to take the module"
- Need to discover what the contract that gives power, responsibility and ownership looks like
- If we wanted module teams to come to us with "major changes", would have to define what "major change" means.
- How would the module team interact with syllabus team?
  - Maybe 2-4 x per year retro will all?

### Fundamentals

- ZA are going to do some interviews following fundamentals

### Miro

- Mitch: is there a CYF MIRO board account?
- Greg: maybe can manage with free account?
- Sally: we have Figma for ed

### Unconfuse Greg

- PD portion will be in the fundamentals syllabus
- Sally's code review sessions are for Buddies: how much code review to do, good strategies for working with buddy groups, making sure that people know how to use github, etc.

### CYF online?

In order to happen would need to solve

- People are often isolated - doing CYF online does not help much with that
- Meetup in person has much better outcomes for English
- Meetup in person has better well being and employment outcomes
- City based meetup means volunteers are embedded in the local tech scene, where the jobs are

### Misc

- Have had applications to 4-week-ify the syllabus
- Classwork is setup in google classrooms (ready to be cloned an can be set in advance)

### ❗Actions

- [ ] All: take some time to review/give love to the group projects repo: https://github.com/CodeYourFuture/group-projects
- [ ] Ali: Recruit React Module Team and set up kickoff call
- [ ] Ali: Call with Elizabeth working on getting the PD changes merged into the fundamentals syllabus

## 2022-04-28

Attendees: Shaun, Sally, Denver, Greg, Mitch,

### Actions from last time

- [x] Sally: move meeting invite to Thurs
- [ ] Greg: set up a debrief with ZA (pending) - action!
- [x] Sally: share intro to CYF slides with Greg
- [ ] Ali: set up a Blockly Reactification call - action!
- [ ] Greg: create a ticket for cypress tesing in blockly - action!
- [x] Daniel: progress JS1 module project

### WMCA deal

- A lot of work to adapt the course to the requirements of the WMCA
- Not signing the deal - too much work to contort the course

### ZA Fundamentals (Denver)

- Well received thus far after 2 weeks
- Liked/learned/loved retro - mostly liked :)
- CYF blocks was well received
- Lack of JS syntax in this section
- Students expressing desire for physical class

#### Blocks

- Some display problems for some machines
- A few other issues occurring for some trainees
- Denver and others to document all the issues that arose from this iteration of Fundamentals
- Clarity needed about how objectives are related to the lessons at the moment
- Trainees usage of Zoom - use of "Raise hands", Slack chaos at the moment - need a session on effective use of Slack
- Non-audible learners - discrepencacy between use of Slides and non-use of Slides
- Insufficient number of mentors at the moment, half a cohort in a single breakout room
- Shaun and Denver solve Slack chaos - create a solved and issues thread to order some of the messages
- Add slack exercise on week 1 - we can add previous exercise from earlier Fundamentals version
- Slackbot encouraging students to post on Slack ?
- 4 high level goals of fundamentals- how are they doing ?

1. I'm part of a cohort

- Super chatty, too chatty ?? 😛. Meeting up independently

2. Start as we mean to go on

- Some students not completed homework but most handed in
- Split trainees ( 4 per mentor ) for mangeable workload
- Not deep marking, more "Is this work complete?" - deep marking not scalable

3. Breaking down problems

- Enjoying the games used in Fundamentals so far

4. Shipping it

- Everyone successfully shipped by week 2!

### Training for TAs/teachers

- Arrange CFY teacher training

### Reamining Blockly PRS

- Greg to check and merge these PRs
- Wait for other PRs to get merged before tackling "Greater than 11"

### Teacher training thus far

- 5 people attended last Saturday
- Material still in development
- Live streaming + recording coming soon

### Module teams

- Recruitment doc for React module peeps

### Blockly toolbox parser

- Sanyia to go through the toolbox parser PR and the current approach

### ❗Actions

- [x] Open issue for slack exercise in Week 1 - ?
- [x] Recruit people for React module team - Ali
- [ ] Check how solid the module teams are at the moment - Sanyia
- [x] Talk about new Fundamentals with WM - Greg
- [x] Arrange another call for markdown parser - Ali/Sanyia

---

## 2022-04-13

Attendees: Sally, Greg, Daniel, Ali, Sanyia

### Actions from last time

- Sally: Sanity check fundamentals - done
- Daniel: Ticket for shop idea - still outstanding
- Greg: Ticket for project - still outstanding
- Greg: Coordinate with ZA on feedback - done
- Sally: Ticket about devtools - done
- Mitch: PRs for blockly - done

### Agenda points

- New meeting time
  - Thurs is the new day!
  - 7:30pm
- ZA doing Fundamentals module
  - General positive feedback
  - Asked interesting questions
  - Found a bug, got fixed
  - Issue - Teacher might miss the wider picture/general goal
    - Suggestion: cheatsheet of goals for each exercise
    - Also can we integrate this in such a way that involves trainees - so they don't get distracted with the wrong goal
    - Did the mentor notes not get read?
      - Greg would have to ask them
- JS1 module project
  - https://github.com/CodeYourFuture/syllabus/issues/421
  - ...Sorry, missed a bit - had to get the door...
  - Goals
    - Get reviewer to think about how they express themselves - nudge towards answer
    - Get trainees thinking about how there are different perspectives on code
  - Why is just telling the answer a problem?
    - The suggested exercise is structured so that the reviewer would know the correct code. I.e. there's no code problem solving for the reviewer. Instead the goal is to write a response without "giving away the answer"
  - Sally showed the idea to her brother (who does lots of code review)
    - His criticism was that restricting what can be written in the response is artificial
    - He suggested that we give "canned messages"/"cards" that trainees could pick from
      - Some discussion of how these cards are structured
  - Peer review has been a struggle in the past
    - Trainees just give "pointlessly" positive feedback - no actionable feedback
  - We could experiment with a small group of trainees to see how it goes
  - Next steps
    - Daniel to write up a PoC exercise and trying it out with some trainees
- OpenClass
  - Course-making interface
    - Ala Google Classroom
  - Structured around mastery concept - have to demonstrate mastery of a concept before moving on
  - Can have a free, whitelabel environment
  - Courses are remix-able, so could have a core course that could be tweaked
  - Next steps: think about it
- Greg's presentation at Blockly summit
  - Are there some intro to CYF slides? Sally to share with Greg
  - Anyone available to review? Sally should have some time. Ali potentially too
- Shout to Mitch for making easy-to-review PRs for Blockly!

### Actions

- Sally: move meeting invite to Thurs
- Greg: set up a debrief with ZA
- Sally: share intro to CYF slides with Greg
- Ali: set up a Blockly Reactification call
- Greg: create a ticket for cypress tesing in blockly
- Daniel: progress JS1 module project

## 30-03-2022

### Present

Sally, Greg, Daniel, Mitch

Agenda Items

### Sanity check Fundamentals

What is the project?

- Week 1: ship personal home page (from intro to digital)
- Week 1: imaginary user stories for imaginary project
- Week 2: defining user stories for own website
- Week 2: choose a user story
- Week 3: do some more of it

We floated the idea of a "shop" page

Step 1) make what we have make sense, let’s start with

- @Greg: Make a ticket for making a project
- @Daniel: we can make a shop -> make a ticket for it
- @Sally: consolidate current version to make sense, based on improving the personal home page

### Coordinate with ZA on what feedback we would like

— how long homework takes
— do they want some padding out of homework

@Greg will look into coordinating that w/ Lana

### Blocks

@Mitch will be raising some PRs for blockly
@Sally will create a ticket to add a piece about mentioning devtools
(bigger idea for console: good exception messages based on the available ideas)

### Teacher training

Mitch trying out things in Manchester
Tried to build on "imagine you were teaching fundamentals", what concepts would you teach? How would you teach them? (analogy, example, etc?)
Attendance: grads + experienced teachers

Sally has a contact with someone from "Coders who teach"

### Code review

Sally wants to do some sessions on code review
Grading is cancelled, but code review is really valuable
How do we make it low effort for mentors? (so there isn’t a spread between super detailed and not done)
Buddies doing code review?

- it’s high effort for the first review (grok what the exercise is about)
- it then gets mostly ignored

Students doing code review?

- sometimes poorly informed

Ideas for getting code review to happen, how to make it valuable and useful

- students should have to modify based on review
- ship it (confirmation that it’s good)
- review is the precursor for working together

@Daniel and @Sally will work on Code Review module project for JS1
Bigger ideas can come later.

### Entry and exit criteria

Final projects already has an entry criteria (be ready to contribute to a final project)
And it needs to have an exit criteria that is clear so that people are not surprised when they are told to they need to do their own final project e.g. https://docs.google.com/document/d/1jMxqI0L7IKFENCQ8Lw-D1lhnj3c3RZI_WK808wG4YJM/edit#heading=h.8bipiccmzk3c

For other modules

- module projects -> DECIDED
- maybe a small set of "if you don’t have skill X, that’s definitely not ok"

What will we do with our entry/exit criteria? -> something to think about

### 4 week restructure

Still need to make progress on it
@Sally pay someone to do it

### TDD

Greg learnt some stuff

- the rules of engagement of TDD need practice (what am I allowed to modify when?)
- Creating exercises that incrementally build a piece of functionality would be useful (then taking that scaffolding away)
- Solving an exercise with TDD takes a really long time at first (1h+ for 4-5 tests)
- Setup can be tricky (esp for react) - or more specifically, troubleshooting if something in the setup is wrong or you tried to do it by hand

### Greg no longer available on Wednesdays

@Daniel will do a doodle

## 03-02-2022

Attendees: Ali, Greg, Sally, Daniel, Mitch

### Agenda

- Celebrating fundamentals
- Welcoming Sanyia
- Sprint planning
- Plan for 2022

### Celebrating fundamentals

- Woop! 🎉 Go Fundamentals - now published!
- Fundamentals training starting on 12th Match for S African volunteers
- Fundamentals starts in April with South Africa Class 2

### Plan 2022

- Improve student tracking
- Further empowerment of module teams
- Cross module threads: code review, TDD, problem solving
- Problem solving
- Integration with PD
- Working on students with code reviews
- Module contracts - Well defined prequisites and outcomes for any module on the course
-
- Iterate on module template for Code Your Future
- Succession planning: learning how to hand things over in a sustainable way 🤔

## Module teams & expectations

- Work needed to ensure that module teams are meeting regularly
- Getting alums to attend syllabus meetings - really valued input as they've just done the courses
- Make teams more accountable on Slack - have bots that remind about meetings in public channels ?
- Someone could join JS2 to support them with getting through some tasks
- Do we need syllabus team folks to join the module teams to get them going ( time limited )

### Welcoming Sanyia

- We welcome Sanyia to the Syllabus Team
- Software Engineer at Deliveroo Started at CYF 2 years ago
- Some node module changes proposals ( Barath / Sanyia ) - Use of wordle in Lesson 3 of the Node module

#### Re the proposed Node module changes

- Build a CLI tool in Node - fun standalone activity written in Node ( independent of `http` and network requests ) ?
- Possibly add the activity to the 1st lesson in Node

### Sprint planning

- [Syllabus project board](https://github.com/CodeYourFuture/syllabus/projects/1) to undergo a lot of trimming down and breaking out into module boards
- Create a wordle exercise for Node ( Sanyia )
- [Blockly project board](https://github.com/CodeYourFuture/fundamentals-blockly/projects/1) updated with new tasks

### S Africa mentor training

- Greg to lead with support from Mitch 12 March
- Mention pedagogic techniques in remote environment: no slides, cold calling, screen sharing, live code demos etc ...

### ❗**Actions**

- ~~(Daniel) Create a private channel for more private discussions~~ See #cyf-syllabus-tech-private
- (Daniel) Move 90% of tickets off the syllabus planning board
- (Ali) Create module contract document
- (Greg) Work out objectives for more TDD content in the future

## 2022-02-16

Attendees: Ali, Greg, Sally, Daniel

- Fundamentals
  - What is left to do
    - Guidance
    - Copy across pair programming exercise from original fundamentals
      - [Link](https://fundamentals.codeyourfuture.io/lessons/lesson-2#paired-programming)
      - Where to fit it? Week 2
      - ACTION: Greg to figure out what needs to get done in blockly
  - Blockly
    - Now hosted [here](https://blocks.codeyourfuture.io/)
    - Needs a quick intro in the syllabus
    - React-ifying
      - Ali made a start on a Blockly-React integration
      - But the next bit of work is probably to work on tabs etc
  - Looks like first fundamentals will be in April (probably)
- What are we doing in Edinburgh?
  - Fill in missing gaps for fundamentals
  - Hackathon on Blockly
  - Priorities for Syllabus

## 2022-02-02

### Present

Sally McGrath, Mitch Lloyd, Daniel Wagner-Hall, Greg Dyke, Ali Smith, Elizabeth Zeddie Lawal

### Minutes

- Meeting Elizabeth
  - New Head of PD & WM Lead
  - Starting in March
  - Vision
    - 360 PD
    - Local PD framework that can be implemented on a global level
  - 3 month plan outline
    - PD Content creation/consolidation
      - Develop bank of resources
      - Aim to mirror some of the writing style of Edu syllabus
      - Experiment & verify in WM
    - Look at PD structure
      - Content, Employability, Pastoral
    - Looking at how to showcase employability skills
      - How can we showcase our trainees
      - What are employers looking for and how can we embed that into trainees
      - Can we support employers to changing hiring practices (e.g. with DEI initiatives)
    - Understanding trainees with data
  - Wanting to be a fly on the wall - learn from syllabus team
  - Discussed how we want to work together more
    - It's hard to split topics across PD/Tech Edu
    - Tech Edu don't know what the PD syllabus is!
- Scotland trip
  - To coincide with GLA demo day: 26th - 27th Feb
  - Daniel is moving, but happy for us to go ahead without us
  - Mitch was a yes (I think)
  - Sally is going anyway
  - Let's set some goals in the week & get GLA folks involved
- Fundamentals training for Cape Town
  - Lana was worried - messaging Greg & Sally
  - We could talk to them and walk them through it
    - Give specific guidance & support
  - Sally thinks they're not starting for a couple of months
    - Hope to start on 5th March
  - Sally has proposed metrics for classes
    - So we don't overstretch ourselves
    - Sally has talked to some schools about reaching targets before starting new class
      - But it's ultimately up to the volunteers
    - Oridinarily Cape Town would start new fundamentals first
  - Try to capture some notes - that we could use as a basis for committed volunteer notes
- Supporting schools with employment
  - Cape Town have access to Barny
  - Sally gave advice to keep working on projects etc
  - Ali's direct experience: grads don't have lots of useful stuff on their Github
    - [Graduate module](https://module-graduates.codeyourfuture.io/) is supposed to help with this
      - But who's responsibility is this?
      - Idea for improvement: after working on a group project, make sure they fork it onto their account, so that it shows up in the list of repos
  - Some grads need further work before they're employable
- WM update
  - Have now accepted the contract
  -
  - Accepting ~100 trainees

## 2022-01-19

### Present

Greg Dyke, Sally McGrath, Ali Smith, Mitchell Lloyd, Daniel Wagner-Hall, Sanyia Saidova

### Minutes

- **Fundamentals syllabus outline** is up - holes to fill
  - Blockly is currently just TODOs - up to Greg what that should look like.
  - Ship it - needs filling in
    - The first one we should do in class (because they'll get stuck and need help), after that can be more flexible about shipping happening as coursework
  - Prayers
    - Main problem is prayers in the afternoon
    - The times can change - so we can't specify breaks globally
    - It's important for someone running classes to distribute a schedule (to trainees & volunteers) for the day beforehand so that any issues can be addressed
  - Sally has told coordinators this [I think]
  - Not sure who's going to be the first class to do new fundamentals - South Africa and West Midlands are contenders, but unsure exactly when either will start their next course.
    - SA are doing their next course pure online.
    - We should probably be on-hand to help out with the first run or two (particularly for the Blockly stuff). Would be good to at least show up to a planning session before someone runs it.
- **Node syllabus**: Sanyia has [a PR](https://github.com/CodeYourFuture/syllabus/pull/363) open - tl;dr is to have trainees who haven't got the pre-work to use the Heroku Walkthrough from a video, we should merge this PR in the short term while we consider bigger long-term changes.
  - Not sure if it's over-fitting to the West Midlands session. Do others see the same issues? Some trainees didn't have pre-work set up (e.g. glitch albums, heroku projects), and didn't have Heroku context/background.
    - Scotland just didn't bother teaching Heroku because it's so fiddly and would be confusing.
    - Not sure Glitch is a great fit for CYF - it's yet another surface, it avoids IDEs and CLIs and so on.
    - Long-term, we want a unified frontend / backend platform for "ship it" theme - rationalise onto consistent platforms trainees build up experience with.
    - Short-term: Sanyia has found a good video that introduces Heroku, which may help get people started.
      - Maybe in groups have TA share video and students code along.
      - Maybe this could be prep coursework, but that would take away ~60 minutes of content we'd need to replace in-class.
  - Scotland found trainees didn't know what HTTP was (e.g. request types, paths, etc), so ended up filling a lot of content with that.
    - Also had trainees write a React app and then write an API to back it - ended up doing a pretty big rewrite, but covered most of the syllabus minus Heroku. Filled the time pretty well.
    - West Midlands class seemed to have a decent understanding of HTTP.
      - Not sure where they got this knowledge - probably just someone teaching well, as it's not really good enough anywhere in the syllabus.
    - Scotland did a fairly big rewrite on the fly - may be worth folding a lot of it in.
  - A lot of time was spent teaching things like how to maintain a git repository - branches, etc.
  - Alternative could be to set up a repo that they all use which we maintain - would keep everyone doing the same, but may take away some of the understanding of how things fit together and what the stages are.
    - Is the Node module the right place to be following Heroku guides, or can we move this somewhere else?
    - One of the really nice things about the current set-up is that it gives rise to a lots of opportunities for discussion.
  - Thoughts on the City Guide / Paired Progamming piece (one person writes frontend, one writes backend, fit them together)
    - Probably the wrong time for it - the person doing React will probably not take as much from it (and may not remember React very well - we should also put in some work to make sure they _don't_ forget React at the end of the module).
      - In the long term, we should probably have them working on frontend and backend in concert to keep them practiced at it (e.g. quote generator, to do list, etc).
      - They'd also forgotten create-react-app, and also didn't know how to integrate a frontend and a backend in one repo.
        - Greg has a starter repo we should look at and clean up.
    - Separating who implements each side isn't a great iterative development experience - more likely to lead to significant integration issues.
    - Maybe we should enforce "swarm on both".
  - We got past feedback from the SQL module leads that people weren't particularly comfortable with Express.
    - This WM class don't seem to have have this same issue.
    - Enough strong students in each breakout group meant people could work things out decently.
      - Unclear whether the weaker students could do it by themselves.
- **[Learning Lab](https://github.com/CodeYourFuture/learning-lab)**
  - Brief: Create a module project for JS2, introduce concepts of working in an agile team.
    - Introduce some of the key roles, some of the dialogues these roles may have.
    - Could maybe extend to have slackbots playing some of these roles.
    - Content is fairly simple, but questions around how we roll it out.
  - [Live demo]
    - Have set up a "Start a project" platform as a GitHub app.
    - UI similar to GitHub Learning Lab, but GitHub's is a set of very step-by-step recipes - this is much more high-level "do a task, you work it out how".
    - Step 1: Install Malachi Bot. Automatically files an issue introducing Malachi as the Product Owner.
  - When's this for?
    - Slotting in around the content of JS2, probably mostly as an additional homework track.
  - If we end up reordering JS1/JS2 content, how much of an issue will that cause?
    - Let's treat this like a prototype and see how it goes.
    - Split between two "tracks" - project managementy stuff, and "the actual code in the project being managed" stuff - the "actual code" part is customisable to changes, but the framework is really generic.
  - London start JS2 on Saturday - have two days to get something production ready.
  - Long-term, can hopefully introduce consistent concepts across the entire course (e.g. seem bots in same roles).
  - A lot of this content feels very PD-ish (though definitely with an Edu leaning), how are we engaging them?
    - The 4-week shift will hopefully make PD and Edu around each other more, and make it easier to pick up this kind of collaboration.
  - JS2 maybe should be solo, but how will we be turning these kind of things into group projects in the future?
    - We'll iterate to work it out.
  - Tracking trainee progress
    - Currently entirely stateless, but we should start tracking more analytics.
  - Informally presenting at EdinburghJS tomorrow - Daniel will share link to talk.
- **Blockly**
  - Have gathered feedback - most just needs actioning, some needs more discussion.
  - ID vs CSS selectors: Let's just use IDs.
    - Had been thinking CSS selectors because it's useful spaced repetition.
    - Exercises and projects don't actually use CSS selectors in any interesting ways. Do we want to use them anyway?
    - CSS is probably overkill. Let's just use IDs.
    - Some people also push the idea that you should only use IDs for interacting with elements from JS.
    - Also, people can build more on Blockly in the future if we need - don't need to try to solve all problems in the first iteration of one module.
  - Generated code - how close should we keep to the styles we teach (e.g. arrow functions vs "function" functions)?
    - Using the function keyword may be useful because it's self-documenting? Let's do it.
  - Variables
    - Originally tried minimising use of variables.
    - Actually motivating variables well is kind of hard.
    - When doing a to do list, can't do multiple DOM-context things manipulating values (e.g. an "at start" and "on click") without variables.
    - Daniel to follow up with Greg offline about the second variables
    - How many of the projects actually need variables? If not many, maybe we can just strip them all the way back.
      - Will check.
      - A loop variable is something more than that - more the language storing something for you rather than you storing something.
  - What are the final exercises actually going to be, and do they really need to be as complex (particularly with arrays) as they currently are?
    - Greg willl look and consider.
  - What about duplication between Code.org and blockly?
    - Code.org does control flow stuff pretty well, but there's a small subset we actually need.
    - Probably focus as much in Blockly rather than Code.org because Code.org is much nicer and we don't want them getting frustrated.
      - Also want them to have as much TA support when starting off.
      - Can we upstream this stuff to Code.org in the long-term? Would be great to get more people using it, more people maintaining it, and get the Code.org polish on it.
        - Code.org seems very fixated on things like moving sprites around on screen, not sure why there isn't much like what we're currently doing.
  - Maintenance plan?
    - Move custom JS to a React app
    - Blockly is also a bit niche.
  - Tasks to do?
    - Greg to triage into must/nice/wishlist, and what's best for Greg vs someone else to do.

### Action items

- Sanyia: Make minor edits to Node week 3 PR and merge.
- Daniel Wagner-Hall: Follow up with Greg about variables Blockly question.
- Greg: Triage Blockly issues into must/nice/wishlist, and claim ones that Greg should probably be the person to do.
- Daniel Grant: Share EdinburghJS link in channel.
- Daniel Grant: Make sure learning lab stuff gets deployed (via Pedro).
- Sally: Organise a call for everyone to fill out Fundamentals GitHub repo over the next few weeks.

## 05/01/21

### Present

Ali, Mitch, Chris, Sally, Greg

### Minutes

- Fundamentals
  - Sally worked out the timings (incl PD things): https://docs.google.com/spreadsheets/d/1nKm9cwfYzyPGt2W_P9GQPPavmnD5zFEeTTQTdOgpRVg/edit#gid=0
  - Red is immovable stuff, otherwise divided into planned work
  - Blockly
    - Greg's planned schedule
      - Week 1 - Code.org, intro blockly, intro user stories
      - Week 2 - ? [missed this, sorry]
      - Week 3 - homework consolidation, delivery (reduced the amount of time to complete)
    - Still need to review v4
      - https://laughing-goldberg-6b25f5.netlify.app/
    - Code is still on Greg's github - wants to transfer to CYF github
      - Sally volunteered to make it look nice :)
    - Greg has worked with Neill to develop the content
    - Idea from SA
      - Have a blank block editor - can be done via intro page
    - Project
      - Sally brought up idea of a "shopping cart" - scaffolded out by us
        - This might be constrained/unrealistic - would be dummy buttons
      - Greg was thinking about the landing pages will all be done
        - We need to nail down what this actually looks like - SA need to have time to build this out
      - Brainstorm some ideas for user stories to update a personal homepage
        - As a visitor to your home page, I want to leave a comment
    - Estimation exercise idea
      - Give user story, then make guess at number of blocks (or time?) needed to implement this, then actually implement it
      - Discuss the disparity between guess and reality
      - Learning outcome: estimation is hard
      - Learning outcome: how to "cut your losses" on a particular impl if it becomes complex
    - Delivery
      - Introduced early - drag/drop onto Netlify
      - No need to make it more complicated
      - Just reduce the amount of time to complete this over the 3 weeks
    - Greg's Blockly principles:
      - let students write all their own code -> they feel greater ownership
      - indexing into arrays (and tracking variables with indexes, and for loops) is a complexity to be avoided at this stage -> everything is with push, pop and forEach
      - referring to "arrays" (rather than "lists" recommended by blockly), to avoid the confusion of lists vs html lists.
      - Scaffolding that fades:
        - pressing run
        - which specific blocks to use and where to find them
        - detailed step by step (only for introducing new blocks/concepts)
      - problem solving. Some exercises deliberately look into iterative coding, rather than coding everything at once
        - Lists of links
        - Arrays and html lists
      - Static html vs creation with blocks - main reasoning is that adding event listeners is cleaner against elements in there from the start (otherwise you get very deep embedding)
      - Generated code: it's readable and at some point it's worth taking a look at it (and definitely worth revisiting during JS1 or JS2)
        notes
      - Some missing functionality is a bit arbitrary
        - no string concat
        - the target element inside event listeners isn't directly available
        - records (could use arrays within arrays rather than multiple arrays)
      - "At the start" does nothing except act as a container
  - Next starting class would be South Africa
    - Maybe: 29th Jan - Sally advised against this, so probably will be pushed back
- Changes to JS modules
  - Moving to 4 week modules, but PD is spread out through the modules. Which means that the exercises need to move to a week 4 repo
  - We need to review the PRs before Sat, so Barath can teach in London
    - Suggested alternative strategy of moving changes to a fork
      - So that we can keep syllabus, exercises, solutions, etc in lockstep
      - Chris to follow up with Barath about doing this
  - Let's try to focus on just moving the content across repos, we can follow up on updating/adding/removing exercises
    - We don't really have a lot of capacity to review large changes
  - If we're happy with the change then we need to make sure we've updated all the appropriate pages for exercises spreading out
    - Sally can ask Dom about doing this
- Intro to Digital
  - Sally read a bunch of trainee's code
  - One thing that came out of this: "what is frontend"
    - Discussion of composition of components - there's a piece of the React module which isn't really tied to React directly. Can we move this forward to e.g. HTML/CSS?
      - But this is out-of-scope for this piece of work
  - Sally put together: https://github.com/CodeYourFuture/CYF-Sass-In-React to discuss CSS theming/good practice
- Syllabus is on `master` as default branch
  - This is the exception - most other CYF repos use `main`
  - Let's move to `main`

### Actions

- All to develop 4 user stories for a Blockly "project"
- All to review Blockly v4
- Tell Nirmeet about changes to JS2 - spreading out of exercises
- Chris to chase up Barath about changes to JS1
- Move syllabus repo to `main` default branch

## 08/12/21

### Present

Ali, Daniel, Sally, Greg

### Minutes

- Update on Fundamentals
  - [Matrix spreadsheet](https://docs.google.com/spreadsheets/d/1CXeqfyWLMutJGTn1IkdBjv5I4Zh4a2FNlhTJyAtmbY4/edit#gid=0)
  - Graduation criteria
    - Was struggling without knowledge of specifics (e.g. exercises). Hopefully can now make more progress on this
      - However Ali (and we think Chris) are very busy at the moment
    - Need to get PD involved
      - Can mandate "testable" criteria
  - Blockly
    - Greg might need some support - since Mitch might not be available
      - Technical work is getting there
      - Need to work on exercise progression
      - Ali may have some time next week
      - Suggestion: Neill - Greg will ask him
    - Next steps
      - Needs some polishing in terms of the UI
        - What is the done state? Can't be frustrating, but doesn't need to look "professional"
          - No point in super polishing now, since we'll want to iterate on it after first round of trainees using it
        - How much work is there left to get there?
      - Greg wants to get updated exercises ready for next Wednesday
        - Week after we'll be in a better position to come up with a list of tasks - can prioritise from there
  - Requirements/Iteration/Delivery
    - Sally hoping to have a draft ready by next week
  - We think it's on track 🤞
- Daniel Grant's JS2 project
  - Feel free to review
  - Steer towards to a structure replicable in other modules
- TDD workshop
  - Sally has arranged a workshop for Scot5 & NW4
- Cover letters
  - Ali has a job opening for CYF grads
    - Will give honest feedback based on interviews
  - Need a cover letter
    - This is a blocker for many trainees, we think because cover letter templates online often don't line up with trainee's experiences
    - Idea: can we create our own templates - something for PD

## 24/11/21

### Present

Sally, Chris, Greg, Daniel

### Minutes

- Previous action items
  - Chris: Running through [draft Fundamentals Learning Objectives](https://docs.google.com/document/d/1XN53TuLx9uY9mcP-Xfk5JRNqnFHl94UgzZcmsqIPoSs/edit)
    - Largely removed all the stuff that's unmeasurable, kept the stuff that seemed very important, and added new pieces based on our discussions.
    - Left some stuff which definitely needs PD input.
    - Need to think about how we are going to get input from the cities. Probably start sharing now-ish?
  - Daniel: "Requirements" week content. Currently blocked on: What is the multi-week project going to be?
    - Project thoughts:
      - Maybe similar to a personal home page, but with some different content?
      - Needs to be a website which _does_ something.
      - Maybe about a product? (Can be real or fake product)
      - Some kind of online store where you can select a product and add it to a shopping cart (with the help of blockly)?
        - Just: View product(s), add product to cart. Very light shopping cart (basically: two lists - available products, and added products)
    - Mostly need to focus on Week 1 (Requirements) and Week 3 (Ship it) - Iteration is basically just "keep going".
    - Need to give some thought to coursework, too.
    - End-points of each lesson is "Make sure you've done this week's focus at least once, and keep going"
      - i.e. End of Ship It class they need to have shipped _something_ to Netlify (because people will need hand-holding), and coursework is likely to be "Do more and make sure it's shipped".
  - What needs doing?
    - Filling in a few TODOs in the first session.
    - Put together an intro to the project session.
  - People seem to be enjoying Scrimba - maybe we should set more.
    - Scrimba is roughly: Kahn Academy, but you can pause the video, edit the code they're writing, and run it. Interface is magic, and the trainees really like it.
    - We may have an in for a creator account - Chris will coordinate with Sally.
- Greg: Data sturcture abstractions for Blockly
  - Beginners often struggle with classic `for` loops (need to manage a lot of concepts). `while` loops are easier to get started, and upgrading from `while` to `for` generally makes some sense.
  - Put together a linked list implementation using `while` loops.
  - Naming is hard:
    - Calling it a list is tricky because conflicts with the concept of an HTML list.
    - Calling it an array is tricky - doesn't do indexes and such, and keeps some state.
    - `forEach` is maybe doable, and would be compatible with arrays, but most exercises involve previous/next.
    - Considered a circular data structure (works well for carousels, doesn't work so well with e.g. lists of stories).
  - Use-cases: Problems on https://laughing-goldberg-6b25f5.netlify.app/
  - Probably just use a stack (or pair of stacks)? Push/pop make sense and carry forwards to arrays, isEmpty makes sense.
- Getting stuff done
  - Sally will at some point just clear her calendar and get a bunch of it done (but can't do it all).
  - Get a spreadsheet set up for how we're going to time-box each of the topics we've discussed into a syllabus. Split into what just needs writing and what needs brainstorming.
- Daniel Grant is writing a module project for JS2. Idea is very product-focused.
  - Introduce the roles of a typical agile team (product owner, scrum master, tech lead, developer, etc) in a lightweight manner (seeding ideas they'll better understand via PD and in final projects).
  - Via a simulation of a project, with different roles prompting at different times.
  - First implementation: Notes in the syllabus. Future implementation: a conversational slack-bot.
    - Suggestion: Write out ~50 markdown files and experiment with them, not a slack bot in an MVP.
- Dom Vineyard is thinking about a JS1 module project. May also involve a slack bot.
  - (Also has a background idea to integrate code review into slack with auto-completable common suggestions).
- Greg is scheduling a Node chat with Kerim and Sonia - Greg will be the syllabus point of contact there.
- JS1 team recruiting: No progress from Daniel, should hand back to someone else.
- Dom put together a technical assessments proof of concept
  - One repo which has the solution in, tag with with magic comments, and pass it through a build step which removes the solution code and replaces it with a TODO comment.
  - Massive job, could be hassle for Code Your Future, but we could try to do it at some point.
    - We have a bunch of different styles of problem - unclear whether "just comment out some code" is a sophisticated enough model for our exercises.

### Action items

- Greg: Prepare post to share new Fundamentals Learning Objectives with the cities. Find and tag all the programme managers: @cyf-proms.
- Sally: Push forwards Requirements sessions
- Greg + Daniel: Hold brainstorming session for things we need to do.
- Sally: Facilitate Greg + Chris to give feedback on Daniel Grant's work in progress.

## 07/10/21

### Present

Sally, Daniel, Ali, Chris

### Minutes

- Greg to continue to work on Blockly
- Several grants have come through so we may have the ability to spend on the Syllabus team (early next year)
- Fundamentals
  - Greg to continue to work on Blockly
  - Syllabus Team Goals: https://docs.google.com/document/d/1fc-c9NZQPtBieftrvTXj3yiwU0HLBZ68bnagHja1NsE/edit
  - London 8 Results
    - Both tests that were run were good successes - [Blockers](https://fundamentals.codeyourfuture.io/lessons/lesson-1#blockers) and Shipping a Website
    - These have been merged into the current syllabus
    - The [instructions](https://fundamentals.codeyourfuture.io/teacher-resources/instructor-notes-1#solving-problems-workshop) were very helpful for Blockers
  - Exit Criteria
    - Could we provide a buffet of graduate criteria that volunteers can pick from?
    - Could we use a self assessment for the students>
    - Actions Raised
  - PD Content
    - How much time do we need for PD?
    - This should be interleaved as we're planning to do for HTML/CSS
- HTML/CSS (#LDN8 Plan)
  - Lucy (#LDN8 Teacher ) to include netlify
  - Attempt for interleaved PD through this module
    - Module extended to four weeks with 90 mins per day for PD
- Module Gardeners
  - Ongoing search happening [here](https://docs.google.com/document/d/1tukaHBCMs3dHdy8SXsUPcBzE7qQLwzjqMx4I9mOWvVk/edit#)

### Actions

- Chris: Ticket for KPIs for Fundamentals to be written
- Chris + Ali: Over the next two weeks, work on the KPIs for Fundamentals
- Daniel: Work on skeleton for two 90 minute sessions
- Greg: Continue to work on Blockly

## 13/10/2021

### Present

Sally, Mitch, Daniel

### Minutes

Mitch is running the “intro to coding thinking” course at Cornerstone starting late October - 3 sessions, probably mostly offline.

Sally’s going to be out of the country for ~November

Sally hacked together a trainee tracker. Has also promised Candy she’ll hack together a PD tracker.

- Seeking our input: Put some milestones in the course (clearly communicated up-front) where we explicitly make clear to trainees where we think they are.
  - Not intended to be blockers, just status check-ins.
  - Except end of JS3 - if the work hasn’t been done, won’t progress to final projects.
- Most of the people Sally’s been working with are surprised by their status.
- One milestone check-in led to a good conversation about someone who'd done lots of work but hadn't shared it. Great outcome!
- NW folks are way ahead of the milestones being set.
- Need to make sure we have “here’s how we’re going to enable you to move forwards” paths for folks who are falling behind milestones.
- ["Next steps" outcomes Sally has collected](https://docs.google.com/document/d/1tukaHBCMs3dHdy8SXsUPcBzE7qQLwzjqMx4I9mOWvVk/edit)
  - These conversations should start happening around JS3 to give people time to make change if they need/want.
- QA: Don’t want to push people too strongly towards it because it can be easy to get pigeonholed in and hard to get out of if that’s not what you want.
  - Currently have no one wanting to go into QA anyway
- A few folks did some extra learning before moving on to final projects, and joined another class's final projects - this went really well (both for the folks who took extra time, and for the groups they joined).

PD team update

- Approached Sally to ask about changing the whole syllabus
- Want each tech module to be 4 weeks - get rid of PD weeks.
- Want 90 minutes in every live session to do a PD session.
- PD volunteered would need to be present for some of every class, and work more closely with tech volunteers.
- Would want to theme PD work to support the tech focus of the week.
- Stretching 3x 4 hour sessions into 4x 3 hour sessions sounds fine.
- Questions around timings and consistency for volunteer engagement.
  - Probably want the PD session to be start or end of the day to avoid both tech and PD volunteers getting a bunch of extra down-time in their weeks.

Sally: Please review my pull requests!

Teacher Training

- Mitch volunteered to do some teacher training
- Aim is to diversify our teachers
- Was aiming for emphasis to be on React and Node, but interested seemed to be more general
- Do we have any resources?
  - Yes! Sally will share Chris’s slides and some other stuff.
  - https://teachertraining.codeyourfuture.io/roles/lead-teacher/teaching-a-session-at-cyf
- Mitch will push forwards!

Mitch has opened up a PR for the to do list tests - please take a look!

Signing up to help form module gardening teams

- [Organising doc](https://docs.google.com/document/d/1tukaHBCMs3dHdy8SXsUPcBzE7qQLwzjqMx4I9mOWvVk/edit)
- Goals:
  - Get feedback (retros after classes)
  - Act on feedback (file bugs, fix bugs - small changes)
  - NO REWRITES. Come talk to syllabus team about things in general, and with big ideas. But NO REWRITES.

## 29/09/2021

### Present

Sally, Chris, Greg, Ali

### Actions

- All: volunteer for a module
- Chair for next time: Put off to next time

### Minutes

Discuss way of working (alternating discussion and planning)

- Put off to next time

Module teams

- Each module team should be built up by one of us
- action for all: volunteer for a module
- Greg: could js1-3 be thought of as one module (see discussion about themes in JS modules)
- All: discussed the value of thinking of them as 3 modules and agreed that for various reasons, it's positive to have 3 modules (and 3 module gardeners)

Blockly

- What are some of the khan academy criticisms this solves? Something they can understand and carry forward, something they can ship as a product
- What do we "lose" from khan academy? Videos (we could write ours). Is is "as fun". (Maybe yes, because "small god feel")

Module systems

- Yes, we should break out bits (filesystem to where we do terminal? npm to where we first introduce npm install?)
- Can we come to a comfortable solution for one module system vs an other? (probably within CYF syllabus, we can just say "use this syntax here, use the other syntax there")
- where do we put it? import for react, require for node. Require for tests? but how do we write nicely testable code that also runs in the browser without a build system?

Student tracker

- DEMO of how it works
- Pro: lots of our best volunteers are edu buddies who spend time getting data that could be automated
- Milestones? What milestones are needed?
- Google classrooms API is not connected through
- Would be nice to automate attendance (slackbot?)
- Rate limiting of github API -> need to authenticate?
- Could also pipe this into some notifications to buddies?
- Not clear how we would "devops" this, beyond copy pasting into "prod" (could maybe write an application?)

## 01/09/2021

### Present

Daniel, Chris, Sally, Mitchell, Greg

### Minutes

- We all did our actions this week!
- Greg doesn't know who New Order are (shockingly)
  - Sally and Mitch and everyone in Manchester to attend their upcoming gig
- Meet Up
  - End of September sounds good
  - Most likely down in London
  - **Action**: Make a doodle
- Big Changes Doc
  - We've all looked over it and have generally good feelings about it (or atleast greg did!)
  - Fundamentals - we've got months to make this change
  - Could we work on the badge schema sooner?
    - This seems like a smaller job - so yes
  - **Action**: Design a Schema for a badge (Sally)
  - **Action**: Setup Miro for brainstorming Fundamentals ideas
    - To be discussed next week at this meeting
- London Feedback on the non-traditional route to Final Projects
  - This is working on a very small scale
    - But probably scale beyond this will be very difficult
  - This is a good signal
- Tech Projects
  - Could we think about running a hackathon around some of these projects?
  - They're fairly disfunctional right now so could be improved
    - As in - students could get more out of it, we could get more out of it

### Actions

- **Action**: Make a doodle for when to meet up
- **Action**: Design a Schema for a badge (Sally)
- **Action**: Setup Miro for brainstorming Fundamentals ideas
  - To be discussed next week at this meeting

## 18/08/2021

### Present

Sally, Ali, Daniel, Richard Darby

### Minutes

Guest: Richard Darby in Glasgow - they just finished JS2.

#### Action items from last time

- GitHub Actions
  - They landed!
  - Plan is for buddies to only pay attention to coursework if it's late or a trainee reaches out for help.
  - Coursework Tracker team are sprinting at the moment - goal is to notify buddies if coursework is late.
- Chris to Write a brief for the "Add to Google Classroom" button from the Syllabus - rolling over to next week.

#### What do we teach and why?

[Doc being discussed](https://docs.google.com/document/d/1Npj5z_KbXVDyz-cIjFF2UJ_c-jK9j9mqU4xlyOYLpuk/edit).

Purpose of doc: Communicating a very top-level strategy for what we teach and why we teach those things, and why we don't teach other things. So that mentors/buddies/teachers/... get a general gist of what we're trying to do, and help us decide whether to include things.

Tried to keep it very brief and concise. Tried to avoid making value judgements because don't want to spend time in fights.

##### State

Sally didn't end up mentioning anything about state.

React [has a bit about state](https://syllabus.codeyourfuture.io/react/week-2/lesson) but it's introducing both the concept of state _and_ how React does it - can we pull the general concept of state earlier in the course to make this easier to handle?

Also, we perhaps aren't setting up our trainees to be able to answer interview questions which require managing state.

##### Next steps

Daniel and Ali to make a few edits, then Sally to publish.

##### Bon code

[Bon Code](https://boncode.nl/) allow uploads of code and static analysis against coding standards. They seem eager for us to try them out.

### Sally's Big Presentation

Core problems:

- Some people who make it to the end of the course aren't equipped to become professional developers, which is what we promise them.
- Making the course shorter for WM.
- Making it easier to deliver the course in high volume in London and WM (but not assuming high volume for other schools).

Objective: Need to be able to track people's aptitudes/progress, in a way that doesn't rely on a volunteer directly assessing them, so that we can communicate progress and options to trainees. Be able to positively reframe "I enjoyed this but struggled with that" as specialisation (e.g. "become a UX designer").

Chris: Could we just raise the level required to get on the course? (May affect whether we're targeting the right people)

Hack Your Future rank their ITC graduates best to worst, interview the top 40, accept 30.

Don't want our key demographic to be pushed out by sharp elbowed and technically eligible. We'd maybe be aiming at the middle of the ranking rather than the top - the top group can probably look after themselves.

Ali: One of the original ideas was to run Fundamentals a lot more regularly, so we could more easily say "Not now" rather than "No". Designed to enable volunteers to say no.

We can talk about exits, but we need to have realistic options at those exits, otherwise we will always end up struggling to say no.

#### Course diversification

Want to create strands of achievements - people go through most of the course together, but at points split off and do different coursework to get practice with different roles in tech.

Preparing people for different roles or focuses while they're still with us, rather than doing it ad-hoc after graduation.

Currently we end up picking up trainees more based on personal connection than by open offerings, and craft course that help them (e.g. cloud - Pedro is teaching a bunch of folks cloud stuff and we ended up with 16 hired)...

There are a lot of agency, WordPress, etc jobs, particularly in Birmingham, we can push people towards which maybe aren't as prestigious as other jobs, but are perfectly fine jobs and which wouldn't require too much extra teaching.

Chris: Are we being too reactive? If we were to plan based on what jobs are available, what would we do? Go from an objective, put together a team of volunteers to put together a course and design something outcome-oriented.

We've split at least two London classes, it's probably the best outcome we could have had with them - we should be open about it and plan for it.

#### Revamping fundamentals

Trying to encompas all of the use-cases all of the different schools have.

London Class 8 starts September 25th and is going to be 66 people going through fundamentals. So unlikely to get revisions in by then. On current track, means 132 1:1 assessments!

West Midlands 4 and 5 will attempt to be two classes running simultaneously.

Manchester and Glasgow will probably be staying as-is.

Everyone agrees that getting together in class and doing the live session is what's super important.

Scotland's experience is that people go from Fundamentals into JS1 and are basically starting from scratch as if they hadn't done Fundamentals.

Original goal of Fundamentals was to get the lowest-achieving trainees up to a place where they can complete the course, without making the course any longer, and treat it like a month-long interview.

WM are going to have to get through Fundamentals in 3 weeks because of funding constraints.

200 hours of interviews (as happened in London for class 8) is unsustainable, particularly if they're too early to get good signal.

Current course is a bit painfully slide-heavy - was originally designed without slides, but PD is hard to teach off the cuff, so slide were born. The experience is also very different in different places with different teachers. Also the style of Fundamentals is hard to do in person.

##### Our new objectives in this new world

- Know what's missing from employability
- Notice missing or redundant modules
- Make sure module exit criteria map to entry criteria

##### Suggestion

3 live sessions of Fundamentals, 2 self-paced coursework tracks (which could be done over 3 weeks or a longer period). Technical (could drop), and Applied Digital Skills (PD).

In the session, have one technical project:

- Take the home page they already made in ITD.
- Learn what a user story is, and implement one
- Deploy to GitHub pages so it has a URL.

At end of Fundamentals, get badges:

- Have created a CV.
- Have sent a professional email.
- Have created a website that you can show off.

If you achieve all four badges (+ any other qualification criteria), you're on the course.

Move interviews to after Fundamentals - can only do it after getting your four badges.

#### Why do we lose people?

At interviews:

- Not having time to commit
- Really lacking language skills
- Clearly not understanding their code

After Fundamentals or in first few months of course:

- Medical
- Life change, e.g. work shifts change
- People who should realistically have never gotten onto the course but no one had the heart to turn them down

People who are successful in one area tend to be successful in all of them (e.g. turning up to class, doing homework, doing Code Wars, etc). People who miss any tend to miss most.

Hard to evaluate without them actually trying out the course. Which was originally a key motivator to Fundamentals.

##### Badges

Each badge has 3 levels. Host the badges externally somewhere.

Half a badge is creating the learning hours, guided learning hours, total qualification time.

Badges are an established standard we can lean on - integrate with things like LinkedIn.

##### Varying perspectives

CYF had a similar big discussion two years ago around who we're taking and what our objectives are.

Had a lot of push-back from people who have been through the program - for a lot of people, their objectives _weren't_ primarily to get people into jobs. A number of people whose involvement is important have very different views on objectives.

Sally: If we're telling people "Come to Code Your Future so you can get a job in tech", we need to deliver on that, or change our messaging.

For people with low self-confidence, will we end up not pushing them enough? e.g. Will we end up channelling all of the women into more ancillary roles?

##### RainBird

Company who have offered to potentially give us some computing capacity to help with our interviewing/recruiting process.

Their person is going to let Liliana unload all of her thoughts about our interviewing process and see if/how they can help.

### Action items

- Chris to Write a brief for the "Add to Google Classroom" button from the Syllabus - rolling over to next week.
- Ali: What do we teach and why?: Talk about why we don't teach classes
- Daniel: What do we teach and why?: Expand "what we don't teach" a bit - pull out of table
- Daniel: File ticket about pulling state earlier into the course.
- Schedule a session next week so Greg + Mitch can join, and walk through the assorted artifacts.
- Sally: To put together a single doc in one place for folks to give feedback.
- Everyone: Put together feedback on Sally's many produced pieces for next steps for high-level course redesigns, and specifics around badges.

## 04/08/2021

### Present

Sally, Ali, Daniel, Greg, Chris

### Minutes

- Action Points from last meeting
  - Greg, MongoDB Ticket Write Up
    - Push back 1 month
  - Chris, Ticket plan for JS3 Proj
    - Done
  - Chris, Coursework Update thingy
    - Done
- Tender
  - Has been submitted
  - We've aimed to have everything in there be good for CYF
  - Compromise on the length of the course
    - Max was 24 weeks
    - Now the course "officially" starts after JS3
  - Fundamentals convertion to a self-paced course
    - We'd lose
      - Students get know each other
      - Students getting to know mentors
      - 121 assessments
        - Was originally the core of the idea
      - Team building? Community?
      - CYF getting to know the students e.g. attendence, punctuality
      - The chance to remove people from the course
    - We'd gain
      - Less of an odd gap between Fundamentals and JS1
    - We want to gain
      - "I am a tiny god"
    - Would this become an Intro To Coding 2?
  - HTML/CSS/JS Combination & Reword
    - See Sally for Notes
  - How does JS1 and Fundamentals overlap?
    - Could we make better use of this time?
    - nb: functions - we teach twice and some (lots) of students still don't get it
  - Separate pathways (this money comes from the tender)
    - Cyber - requires money and qulaificiations so may be lower priority
    - Product - currently doing adhoc.
- Github Actions
  - Seem to be working well!
  - Just need more review on it
  - What happens if we want
- Classroom API
  - Could we integrate it to the syllabus to automate posting
- Live Code Blocks vs Codesandbox
  - Which do we want?
  - CSB is used in React
  - Leaning towards Codesandbox

### Actions

- Daniel - To do more work on Github Actions work
- Chris - Write a brief for the "Add to Google Classroom" button from the Syllabus

## 2021-07-21

### Present

Ali, Sally, Mitchell, Chris, Greg

### Notes

- Codility
  - Agreed on a few assessments, based on a few that Ali found
  - Waiting on the city coordinators to tell people about it, reduce the surprise
  - Sally got access to their tests repo, has downloaded a copy
    - We can use this as a basis for writing our own tests, and potentially move platforms if wanted
  - Integration with Google Classroom
    - Sally have been in talks with them about a number of things
    - Fairly unlikely
- Crucial stages for giving feedback to trainees
  - End of JS2-1 - end of JS syntax
  - End of JS3 - end of JS in the browser
  - End of React - last point at which we can fork
- Optional coursework
  - Marking optional coursework as "stretch" - Sally did this
  - Identifying most important coursework - this is a job for module gardener
- Testing
  - Discussed in a follow up meeting. Actions:
    - Where are we?
      - Most of js1 and js2 done
      - A few outstanding PRs
    - JS3
      - How do we test the JS3 TV Show DOM Project
      - Filter/Search could be a nice standalone component
      - Can we reduce the amount of duplicated code that student write?
        - Students currently write one massive function
        - DRY?
    - React
      - Jest makes it quite easy to write tests for React
        - JSDom
        - React Testing Library
    - Actions
      - Give the TV Show project more framework so that it can be easier to test (e.g. Separate some business and dom logic)
      - Write Github Action for showing if the tests are passing on a students PRs
      - Write up issue about teaching require/import module dependencies
  - TV show project needs more work, so it's easier to test
  - Should we test React, Node?
    - Need to figure out the testing frameworks etc for this
    - Trainees should probably be writing their own tests?
      - Might need lesson time to teach react-testing-library, etc
      - Possible this could be done in a coursework (written) lesson
  - ITC testing
    - Sally put together a test suite ITC projects: https://codepen.io/sallymcgrath/pen/PommVwg
    - Initial concerns about wall of red, but have some trainees signed up to test. We'll see what happens
      - Assertions could be a bit more descriptive - ideal would be "tried to find X element in the DOM but could not find it"
- Tech interview workshop
  - Ali gave some feedback, positive
    - There's opportunities to talk about take-home tests - but probably can be tweaked to cover this
- Funding source
  - They have changed the terms of the tender
    - Max course length of 24 weeks
    - Minimum of 100 learners
      - Possible to partner with others, but will only do this if we get something out of it
    - Have to be employed within 90 days
  - CYF won't change our core demographic to keep the money
  - Reasons to do this
    - Diversify into cybersecurity & cloud
      - Lots of jobs in ops/IT admin roles - both in big & small companies
      - Understanding of security is important to get these roles
        - Challenges
          - We don't have expertise in this
            - Can buy in a course, but we don't have anyone to deliver it
          - Would have to find more volunteers - can spend some of the money to do this
            - Outreach - going to meetups etc
      - Another cybersecurity bootcamp: https://www.capslock.ac/
      - Potential starting point for cybersecurity knowledge: https://www.cybok.org/knowledgebase/
      - A lot of cloud roles require paid for certs (e.g. AWS, Microsoft)
        - Companies (e.g. Capgemini) may be willing to pay for the cert (after we've trained them up)
    - Possibility of a data science course
      - Challenges
        - Trainees need to be strong in maths
- Github Sponsors
  - Sally signed us up for this
  - Got approved for it today! You can sponsor the syllabus!
- Changes to template repo
  - Chris says there's a way of pushing down changes to the [parent template repo](https://github.com/CodeYourFuture/CYF-Coursework-Template) to all the "child" repos

### Actions

- Greg to write on the [Mongo archive ticket](https://github.com/CodeYourFuture/syllabus/issues/296) all the things that need to be done
- Chris to ticket the plan for changes to TV show project (and potentially other "free-form project")
- Chris to update the coursework template

## 2021-07-07

### Present

Sally, Chris, Greg, Ali, Daniel, Philip Fol

### Actions:

- Everyone: Take a look at Codility, get a feel, form opinions.
- Chris: Create a Codility test for the end of JS2 Week 1.
- Think about what are our crucial stages for getting feedback on how trainees are doing.
- Sally: Work out how to convey (probably to buddies, maybe more broadly too) that we teach somewhat functional programming, and accordingly don't lean much into things like OOP.
- Sally: Try to re-brand optional coursework exercises. Maybe as "stretch", or maybe just re-designate them as all mandatory.
  - Sally: Also identify for buddles what the most important concept/exercise is the most important each week.
- Chris: Arrange a separate testing-focused meeting. Some agenda items:
  - Module systems.
  - Do we want tests for React + Node + DBs?
  - GitHub Actions to run tests.
- Review [Chris's PR](https://github.com/CodeYourFuture/JavaScript-Core-2-Coursework-Week2/pull/75)
- Take a look at [Daniel's draft tech interview workshop](https://github.com/CodeYourFuture/syllabus/pull/293)
- Follow up with Codility to see if they can integrate with Google Classroom or similar for sending out assessments to groups.

### Catch-up from last time

- Continue TDD - on-going
- Think about exit criteria

### Membership

Welcome Philip Fol! Matthew will be stepping back for a bit.

### Codility

We're having a partnership with Codility - tech test platform (we're pretty sure they're giving it to us for free).

Codility is a system for screening out people who can't code. Target is filtering away the people who can't code from thousands of candidates. That isn't exactly our aim.

Had a sales call - Sally has a recording if anyone's interested, but it's just a tour of the interface.

We got a bunch of trainees to do an "HTML Exit" test as an example.

Tracks time spent, requirements completeness. Can replay their test-taking step by step - mostly not needed, but can dig in when things go wrong.

They have an API for exporting details if we need.

Copying and pasting is allowed and works fine.

#### Positives

- They have an API
- They produce stats at scale
- Can get a good at-a-glance view of how trainees are doing
- Flexible on the backend, e.g. we could allow re-attempts, give more time, etc.

#### Downsides

- Making a test depends on their pre-canned tests (split up by role) and/or libraries to build them up.
- Most of the pre-canned stuff is probably better targeted at graduates than people during the course.
- Blunt tool. Need to work out how to make it work for us and how to not just be more work for us.
- Quality of pre-canned tests - Sally looked at 3 HTML tests - one 5-minute was set as a 40-minute test, one was fine, and one was just incorrect in its expectations.
- Vendor lock-in.
- The exercise taker can't write their own tests - can only run the pre-supplied ones.
- There's no versioning in the tests.

#### How do you invite them to a challenge?

Manually by email in the interface, or by API. Can also create public links but they're anonymous - struggle to track and get cohort information from it.

We could maybe ask them to integrate better with e.g. Google Classroom, but unlikely to get much traction.

#### What are our concerns RE false positives/negatives

Much more likely people will fail when they should pass than pass when they should fail.

Trainees could plausibly cheat pretty easily if they wanted to.

#### What stages would we use this for?

End of module assessments. Possibly entry criteria assessment for modules too.

Have an intense desire from cities to be able to see at a glance who needs extra support which isn't a large complicated spreadsheet. Also a desire to not spend so much time doing rote marking and automate that as much as possible.

Goal is to de-emphasise time spent marking coursework - push the trainees to own their coursework experience, and rely on more formal/structured assessments for progress tracking.

#### Concerns

- Vendor lock-in (Sally also has an account with https://www.qualified.io/ now)
- Watch how much time we sink into the proof of concept.
- How to introduce tests - if we spring them on people it's surprising, if we warn them in advance it's daunting.

#### How are tests written?

Three styles - kata-style, multiple choice, long-form written answer, and whiteboard coding style.

#### Do we want to tell the trainees their results?

Lots of down-sides to doing so:

- For trainees lacking confidence getting a poor score even though they've done pretty well can knock confidence.
- For trainees struggling, if they score really highly but it's not representative, that's a very hard conversation.

#### Next steps

- Syllabus: Take a look, get a feel, form opinions. Maybe do this with a 15-minute in-class experience to avoid a large lead-time.
- Work out our crucial stages for getting feedback on how trainees are doing.

### Cohorts

Many people have been thinking in different ways about how we deal with the tension between having a cohort which forms a community, and being flexible around how long individuals take to learn things and advance.

### On-boarding volunteers and buddies

Want to decentralise this a bit - make it less Sally's job and more each city's coordinator.

### Differentiating factors between our trainees

Very clear that the trainees who don't do the optional exercises don't do well.

Part of that is probably because we don't communicate how to get support well enough.

Why don't we set all of our exercises as mandatory? Maybe we should...

We don't have a great story for how to catch people up when they're behind.

We need to make the modules more modular, and make better off-ramps.

We also need to work out how to bring the product people more into the fold of the syllabus - this is a big thorny problem!

## 9/6/21

### Present

Chris, Ben, Mitchell, Sally, Greg

Welcome to Ben

### Actions:

- check in notes from last time and followup on any actions
- @Chris to write up why students are struggling
- @all create issue to tell them "do codewars" in the syllabus
- Raise wider discussion of modularisation - how far do we want to take the concept.
- @Greg bring up teaching unit testing for Glasgow
- @Chris invite Kerim and Craig

### Unit testing

- Mitchell getting PR ready for unit testing

### Proposed renaming/refocusing of Javascript

- Sally - maybe should focus more on modularisation so that we can teach (inside module and across module) in whatever order
- Mitchell - should we make explicit the dependencies/place other things earlier
- (side discussion on scope: would like to bring it in early, groundwork can be laid in css)
- Sally: could have teams that are module focused to "garden" the individual modules
  - syllabus team should figure out how to support people in doing this
- Greg: As well as dependencies: document reasoning
  - Sally: would also be good to have better communciation/collaboration between modules
- Ben: at school of code, similar issues - making things reorderable
- Greg: concern that "Basics of Javascript" makes it a dumping ground for everything that is conceptually "basic", even if we could delay teaching it

### Boxtribute work-study internship

- Chris has already pushed back on the technology list
- Originally they wanted to set up a code school and Chris encouraged them to pay interns instead
- Could we get clarification on how they intend to support students in the self-study
- Some companies that offer similar programmes also pay a living wage
- CYF probably shouldn’t be encouraging students to take positions that are poorly remunerated

### Codewars

- Sally has created a cyf collection https://www.codewars.com/users/CodeYourFuture/authored_collections
- Graduates who are struggling have not been doing the suggested work
- Very little mandatory code katas in the curriculum
- Sally: by JS3, everyone should have level 6 (means completing 20 entry-level kata)
- Could we introduce the principle of the a daily standup to be done by a slackbot
- posting in the void might feel unfun (and seeing that other people don’t do it, so I don’t have to)
- Would be good to demo that as part of the weekly class
- Target 300 so that you can make your own kata (careful to not have them reviewed as trivial katas get ripped to shreds)
- Kata: have some katas to deliberately revisit

### Node re-ordering discussion thread

- should have that conversation

### 3blue1brown

- Mathematical animation engine
- would be really cool to have something similar based on coding

### Stratification in groups

- should we find out the pros and cons? is it something to formalise?
- more driven by necessity in London

## 26/05/2021

Attendance: Chris, Daniel, Greg, Mitch, Sally, Ali, Matt

### Actions from Last Time

- Daniel to put JS1 convert tests - done
- Mitch write short npm intro
- Sally to teach HTML module - Currently doing, made contact with Lucy in London, had same points as Sally
- Chris to fix bug - Daniel has fixed bug
- Promises, greg to explain more in JS3 - Chris has made a thread, no discussions made so far

### Agenda Points

- Ali’s syllabus link - Chris has fixed this already, could probably close all the tickets on it
- Chris, non-mathsy codewars exercises - think that the codewars katas are good, not sure about including them within the syllabus or not, can make collections of katas by modules, collections are tied to an account but we can create a CYF account on codewars for this, need to be careful about adding more marking. Chris to add them in as optional coursework.
- Hotel App - Could get more peer-review marking involved with optional challenges of react.
- HTML/CSS Sally - Spent a lot of time defining terms. Could potentially be useful to add a glossary in for terms they are to cover on specific modules. Potential issue that if we create a glossary there is an assumption there that because its written down it doesn’t need to be taught. Flatiron html coursework was good but UI of website horrendous and very confusing for the students. Potential option to teach grid first, made teaching box difficult. Sally has made a set of notes, will feedback after finishing teaching. Potential issues surrounding semantic html, lack of understanding of when to use div tags and when not. Live debugging using dev tools was really good.

### Jest

- Are we requiring test or accepting globally
- Are we going to run the tests through github actions? - issue that students might then only practice tests when they submit to git rather than testing locally
- Just having pure pass fail might be useful for markers
- Mitch happy to add a guide for CI output interpretation
- We shouldn’t hide the logs for the students
- No intention at this point to get the students to write the tests, it’s more about interpretation at this stage
- First use case going to be NW4 in about two weeks

### Github Actions

- Github actions to automatically close issues
- List of github actions - https://github.com/sdras/awesome-actions
- Action used - https://github.com/JulienKode/team-labeler-action

### Sprint Planning

- JS Core 1 Assessment - Matt to look at Chris’s comments
- JS Core 1 Challenges - Added back into ready for development
- React Week 2 - Ali still to work on this
- Add Pre-Work for HTML/CSS - Chris assigned himself
- Use uuids instead of ids for albumsData - Chris assigned himself
- Get jest merged this week
- Everybody to review the PR’s

## 12/05/2021

Attendance: Chris, Daniel, Greg, Mitch, Sally

### Agenda

- Tech test
- TDD first steps
- HTML/CSS content discussion
- Trailing slash
- Promises
- Report from new Git lesson

### Important Points raised

- New person is joining team soon, hurray
- Chris is eating amazingly vile sounding KFC flavoured crisps

#### We reviewed a tech test

- Action: Chris to raise an issue to write up a tech test for our trainees.

#### TDD: Jest

We met with people from tech projects last week and agreed to use Jest.

- Action: Daniel to put Jest in JS-1 and convert tests
- Action: Mitch to write Jest overview
- Action: Mitch to write short npm intro for JS-1 and update pre-reqs before NW4 start JS-1

#### HTML/CSS module

Sally links presentation on the DOM for HTML W1. Lots of work being done separately across cities. Can we combine our efforts?

- Action: Sally to teach through module and identify missing pieces
- Action: Sally to get marking guide/s from Lucy into the repo

#### Trailing slash

Trailing slash bug has been raised as top 10 things to fix. Please can a Javascript person take a look?

- Action: Chris to raise an issue

#### Promises

Greg asks can we find a place in [JS-3] to explain promises. Daniel asks should we teach anything other than async await.

- Action: Chris to raise a discussion point on this

#### New git

Mitch reports from teaching new git material. A success!

## 28/04/2021

Missing notes 😢

## 14/04/2021

- Sally opened a PR for JS1 marking guide
  - Discovered an issue with student understanding of `true`/`false`
  - Predicates exercise
    - Any code will pass the test
    - Opened a ticket: https://github.com/CodeYourFuture/syllabus/issues/233
    - Action: fix this test
  - Daniel: last time he sat in on this, students didn't know what an expression was
    - This should be addressed with Mitch's changes to JS1
  - Daniel also found another example of a bad test: https://github.com/CodeYourFuture/syllabus/issues/230
    - Action: fix this too
- Fundamentals
  - Why Processing.js?
    - Fast to get something tangible
      - It's difficult with vanilla JS to make something "fun" (i.e. not printing text to a terminal). Processing makes it easy to code something interesting quickly
      - Trade-off: Processing is "magical", and KA is particularly weird about it
    - "Flipped classroom": sessions at the weekend were to unstick students, not necessarily to introduce new concepts
      - Hence need for a good online course
  - There's a lack of documentation describing the above
    - Action: Sally to do write this up
  - Fundamentals was also originally designed to be a "taster session" for programming, as well as an intro to JS
    - Wouldn't need lots of volunteer time on at the weekend, so online course is ideal
    - Could be run much more regularly during the year
- React assessment
  - PR to assessment: https://github.com/CodeYourFuture/React-Assessment/pull/1
  - Action: Ali will likely merge soon. but feel free to leave comments if you'd like
- TDD
  - Came up in context of exercises with `require('assert')`: https://github.com/CodeYourFuture/syllabus/issues/169
  - We remembered that Chris was going to update us about this
  - Action: Chris update us about this

## 31/04/2021

Missing notes 😢

## 17/03/2021

Attendance: Ali, Chris, Daniel, Greg, Matthew, Sally

### Agenda

- Location for solutions to in-class exercises
- new Choose Your Own Adventure exercise for JS3 W1
- should we add a section about paths in JS?
- MongoDB

### Glasgow forking fundamentals

Chris: Following up on our Scotland meeting - we are forking the repo and we would like them to raise issues and get their improvements feeding back in. Hopefully I'll invite them to come to these things again to have more of those kind of discussion.

### Class exercises

Daniel: Antigone put together solutions for class exercises. How and where should we maintain these solutions? Chris suggests tabs. Sally suggests passwords.

#### Action items:

- now: put the solutions in tabs
- future: produce a react component to lock the solutions in future and provide the password after the appropriate lesson

### CYA coursework

Ali: Everyone is happy. Ticket merged. Done!

### Terminal lesson and Cowsay

https://github.com/CodeYourFuture/syllabus/pull/189
https://github.com/CodeYourFuture/syllabus/pull/166#issuecomment-770410775
Discussion: Should we learn paths earlier on? They are not a react concept. If we teach it too early they won't retain it. We won't do paths earlier, but we will do them more in JS3. Possibly put cowsay into JS3 and require a bunch of stuff?

Ali: I wonder if we could actually take pretty much that entire coursework and turn it into a lesson in the end of js3. Chris: This one I think we definitely need an issue for it and it is gonna be a slightly longer running piece of work.

#### Action items:

- Write a paths cheat sheet, SOMEONE? Ali?
- Dropped thread: cowsay lesson/expansion - Sally will chase this up

### General discussion about iterating and increasing complexity in exercises.

Would it be interesting or annoying to recap some of the exercises from js1? But with objects, eg the transport one, which is, how can you get with different means of Transport between two cities? Just give them exactly the same exercise, but put the data in objects?

#### Action item:

Repeat some exercises from week 1 but this time with objects instead of arrays. Sally to make issue.

#### Action items:

- Redo TV show project in React (with call back to earlier project)
- Chris to contact Neil Bogie

### MongoDB

https://github.com/CodeYourFuture/syllabus/discussions/192

- Glasgow school got on well with Postgres
- He proposes to write out a list of all the things he plans to do so it can be reviewed
- Hopes to have this ready in 3 months
- Discussion about mongoDB vs Postgres -

#### Action item:

Chris to speak to London teachers and see what they want to teach this year PostGres/Mongo

### Assessments

https://github.com/CodeYourFuture/JavaScript-Core-2-Assessment/blob/main/scrabble.md

Snapshot assessment at JS2 proved very useful. Teachers want it for JS1 JS3, and React.
The marking guide is the key part needed here.

Action items:

- Daniel will work on JS3, Matthew will work on JS1. Two assessments of 15 mins each, with a rubric to guide marking.
- Ali wrote an assessment for React, an open book assesment. Find it, update it, and add it.

### Homework marking guide

We want to write marking guides for buddies. Each coursework should have one. It should cover: the object of the coursework, key points to look for, common mistakes, and how to respond.

#### Action items:

- Chris is working on this.
- Sally will review student submissions and find more patterns.

## 03/03/2021

Attendance: Daniel, Chris, Anthony, Sally, Greg, Matthew, Mariana, Kevin, Irina, Alastair

### Agenda

- Icebreaker (5 minutes)
- Actions from last meeting (10 minutes)
- Agenda Points (~30 minutes)
- Sprint Planning (~30 minutes)
- Fundamentals discussion
- Are Github discussions worth it ?

### Work In Progress

- Functions-expressions PR now merged
- Cowsay currently in progress courtesy of Sally
- How to ask a good question
- Chain of commits diagram
- Encouraging live coding
- Coursework solutions

### Fundamentals discussion

- Do we have established way for PD mentors to edit the syllabus ?
- Fundamentals on GitBook - people can edit directly on there
- PD changes should be run through Candy
- Significant changes to the course by Aprill, need an easy to way to make changes for Scotland
- Need to ensure not confusing for students which parts of the syllabus they need
- What are the fundamental differences for Scotland ?
  - Much looser in Scotland
  - Not about assessment
  - More about a period of adjustment for students in Scotland
  - Use some of the ideas but not everything
  - E.g. A lot of PD tasks like giving presentations in the first week so very demanding
  - A lot of people not fully comfortable with their computer setup before starting the full course
- Currently framed as an assessment period
- Softer exit if students are told they can't continue after the fundamentals section - better than asking students to stop continuing after JS-week-2
- More an assessment of intent ( truly gauge if they're prepared to work for 20 hours or so )
- Fundamentals course shouldn't be ability based - should be just a way of assessing attitude
- Maybe update wording as students may find the wording scary "If you don't do X then you may have to leave the course"
- Harder to pick on people who are having difficulties with the course whilst working online
- Confused whether we take 100 for fundamentals and then go down to 30 for the Full Stack
- Change to fundamentals may be beneficial across the different cities ( Daniel )
- Some people put on to the course as maybe ( in Manchester ) so assumed that some people are not going to make it on to the full stack bootcamp
- Could take up to 2 months to know for sure if a student can make it through the course ( Irina )
- Normally about 3/4 people towards the end of the course that are struggling with the course
- May need a definition of the ideal student at Code Your Future i.e. do they have previous experience etc.
- Generally positive about Kahn Academy - but some confusion over whether this is how you build websites
- May need taught material for the Fundamentals section of the course

## Actions

- Re-structure PD elements and language used in the Fundamentals section
- Raising issues for the Fundamentals repository

## 17/02/2021

Attendance: Daniel, Chris, Sally, Matthew, Ali, Greg

### Welcome new members

- Matthew
- Sally

### Updating the intro to coding course (/application process) (Chris)

- No need to get involved, just being generally aware that this is happening.
- Feedback comes from recent graduates/joiners
- Tech side: easy for students to pass by just following steps (/googling freecodecamp tribute page)
- Soft skills side: intro to coding course should represent the soft skills, so that it's a good "sample" of what students can expect

- Improving the tech skills
  - raise the upper level of how well students can do, by making a "challenge" approach.
- Questions
  - Should actual coding be part of intro to coding?
  - Are the cutoffs during the acceptance process in line with what they've learned and with what we're able to assess? (end of js1)
  - Could having some sass add coding fundamentals/some other version of programmatic thinking?
  - Long term intention of the fundamentals course was not really to do what we're doing.

Action for Chris -> discussion of what is taught in fundamentals course (e.g sass)

### What kinds of tech interviews do our students end up doing and what skills should they be practiced in going in (Chris)

- Cap Gemini put a lot of soft skills to the front (even rejected some strong coders from Birmingham)
- Got feedback from Cap Gemini hiring manager:
  - students did worst at selling their technical skills
  - very good at talking about their own experiences
  - very good at self directed learning
  - enthusiastic about learning new things
  - students tend to pigeon hole themselves (e.g. backend vs frontend)
  - students don't have confidence that they could learn a new language/take their learning and re-produce it.
- Question: does the final project affect students confidence in a negative way that we might want to address?
  - Would it be a good time to invite recent graduates?
  - Yes, it's quite common for students to fill low in confidence
  - Lack of having things on github

Action for Chris -> speak to German about who we're designing the syllabus for (who are the hirers, what skills are they asking for)
Action for Chris -> chase up city coordinators to fill in the outcomes spreadsheet

### JS Core 2 exercises (Ali)

- Choose your own adventure
  - Goal: Getting students used to the existence of objects
  - Concern: it's a bit different from what we've done in the class?
  - Comment: a bit like an internal DSL

Action for Chris: Get a Gist from Ali and give it to some students.

- Suits of cards
  - More standard
  - Can we make it more difficult/complex (Ali: assertions become tricky)

### Git branch (Daniel)

- Seeking feedback
- Planning to record feedback?

- Git bracken?
- Git prettyfier? (could then use asciicinema)

### Sprint planning (Chris)

- Git ticket almost ready
- introducing funtions, ready for review
- js excercises 2

New tickets

- Encouraging live coding?
- Cowsay? Sally could pick up
- Git diagrams? Daniel
- How to ask a good question -> maybe good for Atanas

Action for Chris, approach people about pairing up with Greg to get started on Mongo

## 03/02/2021

Present: Chris, Ali, Daniel, Mitch, Greg

### Interview Prep Workshop

- Ali & Daniel got chatting on PR about interview prep
- What kind of companies are we targeting for trainees?
  - "Upper bound" of companies
  - Type of company
- There are several kinds of tech interview
- Do we prepare trainees for all types of interview?
- Discussion of specific example of `LazyFlatIterator`
  - Problem is very abstract, which we think would throw a lot of trainees
- Is it realistic to expect trainees to get jobs at FAANG/top companies?
  - We think the majority of student's wouldn't pass the interview
  - Self-fulfilling strategy - if we prepared trainees for this, would they get it?
- We could prepare for what kind of things a tech interview, but without looking at specific kinds of problems (e.g. computer science-y problems)
  - E.g. explain thinking out loud
  - Think about performance of solutions
- Potentially involve Anahita - London PD
  - Tech recruiter for Capgemini
  - Has expressed interest in developing content in this domain
- Daniel opened a [ticket to discuss a workshop](https://github.com/CodeYourFuture/syllabus/issues/175)
- Action points
  - Chris to speak to Capgemini
  - Chris to decide what types of companies we are aiming for
  - Syllabus team to read ticket & discuss

### When do we release solutions to coursework?

- London were releasing the week after
  - Concern is that they could put in minimal effort to solve, then get solution without putting work in
- Releasing answers helps buddies since the answers are available, but it also means enforcing putting in effort
- Trainee who is putting in effort, but sees answers then thinks that they understand it, but without actually
- Suggestion
  - Release by default
  - But if Edu Buddy notices that trainee is coasting, the it can be flagged to City Coordinator
  - Can then restrict that trainee from getting the answers (by not inviting them to the private answers repo)
- Action points
  - Chris to write this up as policy for Edu buddies

### Team changes

- Tim taking some time off (too much going on)
- Few new people joining in the next few weeks

### Git CLI/Terminal

- Terminal lesson went out to London students
  - 12 students completed. No problems, but they are likely best students, so waiting to see how it goes for other students
- Git
  - Daniel working on it, roughly ready to go
  - PRs incoming
  - Diagrams are still TODO

## 20/01/2021

Present: Chris, Bukola, Mitch, Ali, Daniel, Greg, Lucy

### HTML & CSS discussion - led by Lucy

- Atannas has raised several questions regarding the syllabus
- Syllabus doesn't currently start from scratch with HTML & CSS
- Always have disparate level of abilities and knowledge with any class

#### Week 1

- Lucy's learning objectives:
  - Week-1
  - Starts with a summary of the learning objectives
  - How to attach CSS to a HTML document
  - Discuss CSS specificity
  - Write simple HTML and CSS pairings
  - Discuss the box model in CSS
- Avoid git issues and sandboxes
- Lots of interactive exercises throughout the lesson
- For homework build a website using some Figma designs
- Trainees can find extension tasks at Frontend Mentor
- Currently still using the bikes for refugees project over the HTML and CSS section
- Lucy is using smaller layout exercises for this section
- Try and get students to fork and clone the homework before the end of the class

#### Week 2

- Week 2 deals with responsive design, media queries
- Homework for week 2 is to add a media query to existing Karma Project for a mobile design
- More sandbox activities for manipulating the UI with media queries
- Trainees given a wireframe for a cake website with a mobile view and a desktop view

#### Week 3

- Start with a lot of repetitive stuff in CSS
- Introduce the need for classes in order to reuse CSS rules
- Then introduce a CSS framework like Bootstrap - there to solve the problem of consistency
- Give students some understanding of columns
- Issues with Bootstrap:
  - Comes with clutter like utility CSS etc
  - Also comes with a lot of JS components
  - Can sometimes be a little chaotic
  - Sometimes distracted by Bootstrap features
- Lucy has made a separate CSS framework "Simple Grid" for Code Your Future - just for columns ( no JS components and grid etc )
- Downside is that Bootstrap has loads of documentation and examples online so maybe more difficult for students to figure stuff out
- Homework for week 3 used Wix templates in the past - needs to change for copyright reaons

- May need an additional 4th class
- Syllabus is opinionated - but with flexibility built into it so people can choose to teach something in particular should they choose to do so
- Potentially focus on Bootstrap but if you want to use "Simple Grid" then you can if you want
- Syllabus there to define which concepts need to be understood and which skills need to be acquired but not to prescribe the particular resources used to achieve the skills / resources

### Cloud development - led by Bukola

- Would like to introduce cloud development in the syllabus at some point
- Could introduce deployment / automation especially when students encounter Netlify and there is a need for deployment
- Github CLI is a good starting point for this
- Make use of Bukola's notes for this topic
- Good turn this into an optional workshop
- Cloud infrastructure is the number one skill employers are after
- We could also have a postgraduate module for teaching students stuff after the course ( post graduation )
- Could introduce bonus material from early on so that the students are primed for the introduction of cloud stuff later on
- Is there scope for something like Lambda functions around the time of React to bridge with NodeJS
- Netlify uses a CLI tool for deployment of cloud functions

### Further actions

- Setup a future discussion further down the line re cloud workshop / module
- Establish learning objectives for a cloud workshop / module
- Setup a cyf-syllabus-cloud channel

---

## 06/01/2021

**In Attendance:** Daniel, Chris, Greg, Tim, Mitch, Ali

### Personal Development Syllabus

- https://personal-development.codeyourfuture.io/
- Technical Interview might be missing
  - Can this be rolled into the PD Syllabus?
- Could we add more time CV Workshops
- "Asking Good Questions" is a section that could be pulled out earlier and more in depth
  - Has been included in Day 3 so can be pushed more around
- We should be aiming to interleave the content between the two Syllabus'
- "Imposter Syndrome" could be covered
  - You're not **meant** to understand everything

Action: All Attendees - To review the content in more details

### UseContext Discussion

- Greg recently learnt React to help TA a class
  - He discovered UseContext that could be used in place of Redux
- Ali - We can use the "Extra Lessons" to contain this
- Ali - We've always **not** included it as part of the course as it isn't required for most of what the students are trying to do
- Could this be included into the Post Graduate section of the course?

Action: Greg to investigate how they could be implemented and included

### Instructional Design Class

- Greg used to work in this area and knows people who want "clients" to work with
- Might be able to help us craft a pedagogically good workshop or help with HTML/CSS Module

Action: Greg to refer them to me

### Round Table

- Chris to prepare a plan for a Round Table discussion with lots of different stack holders of the

Action: Chris to write up plan and poll for the best time for the Round Table

### Lucy and HTML/CSS

- Lucy Zidour is an experience CYF Teacher from London who has historically taught HTML/CSS
- She has good tested material that could do with being folded into the Syllabus
- Lucy will attend our next meeting to discuss

### Git & Terminal

- As part of a roll-out of a better way to teach Git we need to start thinking about how to teach further Git Theory and the Terminal in preparation for React
- We should start working on this soon

Action: Chris to prepare meeting on this for next week

## 09/12/2020

**In Attendance**: Chris Owen, Ali Smith, Mitchell Lloyd, Tim Hamrouge

### Functions

[Minutes from the call on 7th Dec](https://docs.google.com/document/d/19F9GAR09wP9CwomDp6Y4rYwfBMNnnZgrirHd-8k4uiM/edit#).

Chris overall happy with it. Flagged that the coursework needing to be checked that trainees don't see content out-of-order.

Also had discussion of timings of lesson 1. Concern about fitting in good naming content, but pointed out that this can be covered in variables section earlier. Assigned some rough timings for AM/PM content in week 1.

Next steps:

- Suggested that start learning objectives first
- Then write exercises that fulfill the LOs
- And then fill out content

### Code style guide

Ali has started writing it up, but not lots of progress yet.

### JS Core 2 Exercises

Tim demoed some of the exercises so far. Progress looks good.

### Typing tips/test for Intro to Coding

Ali wrote up a [quick guide](https://github.com/CodeYourFuture/Intro-To-Coding-Course/pull/2), but wasn't sure what to do with it. Decided to write up a ticket for the board for Syllabus Team to discuss how to integrate into ItC.

## 25/11/2020

**In Attendance**: Ali Smith, Chris Owen, Daniel Wagner-Hall, Greg Dyke, Tim Hamrouge

### Style guide

Discussing https://github.com/CodeYourFuture/syllabus/issues/105#issuecomment-731769854

General consensus supporting Ali's comment.
Important that learners understand the why (e.g. around indentation and naming), and in what Prettier does (particular that Prettier will reformat things to avoid surprising changes), less important to understand things like "how many spaces are correct".
We should make sure TAs (particularly when marking homework) know what to expect, and what things are worth highlighting in review.
We should also consider what things we encourage all volunteers (particularly teachers & TAs) to do, e.g. should we try to get people to always add semicolons after statements?
We should make sure to proactively re-format homework before setting it, so that they don't submit huge whitespace diffs.

For React and beyond: Rely on default ESLint that comes from create-react-app.

We've had incidents in the Backend/Mongo course where client-side and server-side code were using different formatters with different spaces, which caused some issues. We should unify where they conflict.

Best practices docs: We should have some. Should probably set reading these as homework, rather than in-course, and will also be useful to be able to link to from PRs.

Try to avoid per-module advice in this doc - we should create per-module cheatsheets/similar where they're needed, but don't want to glom it all into one doc. These could also be useful to get teachers for later modules familiar with conventions that were taught in earlier modules (e.g. how much do we care about `==` vs `===` of `if (blah)` vs `if (blah === undefined)`).

Can easily get ESLint installed into VS Code, but ESLint rules are harder because they're generally installed as npm packages. Could maybe bundle them in our own extension if we wanted. .eslint files in the CYF-Coursework-Template could fill this niche.

Ali will move forwards.

### How we teach functions

No one seems to teach functions well.

Coding Train does a good job because he makes a distinction between functions that do things, and functions that return data, but we can't use it directly because it uses p5.js which is very specific. Covering functions which both return things and have side-effects is maybe important too.

Everyone treats "and you can store the result in a variable" as obvious. Haven't really seen how to teach "some returned value are ignored" much either.

How/when do we teach expressions? Week 2 of JS1 (functions are Week 1 of JS) - students have typically struggled with this.

Learners often struggle with map vs forEach. We struggled when we moved away from `for` loops, have moved a bit closer to `for` to help the learners understand the basics, but still need to cover `map` et al by the time we get to React.

Our examples aren't places where functions aren't actually useful (e.g. a `sum` function) - hopefully we can reframe into something more realistic as a motivating example.

Mitch is probably going to be away for a bit, so Chris will take it over and start gathering opinions this sprint.

### This sprint

#### [SQL](https://github.com/CodeYourFuture/syllabus/pull/139)

Pretty much everyone except London teaches MongoDB. Glasgow and Manchester have some SQL experts, and Birmingham fell through some cracks of undocumented prep work from having not run the course before.

Why does ~everyone teach SQL except London?

> Partially because of domain knowledge in the particular cities.
> Partially lack of clarity around what's more valuable to focus on.

Birmingham want to move from Postgres to MySQL. We should work out what to support...
We should find out why Birmingham want to switch. It may be because they had a bad experience from the first class, but we should find out for sure.
Maybe we could just have them connect to pre-running SQL servers, and not need to worry about which flavour of SQL they're using.
For Mongo, we don't have them run anything locally, just use a hosted MongoDB.

#### [JS2-2 coursework](https://github.com/CodeYourFuture/syllabus/issues/120)

When we introduce the DOM, there's not much homework. Could do with someone reading over it and evaluate whether the coursework meets the learning objectives. The jump after this week is to a big project.

Tim will pick up.

### AOB

Chris is taking most of December off (enjoy!). Will still check in to the meeting on December 9th, but won't be picking up work.

We should do an idea generation session, with many attendees, to work out what else folks would like the syllabus team to prioritise, to fill in a backlog.

---

## 28/10/2020

**In Attendance**: Ali Smith, Chris Owen, Daniel Wagner-Hall, Tim Hamrouge, Carlos from Migracode

### CARLOS FROM MIGRACODE

Welcome to Carlos from Migracode who use our syllabus for their course in Spain.

- Carlos answered questions and gave some insight into Migracode.
  - Migracode have been around for 1 year. They were using our syllabus from then to teach with until April when Carlos started updating their syllabus with our new content.
  - Migracode began with one class, then another two in March and started three more in July. The classes consist of ~12 people.
  - The feedback from Spain is that our syllabus is great because of how up to date it is - particularly the content on React hooks.
  - They have split their classes out into smaller groups to enable them to give students more attention. They also have 1 Spanish class and 1 English class because a lot fo their students are from South America, but they do not translate the syllabus, the teacher does that while teaching.
  - They offer free English lessons to students. They are able to do this by using trainee teachers who can use the teaching time as credit for their courses.

### GIT LESSON

- Chris thanked all those who had worked on the content for the Git lesson.
  - Chris introduced the lesson content to the Birmingham team and it was well received, the lesson will be run by them for the first time on 31/10/20.

### AOB

- Chris needs some eyes on some PRs. Tim said he would take a look.
- Ali asked for some resources on 'How to ask good questions' and 'How to give good answers'. Ali will write a ticket for this.

---

## 14/10/2020

**In Attendance**: Ali Smith, Chris Owen, Greg Dyke, Daniel Wagner-Hall, Tim Hamrouge, Neill Bogie, Mike Hayden,

### GIT & COMMAND LINE V. GITHUB DESKTOP

Discussion around wether to teach GIT & COMMAND LINE (G&CL) or GITHUB DESKTOP (GHD)

- No final decision was made in the meeting about which technology should be taught.
  - It was agreed that in order to teach anything with Git comprehensively, more teachning time would be needed. Chris said that the 2 hours used to teach the topic could be spread out to 4.
  - There much discussion about multiple lessons on Git, in order to reduce the cognitive load and increase familiarity for stuents. Chris said that while additional lessons cannot be added, additional reources (as homework etc.) can be included.
  - Daniel and Ali agreed to work on the Git lesson plan for 31/10/2020.

### STUDENT FEEDBACK FORM

- Chris has created a Pull Request for a new feedback form to give to students at the end of lessons.
  - There was consensus that the form was a good idea, and would be added to the syllabus. It is a substantial change because it will affect all lessons.
  - Ali suggested an additional 'Anything Else?' field to capture intangible feedback, Chris Agreed.
  - Neill pointed out it must be made clear to students who can see their answers and how they will be used, all agreed.
- ACTION: Chris to check form feedback in 1 month.

---
