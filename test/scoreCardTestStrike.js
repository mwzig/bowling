var assert    = require("assert");
var Frame     = require("../Frame");
var ScoreCard = require("../ScoreCard");


// To verify the expected math, I found this site:  http://www.bowlinggenius.com/


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

	
