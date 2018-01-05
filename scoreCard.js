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
			// check for a spare
			if (this.frameArray[i].getScore2() == '/') {
				totalScore = 10;
				totalScore += this.frameArray[i+1].getScore1(); 
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
