var util = require('./utilities.js');

function TwitterBot(options, tweetDestination) {
    this.options = options;
    this.tweetDestination = tweetDestination;
}

TwitterBot.prototype.postMessage = function(tweet, callback) {
    // Do stuff, then invoke the callback

    if (tweet.isValid()) {
        this.tweetDestination.postTweet(tweet, callback);
    } else {        
        callback('Tweet is not valid.');
    }    
};

module.exports = TwitterBot;