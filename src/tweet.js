function Tweet(param) {
    this.message = param;
}

Tweet.prototype.isValid = function() {
    return this.message != null && (this.message.length > 0 && this.message.length <= 140);
}

module.exports = Tweet;