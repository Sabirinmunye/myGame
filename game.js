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
var winningCombinations = [[0,1,2],[3,4,5],[6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]]

//arrays to track the movesof players
var redMoves = [''];
var yellowMoves = [''];


// function to run  when page loads
function start() {
		addRedandYellowListeners()
		addResetListener()
}
	

//the function to set up red and yellow Listeners
function addRedandYellowListeners(){
	for (var i = $boxes.length-1; i>=0; i--){
		var $box = $($boxes[i]);
		$box.on('click', addRedorYellow)
	}
}


// function to remove the all event listeners 

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


// function to add red or yellow for choices
function addRedorYellow() {
	var $box = $(this);
	console.log($box);

		if (counter % 2 ===0) {
			
			redMoves.push(parseInt($box.attr('box-coord')));
			$box.attr('class', 'red')
			console.log(redMoves);
			$turnText.html("its Yellows's Turn");
			counter++;
			checkWin(redMoves, 'red')

		}else {
			yellowMoves.push(parseInt($box.attr('box-coord')));
			console.log(yellowMoves);
			$box.attr('class', 'yellow')
			$turnText.html("its red's Turn");
			counter++;
			checkWin(yellowMoves, 'yellow')


		}
		//cater for draw if counter >=9 it is a drar
		if (counter >= 9) {
			$turnText.html('game over, Its a draw')
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
        if(winCounter === 3) {
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
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}''


start();

})

