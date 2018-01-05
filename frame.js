class Frame {
	constructor (score1, score2, score3, frameNbr) {

		// If the frame number is less than 10, and there is a strike, we know the other
		// two scores are 0.
		// If the frame number is 10, and there is a strike, the other frames may be filled
		if (score1 == 'X') {
			this.score1 = 10;
			if (frameNbr < 9) {
				this.score2 = 0;
				this.score3 = 0;
			}
			else {
				if (score2 == 'X') {
					this.score2 = 10;
					if (score3 == 'X' ) {
						this.score3 = 10;
					}
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