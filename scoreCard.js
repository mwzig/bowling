class ScoreCard {

	
	constructor (frameArray) {
		this.frameArray = frameArray;
	}
	
	getNbrOfFrames () {
		return this.frameArray.length;
	}

	addFrameScores () {
		var totalScore = 0;
		for (var i = 0; i < this.frameArray.length; i++) {
			totalScore += this.frameArray[i].getScore1();
			totalScore += this.frameArray[i].getScore2();
		}
		return totalScore;
	}

}


module.exports = ScoreCard;
