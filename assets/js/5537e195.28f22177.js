"use strict";(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[3610],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57723:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return a.createElement("div",{className:"feedback"},a.createElement("div",{className:"feedback__wrapper"},a.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),a.createElement("center",null,a.createElement("p",null,"Not loading? Form can be found"," ",a.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}},93412:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(57723),l=["components"],s={id:"lesson",title:"MongoDB - 3",sidebar_label:"Lesson"},c=void 0,u={unversionedId:"mongodb/week-3/lesson",id:"mongodb/week-3/lesson",title:"MongoDB - 3",description:"Outline",source:"@site/docs/mongodb/week-3/lesson.mdx",sourceDirName:"mongodb/week-3",slug:"/mongodb/week-3/lesson",permalink:"/mongodb/week-3/lesson",draft:!1,editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/mongodb/week-3/lesson.mdx",tags:[],version:"current",frontMatter:{id:"lesson",title:"MongoDB - 3",sidebar_label:"Lesson"},sidebar:"MongoDB",previous:{title:"Instructor Notes",permalink:"/mongodb/week-2/instructors"},next:{title:"Coursework",permalink:"/mongodb/week-3/homework"}},d={},p=[{value:"Outline",id:"outline",level:2},{value:"Review",id:"review",level:2},{value:"Use the sample database in MongoDB Atlas",id:"use-the-sample-database-in-mongodb-atlas",level:3},{value:"Insert a document with accent",id:"insert-a-document-with-accent",level:3},{value:"Indexing",id:"indexing",level:2},{value:"Create an index",id:"create-an-index",level:3},{value:"Create a collated index",id:"create-a-collated-index",level:3},{value:"Implementing full text search using MongoDB",id:"implementing-full-text-search-using-mongodb",level:3},{value:"Exercise 1",id:"exercise-1",level:4},{value:"Role based authentication",id:"role-based-authentication",level:2},{value:"Cluster based roles",id:"cluster-based-roles",level:3},{value:"Backup and restoration roles",id:"backup-and-restoration-roles",level:3},{value:"Aggregation",id:"aggregation",level:3},{value:"Exercise 2",id:"exercise-2",level:4},{value:"Replication",id:"replication",level:2},{value:"Transactions",id:"transactions",level:2},{value:"ACID",id:"acid",level:3},{value:"Exercise 3",id:"exercise-3",level:4},{value:"MongoDB Project",id:"mongodb-project",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Feedback",id:"feedback",level:2}],m={toc:p};function g(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"outline"},"Outline"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lesson 2 review"),(0,o.kt)("li",{parentName:"ul"},"Indexing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"indexing a collection"),(0,o.kt)("li",{parentName:"ul"},"indexing a collection using a collated index"),(0,o.kt)("li",{parentName:"ul"},"implementing full text search in MongoDB"))),(0,o.kt)("li",{parentName:"ul"},"Role based authentication",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"cluster based roles"),(0,o.kt)("li",{parentName:"ul"},"backup and restoration roles"))),(0,o.kt)("li",{parentName:"ul"},"Aggregation"),(0,o.kt)("li",{parentName:"ul"},"Replication"),(0,o.kt)("li",{parentName:"ul"},"Transactions"),(0,o.kt)("li",{parentName:"ul"},"A project in MongoDB"),(0,o.kt)("li",{parentName:"ul"},"Next steps")),(0,o.kt)("h2",{id:"review"},"Review"),(0,o.kt)("p",null,"In the last lesson, we learned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Signing up for MongoDB Atlas"),(0,o.kt)("li",{parentName:"ul"},"Making a local Express server"),(0,o.kt)("li",{parentName:"ul"},"Connecting to a MongoDB server from a local Node server"),(0,o.kt)("li",{parentName:"ul"},"Creating and dropping databases and collections in Atlas"),(0,o.kt)("li",{parentName:"ul"},"Reading documentation"),(0,o.kt)("li",{parentName:"ul"},"BSON types"),(0,o.kt)("li",{parentName:"ul"},"Creating documents"),(0,o.kt)("li",{parentName:"ul"},"Creating a document in Atlas"),(0,o.kt)("li",{parentName:"ul"},"Creating a document with the MongoDB Node Driver"),(0,o.kt)("li",{parentName:"ul"},"Updating a document"),(0,o.kt)("li",{parentName:"ul"},"Deleting a document")),(0,o.kt)("p",null,"Now that we know how to read databases, collections, and documents, we are ready to move on to more advanced tasks."),(0,o.kt)("h3",{id:"use-the-sample-database-in-mongodb-atlas"},"Use the sample database in MongoDB Atlas"),(0,o.kt)("p",null,"We are going to use the sample cluster that we have already connected to in MongoDB Atlas."),(0,o.kt)("p",null,"Let's use the Atlas GUI to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new database"),(0,o.kt)("li",{parentName:"ol"},"Create a new collection"),(0,o.kt)("li",{parentName:"ol"},"Import sample data (we are interested in the AirBnB listings and reviews sample database)")),(0,o.kt)("p",null,"We now have a pretty extensive dataset that we will use for the rest of the class."),(0,o.kt)("h3",{id:"insert-a-document-with-accent"},"Insert a document with accent"),(0,o.kt)("p",null,"The first task here is to insert a document in sample_airbnb.listingsAndReviews with the following fields found ",(0,o.kt)("a",{target:"_blank",href:"/json/fields.json",download:"fields.json"},"here"),"."),(0,o.kt)("p",null,"You can use the code that we developed in lesson 2, or the GUI Hint: you can use clone in GUI"),(0,o.kt)("p",null,"This document is useful for the next tasks."),(0,o.kt)("h2",{id:"indexing"},"Indexing"),(0,o.kt)("p",null,"Let's start by visiting the official documentation:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/indexes/"},"https://docs.mongodb.com/manual/indexes/")),(0,o.kt)("p",null,"The most interesting index properties are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default id index"),(0,o.kt)("li",{parentName:"ul"},"Let's take a look in the indexes that we have in Atlas GUI sample database."),(0,o.kt)("li",{parentName:"ul"},"Index Types"),(0,o.kt)("li",{parentName:"ul"},"Index Properties"),(0,o.kt)("li",{parentName:"ul"},"Collation"),(0,o.kt)("li",{parentName:"ul"},"Covered queries")),(0,o.kt)("h3",{id:"create-an-index"},"Create an index"),(0,o.kt)("p",null,"Let's create a new index using the Atlas GUI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Index prefixing and how it affects querying")),(0,o.kt)("h3",{id:"create-a-collated-index"},"Create a collated index"),(0,o.kt)("p",null,'From the documentation: "Collation allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks."'),(0,o.kt)("p",null,"In our case, we have inserted a document with french accents, so we want to create an index that will take it into account."),(0,o.kt)("p",null,"To create a collated index supporting the French language in the shell we would:\xa0",(0,o.kt)("inlineCode",{parentName:"p"},'db.listingsAndReviews.createIndex( { name: 1 }, { collation: { locale: "fr" } } )')),(0,o.kt)("p",null,"Now, let's do the same using the Atlas GUI."),(0,o.kt)("h3",{id:"implementing-full-text-search-using-mongodb"},"Implementing full text search using MongoDB"),(0,o.kt)("p",null,"One of the special types of indexes is the text index."),(0,o.kt)("p",null,"To create a text index in the shell:\xa0",(0,o.kt)("inlineCode",{parentName:"p"},'db.listingsAndReviews.createIndex( { name: "text", summary: "text" } )')),(0,o.kt)("p",null,"Now, let's do the same using the Atlas GUI."),(0,o.kt)("h4",{id:"exercise-1"},"Exercise 1"),(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Search for the document using the index."),(0,o.kt)("p",{parentName:"admonition"},"How can we be sure that we use the index? Can we create a covered query?"),(0,o.kt)("p",{parentName:"admonition"},"Hint:\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"db.collection.find().explain()"))),(0,o.kt)("h2",{id:"role-based-authentication"},"Role based authentication"),(0,o.kt)("p",null,"Built in roles: ",(0,o.kt)("em",{parentName:"p"}," read ")," readWrite ",(0,o.kt)("em",{parentName:"p"}," dbAdmin ")," dbOwner ","*"," userAdmin"),(0,o.kt)("h3",{id:"cluster-based-roles"},"Cluster based roles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clusterAdmin"),(0,o.kt)("li",{parentName:"ul"},"clusterManager"),(0,o.kt)("li",{parentName:"ul"},"clusterMonitor")),(0,o.kt)("h3",{id:"backup-and-restoration-roles"},"Backup and restoration roles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"backup"),(0,o.kt)("li",{parentName:"ul"},"restore")),(0,o.kt)("p",null,"... many more"),(0,o.kt)("p",null,"Let's update our MongoDB Atlas database to use roles."),(0,o.kt)("p",null,"First, we are going to add a built in role using the MongoDB Atlas."),(0,o.kt)("p",null,"Now, let's add a custom, read only in AirBnB DB role using the MongoDB Atlas."),(0,o.kt)("h3",{id:"aggregation"},"Aggregation"),(0,o.kt)("p",null,"Why aggregation framework?"),(0,o.kt)("p",null,"Aggregation framework in MongoDB is modelled after the familiar concept of data processing pipelines. Documents enter the pipeline with the MongoDB structure and exit the other end transformed into BSON documents with calculated fields. Commands in a pipeline are executed sequentially and in the order that they appear in the array []."),(0,o.kt)("p",null,"There are 3 ways to perform aggregation in MongoDB: 1. Aggregation pipeline 2. Map-reduce function 3. Single purpose aggregation methods"),(0,o.kt)("p",null,"In this module, we will focus on the aggregation pipeline."),(0,o.kt)("p",null,"Some of the most important operators and how they relate with Structured Query Language (SQL):"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SQL"),(0,o.kt)("th",{parentName:"tr",align:null},"Aggregation framework"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"WHERE / HAVING"),(0,o.kt)("td",{parentName:"tr",align:null},"\\$match")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GROUP BY"),(0,o.kt)("td",{parentName:"tr",align:null},"\\$group")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SELECT"),(0,o.kt)("td",{parentName:"tr",align:null},"\\$project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ORDER BY"),(0,o.kt)("td",{parentName:"tr",align:null},"\\$sort")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LIMIT"),(0,o.kt)("td",{parentName:"tr",align:null},"\\$limit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sum() / count()"),(0,o.kt)("td",{parentName:"tr",align:null},"\\$sum")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"average()"),(0,o.kt)("td",{parentName:"tr",align:null},"\\$avg")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"join"),(0,o.kt)("td",{parentName:"tr",align:null},"\\$lookup")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'db.listingsAndReviews.aggregate([\n  { $match: { name: { $regex: /^aA/ } } },\n  { $group: { _id: "$name", average: { $avg: "$price" } } },\n  { $sort: { average: -1 } },\n  { $project: { name: 1, average: 1 } },\n]);\n')),(0,o.kt)("p",null,"What does the pipeline above do?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"matches all documents with a name starting from aA"),(0,o.kt)("li",{parentName:"ol"},"groups them by average price"),(0,o.kt)("li",{parentName:"ol"},"sorts them by average price"),(0,o.kt)("li",{parentName:"ol"},"projects(selects) name and average price in the output")),(0,o.kt)("p",null,"What's the output like?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{_id: .., name: .., average: ..}\n\n")),(0,o.kt)("p",null,"More information:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/aggregation/"},"https://docs.mongodb.com/manual/aggregation/")),(0,o.kt)("h4",{id:"exercise-2"},"Exercise 2"),(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Now, let's do the same using the Atlas GUI.")),(0,o.kt)("h2",{id:"replication"},"Replication"),(0,o.kt)("p",null,"Replication in MongoDB is used to increase redundancy and data availability. In its essence it's a way for 3 or more (or even 2 with some caveats..) servers to keep the same copy of data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"replication diagram",src:n(94783).Z,width:"620",height:"507"})),(0,o.kt)("p",null,"Writes always go to the primary and get propagated\xa0",(0,o.kt)("em",{parentName:"p"},"asynchronously"),"\xa0to the secondaries."),(0,o.kt)("p",null,"Reads can go to the primary or any of the secondaries."),(0,o.kt)("p",null,"Election process:"),(0,o.kt)("p",null,'Replica sets implement by default automatic failover. If a primary server fails, the remaining secondaries will elect the new primary. This will by default be the secondary that is most "up to date" with the primary but we can affect (rig) the election process by assigning different votes to each server.'),(0,o.kt)("p",null,"More information:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/core/replica-set-elections/"},"https://docs.mongodb.com/manual/core/replica-set-elections/")),(0,o.kt)("p",null,"Using replication we can perform a few interesting tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"delayed replica for backup. Delay backups by an hour, enabling us to recover from dropping a database in production"),(0,o.kt)("li",{parentName:"ul"},"hidden replicas for reporting. These replicas will never become primaries so we can safely apply read load to them for reporting purposes"),(0,o.kt)("li",{parentName:"ul"},"replicas in different location for disaster recovery"),(0,o.kt)("li",{parentName:"ul"},"replicas in different location to be closer to our users")),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"MongoDB introduced multi-document ACID transactions in version 4.0 which was released on July 2018. Transactions are an integral part of relational databases. Every RDBMS from the very early days relied on transactions to achieve Atomicity, Consistency, Isolation and Durability. Getting these in a non-relational database is a breakthrough that can fundamentally change the way developers and database architects design software systems."),(0,o.kt)("h3",{id:"acid"},"ACID"),(0,o.kt)("p",null,"Atomicity refers to the concept that a transactions needs to be atomic. It either successes and its results are visible to every subsequent user reading them or it fails and every change is rolled back to the point it was right before it started. It's either that all actions in a transaction occur or nothing at all."),(0,o.kt)("p",null,"Consistency refers to the database always being in a consistent state. Every database operation may complete successfully, fail or abort but in any case in the end our database must be in a state that its data is consistent."),(0,o.kt)("p",null,"Isolation refers to the visibility of transaction operations to other operations happening in parallel."),(0,o.kt)("p",null,"Durability in relational database systems refers to the property that every transaction that has successfully committed will survive in the face of failure. This usually refers to writing the contents of the committed transaction in persistent storage (hard disk or SDD)."),(0,o.kt)("p",null,"Let's create a new database\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"mongo_bank"),"\xa0with a collection\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"accounts"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'{"collection": "accounts", "account_id": "1", "account_name": "Alex", "account_balance":100}')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'{"collection": "accounts", "account_id": "2", "account_name": "Mary", "account_balance":50}')),(0,o.kt)("p",null,"This way, we have 2 users with accounts in our bank."),(0,o.kt)("p",null,"We can now transfer money between th accounts. We will do this using the Mongo shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'session = db.getMongo().startSession({ readPreference: { mode: "primary" } });\n\naccountsCollection = session.getDatabase("mongo_bank").accounts;\n\nsession.startTransaction({\n  readConcern: { level: "snapshot" },\n  writeConcern: { w: "majority" },\n});\n\ntry {\n  accountsCollection.update(\n    { account_id: "1" },\n    { $inc: { account_balance: -70 } }\n  );\n  accountsCollection.update(\n    { account_id: "2" },\n    { $inc: { account_balance: 70 } }\n  );\n} catch (error) {\n  print("error:", error);\n}\nsource_balance = accountsCollection.findOne({ account_id: "1" })\n  .account_balance;\ntarget_balance = accountsCollection.findOne({ account_id: "2" })\n  .account_balance;\nif (source_balance < 0 || target_balance < 0) {\n  session.abortTransaction();\n}\nsession.commitTransaction();\nsession.endSession();\n')),(0,o.kt)("p",null,"To which the output should be similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'WriteCommandError({\n  errorLabels: ["TransientTransactionError"],\n  operationTime: Timestamp(1561207870, 4),\n  ok: 0,\n  errmsg: "Transaction 0 has been aborted.",\n  code: 251,\n  codeName: "NoSuchTransaction",\n  $clusterTime: {\n    clusterTime: Timestamp(1561207870, 4),\n    signature: {\n      hash: BinData(0, "1x7oLuNzWehAWylVA/E9tdXLuFA="),\n      keyId: NumberLong("6655324027294318593"),\n    },\n  },\n});\n')),(0,o.kt)("p",null,"Database operations need to be inside our session if we want to benefit from transactions"),(0,o.kt)("h4",{id:"exercise-3"},"Exercise 3"),(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Transfer 40 monads from account 1 to account 2. Observe how it works perfectly fine.")),(0,o.kt)("h2",{id:"mongodb-project"},"MongoDB Project"),(0,o.kt)("admonition",{title:"Exercise",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Based on the data from the AirBnB listings and reviews collection, we want to create a front end for it."),(0,o.kt)("p",{parentName:"admonition"},"Functions:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Search for rooms by name or summary"),(0,o.kt)("li",{parentName:"ol"},"Filter by price"),(0,o.kt)("li",{parentName:"ol"},"Show the top superhosts in the page. On click through, show a list of their apartments")),(0,o.kt)("p",{parentName:"admonition"},"You can use Node/Express and the Aggregation framework if you see fit."),(0,o.kt)("p",{parentName:"admonition"},"Please use this index.html file as a starting point:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/agiamas/cyf-mongodb-2019/blob/master/index.html"},"https://github.com/agiamas/cyf-mongodb-2019/blob/master/index.html"))),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"If you have time and interest, please register to either of these classes or any other class in MongoDB university. All classes are free and on average require 6-10 hours of time per week."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://university.mongodb.com/courses/M220JS/about"},"https://university.mongodb.com/courses/M220JS/about")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://university.mongodb.com/courses/M220P/about"},"https://university.mongodb.com/courses/M220P/about")),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers."),(0,o.kt)(i.Z,{module:"MongoDB",week:"Week 3",mdxType:"Feedback"}))}g.isMDXComponent=!0},94783:function(e,t,n){t.Z=n.p+"assets/images/operations-d82dfd665e62416e2af93b07a72fe7b7.png"}}]);