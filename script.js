//your JS code here. If required.

let player1 = "";
let player2 ="";
let currentPlayer = "";
let currentSymbol = "X";
let board = ["","","","","","","",""];
let gameActive = true;

document.getElementById("submit").addEventListener("click",()=>{
	 player1 = document.getElementById("player-1").value;
	 player2 = document.getElementById("player-2").value;

	if(!player1 || !player2){
		return;
	}

	currentPlayer = player1;
	currentSymbol = "X";

	renderGame();
});

function renderGame(){
	const container = document.getElementById("container");
	container.innerHTML = `
	<h1>TIC TAC TOE</h1>
	<h3 class="message">${currentPlayer}, you're up</h3>
	<div class="board" id="board"> </div>
	`
}
