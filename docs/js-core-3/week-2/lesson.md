---
id: lesson
title: JavaScript Core III - 2
sidebar_label: Lesson
---

import Feedback from "@theme/Feedback";

## Learning Objectives

- The learner should understand what the acronym API means
- The learner can define what an API's purpose is and why it is useful
- The learner should be able to edit the structure of a API URL and to change the data retrieved from the server
- The learner should be able to define what a `Promise` is
- The learner should understand what `fetch` is and what it is used for
- The learner should be able to use `fetch` to retrieve `JSON` from an API
- The learner should be able to parse the `JSON` and extract data from it
- The learner should be able to use `DOM` manipulation to add content to the `DOM`
- The learner should understand `window.onload` and `document.onload` and should be able to assign functions to run at specific life cycle events

## Agenda

The purpose of this class is to introduce to the trainee:

1. Debugging Quiz
2. How the web works
3. What are `APIs` and how to interact with them
4. How to use the `fetch` API to do AJAX calls
5. PD (How to give and receive feedback effectively)

## 1. Debugging Quiz

:::note Quiz

Let's see what you remember from last week!

You should _answer in a thread on Slack_

1. What are the four questions we ask ourselves in the Debugging Framework?
2. What are three of the tools we could use to debug our programs?
3. What is a `syntax` error?
4. What is a `reference` error?
5. What is a `type` error?

:::

## 2. How the web works - quick recap

In this session we will look at how computers talk to each other using the web.

At the core of the web is the URL, which stands for Uniform Resource Locator. We use the term resource to mean anything that a server might return such as webpage, CSS, JavaScript, image, data etc. A good way to think of a URL is as an address. It allows us to refer to webpages, images, data etc that is stored on servers elsewhere.

### Methods

The main methods used to send requests on the web are `GET` and `POST`. However, later in the course when we look at building APIs using Node we will also look at other methods such as `PUT`, `PATCH` and `DELETE`.

A `GET` method is a way of asking a server for a webpage, resource or a piece of data. For example, when we type a URL into a browser and submit it. The browser will send a `GET` request.

A `POST` method is used to send data to a server.

The main difference between `GET` and `POST` is that a `POST` method has a body, that is it can contain some data that we are sending. Whereas a `GET` does not have a body since we use it to request data.

### Headers

Each request and response sent has a section at their beginning called the head, which contains a start line and a series of headers. The headers each have a name and a value, and indicate something about the request or response as a whole, such as the time a response was generated, its content type or its size.

As an example, the following shows the first few lines of the head section of a request made by a web browser for the homepage of Code Your Future (note the start line and then the series of headers):

```
GET / HTTP/1.1
Host: codeyourfuture.io
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-GB,en;q=0.5
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
```

and, likewise, the head section of the response containing the HTML for the homepage (don't worry about the exact details just yet!):

```
HTTP/1.1 200 OK
Server: nginx
Date: Sat, 29 Apr 2023 18:38:51 GMT
Content-Type: text/html; charset=UTF-8
Transfer-Encoding: chunked
Connection: keep-alive
X-Powered-By: PHP/7.4.22
Last-Modified: Sat, 29 Apr 2023 18:38:51 GMT
ETag: "c95e31495c17f4e519c018d504c918f6"
Content-Encoding: gzip
Vary: Accept-Encoding
X-Frame-Options: SAMEORIGIN
```

You can find request and response headers for web pages that you are viewing via the 'Network' tab of your browser's dev tools.

### Status codes

The start line of each response returned needs to contain a status code which tells the client whether the request was successful. If the request succeeded the response's status code will usually be `200`. If the resource you tried to access with a request was not found the status code used for the response is `404`.

Some status codes you may have come across before are:

- `200` _OK_ - indicates that a request (usually a GET) was successful
- `301` _Moved Permanently_ - used to redirect a request when a page has been permanently moved to another URL
- `401` _Unauthorized_ - correct credentials for a user of a web service were needed and not given
- `404` _Not Found_
- `500` _Internal Server Error_

The response codes can be grouped into categories:

- 1xx: Informational
- 2xx: Success
- 3xx: Redirection
- 4xx: Client Error
- 5xx: Server Error

If you want a fun look at HTTP codes, take a look at [https://httpstatusdogs.com/](https://httpstatusdogs.com/) or [https://http.cat/](https://http.cat/) if you are cat person. For a technical perspective take a look at [https://en.wikipedia.org/wiki/List_of_HTTP_status_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

### Content type

When sending data across the web, we need to specify in the header what the request or response contains. To do that, the `Content-Type` header is used. That way the receiver knows what to do with the data received.

Common content types include:

- `text/html` - HTML web page
- `text/css` - CSS
- `image/jpeg` - JPEG image
- `application/javascript` - JavaScript code
- `application/json` - JSON data

### Exercise

:::note Exercise

In Slack post answers to the following:

- What can HTTP headers contain?
- What is the purpose of status codes?
- What can an HTTP message contain?

:::

## 3. What are APIs and how to interact with them

### Explanation

- API stands for `Application Programming Interface`
- APIs are created by providers and used by consumers
- It is a specific part of a larger system that can be contacted by other systems, for example from the internet.
- APIs on the web are usually made up of one or many "endpoints", which are URLs that an outside consumer can connect to
- Some well-known APIs are [the Facebook API](https://developers.facebook.com/), [the Twitter API](https://developer.twitter.com/en/docs), [the Google Maps API](https://developers.google.com/maps/documentation) and many many more
- In particular, an API doesn't care what language or technology is used in the consumer or the provider

An API is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it. An example of a server is the application on a computer hosting a website and an example of a client is the browser on the phone trying to access the website.

#### Why do we need APIs?

Imagine that I am a big social network and I want to give developers all over the world access to the data on the people on my website.

What are some problems that I would have with sharing my data with everyone?

1. Some of the information that I have is public (for example, people's names) whilst other information I have is private (for example, email addresses). I want to make sure that I only ever give developers access to people's names but never to their email addresses - otherwise they could send them spam email.
2. I want to make sure that when developers ask for my data I can control who has access to it. I like that my users' data is being used to make their lives better but I don't like it when companies try to sell them new stuff they don't need.
3. Some developers might want to change some of the users' details on my social network and this would get very messy quickly if people where allowed to change whatever they wanted.

An API is a special type of program that acts as a **gatekeeper** to all of this information. Having an API means that I can control which information is shared about my users and who it is shared with. Perfect!

#### Types of APIs

- Private: for employees only under a company network for internal use.
- Semi-private: for clients who paid for the API.
- Public: for everyone on the web (but may or may not need an account to use).

##### Examples

Here is the website for the API for Transport For London, which is the authority that runs public transport services within London.

https://api.tfl.gov.uk

The data from this API will be used by many apps that you use every day - Google Maps and Citymapper to name two.

This endpoint will get location of all of the bike points in London, which are docking stations for bikes that you can hire.

https://api.tfl.gov.uk/BikePoint

That's a lot of bikes! It would be better if we could search for a location. Luckily, this API lets us search using placenames.

https://api.tfl.gov.uk/BikePoint/Search?query=Clerkenwell

This API also has lots of other endpoints that we can use to get other data. For example, let's find information about air quality in London.

https://api.tfl.gov.uk/AirQuality

As you can see, the URL changes the data that we get from the API. This can be broken down like this

<img src={require('!file-loader!./assets/api-breakdown.png').default}/>

### Exercise (5 mins)

:::note Exercise

The purpose of the exercise is to get used to interpreting API documentation.

Let's use the Numbers API. The documentation can be found at http://numbersapi.com/.

1. Read the "URL Structure" section and try each endpoint in the browser.
2. Retrieve a fact about today's date via the `date` endpoint.

:::

#### Recap

:::note Recap

##### Question

Which of the following statements below about APIs is false?

A) Public APIs can be accessed by anyone on the Internet.
B) You must use JavaScript to access an API.
C) APIs can control access to data or features of an application.
D) You can change data via an API.

##### Question

Give an example of a company that uses an API to allow access to their data.

##### Question

What is the `myapi/` part of a url called in this url?

http://www.google.com/myapi/

:::

## 4. How to use `fetch` to do network requests

### Explanation

- Fetch is a function to request from other places on the web
- Fetch is defined in the browser which means it can be used without using an external library (`window.fetch`)
- Fetch is available in nearly all browser but it's good to check which ones it won't work in
  - We can use this website to help us - [caniuse.com](https://caniuse.com/#feat=fetch))
- Fetch API documentations by Mozilla [link](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Using `fetch`

Fetch uses a JavaScript pattern called "Promises" which has a very specific structure.

You can think of a Promise as you would think of a promise you make to another person - you make a promise that something will happen in the future. For example - I promise to call you later, I promise to go to the shops and buy milk later.

Using Promises allows us to schedule functions to be called after some asynchronous code finishes running. We can specify different functions depending on whether the asynchronous code was successful or ran into an error.

Promises can make it easier to split our code into small functions and make code easier to read. They also make it easier to handle errors.

In this example we

1. Get the `Promise` that we will get the milk from the shops (this could take a long time so it's good that it's a `Promise`!)
2. When the milk has arrived from the shop `then` I should drink it and `return` the bottle so I can do something else with it
3. When I've drank the milk `then` I should recycle the bottle
4. If anything goes wrong with those steps I should `catch` the error and `warn` everyone what happened

Here is an example of this code:

```javascript
getMilkFromShops
  .then((milk) => {
    console.log(`I've got the milk`);
    milk.drink();
    return milk.bottle;
  })
  .then((bottle) => {
    console.log(`I'm going to recycle the bottle`);
    bottle.recycle();
  })
  .catch((error) => console.warn("Oh no, I dropped the milk"));
```

_Note: This is "Pseudo Code"- meaning it doesn't work! This is just to demonstrate how it **might** work_

### Live Coded Examples

#### Example 1

:::note Teacher-Led Live Coding Example

Let's step through how the Fetch function is used and what it is comprised of

```javascript
//Retrieve the JSON
fetch("https://cat-fact.herokuapp.com/facts")
  // Get the response and extract the JSON
  .then(function (response) {
    return response.json();
  })
  // Do something with the JSON
  .then((headlines) => {
    console.log(headlines);
  })
  // If something goes wrong
  .catch((error) => console.log(error));
```

:::

#### Example 2

:::note Teacher-Led Live Coding Example

Wouldn't it be cool to make a new friend with just the click of a button?

Write a function that makes an API call using `fetch` to `https://www.randomuser.me/api`

- The function should make an API call to the given endpoint: `https://www.randomuser.me/api`
- Log the received data to the console
- Incorporate error handling
- Show how you can build a profile page for the user using the DOM
  - Add a name
  - Add a profile picture
  - Add some styling using CSS

:::

### Error Handling

We saw earlier that each HTTP response contains an status code which indicates if our request was successful or not. If the our request failed we usually want to handle it appropriately.

We can handle these errors gracefully in your code by checking the `status` and `statusText` value of the response:

```javascript
fetch("https://httpstat.us/500")
  .then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    }
  })
  .then((jsonResponse) => {
    // do whatever you want with the JSON response
  })
  .catch((error) => {
    // Handle the error
    console.log(error);
  });
```

### Group Exercise

:::note Group Exercise

In groups the trainees should create a page of details about the United Kingdom.

The API endpoint can be found [here](https://restcountries.com/v3.1/name/Great%20Britain)

The website should include

- The name of the country
- The country's capital city
- An unordered list of the country's name in other all of the other returned languages

#### Getting Started

1. Go to [this Glitch Project](https://glitch.com/edit/#!/js3-2-country-exercise-v2?path=README.md)
2. Click `Remix to Start` to being working

#### Steps

Example `html` and `javascript` files can be found in the section below

1. Create a `HTML`, `CSS` and `JavaScript` file to hold different types of code
2. In your `HTML` file, write a simple basis for your website (e.g. [this](https://www.sitepoint.com/a-basic-html5-template/))
   - Make sure all of your `HTML`, `CSS` and `JavaScript` files are linked together!
3. Write a function using fetch that retrieves the `JSON` from the _Country API_
   - To make sure it's working print the JSON to the console using `console.log()`
4. Create a `h1` tag on the website using DOM manipulation and add the country's name inside it
   - Go back to [Week 5](/js-core-2/week-2/lesson) if you need a reminder
5. Create a `h2` tag on the website using DOM manipulation and add the capital city's name inside it
6. Create a `ul` tag on the website using DOM manipulation
   - For each of the translated names in the JSON, add a `li` tag
7. Uncomment the lines inside `onLoad()` to load other countries details!

#### Finished Example

You can find the finished example of this website [here](https://codeyourfuture.github.io/completed-country-website/).

:::

:::note Extra Exercise

- Load the country's flag into an `img` tag
- Add CSS to make your website look really nice
- Add other information from the JSON to your Country Details

:::

#### Recap

**Question (5 mins):**

:::note Question
Complete the following sentence:

Fetch is a web API that allows you to **\_** from **\_**.
:::

**Task (5 mins):**

:::note Question

Complete the rest of this code to connect to the following API: `https://dog.ceo/api/breeds/image/random`

```js
fetch(_____)
  .then(_____)
  .then((body) => console.log(body))
  .catch((error) => console.log(error));
```

1. Post your code on Slack
2. Post the image you retrieved on Slack

:::

## PD (How to give and receive feedback effectively)

**Session objective:** In this session we will look into different ways of providing feedback.

Feedback is a valuable tool for indicating whether things are going in the right direction or whether re-direction is required. It is also an effective way to help people develop and grow professionally. How feedback is communicated will not only determine how effective it will be but also how positive its impact will be. In this session, we will look into different ways of providing feedback and will go through different scenarios that will help us understand the power of providing and receiving effective feedback.

:::note Exercise (5 minutes)

**Exercise objective:** To understand positive and negative feedback.

Let’s share our understanding of what feedback is. Volunteer to explain your definition of feedback.

Once a few trainees have expressed their opinions, volunteer to describe the differences between positive and negative feedback. Do you think negative feedback is a bad thing?

**Definitions**

**Positive feedback**: This is the type of feedback that we all want to hear, it’s when someone praises our work.

Appreciation and positive remarks in the workplace can help an employee feel appreciated, can help to reinforce good behaviours and will help employees with their professional development.

However, it is important not to overuse positive feedback as its value will decrease. You may find it more valuable to hear positive comments from someone who almost never praises you for your work than a coworker constantly telling you how awesome you are. Too much positive feedback can also make employees complacent and feel less challenged in their roles.

Also, specific positive feedback can be much more effective than general positive feedback. The first feedback is better than the second one: 
1. The way you presented graphs to show our progress really made it easy to notice what tasks I needed to focus on which helped me get the project delivered.
2. It was great working with you, it helped the project succeed.

**Negative feedback:** This is the kind of feedback that people don’t like to hear, especially without warning. Negative feedback can make individuals feel attacked, demotivated, and undervalued at work.

However, negative feedback can be effective when utilized correctly. It becomes **constructive feedback** and identifies ways an individual can improve.

**Destructive feedback** is the direct opposite of constructive feedback and it’s not very useful. Instead of focusing on the work, destructive feedback will focus on the individual and is very personal in nature. There is little productive advice given and the feedback tends to point at faults without any solutions.

:::note Exercise (25 min)

**Exercise objective:** To practice providing both positive and negative feedback.

Work in small groups. Take turns to play the roles below and answer the following questions for each situation:

- Was feedback positive or negative?
- Was the way it was communicated appropriate? Why?
- How would you improve it?
- What would be your reaction after receiving such feedback?
- Were people in the right mindset to give and receive feedback?

*Situation 1*: Tom asked Katie for help on the code he was writing. 

Tom: “Hi Katie, would you mind spending a few minutes looking at this function I am working on? I can’t seem to find what’s wrong with the code.”

Katie: “I am extremely busy and stressed with a deadline, but let me have a look.”

Tom: “Here is the function. Do you see anything wrong with it?”

Katie: After looking at the code for some time… “Seriously? How could you miss this? You are missing an closing bracket. You need to be more careful when writing code so you only ask for help for things that are not this obvious.”

Katie walks away.

*Situation 2*: Patricia stops by Carla’s desk.

Patricia: “Hi Carla. Just wanted to let you know how much I appreciate your clear messages on Slack you did in the last project, they really helped me understand what you were working on. I hope we get to work together again”

Carla: “Oh Thank You! You made my day!”

*Situation 3*: Team members in a project retrospective meeting where they discuss things they did well and things that need improvement.

Jessica: “I think overall the project went well but developers were constantly waiting for Karen to finish testing their code before they could deploy to Production. She was overwhelmed with the amount of work on her plate”

Karen: “Yes, I felt bad for blocking deployments but I cannot give my approval until I have completed testing the code.”

Jessica: “Did you ask for help? We can have developers take the role of QA tester when you are overwhelmed.”

Karen: “No, I did not ask for help. I did not think of this as an option. I will start implementing this strategy going forward”

Volunteer to share your role-playing experience with the class.

:::

:::note Exercise (20 min)

**Exercise objective:** To practice turning destructive feedback into constructive feedback.

Work in small groups. Turn the feedback below into constructive feedback. Try to be creative.

*Feedback 1*: After an important deadline was missed, Ryan’s manager blamed Ryan for not working fast enough. The manager told Ryan that he had no idea what he was doing. Ryan’s personality was being questioned rather than his work. The feedback provided no helpful insights to help Ryan perform better.

*Feedback 2*: During a project retrospective, Peter stood up, went to the board and put up a huge graph showing developers' contributions during the project measured by the number of code commits. He immediately pointed out how low Joseph’s numbers were and added he was not surprised as he has always been lagging when compared with the rest.

*Feedback 3*: Carol went to Chris and told him she is tired of wasting her time telling him what to do and explaining things over and over again. Chris has been in the company already for 6 months and still needs to constantly be helped with his daily tasks. She told him to better start becoming independent or she will escalate with his manager.

Volunteer to discuss your work with the class.

:::


## Coursework

Click [here](./homework) to view the homework for this lesson.

## Feedback

Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers.

<Feedback module="JavaScript Core 3" week="Week 2" />
