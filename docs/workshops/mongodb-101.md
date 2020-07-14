---
id: mongodb-101
title: MongoDB 101
sidebar_label: MongoDB 101
---

**What we will learn today?**

- SQL vs NoSQL
- Why MongoDB?
- Mongo Shell Basic Commands
- MongoDB administration
  - Aggregation
  - Replication
  - Sharding
- What's next?

## Before we start

Download and install MongoDB from
<https://www.mongodb.com/download-center#community>.
Follow the instructions for your platform (Windows, Linux or OS X).

Open two instances of terminal.
Run `mongod` in the first instance - this will start MongoDB.

In the second instance, first download the sample data script:
`curl https://gist.githubusercontent.com/agiamas/35b2b954cc942f95709273d3cb9d2cf3/raw/b1bb399942dab287832d41b3b75f6b54c6f00bb1/mongodb_data.js > mongo_data.js`

then import the data we just downloaded using

```bash
mongo < mongo_data.js
```

Finally, run `mongo` in the second terminal instance.

## Lesson 1 - SQL and NoSQL

SQL is a well known paradigm in data storage and retrieval, serving us for decades.
Our data was living in mainframes and being stored and processed in isolation.
The nature of Web and mobile has created a paradigm shift in the past decade.
Data has exploded in volume, veracity and velocity.
We have many times semi-structured data of varying quality
and unpredictable volumes of them.

This has led to a new breed of databases, the NoSQL ones.

- Document databases, e.g. MongoDB
- Graph stores, e.g. Neo4J
- key-value stores, e.g. Redis
- Wide-column stores , e.g. Cassandra

In this class we will examine Document databases and its most popular one, MongoDB.

First of all, how does MongoDB compare with traditional SQL queries
that we have learned in the past?

[MongoDB to SQL Mapping](assets/mongodb-101/sql_to_mongo_mapping.pdf)

<https://s3.amazonaws.com/info-mongodb-com/sql_to_mongo.pdf>

## Lesson 2 - Why MongoDB

MongoDB is a leader in NoSQL database space.

- de facto leader in NoSQL database space.
- uses JSON, you are familiar with json in FE/Node, you can use it in DB layer too!
- one language to rule them all, part of MEAN stack
- mongodb data types as compared to JSON
  - <https://docs.mongodb.com/manual/reference/bson-types/>
  - We can even query by type!
    <https://docs.mongodb.com/manual/reference/operator/query/type/>

## Lesson 3 - Basic Commands

Open the terminal that you ran `mongo`.
First type `show dbs`

You should see something similar to:

```text
admin          0.000GB
local          0.000GB
```

Then type `use cyf`

You should now get:

```text
switched to db cyf
```

That's it! You have created a new database.

Now type again `show dbs`

```text
admin          0.000GB
local          0.000GB
```

**??? Where is our new database? ???**

- Lazy initialisation.

## Databases

## Collections and Documents

Collections are like tables in SQL databases.
Initialising a collection is also happening lazily like this:

`> db.Student.insert({name: 'alex'})`

Now if we run again `show dbs` after we create a collection with a document
we will see that the database appears in the list.
This is because at the moment that we inserted this document,
the document was created, which in turn created the collection
which in turn created the database.

### Exercise 1

Insert a new student with name: Mary

### Exercise 2

Insert a new student with name: Madeline and id=2 (integer)

### Exercise 3

Insert a new student with name: Steve, midterm score of 80 and final score of 100

Scores should be embedded in a sub-document like this:

```text
scores:
{
  midterm: 0,
  final: 0
}
```

### Finding Documents

Finding a document by a single attribute:

```bash
> db.Student.find({name: 'alex'})
```

Querying embedded attributes:

```bash
> db.Student.find({"scores.midterm": {$gte: 40}} )
```

AND / OR queries:

```bash
> db.Student.find({"$or": [{"scores.midterm": {$gt: 60}}, {"scores.final": {$lte: 75}}]} )
```

### Exercise 4a

Find the user Mary that you inserted in exercise 1

### Exercise 4b

Search for students that have scored between [50,80)
in midterm AND [80,100] in final exam

In these two examples above we can see the operators
GreaterThanEquals >=, GreaterThan > and LessThanEquals <= in action.

All operators in MongoDB:
<https://docs.mongodb.com/manual/reference/operator/query/>

### Updating Documents

Updating documents has 2 parts.
The first one is finding the document(s) we want to update
and the second one is modifying their values.

(!)

```bash
db.Student.update({name: 'alex'}, {name: 'alexander'})
```

What will this command do?

REPLACE the first instance of document matching {name:'alex'}
with the new {name:'alexander'} !!!!

Definitely not what we want...

```bash
> db.Student.update({name: 'alex'}, {$set: {name: 'alexander'}})
```

We can also use other operators like $inc, $mul, $min, $max

<https://docs.mongodb.com/manual/reference/operator/update/#fields>

(!) Update by default will update only the first instance it matches.
multi:true

(!) We can get update to update or _create_ the document by using upsert:true

### Exercise 5

Update the student madeline that you created back in exercise 2
to have midterm score of 50 and final score of 100 respectively.

### Exercise 6

Update the grades of all students to be 90

(!) How could we boost the grades of all students by 10%? (!)

## Deleting documents

Deleting a single or more documents is as simple as:

```bash
> db.Student.remove({"_id":ObjectId("5a99e1209056c9e237d071d9")})
WriteResult({ "nRemoved" : 1 })
```

Deleting a whole collection:

```bash
db.Student.drop()
```

Deleting a database:
`db.dropDatabase()` to delete the current database

### Exercise 7

Delete user steve that you created back in exercise 3

### Exercise 8

Delete all users with midterm score less than 80

## Lesson 4 - Administration

## Scripting the shell

There are several ways to write scripts for MongoDB shell:

- use `mongo < mongo_script.sh`
- use `mongo mongo_script.js`

What's the difference?

The first one will pipe in our script and execute its lines one by one
as if we were typing them in Mongo shell.

The second one will evaluate our javascript and attempt to run it with Mongo shell.

**Always** test scripts locally in MongoDB (and in general).

**Always** test in staging before production.

**Always** keep backups in production.
And test that you can restore from these backups regualarly.

All of these are important for every database system
but even more important in MongoDB as...

**THERE IS NO ROLLBACK!** There are no transactions.
Once you delete something, it's gone.

### Exercise 9

Using MongoDB shell, create a script to output in a new collection
named BoostedStudents one document for every document in Student collection
with their final grade being boosted by 10%.

## Aggregation

Why aggregation framework?

Aggregation framework in MongoDB is modelled
after the familiar concept of data processing pipelines.
Documents enter the pipeline with the MongoDB structure
and exit the other end transformed into BSON documents with calculated fields.
Commands in a pipeline are executed sequentially
and in the order that they appear in the array [].

| SQL             | Aggregation framework |
| --------------- | --------------------- |
| WHERE / HAVING  | \$match               |
| GROUP BY        | \$group               |
| SELECT          | \$project             |
| ORDER BY        | \$sort                |
| LIMIT           | \$limit               |
| sum() / count() | \$sum                 |
| average()       | \$avg                 |
| join            | \$lookup              |

```text
db.students.aggregate([
                   1.  { $match: { name: {$regex: /^aA/} } },
                   2.  { $group: { _id: "$name", average: { $avg: "$scores.final" } } },
                   3.  { $sort: { average: -1 } },
                   4.  { $project: { name: 1, average: 1 } }
                   ])
```

What does the pipeline above do?

1. matches all documents with a name starting from aA
2. groups them by average final score
3. sorts them by average score
4. projects(selects) name and average score in the output

What's the output like?

```bash
{_id: .., name: .., average: ..}
```

More information: <https://docs.mongodb.com/manual/aggregation/>

### Exercise 10

Now let's redo Exercise 9 using the aggregation framework.

## Replication

Replication in MongoDB is used to increase redundancy and data availability.
In its essence it's a way for 3 or more (or even 2 with some caveats..)
servers to keep the same copy of data.

![replication diagram](./assets/mongodb-101/replica-set-read-write-operations-primary.bakedsvg.svg)

Writes always go to the primary and get propagated _asynchronously_ to the secondaries.

Reads can go to the primary or any of the secondaries.

Election process:

Replica sets implement by default automatic failover.
If a primary server fails, the remaining secondaries will elect the new primary.
This will by default be the secondary that is most "up to date" with the primary
but we can affect (rig) the election process
by assigning different votes to each server.

More information:
<https://docs.mongodb.com/manual/core/replica-set-elections/>

Using replication we can perform a few interesting tasks:

- delayed replica for backup.
  Delay backups by an hour, enabling us to recover from dropping a database in production
- hidden replicas for reporting.
  These replicas will never become primaries
  so we can safely apply read load to them for reporting purposes
- replicas in different location for disaster recovery
- replicas in different location to be closer to our users

## Sharding

Sharding is a method for horizontal scaling that MongoDB uses.
It essentially partitions data across the shard key in different servers
thereby distributing the read and write load.

What is horizontal scaling?

When our data exceeds the disk space, I/O capacity and/or memory available
in a single server we have two options:

1. Buy/Rent a bigger server. This is vertical scaling.
   It's of course the easiest way to scale
   but does not scale linearly in terms of cost and capacity.
2. Distribute our data across different servers of the same initial capacity.
   This is called horizontal scaling, is more difficult to achieve
   but theoretically if we achieve linear scaling
   then our system can be **infinitely scaleable**.

With MongoDB it's important to understand that we will start with #1
for as long as it makes financial sense.
If we are on AWS it will probably be easier to tweak our replica set
from S to M to L sized servers rether than implement sharding.
At some point though, we should start planning for sharding,
definitely sooner rather than later.

![sharded architecture](assets/mongodb-101/sharded-cluster-production-architecture.bakedsvg.svg)

Sharding as we can see from the diagram above is not a trivial task.
We need router(s) config servers and shards.

Router:

The router is essentially our query server.
Queries no longer go to individual servers
but must go to the router which will decide which server(s) hold our data.

Config Servers:

Config servers are holding configuration information for the whole cluster.
They must be deployed as a replica set in order to achieve high availability.

Shards:

Each shard is essentially a replica set.
Each shard holds a cut of our data
and all the shards together hold the total of our data.

More information:
<https://docs.mongodb.com/manual/sharding/>

## What's next

If you have time and interest,
please register to this class or any other class in MongoDB university.

All classes are **free** and on average require 6-10 hours of time per week.

<https://university.mongodb.com/courses/M001/about>

### Shameless plug

I am also the author of the Mastering MongoDB 3.X book by Packt publishing,
available [here](https://www.packtpub.com/big-data-and-business-intelligence/mastering-mongodb-3x).
