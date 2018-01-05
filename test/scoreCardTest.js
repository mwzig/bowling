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

	describe('#addFrameScoresInitialTest', function() {
		it('should return the count of 15', function() {
		    testFrame1 = new Frame(5, 6, 7);
		    testFrame2 = new Frame(5, 6, 7);
		    testFrame3 = new Frame(5, 6, 7);
		    var frameArray = [testFrame1, testFrame2, testFrame3]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 15);
		})
	})

	describe('#add10FrameScoresNoSparesNoStrikesNoSecondRoll', function() {
		it('should return the count of 15', function() {
		    testFrame1 = new Frame(1, 0, 0);
		    testFrame2 = new Frame(2, 0, 0);
		    testFrame3 = new Frame(3, 0, 0);
		    testFrame4 = new Frame(4, 0, 0);
		    testFrame5 = new Frame(5, 0, 0);
		    testFrame6 = new Frame(6, 0, 0);
		    testFrame7 = new Frame(7, 0, 0);
		    testFrame8 = new Frame(0, 0, 0);
		    testFrame9 = new Frame(8, 0, 0);
		    testFrame10 = new Frame(9, 0, 0);
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 45);
		})
	})


})