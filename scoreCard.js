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
			// Check for a spare, if it is a spare and it is not the last frame
			// then add the first score from the next frame.
			// If it is the last frame, then add score 3.
			if (this.frameArray[i].getScore2() == '/') {
				totalScore += (10 - this.frameArray[i].getScore1());
				if (i < 9) {
					totalScore += this.frameArray[i+1].getScore1();
				}
				else {
					totalScore += this.frameArray[i].getScore3();
				} 
			}
			else {
				totalScore += this.frameArray[i].getScore2();	
			}
			console.log(totalScore);
			
		}
		return totalScore;
	}

}


module.exports = ScoreCard;
