## Description

An app that leverages the Yelp API and Mapquest API to find local coffeeshops and their driving distance based off an inputted address/

## To Run

- Change `YELP_BEARER_TOKEN` and `MAPQUEST_KEY` to authentication tokens from Yelp & Mapquest in `constants.ts`. I didn't include my personal keys because that seems like it could be a security thing but you can either request your own from Yelp & Mapquest or slack me for my keys.
- `yarn start` Run app locally.
- Turn off CORS in whatever browser you want to view this in
  Because of CORS as a security protocol but mostly a pain in this instance, I found the simplest method for me was to open up a Safari page and turn off CORS in Preferences > Advanced > Show Develop Menu in Menu Bar >> Develop > Disable Cross-Origin Restrictions

## To Do List

- Get rid of redux
- Expand radius of coffeeshops
- Group together coffeeshops of the same chain
- Filter by driving time
