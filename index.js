
var Frame     = require("./Frame");
var FrameMaker = require("./FrameMaker");
var ScoreCard = require("./ScoreCard");


'use strict';


// The first parameter contains the path to our node executable
// The second parameter contains the path to the script file (index.js)
// The third parameter contains a string for the bowling scores - it should be in quotes

if (process.argv.length > 2) {
	var inputString = process.argv[2];
	if (inputString == "?") {
		console.log("Please enter a string of ten bowling scores, separated by spaces, in quotes as follows:");
		console.log('"12 34 5/ X X 18 9- 8- 1- 45"');
		console.log("If there is a strike in the tenth turn, add two more space separated scores as follows:");
		console.log('"12 34 5/ X X 18 9- 8- 1- X 1 2"');
		console.log("** Indicate strike with uppercase 'X', spare with '/', and miss with '-' **");

	} else {
		console.log("The following bowling frame scores:");
		console.log(inputString);
		frameMaker = new FrameMaker(inputString);
		var frameArray = frameMaker.getFrames();
		scoreCard = new ScoreCard(frameArray);
		console.log("add up to a total score of " + scoreCard.addFrameScores());
	}
} else {
	console.log("The following bowling frame scores:");
	inputString = "1- 2/ 34 X X 5- 7/ -- 4/ X 1 2";
	console.log(inputString);
	frameMaker = new FrameMaker(inputString);
	var frameArray = frameMaker.getFrames();
	scoreCard = new ScoreCard(frameArray);
	console.log("add up to a total score of " + scoreCard.addFrameScores());
}





   
/*

    testFrameMaker = new FrameMaker("X X X X X X X X X X X X");
    testFrameMaker = new FrameMaker("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-");
    testFrameMaker = new FrameMaker("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5");
	testFrameMaker = new FrameMaker("11 12 13 14 15 16 17 21 31 41");
	testFrameMaker = new FrameMaker("-- -- -- -- -- -- -- -- -- --");
	testFrameMaker = new FrameMaker("1- 2/ 34 X X 5- 7/ -- 4/ X 1 2");
*/		


