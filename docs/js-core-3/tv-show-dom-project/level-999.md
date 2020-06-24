# Level 999 - Ideas for further work

Here are some ideas for consideration for further work

- Add cast listing to your show listing, http://api.tvmaze.com/shows/1?embed=cast
- Add cast listing to your episode listing, http://api.tvmaze.com/shows/1?embed=cast
- Allow clicking a cast member to present a view of all shows the person has appeared in http://api.tvmaze.com/people/1/castcredits
  - linking those back into your episodes view of each show.
- Truncate long summaries and provide a "... read more..." control to reveal more.
- Allow the user to choose to have the show list sorted by rating (highest rated shows first)
- Have your search support start-of-word search, or other search types.
- Make the browser's back and forward buttons navigate through your changed views (see History.pushState()).
- Allow user to mark "favourite" shows
- Allow user to store notes on each episode
- Use local storage to cache the above, and perhaps also to cache episode lists
- Paginate through results with a "load more" button - don't load 100s of episodes at a time.
- Experiment with infinite scroll
- Handle errors from fetch
- Responsive design
- Semantic HTML
- Accessibility
- Style your page to fit the theme of the show (colours, typography, background images, etc). Commit to one show to do this.
- Season selector (see screenshot)

Screenshot of example season selector layout - you would click to load episodes for the season.

![screenshot of example Season Selector](./example-screenshots/example-season-selector.jpg)

[<< level 500](./level-500.md) - [top](./readme.md)
