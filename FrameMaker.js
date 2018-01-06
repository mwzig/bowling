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
		return new Frame("X", 0, 0, 1);
	}

}

module.exports = FrameMaker;