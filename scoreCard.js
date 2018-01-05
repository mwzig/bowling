class ScoreCard {
	constructor (frameArray) {
		this.frameArray = frameArray;
	}
	
	countFrames () {
		return this.frameArray.length;
	}
}


module.exports = ScoreCard;
