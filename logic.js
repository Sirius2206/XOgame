let players = ['x', 'o'];
let activePlayer = 0;

const SIZE = 3;
let gameField = [SIZE];

function startGame(){
  activePlayer = activePlayer % 2;
  for (let i = 0; i < SIZE; i++) {
    gameField[i] = [];
    for (let j = 0; j < SIZE; j++){
      gameField[i][j] = '';
    }
  }
  renderBoard(gameField);
  alert(`Игру начинает игрок №${activePlayer + 1}(${players[activePlayer % 2]})`);
}
function click(row, column){
  activePlayer = activePlayer % 2;
  gameField[row][column] = players[activePlayer];
  renderBoard(gameField);
  if (isWin(players[activePlayer])) showWinner(activePlayer);
  activePlayer++;
}

function isWin(player) {

  let checkWin = 0;
  for (let i = 0; i < SIZE; i++){
    for(let j = 0; j < SIZE; j++){
      gameField[i][j] == player ? checkWin++ : checkWin--;
    }
    if (checkWin === SIZE){
      return true;
    }
    checkWin = 0;
  }
  for (let i = 0; i < SIZE; i++){
    for(let j = 0; j < SIZE; j++){
      gameField[j][i] === player ? checkWin++ : 0;
    }
    if (checkWin === SIZE){
      return true;
    }
    checkWin = 0;
  }
  for (let i = 0; i < SIZE; i++){
    gameField[i][i] === player ? checkWin++ : 0;
  }
  if (checkWin === SIZE){
      return true;
    }
  checkWin = 0;
  for (let i = 0; i < SIZE; i++){
    gameField[i][SIZE - 1 - i] === player ? checkWin++ : 0;
  }
  return checkWin === SIZE;
}