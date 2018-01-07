# Bowling Kata

## Contents
1.  [About](#1-about)
2.  [Installation](#2-installation)
3.  [Usage](#3-usage)
4.  [Sample Output](#4-sample-output)
5.  [Sample Output](#5-sample-output)
6.  [Design Overview](#6-design-overview)

## 1. About
Welcome to my Bowling Kata! 

This application was created to conform to the following Kata: 
http://codingdojo.org/kata/Bowling/

This program calculates a total bowling score based on input scores of a series of bowling "rolls".  I wrote this program in JavaScript using test-driven development.  This is my first program written using node.js.  I used Mocha to create test cases, and git to commit to my local repository for each test case.  Keeping in mind the goal to develop using "red, green, refactor", I tested each case for red and green, and committed the code with a description like "red test complete for testUsingFrameMakerAllMisses", then "green test complete for testUsingFrameMakerAllMisses".

I used the following site to verify my scoring: http://www.bowlinggenius.com/


## 2. Installation
Clone the repository:
```
    git clone https://github.com/mwzig/bowling.git
```


## 3.  Usage

To run this application from the command line (on Windows) go to the bowling directory.  Enter one of the following:

### to run with a default input bowling score string parameter of "1- 2/ 34 X X 5- 7/ -- 4/ X 1 2" :
`
node index.js
`

### to run and get an output explanation of how to enter a bowling score string parameter:
`
node index.js ?
`

### or, enter your own bowling score string parameter like the following examples:

`
node index.js "X X X X X X X X X X X X"
`

`
node index.js "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-"
`

`
node index.js "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5"
`

`
node index.js "11 12 13 14 15 16 17 21 31 41"
`

`
node index.js "-- -- -- -- -- -- -- -- -- --"
`

`
node index.js "1- 2/ 34 X X 5- 7/ -- 4/ X 1 2"
`


### To run the tests for this application from the command line (on Windows) go to the bowling directory.  Enter the following:

`
npm test
`

## 4. Sample Output A: 
(for 'node index.js "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-"')

```
    The following bowling frame scores:
	9- 9- 9- 9- 9- 9- 9- 9- 9- 9-
	add up to a total score of 90
```


## 5. Sample Output B:
(for "node index.js ?")

```
	Please enter a string of ten bowling scores, separated by spaces, in quotes as follows:
	"12 34 5/ X X 18 9- 8- 1- 45"
	If there is a strike in the tenth turn, add two more space separated scores as follows:
	"12 34 5/ X X 18 9- 8- 1- X 1 2"
	** Indicate a strike with uppercase 'X', a spare with '/', and a miss with '-' **

```


## 6. Design Overview

There are three main classes in this application:   Frame, FrameMaker, and ScoreCard.   The Frame class represents one "turn" at bowling.   For the first nine turns, the user may have either a strike (one roll), two rolls that total less than 10, two rolls that include a first roll of less than ten pins and then a "spare" (knocking them all down), or two rolls that may contain one or two misses (no pins knocked down).  For the last, or tenth turn, the user may potentially roll three times.   To keep things simple, one Frame class is used for all ten turns.  The Frame object contains Score1 (for roll 1), Score2 (for roll 2), and Score 3 (for the potential 3rd roll on the tenth turn, but it is not used for turns 1-9).     

The FrameMaker class is used to build an array of Frame objects.  Its constructor takes a string that represents the scores from a series of 10 turns in a bowling game.  It parses the string into an array of scores and replaces the "-" that represents a miss with "0".  The FrameMaker class contains a getFrames method that uses the array of scores to create return an Array of Frame objects.

The ScoreCard class represents a bowling score card.  Since a bowling score card contains ten frames, the ScoreCard class constructor takes an array of Frame objects.  The ScoreCard class also contains a method named addFrameScores that iterates through the array of Frame objects and calculates and returns the total score.

The "test" directory contains three test files:  Frame.test.js, FrameMaker.test.js, and ScoreCard.test.js.
Each file tests the corresponding JavaScript class.  ScoreCard.test.js is the main test file.  It creates Frame objects with various score scenarios to call the ScoreCard class which calculates the total score.  Additionally, it creates strings that represent a series of scores, and then it calls FrameMaker to get an array of Frame objects 
(created from one of those strings) to pass to the ScoreCard class which calculates the total score. 

Note that I coded the Frame class first and did the major testing so that all logic would be complete for calculating the total bowling score based on an array of Frames.  A user interface for a bowling game could easily use these Frame objects.  I then coded the FrameMaker object to take in a string representing scores, because that is a further level of indirection.   Most likely a UI would use the frame objects, but for purposes of the Kata, I added the FrameMaker class.