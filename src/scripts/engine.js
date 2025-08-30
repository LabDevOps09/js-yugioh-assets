let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["ataque", "defesa", "magia"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("player-choice").innerText = "Você jogou: " + playerChoice;
  document.getElementById("computer-choice").innerText = "Computador jogou: " + computerChoice;

  let result = "";

  if (playerChoice === computerChoice) {
    result = "Empate! 🌙";
  } else if (
    (playerChoice === "ataque" && computerChoice === "magia") ||
    (playerChoice === "magia" && computerChoice === "defesa") ||
    (playerChoice === "defesa" && computerChoice === "ataque")
  ) {
    result = "Você venceu! 🌸";
    playerScore++;
  } else {
    result = "Computador venceu! 💀";
    computerScore++;
  }

  document.getElementById("winner").innerText = result;
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("computer-score").innerText = computerScore;
}
