var assert = require("assert");
var FrameMaker = require("../FrameMaker");

describe('FrameMaker', function () {
	describe('#getScoreCount()', function() {
		it('should return the count of 12', function() {
		    testFrameMaker = new FrameMaker("X X X X X X X X X X X X");
		    assert.equal(testFrameMaker.getScoreCount(), "12");
		})
	})

	describe('#getFrame()', function() {
		it('should return a Frame Object', function() {
		    testFrameMaker = new FrameMaker("X X X X X X X X X X X X");
		    testFrame = testFrameMaker.getFrame();
		    assert.equal(testFrame.getScore1(), "10");
		})
	})
		
	describe('#getFrames()', function() {
		it('should return an array of Frame Objects', function() {
		    testFrameMaker = new FrameMaker("X X X X X X X X X X X X");
		    testFrames = testFrameMaker.getFrames();
		    assert.equal(testFrames.length, 10);
		})

		it('should return an valid data in the array of Frame Objects', function() {
		    testFrameMaker = new FrameMaker("X X X X X X X X X X X X");
		    testFrames = testFrameMaker.getFrames();
		    assert.equal(testFrames[0].getScore1(), 10);
		    assert.equal(testFrames[0].getScore2(), 0);
		    assert.equal(testFrames[0].getScore3(), 0);
		})
	
		it('should return valid data for all strikes in the array of Frame Objects', function() {
		    testFrameMaker = new FrameMaker("X X X X X X X X X X X X");
		    testFrames = testFrameMaker.getFrames();
		    console.log("testFrames are " + testFrames);
		    assert.equal(testFrames[0].getScore1(), 10);
		    assert.equal(testFrames[0].getScore2(), 0);
		    assert.equal(testFrames[0].getScore3(), 0);
		    assert.equal(testFrames[1].getScore1(), 10);
		    assert.equal(testFrames[1].getScore2(), 0);
		    assert.equal(testFrames[1].getScore3(), 0);
		    assert.equal(testFrames[2].getScore1(), 10);
		    assert.equal(testFrames[2].getScore2(), 0);
		    assert.equal(testFrames[2].getScore3(), 0);
		    assert.equal(testFrames[3].getScore1(), 10);
		    assert.equal(testFrames[3].getScore2(), 0);
		    assert.equal(testFrames[3].getScore3(), 0);
		    assert.equal(testFrames[4].getScore1(), 10);
		    assert.equal(testFrames[4].getScore2(), 0);
		    assert.equal(testFrames[4].getScore3(), 0);
		    assert.equal(testFrames[5].getScore1(), 10);
		    assert.equal(testFrames[5].getScore2(), 0);
		    assert.equal(testFrames[5].getScore3(), 0);
		    assert.equal(testFrames[6].getScore1(), 10);
		    assert.equal(testFrames[6].getScore2(), 0);
		    assert.equal(testFrames[6].getScore3(), 0);
		    assert.equal(testFrames[7].getScore1(), 10);
		    assert.equal(testFrames[7].getScore2(), 0);
		    assert.equal(testFrames[7].getScore3(), 0);
		    assert.equal(testFrames[8].getScore1(), 10);
		    assert.equal(testFrames[8].getScore2(), 0);
		    assert.equal(testFrames[8].getScore3(), 0);
		    assert.equal(testFrames[9].getScore1(), 10);
		    assert.equal(testFrames[9].getScore2(), 10);
		    assert.equal(testFrames[9].getScore3(), 10);
		})

		it('should return valid data for no strikes no spares in the array of Frame Objects', function() {
		    testFrameMaker = new FrameMaker("11 12 13 14 15 16 17 21 31 41");
		    testFrames = testFrameMaker.getFrames();
		    console.log("testFrames are " + testFrames);
		    assert.equal(testFrames[0].getScore1(), 1);
		    assert.equal(testFrames[0].getScore2(), 1);
		    assert.equal(testFrames[0].getScore3(), 0);
		    assert.equal(testFrames[1].getScore1(), 1);
		    assert.equal(testFrames[1].getScore2(), 2);
		    assert.equal(testFrames[1].getScore3(), 0);
		    assert.equal(testFrames[2].getScore1(), 1);
		    assert.equal(testFrames[2].getScore2(), 3);
		    assert.equal(testFrames[2].getScore3(), 0);
		    assert.equal(testFrames[3].getScore1(), 1);
		    assert.equal(testFrames[3].getScore2(), 4);
		    assert.equal(testFrames[3].getScore3(), 0);
		    assert.equal(testFrames[4].getScore1(), 1);
		    assert.equal(testFrames[4].getScore2(), 5);
		    assert.equal(testFrames[4].getScore3(), 0);
		    assert.equal(testFrames[5].getScore1(), 1);
		    assert.equal(testFrames[5].getScore2(), 6);
		    assert.equal(testFrames[5].getScore3(), 0);
		    assert.equal(testFrames[6].getScore1(), 1);
		    assert.equal(testFrames[6].getScore2(), 7);
		    assert.equal(testFrames[6].getScore3(), 0);
		    assert.equal(testFrames[7].getScore1(), 2);
		    assert.equal(testFrames[7].getScore2(), 1);
		    assert.equal(testFrames[7].getScore3(), 0);
		    assert.equal(testFrames[8].getScore1(), 3);
		    assert.equal(testFrames[8].getScore2(), 1);
		    assert.equal(testFrames[8].getScore3(), 0);
		    assert.equal(testFrames[9].getScore1(), 4);
		    assert.equal(testFrames[9].getScore2(), 1);
		    assert.equal(testFrames[9].getScore3(), 0);
		})

	
	})
		
	
})