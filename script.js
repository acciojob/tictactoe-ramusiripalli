//your JS code here. If required.

let player1 = "";
let player2 ="";
let currentPlayer = "";
let currentSymbol = "X";
let board = ["","","","","","","",""];
let gameActive = true;

document.getElementById("submit").addEventListener("click",()=>{
	 player1 = document.getElementById("player1").value;
	 player2 = document.getElementById("player2").value;

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
	<h1>Tic Tac Toe</h1>
	<h3 class="message">${currentPlayer}, you're up</h3>
	<div class="board" id="board"> </div>
	`;

	const boardDiv = document.getElementById("board");

	for(let i=0;i<9;i++){
		const cell = document.createElement("div");
		cell.classList.add("cell");
		cell.id = i;
cell.addEventListener("click", handleClick);
		boardDiv.appendChild(cell);
	}
	
}
function handleClick(e) {
  const index = e.target.id;

  if (board[index] || !gameActive) return;

  board[index] = currentSymbol;
  e.target.textContent = currentSymbol;

  if (checkWin()) {
    document.querySelector(".message").textContent =
      `${currentPlayer}, congratulations you won!`;
    gameActive = false;
    return;
  }

  // switch turn
  if (currentSymbol === "X") {
    currentSymbol = "O";
    currentPlayer = player2;
  } else {
    currentSymbol = "X";
    currentPlayer = player1;
  }

  document.querySelector(".message").textContent =
    `${currentPlayer}, you're up`;
}

function checkWin() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];

  for (let combo of wins) {
    const [a,b,c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      highlightWin(combo);
      return true;
    }
  }
  return false;
}


function highlightWin(combo) {
  combo.forEach(index => {
    document.getElementById(index).classList.add("win");
  });
}




