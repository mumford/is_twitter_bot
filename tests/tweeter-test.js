var chai = require('chai'),
    expect = chai.expect,
    Tweet = require('./../src/tweet');

describe('Tweet', function() {
    it('isValid() should return false if message length is more than 140 characters.', function() {
        var tweet = new Tweet('148testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestt');
        expect(tweet.isValid()).to.equal(false);
    });

    it('isValid() should return false if message length is 0 characters.', function() {
        var tweet = new Tweet('');
        expect(tweet.isValid()).to.equal(false);
    });

    it('isValid() should return false if message is null.', function() {
        var tweet = new Tweet();
        expect(tweet.isValid()).to.equal(false);
    });

    it('isValid() should return true if message length is 140 characters.', function() {
        var tweet = new Tweet('140testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestt');
        expect(tweet.isValid()).to.equal(true);
    });

    it('isValid() should return true if message length is less than 140 characters.', function() {
        var tweet = new Tweet('short tweet');
        expect(tweet.isValid()).to.equal(true);
    });
});