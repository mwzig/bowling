# Bowling Kata

## Contents
1.  [About](#1-about)
2.  [Installation](#2-installation)
3.  [Usage](#3-usage)
4.  [Sample Output](#4-sample-output)
5.  [Design Overview](#5-design-overview)

## 1. About
Welcome to my Bowling Kata! 

This application was created to conform to the following Kata: 
http://codingdojo.org/kata/Bowling/

This program calculates a total bowling score based on input scores of a series of bowling "rolls".  I wrote this program in JavaScript using test-driven development.  This is my first program written using node.js.  I used Mocha to create test cases, and git to commit to my local repository for each test case.  Keeping in mind the goal to develop using "red, green, refactor", I tested each case for red and green, and committed the code with a description like "red test complete for testUsingFrameMakerAllMisses", then "green test complete for testUsingFrameMakerAllMisses".

For input, this application takes either a string of numbers and special characters (that represent misses, spares and strikes), or an array of Frame objects that represent . This program is written in JavaScript, and as such it does not have a "main".  It can be invoked by a test program that passes either a string of numbers and special characters or an array of Frame objectsinput a file that contains a list of words to find and a letter grid in which to find the words. The program then prints out a list of the words found and their coordinates in the grid.  (If the grid does not contain all of the words to find, the application also prints out the words not found.  Additionally, the application will optionally print out the input).


## 2. Installation
Clone the repository:
```
    git clone https://github.com/mwzig/bowling.git
```

## 3.  Usage

To run this application from the command line (on Windows) go to the bowling directory.  Enter one of the following:

`
$ INPUT=1 npm start
`
`
$ INPUT=2 npm start
`
`
$ INPUT=3 npm start
`
`
$ INPUT=4 npm start
`

INPUT=1 uses the following input:
INPUT=1 uses the following input:
INPUT=1 uses the following input:
INPUT=1 uses the following input:


To run the tests for this application from the command line (on Windows) go to the bowling directory.  Enter the following:

`
npm test
`

## 7. Design Overview

There are three main classes in this application:   Frame, FrameMaker, and ScoreCard.   The Frame class represents one "turn" at bowling.   For the first nine turns, the user may have either a strike (one roll), two rolls that total less than 10, two rolls that include a first roll of less than ten pins and then a "spare" (knocking them all down), or two rolls that may contain one or two misses (no pins knocked down).  For the last, or tenth turn, the user may potentially roll three times.   To keep things simple, one Frame class is used for all ten turns.  The Frame object contains Score1 (for roll 1), Score2 (for roll 2), and Score 3 (for the potential 3rd roll on the tenth turn, but it is not used for turns 1-9).     

The FrameMaker class is used to build an array of Frame objects.  Its constructor takes a string that represents the scores from a series of 10 turns in a bowling game.  It parses the string into an array of scores and replaces the "-" that represents a miss with "0".  The FrameMaker class contains a getFrames method that uses the array of scores to create return an Array of Frame objects.

The ScoreCard class represents a bowling score card.  Since a bowling score card contains ten frames, the ScoreCard class constructor takes an array of Frame objects.  The ScoreCard class also contains a method named addFrameScores that iterates through the array of Frame objects and calculates and returns the total score.

The "test" directory contains three test files:  Frame.test.js, FrameMaker.test.js, and ScoreCard.test.js.
Each file tests the corresponding JavaScript class.  ScoreCard.test.js is the main test file.  It creates Frame objects with various score scenarios to call the ScoreCard class which calculates the total score.  Additionally, it creates strings that represent a series of scores, and then it calls FrameMaker to get an array of Frame objects 
(created from one of those strings) to pass to the ScoreCard class which calculates the total score. 





