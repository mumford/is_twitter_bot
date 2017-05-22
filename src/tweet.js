var util = require('./utilities.js');

function Tweet(message, recipients) {
    this.message = message;    
    this.recipients = recipients;
}

Tweet.prototype.isValid = function() {
    var fullMessage = this.getFullMessage();
    return fullMessage != null && (fullMessage.length > 0 && fullMessage.length <= 140);
}

Tweet.prototype.getFullMessage = function() {
    if (this.recipients) {
        return util.stringFormat('.@{0} {1}', this.recipients.join(' @'), this.message);
    } else {
        return this.message;
    }
}

module.exports = Tweet;