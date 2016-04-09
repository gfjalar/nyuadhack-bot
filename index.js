// Importing twitter-node-client and a corresponding config file
var Twitter = require('twitter-node-client').Twitter
var config = require('./config.js')

// Initializing a Twitter API client
var twitter = new Twitter(config.twitter)

// Initializing a hacky Twitter client
var hackTwitter = new Twitter(config.twitter)
hackTwitter.baseUrl = 'https://twitter.com/i'

function post(status) {
  // Creating a tweet
  var tweet = {
    status: status
  }
  // Posting the tweet
  twitter.postTweet(tweet, console.log, console.log)
}

function search(successCallback) {
  // Creating a tweet search query
  var query = {
    'q': 'nyuadhack -filter:retweets -filter:replies',
    'result\_type': 'recent',
    'count': 100
  }
  // Searching for tweets matching the query
  twitter.getSearch(query, console.log, successCallback)
}

// Creating a translation query
var query = {
  dest: 'ar',
  id: '717932486358089728'
}
// Translating a tweet
hackTwitter.getCustomApiCall('/translations/show.json', query, console.log, console.log)
