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

    it('postTweet() with valid tweet should invoke log to the console once.', function() {
        var consoleTweeter = new ConsoleTweeter();
        var tweet = new Tweet("short tweet", [ 'tex_red' ]);
        var messageLogSpy = sinon.spy(console, 'log');
        var isValid = sinon.stub(tweet, 'isValid');
        isValid.returns(true);  

        consoleTweeter.postTweet(tweet, function() { });

        expect(messageLogSpy.calledOnce).to.equal(true);

        messageLogSpy.restore();
        isValid.restore();
    });

    it('postTweet() with invalid tweet should invoke log to the console once.', function() {
        var consoleTweeter = new ConsoleTweeter();
        var tweet = new Tweet("short tweet", [ 'tex_red' ]);
        var messageLogSpy = sinon.spy(console, 'log');
        var isValid = sinon.stub(tweet, 'isValid');
        isValid.returns(false);  

        consoleTweeter.postTweet(tweet, function() { });

        expect(messageLogSpy.calledOnce).to.equal(true);
        
        messageLogSpy.restore();
        isValid.restore();
    });
});