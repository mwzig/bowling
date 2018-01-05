var assert = require("assert");
var Greeter = require("../Greeter");
describe('Greeter', function () {
	describe('#sayHi()', function() {
		it('should return the name', function() {
		    g = new Greeter("a");
		    assert.equal(g.sayHi(), "a");
		})
	})
})

describe('ClassName', function() {
	describe("#methodName()", function() {
		it('should do something it is supposed to', function() {
			
		})
	})
})