
var Frame = require("./frame");

class FrameMaker {

	constructor(scoreLine) {
		this.scoreLine = scoreLine;
		this.scores = this.scoreLine.split(" ");
		for (var i = 0; i < this.scores.length; i++) {
			console.log("i is " + i + "and score is " + this.scores[i]);
		}
	}


	getScoreCount() {
		return this.scores.length;
	}

	getFrame() {
		var frame = new Frame("X", 0, 0, 1);
		return frame;
	}

	getFrames() {

		var frame;
		var frameArray = new Array(10);
		var frameIndex = 0;
		var score2 = 0;
		var score3 = 0;
		for (var i = 0; i < 10; i++) {
			if (i < 9) {
				if (this.scores[i] == "X") {
					frame = new Frame("X", 0, 0, i+1);
				}

			} else {
				if (this.scores[i] == "X") {
					console.log("here they are " + this.scores[i+1] + " " + this.scores[i+1] )
					score2 = this.scores[i+1];
					score3 = this.scores[i+2];
					//frame = new Frame("X", score2, score3, i+1);
					frame = new Frame("X", this.scores[i+i], this.scores[i+2], i+1);
					}
			}
			// increment the frames array index now
			frameArray[frameIndex] = frame;
			frameIndex++;

		} //end for loop
		return frameArray;
	}// end getFrames

}

module.exports = FrameMaker;