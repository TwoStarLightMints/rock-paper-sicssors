function getComputerChoice () {
  // Randomly returns either 'Rock', 'Paper', or 'Scissors'
  let choice = Math.floor(Math.random() * 3);
  let choices = ['Rock', 'Paper', 'Scissors'];
  return choices[choice];
}

function playRound (playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();

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

function getCleanInput () {
  let clean = false;
  let input = "";
  
  do {
    input = prompt().toLowerCase();
    if (input === "rock" || input === "scissors"|| input === "paper") {
      clean = true;
    }
  } while (clean);
}

function game () {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getCleanInput(), getComputerChoice()));
  }
}

game();