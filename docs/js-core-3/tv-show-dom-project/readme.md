# TV Show DOM Project

### Overview

You must make a web app using HTML, CSS, and JavaScript which shows details of all of the episodes of a TV show.

The episode data is provided for you as an array of objects.

The page of episodes should be generated using JavaScript (which will read the properties of each episode object).

There is an ["intro" video](https://www.youtube.com/playlist?list=PL_uDxFTCuec_mNi3BgoUSd_hZbb2NWUWA) which shows **roughly** what you will build.  However, note that these do **not** replace these documents you are now reading.

# Where do I get the episode data from?

For the simple versions of this project, you will get the episode data by calling a provided function `getAllEpisodes()`. This will return you an array of objects, each of which represents an episode.

(In later weeks you may be challenged to have your app dynamically `fetch` the data from the TV Maze API.)

In both cases, here's an example of one episode from the list:

```
{
    id: 4952,
    url:
      "http://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
    name: "Winter is Coming",
    season: 1,
    number: 1,
    airdate: "2011-04-17",
    airtime: "21:00",
    airstamp: "2011-04-18T01:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg"
    },
    summary:
      "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/4952"
      }
    }
  }
```

# Rules about the episode data

- You MUST NOT edit the static episode data. If you find that the data is unsuitable (e.g. fields are missing, or have unwanted characters), you should improve your own code so that it can deal with such issues when it **runs**.

# Rules about technology

- You should not use React, Vue, JQuery or other libraries. Why? This project is specifically for practicing the **built-in** DOM-manipulation functions you learned about in JS2.

- You can use bootstrap CSS but NOT bootstrap JS. (We recommend that you do NOT use bootstrap CSS.)

# What are the requirements for the project?

This project challenge is split into various levels of difficulty. You should challenge yourself to complete as many levels as possible, in order.

- [level 100](./level-100.md)
- [level 200](./level-200.md)
- [level 300](./level-300.md)
- [level 350](./level-350.md)
- [level 400](./level-400.md)
- [level 500](./level-500.md)
- [level 999 (further work)](./level-999.md)

# Getting started

Follow the instructions in [getting-started.md](./getting-started.md)

# How to get a code review

You will be instructed when to ask for a code review. When it's time to do so, follow the instructions in [code-review.md](./code-review.md)
