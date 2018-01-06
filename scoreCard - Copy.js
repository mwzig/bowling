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
			// first, check to see if this is a Strike
			// If it is a strike, add 10, then add the next two rolls (If the user does not roll a strike, then that means
			// add score1 and score2, if it is a strike, add the next frame's score1 as well).
			if (this.frameArray[i].getScore1() == 10)
			{   
				// add 10 for our current frame score
				totalScore += 10;
				// now figure out where the next two scores come from
				if (i < 8) {
					// add the next two frames' scores
					// If the next frame is a strike, add 10 and then go to the next frame's score
					if (this.frameArray[i+1].getScore1() == 10) {
						totalScore += 10;
						totalScore += this.frameArray[i+2].getScore1();
						console.log("total score for " + i + "is" + totalScore);
					}
					else {
						console.log("i+1 Score1 is " + this.frameArray[i+1].getScore1());
						console.log("i+1 Score2 is " + this.frameArray[i+1].getScore2());
						totalScore += this.frameArray[i+1].getScore1();
						totalScore += this.frameArray[i+1].getScore2();
						console.log("total score for " + i + "is" + totalScore);
					}
				} else if (i < 9) {
					console.log("i < 9");
					// add the next two frames' scores
					// If the next frame is a strike, add 10 and then go to the next frame's score
					if (this.frameArray[i+1].getScore1() == 10) {
						totalScore += 10;
						totalScore += this.frameArray[i+1].getScore2();
						console.log("total score for " + i + "is" + totalScore);
					}
					else {
						totalScore += this.frameArray[i+1].getScore1();
						totalScore += this.frameArray[i+1].getScore2();
						console.log("total score for " + i + "is" + totalScore);
					}
			 	} else {
					console.log("i=9");	
					console.log(this.frameArray[i].getScore2());			
					console.log(this.frameArray[i].getScore3());			
					totalScore += this.frameArray[i].getScore2();
					totalScore += this.frameArray[i].getScore3();
					console.log("total score for " + i + "is" + totalScore);
				}

			} else {


				totalScore += this.frameArray[i].getScore1();
				// Check for a spare, if it is a spare and it is not the last frame
				// then add the first score from the next frame.
				// If it is the last frame, then add score 3.
				if (this.frameArray[i].getScore2() == '/') {
					totalScore += (10 - this.frameArray[i].getScore1());
					if (i < 9) {
						totalScore += this.frameArray[i+1].getScore1();
					} else {
						totalScore += this.frameArray[i].getScore3();
					} 
				}
				else {
					totalScore += this.frameArray[i].getScore2();	
				}
				console.log(totalScore);
			
			}
					
		}
		return totalScore;
	}	


} // end class


module.exports = ScoreCard;
