const gamePlayInterface = document.querySelector(".game-play");
const player1Coin = gamePlayInterface.querySelector(".player1-coin");
const player2Coin = gamePlayInterface.querySelector(".player2-coin");
const player1CoinImg = player1Coin.querySelector("img");
const player2CoinImg = player2Coin.querySelector("img");
const dice = gamePlayInterface.querySelector(".roll-dice");
const player1Pannel = gamePlayInterface.querySelector(".player1-pannel");
const player2Pannel = gamePlayInterface.querySelector(".player2-pannel");
let player1DiceFaceValueImg = player1Pannel
  .querySelector(".dice-value")
  .querySelector(".dice-number");
let player2DiceFaceValueImg = player2Pannel
  .querySelector(".dice-value")
  .querySelector(".dice-number");

const player1CoinStyles = getComputedStyle(player1Coin);
const player2CoinStyles = getComputedStyle(player2Coin);

// Function to arrange coin1 and coin2 when in the same box
// function checkCoin1AndCoin2Position() {
//   let currentXPos1 = Number(player1CoinStyles.left.replace("px", ""));
//   let currentYPos1 = Number(player1CoinStyles.bottom.replace("px", ""));
//   let currentXPos2 = Number(player2CoinStyles.left.replace("px", ""));
//   let currentYPos2 = Number(player2CoinStyles.bottom.replace("px", ""));

//   if (currentXPos1 == currentXPos2 && currentYPos1 == currentYPos2) {
//     player1Coin.style.height = "20px";
//     player2Coin.style.height = "20px";
//     player1Coin.style.bottom = "20px";

//     player1CoinImg.style.width = "12px";
//     player1CoinImg.style.height = "12px";
//     player2CoinImg.style.width = "12px";
//     player2CoinImg.style.height = "12px";
//   } else {
//     player1Coin.style.height = "40px";
//     player2Coin.style.height = "40px";
//     player1Coin.style.bottom = "0px";

//     player1CoinImg.style.width = "20px";
//     player1CoinImg.style.height = "20px";
//     player2CoinImg.style.width = "20px";
//     player2CoinImg.style.height = "20px";
//   }
// }

// Function to move player's coin according to the number rolled
let yAxisCount = 0;
let xAxisCount = 1;
function movePlayer() {
  let currentXPos = Number(player1CoinStyles.left.replace("px", ""));
  let currentYPos = Number(player1CoinStyles.bottom.replace("px", ""));

  if (xAxisCount % 6 == 0) {
    let newYPosition = currentYPos + 42 + "px";
    player1Coin.style.bottom = newYPosition;
    xAxisCount = 1;
    yAxisCount += 1;
  } else {
    if (yAxisCount % 2 == 0) {
      let newXPositionRight = currentXPos + 52 + "px";
      player1Coin.style.left = newXPositionRight;
      xAxisCount += 1;
    } else {
      let newXPositionLeft = currentXPos - 52 + "px";
      player1Coin.style.left = newXPositionLeft;
      xAxisCount += 1;
    }
  }
}

// Function to roll the dice
function rollDice() {
  let diceNumber = Math.floor(Math.random() * 6 + 1);
  return diceNumber;
}

// Function to display the number rolled by player 1
function displayPlayerNumber(dicevalue) {
  let srcName = `images/face${dicevalue}.png`;
  player1DiceFaceValueImg.src = srcName;
}

// player1Coin.addEventListener("click", movePlayer);

// Event listener for rolling the dice
dice.addEventListener("click", () => {
  let playerValue = rollDice();
  displayPlayerNumber(playerValue);
  if (yAxisCount == 6) {
    let currentXPos = Number(player1CoinStyles.left.replace("px", ""));
    playerValue * 52 + currentXPos <= 260
      ? (playerValue = playerValue)
      : (playerValue = 0);
  }
  let intervalID = setInterval(movePlayer, 500);
  setTimeout(() => {
    clearInterval(intervalID);
  }, playerValue * 500 + 250);
});
