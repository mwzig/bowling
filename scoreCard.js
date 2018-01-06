//******************************************************************************************************//
//*  This class represents a bowling score card.  It contains an array of Frame objects.               *//
//*  A Frame object contains 3 scores.   On Frames 1-9, only scores 1 and 2 will be present.           *//
//*  On Frame 10, there may be 3 possible scores (in case of a spare or strike rolled).                *//
//*  This class has a method addFrameScores that may be used to tally the scores on the array of       *//
//*  Frame objects passed to this class.                                                               *//
//******************************************************************************************************//
class ScoreCard {


	// The constructor takes an array of Frame objects.  Per the specs, we do not need to check to see that
	// 10 frames are present - it is assumed.	
	constructor (frameArray) {
		this.frameArray = frameArray;
	}
	
	// This is just here because it was an easy way to initially test that the validity of the constructor.	
	getNbrOfFrames () {
		return this.frameArray.length;
	}

	// This method iterates through the array of Frame objects member variable and calculates a bowling score.
	// Note that there are two rolls per frame (unless the person scored a strike).
	addFrameScores () {
		var totalScore = 0;
		for (var i = 0; i < this.frameArray.length; i++) {
			// first, check to see if this is a Strike
			if (this.frameArray[i].getScore1() == 10)
			{ 
				totalScore += this.processStrike(i, totalScore);
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

			} // end else logic for if not a strike

		} // end for loop

		return totalScore;
	}	

	// This method contains the logic to score a Strike.  It is more complex than regular scoring because
	// it involves checking the next two rolls (which are on at least the next Frame and possibly the one after that
	// as well).
	processStrike(i) {
				
		// Add 10 for our current frame score since it is a strike
		var myTotal = 10;
					
		// Now figure out where the next two scores come from.
		// If we are on frames 1-8, then we can jump ahead two frames to get two more scores 
		// (assuming the next two are strikes).   We won't go out of bounds on our index.
		// Remember the index is 0 based so, frames 1-8 are indexed by 0-7.
		switch (i) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				// If the next roll is a strike, add 10 and then go to the frame after that (2 past current) and 
				// add that score also.
				// Otherwise, get the 2 scores from the next frame.
				if (this.frameArray[i+1].getScore1() == 10) {
					myTotal += 10;
					myTotal += this.frameArray[i+2].getScore1();
				} else {
					myTotal += this.frameArray[i+1].getScore1();
					myTotal += this.frameArray[i+1].getScore2();
				}
				break;
			// If we are in frame 9 (index is 8), then to get the next score we 
			// go to frame 10 (index 9) and get scores 1 and 2.
			// This is the same whether or not we got a strike on the next roll
			case 8:
				myTotal += this.frameArray[i+1].getScore1();
				myTotal += this.frameArray[i+1].getScore2();
				break;
			
			// If we are in frame 10 (index is 9), then to get the next score we 
			// stay in this frame and get score 2 and score 3
			// This is the same whether or not we got a strike on the next roll
			case 9:
				myTotal += this.frameArray[i].getScore2();
				myTotal += this.frameArray[i].getScore3();
				break;

			}// end switch
			return myTotal;
				
	} // end processStrike()


} // end class


module.exports = ScoreCard;
