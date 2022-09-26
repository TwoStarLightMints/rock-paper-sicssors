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

function greet () {
  alert("Welcome to rock, paper, scissors! Please enter Rock, Paper, or Scissors.");
}

function getCleanInput () {
  let clean = false;
  let input = "";
  
  do {
    input = prompt().toLowerCase();
    if (input === "rock" || input === "scissors"|| input === "paper") {
      clean = true;
    } else {
      alert("Please enter only Rock/Paper/Scissors");
      input = "";
    }
  } while (!clean);

  return input;
}

function displayScore (display, text) {
  display.innerText = text;
}

const display = document.querySelector("#results");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener(
    'click',
    function (e) {
      displayScore(
        display,
        playRound(this.innerText.toLowerCase(), getComputerChoice()));
    }
  )});

function game () {
  greet();
}

game();