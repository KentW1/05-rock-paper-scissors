// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

// Choose a random move for the computer
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play one round and display choices on the page
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let resultText = "";

  if (playerChoice === computerChoice) {
    resultText = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    resultText = "You win!";
  } else {
    resultText = "Computer wins!";
  }

  resultDiv.textContent =
    "You chose: " + playerChoice + ". Computer chose: " + computerChoice + ". " + resultText;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  playRound("Rock");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  playRound("Paper");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  playRound("Scissors");
});