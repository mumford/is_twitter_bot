var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    TwitterBot = require('./../src/twitter-bot.js'),
    Tweet = require('./../src/tweet.js');

describe('TwitterBot', function() {
    it('postMessage() should invoke callback function.', function() {
        var twitterBot = new TwitterBot();
        var tweet = new Tweet("short tweet", [ 'tex_red' ]);
        var callback = sinon.spy();

        twitterBot.postMessage(tweet, callback);

        expect(callback.calledOnce).to.equal(true);
    });

    it('postMessage() should invoke callback function if tweet is not valid.', function() {
        var twitterBot = new TwitterBot();
        var tweet = new Tweet("short tweet", [ 'tex_red' ]);
        var callback = sinon.spy();
        var isValid = sinon.stub(tweet, 'isValid');
        isValid.returns(false);        

        twitterBot.postMessage(tweet, callback);

        expect(callback.calledOnce).to.equal(true);
    });

    it('postMessage() should send error in callback if tweet is not valid.', function() {
        var twitterBot = new TwitterBot();
        var tweet = new Tweet("short tweet", [ 'tex_red' ]);
        var callback = sinon.spy();
        var isValid = sinon.stub(tweet, 'isValid');
        isValid.returns(false);        

        twitterBot.postMessage(tweet, callback);

        expect(callback.args[0][0]).to.be.a('string');
    });
});