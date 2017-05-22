var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
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

    it('getFullMessage() should return a string with all recipients with the message appended.', function() {
        var tweet = new Tweet('short tweet', [ 'tex_red' ]);
        assert.equal(tweet.getFullMessage(), '.@tex_red short tweet');
    });

    it('getFullMessage() should return the message if there are no recipients.', function() {
        var tweet = new Tweet('short tweet');
        assert.equal(tweet.getFullMessage(), 'short tweet');
    });

    it('getFullMessage() should return multiple recipients before the message.', function() {
        var tweet = new Tweet('short tweet', [ 'tex_red', 'mumford', 'daveh' ]);
        assert.equal(tweet.getFullMessage(), '.@tex_red @mumford @daveh short tweet');
    });
});