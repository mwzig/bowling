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
	
	})
		
	
})