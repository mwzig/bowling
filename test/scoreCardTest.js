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
		    testFrame1 = new Frame(5, 0, 0);
		    testFrame2 = new Frame(5, 0, 0);
		    testFrame3 = new Frame(5, 0, 0);
		    var frameArray = [testFrame1, testFrame2, testFrame3]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 15);
		})
	})

	describe('#add10FrameScoresNoSparesNoStrikesNoSecondRoll', function() {
		it('should return the count of total score of 45', function() {
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

	describe('#add10FrameScoresNoSparesNoStrikesWithSecondRolls', function() {
		it('should return the total score of 88', function() {
		    testFrame1 = new Frame(1, 8, 0);
		    testFrame2 = new Frame(2, 7, 0);
		    testFrame3 = new Frame(3, 6, 0);
		    testFrame4 = new Frame(4, 5, 0);
		    testFrame5 = new Frame(5, 4, 0);
		    testFrame6 = new Frame(6, 3, 0);
		    testFrame7 = new Frame(7, 2, 0);
		    testFrame8 = new Frame(0, 9, 0);
		    testFrame9 = new Frame(8, 1, 0);
		    testFrame10 = new Frame(3, 4, 0);
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 88);
		})
	})

	describe('#addScoresNoStrikesSpareOnLastFrame', function() {
		it('should return the total score of 50', function() {
		    testFrame1 = new Frame(2, "/", 0);
		    testFrame2 = new Frame(1, 2, 0);
		    testFrame3 = new Frame(1, 2, 0);
		    testFrame4 = new Frame(1, 2, 0);
		    testFrame5 = new Frame(1, 2, 0);
		    testFrame6 = new Frame(1, 2, 0);
		    testFrame7 = new Frame(1, 2, 0);
		    testFrame8 = new Frame(1, 2, 0);
		    testFrame9 = new Frame(1, 2, 0);
		    testFrame10 = new Frame(1, "/", 5);
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 50);
		})
	})

	describe('#addScoresAllSpares', function() {
		it('should return the total score of 150', function() {
		    testFrame1 = new Frame(1, "/", 0);
		    testFrame2 = new Frame(2, "/", 0);
		    testFrame3 = new Frame(3, "/", 0);
		    testFrame4 = new Frame(4, "/", 0);
		    testFrame5 = new Frame(5, "/", 0);
		    testFrame6 = new Frame(6, "/", 0);
		    testFrame7 = new Frame(7, "/", 0);
		    testFrame8 = new Frame(8, "/", 0);
		    testFrame9 = new Frame(9, "/", 0);
		    testFrame10 = new Frame(1, "/", 5);
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 150);
		})
	})

	describe('#addScoresAllStrikes', function() {
		it('should return the score of 300', function() {
		    testFrame1 = new Frame("X", 0, 0, 1);
		    testFrame2 = new Frame("X", 0, 0, 2);
		    testFrame3 = new Frame("X", 0, 0, 3);
		    testFrame4 = new Frame("X", 0, 0, 4);
		    testFrame5 = new Frame("X", 0, 0, 5);
		    testFrame6 = new Frame("X", 0, 0, 6);
		    testFrame7 = new Frame("X", 0, 0, 7);
		    testFrame8 = new Frame("X", 0, 0, 8);
		    testFrame9 = new Frame("X", 0, 0, 9);
		    testFrame10 = new Frame("X", "X", "X", 10);
		    console.log("in add strikes");
		    
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 300);
		})
	})

	describe('#addScoresStrikesFirstMiddleLast', function() {
		it('should return the score of 41', function() {
		    testFrame1 = new Frame("X", 0, 0, 1);
		    testFrame2 = new Frame(1, 0, 0, 2);
		    testFrame3 = new Frame(1, 0, 0, 3);
		    testFrame4 = new Frame(1, 0, 0, 4);
		    testFrame5 = new Frame("X", 0, 0, 5);
		    testFrame6 = new Frame(1, 0, 0, 6);
		    testFrame7 = new Frame(1, 0, 0, 7);
		    testFrame8 = new Frame(1, 0, 0, 8);
		    testFrame9 = new Frame(1, 0, 0, 9);
		    testFrame10 = new Frame("X", 1, 1, 10);
		    console.log("in add strikes");
		    
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 41);
		})
	})

	describe('#addScoresSparesFirstMiddleLast', function() {
		it('should return the score of 58', function() {
		    testFrame1 = new Frame(1, "/", 0, 1);
		    testFrame2 = new Frame(1, 7, 0, 2);
		    testFrame3 = new Frame(1, 6, 0, 3);
		    testFrame4 = new Frame(1, 5, 0, 4);
		    testFrame5 = new Frame(4, "/", 0, 5);
		    testFrame6 = new Frame(1, 0, 0, 6);
		    testFrame7 = new Frame(1, 0, 0, 7);
		    testFrame8 = new Frame(1, 0, 0, 8);
		    testFrame9 = new Frame(1, 0, 0, 9);
		    testFrame10 = new Frame(9, "/", 1, 10);
		    console.log("in add strikes");
		    
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 58);
		})
	})

	describe('#addScoresSparesFirstMiddleLastFinalStrike', function() {
		it('should return the score of 67', function() {
		    testFrame1 = new Frame(1, "/", 0, 1);
		    testFrame2 = new Frame(1, 7, 0, 2);
		    testFrame3 = new Frame(1, 6, 0, 3);
		    testFrame4 = new Frame(1, 5, 0, 4);
		    testFrame5 = new Frame(4, "/", 0, 5);
		    testFrame6 = new Frame(1, 0, 0, 6);
		    testFrame7 = new Frame(1, 0, 0, 7);
		    testFrame8 = new Frame(1, 0, 0, 8);
		    testFrame9 = new Frame(1, 0, 0, 9);
		    testFrame10 = new Frame(9, "/", 10, 10);
		    console.log("in add strikes");
		    
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 67);
		})
	})

	describe('#addScoresNoHits', function() {
		it('should return the score of 0', function() {
		    testFrame1 = new Frame(0, 0, 0, 1);
		    testFrame2 = new Frame(0, 0, 0, 2);
		    testFrame3 = new Frame(0, 0, 0, 3);
		    testFrame4 = new Frame(0, 0, 0, 4);
		    testFrame5 = new Frame(0, 0, 0, 5);
		    testFrame6 = new Frame(0, 0, 0, 6);
		    testFrame7 = new Frame(0, 0, 0, 7);
		    testFrame8 = new Frame(0, 0, 0, 8);
		    testFrame9 = new Frame(0, 0, 0, 9);
		    testFrame10 = new Frame(0, 0, 10, 10);
		    console.log("in add strikes");
		    
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 0);
		})
	})

	describe('#addScoresTenPairsOfNineThenNoHit', function() {
		it('should return the score of 90', function() {
		    testFrame1 = new Frame(9, 0, 0, 1);
		    testFrame2 = new Frame(9, 0, 0, 2);
		    testFrame3 = new Frame(9, 0, 0, 3);
		    testFrame4 = new Frame(9, 0, 0, 4);
		    testFrame5 = new Frame(9, 0, 0, 5);
		    testFrame6 = new Frame(9, 0, 0, 6);
		    testFrame7 = new Frame(9, 0, 0, 7);
		    testFrame8 = new Frame(9, 0, 0, 8);
		    testFrame9 = new Frame(9, 0, 0, 9);
		    testFrame10 = new Frame(9, 0, 10, 10);
		    console.log("in add strikes");
		    
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 90);
		})
	})

	describe('#addScoresForTenPairsOfFiveAndSpareThenFive', function() {
		it('should return the score of 150', function() {
		    testFrame1 = new Frame(5, "/", 0, 1);
		    testFrame2 = new Frame(5, "/", 0, 2);
		    testFrame3 = new Frame(5, "/", 0, 3);
		    testFrame4 = new Frame(5, "/", 0, 4);
		    testFrame5 = new Frame(5, "/", 0, 5);
		    testFrame6 = new Frame(5, "/", 0, 6);
		    testFrame7 = new Frame(5, "/", 0, 7);
		    testFrame8 = new Frame(5, "/", 0, 8);
		    testFrame9 = new Frame(5, "/", 0, 9);
		    testFrame10 = new Frame(5, "/", 5, 10);
		    console.log("in add strikes");
		    
		    var frameArray = [testFrame1, testFrame2, testFrame3, testFrame4, testFrame5, testFrame6, testFrame7, testFrame8, testFrame9, testFrame10]
		    testScoreCard = new ScoreCard(frameArray);
		     assert.equal(testScoreCard.addFrameScores(), 150);
		})
	})

})