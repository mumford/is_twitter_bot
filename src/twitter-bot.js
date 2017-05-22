var util = require('./utilities.js');

function TwitterBot(options) {
    this.options = options;
}

TwitterBot.prototype.postMessage = function(tweet, callback) {
    // Do stuff, then invoke the callback

    if (tweet.isValid()) {
        callback();
    } else {        
        callback('Tweet is not valid.');
    }    
};

module.exports = TwitterBot;