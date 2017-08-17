#CONNECT FOUR GAME

The aim of the project was to design a browser based gme, using html, css and Javascript. Connect Four is a two player connection game, where the each plyer is assigned a coloured counter. The players take it in turns to drop counters, where the counters fall firstly into the bottom row of the 5x5 grid, and after that occupy the next available space available in the above rows of the column. The aim of the game is to try and get four counters alligned next to eachother either vertically, horizontally or diagonally.

##How to get started 
In order to run this project the following programs need to be installed:


* Javascript
* Jquery
* Html Page
* css stylesheet

###In order to Install JQuery

`<script src="https://code.jquery.com/.jquery-3.1.0.min.js"   
integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>`

I input this code onto my html to link Jquery onto my project
###In order to link javascrpt
`<script src="game.js"></script> `

I input this code onto my html to link javascript onto my project.

#Plan 

I used Trello Board to plan my sprints, and to organise my deadlines.

|Plan|
-----|
|User Stories
|Wire Frame
|Basic Game Template 3x3 Grid
|change into 4x4 Grid
|Finally make a 5x5 grid

After designing my grid on Html, i made event listeners for the buttons, i began by making sure all the buttons worked, and then went on to making them switch between red and yellow players. I created a Class in ordee to allow the disks to display red or yellow counters and edited the backrounds using CSS. Below is an example. of how i used functions to set the counters to display red or yellow counters and how to switch between players using If statements

````Javascript
if(counter % 2 === 0){
				redMoves.push(parseInt($box.attr('box-coord')));
				$box.attr('class', 'red');
				$turnText.html("Its Yellows's Turn");
				checkWin(redMoves, 'red')
				counter++;
````
In order for the disks to begin occupying the bottom row first and then the next available slot above, I created a column header, compared the column header index with the bottom row, and created a function with if statements, to allow only the next available slots to be available for play. i created the following variables for the boxes in each column for the 5x5 grid.

``` javascript 
		var $box1 = $($boxes[index+20]);
		var $box2 = $($boxes[index+15]);
		var $box3 = $($boxes[index+10]);
		var $box4 = $($boxes[index+5]);
		var $box5 = $($boxes[index+0]);
				
```
Then using If statements to occupy the next available box.

I made an array so i could compare the available wins with the player moves and used For loops to compare the arrays. 

```Javascript
for(var i = 0; i < winningCombinations.length; i++){
		  winCounter = 0;
		  for(var j = 0; j < winningCombinations[i].length; j++){
		    if(movesArray.indexOf(winningCombinations[i][j]) !== -1){
		      winCounter++
```
Finally a function to reset the board, to allow players to play numerous times was at the end of the game. 
below is a screen shot of the game screens.

![screen shot 2017-08-17 at 12 23 27](https://user-images.githubusercontent.com/30622887/29412250-d01296f2-834f-11e7-93d8-cc10f4268732.png)

![screen shot 2017-08-17 at 12 26 06](https://user-images.githubusercontent.com/30622887/29412351-37d0ed52-8350-11e7-8d1f-8fe7b4c15efb.png)

