var util = require('./utilities.js');

function Tweet(message, recipients) {
    this.message = message;    
    this.recipients = recipients;
}

Tweet.prototype.isValid = function() {
    return this.message != null && (this.message.length > 0 && this.message.length <= 140);
}

Tweet.prototype.getFullMessage = function() {
    return util.stringFormat('.@{0} {1}', this.recipients, this.message);
}

module.exports = Tweet;