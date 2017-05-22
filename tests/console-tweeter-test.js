process.env.NODE_ENV = 'test';

var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    Tweet = require('./../src/tweet.js'),
    ConsoleTweeter = require('./../src/console-tweeter.js');

describe('ConsoleTweeter', function() {
    it('postTweet() should invoke callback function.', function() {
        var consoleTweeter = new ConsoleTweeter();
        var tweet = new Tweet("short tweet", [ 'tex_red' ]);
        var callback = sinon.spy();

        consoleTweeter.postTweet(tweet, callback);

        expect(callback.calledOnce).to.equal(true);
    });
});