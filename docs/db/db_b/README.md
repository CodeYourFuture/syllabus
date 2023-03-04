# CYF-DB-Module
## Introduction
The standard CYF DB module does not sit well with the learning styles of most novices. It has a very early section on data modelling and on creating tables, neither of which are needed at this stage and which could prove daunting for some students. I have changed the order of teaching so that we provide some basic background to RDBMS and then start teaching SQL using queries on single tables. We gradually build up experience with the SELECT command before moving on to INSERT at the end of the first lesson. This approach leads to an incremental learning experience, where students start with simple things then build up to more complex topics. The second lesson covers aggregate functions, update, delete, joins, creating a table and finally an introduction to using SQL in NodeJS. The third lesson expands on using SQL in NodeJS to cover selective queries, insert, update and delete.

## Serious Omissions from the Course
Due to time constraints this course cannot cover more than a fraction of the topics that are needed by a competent developer using database. For example, we don't cover subqueries, locking, transactions, indexing, security, views, triggers, stored procedures and so forth. It's important to let the students know about these serious omissions but we can potentially help. We also don't cover the techniques required in NodeJS to make a multi-user app "update-safe" such that one user's changes can't destroy those of another user.

I'm currently building up a mini-course that covers some of these missing topics, perhaps called an **"Intermediate SQL/Node Course"**. This can help fill the gaps in what we teach in the basic course.
 
