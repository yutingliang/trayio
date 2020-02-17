## Introduction

This repository is for Tray SE Technical Assessment from https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5

## Runtime Environment
Node.js v12.16.0

## Deliverable
* main.js: a command-line / terminal JavaScript application
* more_test_cases: a folder with more test cases

## How to run it
* Please make sure you have Node.js installed in your environment (https://nodejs.org/en/)
* After you finish installation Node.js, you may open your console / terminal to make sure it's properly installed as well as look up the Node.js version by running the following command
```
node -v
```
For example, this is the result in my environment. 
```
v12.16.0
```
* Please put your test case as input.txt in the same folder as main.js. Please be noted that for the input.txt, each line is ended with "\r\n" 
* Open your console / terminal and go to the folder where you have downloaded main.js and input.txt
* Run the following command 
```
node main.js
```
* You will see the output results in the console / terminal 

## Thinking process for this exercise
Put all the dirt positions separated with a ";" into 1 single string. Loop through the driving instructions and see if hoover's positions is included in the string of dirt positions. If yes, increment the number of patches cleaned and remove that position from the string of dirt positions. Remember to check hoover's initial position as well. The big O should be O(n). 

## More test cases
There are 8 other test cases which cover the edge cases under more_test_cases folder.
