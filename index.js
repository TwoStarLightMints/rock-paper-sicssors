let playerScore = 0;
let computerScore = 0;

const display = document.querySelector("#results");
const roundDisp = display.children[0];
const pDisp = display.children[1];
const cDisp = display.children[2];

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener(
    'click',
    function (e) {
      displayScore(
          playRound(
            this.innerText.toLowerCase(),getComputerChoice())
        );
    }
  )});

function getComputerChoice () {
  // Randomly returns either 'Rock', 'Paper', or 'Scissors'
  let choice = Math.floor(Math.random() * 3);
  let choices = ['rock', 'paper', 'scissors'];
  return choices[choice];
}

function playRound (playerSelection, computerSelection) {
  let player = playerSelection;
  let computer = computerSelection;

  if (player === computer) {
    return "It's a draw";
  } else {
    if (player === "rock" || computer === "rock") {
      if (player === "scissors") {
        return "You lose! Rock beats scissors!";
      } else if (computer == "scissors") {
        return "You win! Rock beats scissors!";
      } else {
        if (player === "paper") {
          return "You win! Paper beats rock!";
        } else {
          return "You lose! Paper beats rock!";
        }
      }
    }

    if (player === "paper" || computer === "paper") {
      if (computer === "scissors") {
        return "You lose! Scissors beat paper!";
      } else {
        return "You win! Scissors beat paper!"
      }
    }

    if (player === "scissors" || computer === "scissors") {
      if (computer === "paper") {
        return "You lose! Scissors beats paper!";
      } else {
        return "You win! Scissors beats paper!";
      }
    }
  }
}

function displayScore (text) {
  roundDisp.innerText = text;
  if (text.includes("win")) {
    playerScore++;
    pDisp.innerText = `Player Score: ${playerScore}`;
    cDisp.innerText = `Computer Score: ${computerScore}`;
  } else if (text.includes("draw")) {
    pDisp.innerText = `Player Score: ${playerScore}`;
    cDisp.innerText = `Computer Score: ${computerScore}`;
  } else {
    computerScore++;
    pDisp.innerText = `Player Score: ${playerScore}`;
    cDisp.innerText = `Computer Score: ${computerScore}`;
  }
}

function game () {
  alert("Welcome to rock, paper, scissors! Please enter Rock, Paper, or Scissors.");
}

game();