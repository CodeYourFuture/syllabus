---
id: workshop
title: Technical Interviews
sidebar_label: Technical Interviews
---

# Technical Interviews

Companies use different kinds of interviews when working out who to hire. Not all companies require technical interviews when applying, but for those that do, the style of interview is quite different from other interviews. It's useful to be prepared for this kind of interview.

## What is a technical interview?

Companies use technical interviews to test your technical aptitude. Technical interviews focus on how you will approach problems in the future if you get the job. They tend to focus on a few areas:

* How do you think about tasks and how to solve them?
* How able are you to turn an idea for how to solve a problem into code?
* How well can you communicate your thoughts?
* Are you easy to help when you're stuck?
* How open are you to other ideas?

Most other interview types expect you to have answers to most of the questions you're asked. Technical interviews are _not_ there just to show that you know all of the answers. You are expected to ask questions, and it's fine if you don't know some things - that's part of the point of the interview, to see how you work when you _don't_ already know all of the answers.

## What is your goal in a technical interview?

Your goal in a technical interview is to show that you're going to be someone the interviewer wants to work with.

Think about people you've enjoyed working with - what traits do they have? I'll suggest a few:

* Friendly - no one likes someone getting angry with them!
* Patient.
* Thoughtful - jumping straight into your first idea doesn't make it likely that you're doing the best thing.
* Open to feedback - if you have an idea that may help me, it's frustrating if I don't listen to it.
* Communicative - if I'm stuck, and you don't know what I'm thinking, it's hard for you to participate.
* Able to think through a problem.
* Able to write code that works.

Notice that **most of these are not technical traits**. While you're solving technical problems in a technical interview, most of the point of the interview is to see how you interact with people, and how you think.

## What structures do technical interviews have?

Not all technical interviews are the same, but they tend to have similar elements:

* The interviewer describes a problem.
* You're expected to ask some questions about the problem (they may not tell you this, but it is _always_ expected!)
* You solve the problem.
  * Maybe this will be pair programming where you're at a keyboard together, maybe you'll be given a laptop or editor like CodeWars to write in online, maybe you'll be given a whiteboard to write on with a pen, or maybe you'll just talk.
  * You are allowed to ask questions, and even if you're writing, you should always talk about what you're writing.
* The interviewer will ask you some questions about your solution.
* The interviewer may change the problem a bit, and ask you to solve it (again, either by writing it down, or just by talking about it).

You may be asked to solve one problem, or more than one, but ordinarily you'll spend somewhere between 15 and 60 minutes on each problem you're asked.

The interviewer probably doesn't care what programming language you use (so you should probably use Javascript!), and will say if they do.

TODO: Work out how to advise trainees get this information: _Some_ interviewers care a lot about details (like remembering every `;`, and that you remember whether a function is called `startsWith` or `beginsWith` or `hasPrefix`). Others don't. It's worth asking how precise you need to be.

:::tip Remember
The goal is not to get to a solution as fast as possible. The goal is to show that you're going to be a good person to work with.
:::

Let's work through an example interview question to get a feel for how this works:

Let's imagine an interviewer asked you:

> "I want you to write a function which finds the longest word in a sentence".

## Make sure you understand the problem, and state it back

The first thing you should do is: **make sure you understand the problem**. If you don't understand the problem, **ask questions**. If you _do_ understand the problem, state the problem back to the interviewer, and state any assumptions you're making. Check that the assumptions are ok.

For example, you may say back:

> "Ok, you want me to write a function, which accepts one parameter which is a string, and returns a string back which is the longest word found in the parameter?"

Notice that there's more detail in this - we're talking about parameters, types, etc. The interviewer will probably say "Yes, that's right", but _you may be surprised_! Maybe they will say "actually, the parameter is an array of words, not a string". It's useful to make sure you agree on the problem - otherwise you may spend a lot of time solving a harder problem than the interviewer meant.

Interviewers _intentionally_ don't give you all of the information about a problem, to see how much you think about the gaps. Part of the test is to see what questions you ask, and what assumptions you make.

:::tip
You generally _don't_ want to be making assumptions when solving problems - you always want to ask when things are underspecified, or say out loud what you're assuming and check with the interviewer that that's the right assumption to be making.
:::

## Think about the edge cases, and talk about them

Think about what the edge cases of the problem are, and talk about them. This is _really important_. It shows that you're going to be thoughtful, and write good software for the company. Think through every word in the problem statement, and work out which ones aren't completely clear. And think about examples that make those edge cases clear. For instance, in our example, here are some questions you may ask:

* What exactly is a word? In the sentence "I have 7 cats, and they're all great.", which things are and aren't words?
  * Is "7" a word?
  * How do we need to handle punctuation? "cats," should probably be "cats", but "they're" should probably stay as "they're"? Or maybe words containing punctuation shouldn't count?
* What should we do if there's more than one longest word? For example, the sentence "I like cats".
  * Maybe we should return an array with both of them?
  * Maybe we should return the one that comes alphabetically first? Or last?
  * Maybe we should return the first one in the sentence? Or the last one? Or just any one?
  * Maybe you should throw an exception?

For each edge case, if there seems to be an obvious answer, suggest it and check if that's ok (_even if you think it's obvious_ - the interviewer may still have a different idea). For instance, you may say:

> "I think we should strip any leading or trailing punctuation from each word - sound ok?"

If you _don't_ think there's an obvious answer, **ask** (ideally with an example, to make sure you're talking about the same thing). For instance, you may say:

> "What should I do if there's more than one longest word? For instance in the sentence 'I like cats', both 'like' and 'cats' are four letters?"

The interviewer may tell you what to do, or may ask you what you think. If they ask you, give your answer _and the reason why you think that_. For instance you may say:

"It probably doesn't matter _which_ word we return, but it'd probably be useful for our function to be consistent, so maybe returning the first longest word in the sentence."

Your interviewer may also tell you that you don't need to worry about a particular edge case, e.g. they may say:

> "We know that this function will only be called with sentences that don't contain any punctuation - you can just split on whitespace."

## Solving the problem

Now that you understand and are agreed on the problem, it's time to make a solution!

(We're going to assume you're writing the solution, but the same ideas apply if you're just talking about it).

### Get something working, then get it great

Your next step is to come up with a solution. Some important guidelines:

#### It's more important to come up with _a_ solution than the perfect solution.

So get _something_ working, and then you can think about restructuring it if you want to improve it.

For example, if you think you can either solve a problem with a `for` loop or with a few calls to `map` and `filter`, do whichever one you think is easiest.

Once you've got that working, you can talk to your interviewer about improving it. e.g. after writing a solution with a `for` loop you may say "I think this would be cleaner if I used `filter`" - the interviewer may let you do that, may say "yeah, maybe, but don't worry about doing it, I'd rather talk about something else", or may ask you to talk through the difference without actually writing down the changes.

One of the reasons for this is that if your interview runs out of time, if you've solved a problem an easier way, an interviewer can easily say "They solved the problem, and could talk about how they'd improve/finish it". If you try to solve a problem in a complicated way, and don't finish, the interviewer can only really say "They didn't solve the problem".

#### It's really <ins>really</ins> important that you talk through what you're thinking, _particularly_ if you're stuck or confused.

:::tip Remember
An interviewer's goal is to see you at your best. They want you to succeed, which means if you need a little hint, they want to give it to you. But they can only do that if they know what you're stuck on.
:::

It can feel unnatural to talk through what you're thinking, _particularly_ when you're confused or stuck. But in a technical interview, it's _really_ important to do it anyway.

Here's an example of how you might talk aloud for our example problem:

> I need to split the string into words, and then I need to find the longest word...
>
> To split the string into words, I need to remove any punctuation, and then split it on whitespace.
>
> Let's start with that, and I can work out the longest word part after.
>
> Ok, so I know I can use String.replace to get rid of the punctuation, as long as I know what characters are punctuation... But I'm not sure how to work out which characters are punctuation.

At which point your interviewer may say something like "Let's assume there's no punctuation" (because they're not interested in that part), or "assume you can call a function called stripPunctuation()" (because they know we use libraries for lots of things, and this isn't what they want to focucs on), or they may give you a hint, like "could we use a regular expression to find all of the characters that _aren't_ letters or whitespace?". But **if the interviewer doesn't know what you're thinking, they can't help** - and they want to help.

:::tip Remember
An interviewer wants to see what you can do, not watch you struggle - they will help if they can!
:::

Saying aloud what you're thinking also allows the interviewer to see how you're thinking about the problem, which is something they want to see - you're making it easy for them to say "Yes, I saw them break down the problem in a logical way" and hire you.

One other benefit of saying what you're thinking is it means **if you're going in the wrong direction, the interviewer can help out**! Imagine you're quitely trying to work out how to strip punctuation from a string, and the interviewer doesn't care about punctuation at all. If you're saying what you're thinking, the interviewer can say "don't worry about that, it's not the interesting part of the problem". If you're just sitting quietly, the interviewer may think you're trying to work something else out, and can't help point you in the right direction.

#### Naming is really important in an interview

Because you're trying to quickly convey code to your inteviewer, it's _even more important than usual_ to use clear names for variables. If you have variables `x`, `y`, and `z`, neither you nor the interviewer will probably find it very easy to follow your code. Pay attention to your variable names!

#### Run through examples, out loud

Once you think you've finished part of the problem, try talking through your code with an example, line-by-line. You have lots of experience of this from the "Playing computer" exercises you've done through the course.

Your goal here is both to **check that your code works**, and to **show your interviewer that your code works**. It also shows that you're someone who cares that their code works, which is a really good thing in a colleague!

For example, let's say you've written the following solution to our example problem:

```js
function longestWord(sentence) {
    const sentenceWithoutPunctuation = sentence.replace(/[^A-Za-z ]g/, "");
    const words = sentenceWithoutPunctuation.split(" ");
    let longestWord = words[0];
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
```

Play computer with this code! You may say something like:

> `sentence` starts as "I like cats!"
>
> After running the replace, `sentenceWithoutPunctuation` will be "I like cats"
>
> After the split, `words` will be the array `["I", "like", "cats"]`.
>
> `longestWord` will start off as the string `"I"`.
>
> We're going to loop through the words - the first time, `word` will be `"I"`
>
> `"I".length` is 1 which is not greater than `"I".length"` which is also 1 so we skip the body of the `if`, and move on to the next word.
>
> `"like".length` is 4 which is greater than 1, so we set `longestWord` to `"like"`, and continue around the loop.
>
> `"cats".length` is 4, which is not greater than 4, so we skip the `if`.
>
> That's the end of the loop, so we will return `"like"`, which is the longest word of the sentence.

If you find a problem with your code, say, and fix it! We all make bugs - by noticing the bug yourself, you're showing the interviewer that you pay attention to your code and whether it's right.

It's a good idea to talk through each of the edge-cases you came up with earlier in the interview.

If you're writing code on a text editor or whiteboard, it can also be useful to write values of variables next to them while you're talking through the code, so you don't have to remember them (and to make it easier for your interviewer to follow) - you can delete/erase the old values when they get overwritten. So the above code, in the middle of talking through an example, may look like:

```js
function longestWord(sentence) {
    const sentenceWithoutPunctuation = sentence.replace(/[^A-Za-z ]g/, ""); // "I like cats"
    const words = sentenceWithoutPunctuation.split(" "); // ["I", "like", "cats"]
    let longestWord = words[0]; // "I"
    for (const word of words) { // word = "like"
        if (word.length > longestWord.length) { // 4 > 1
            longestWord = word;
        }
    }
    return longestWord;
}
```

#### Suggest possible refactorings/improvements

If you think you'd like to change your code to improve it (e.g. to improve a variable name, or to extract a function for a piece of repeated code), describe how you would like to change it to your interviewer.

Because writing code on whiteboards or shared text environments can be fiddly, the interviewer may just say "That's a good idea, but let's not bother", or they may ask you to make the change. But _you_ suggesting an improvement highlights that you care about your code quality.

Of course, if you think your code is fine as it is, that's fine too!

## Answering questions about your solution

Your interviewer may now ask you some questions about your solution.

Some examples of things the interviewer may ask about:
* Why you chose to do something one way rather than another (e.g. why you used a `for` loop instead of a call to `map`).
* Whether there are any interesting edge cases your code doesn't handle.
* If there is anything you would change about the code.
* TODO: Think about how to discuss: If there are any trade-offs you've made in your code
* TODO: Think about whether to discuss efficiency at all.
* TODO: Expand this list.

:::tip
Asking you about other ways of solving the problem does not mean you did it wrong! It can still be interesting to talk about other ways to do things, even if yours is a good one!
:::

## Handling changing constraints

After you've finished solving the problem, your interviewer may ask you to change your code, or change the problem a bit. **This does not mean anything was wrong with your code**, it's a normal way to expand a problem.

For example, with our example question, the interviewer may tell you that, actually, words containing punctuation should be completely ignored and must never be returned, or that punctuation inside words counts as a letter. The interviewer may ask you to change your code, or may just ask you to talk through how you would change it without actually doing so.

When making this kind of change, follow exactly the same steps as you did the first time - make sure you understand the problem, talk through any edge cases, and remember to keep thinking aloud!

Follow-up questions and changes **do not mean that you made a mistake**. They're a normal part of an interview - don't worry about them.

## Workshop

We're now going to split into breakout rooms and practice some interview questions together. Your TA will have a list of technical interview questions to try out.
