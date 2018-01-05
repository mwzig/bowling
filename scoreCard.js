class ScoreCard {

	
	constructor (frameArray) {
		this.frameArray = frameArray;
	}
	
	getNbrOfFrames () {
		return this.frameArray.length;
	}

	addFrameScores () {
		for (i = 0; i < this.frameArray.length; i++) {
			totalScore += frameArray[i].getScore1();
			alert(frameArray[i].getScore1());
		}
		return totalScore;
	}

}


module.exports = ScoreCard;
