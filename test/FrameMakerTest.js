var assert = require("assert");
var FrameMaker = require("../FrameMaker");

describe('FrameMaker', function () {
	describe('#getScoreCount()', function() {
		it('should return the score of 12', function() {
		    testFrameMaker = new FrameMaker("X X X X X X X X X X X X");
		    assert.equal(testFrameMaker.getScoreCount(), "13");
		})
	})
	

})