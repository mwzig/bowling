var assert    = require("assert");
var Frame     = require("../Frame");
var ScoreCard = require("../ScoreCard");

describe('ScoreCard', function () {
	describe('#getNbrOfFrames', function() {
		it('should return the count of 3', function() {
		    testFrame1 = new Frame(5, 6, 7);
		    testFrame2 = new Frame(5, 6, 7);
		    testFrame3 = new Frame(5, 6, 7);
		    var frameArray = [testFrame1, testFrame2, testFrame3]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.getNbrOfFrames(), "3");
		})
	})
})