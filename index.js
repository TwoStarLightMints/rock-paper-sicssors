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

  }
}

// Paper beats rock, rock beats scissors, scissors beats paper
// The same item makes a draw