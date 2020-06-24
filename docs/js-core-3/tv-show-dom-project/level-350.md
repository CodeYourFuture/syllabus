# Level 350 - Switch to fetching _live_ data!

(This is a short level to help you transition to using live data.)

**Pre-req**: For this level you will have to have learned to use fetch() to `GET` JSON content from an API.

### Requirements

1. Complete all requirements from level 300
1. When your page loads, it must load the episodes (for the SAME show) from TVMaze API, using `fetch`, NOT from the provided `getAllEpisodes` function. (See below for the API "endpoint" (URL) to fetch.)
1. Your search and episode selector must continue to work as specified in level 300.
1. Your page MUST NOT re-fetch the episodes every time the user types a character into your search field!

### Note on fetching the list of episodes

To get the episodes for the Game of Thrones TV show, you would make a GET request for this URL: https://api.tvmaze.com/shows/82/episodes, using fetch.

- Try that link in the browser. It just returns a plain text file, containing JSON.

- Notice the structure. Is the top level an array? An object?

- You **should** notice that the JSON returned is exactly what was originally provided for you by the function in `episodes.js`.

- Now you are seeing where we originally obtained the data from!

### Learn about the API from its documentation

You can see that this endpoint has been documented here: https://www.tvmaze.com/api#show-episode-list

### Loading a different show - just for fun

From the documentation above you can see that the show id is mentioned in the URL.

Try changing that number and obtaining an episode list for other tv shows.

Examples:

- https://api.tvmaze.com/shows/82/episodes - Game Of Thrones
- https://api.tvmaze.com/shows/527/episodes - The Sopranos
- https://api.tvmaze.com/shows/22036/episodes - Planet Earth II
- https://api.tvmaze.com/shows/5/episodes - True Detective
- https://api.tvmaze.com/shows/582/episodes - Fresh Prince
- https://api.tvmaze.com/shows/179/episodes - The Wire
- https://api.tvmaze.com/shows/379/episodes - Mythbusters
- https://api.tvmaze.com/shows/4729/episodes - Scrapheap Challenge

[<< level 300](./level-300.md) - [top](./readme.md) - [level 400 >>](./level-400.md)
