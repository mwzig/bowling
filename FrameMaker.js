
var Frame = require("./frame");

class FrameMaker {

	constructor(scoreLine) {
		//replace misses with 0 so if the line reads 5- then make it 50, 5 for first score, 0 for second score
		var scoreLineFixMisses = scoreLine.replace(/-/g, "0");
		this.scoreLine = scoreLineFixMisses;
		//Next remove the spaces and separate into an score array
		this.scores = this.scoreLine.split(" ");
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
		for (var i = 0; i < 10; i++) {
			var score1 = 0;
			var score2 = 0;
			var score3 = 0;
			if (i < 9) {
				if (this.scores[i] == "X") {
					frame = new Frame("X", 0, 0, i+1);
				}
				else {
					score1 = this.scores[i].charAt(0);
					score2 = this.scores[i].charAt(1);
					frame = new Frame(score1, score2, score3, i+1);
				}

			} else {
				if (this.scores[i] == "X") {
					
					score2 = this.scores[i+1];
					score3 = this.scores[i+2];
					
					//score2 = this.scores[i].charAt(1);
					//score3 = this.scores[i].charAt(2);
					frame = new Frame("X", score2, score3, i+1);
					// For some reason, I had to save the scores to variables to pass to the constructor
					// The line below does not work!
					//frame = new Frame("X", this.scores[i+i], this.scores[i+2], i+1);
				} else if (this.scores[i].charAt(1) == "/" ){
					score1 = this.scores[i].charAt(0);
					score2 = this.scores[i].charAt(1);
					score3 = this.scores[i].charAt(2);
					frame = new Frame(score1, score2, score3, i+1);
				} else {
					score1 = this.scores[i].charAt(0);
					score2 = this.scores[i].charAt(1);
					frame = new Frame(score1, score2, score3, i+1);
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