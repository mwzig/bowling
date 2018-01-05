var assert = require("assert");
var Frame = require("../Frame");
describe('Frame', function () {
	describe('#getScore1()', function() {
		it('should return the score of 5', function() {
		    testFrameScore1 = new Frame(5, 6, 7);
		    assert.equal(testFrameScore1.getScore1(), "5");
		})
	})
})