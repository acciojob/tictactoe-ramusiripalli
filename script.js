let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "x";
let board = ["","","","","","","","",""];
let gameActive = true;

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault(); 

  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (!player1 || !player2) return;

  currentPlayer = player1;
  currentSymbol = "x";

  renderGame();
});

function renderGame() {
  board = ["","","","","","","","",""];
  gameActive = true;

  const container = document.getElementById("container");
  container.innerHTML = `
    <h1>Tic Tac Toe</h1>
    <div class="message">${currentPlayer}, you're up</div>
    <div class="board" id="board"></div>
  `;

  const boardDiv = document.getElementById("board");

  for (let i = 1; i <= 9; i++) {
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
      `${currentPlayer} congratulations you won!`;
    gameActive = false;
    return;
  }

  if (currentSymbol === "x") {
    currentSymbol = "o";
    currentPlayer = player2;
  } else {
    currentSymbol = "x";
    currentPlayer = player1;
  }

  document.querySelector(".message").textContent =
    `${currentPlayer}, you're up`;
}

function checkWin() {
  const wins = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
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
  combo.forEach(i => {
    document.getElementById(i).classList.add("win");
  });
}
