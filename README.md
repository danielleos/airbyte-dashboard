# airbyte-dashboard
Dashboard to display data from an OpenAPI

[![Netlify Status](https://api.netlify.com/api/v1/badges/d755dd18-0044-4081-a98b-98ddc7c89d14/deploy-status)](https://app.netlify.com/sites/anime-stats-dashboard/deploys)

Using [JikanAPI](https://jikan.moe/) which is the unofficial API for MyAnimeList (MAL) anime database.

### Requirements
- [x] Choose an Open API (e.g. http://www.omdbapi.com/, https://developer.musixmatch.com/documentation?ref=apilist.fun)
- [x] At least 3 separate data points displayed in different ways
- [ ] An ordered list with search/filter (e.g. films in a specific genre)
- [x] Be creative, although we aren't testing your design skills, we would like to see an attempt to make the interface look aesthetically pleasing.

### Running the app
- To view a demo, visit: https://anime-stats-dashboard.netlify.app/
- To run locally:
    - Clone this repository
    - Make sure you have node v15.13.0 and yarn v1.22.10 installed
    - Run the below to start the app on your localhost port 3000:
        ```
        yarn; yarn start
        ```
