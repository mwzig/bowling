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
		    assert.equal(testFrameMaker.getScore1(), "X");
		})
	})
		

})