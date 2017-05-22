var util = require('./utilities.js'),
    Tweet = require('./tweet.js');

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

TwitterBot.prototype.postRepeatingMessage = function(callback) {
    if (this.isRepeatingPostDelayExpired()) {
        var tweet = new Tweet(this.options.repeatingMessages.messages[0]);
        this.postMessage(tweet, callback);
    } else {
        callback();
    }
};

TwitterBot.prototype.isRepeatingPostDelayExpired = function() {
    return true;
}

module.exports = TwitterBot;