# website

This is my collection of different projects.


## Installation
```
npm i
npm run webpack
npm start
```

## Project
So far this project is based on two other projects. 

###Editor
Editor meant for journaling. I built this editor when i found it hard to find an text-editor that doesnt save your data in any way.
URL: http://localhost:3000/

###Reddit stock scraper
This scraper will search subreddits for stock tickers (strings that start with a $) and display the post.
For this to work you need to generate your own api key and add them to the .env file
URL: http://localhost:3000/reddit

```
REDDIT_USER="Your user"
REDDIT_PASSWORD="Passowrd"
CLIENT_SECRET="Secret"
CLIENT_ID="Client ID"
USER_AGENT="webb:domain.se:v1.0.0 (by u/yourUsername)"


