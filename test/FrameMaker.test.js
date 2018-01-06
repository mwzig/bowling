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
	
		it('should return an valid data for all strikes in the array of Frame Objects', function() {
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
	
	})
		
	
})