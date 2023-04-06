# Mentor's Notes

## Introduction
This is the locally modified Manchester version of the DB module changed by Keith Bremer to better reflect novice student learning needs.

The module starts with some essential background, then loading sample data using a provided script followed by SQL SELECT statements building from very simple queries to gradually more complex ones. The example data represents a system to manage bookings and charging for a small hotel, with customers, rooms of various types, reservations and invoices. It is intentionally incomplete - we add further functionality to the system as the module progresses, specifically invoice items for charging meals, drinks, etc to the guest's room.

The last day's teaching concentrates on expanding the use of SQL from Node.js for more selective queries, insert, update and delete.

## Presentation Slides
You can get these from Google Docs at <br>
https://docs.google.com/presentation/d/1swiJj3KzDiakAPfR71rJ5NWWL7-vqlGEu8W5EoU2v1I/<br>
or as a Powerpoint file [here](./CYF_DB_1.pptx)


## Why Use PostgreSQL?
Primarily because it's both free and closer to the SQL standard than MySQL (the other contender). We did try to use SQLite in some early courses but it is so far from the standard that it was deemed unsuitable.

Some courses have used MongoDB instead of SQL-based databases but that (a) doesn't have an ISO standard access language, (b) is unsuitable for a range of applications cases and (c) probably provides less value to the student in job searching.

## Missing Features

This module, as taught, covers only a small subset of the SQL and Node.js features that would be required by a competent developer working on back-end application code. The following is an example list of missed features that might be beneficial, but it's not exhaustive:
* Subqueries
* Transactions - in SQL and in Node.js
* Locking, including optimistic locking techniques in Node.js
* Views
* Indexing
* Triggers
* Stored Procedures & Functions
* Basic security considerations
* etc...

(Note: there may be an opportunity to cover some of these in a subsequent course, for those who are interested in back-end systems work.)

---

Please add comments below from your experience of teaching this module. This can help other mentors who follow and help with any revisions to the materials.

## What worked well

## Things to improve

## Other thoughts
