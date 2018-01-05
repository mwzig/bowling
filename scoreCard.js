class ScoreCard {
	constructor (frameArray) {
		this.frameArray = frameArray;
	}
	
	getFrameCount () {
		return this.frameArray.length;
	}
}


module.exports = ScoreCard;
