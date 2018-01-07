class Frame {

	constructor (score1in, score2in, score3in, frameNbr) {
		// Assume frame numbers come in from 1 to 10
		// If the frame number is less than 10, and there is a strike, we know the other
		// two scores for that frame are 0.
		// If the frame number is 10, and there is a strike, the other scores may be filled
		if (frameNbr < 1 || frameNbr > 10) {
			console.log("Invalid frame number passed to Frame constructor in frame.js");
			exit();
		}


		// From testing, I learned that the FrameMaker passes numeric values as strings,
		// and that messes up our addition in the ScoreCard class (it adds 9 and 0 as 90 not 9),
		// therefore this is a good place to force numerics where it is not a strike or spare.
		var score1;
		var score2;
		var score3;

		if (score1in == "X") {
			score1 = score1in;
		} else {
			score1 = Number(score1in);
		}

		if (score2in == "/" || score2in == "X") {
			score2 = score2in;
		} else {
			score2 = Number(score2in);
		}
		
		if (score3in == "X") {
			score3 = score3in;
		} else {
			score3 = Number(score3in);
		}

		if (score1 == 'X') {
			this.score1 = 10;
			if (frameNbr < 10) {
				this.score2 = 0;
				this.score3 = 0;
			} else {

				if (score2 == 'X') {
					this.score2 = 10;
					if (score3 == 'X' ) {
						this.score3 = 10;
					} else {
						this.score3 = score3;
					}
				} else {
					this.score2 = score2;
					this.score3 = score3;
				}

			}
		} else {
			this.score1 = score1;
			this.score2 = score2;
			this.score3 = score3;
		}
	}
	
	getScore1 () {
		return this.score1;
	}
	getScore2 () {
		return this.score2;
	}
	getScore3 () {
		return this.score3;
	}

}

module.exports = Frame;