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
				console.log("totalScore before processStrike is " + totalScore);
				var retVal = this.processStrike(i, totalScore);

				console.log("retVal is " + retVal);
				totalScore += retVal;
				console.log("totalScore after processStrike is " + totalScore);
				//totalScore += this.processStrike(i, totalScore);
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

			} // end else logic for if not a strike

		} // end for loop

		return totalScore;
	}	

	processStrike(i) {
				
		// add 10 for our current frame score
		var myTotal = 10;
					
		// now figure out where the next two scores come from
		console.log("in processStrike value of i is " + i);
		console.log("1 myTotal is " + myTotal);
		
		switch (i) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				console.log("in case < 8");
				// add the next two frames' scores
				// If the next frame is a strike, add 10 and then go to the next frame's score
				if (this.frameArray[i+1].getScore1() == 10) {
					myTotal += 10;
					console.log("2 myTotal is " + myTotal);
					myTotal += this.frameArray[i+2].getScore1();
					console.log("3 myTotal is " + myTotal);
				} else {
					console.log("i+1 Score1 is " + this.frameArray[i+1].getScore1());
					console.log("i+1 Score2 is " + this.frameArray[i+1].getScore2());
					myTotal += this.frameArray[i+1].getScore1();
					myTotal += this.frameArray[i+1].getScore2();
					console.log("processStrike total score for " + i + "is" + myTotal);
				}
				break;
			
			case 8:
				console.log("in case i < 9");
				// add the next two frames' scores
				// If the next frame is a strike, add 10 and then go to the next frame's score
				if (this.frameArray[i+1].getScore1() == 10) {
					myTotal += 10;
					myTotal += this.frameArray[i+1].getScore2();	
					console.log("total score for " + i + "is" + myTotal);
				}
				else {
					myTotal += this.frameArray[i+1].getScore1();
					myTotal += this.frameArray[i+1].getScore2();
					console.log("total score for " + i + "is" + myTotal);
				}
				break;
			
			case 9:
				console.log("in case i < 10");	
				console.log(this.frameArray[i].getScore2());			
				console.log(this.frameArray[i].getScore3());			
				myTotal += this.frameArray[i].getScore2();
				myTotal += this.frameArray[i].getScore3();
				console.log("total score for " + i + "is" + myTotal);
				break;

			}// end switch
			this.totalScore = myTotal;
			return myTotal;
				
	} // end processStrike()


} // end class


module.exports = ScoreCard;
