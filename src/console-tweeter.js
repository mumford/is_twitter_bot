var util = require('./utilities.js');

function ConsoleTweeter(options) {
    this.options = options;
}

ConsoleTweeter.prototype.postTweet = function(tweet, callback) {
    if (tweet.isValid()) {
        util.logMessage(tweet.getFullMessage());
        callback();
    } else {
        util.logMessage(util.stringFormat('The supplied tweet was invalid.\n\n{0}', tweet.getFullMessage()));
        callback('Tweet is not valid.', tweet);
    }    
};

module.exports = ConsoleTweeter;