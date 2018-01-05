class Frame {
	constructor (score1, score2, score3) {
		this.score1 = score1;
		this.score2 = score2;
		this.score3 = score3;
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