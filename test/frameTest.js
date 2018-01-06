var assert = require("assert");
var Frame = require("../Frame");

describe('Frame', function () {
	describe('#getScore1()', function() {
		it('should return the score of 5', function() {
		    testFrameScore1 = new Frame(5, 6, 7);
		    assert.equal(testFrameScore1.getScore1(), "5");
		})
	})
	describe('#getScore2()', function() {
		it('should return the score of 6', function() {
		    testFrameScore1 = new Frame(5, 6, 7);
		    assert.equal(testFrameScore1.getScore2(), "6");
		})
	})

	describe('#getScore3()', function() {
		it('should return the score of 7', function() {
		    testFrameScore1 = new Frame(5, 6, 7);
		    assert.equal(testFrameScore1.getScore3(), "7");
		})
	})




})