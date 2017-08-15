$(function (event) {
$('#startButton').click(function () {
    $('#startScreen').hide();
    $('#gameScreen').show();
  });
// initial variables for the game

//find the game circles
var $boxes = $("td");

//show  player turn
var $turnText = $('.playerTurn');


//counters for red and yellow choices
var counter = 0;
var winCounter = 0;

//winning combinations array 
var winningCombinations = [[0,1,2,3],[1,2,3,4],[5,6,7,8],[6,7,8,9],[10,11,12,13],[11,12,13,14],[15,16,17,18],[16,17,18,19],[20,21,22,23],[21,22,23,24],[0,5,10,15],[5,10,15,20],[1,6,11,16],[6,11,16,21],[2,7,12,17],[7,12,17,22],[3,8,13,18],[8,13,18,23],[4,9,14,19],[9,14,19,24],[5,11,17,23],[0,6,12,18],[6,12,18,24],[1,7,13,19],[15,11,7,3],[21,17,13,9],[20,16,12,8],[16,12,8,4]]
//arrays to track the movesof players
var redMoves = [];
var yellowMoves = [];

// function to run  when page loads
function start() {
		addRedandYellowListeners()
		addResetListener()
}
	
//FUNCTION TO SET UP DROP BOX LISTENERS
function addDropListeners() {
		for (var i=boxes.length-1; i>=0;i--) {
			var $box = $($boxes[i]);
			$box.on('click', addRedorYellow)
		}
	} 

//the function to set up red and yellow Listeners
function addRedandYellowListeners(){
	for (var i = $boxes.length-1; i>=0; i--){
		var $box = $($boxes[i]);
		$box.on('click', addRedorYellow)
	}
}


// function to remove all event listeners 

function removeRedandYellowListeners(){
	for (var i = $boxes.length -1; i>=0;i--){
		var $box = $($boxes[i]);
		$box.off('click', addRedorYellow);
	}
}

// function to set up reset function listeners
function addResetListener() {
	$('#reset').on('click', resetBoard)
}

function setBoxRedOrYellow(box) {
	if(counter % 2 === 0){
		redMoves.push(parseInt(box.attr('box-coord')));
		box.attr('class', 'red');
		$turnText.html("Its Yellows's Turn");
		checkWin(redMoves, 'red')
		counter++;
	} else {
		yellowMoves.push(parseInt(box.attr('box-coord')));
		box.attr('class', 'yellow');
		$turnText.html("Its Red's Turn");
		checkWin(yellowMoves, 'yellow')
		counter++;
	} if (counter >= 25) {
			$turnText.html('game over, Its a draw')
	}
}


// function to add red or yellow for choices
function addRedorYellow() {
	console.log('running')
	var $dropCell = $(this);
	var $boxes = $('td');
	var $colHead = $('th');
	var index = $dropCell[0].cellIndex;
	var $box1 = $($boxes[index+20]);
	var $box2 = $($boxes[index+15]);
	var $box3 = $($boxes[index+10]);
	var $box4 = $($boxes[index+5]);
	var $box5 = $($boxes[index+0]);

		if ($box1.hasClass("")) {
			setBoxRedOrYellow($box1)
		} else if ($box2.hasClass("")) {
			setBoxRedOrYellow($box2)
	}	else if ($box3.hasClass("")) {
			setBoxRedOrYellow($box3)
	}	else if ($box4.hasClass("")) {
			setBoxRedOrYellow($box4)
	}	else if ($box5.hasClass("")) {
			setBoxRedOrYellow($box5)
	}
}

// function to check the player has won


  function checkWin(movesArray, name){
    for(var i = 0; i < winningCombinations.length; i++){
      winCounter = 0;
      for(var j = 0; j < winningCombinations[i].length; j++){
        if(movesArray.indexOf(winningCombinations[i][j]) !== -1){
          winCounter++
        }
        if(winCounter === 4) {
          $turnText.html('Game Over,' + name + ' wins!');
          removeRedandYellowListeners();
        }
      }
    }
  }


// function to do reset board
function resetBoard() {

	for (var i = $boxes.length -1; i>= 0; i--) {
		var $box = $($boxes[i]);
		$box.attr('class', 'clear');
	}

	redMoves = [];
	yellowMoves = [];
	winCounter = 0;
	counter = 0;
	addRedandYellowListeners()
	$turnText.html("it is red's turn")
}



start();

})

